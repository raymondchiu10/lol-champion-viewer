import {
	ChangeEvent,
	Dispatch,
	SetStateAction,
} from "react";

interface IProps {
	label?: string;
	name?: string;
	onFocus?: () => void;
	onBlur?: () => void;
	value: string;
	setValue: Dispatch<SetStateAction<string>>;
}

const LOLSearchInput = (props: IProps) => {

	const inputHelper = (e: ChangeEvent<HTMLInputElement>) => {
		const tempVal = e.target.value;
		props.setValue(tempVal);
	}

	return (
		<div className="lol-search-input">
			{props.label &&
				<label htmlFor={props.name || "champion search"}>
					{props.label}
				</label>
			}

			<div className="lol-search-input_container">
				<input
					onFocus={props.onFocus}
					name={props.name || "champion search"}
					value={props.value}
					onChange={inputHelper}
					placeholder="Enter search here"
				/>
			</div>
		</div>
	);
};

export default LOLSearchInput;
