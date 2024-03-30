// define an interface for the structure of the Hearthstone card data

// export interface HearthstoneCard {
// 	id: number;
// 	collectible: number;
// 	slug: string;
// 	classId: number;
// 	multiClassIds: number[];
// 	minionTypeId?: number;
// 	cardTypeId: number;
// 	cardSetId: number;
// 	rarityId?: number;
// 	artistName?: string;
// 	health: number;
// 	attack: number;
// 	manaCost: number;
// 	name: string;
// 	text: string;
// 	image: string;
// 	imageGold: string;
// 	flavorText?: string;
// 	cropImage?: string;
// 	childIds?: number[];
// 	keywordIds?: number[];
// 	isZilliaxFunctionalModule: boolean;
// 	isZilliaxCosmeticModule: boolean;
// 	battlegrounds: {
// 	  tier: number;
// 	  hero: boolean;
// 	  quest: boolean;
// 	  reward: boolean;
// 	  upgradeId: number;
// 	  image: string;
// 	  imageGold: string;
// 	};
//   }

  export interface HearthstoneCard {
    techLevel: number;
	id: string;
    dbfId: number;
    name: string;
    text: string;
    flavor: string;
    artist: string;
    attack: number;
    cardClass: string;
    collectible: boolean;
    cost: number;
    elite: boolean;
    faction: string;
    health: number;
    mechanics: string[];
    rarity: string;
    set: string;
    type: string;
	isBattlegroundsPoolMinion: boolean;
  }