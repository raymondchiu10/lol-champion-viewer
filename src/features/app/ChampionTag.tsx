import { TChampionTag } from "../../api/types_champion";

export interface IProps {
	tags: TChampionTag;
}

const ChampionTag = (props: IProps) => {
	const { tags } = props;

	return (
		<aside className="champion-tag">
			{tags?.map((item) => {
				const color: string = item.toLowerCase();

				return (
					<label
						className={`border champion-tag_${color}`}
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
