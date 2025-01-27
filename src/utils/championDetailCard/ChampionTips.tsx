interface IProps {
	type: "allytips" | "enemytips";
	tip: string;
}

const ChampionTips = (props: IProps) => {
	const { type, tip } = props;
	return <li className={`champion-tips__container_${type}`}>{tip}</li>;
};

export default ChampionTips;
