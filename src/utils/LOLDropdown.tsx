import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { Champion } from "../api/types_champion";

export interface IDropdownOptions {
	label: string;
	value: unknown;
}

interface IProps {
	label?: string;
	name?: string;
	options: Array<IDropdownOptions>;
	value: Champion | undefined;
	setValue: Dispatch<SetStateAction<Champion | undefined>>;
}

const LOLDropdown = (props: IProps) => {
	function inputOnChange(e: ChangeEvent<HTMLSelectElement>): void {
		const selected = props.options.find((c) => c.label === e.target.value);
		props.setValue(selected?.value as Champion);
	}
	return (
		<div className="lol-dropdown">
			<label htmlFor={props.name || "champions"}>
				{props.label || `Choose a Champion:`}
			</label>

			<div>
				<select
					id={props.name || "champions"}
					onChange={inputOnChange}
					defaultValue=""
				>
					<option disabled value="">
						Champion
					</option>
					{props.options.map((item: IDropdownOptions) => {
						return (
							<option key={item.label} value={item.label}>
								{item.label}
							</option>
						);
					})}
				</select>
			</div>
		</div>
	);
};

export default LOLDropdown;
