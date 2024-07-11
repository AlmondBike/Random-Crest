import RandomTeams from '../../random-teams';

export class RandomCestTeams extends RandomTeams {
	getCrestMon() {
		const poke: RandomTeamsTypes.RandomSet = {
			name: "name",
			species: "name",
			gender: "F",
			item: "upgrade",
			ability: "None",
			role: "",
			moves: ["", "", "", ""],
			evs: {hp: 85, atk: 85, def: 85, spa: 85, spd: 85, spe: 85},
			ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
			// nature: nature,
			level: 100,
			happiness: 255,
			shiny: this.randomChance(1, 1024),
		};

		const crestMons = ["Ariados", "Bastiodon", "Beheeyem", "Castform", "Cherrim", "Claydol", "Cofagrigus", "Darmanitan",
						  "Dedenne", "Dusknoir", "Empoleon", "Fearow", "Feraligatr", "Glaceon", "Hypno", "Infernape", "Leafeon",
						  "Ledian", "Magcargo", "Meganium", "Oricorio", "Rampardos", "Relicanth", "Seviper", "Skuntank", "Spiritomb",
						  "Stantler", "Torterra", "Typhlosion", "Whiscash", "Zangoose"];

		const Oricorio = ["Oricorio", "Oricorio-Pom-Pom", "Oricorio-Pa'u", "Oricorio-Sensu"];

		let crestMon = crestMons[this.random(0, crestMons.length)];
		if (crestMon === "Oricorio") {
			crestMon = Oricorio[this.random(0, Oricorio.length)];
		}
		const species = this.dex.species.get(crestMon);

		poke.name = species.baseSpecies;
		poke.species = species.name;
		poke.gender = species.gender;
		// poke.item = "upgrade";

		switch (crestMon) {
		case "Ariados":
			poke.ability = "Sniper";
			poke.moves[0] = this.random(0, 2) === 0 ? "poisonjab" : "swords dance";
			poke.moves[1] = "megahorn";
			poke.moves[2] = (this.random(0, 3) === 0 ? "toxicspikes" :
				(this.random(0, 2) === 0 ? "toxicthread" : "stickyweb"));
			poke.moves[3] = this.random(0, 2) === 0 ? "shadowsneak" : "suckerpunch";
			poke.level = 88;
			break;
		case "Bastiodon":
			poke.ability = "Sturdy";
			if (this.random(0, 2) === 0) {
				poke.moves[0] = "ironhead";
				poke.moves[1] = "curse";
				poke.moves[2] = this.random(0, 2) === 0 ? "taunt" : "metalburst";
				poke.moves[3] = this.random(0, 2) === 0 ? "earthquake" : "stoneedge";
			} else {
				poke.moves[0] = "stealthrock";
				poke.moves[1] = "metalburst";
				poke.moves[2] = "toxic";
				poke.moves[3] = this.random(0, 2) === 0 ? "protect" : "earthquake";
			}
			poke.level = 89;
			break;
		case "Beheeyem":
			poke.ability = "Analytic";
			poke.moves[0] = this.random(0, 2) === 0 ? "nastyplot" : "calmmind";
			poke.moves[1] = this.random(0, 2) === 0 ? "thunderbolt" : "thunderwave";
			poke.moves[2] = this.random(0, 2) === 0 ? "psychic" : "psyshock";
			poke.moves[3] = this.random(0, 2) === 0 ? "energyball" : "signalbeam";
			poke.level = 87;
			break;
		case "Castform":
			poke.ability = "Forecast";
			switch (this.random(0, 4)) {
			case 0:
				poke.moves[0] = "sunnyday";
				poke.moves[1] = "weatherball";
				poke.moves[2] = "solarbeam";
				poke.moves[3] = "icebeam";
				poke.level = 83;
				break;
			case 1:
				poke.moves[0] = "raindance";
				poke.moves[1] = "weatherball";
				poke.moves[2] = "thunder";
				poke.moves[3] = "hurricane";
				poke.level = 83;
				break;
			case 2:
				poke.moves[0] = "sandstorm";
				poke.moves[1] = "weatherball";
				poke.moves[2] = this.random(0, 2) === 0 ? "thunderbolt" : "fireblast";
				poke.moves[3] = this.random(0, 2) === 0 ? "energyball	" : "icebeam";
				poke.level = 86;
				break;
			default:
				poke.moves[0] = "hail";
				poke.moves[1] = "blizzard";
				poke.moves[2] = "thunderbolt";
				poke.moves[3] = "fireblast";
				poke.level = 83;
				break;
			}
			break;
		case "Cherrim":
			poke.ability = "Flower Gift";
			poke.moves[0] = "gigadrain";
			poke.moves[1] = "drainingkiss";
			poke.moves[2] = this.random(0, 2) === 0 ? "growth" : "sunnyday";
			poke.moves[3] = poke.moves[2] === "growth" ? "healing wish" : "weatherball";
			poke.level = 89;
			break;
		case "Claydol":
			poke.ability = "Levitate";
			switch (this.random(0, 3)) {
			case 0:
				poke.moves[0] = this.random(0, 2) === 0 ? "earthpower" : "psychic";
				poke.moves[1] = this.random(0, 2) === 0 ? "hyperbeam" : "solarbeam";
				poke.moves[2] = "irondefense";
				poke.moves[3] = "rapidspin";
				break;
			case 1:
				poke.moves[0] = "cosmicpower";
				poke.moves[1] = this.random(0, 2) === 0 ? "icebeam" : "rapidspin";
				poke.moves[2] = "earthpower";
				poke.moves[3] = this.random(0, 2) === 0 ? "psyshock" : "toxic";
				break;
			default:
				poke.moves[0] = "solarbeam";
				poke.moves[1] = "hyperbeam";
				poke.moves[2] = "psychic";
				poke.moves[3] = "signalbeam";
				break;
			}
			poke.level = 85;
			break;
		case "Cofagrigus":
			poke.ability = "Mummy";
			poke.moves[0] = this.random(0, 2) === 0 ? "nastyplot" : "calmmind";
			poke.moves[1] = "shadowball";
			poke.moves[2] = "hiddenpowerfighting";
			poke.moves[3] = "painsplit";
			poke.level = 86;
			break;
		case "Darmanitan":
			poke.ability = "Sheer Force";
			poke.moves[0] = this.random(0, 2) === 0 ? "fireblast" : "flamethrower";
			poke.moves[1] = "psychic";
			poke.moves[2] = this.random(0, 2) === 0 ? "focusblast" : "grassknot";
			poke.moves[3] = (this.random(0, 3) === 0 ? "uturn" :
				(this.random(0, 2) === 0 ? "overheat" : "workup"));
			poke.level = 81;
			break;
		case "Dedenne":
			poke.ability = "Cheek Pouch";
			poke.moves[0] = this.random(0, 2) === 0 ? "voltswitch" : "thunderbolt";
			poke.moves[1] = "hiddenpowerice";
			poke.moves[2] = "playrough";
			poke.moves[3] = "grassknot";
			poke.level = 89;
			break;
		case "Dusknoir":
			poke.ability = "Pressure";
			poke.moves[0] = this.random(0, 2) === 0 ? "poltergeist" : "shadowpunch";
			poke.moves[1] = (this.random(0, 3) === 0 ? "firepunch" :
				(this.random(0, 2) === 0 ? "bulldoze" : "poweruppunch"));
			poke.moves[2] = this.random(0, 2) === 0 ? "thunderpunch" : "icepunch";
			poke.moves[3] = "shadowsneak";
			poke.level = 89;
			break;
		case "Empoleon":
			if (this.random(0, 2) < 1) {
				poke.ability = "Defiant";
				poke.moves[0] = "defog";
				poke.moves[1] = "scald";
				poke.moves[2] = "icebeam";
				poke.moves[3] = "protect";
			} else {
				poke.ability = "Torrent";
				poke.moves[0] = this.random(0, 2) === 0 ? "earthquake" : "knockoff";
				poke.moves[1] = this.random(0, 2) === 0 ? "liquidation" : "aquajet";
				poke.moves[2] = this.random(0, 2) === 0 ? "drillpeck" : "icebeam";
				poke.moves[3] = this.random(0, 2) === 0 ? "agility" : "swordsdance";
			}
			poke.level = 82;
			break;
		case "Fearow":
			poke.ability = "Sniper";
			if (this.random(0, 2) === 0) {
				poke.moves[0] = "curse";
				poke.moves[1] = "drillpeck";
				poke.moves[2] = "drillrun";
				poke.moves[3] = "agility";
			} else {
				poke.moves[0] = this.random(0, 2) === 0 ? "drillrun" : "pursuit";
				poke.moves[1] = this.random(0, 2) === 0 ? "bravebird" : "drillpeck";
				poke.moves[2] = "uturn";
				poke.moves[3] = this.random(0, 2) === 0 ? "return" : "quickattack";
			}
			poke.level = 88;
			poke.happiness = 255;
			break;
		case "Feraligatr":
			poke.ability = "Sheer Force";
			poke.moves[0] = "liquidation";
			poke.moves[1] = this.random(0, 2) === 0 ? "crunch" : "earthquake";
			poke.moves[2] = "icefang";
			poke.moves[3] = this.random(0, 2) === 0 ? "dragondance" : "swordsdance";
			poke.level = 82;
			break;
		case "Glaceon":
			poke.ability = "Snow Cloak";
			if (this.random(0, 2) === 0) {
				poke.moves[0] = "freezedry";
				poke.moves[1] = this.random(0, 2) === 0 ? "icebeam" : "blizzard";
				poke.moves[2] = "shadowball";
				poke.moves[3] = "hiddenpowerfire";
			} else {
				poke.moves[0] = "wish";
				poke.moves[1] = "protect";
				poke.moves[2] = this.random(0, 2) === 0 ? "freezedry" : "icebeam";
				poke.moves[3] = (this.random(0, 3) === 0 ? "hiddenpowerfire" :
					(this.random(0, 2) === 0 ? "shadowball" : "toxic"));
			}
			poke.level = 90;
			break;
		case "Hypno":
			poke.ability = "Inner Focus";
			poke.moves[0] = "hypnosis";
			poke.moves[1] = this.random(0, 2) === 0 ? "focusblast" : "dazzlinggleam";
			poke.moves[2] = "psychic";
			poke.moves[3] = this.random(0, 2) === 0 ? "nastyplot" : "calmmind";
			poke.level = 87;
			break;
		case "Infernape":
			poke.ability = "Blaze";
			poke.moves[0] = this.random(0, 2) === 0 ? "workup" : "uturn";
			poke.moves[1] = "slackoff";
			poke.moves[2] = poke.moves[0] === "workup" ?
				(this.random(0, 2) === 0 ? "blazekick" : "brickbreak") : "stealthrock";
			poke.moves[3] = poke.moves[0] === "uturn" ?
				(this.random(0, 2) === 0 ? "blazekick" : "closecombat") : "willowisp";
			poke.level = 80;
			break;
		case "Leafeon":
			if (this.random(0, 2) < 1) {
				poke.ability = "Chlorophyll";
				poke.moves[0] = "leafblade";
				poke.moves[1] = "swordsdance";
				poke.moves[2] = "knockoff";
				poke.moves[3] = this.random(0, 2) === 0 ? "synthesis" : "xscissor";
			} else {
				poke.ability = "Leaf Guard";
				poke.moves[0] = "leafblade";
				poke.moves[1] = "synthesis";
				poke.moves[2] = this.random(0, 2) === 0 ? "knockoff" : "yawn";
				poke.moves[3] = this.random(0, 2) === 0 ? "leechseed" : "toxic";
			}
			poke.level = 87;
			break;
		case "Ledian":
			poke.ability = "Iron Fist";
			poke.moves[0] = this.random(0, 2) === 0 ? "poweruppunch" : "swordsdance";
			poke.moves[1] = "machpunch";
			poke.moves[2] = this.random(0, 2) === 0 ? "icepunch" : "thunderpunch";
			poke.moves[3] = this.random(0, 2) === 0 ? "drainpunch" : "focuspunch";
			poke.level = 84;
			break;
		case "Magcargo":
			poke.ability = "Magma Armor";
			poke.moves[0] = "fireblast";
			poke.moves[1] = "earthpower";
			poke.moves[2] = this.random(0, 2) === 0 ? "hiddenpowergrass" : "yawn";
			poke.moves[3] = "shellsmash";
			poke.level = 91;
			break;
		case "Meganium":
			poke.ability = "Overgrow";
			poke.moves[0] = "lightscreen";
			poke.moves[1] = "reflect";
			poke.moves[2] = this.random(0, 2) === 0 ? "leechseed" : "toxic";
			poke.moves[3] = this.random(0, 2) === 0 ? "gigadrain" : "dragontail";
			poke.level = 90;
			break;
		case "Oricorio":
		case "Oricorio-Pom-Pom":
		case "Oricorio-Pa'u":
		case "Oricorio-Sensu":
			poke.ability = "Dancer";
			poke.moves[0] = "calmmind";
			poke.moves[1] = "roost";
			poke.moves[2] = "revelationdance";
			poke.moves[3] = "hurricane";
			poke.level = 86;
			break;
		case "Rampardos":
			if (this.random(0, 2) < 1) {
				poke.ability = "Sheer Force";
				poke.moves[0] = "rockpolish";
				poke.moves[1] = this.random(0, 2) === 0 ? "firepunch" : "earthquake";
				poke.moves[2] = "rockslide";
				poke.moves[3] = (this.random(0, 3) === 0 ? "ironhead" :
					(this.random(0, 2) === 0 ? "icebeam" : "thunderpunch"));
			} else {
				poke.ability = "Mold Breaker";
				poke.moves[0] = "headsmash";
				poke.moves[1] = this.random(0, 2) === 0 ? "earthquake" : "ironhead";
				poke.moves[2] = "swordsdance";
				poke.moves[3] = this.random(0, 2) === 0 ? "firepunch" : "avalanche";
			}
			poke.level = 89;
			break;
		case "Relicanth":
			if (this.random(0, 2) < 1) {
				poke.ability = "Rock Head";
				poke.moves[0] = "headsmash";
				poke.moves[1] = "liquidation";
				poke.moves[2] = this.random(0, 2) === 0 ? "earthquake" : "icebeam";
				poke.moves[3] = "raindance";
			} else {
				poke.ability = "Swift Swim";
				poke.moves[0] = "stoneedge";
				poke.moves[1] = "stealthrock";
				poke.moves[2] = this.random(0, 2) === 0 ? "earthquake" : "icebeam";
				poke.moves[3] = this.random(0, 2) === 0 ? "liquidation" : "yawn";
			}
			poke.level = 92;
			break;
		case "Seviper":
			poke.ability = "Shed Skin";
			poke.moves[0] = this.random(0, 2) === 0 ? "earthquake" : "gigadrain";
			poke.moves[1] = this.random(0, 2) === 0 ? "fireblast" : "thunderbolt";
			poke.moves[2] = this.random(0, 2) === 0 ? "gunkshot" : "poisonjab";
			poke.moves[3] = (this.random(0, 3) === 0 ? "suckerpunch" :
				(this.random(0, 2) === 0 ? "knockoff" : "taunt"));
			poke.level = 85;
			break;
		case "Skuntank":
			poke.ability = "Stench";
			poke.moves[0] = "poisonjab";
			poke.moves[1] = "suckerpunch";
			poke.moves[2] = "defog";
			poke.moves[3] = this.random(0, 2) === 0 ? "fireblast" : "flamethrower";
			poke.level = 84;
			break;
		case "Spiritomb":
			poke.ability = "Infiltrator";
			poke.moves[0] = this.random(0, 2) === 0 ? "shadowsneak" : "suckerpunch";
			poke.moves[1] = "poltergeist";
			poke.moves[2] = this.random(0, 2) === 0 ? "painsplit" : "willowisp";
			poke.moves[3] = (this.random(0, 3) === 0 ? "psychic" :
				(this.random(0, 2) === 0 ? "pursuit" : "burningjealousy"));
			poke.level = 85;
			break;
		case "Stantler":
			poke.ability = "Intimidate";
			poke.moves[0] = "hypnosis";
			poke.moves[1] = "frustration";
			poke.moves[2] = "earthquake";
			poke.moves[3] = this.random(0, 2) === 0 ? "irontail" : "megahorn";
			poke.level = 85;
			poke.happiness = 0;
			break;
		case "Torterra":
			if (this.random(0, 2) < 1) {
				poke.ability = "Shell Armor";
				poke.moves[0] = "stealthrock";
				poke.moves[1] = "earthquake";
				poke.moves[2] = "gigadrain";
				poke.moves[3] = "synthesis";
			} else {
				poke.ability = "Overgrow";
				poke.moves[0] = "earthquake";
				poke.moves[1] = "woodhammer";
				poke.moves[2] = "stoneedge";
				poke.moves[3] = "swordsdance";
			}
			poke.level = 84;
			break;
		case "Typhlosion":
			poke.ability = "Flash Fire";
			poke.moves[0] = "earthquake";
			poke.moves[1] = this.random(0, 2) === 0 ? "eruption" : "fireblast";
			poke.moves[2] = this.random(0, 2) === 0 ? "thunderpunch" : "rockslide";
			poke.moves[3] = (this.random(0, 3) === 0 ? "extrasensory" :
				(this.random(0, 2) === 0 ? "shadowclaw" : "willowisp"));
			poke.level = 86;
			break;
		case "Whiscash":
			if (this.random(0, 2) < 1) {
				poke.ability = "Hydration";
				poke.moves[0] = "earthquake";
				poke.moves[1] = this.random(0, 2) === 0 ? "whirlpool" : "scald";
				poke.moves[2] = "rest";
				poke.moves[3] = "toxic";
			} else {
				poke.ability = "Oblivious";
				poke.moves[0] = "dragondance";
				poke.moves[1] = "waterfall";
				poke.moves[2] = "earthquake";
				poke.moves[3] = this.random(0, 2) === 0 ? "zenheadbutt" : "stoneedge";
			}
			poke.level = 89;
			break;
		case "Zangoose":
			poke.ability = "Toxic Boost";
			poke.moves[0] = "facade";
			poke.moves[1] = this.random(0, 2) === 0 ? "knockoff" : "quickattack";
			poke.moves[2] = this.random(0, 2) === 0 ? "closecombat" : "firepunch";
			poke.moves[3] = this.random(0, 2) === 0 ? "swordsdance" : "taunt";
			poke.level = 86;
			break;
		}

		return poke;
		// 4-91
		// 5-90
		// 6-89
		// 7-89
		// 8-88
		// 9-87
		// 10-86
		// 11-85
		// 12-84
		// 13-83
		// 14-82
		// 15-81
		// 16-80
		// 17-80
	}

	getEeveeTeam(pokemon: RandomTeamsTypes.RandomSet[]) {
		const types = ["Bug", "Dark", "Dragon", "Electric", "Fairy", "Fire", "Fighting", "Flying", "Ghost", "Grass",
					   "Ground", "Ice", "Normal", "Poison", "Psychic", "Rock", "Steel", "Water"];

					   const selected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

		let numNeeded = 6;

		const manditoryTank = [1, 13, 15, 16];
		const manTank = manditoryTank[this.random(0, manditoryTank.length)];
		selected.splice(manTank, 1);
		numNeeded -= 1;

		const manditoryClear = [7, 16];
		let manClear = -1;
		if (manTank !== 16) {
			manClear = manditoryClear[this.random(0, manditoryClear.length)];
			selected.splice(selected.indexOf(manClear), 1);
			numNeeded -= 1;
		}

		const manditoryHaze = [8, 10, 17];
		const manHaze = manditoryHaze[this.random(0, manditoryHaze.length)];
		selected.splice(selected.indexOf(manHaze), 1);
		numNeeded -= 1;

		// if you get one, the other one shouldn't spawn for you
		const manditoryGod = [0, 2];
		const manGod = manditoryGod[this.random(0, manditoryGod.length)];
		for (const godMon of manditoryGod) {
			selected.splice(selected.indexOf(godMon), 1);
		}
		numNeeded -= 1;

		while (selected.length > numNeeded) {
			selected.splice(this.random(0, selected.length), 1);
		}

		selected.push(manTank);
		selected.push(manGod);
		if (manClear > -1) {
			selected.push(manClear);
		}
		selected.push(manHaze);

		for (let mon = 0; mon < 6; mon++) {
			const poke = {
				name: "name",
				species: "name",
				item: "upgrade",
				ability: "None",
				moves: ["", "", "", ""],
				gender: 'F',
				evs: {hp: 85, atk: 85, def: 85, spa: 85, spd: 85, spe: 85},
				ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
				// nature: nature,
				level: 100,
				happiness: 255,
				shiny: false,
			};

			switch (types[selected[mon]]) {
			case "Bug":
				if (this.random(0, 2) === 0) {
					poke.species = "alateon";
					poke.ability = "Swarm";
					poke.moves[0] = "bugbuzz";
					poke.moves[1] = "quiverdance";
					poke.moves[2] = "psyshock";
					poke.moves[3] = "substitute";
					poke.item = "leftovers";
				} else {
					poke.species = "entomeon";
					poke.ability = "compoundeyes";
					poke.moves[0] = "stickyweb";
					poke.moves[1] = "firstimpression";
					poke.moves[2] = "megahorn";
					poke.moves[3] = "superpower";
					poke.item = "lifeorb";
				}
				poke.level = 100;
				break;
			case "Dark":
				poke.species = "umbreon";
				poke.ability = "synchronize";
				poke.moves[0] = "foulplay";
				poke.moves[1] = "moonlight";
				poke.moves[2] = "toxic";
				poke.moves[3] = "healbell";
				poke.item = "leftovers";
				poke.level = 100;
				break;
			case "Dragon":
				if (this.random(0, 2) === 0) {
					poke.species = "wyrmeon";
					poke.ability = "pressure";
					poke.moves[0] = "psyshock";
					poke.moves[1] = "dracometeor";
					poke.moves[2] = "flashcannon";
					poke.moves[3] = "earthpower";
					poke.item = "dragoniumz";
				} else {
					poke.species = "draceon";
					poke.ability = "multiscale";
					poke.moves[0] = "stockpile";
					poke.moves[1] = "swallow";
					poke.moves[2] = "stompingtantrum";
					poke.moves[3] = "outrage";
					poke.item = "normaliumz";
				}
				poke.level = 100;
				break;
			case "Electric":
				poke.species = "jolteon";
				poke.ability = "voltabsorb";
				poke.moves[0] = "hiddenpowerice";
				poke.moves[1] = "thunderbolt";
				poke.moves[2] = "shadowball";
				poke.moves[3] = "voltswitch";
				poke.item = "choicespecs";
				poke.level = 100;
				break;
			case "Fairy":
				poke.species = "sylveon";
				poke.ability = "pixilate";
				poke.moves[0] = "hypervoice";
				poke.moves[1] = "hiddenpowerground";
				poke.moves[2] = "mysticalfire";
				poke.moves[3] = "shadowball";
				poke.item = "expertbelt";
				poke.level = 100;
				break;
			case "Fire":
				poke.species = "flareon";
				poke.ability = "guts";
				poke.moves[0] = "facade";
				poke.moves[1] = "quickattack";
				poke.moves[2] = "flareblitz";
				poke.moves[3] = "superpower";
				poke.item = "toxicorb";
				poke.level = 100;
				break;
			case "Fighting":
				poke.species = "lucheon";
				poke.ability = "ironfist";
				poke.moves[0] = "knockoff";
				poke.moves[1] = "icepunch";
				poke.moves[2] = "poweruppunch";
				poke.moves[3] = "drillrun";
				poke.item = "lifeorb";
				poke.level = 100;
				break;
			case "Flying":
				poke.species = "breezeon";
				poke.ability = "galewings";
				poke.moves[0] = "tailwind";
				poke.moves[1] = "defog";
				poke.moves[2] = "dualwingbeat";
				poke.moves[3] = "roost";
				poke.item = "heavydutyboots";
				poke.level = 100;
				break;
			case "Ghost":
				poke.species = "spectreon";
				poke.ability = "infiltrator";
				poke.moves[0] = "poltergeist";
				poke.moves[1] = "shadowsneak";
				poke.moves[2] = "icepunch";
				poke.moves[3] = "haze";
				poke.item = "choicescarf";
				poke.level = 100;
				break;
			case "Grass":
				poke.species = "leafeon";
				poke.ability = "typesync";
				poke.moves[0] = "return";
				poke.moves[1] = "swordsdance";
				poke.moves[2] = "knockoff";
				poke.moves[3] = "quickattack";
				poke.item = "lifeorb";
				poke.level = 100;
				break;
			case "Ground":
				poke.species = "terreon";
				poke.ability = "typesync";
				poke.moves[0] = "spikes";
				poke.moves[1] = "haze";
				poke.moves[2] = "hypervoice";
				poke.moves[3] = "heatwave";
				poke.item = "lifeorb";
				poke.level = 100;
				break;
			case "Ice":
				poke.species = "glaceon";
				poke.ability = "typesync";
				poke.moves[0] = "freezedry";
				poke.moves[1] = "signalbeam";
				poke.moves[2] = "hypervoice";
				poke.moves[3] = "hiddenpowerground";
				poke.item = "lifeorb";
				poke.level = 100;
				break;
			case "Normal":
				poke.species = "eevoluteon";
				poke.ability = "protean";
				poke.moves[0] = "extremespeed";
				poke.moves[1] = "wish";
				poke.moves[2] = "stompingtantrum";
				poke.moves[3] = "tripleaxel";
				poke.item = "eviolite";
				poke.level = 100;
				break;
			case "Poison":
				poke.species = "toxeon";
				poke.ability = "corrosion";
				poke.moves[0] = "venoshock";
				poke.moves[1] = "toxic";
				poke.moves[2] = "flipturn";
				poke.moves[3] = "foulplay";
				poke.item = "blacksludge";
				poke.level = 100;
				break;
			case "Psychic":
				poke.species = "espeon";
				poke.ability = "magicbounce";
				poke.moves[0] = "reflect";
				poke.moves[1] = "lightscreen";
				poke.moves[2] = "psyshock";
				poke.moves[3] = "dazzlinggleam";
				poke.item = "lightclay";
				poke.level = 100;
				break;
			case "Rock":
				poke.species = "petreon";
				poke.ability = "dryskin";
				poke.moves[0] = "foulplay";
				poke.moves[1] = "stealthrock";
				poke.moves[2] = "wish";
				poke.moves[3] = "protect";
				poke.item = "leftovers";
				poke.level = 100;
				poke.shiny = this.randomChance(1, 64);
				break;
			case "Steel":
				poke.species = "metaleon";
				poke.ability = "battlearmor";
				poke.moves[0] = "wish";
				poke.moves[1] = "irondefense";
				poke.moves[2] = "bodypress";
				poke.moves[3] = "rapidspin";
				poke.item = "leftovers";
				poke.level = 100;
				break;
			case "Water":
				poke.species = "vaporeon";
				poke.ability = "waterabsorb";
				poke.moves[0] = "scald";
				poke.moves[1] = "haze";
				poke.moves[2] = "flipturn";
				poke.moves[3] = "wish";
				poke.item = "leftovers";
				poke.level = 100;
				break;
			default:
				poke.species = "eevee";
				poke.ability = "adaptability";
				poke.name = "Should not appear";
				poke.moves[0] = "batonpass";
				poke.moves[1] = "protect";
				poke.moves[2] = "yawn";
				poke.moves[3] = "lastresort";
				poke.item = "eeviumz";
				poke.level = 100;
				break;
			}

			const species = this.dex.species.get(poke.species);
			poke.name = species.baseSpecies;
			poke.species = species.name;
			poke.gender = species.gender === "" ?
						 (this.randomChance(1, species.genderRatio['M'] * 100) ? 'M' : 'F') : species.gender;
			pokemon.push(poke);
		}
	}

	randomCrestMonTeam() {
		this.enforceNoDirectCustomBanlistChanges();
		if (this.maxTeamSize === 6 && this.format.name.includes("Eevee")) {
			const pokemon: RandomTeamsTypes.RandomSet[] = [];

			this.getEeveeTeam(pokemon);

			return pokemon;
		}

		const seed = this.prng.seed;
		const ruleTable = this.dex.formats.getRuleTable(this.format);
		const pokemon: RandomTeamsTypes.RandomSet[] = [];

		// For Monotype
		const isMonotype = !!this.forceMonotype || ruleTable.has('sametypeclause');
		const isDoubles = this.format.gameType !== 'singles';
		const typePool = this.dex.types.names().filter(name => name !== "Stellar");
		const type = this.forceMonotype || this.sample(typePool);

		// PotD stuff
		const usePotD = global.Config && Config.potd && ruleTable.has('potd');
		const potd = usePotD ? this.dex.species.get(Config.potd) : null;
		const baseFormes: {[k: string]: number} = {};

		const typeCount: {[k: string]: number} = {};
		const typeComboCount: {[k: string]: number} = {};
		const typeWeaknesses: {[k: string]: number} = {};
		const teamDetails: RandomTeamsTypes.TeamDetails = {};
		

		/** Pokemon who should never be in the lead slot */
		const NO_LEAD_POKEMON = [
			'Iron Boulder', 'Slither Wing', 'Zacian', 'Zamazenta',
		];
		const DOUBLES_NO_LEAD_POKEMON = [
			'Basculegion', 'Houndstone', 'Roaring Moon', 'Zacian', 'Zamazenta',
		];

		let numMaxLevelPokemon = 0;

		const pokemonList = isDoubles ? Object.keys(this.randomDoublesSets) : Object.keys(this.randomSets);
		const [pokemonPool, baseSpeciesPool] = this.getPokemonPool(type, pokemon, isMonotype, pokemonList);

		let leadsRemaining = this.format.gameType === 'doubles' ? 2 : 1;
		while (baseSpeciesPool.length && pokemon.length < this.maxTeamSize) {
			if (pokemon.length === 1) {
				const set: RandomTeamsTypes.RandomSet = this.getCrestMon();
				// species = this.dex.species.get(set.species);
				pokemon.push(set);

				const species = this.dex.species.getByID((set.species).toLowerCase().replace(/[^a-z0-9]+/g, '') as ID);

				baseFormes[species.baseSpecies] = 1;
				const types = species.types;
				const typeCombo = types.slice().sort().join();
				const weakToFreezeDry = (
					this.dex.getEffectiveness('Ice', species) > 0 ||
					(this.dex.getEffectiveness('Ice', species) > -2 && types.includes('Water'))
				);

				// Increment type counters
				for (const typeName of types) {
					if (typeName in typeCount) {
						typeCount[typeName]++;
					} else {
						typeCount[typeName] = 1;
					}
				}
				if (typeCombo in typeComboCount) {
					typeComboCount[typeCombo]++;
				} else {
					typeComboCount[typeCombo] = 1;
				}

				// Increment weakness counter
				for (const typeName of this.dex.types.names()) {
					// it's weak to the type
					if (this.dex.getEffectiveness(typeName, species) > 0) {
						typeWeaknesses[typeName]++;
					}
				}
				if (weakToFreezeDry) typeWeaknesses['Freeze-Dry']++;

				// Increment level 100 counter
				if (set.level === 100) numMaxLevelPokemon++;

				// Track what the team has
				if (set.ability === 'Drizzle' || set.moves.includes('raindance')) teamDetails.rain = 1;
				if (set.ability === 'Drought' || set.ability === 'Orichalcum Pulse' || set.moves.includes('sunnyday')) {
					teamDetails.sun = 1;
				}
				if (set.ability === 'Sand Stream') teamDetails.sand = 1;
				if (set.ability === 'Snow Warning' || set.moves.includes('snowscape') || set.moves.includes('hail') || set.moves.includes('chillyreception')) {
					teamDetails.snow = 1;
				}
				if (set.moves.includes('spikes') || set.moves.includes('ceaselessedge')) {
					teamDetails.spikes = (teamDetails.spikes || 0) + 1;
				}
				if (set.moves.includes('toxicspikes') || set.ability === 'Toxic Debris') {
					teamDetails.toxicSpikes = (teamDetails.toxicSpikes || 0) + 1;
				}
				if (set.moves.includes('stealthrock') || set.moves.includes('stoneaxe')) teamDetails.stealthRock = 1;
				if (set.moves.includes('stickyweb')) teamDetails.stickyWeb = 1;
				if (set.moves.includes('defog')) teamDetails.defog = 1;
				if (set.moves.includes('rapidspin') || set.moves.includes('mortalspin')) teamDetails.rapidSpin = 1;
				if (set.moves.includes('auroraveil') || (set.moves.includes('reflect') && set.moves.includes('lightscreen'))) {
					teamDetails.screens = 1;
				}
				if (set.role === 'Tera Blast user' || species.baseSpecies === "Ogerpon" || species.baseSpecies === "Terapagos") {
					teamDetails.teraBlast = 1;
				}

				continue;
			}
			const baseSpecies = this.sampleNoReplace(baseSpeciesPool);
			let species = this.dex.species.get(this.sample(pokemonPool[baseSpecies]));
			if (!species.exists) continue;

			// Limit to one of each species (Species Clause)
			if (baseFormes[species.baseSpecies]) continue;

			// Treat Ogerpon formes and Terapagos like the Tera Blast user role; reject if team has one already
			if ((species.baseSpecies === 'Ogerpon' || species.baseSpecies === 'Terapagos') && teamDetails.teraBlast) continue;

			// Illusion shouldn't be on the last slot
			if (species.baseSpecies === 'Zoroark' && pokemon.length >= (this.maxTeamSize - 1)) continue;

			const types = species.types;
			const typeCombo = types.slice().sort().join();
			const weakToFreezeDry = (
				this.dex.getEffectiveness('Ice', species) > 0 ||
				(this.dex.getEffectiveness('Ice', species) > -2 && types.includes('Water'))
			);
			// Dynamically scale limits for different team sizes. The default and minimum value is 1.
			const limitFactor = Math.round(this.maxTeamSize / 6) || 1;

			if (!isMonotype && !this.forceMonotype) {
				let skip = false;

				// Limit two of any type
				for (const typeName of types) {
					if (typeCount[typeName] >= 2 * limitFactor) {
						skip = true;
						break;
					}
				}
				if (skip) continue;

				// Limit three weak to any type
				for (const typeName of this.dex.types.names()) {
					// it's weak to the type
					if (this.dex.getEffectiveness(typeName, species) > 0) {
						if (!typeWeaknesses[typeName]) typeWeaknesses[typeName] = 0;
						if (typeWeaknesses[typeName] >= 3 * limitFactor) {
							skip = true;
							break;
						}
					}
				}
				if (skip) continue;

				// Limit four weak to Freeze-Dry
				if (weakToFreezeDry) {
					if (!typeWeaknesses['Freeze-Dry']) typeWeaknesses['Freeze-Dry'] = 0;
					if (typeWeaknesses['Freeze-Dry'] >= 4 * limitFactor) continue;
				}

				// Limit one level 100 Pokemon
				if (!this.adjustLevel && (this.getLevel(species, isDoubles) === 100) && numMaxLevelPokemon >= limitFactor) {
					continue;
				}
			}

			// Limit three of any type combination in Monotype
			if (!this.forceMonotype && isMonotype && (typeComboCount[typeCombo] >= 3 * limitFactor)) continue;

			// The Pokemon of the Day
			if (potd?.exists && (pokemon.length === 1 || this.maxTeamSize === 1)) species = potd;

			let set: RandomTeamsTypes.RandomSet;

			if (leadsRemaining) {
				if (
					isDoubles && DOUBLES_NO_LEAD_POKEMON.includes(species.baseSpecies) ||
					!isDoubles && NO_LEAD_POKEMON.includes(species.baseSpecies)
				) {
					if (pokemon.length + leadsRemaining === this.maxTeamSize) continue;
					set = this.randomSet(species, teamDetails, false, isDoubles);
					pokemon.push(set);
				} else {
					set = this.randomSet(species, teamDetails, true, isDoubles);
					pokemon.unshift(set);
					leadsRemaining--;
				}
			} else {
				set = this.randomSet(species, teamDetails, false, isDoubles);
				pokemon.push(set);
			}

			// Don't bother tracking details for the last Pokemon
			if (pokemon.length === this.maxTeamSize) break;

			// Now that our Pokemon has passed all checks, we can increment our counters
			baseFormes[species.baseSpecies] = 1;

			// Increment type counters
			for (const typeName of types) {
				if (typeName in typeCount) {
					typeCount[typeName]++;
				} else {
					typeCount[typeName] = 1;
				}
			}
			if (typeCombo in typeComboCount) {
				typeComboCount[typeCombo]++;
			} else {
				typeComboCount[typeCombo] = 1;
			}

			// Increment weakness counter
			for (const typeName of this.dex.types.names()) {
				// it's weak to the type
				if (this.dex.getEffectiveness(typeName, species) > 0) {
					typeWeaknesses[typeName]++;
				}
			}
			if (weakToFreezeDry) typeWeaknesses['Freeze-Dry']++;

			// Increment level 100 counter
			if (set.level === 100) numMaxLevelPokemon++;

			// Track what the team has
			if (set.ability === 'Drizzle' || set.moves.includes('raindance')) teamDetails.rain = 1;
			if (set.ability === 'Drought' || set.ability === 'Orichalcum Pulse' || set.moves.includes('sunnyday')) {
				teamDetails.sun = 1;
			}
			if (set.ability === 'Sand Stream') teamDetails.sand = 1;
			if (set.ability === 'Snow Warning' || set.moves.includes('snowscape') || set.moves.includes('hail') || set.moves.includes('chillyreception')) {
				teamDetails.snow = 1;
			}
			if (set.moves.includes('spikes') || set.moves.includes('ceaselessedge')) {
				teamDetails.spikes = (teamDetails.spikes || 0) + 1;
			}
			if (set.moves.includes('toxicspikes') || set.ability === 'Toxic Debris') {
				teamDetails.toxicSpikes = (teamDetails.toxicSpikes || 0) + 1;
			}
			if (set.moves.includes('stealthrock') || set.moves.includes('stoneaxe')) teamDetails.stealthRock = 1;
			if (set.moves.includes('stickyweb')) teamDetails.stickyWeb = 1;
			if (set.moves.includes('defog')) teamDetails.defog = 1;
			if (set.moves.includes('rapidspin') || set.moves.includes('mortalspin')) teamDetails.rapidSpin = 1;
			if (set.moves.includes('auroraveil') || (set.moves.includes('reflect') && set.moves.includes('lightscreen'))) {
				teamDetails.screens = 1;
			}
			if (set.role === 'Tera Blast user' || species.baseSpecies === "Ogerpon" || species.baseSpecies === "Terapagos") {
				teamDetails.teraBlast = 1;
			}
		}
		if (pokemon.length < this.maxTeamSize && pokemon.length < 12) { // large teams sometimes cannot be built
			throw new Error(`Could not build a random team for ${this.format} (seed=${seed})`);
		}

		return pokemon;
	}
}

export default RandomCestTeams;
