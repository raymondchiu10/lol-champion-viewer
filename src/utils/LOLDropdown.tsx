import {
	ChangeEvent,
	Dispatch,
	SetStateAction,
	useEffect,
	useRef,
	useState,
} from "react";
import { Champion } from "../api/types_champion";

export interface IDropdownOptions {
	label: string;
	value: Champion;
}

interface IProps {
	label?: string;
	name?: string;
	onFocus?: () => void;
	onBlur?: () => void;
	options: Array<IDropdownOptions>;
	value: Champion | undefined;
	setValue: Dispatch<SetStateAction<Champion | undefined>>;
}

const LOLDropdown = (props: IProps) => {
	const [isFocused, setIsFocused] = useState<boolean>(false);

	const selectRef = useRef<HTMLSelectElement>(null);

	useEffect(() => {
		const checkFocus = () => {
			if (selectRef.current === document.activeElement) {
				setIsFocused(true);
			} else {
				setIsFocused(false);
			}
		};

		checkFocus();

		const handleFocus = () => setIsFocused(true);
		const handleBlur = () => setIsFocused(false);

		const currentRef = selectRef.current;
		if (currentRef) {
			currentRef.addEventListener("focus", handleFocus);
			currentRef.addEventListener("blur", handleBlur);
		}

		return () => {
			if (currentRef) {
				currentRef.removeEventListener("focus", handleFocus);
				currentRef.removeEventListener("blur", handleBlur);
			}
		};
	}, []);

	const inputOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const selected = props.options.find((c) => c.label === e.target.value);
		props.setValue(selected?.value as Champion);
	};

	return (
		<div className="lol-dropdown">
			<label htmlFor={props.name || "champions"}>
				{props.label || `Choose a Champion:`}
			</label>

			<div className="lol-dropdown__wrapper">
				<select
					onFocus={props.onFocus}
					onBlur={props.onBlur}
					ref={selectRef}
					id={props.name || "champions"}
					onChange={inputOnChange}
					defaultValue=""
					size={isFocused ? 12 : 1}
				>
					<option value="">All Champions</option>
					{props.options.map((item: IDropdownOptions) => {
						return (
							<option key={item.label} value={item.label}>
								{item.value.name}
							</option>
						);
					})}
				</select>
			</div>
		</div>
	);
};

export default LOLDropdown;
