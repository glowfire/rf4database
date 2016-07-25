// Registration of items in the order as shown in the shipping records.
// This list contains the items listed in the fifth section.

registerItem({
	"name":"Engagement Ring",
	"sell":1,
	"ability":{
		"loveresP":50
	},
	"flavourtext":"Use it to propose to your #1 love. Be sure you also prepare a double bed! Well...after they say yes, anyway.",
	"craftinglevel":20,
	"materials":["Minerals","Jewels"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Cheap Bracelet",
	"sell":24,
	"buy":100,
	"ability":{
		"mdef":5
	},
	"flavourtext":"An old, rusty bracelet. Slightly raises magic defense.",
	"craftinglevel":5,
	"materials":["Minerals"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Bronze Bracelet",
	"sell":135,
	"buy":8500,
	"ability":{
		"mdef":35
	},
	"flavourtext":"A heavy, bronze bracelet. Raises magic defense for a little bit.",
	"craftinglevel":10,
	"materials":["Bronze","Cloths and Skins"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Silver Bracelet",
	"sell":390,
	"buy":27200,
	"ability":{
		"mdef":62
	},
	"flavourtext":"A silver bracelet. Raises magic defense.",
	"craftinglevel":25,
	"materials":["Silver","Cloths and Skins"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Gold Bracelet",
	"sell":600,
	"buy":72800,
	"ability":{
		"mdef":88
	},
	"flavourtext":"A golden bracelet. Raises magic defense quite considerably.",
	"craftinglevel":39,
	"materials":["Gold","Cloths and Skins"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Platinum Bracelet",
	"sell":1800,
	"buy":102e4,
	"ability":{
		"mdef":120
	},
	"flavourtext":"A platinum bracelet. Greatly raises magic defense.",
	"craftinglevel":50,
	"materials":["Platinum","Cloths and Skins"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Silver Ring",
	"sell":450,
	"buy":45e3,
	"ability":{
		"atr":["Light","Dark"],
		"lightresP":50,
		"darkresP":50
	},
	"flavourtext":"Beloved for its simple design, but otherwise unremarkable.",
	"craftinglevel":24,
	"materials":["Silver","Crystals"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Gold Ring",
	"sell":5200,
	"ability":{
		"atr":["Fire","Water","Earth","Wind"],
		"fireresP":15,
		"waterresP":15,
		"earthresP":15,
		"windresP":15
	},
	"flavourtext":"Beloved for its simple design. More expensive than silver.",
	"craftinglevel":63,
	"materials":["Orichalcum","Gold","Turnip's Miracle"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Platinum Ring",
	"sell":7200,
	"ability":{
		"atr":["Fire","Water","Earth","Wind","Light","Dark"],
		"fireresP":10,
		"waterresP":10,
		"earthresP":10,
		"windresP":10,
		"lightresP":25,
		"darkresP":25
	},
	"flavourtext":"Beloved for its simple design. This platinum type is rare and hard to find.",
	"craftinglevel":75,
	"materials":["Dragonic Stone","Platinum"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Shield Ring",
	"sell":320,
	"buy":68e3,
	"ability":{
		"vit":25
	},
	"flavourtext":"A ring used as a shield. Though tough, it only covers a short range. Occasionally reduces damage received to 1.",
	"craftinglevel":44,
	"materials":["Blk. Tortoise Shell","Turtle Shell","Minerals"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Critical Ring",
	"sell":750,
	"buy":65e3,
	"ability":{
		"diz":5,
		"critP":20
	},
	"flavourtext":"A ring that raises your chance of landing critical hits. Just by wearing it, you'll know right where to attack.",
	"craftinglevel":30,
	"materials":["Gold","Rigid Horn"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Silent Ring",
	"sell":2600,
	"buy":19800,
	"ability":{
		"sealresP":100
	},
	"flavourtext":"A ring that not only resists seals, but places them upon foes as well due to the medicines set into its trim.",
	"craftinglevel":29,
	"materials":["Silver","Lamp Squid"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Paralysis Ring",
	"sell":550,
	"buy":19800,
	"ability":{
		"parresP":100
	},
	"flavourtext":"A ring that not only resists paralysis, but inflicts it upon foes as well due to the medicines set into its trim.",
	"craftinglevel":28,
	"materials":["Silver","Scorpion Tail"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Poison Ring",
	"sell":480,
	"buy":19800,
	"ability":{
		"psnresP":100
	},
	"flavourtext":"A ring that not only resists poison, but inflicts it upon foes as well due to the medicines set into its trim.",
	"craftinglevel":27,
	"materials":["Silver","Poison Powder"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Magic Ring",
	"sell":1900,
	"buy":18e4,
	"ability":{
		"mdef":50
	},
	"flavourtext":"A ring imbued with magical power. Speeds up the time needed to charge.",
	"craftinglevel":51,
	"materials":["Platinum","Crystals"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Throwing Ring",
	"sell":1200,
	"ability":{
	},
	"flavourtext":"You can throw an item far away with this ring.",
	"craftinglevel":33,
	"materials":["Puppetry Strings","Minerals"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Stay-up Ring",
	"sell":1100,
	"ability":{
		"slpresP":-25,
		"ftgresP":30,
		"sickresP":30
	},
	"flavourtext":"You will no longer yawn with this ring. Hail to short sleepers!",
	"craftinglevel":46,
	"materials":["Holy Spore","Minerals"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Aquamarine Ring",
	"sell":580,
	"buy":19800,
	"ability":{
		"atr":["Water"],
		"waterresP":50
	},
	"flavourtext":"A roughly cut stone makes this ring quite attractive.",
	"craftinglevel":15,
	"materials":["Silver","Aquamarine"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Amethyst Ring",
	"sell":450,
	"buy":19800,
	"ability":{
		"atr":["Earth"],
		"earthresP":50
	},
	"flavourtext":"The elegance of the amethyst brings a calmness to the atmosphere.",
	"craftinglevel":15,
	"materials":["Silver","Amethyst"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Emerald Ring",
	"sell":850,
	"buy":19800,
	"ability":{
		"atr":["Wind"],
		"windresP":50
	},
	"flavourtext":"The bright-shining emerald beautifully adorns your finger.",
	"craftinglevel":15,
	"materials":["Silver","Emerald"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Sapphire Ring",
	"sell":1e3,
	"buy":19800,
	"ability":{
		"atr":["Light"],
		"lightresP":50
	},
	"flavourtext":"A ring with a beautifully shining inset sapphire.",
	"craftinglevel":15,
	"materials":["Silver","Sapphire"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Ruby Ring",
	"sell":900,
	"buy":19800,
	"ability":{
		"atr":["Fire"],
		"fireresP":50
	},
	"flavourtext":"A ring with a mysterious and alluring design.",
	"craftinglevel":15,
	"materials":["Silver","Ruby"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Cursed Ring",
	"sell":420,
	"buy":19800,
	"ability":{
		"atr":["dark"],
		"darkresP":50
	},
	"flavourtext":"A cursed ring with spikes that hurt your fingers.",
	"craftinglevel":15,
	"materials":["Silver","Shells and Bones"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Diamond Ring",
	"sell":5e3,
	"ability":{
		"mdef":180,
		"vit":50,
		"slpresP":100,
		"ftgresP":100,
		"sickresP":100,
		"drainresP":100
	},
	"flavourtext":"A glittering ring. Protects against sleepiness, fatigue, illness and HP absorption.",
	"craftinglevel":60,
	"materials":["Orichalcum","Diamond"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Aquamarine Brooch",
	"sell":2e3,
	"buy":498e3,
	"ability":{
		"atr":["Water"],
		"mdef":80,
		"waterresP":80
	},
	"flavourtext":"A brooch in the color of the deepest sea.",
	"craftinglevel":55,
	"materials":["Platinum","Aquamarine"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Amethyst Brooch",
	"sell":2e3,
	"buy":498e3,
	"ability":{
		"atr":["Earth"],
		"mdef":80,
		"earthresP":80
	},
	"flavourtext":"A brooch with a strangely soothing effect.",
	"craftinglevel":55,
	"materials":["Platinum","Amethyst"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Emerald Brooch",
	"sell":2300,
	"buy":498e3,
	"ability":{
		"atr":["Wind"],
		"mdef":80,
		"windresP":80
	},
	"flavourtext":"A beautiful emerald brooch with an airy sheen to it.",
	"craftinglevel":55,
	"materials":["Platinum","Emerald"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Sapphire Brooch",
	"sell":2500,
	"buy":498e3,
	"ability":{
		"atr":["Light"],
		"mdef":80,
		"lightresP":80
	},
	"flavourtext":"A lovely pink-colored sapphire brooch with a shell motif.",
	"craftinglevel":55,
	"materials":["Platinum","Sapphire"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Ruby Brooch",
	"sell":2350,
	"buy":498e3,
	"ability":{
		"atr":["Fire"],
		"mdef":80,
		"fireresP":80
	},
	"flavourtext":"A brooch shining with ruby-red light. When put under the sun, it glitters like a star.",
	"craftinglevel":55,
	"materials":["Platinum","Ruby"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Diamond Brooch",
	"sell":28e3,
	"ability":{
		"psnresP":100,
		"sealresP":100,
		"parresP":100,
		"slpresP":100,
		"ftgresP":100,
		"sickresP":100,
		"faintresP":100,
		"drainresP":100
	},
	"flavourtext":"A golden brooch with scattered diamonds. Enjoy its smooth lines and beautiful glimmer. Resists all status ailments.",
	"craftinglevel":77,
	"materials":["Orichalcum","Light Ore","Rune Crystal","Diamond"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Dolphin Brooch",
	"sell":15e3,
	"ability":{
		// None
	},
	"flavourtext":"A lovely brooch made by a master craftsman. If one of your family equips it, it enhances their status.",
	"craftinglevel":88,
	"materials":["White Stone","Orichalcum"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Fire Ring",
	"sell":5e3,
	"ability":{
		"atr":["Fire"],
		"fireresP":100,
		"waterresP":-50
	},
	"flavourtext":"A ring imbued with the magical power of fire. It blocks fire damage, but makes you vulnerable to water damage.",
	"craftinglevel":95,
	"materials":["Orichalcum","Fire Crystal"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Wind Ring",
	"sell":5e3,
	"ability":{
		"atr":["Wind"],
		"earthresP":-50,
		"windresP":100
	},
	"flavourtext":"A ring imbued with the magical power of wind. It blocks wind damage, but makes you vulnerable to earth damage.",
	"craftinglevel":93,
	"materials":["Orichalcum","Wind Crystal"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Water Ring",
	"sell":5e3,
	"ability":{
		"atr":["Water"],
		"fireresP":-50,
		"waterresP":100
	},
	"flavourtext":"A ring imbued with the magical power of water. It blocks water damage, but makes you vulnerable to fire damage.",
	"craftinglevel":96,
	"materials":["Orichalcum","Water Crystal"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Earth Ring",
	"sell":5e3,
	"ability":{
		"atr":["Earth"],
		"earthresP":100,
		"windresP":-50
	},
	"flavourtext":"A ring imbued with the magical power of earth. It blocks earth damage, but makes you vulnerable to wind damage.",
	"craftinglevel":94,
	"materials":["Orichalcum","Earth Crystal"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Happy Ring",
	"sell":1800,
	"ability":{
		// None
	},
	"flavourtext":"A ring that brings you happiness. Increases your chance of finding items.",
	"craftinglevel":30,
	"materials":["Silver","4-Leaf Clover"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Silver Pendant",
	"sell":380,
	"buy":5e3,
	"ability":{
		"matk":12
	},
	"flavourtext":"A silver pendant. Simple but elegant in design.",
	"craftinglevel":20,
	"materials":["Silver"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Star Pendant",
	"sell":1380,
	"buy":75e3,
	"ability":{
		"atr":["Love"],
		"loveresP":33
	},
	"flavourtext":"A star-shaped pendant that shines as bright as a real heavenly body. Increases experience gain.",
	"craftinglevel":40,
	"materials":["Silver Pendant","Gold","Love Crystal"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Sun Pendant",
	"sell":1300,
	"buy":75e3,
	"ability":{
		"atr":["Fire"],
		"fireresP":33
	},
	"flavourtext":"A sun-shaped pendant. Increases companions' abilities with its light.",
	"craftinglevel":45,
	"materials":["Silver Pendant","Gold","Fire Crystal"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Field Pendant",
	"sell":1350,
	"buy":75e3,
	"ability":{
		"atr":["Wind"],
		"windresP":33
	},
	"flavourtext":"A pendant inspired by the wind. Its scent increases the ability of friendly monsters.",
	"craftinglevel":35,
	"materials":["Silver Pendant","Gold","Wind Crystal"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Dew Pendant",
	"sell":1400,
	"buy":75e3,
	"ability":{
		"atr":["Water"],
		"waterresP":33
	},
	"flavourtext":"An outdoorsy pendant inspired by dew. Raises attack for farm tools.",
	"craftinglevel":28,
	"materials":["Silver Pendant","Gold","Water Crystal"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Earth Pendant",
	"sell":1370,
	"buy":75e3,
	"ability":{
		"atr":["Earth"],
		"earthresP":33
	},
	"flavourtext":"A pendant inspired by earth. Its bounty boosts the effects of recovery items.",
	"craftinglevel":19,
	"materials":["Silver Pendant","Gold","Earth Crystal"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Heart Pendant",
	"sell":800,
	"buy":25e4,
	"ability":{
		// None
	},
	"flavourtext":"A cute heart-shaped pendant. Warms your heart and increases skill experience gained.",
	"craftinglevel":40,
	"materials":["Silver Pendant","Love Crystal"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Strange Pendant",
	"sell":600,
	"ability":{
		// None
	},
	"flavourtext":"This creepy-looking pendant nullifies your defense and magic defense. So, uh, good luck with that.",
	"craftinglevel":85,
	"materials":["Amethyst","Ruby","Minerals"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Anette's Necklace",
	"sell":25e3,
	"ability":{
		// None
	},
	"flavourtext":"With wearing this necklace, you can move faster. Also, you're kicking up more clouds of dirt. Stop that.", // The first word is unaltered.
	"craftinglevel":80,
	"materials":["Rune Sphere Shard","Ancient Orc Cloth","Strings"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Work Gloves",
	"sell":13,
	"buy":1500,
	"ability":{
		"atk":5,
		"diz":1,
		"stunP":10
	},
	"flavourtext":"Protects your hands from blisters. A must-have for farming.",
	"craftinglevel":4,
	"materials":["Cloths and Skins"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Gloves",
	"sell":170,
	"buy":12e4,
	"ability":{
		"atk":40,
		"def":42,
		"diz":2,
		"stunP":30
	},
	"flavourtext":"Fine quality leather gloves. Their soft green color is attractive to girls.",
	"craftinglevel":18,
	"materials":["Giant's Gloves"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Power Gloves",
	"sell":420,
	"buy":312e3,
	"ability":{
		"atk":72,
		"def":58,
		"diz":3,
		"stunP":50
	},
	"flavourtext":"Gloves that fit snugly on one's hands. Used to carry heavy things. They're so bad!",
	"craftinglevel":42,
	"materials":["Giant's Gloves","Blue Giant's Glove"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Earrings",
	"sell":50,
	"buy":1500,
	"ability":{
		"matk":5,
		"mdef":15,
		"sealresP":5
	},
	"flavourtext":"Dangly earrings. They're so cute when they bobble in the breeze.",
	"craftinglevel":8,
	"materials":["Iron","Powders and Spores"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Witch Earrings",
	"sell":1200,
	"buy":16e4,
	"ability":{
		"def":5,
		"matk":15,
		"mdef":94,
		"darkresP":30,
		"sealresP":50
	},
	"flavourtext":"Small, jaggy earrings. Coordinate nicely with a broomstick and pointy hat.",
	"craftinglevel":30,
	"materials":["Gold","Emerald","Mysterious Powder"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Magic Earrings",
	"sell":1400,
	"buy":425e3,
	"ability":{
		"def":10,
		"matk":25,
		"mdef":100,
		"lightresP":30,
		"dizresP":20,
		"critresP":20,
		"sealresP":50
	},
	"flavourtext":"Earrings made from dazzling magic stones. Makes even the ugliest of earlobes look nice.",
	"craftinglevel":45,
	"materials":["Diamond","Ruby","Minerals"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Charm",
	"sell":45,
	"buy":350,
	"ability":{
		"critresP":100
	},
	"flavourtext":"A charm from the Far East. Protects you from misfortune by blocking critical hits.",
	"craftinglevel":3,
	"materials":["Cloths and Skins","Strings"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Holy Amulet",
	"sell":2600,
	"buy":498e3,
	"ability":{
		"atr":["Dark"],
		"mdef":80,
		"darkresP":80
	},
	"flavourtext":"A charm that is said to protect one from danger.",
	"craftinglevel":55,
	"materials":["Platinum","Diamond"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Rosary",
	"sell":1580,
	"buy":78e3,
	"ability":{
		// None
	},
	"flavourtext":"An accessory bearing a holy cross, used for prayers. Prevents most monsters from appearing at all.",
	"craftinglevel":68,
	"materials":["Silver","Puppetry Strings"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Talisman",
	"sell":2100,
	"buy":6e4,
	"ability":{
		// None
	},
	"flavourtext":"A type of protective charm. Reverses status effects such as poison, paralysis, fatigue and cold.",
	"craftinglevel":71,
	"materials":["Rafflesia Petal","Ambrosia's Thorns","Powders and Spores","Crystals"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Magic Charm",
	"sell":800,
	"buy":15e4,
	"ability":{
		// None
	},
	"flavourtext":"A must-have charm among magic knights. Favors either attack or magic attack -- whichever is stronger.",
	"craftinglevel":66,
	"materials":["Round Stone","Turnip's Miracle","Strings"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Leather Belt",
	"sell":27,
	"buy":1600,
	"ability":{
		"def":15
	},
	"flavourtext":"An ordinary leather belt of the sort one can find almost anywhere. Raises defensive skills.",
	"craftinglevel":13,
	"materials":["Cloths and Skins","Shards"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Lucky Strike",
	"sell":6200,
	"ability":{
		"critP":100
	},
	"flavourtext":"Brings you good luck. Grants a higher than average chance of landing critical hits.",
	"craftinglevel":78,
	"materials":["Critical Ring","Tablet of Truth","Dangerous Scissors","Minerals"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Champ Belt",
	"sell":720,
	"ability":{
		"vit":120
	},
	"flavourtext":"An honorary belt given to champions. Greatly increases maximum HP.",
	"craftinglevel":58,
	"materials":["Warrior's Proof","Proof of Rank","Cloths and Skins"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Hand-Knit Scarf",
	"sell":390,
	"buy":18e3,
	"ability":{
		// None
	},
	"flavourtext":"A warm, woolen scarf. Halves RP consumption (with some exceptions).",
	"craftinglevel":43,
	"materials":["Yarn","Yarn","Yarn","Yarn"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Fluffy Scarf",
	"sell":1350,
	"ability":{
		"vit":40
	},
	"flavourtext":"A scarf made of soft cotton. Very warm. Cuts all RP consumption (with some exceptions).",
	"craftinglevel":96,
	"materials":["Wooly Furball","Fur (S)","Fur (M)","Fur (L)","Yarn"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Hero's Proof",
	"sell":3e4,
	"ability":{
		"def":100
	},
	"flavourtext":"Proof of almighty power. Slowly recovers HP.",
	"craftinglevel":73,
	"materials":["Chest Hair","Small Crystal","Rune Crystal"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Proof of Wisdom",
	"sell":3e4,
	"ability":{
		"mdef":100
	},
	"flavourtext":"Proof of almighty wisdom. Slowly recovers RP.",
	"craftinglevel":74,
	"materials":["Moving Branch","Small Crystal","Rune Crystal"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Art of Attack",
	"sell":3e4,
	"ability":{
		"str":100
	},
	"flavourtext":"A book on the secrets of combat. Generates sonic waves and expands your weapon's target area.",
	"craftinglevel":91,
	"materials":["Dragonic Stone","Throne of the Empire","Wind Dragon Tooth"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Art of Defense",
	"sell":3e4,
	"ability":{
		"vit":50
	},
	"flavourtext":"A book on the secrets of guarding. Halves time spent flinching, granting its reader a heart of steel.",
	"craftinglevel":90,
	"materials":["Dragonic Stone","Grimoire Scale","Broken Ice Wall"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Art of Magic",
	"sell":3e4,
	"ability":{
		"int":100
	},
	"flavourtext":"A book on the secrets of spellcasting. Halves non-elemental attacks by way of magic walls.",
	"craftinglevel":92,
	"materials":["Dragonic Stone","Chimera Tail","Melody Bottle"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Badge",
	"sell":14,
	"buy":500,
	"ability":{
		"vit":3
	},
	"flavourtext":"A vintage, collectible badge given out as a consolation prize.",
	"craftinglevel":6,
	"materials":["Shards"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Courage Badge",
	"sell":8e4,
	"ability":{
		"atk":500,
		"def":50,
		"matk":500,
		"mdef":50,
		"str":150,
		"vit":150,
		"int":150,
		"dizresP":20,
		"critresP":50,
		"psnresP":50,
		"sealresP":50,
		"parresP":50,
		"slpresP":50,
		"ftgresP":30,
		"sickresP":30,
		"faintresP":30,
		"drainresP":30,
		"critP":5
	},
	"flavourtext":"Given to those of brave heart and courageous mind. Ain't it the truth!",
	"craftinglevel":99,
	"materials":["Badge","Rune Sphere Shard","Rune Crystal"],
	"pricemultiplier":"E",
	"category":"Accessory"
})
