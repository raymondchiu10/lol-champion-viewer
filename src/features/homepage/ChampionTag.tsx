import { TChampionTag } from "../../api/types_champion";

export interface IProps {
	tags: Array<TChampionTag>;
}

const ChampionTag = (props: IProps) => {
	const { tags } = props;
	return (
		<aside className="champion-tag">
			{tags?.map((item) => {
				const color: string = item.toLowerCase();

				return (
					<label
						className={`border champion-tag--${color}`}
						key={item}
					>
						{item}
					</label>
				);
			})}
		</aside>
	);
};

export default ChampionTag;
