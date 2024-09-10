export interface ChampionStats {
	hp: number;
	hpperlevel: number;
	mp: number;
	mpperlevel: number;
	movespeed: number;
	armor: number;
	armorperlevel: number;
	spellblock: number;
	spellblockperlevel: number;
	attackrange: number;
	hpregen: number;
	hpregenperlevel: number;
	mpregen: number;
	mpregenperlevel: number;
	crit: number;
	critperlevel: number;
	attackdamage: number;
	attackdamageperlevel: number;
	attackspeedperlevel: number;
	attackspeed: number;
}

export interface ChampionInfo {
	attack: number;
	defense: number;
	magic: number;
	difficulty: number;
}

export interface ChampionImage {
	full: string;
	sprite: string;
	group: string;
	x: number;
	y: number;
	w: number;
	h: number;
}

export type TChampionTag = "Assassin" | "Fighter" | "Mage" | "Marksman" | "Support" | "Tank";

export interface Champion {
	version: string;
	id: string;
	key: string;
	name: string;
	title: string;
	blurb: string;
	info: ChampionInfo;
	image: ChampionImage;
	tags: Array<TChampionTag>;
	partype: string;
	stats: ChampionStats;
}

export interface ChampionsData {
	[key: string]: Champion;
}
