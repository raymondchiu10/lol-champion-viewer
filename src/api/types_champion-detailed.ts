import {
	ChampionImage,
	ChampionInfo,
	ChampionStats,
	TChampionTag,
} from "./types_champion";

export interface ChampionSkin {
	id: string;
	num: number;
	name: string;
	chromas: boolean;
}

// LevelTip Interface (Used in Spells)
export interface ChampionLevelTip {
	label: string[];
	effect: string[];
}

// Spell Interface
export interface ChampionSpell {
	id: string;
	name: string;
	description: string;
	tooltip: string;
	leveltip: ChampionLevelTip;
	maxrank: number;
	cooldown: number[];
	cooldownBurn: string;
	cost: number[];
	costBurn: string;
	datavalues: object; // Placeholder for datavalues, as it's an empty object in this case
	effect: (number[] | null)[];
	effectBurn: (string | null)[];
	vars: unknown[]; // Placeholder for "vars" since it's an empty array
	costType: string;
	maxammo: string;
	range: number[];
	rangeBurn: string;
	image: ChampionImage;
	resource: string;
}

// Passive Interface
export interface ChampionPassive {
	name: string;
	description: string;
	image: ChampionImage;
}

// ChampionData Interface (Aatrox Data)
export interface DetailedChampionData {
	id: string;
	key: string;
	name: string;
	title: string;
	image: ChampionImage;
	skins: ChampionSkin[];
	lore: string;
	blurb: string;
	allytips: string[];
	enemytips: string[];
	tags: TChampionTag[];
	partype: string;
	info: ChampionInfo;
	stats: ChampionStats;
	spells: ChampionSpell[];
	passive: ChampionPassive;
	recommended: unknown[]; // Placeholder for "recommended" as it's an empty array
}

// Main Interface for the JSON File
export interface DetailedChampionResponse {
	type: string;
	format: string;
	version: string;
	data: {
		[key: string]: DetailedChampionData;
	};
}
