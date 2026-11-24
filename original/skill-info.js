// Short source excerpts (at most 25 words each), plus factual metadata.
// Original wording remains English. Full descriptions are linked to PoE2DB.
const SKILL_INFO = {
  "Contagion": {
    "excerpt": "Afflict a single enemy with a Debuff that deals Chaos damage over time. If the enemy dies while affected by Contagion, it spreads itself, Curses,…",
    "stats": [
      "Tier: 1",
      "Level: (1—20)",
      "Cost: (8—83) Mana",
      "Cast Time: 1.00 sec",
      "Requires: Level (1—90), (4—157) Int"
    ]
  },
  "Skeletal Sniper": {
    "excerpt": "",
    "stats": []
  },
  "Unearth": {
    "excerpt": "Raise spikes of bone from the earth in front of you, damaging enemies. The bones of Corpses and dead Reviving Minions in the area are…",
    "stats": [
      "Tier: 1",
      "Level: (1—20)",
      "Cost: (7—76) Mana",
      "Cast Time: 0.95 sec",
      "Critical Hit Chance: 15.00%",
      "Requires: Level (1—90), (4—157) Int"
    ]
  },
  "Bone Cage": {
    "excerpt": "Raise a ring of bone spikes around you. The spikes are destroyed when enemies touch them, damaging and Pinning those enemies. Raising a new ring…",
    "stats": [
      "Tier: 3",
      "Level: (1—20)",
      "Cost: (7—80) Mana",
      "Cast Time: 1.00 sec",
      "Critical Hit Chance: 15.00%",
      "Requires: Level (1—90), (4—157) Int"
    ]
  },
  "Enfeeble": {
    "excerpt": "Curse all targets in an area after a short delay, making them deal less damage.",
    "stats": [
      "Tier: 3",
      "Level: (1—20)",
      "Cost: (41—178) Mana",
      "Cast Time: 0.70 sec",
      "Requires: Level (1—90), (4—157) Int"
    ]
  },
  "Essence Drain": {
    "excerpt": "Fire a Projectile that applies a powerful Chaos damage over time debuff to enemies it hits.",
    "stats": [
      "Tier: 3",
      "Level: (1—20)",
      "Cost: (5—57) Mana",
      "Cast Time: 0.80 sec",
      "Critical Hit Chance: 7.00%",
      "Projectile Speed: 11.25 metres per Second",
      "Requires: Level (1—90), (4—157) Int"
    ]
  },
  "Skeletal Arsonist": {
    "excerpt": "Activate to summon bomb-throwing, Reviving Skeletal Arsonists that can detonate other Minions on Command.",
    "stats": [
      "Tier: 3",
      "Level: (1—20)",
      "Reservation: (90—39) Spirit",
      "Requires: Level (1—90), (4—157) Int",
      "Cost: (9—93) Mana"
    ]
  },
  "Grim Feast": {
    "excerpt": "While active, your Reviving Minions store a percentage of their maximum Life in a collectible Grim Remnant on death. Using Grim Resurrection Consumes the Life…",
    "stats": [
      "Tier: 4",
      "Level: (1—20)",
      "Requires: Level (1—90), (4—157) Int",
      "Cost: 0 Mana",
      "Cooldown Time: 1.00 s",
      "Cast Time: 0.40 sec"
    ]
  },
  "Ravenous Swarm": {
    "excerpt": "While active and enemies are present, swarms of insects emerge from your body to pursue nearby enemies. The swarms are untargetable Minions that Attack and…",
    "stats": [
      "Tier: 4",
      "Level: (1—20)",
      "Reservation: 30 Spirit",
      "Requires: Level (1—90), (4—157) Int"
    ]
  },
  "Withering Presence": {
    "excerpt": "",
    "stats": []
  },
  "Convalescence": {
    "excerpt": "While active, grants a skill that you can use to instantly begin Recharging Energy Shield and gain a Buff for a duration that prevents that…",
    "stats": [
      "Tier: 4",
      "Level: (1—20)",
      "Reservation: 30 Spirit",
      "Requires: Level (1—90), (4—157) Int",
      "Cost: 20 Mana",
      "Cooldown Time: 30.00 s",
      "Cast Time: 0.50 sec"
    ]
  },
  "Bonestorm": {
    "excerpt": "Channel to conjure a swarm of bone spikes in the air, then release to fire them at enemies and explode. Shrapnel Impales enemies Hit, causing…",
    "stats": [
      "Tier: 5",
      "Level: (1—20)",
      "Cost: (5.92—60.57) Mana per second",
      "Cast Time: 0.12 sec",
      "Critical Hit Chance: 15.00%",
      "Projectile Speed: 27 metres per Second",
      "Requires: Level (1—90), (4—157) Int"
    ]
  },
  "Pain Offering": {
    "excerpt": "Skewer a Skeleton on a bone spike to send nearby Minions into a frenzy as long as the spike remains, making their skills faster and…",
    "stats": [
      "Tier: 5",
      "Level: (1—20)",
      "Cost: (25—110) Mana",
      "Requires: Level (1—90), (4—157) Int"
    ]
  },
  "Raise Zombie": {
    "excerpt": "Consume a Corpse or Power Charge to create a short-lived Zombie. Zombies created from Power Charges are Empowered and also create two additional non-empowered Zombies.",
    "stats": [
      "Tier: 5",
      "Level: (1—20)",
      "Cost: (10—102) Mana",
      "Requires: Level (1—90), (4—157) Int"
    ]
  },
  "Skeletal Frost Mage": {
    "excerpt": "Activate to summon Reviving Skeletal Frost Mages that can envelop your Minions in an icy shield on Command.",
    "stats": [
      "Tier: 5",
      "Level: (1—20)",
      "Reservation: (120—39) Spirit",
      "Requires: Level (1—90), (4—157) Int",
      "Cost: (16—173) Mana",
      "Cooldown Time: 8.00 s",
      "Cast Time: 1.25 sec",
      "Critical Hit Chance: 12.00%"
    ]
  },
  "Bind Spectre": {
    "excerpt": "",
    "stats": []
  },
  "Detonate Dead": {
    "excerpt": "Cause a Corpse to violently explode, damaging surrounding enemies.",
    "stats": [
      "Tier: 7",
      "Level: (1—20)",
      "Cost: (9—99) Mana",
      "Cast Time: 0.80 sec",
      "Critical Hit Chance: 8.00%",
      "Requires: Level (1—90), (4—157) Int"
    ]
  },
  "Profane Ritual": {
    "excerpt": "Mark a Corpse with a profane rune, dealing Chaos damage over time to nearby enemies. When the ritual is complete the Corpse is consumed and…",
    "stats": [
      "Tier: 7",
      "Level: (1—20)",
      "Cost: (6—65) Mana",
      "Cast Time: 1.00 sec",
      "Requires: Level (1—90), (4—157) Int"
    ]
  },
  "Vulnerability": {
    "excerpt": "Curse all targets in an area after a short delay, making Hits against them ignore a portion of their Armour.",
    "stats": [
      "Tier: 7",
      "Level: (1—20)",
      "Cost: (41—178) Mana",
      "Cast Time: 0.70 sec",
      "Requires: Level (1—90), (4—157) Int"
    ]
  },
  "Blasphemy": {
    "excerpt": "Turn socketed Curse skills into vile Auras, applying their effects to all nearby enemies.",
    "stats": [
      "Tier: 8",
      "Level: (1—20)",
      "Requires: Level (1—90), (4—157) Int"
    ]
  },
  "Cast on Minion Death": {
    "excerpt": "While active, gains Energy when one of your Persistent Minions is Killed, and triggers socketed Spells upon reaching maximum Energy. Very underlevelled Minions will incur…",
    "stats": [
      "Tier: 8",
      "Level: (1—20)",
      "Reservation: 30 Spirit",
      "Requires: Level (1—90), (4—157) Int"
    ]
  },
  "Barrier Invocation": {
    "excerpt": "While active, gains Energy when your Energy Shield is damaged by Enemy Hits. Using the Invocation once sufficient Energy is gathered will consume the Energy…",
    "stats": [
      "Tier: 8",
      "Level: (1—20)",
      "Reservation: 30 Spirit",
      "Cooldown Time: 0.20 s",
      "Requires: Level (1—90), (4—86) Dex, (4—86) Int"
    ]
  },
  "Dark Effigy": {
    "excerpt": "Raise a Totem that bombards enemies afflicted by Chaos damage over time Debuffs.",
    "stats": [
      "Tier: 9",
      "Level: (1—20)",
      "Cost: (13—133) Mana",
      "Requires: Level (1—90), (4—157) Int",
      "Cast Time: 1.00 sec",
      "Critical Hit Chance: 7.00%",
      "Projectile Speed: 12 metres per Second"
    ]
  },
  "Despair": {
    "excerpt": "Curse all targets in an area after a short delay, lowering their Chaos Resistance.",
    "stats": [
      "Tier: 9",
      "Level: (1—20)",
      "Cost: (41—178) Mana",
      "Cast Time: 0.70 sec",
      "Requires: Level (1—90), (4—157) Int"
    ]
  },
  "Skeletal Reaver": {
    "excerpt": "Activate to summon aggressive, Reviving Skeletal Reavers that can enrage on Command. Skeletal Reavers do more Attack Damage and gain increased Attack speed based on…",
    "stats": [
      "Tier: 9",
      "Level: (1—20)",
      "Reservation: (90—30) Spirit",
      "Requires: Level (1—90), (4—157) Int",
      "Cost: (8—83) Mana",
      "Cooldown Time: 4.00 s"
    ]
  },
  "Bone Offering": {
    "excerpt": "Impale a Skeleton on a bone spike to shield your Minions while the spike remains, reducing the amount of damage taken from Hits. Taking a…",
    "stats": [
      "Tier: 11",
      "Level: (1—20)",
      "Cost: (25—110) Mana",
      "Requires: Level (1—90), (4—157) Int"
    ]
  },
  "Hexblast": {
    "excerpt": "Detonate a Curse on every enemy in an area, causing explosions of Chaos damage but removing the Curse. Can only detonate Curses for which at…",
    "stats": [
      "Tier: 11",
      "Level: (1—20)",
      "Cost: (12—127) Mana",
      "Cast Time: 1.00 sec",
      "Critical Hit Chance: 7.00%",
      "Requires: Level (1—90), (4—157) Int"
    ]
  },
  "Skeletal Storm Mage": {
    "excerpt": "Activate to summon Reviving Skeletal Storm Mages that can call down a lightning strike on dead Skeletons on Command.",
    "stats": [
      "Tier: 11",
      "Level: (1—20)",
      "Reservation: (120—39) Spirit",
      "Requires: Level (1—90), (4—157) Int",
      "Cost: (15—155) Mana",
      "Cooldown Time: 5.00 s",
      "Cast Time: 2.00 sec",
      "Critical Hit Chance: 10.00%"
    ]
  },
  "Skeletal Brute": {
    "excerpt": "Activate to summon hard-hitting, Reviving Skeletal Brutes that can Stun Primed enemies and Warcry on Command. This Warcry Intimidates nearby enemies and Consumes Freeze on…",
    "stats": [
      "Tier: 13",
      "Level: (1—20)",
      "Reservation: (165—48) Spirit",
      "Requires: Level (1—90), (4—157) Int",
      "Cost: (8—83) Mana",
      "Cooldown Time: 4.00 s",
      "Attack Speed: 120% of base",
      "Attack Damage: 180% of base"
    ]
  },
  "Skeletal Cleric": {
    "excerpt": "Activate to summon Reviving Skeletal Clerics that heal other minions and revive fallen Skeletons.",
    "stats": [
      "Tier: 13",
      "Level: (1—20)",
      "Reservation: (60—20) Spirit",
      "Requires: Level (1—90), (4—157) Int",
      "Cooldown Time: 5.00 s",
      "Cast Time: 1.20 sec",
      "Cast Time: 1.00 sec"
    ]
  },
  "Soul Offering": {
    "excerpt": "Skewer a Skeleton on a bone spike, granting you a powerful Spell damage Buff as long as the spike remains. Does not affect your Minions.",
    "stats": [
      "Tier: 13",
      "Level: (1—20)",
      "Cost: (32—141) Mana",
      "Requires: Level (1—90), (4—157) Int"
    ]
  },
  "Cast on Critical": {
    "excerpt": "While active, gains Energy when you Critically Hit enemies and triggers socketed Spells on reaching maximum Energy.",
    "stats": [
      "Tier: 14",
      "Level: (1—20)",
      "Reservation: 100 Spirit",
      "Requires: Level (1—90), (4—157) Int"
    ]
  },
  "Sacrifice": {
    "excerpt": "",
    "stats": []
  },
  "Escape Shot": {
    "excerpt": "Leap backwards, firing an icy arrow which can Chill or Freeze enemies around the location from which you escaped. This arrow will create Ice Fragments…",
    "stats": [
      "Tier: 1",
      "Level: (1—20)",
      "Cost: (11—74) Mana",
      "Attack Damage: (65—265)% of base",
      "Projectile Speed: 30 metres per Second",
      "Requires: Level (1—90), (4—157) Dex",
      "Requires: Bows"
    ]
  },
  "Lightning Arrow": {
    "excerpt": "Fire a charged arrow at the target. On hitting an enemy or wall, the arrow will fire Chaining Lightning beams at nearby enemies.",
    "stats": [
      "Tier: 1",
      "Level: (1—20)",
      "Cost: (6—40) Mana",
      "Attack Speed: 90% of base",
      "Attack Damage: (80—250)% of base",
      "Projectile Speed: 54 metres per Second",
      "Requires: Level (1—90), (4—157) Dex",
      "Requires: Bows"
    ]
  },
  "Lightning Rod": {
    "excerpt": "Fire an arrow that drops from above, creating a Lightning burst. The arrow remains in the ground, and any Chaining Lightning beams can Chain to…",
    "stats": [
      "Tier: 1",
      "Level: (1—20)",
      "Cost: (4—30) Mana",
      "Attack Speed: 120% of base",
      "Attack Damage: (26—94)% of base",
      "Projectile Speed: 32.6 metres per Second",
      "Requires: Level (1—90), (4—157) Dex",
      "Requires: Bows"
    ]
  },
  "Poisonburst Arrow": {
    "excerpt": "Fire a virulent arrow that creates a burst of Poison on hit, affecting all enemies in an area.",
    "stats": [
      "Tier: 1",
      "Level: (1—20)",
      "Cost: (5—38) Mana",
      "Attack Damage: (88—274)% of base",
      "Projectile Speed: 32.6 metres per Second",
      "Requires: Level (1—90), (4—157) Dex",
      "Requires: Bows"
    ]
  },
  "Freezing Salvo": {
    "excerpt": "Passively gains Seals over time. Using the skill fires a projectile, and breaks the Seals, Repeating for each of them, and for each additional projectile…",
    "stats": [
      "Tier: 3",
      "Level: (1—20)",
      "Cost: (15—105) Mana",
      "Attack Damage: (48—150)% of base",
      "Projectile Speed: 7.5 metres per Second",
      "Requires: Level (1—90), (4—157) Dex",
      "Requires: Bows"
    ]
  },
  "Snipe": {
    "excerpt": "Channel to charge up your bow before releasing a powerful shot. Releasing with Perfect Timing causes the arrow to explode on impact and Consume Freeze…",
    "stats": [
      "Tier: 3",
      "Level: (1—20)",
      "Cost: (17.55—118.57) Mana per second",
      "Attack Speed: 45% of base",
      "Attack Damage: (100—312)% of base",
      "Projectile Speed: 32.6 metres per Second",
      "Requires: Level (1—90), (4—157) Dex",
      "Requires: Bows"
    ]
  },
  "Stormcaller Arrow": {
    "excerpt": "Fire an arrow that embeds where it lands for a short duration. At the end of the duration, a Lightning Bolt strikes the arrow, disintegrating…",
    "stats": [
      "Tier: 3",
      "Level: (1—20)",
      "Cost: (7—50) Mana",
      "Attack Speed: 80% of base",
      "Attack Damage: (20—62)% of base",
      "Projectile Speed: 54 metres per Second",
      "Requires: Level (1—90), (4—157) Dex",
      "Requires: Bows",
      "Attack Damage: (90—281)%"
    ]
  },
  "Vine Arrow": {
    "excerpt": "Fire an arrow into the air that lands after a short delay, damaging enemies and causing a plant to spring up at the impact location.…",
    "stats": [
      "Tier: 3",
      "Level: (1—20)",
      "Cost: (7—47) Mana",
      "Attack Damage: (70—218)% of base",
      "Projectile Speed: 32.6 metres per Second",
      "Requires: Level (1—90), (4—157) Dex",
      "Requires: Bows"
    ]
  },
  "Plague Bearer": {
    "excerpt": "While active, stores a portion of the Poison Damage you deal. Using this Skill unleashes the stored Poison to damage and Poison enemies around you.",
    "stats": [
      "Tier: 4",
      "Level: (1—20)",
      "Reservation: 30 Spirit",
      "Requires: Level (1—90), (4—157) Dex",
      "Cost: 0 Mana"
    ]
  },
  "Wind Dancer": {
    "excerpt": "While active, periodically grants stages of a buff that gives you more Evasion per stage. Being Hit by an Enemy while you have this buff…",
    "stats": [
      "Tier: 4",
      "Level: (1—20)",
      "Reservation: 30 Spirit",
      "Requires: Level (1—90), (4—157) Dex",
      "Requires: Any Martial Weapon",
      "Cost: 0 Mana",
      "Cooldown Time: 0.25 s",
      "Attack Damage: (20—82)% of base"
    ]
  },
  "Herald of Thunder": {
    "excerpt": "While active, killing Shocked enemies with a non-Herald Attack Hit will cause subsequent Attack Hits to release lightning bolts which dealAttack damage to all surrounding…",
    "stats": [
      "Tier: 4",
      "Level: (1—20)",
      "Reservation: 30 Spirit",
      "Requires: Level (1—90), (4—157) Dex",
      "Requires: Any Martial Weapon",
      "Attack Damage: (30—122)%"
    ]
  },
  "Electrocuting Arrow": {
    "excerpt": "Fire an electrifying arrow that explodes in an Area on Hit. Hitting an enemy will attach an Electrocuting Rod to them, causing all incoming Lightning…",
    "stats": [
      "Tier: 5",
      "Level: (1—20)",
      "Cost: (6—46) Mana",
      "Attack Speed: 110% of base",
      "Attack Damage: (80—250)% of base",
      "Projectile Speed: 54 metres per Second",
      "Requires: Level (1—90), (4—157) Dex",
      "Requires: Bows"
    ]
  },
  "Ice-Tipped Arrows": {
    "excerpt": "Ready your active Bow or Spear, Empowering your next Repeatable Bow or Projectile Spear Attacks to Convert Physical Damage to Cold Damage and Trigger Ice…",
    "stats": [
      "Tier: 5",
      "Level: (1—20)",
      "Cost: (14—63) Mana",
      "Cooldown Time: 12.00 s",
      "Cast Time: 0.70 sec",
      "Requires: Level (1—90), (4—157) Dex",
      "Requires: Bows, Spears",
      "Cooldown Time: 0.15 s",
      "Cast Time: 1.00 sec",
      "Attack Damage: (60—187)% of base"
    ]
  },
  "Toxic Growth": {
    "excerpt": "Fire a rain of Toxic Pustules into the air. The Pustules deal damage on impact, then Detonate after a delay. They can also be Poisoned,…",
    "stats": [
      "Tier: 5",
      "Level: (1—20)",
      "Cost: (14—98) Mana",
      "Attack Damage: (20—62)% of base",
      "Projectile Speed: 32.6 metres per Second",
      "Requires: Level (1—90), (4—157) Dex",
      "Requires: Bows"
    ]
  },
  "Barrage": {
    "excerpt": "Ready a volley of arrows or spears, Empowering your next Repeatable Bow or Projectile Spear Attack to Repeat multiple times. Consumes your Frenzy Charges on…",
    "stats": [
      "Tier: 5",
      "Level: (1—20)",
      "Cost: (11—51) Mana",
      "Cooldown Time: 2.00 s",
      "Cast Time: 0.70 sec",
      "Requires: Level (1—90), (4—157) Dex",
      "Requires: Bows, Spears"
    ]
  },
  "Gas Arrow": {
    "excerpt": "Fire a noxious arrow at the ground, creating a cloud of flammable poisonous gas at the end of its flight. The cloud will detonate if…",
    "stats": [
      "Tier: 7",
      "Level: (1—20)",
      "Cost: (9—62) Mana",
      "Attack Damage: (30—94)% of base",
      "Projectile Speed: 32.6 metres per Second",
      "Requires: Level (1—90), (4—157) Dex",
      "Requires: Bows",
      "Attack Damage: (70—218)%"
    ]
  },
  "Sniper's Mark": {
    "excerpt": "Mark a target. The next Critical Hit the target receives Activates the Mark, Consuming it to deal extra damage and grant you a Frenzy Charge.",
    "stats": [
      "Tier: 7",
      "Level: (1—20)",
      "Cost: (18—79) Mana",
      "Cooldown Time: 6.00 s",
      "Requires: Level (1—90), (4—157) Dex"
    ]
  },
  "Voltaic Mark": {
    "excerpt": "Mark a target, making them more susceptible to being Electrocuted. When the Marked target is Electrocuted, the Mark Activates, granting a Buff which gives extra…",
    "stats": [
      "Tier: 7",
      "Level: (1—20)",
      "Cost: (18—79) Mana",
      "Cooldown Time: 0.50 s",
      "Requires: Level (1—90), (4—157) Dex"
    ]
  },
  "Freezing Mark": {
    "excerpt": "Mark a target, making them more susceptible to being Frozen. When the Marked target is Frozen, the Mark Activates, granting you a Buff which gives…",
    "stats": [
      "Tier: 7",
      "Level: (1—20)",
      "Cost: (18—79) Mana",
      "Cooldown Time: 0.50 s",
      "Requires: Level (1—90), (4—86) Dex, (4—86) Int"
    ]
  },
  "Herald of Plague": {
    "excerpt": "While active, killing a Poisoned enemy spreads its Poison to other nearby enemies, and has a chance to also Hinder them.",
    "stats": [
      "Tier: 8",
      "Level: (1—20)",
      "Reservation: 30 Spirit",
      "Requires: Level (1—90), (4—157) Dex",
      "Requires: Any Martial Weapon"
    ]
  },
  "Combat Frenzy": {
    "excerpt": "",
    "stats": []
  },
  "Mirage Archer": {
    "excerpt": "While active, dodge rolling will create a Mirage that uses socketed ranged Attacks for a short duration, then vanish.",
    "stats": [
      "Tier: 8",
      "Level: (1—20)",
      "Reservation: 60 Spirit",
      "Requires: Level (1—90), (4—157) Dex",
      "Requires: Bows, Spears, Crossbows",
      "Cooldown Time: 10.00 s"
    ]
  },
  "Detonating Arrow": {
    "excerpt": "Channel to charge up before firing off a burning arrow. At maximum stages, the arrow will create a Detonating explosion at the end of its…",
    "stats": [
      "Tier: 9",
      "Level: (1—20)",
      "Cost: (6.82—46.07) Mana per second",
      "Attack Speed: 45% of base",
      "Attack Damage: (53—192)% of base",
      "Requires: Level (1—90), (4—157) Dex",
      "Requires: Bows"
    ]
  },
  "Ice Shot": {
    "excerpt": "Fire an icy arrow that sprays a cone of ice shards when it hits a target.",
    "stats": [
      "Tier: 9",
      "Level: (1—20)",
      "Cost: (6—40) Mana",
      "Attack Speed: 90% of base",
      "Attack Damage: (95—344)% of base",
      "Projectile Speed: 32.6 metres per Second",
      "Requires: Level (1—90), (4—157) Dex",
      "Requires: Bows"
    ]
  },
  "Rain of Arrows": {
    "excerpt": "Fire a hail of arrows into the air, causing them to rain from above. Consumes a Frenzy Charge to fire more arrows.",
    "stats": [
      "Tier: 9",
      "Level: (1—20)",
      "Cost: (15—103) Mana",
      "Attack Speed: 80% of base",
      "Attack Damage: (50—181)% of base",
      "Projectile Speed: 32.6 metres per Second",
      "Requires: Level (1—90), (4—157) Dex",
      "Requires: Bows"
    ]
  },
  "Shockchain Arrow": {
    "excerpt": "Fire a Lightning-charged arrow that homes in on enemies afflicted by Lightning Ailments. Hitting such an enemy will cause your arrow to release a damaging…",
    "stats": [
      "Tier: 11",
      "Level: (1—20)",
      "Cost: (10—68) Mana",
      "Attack Speed: 70% of base",
      "Attack Damage: (70—218)% of base",
      "Projectile Speed: 32.6 metres per Second",
      "Requires: Level (1—90), (4—157) Dex",
      "Requires: Bows"
    ]
  },
  "Tornado Shot": {
    "excerpt": "Fire a skyward shot that whips up a Tornado where it lands, dealing Physical damage over time and Hindering enemies standing in it. Arrows, thrown…",
    "stats": [
      "Tier: 11",
      "Level: (1—20)",
      "Cost: (13—88) Mana",
      "Attack Speed: 120% of base",
      "Attack Damage: (50—156)% of base",
      "Projectile Speed: 21.73 metres per Second",
      "Requires: Level (1—90), (4—157) Dex",
      "Requires: Bows"
    ]
  },
  "Magnetic Salvo": {
    "excerpt": "Aim skyward and fire energy missiles at lingering bolts or arrows created by other Lightning Attacks in front of you. The missiles explode if they…",
    "stats": [
      "Tier: 13",
      "Level: (1—20)",
      "Cost: (24—162) Mana",
      "Attack Speed: 50% of base",
      "Attack Damage: (50—156)% of base",
      "Projectile Speed: 7.5 metres per Second",
      "Requires: Level (1—90), (4—157) Dex",
      "Requires: Bows",
      "Attack Damage: (70—286)%"
    ]
  },
  "Spiral Volley": {
    "excerpt": "Load your Bow with a volley of enchanted arrows and fire them in a circle as you spin forward, firing directly at targets if possible.…",
    "stats": [
      "Tier: 13",
      "Level: (1—20)",
      "Cost: (6—64) Mana",
      "Attack Damage: (66—206)% of base",
      "Projectile Speed: 32.6 metres per Second",
      "Requires: Level (1—90), (4—157) Dex",
      "Requires: Bows"
    ]
  },
  "Toxic Domain": {
    "excerpt": "Create an area of Toxic Bloom on the ground around you. While in the Bloom, you have increased Skill costs, Regenerate Life, and your Projectile…",
    "stats": [
      "Tier: 13",
      "Level: (1—20)",
      "Cost: (24—106) Mana",
      "Cooldown Time: 11.00 s",
      "Attack Damage: (100—312)% of base",
      "Requires: Level (1—90), (4—157) Dex",
      "Requires: Bows, Spears, Crossbows",
      "Attack Damage: (38—119)%"
    ]
  },
  "Alchemist's Boon": {
    "excerpt": "While active, grants you Flask charges passively and causes Life and Mana recovery from your Flasks to also apply to Allies in your Presence.",
    "stats": [
      "Tier: 14",
      "Level: (1—20)",
      "Reservation: 30 Spirit",
      "Requires: Level (1—90), (4—157) Dex"
    ]
  },
  "Rhoa Mount": {
    "excerpt": "Harnesses a Companion Rhoa you can mount while you're wielding a Bow or Spear. While mounted you can use Bow, thrown Spear, and Mark Skills,…",
    "stats": [
      "Tier: 14",
      "Level: (1—20)",
      "Reservation: 100 Spirit",
      "Requires: Level (1—90), (4—157) Dex"
    ]
  },
  "Boneshatter": {
    "excerpt": "Attack enemies with a melee Strike. The Strike will cause a Heavy Stun on enemies that are Primed for Stun. Upon causing a Heavy Stun…",
    "stats": [
      "Tier: 1",
      "Level: (1—20)",
      "Cost: (9—60) Mana",
      "Attack Speed: 60% of base",
      "Attack Damage: (100—312)% of base",
      "Requires: Level (1—90), (4—157) Str",
      "Requires: One Hand Maces, Two Hand Maces",
      "Attack Damage: (200—724)%"
    ]
  },
  "Earthquake": {
    "excerpt": "Smash the ground, dealing damage in an area and leaving behind Jagged Ground that slows enemies. The Jagged Ground erupts in a powerful Aftershock after…",
    "stats": [
      "Tier: 1",
      "Level: (1—20)",
      "Cost: (8—56) Mana",
      "Attack Speed: 75% of base",
      "Attack Damage: (40—125)% of base",
      "Requires: Level (1—90), (4—157) Str",
      "Requires: One Hand Maces, Two Hand Maces",
      "Attack Damage: (184—666)%"
    ]
  },
  "Rolling Slam": {
    "excerpt": "Slam the ground to Stun enemies and knock them away, then continue forward and perform a devastating second Slam.",
    "stats": [
      "Tier: 1",
      "Level: (1—20)",
      "Cost: (14—96) Mana",
      "Projectile Speed: 32.6 metres per Second",
      "Requires: Level (1—90), (4—157) Str",
      "Requires: One Hand Maces, Two Hand Maces",
      "Attack Damage: (75—272)%"
    ]
  },
  "Armour Breaker": {
    "excerpt": "Strike with a forceful blow, knocking enemies back and weakening their Armour.",
    "stats": [
      "Tier: 3",
      "Level: (1—20)",
      "Cost: (5—38) Mana",
      "Attack Speed: 80% of base",
      "Attack Damage: (50—181)% of base",
      "Requires: Level (1—90), (4—157) Str",
      "Requires: One Hand Maces, Two Hand Maces"
    ]
  },
  "Infernal Cry": {
    "excerpt": "Perform a Warcry, Empowering subsequent Melee Attacks if there are enemies nearby. Enemies in the warcry's area are destabilised and will Combust on death. This…",
    "stats": [
      "Tier: 3",
      "Level: (1—20)",
      "Cost: (19—85) Mana",
      "Cooldown Time: 8.00 s",
      "Requires: Level (1—90), (4—157) Str",
      "Critical Hit Chance: 7.00%"
    ]
  },
  "Shield Charge": {
    "excerpt": "Channel to charge in the target direction. You will crash into enemies on your path, stopping your charge and dealing damage to enemies in an…",
    "stats": [
      "Tier: 3",
      "Level: (1—20)",
      "Cost: (7.2—48.68) Mana per second",
      "Critical Hit Chance: 5.00%",
      "Attack Damage: (30—94)% of base",
      "Requires: Level (1—90), (4—157) Str",
      "Requires: Armoured Shield"
    ]
  },
  "Shockwave Totem": {
    "excerpt": "Raise a Totem that Slams the ground around it, repeatedly damaging nearby enemies. Jagged Ground erupts when hit by this Slam, damaging enemies standing on…",
    "stats": [
      "Tier: 3",
      "Level: (1—20)",
      "Cost: (15—103) Mana",
      "Requires: Level (1—90), (4—157) Str",
      "Requires: Any Martial Weapon",
      "Attack Speed: 50% of base",
      "Attack Damage: (25—66)% of base"
    ]
  },
  "Iron Ward": {
    "excerpt": "While active, stores a percentage of the Physical damage that is prevented by your Armour or other sources of damage reduction. Using this Skill releases…",
    "stats": [
      "Tier: 4",
      "Level: (1—20)",
      "Reservation: 30 Spirit",
      "Requires: Level (1—90), (4—157) Str",
      "Cost: 0 Mana"
    ]
  },
  "Magma Barrier": {
    "excerpt": "While active, increases your Block Chance passively and imbues your Shield with lava over time. When fully imbued, your next Block with your Shield raised…",
    "stats": [
      "Tier: 4",
      "Level: (1—20)",
      "Reservation: 30 Spirit",
      "Requires: Level (1—90), (4—157) Str",
      "Requires: Any Shield",
      "Critical Hit Chance: 5.00%",
      "Attack Damage: (170—694)% of base"
    ]
  },
  "Scavenged Plating": {
    "excerpt": "While active, uses fragments of armour scavenged from enemies to bolster your own. Fully Breaking an enemy's Armour grants you stacks of Scavenged Plating for…",
    "stats": [
      "Tier: 4",
      "Level: (1—20)",
      "Reservation: 30 Spirit",
      "Requires: Level (1—90), (4—157) Str"
    ]
  },
  "Herald of Ash": {
    "excerpt": "While active, enemies you sufficiently Overkill with non-Herald Attacks will cause an explosion that Ignites nearby enemies based on the Overkill damage dealt.",
    "stats": [
      "Tier: 4",
      "Level: (1—20)",
      "Reservation: 30 Spirit",
      "Requires: Level (1—90), (4—157) Str",
      "Requires: Any Martial Weapon"
    ]
  },
  "Molten Blast": {
    "excerpt": "Gouge molten rock from the ground and fling it at the target. The Projectile explodes on collision, damaging enemies and scattering shrapnel in a cone…",
    "stats": [
      "Tier: 5",
      "Level: (1—20)",
      "Cost: (6—40) Mana",
      "Attack Speed: 75% of base",
      "Attack Damage: (65—265)% of base",
      "Projectile Speed: 16 metres per Second",
      "Requires: Level (1—90), (4—157) Str",
      "Requires: One Hand Maces, Two Hand Maces"
    ]
  },
  "Perfect Strike": {
    "excerpt": "Channel to charge up your weapon with Fire. Releasing with Perfect Timing will create a damaging wave of intense Fire.",
    "stats": [
      "Tier: 5",
      "Level: (1—20)",
      "Cost: (6.2—41.92) Mana per second",
      "Attack Speed: 30% of base",
      "Attack Damage: (110—343)% of base",
      "Requires: Level (1—90), (4—157) Str",
      "Requires: One Hand Maces, Two Hand Maces",
      "Attack Damage: (363—1132)%"
    ]
  },
  "Resonating Shield": {
    "excerpt": "Repeatedly hammer your Shield with your weapon causing damaging shockwaves in an area around you. Enemies hit by the shockwave lose Armour for a duration.…",
    "stats": [
      "Tier: 5",
      "Level: (1—20)",
      "Cost: (6.95—46.93) Mana per second",
      "Critical Hit Chance: 5.00%",
      "Attack Damage: (30—94)% of base",
      "Requires: Level (1—90), (4—157) Str",
      "Requires: Armoured Shield"
    ]
  },
  "Earthshatter": {
    "excerpt": "Slam the ground, sending out a fissure that deals area damage to enemies it passes under and thrusts a spike from the ground when it…",
    "stats": [
      "Tier: 7",
      "Level: (1—20)",
      "Cost: (7—51) Mana",
      "Attack Speed: 80% of base",
      "Attack Damage: (45—140)% of base",
      "Requires: Level (1—90), (4—157) Str",
      "Requires: One Hand Maces, Two Hand Maces",
      "Attack Damage: (140—507)%"
    ]
  },
  "Leap Slam": {
    "excerpt": "Jump into the air, damaging and Knocking Back enemies with your mace where you land. Enemies you would land on are",
    "stats": [
      "Tier: 7",
      "Level: (1—20)",
      "Cost: (14—97) Mana",
      "Attack Damage: (110—449)% of base",
      "Requires: Level (1—90), (4—157) Str",
      "Requires: One Hand Maces, Two Hand Maces"
    ]
  },
  "Shield Wall": {
    "excerpt": "Ram your Shield into the ground, throwing up a wall of earth. Enemies can attack your wall segments, and your Slams, Warcries, and Shield Charge…",
    "stats": [
      "Tier: 7",
      "Level: (1—20)",
      "Cost: (13—92) Mana",
      "Critical Hit Chance: 5.00%",
      "Attack Damage: (65—235)% of base",
      "Requires: Level (1—90), (4—157) Str",
      "Requires: Armoured Shield"
    ]
  },
  "Volcanic Fissure": {
    "excerpt": "Slam the ground, creating a branching Molten Fissure that deals damage as it travels and remains for a duration. Using a different Slam on a…",
    "stats": [
      "Tier: 7",
      "Level: (1—20)",
      "Cost: (6—41) Mana",
      "Attack Speed: 80% of base",
      "Attack Damage: (63—166)% of base",
      "Projectile Speed: 6 metres per Second",
      "Requires: Level (1—90), (4—157) Str",
      "Requires: One Hand Maces, Two Hand Maces"
    ]
  },
  "Time of Need": {
    "excerpt": "While active, periodically invokes divine blessings to heal you and remove Curses and Elemental Ailments from you.",
    "stats": [
      "Tier: 8",
      "Level: (1—20)",
      "Reservation: 30 Spirit",
      "Requires: Level (1—90), (4—122) Str, (4—48) Int"
    ]
  },
  "Overwhelming Presence": {
    "excerpt": "",
    "stats": []
  },
  "Forge Hammer": {
    "excerpt": "Hurl a fiery hammer that Slams into the ground and lodges there. While the hammer is lodged in the ground, reusing this Skill recalls the…",
    "stats": [
      "Tier: 9",
      "Level: (1—20)",
      "Cost: (9—60) Mana",
      "Cooldown Time: 8.00 s",
      "Attack Speed: 70% of base",
      "Attack Damage: (185—577)% of base",
      "Requires: Level (1—90), (4—157) Str",
      "Requires: One Hand Maces, Two Hand Maces"
    ]
  },
  "Fortifying Cry": {
    "excerpt": "Perform a Warcry that grants Guard and Triggers Shield Wave when subsequent Shield Attacks deal damage. This Skill's cooldown can be bypassed by expending an…",
    "stats": [
      "Tier: 9",
      "Level: (1—20)",
      "Cost: (19—85) Mana",
      "Cooldown Time: 8.00 s",
      "Requires: Level (1—90), (4—157) Str",
      "Requires: Armoured Shield",
      "Cost: 0 Mana"
    ]
  },
  "Sunder": {
    "excerpt": "Slam the ground, creating a roiling fissure that damages enemies in a sequence of areas in front of you. A number of enemies hit by…",
    "stats": [
      "Tier: 9",
      "Level: (1—20)",
      "Cost: (15—106) Mana",
      "Attack Speed: 40% of base",
      "Attack Damage: (160—653)% of base",
      "Requires: Level (1—90), (4—157) Str",
      "Requires: One Hand Maces, Two Hand Maces"
    ]
  },
  "Seismic Cry": {
    "excerpt": "Perform a damaging Warcry, Knocking Back nearby enemies and Heavy Stunning enemies that are Primed for Stun. If an enemy is Heavy Stunned or a…",
    "stats": [
      "Tier: 11",
      "Level: (1—20)",
      "Cost: (19—85) Mana",
      "Cooldown Time: 8.00 s",
      "Requires: Level (1—90), (4—157) Str"
    ]
  },
  "Stampede": {
    "excerpt": "Charges forward, cracking the earth and leaving a patch of Jagged Ground with every footstep. At the end of your charge, a massive leaping Slam…",
    "stats": [
      "Tier: 11",
      "Level: (1—20)",
      "Cost: (9—65) Mana",
      "Attack Damage: (40—125)% of base",
      "Requires: Level (1—90), (4—157) Str",
      "Requires: One Hand Maces, Two Hand Maces",
      "Attack Damage: (120—374)%"
    ]
  },
  "Supercharged Slam": {
    "excerpt": "Channel to charge up a heavy swing, drawing earth from the ground to enlarge your mace. Release to Slam the ground, dealing damage in an…",
    "stats": [
      "Tier: 11",
      "Level: (1—20)",
      "Cost: (7.9—53.38) Mana per second",
      "Attack Damage: (70—254)% of base",
      "Requires: Level (1—90), (4—157) Str",
      "Requires: Two Hand Maces"
    ]
  },
  "Ancestral Cry": {
    "excerpt": "Perform a Warcry using Glory gained by Igniting enemies to turn you into an embodiment of Kaom. While embodying Kaom, you Trigger Volcanic Steps while…",
    "stats": [
      "Tier: 13",
      "Level: (1—20)",
      "Cost: (10—44) Mana",
      "Projectile Speed: 4 metres per Second",
      "Requires: Level (1—90), (4—157) Str",
      "Requires: Any Melee Martial Weapon or Unarmed"
    ]
  },
  "Ancestral Warrior Totem": {
    "excerpt": "Consume 3 Endurance Charges to Raise a Totem that conjures spirit warriors. Each warrior uses a socketed Mace Skill once, then disappears. Cannot use Channelling…",
    "stats": [
      "Tier: 13",
      "Level: (1—20)",
      "Cost: (13—91) Mana",
      "Requires: Level (1—90), (4—157) Str",
      "Requires: One Hand Maces, Two Hand Maces"
    ]
  },
  "Hammer of the Gods": {
    "excerpt": "Build Glory by Heavy Stunning enemies. When you have maximum Glory you may entreat the Ancestors to crush your enemies, manifesting a massive hammer that…",
    "stats": [
      "Tier: 13",
      "Level: (1—20)",
      "Cost: (10—73) Mana",
      "Attack Speed: 50% of base",
      "Attack Damage: (580—1529)% of base",
      "Requires: Level (1—90), (4—157) Str",
      "Requires: One Hand Maces, Two Hand Maces"
    ]
  },
  "Berserk": {
    "excerpt": "",
    "stats": []
  },
  "Dread Banner": {
    "excerpt": "While active, Attacking enemies builds Glory. When you have maximum Glory, you can place an inspiring Banner for a duration with an Aura that grants…",
    "stats": [
      "Tier: 14",
      "Level: (1—20)",
      "Reservation: 30 Spirit",
      "Requires: Level (1—90), (4—86) Str, (4—86) Dex"
    ]
  },
  "Flame Wall": {
    "excerpt": "Create a wall of Fire in front of you, which Ignites everything within its area. Any Projectiles fired through the wall by you and Allies…",
    "stats": [
      "Tier: 1",
      "Level: (1—20)",
      "Cost: (10—111) Mana",
      "Cast Time: 1.00 sec",
      "Critical Hit Chance: 5.00%",
      "Requires: Level (1—90), (4—157) Int"
    ]
  },
  "Frost Bomb": {
    "excerpt": "Create a pulsing Orb of frost. Each pulse inflicts Elemental Exposure on nearby enemies. When the Orb's duration ends, it Detonates, dealing Cold damage to…",
    "stats": [
      "Tier: 1",
      "Level: (1—20)",
      "Cost: (9—99) Mana",
      "Cooldown Time: 6.00 s",
      "Cast Time: 0.80 sec",
      "Critical Hit Chance: 13.00%",
      "Requires: Level (1—90), (4—157) Int"
    ]
  },
  "Ice Nova": {
    "excerpt": "Conjure a wave of ice in all directions, Knocking Back enemies based on how close they are to you. Casting Ice Nova targeting near a…",
    "stats": [
      "Tier: 1",
      "Level: (1—20)",
      "Cost: (7—74) Mana",
      "Cast Time: 1.00 sec",
      "Critical Hit Chance: 12.00%",
      "Requires: Level (1—90), (4—157) Int"
    ]
  },
  "Spark": {
    "excerpt": "Launch a spray of sparking Projectiles that travel erratically along the ground until they hit an enemy or expire. Consumes a Cold Infusion if possible…",
    "stats": [
      "Tier: 1",
      "Level: (1—20)",
      "Cost: (5—56) Mana",
      "Cast Time: 0.70 sec",
      "Critical Hit Chance: 9.00%",
      "Projectile Speed: 10 metres per Second",
      "Requires: Level (1—90), (4—157) Int"
    ]
  },
  "Fireball": {
    "excerpt": "Launch a large ball of Fire which explodes on impact. The explosion Consumes a Fire Infusion if possible to launch a ring of smaller firebolts.",
    "stats": [
      "Tier: 3",
      "Level: (1—20)",
      "Cost: (10—104) Mana",
      "Cast Time: 1.20 sec",
      "Critical Hit Chance: 7.00%",
      "Projectile Speed: 10.4 metres per Second",
      "Requires: Level (1—90), (4—157) Int"
    ]
  },
  "Frost Darts": {
    "excerpt": "Conjures a number of icy Projectiles that launch towards the target. Projectiles that Hit a Chilled or Frozen target create chunks of ice that deal…",
    "stats": [
      "Tier: 3",
      "Level: (1—20)",
      "Cost: (5—59) Mana",
      "Cast Time: 0.80 sec",
      "Critical Hit Chance: 13.00%",
      "Projectile Speed: 20 metres per Second",
      "Requires: Level (1—90), (4—157) Int"
    ]
  },
  "Living Bomb": {
    "excerpt": "Plant a seed of Fire inside an enemy. Dealing enough damage to the enemy, or killing it outright, causes the seed to explode, dealing damage…",
    "stats": [
      "Tier: 3",
      "Level: (1—20)",
      "Cost: (8—85) Mana",
      "Cast Time: 0.60 sec",
      "Critical Hit Chance: 7.00%",
      "Requires: Level (1—90), (4—157) Int"
    ]
  },
  "Orb of Storms": {
    "excerpt": "Create an Orb of electricity that fires Chaining Lightning bolts at nearby enemies. The Orb leaves behind a Lightning Infusion Remnant when it expires.",
    "stats": [
      "Tier: 3",
      "Level: (1—20)",
      "Cost: (12—129) Mana",
      "Cast Time: 0.80 sec",
      "Critical Hit Chance: 10.00%",
      "Requires: Level (1—90), (4—157) Int"
    ]
  },
  "Arctic Armour": {
    "excerpt": "While active, conjures an icy barrier that gains stages over time. While the barrier has stages, Melee Attacks that hit you will remove a stage…",
    "stats": [
      "Tier: 4",
      "Level: (1—20)",
      "Reservation: 30 Spirit",
      "Cooldown Time: 0.25 s",
      "Cast Time: Instant",
      "Critical Hit Chance: 11.00%",
      "Requires: Level (1—90), (4—157) Int"
    ]
  },
  "Mana Remnants": {
    "excerpt": "Conjure surging arcane energy to restore your Mana. While active, enemies you kill affected by Elemental Ailments have a chance to spawn a Mana Remnant,…",
    "stats": [
      "Tier: 4",
      "Level: (1—20)",
      "Reservation: 30 Spirit",
      "Requires: Level (1—90), (4—157) Int"
    ]
  },
  "Raging Spirits": {
    "excerpt": "While active, Fire Spells you use yourself will also summon Raging Spirits, which are short-lived flaming skulls that rush at nearby enemies and rapidly Attack…",
    "stats": [
      "Tier: 4",
      "Level: (1—20)",
      "Reservation: 30 Spirit",
      "Requires: Level (1—90), (4—157) Int"
    ]
  },
  "Arc": {
    "excerpt": "An arc of Lightning stretches from the caster to a targeted enemy and Chains on to other nearby enemies. Consumes a Lightning Infusion if possible…",
    "stats": [
      "Tier: 5",
      "Level: (1—20)",
      "Cost: (8—81) Mana",
      "Cast Time: 1.10 sec",
      "Critical Hit Chance: 9.00%",
      "Projectile Speed: 42.5 metres per Second",
      "Requires: Level (1—90), (4—157) Int"
    ]
  },
  "Ember Fusillade": {
    "excerpt": "Conjure a blazing Ember that hovers above you. After a short duration, the Ember launches at an enemy, dealing Fire damage in an area on…",
    "stats": [
      "Tier: 5",
      "Level: (1—20)",
      "Cost: (3—37) Mana",
      "Cast Time: 0.40 sec",
      "Critical Hit Chance: 7.00%",
      "Projectile Speed: 30 metres per Second",
      "Requires: Level (1—90), (4—157) Int"
    ]
  },
  "Frostbolt": {
    "excerpt": "Fire a slow-moving Piercing Projectile that is effective at Chilling enemies and explodes on colliding with terrain.",
    "stats": [
      "Tier: 5",
      "Level: (1—20)",
      "Cost: (5—59) Mana",
      "Cast Time: 0.80 sec",
      "Critical Hit Chance: 12.00%",
      "Projectile Speed: 2.8 metres per Second",
      "Requires: Level (1—90), (4—157) Int"
    ]
  },
  "Snap": {
    "excerpt": "Consume the elemental energy from a Frozen, Shocked or Ignited enemy, creating an elemental blast that leaves behind an Infusion Remnant. The blast will spread…",
    "stats": [
      "Tier: 5",
      "Level: (1—20)",
      "Cost: (8—89) Mana",
      "Cooldown Time: 4.00 s",
      "Cast Time: 0.50 sec",
      "Critical Hit Chance: 13.00%",
      "Requires: Level (1—90), (4—157) Int"
    ]
  },
  "Elemental Weakness": {
    "excerpt": "Curse all targets in an area after a short delay, lowering their Elemental Resistances.",
    "stats": [
      "Tier: 7",
      "Level: (1—20)",
      "Cost: (41—178) Mana",
      "Cast Time: 0.70 sec",
      "Requires: Level (1—90), (4—157) Int"
    ]
  },
  "Mana Tempest": {
    "excerpt": "Create a storm of arcane energies that Empowers your Mana-costing Spells while you remain inside it. Maintaining the storm constantly drains your Mana, and spending…",
    "stats": [
      "Tier: 7",
      "Level: (1—20)",
      "Cost: 1% Mana per second",
      "Cooldown Time: 1.00 s",
      "Cast Time: 0.60 sec",
      "Requires: Level (1—90), (4—157) Int"
    ]
  },
  "Temporal Chains": {
    "excerpt": "Curse all enemies in an area, Slowing them and making other effects on them expire more slowly.",
    "stats": [
      "Tier: 7",
      "Level: (1—20)",
      "Cost: (41—178) Mana",
      "Cast Time: 0.70 sec",
      "Requires: Level (1—90), (4—157) Int"
    ]
  },
  "Blink": {
    "excerpt": "While active, replaces your dodge roll with a short-cooldown Spell that allows you to tunnel through space, instantly reappearing a medium distance away.",
    "stats": [
      "Tier: 8",
      "Level: (1—20)",
      "Reservation: 60 Spirit",
      "Requires: Level (1—90), (4—157) Int",
      "Cost: 0 Mana",
      "Cooldown Time: (4.50—3.50) s",
      "Cast Time: 0.70 sec"
    ]
  },
  "Siphon Elements": {
    "excerpt": "While active, has a chance to create an Infusion Remnant when you Freeze, Shock or Ignite a target.",
    "stats": [
      "Tier: 8",
      "Level: (1—20)",
      "Reservation: 30 Spirit",
      "Requires: Level (1—90), (4—157) Int"
    ]
  },
  "Elemental Invocation": {
    "excerpt": "While active, gains Energy when you Freeze, Shock or Ignite an enemy. Using the Invocation once sufficient Energy is gathered will consume the Energy to…",
    "stats": [
      "Tier: 8",
      "Level: (1—20)",
      "Reservation: 60 Spirit",
      "Cooldown Time: 0.20 s",
      "Requires: Level (1—90), (4—86) Dex, (4—86) Int"
    ]
  },
  "Frost Wall": {
    "excerpt": "Create a wall of Ice Crystals which holds back enemies. The Crystals explode if sufficiently damaged, or if pushed hard enough, damaging nearby enemies. Consumes…",
    "stats": [
      "Tier: 9",
      "Level: (1—20)",
      "Cost: (7—79) Mana",
      "Cooldown Time: 5.00 s (3 Times)",
      "Cast Time: 0.80 sec",
      "Critical Hit Chance: 11.00%",
      "Requires: Level (1—90), (4—157) Int"
    ]
  },
  "Incinerate": {
    "excerpt": "Gain fuel by spending Mana on any Skill, then use the accumulated fuel to conjure a torrent of Fire from your hand, Igniting enemies in…",
    "stats": [
      "Tier: 9",
      "Level: (1—20)",
      "Cast Time: 0.25 sec",
      "Critical Hit Chance: 6.00%",
      "Requires: Level (1—90), (4—157) Int"
    ]
  },
  "Lightning Warp": {
    "excerpt": "Target an enemy to either teleport inside the target's body if they are under the Cull threshold, causing it to violently explode, or to apply…",
    "stats": [
      "Tier: 9",
      "Level: (1—20)",
      "Cost: (8—83) Mana",
      "Cast Time: 0.50 sec",
      "Critical Hit Chance: 11.00%",
      "Requires: Level (1—90), (4—157) Int"
    ]
  },
  "Ball Lightning": {
    "excerpt": "Fire a slow-moving Projectile that moves through enemies. The Projectile itself does not Hit enemies, but repeatedly discharges bolts of Lightning at nearby enemies. Consumes…",
    "stats": [
      "Tier: 11",
      "Level: (1—20)",
      "Cost: (9—96) Mana",
      "Cast Time: 1.00 sec",
      "Critical Hit Chance: 9.00%",
      "Projectile Speed: 4 metres per Second",
      "Requires: Level (1—90), (4—157) Int",
      "Critical Hit Chance: 7.00%"
    ]
  },
  "Comet": {
    "excerpt": "Call down a mass of ice from the sky, dealing high damage at the targeted location. Targeting close to you will cause you to jump…",
    "stats": [
      "Tier: 11",
      "Level: (1—20)",
      "Cost: (17—173) Mana",
      "Cast Time: 1.00 sec",
      "Critical Hit Chance: 13.00%",
      "Requires: Level (1—90), (4—157) Int"
    ]
  },
  "Firestorm": {
    "excerpt": "Rain a storm of flaming bolts over the targeted area. Can Consume all three types of Elemental Infusion, creating a much larger storm when Fire-Infused,…",
    "stats": [
      "Tier: 11",
      "Level: (1—20)",
      "Cost: (14—147) Mana",
      "Cast Time: 1.40 sec",
      "Critical Hit Chance: 7.00%",
      "Requires: Level (1—90), (4—157) Int"
    ]
  },
  "Eye of Winter": {
    "excerpt": "Fire a single Eye Projectile which does not Hit enemies. The Eye constantly releases damaging shard Projectiles in a spiral as it flies. If the…",
    "stats": [
      "Tier: 13",
      "Level: (1—20)",
      "Cost: (19—195) Mana",
      "Cooldown Time: 10.00 s",
      "Cast Time: 1.40 sec",
      "Critical Hit Chance: 12.00%",
      "Projectile Speed: 2.25 metres per Second",
      "Requires: Level (1—90), (4—157) Int"
    ]
  },
  "Flameblast": {
    "excerpt": "Channel to build destructive energy around you. Releasing the energy causes a devastating explosion that is larger and more intense the longer you Channel for.",
    "stats": [
      "Tier: 13",
      "Level: (1—20)",
      "Cost: (5.62—57.5) Mana per second",
      "Cooldown Time: 10.00 s",
      "Cast Time: 0.25 sec",
      "Critical Hit Chance: 8.00%",
      "Requires: Level (1—90), (4—157) Int"
    ]
  },
  "Lightning Conduit": {
    "excerpt": "Call down Lightning to hit all enemies in a cone in front of you, dealing significantly more damage to Shocked enemies. If there is a…",
    "stats": [
      "Tier: 13",
      "Level: (1—20)",
      "Cost: (19—195) Mana",
      "Cooldown Time: 8.00 s",
      "Cast Time: 1.00 sec",
      "Critical Hit Chance: 10.00%",
      "Requires: Level (1—90), (4—157) Int"
    ]
  },
  "Archmage": {
    "excerpt": "While active, causes your Non-Channelling Spells to cost additional mana and deal extra Lightning damage, both based on your maximum Mana.",
    "stats": [
      "Tier: 14",
      "Level: (1—20)",
      "Reservation: 100 Spirit",
      "Requires: Level (1—90), (4—157) Int"
    ]
  },
  "Cast on Elemental Ailment": {
    "excerpt": "While active, gains Energy when you Freeze, Shock, or Ignite enemies, and triggers socketed spells on reaching maximum Energy.",
    "stats": [
      "Tier: 14",
      "Level: (1—20)",
      "Reservation: 100 Spirit",
      "Requires: Level (1—90), (4—157) Int"
    ]
  },
  "Elemental Conflux": {
    "excerpt": "Tap into a current of raw and unpredictable Elemental power, causing you to deal greatly more damage of a randomly chosen Element. The Element affected…",
    "stats": [
      "Tier: 14",
      "Level: (1—20)",
      "Reservation: 60 Spirit",
      "Requires: Level (1—90), (4—157) Int"
    ]
  },
  "Disengage": {
    "excerpt": "Jump back as you rupture the earth in front of you with spearpoints, damaging enemies. Consumes the Parried Debuff on Hitting enemies to release a…",
    "stats": [
      "Tier: 1",
      "Level: (1—20)",
      "Cost: (5—36) Mana",
      "Cooldown Time: 1.50 s",
      "Attack Damage: (85—308)% of base",
      "Requires: Level (1—90), (4—157) Dex",
      "Requires: Spears",
      "Attack Damage: (120—490)%"
    ]
  },
  "Explosive Spear": {
    "excerpt": "Hurl a single payload Spear that pierces through enemies and lodges in terrain where it lands. The Spear will explode at the end of its…",
    "stats": [
      "Tier: 1",
      "Level: (1—20)",
      "Cost: (5—34) Mana",
      "Attack Speed: 80% of base",
      "Attack Damage: (50—156)% of base",
      "Projectile Speed: 30 metres per Second",
      "Requires: Level (1—90), (4—157) Dex",
      "Requires: Spears"
    ]
  },
  "Twister": {
    "excerpt": "Whip up a twister with a flick of your Spear. The twister moves forward erratically, Blinding and repeatedly Hitting enemies within. If a twister touches…",
    "stats": [
      "Tier: 1",
      "Level: (1—20)",
      "Cost: (4—32) Mana",
      "Attack Speed: 80% of base",
      "Attack Damage: (80—232)% of base",
      "Projectile Speed: 7.5 metres per Second",
      "Requires: Level (1—90), (4—157) Dex",
      "Requires: Spears"
    ]
  },
  "Whirling Slash": {
    "excerpt": "Perform a circular slash that kicks up a Whirlwind around you, Slowing enemies and Blinding them in its area of effect. Leaving the area collapses…",
    "stats": [
      "Tier: 1",
      "Level: (1—20)",
      "Cost: (5—39) Mana",
      "Attack Speed: 70% of base",
      "Attack Damage: (70—218)% of base",
      "Requires: Level (1—90), (4—157) Dex",
      "Requires: Spears",
      "Attack Damage: (60—217)%"
    ]
  },
  "Cull The Weak": {
    "excerpt": "Dash to an enemy and run them through, Culling enemies if their life is low enough. If this Attack kills at least one enemy, it…",
    "stats": [
      "Tier: 3",
      "Level: (1—20)",
      "Cost: (6—42) Mana",
      "Attack Speed: 75% of base",
      "Attack Damage: (90—281)% of base",
      "Requires: Level (1—90), (4—157) Dex",
      "Requires: Spears"
    ]
  },
  "Fangs of Frost": {
    "excerpt": "Perform an icy stab that exploits enemies who are already off balance. Hitting a Parried target Consumes the Debuff to cause an explosion of frost…",
    "stats": [
      "Tier: 3",
      "Level: (1—20)",
      "Cost: (4—32) Mana",
      "Attack Speed: 85% of base",
      "Attack Damage: (95—296)% of base",
      "Projectile Speed: 32.6 metres per Second",
      "Requires: Level (1—90), (4—157) Dex",
      "Requires: Spears",
      "Attack Damage: (110—449)%"
    ]
  },
  "Lightning Spear": {
    "excerpt": "Throw a single copy of your spear. When it hits an enemy it bursts, firing secondary lightning bolt Projectiles at multiple other enemies within a…",
    "stats": [
      "Tier: 3",
      "Level: (1—20)",
      "Cost: (6—46) Mana",
      "Attack Speed: 60% of base",
      "Attack Damage: (110—343)% of base",
      "Projectile Speed: 30 metres per Second",
      "Requires: Level (1—90), (4—157) Dex",
      "Requires: Spears"
    ]
  },
  "Rake": {
    "excerpt": "Dash towards an enemy and perform a lacerating slash, inflicting Bleeding on all enemies struck.",
    "stats": [
      "Tier: 3",
      "Level: (1—20)",
      "Cost: (6—40) Mana",
      "Attack Damage: (50—181)% of base",
      "Requires: Level (1—90), (4—157) Dex",
      "Requires: Spears"
    ]
  },
  "Herald of Blood": {
    "excerpt": "While active, killing an enemy with Blood Loss will cause a bloody explosion that deals Physical Attack damage to surrounding enemies. This damage is not…",
    "stats": [
      "Tier: 4",
      "Level: (1—20)",
      "Reservation: 30 Spirit",
      "Requires: Level (1—90), (4—86) Str, (4—86) Dex",
      "Requires: Any Martial Weapon"
    ]
  },
  "Rapid Assault": {
    "excerpt": "Perform a series of six rapid stabs. The final stab inflicts Bleeding and leaves a spearhead stuck in the target, Maiming them for a duration.…",
    "stats": [
      "Tier: 5",
      "Level: (1—20)",
      "Cost: (10—69) Mana",
      "Attack Speed: 40% of base",
      "Attack Damage: (25—78)% of base",
      "Requires: Level (1—90), (4—157) Dex",
      "Requires: Spears",
      "Attack Damage: (100—312)%"
    ]
  },
  "Spearfield": {
    "excerpt": "Stab the ground causing multiple spears to burst out of the ground in front of you in a large area. The spears remain for a…",
    "stats": [
      "Tier: 5",
      "Level: (1—20)",
      "Cost: (5—39) Mana",
      "Attack Speed: 70% of base",
      "Requires: Level (1—90), (4—157) Dex",
      "Requires: Spears",
      "Attack Damage: (50—204)%"
    ]
  },
  "Storm Lance": {
    "excerpt": "Throw an electrified Spear that lodges in the ground and periodically zaps nearby enemies with Lightning bolts. If the Spear is Detonated by another Skill,…",
    "stats": [
      "Tier: 5",
      "Level: (1—20)",
      "Cost: (6—46) Mana",
      "Attack Speed: 60% of base",
      "Attack Damage: (60—187)% of base",
      "Projectile Speed: 30 metres per Second",
      "Requires: Level (1—90), (4—157) Dex",
      "Requires: Spears"
    ]
  },
  "Blood Hunt": {
    "excerpt": "Lunge at a target and skewers them. Hitting an enemy that has suffered Blood Loss will cause a blood explosion and also Consume Bleeding. This…",
    "stats": [
      "Tier: 7",
      "Level: (1—20)",
      "Cost: (5—36) Mana",
      "Attack Damage: (50—243)% of base",
      "Requires: Level (1—90), (4—157) Dex",
      "Requires: Spears",
      "Attack Damage: (100—487)%"
    ]
  },
  "Glacial Lance": {
    "excerpt": "Throw a single Piercing lance that leaves icy fragments in its wake. The fragments Chill nearby enemies. Consumes a Frenzy Charge if possible to cause…",
    "stats": [
      "Tier: 7",
      "Level: (1—20)",
      "Cost: (8—55) Mana",
      "Attack Speed: 60% of base",
      "Attack Damage: (130—405)% of base",
      "Projectile Speed: 32.5 metres per Second",
      "Requires: Level (1—90), (4—157) Dex",
      "Requires: Spears"
    ]
  },
  "Tame Beast": {
    "excerpt": "Conjure Azmeri wisps to engulf a Rare Beast for a duration, Hindering them. If you defeat the Beast while it is engulfed in wisps, it…",
    "stats": [
      "Tier: 7",
      "Level: (1—20)",
      "Cost: (22—99) Mana",
      "Requires: Level (1—90), (4—157) Dex"
    ]
  },
  "Trail of Caltrops": {
    "excerpt": "While active, scatters caltrops in your wake when you dodge.",
    "stats": [
      "Tier: 8",
      "Level: (1—20)",
      "Reservation: 30 Spirit",
      "Requires: Level (1—90), (4—157) Dex",
      "Cost: 0 Mana",
      "Critical Hit Chance: 5.00%",
      "Attack Damage: (35—143)% of base",
      "Projectile Speed: 4 metres per Second"
    ]
  },
  "Bloodhound's Mark": {
    "excerpt": "Mark a target, making them suffer Heavy Stun build up from Blood Loss. The Mark will Activate, Consuming itself to Trigger Blood Explosion, when they…",
    "stats": [
      "Tier: 9",
      "Level: (1—20)",
      "Cost: (18—79) Mana",
      "Cooldown Time: 0.50 s",
      "Requires: Level (1—90), (4—157) Dex",
      "Cost: 0 Mana",
      "Critical Hit Chance: 5.00%",
      "Attack Damage: (100—408)% of base"
    ]
  },
  "Primal Strikes": {
    "excerpt": "Perform a Lightning-charged stab that can be chained into a combination of up to three attacks. The first two attacks conjure a charging Wildwood spirit…",
    "stats": [
      "Tier: 9",
      "Level: (1—20)",
      "Cost: (5—38) Mana",
      "Attack Speed: 80% of base",
      "Attack Damage: (80—250)% of base",
      "Requires: Level (1—90), (4—157) Dex",
      "Requires: Spears"
    ]
  },
  "Thunderous Leap": {
    "excerpt": "Leap into the air and plunge your Spear into the ground at the target location, emitting a Lightning-charged shockwave.",
    "stats": [
      "Tier: 9",
      "Level: (1—20)",
      "Cost: (11—76) Mana",
      "Attack Damage: (110—449)% of base",
      "Requires: Level (1—90), (4—157) Dex",
      "Requires: Spears"
    ]
  },
  "Elemental Sundering": {
    "excerpt": "Plunge your Spear into the ground to emit a pulse that Consumes Freeze, Shock and Ignite on a number of nearby enemies, Allies and Corpses.…",
    "stats": [
      "Tier: 11",
      "Level: (1—20)",
      "Cost: (7—50) Mana",
      "Attack Speed: 55% of base",
      "Requires: Level (1—90), (4—157) Dex",
      "Requires: Spears",
      "Attack Damage: (350—1429)%",
      "Attack Damage: (125—510)%"
    ]
  },
  "Whirlwind Lance": {
    "excerpt": "Throw a Spear with enough force to kick up a Whirlwind where it lands, Slowing enemies and Blinding them in its area of effect. Entering…",
    "stats": [
      "Tier: 11",
      "Level: (1—20)",
      "Cost: (6—46) Mana",
      "Attack Speed: 60% of base",
      "Attack Damage: (110—343)% of base",
      "Projectile Speed: 30 metres per Second",
      "Requires: Level (1—90), (4—157) Dex",
      "Requires: Spears",
      "Attack Damage: (60—217)%"
    ]
  },
  "Spear of Solaris": {
    "excerpt": "Build Glory by inflicting Freeze, Shock or Ignite on enemies. When you have maximum Glory you may call forth the Azmeri goddess Solaris, jumping backwards…",
    "stats": [
      "Tier: 13",
      "Level: (1—20)",
      "Cost: (13—91) Mana",
      "Attack Damage: (150—612)% of base",
      "Requires: Level (1—90), (4—157) Dex",
      "Requires: Spears",
      "Attack Damage: (27—110)%"
    ]
  },
  "Wind Serpent's Fury": {
    "excerpt": "Consume all Frenzy Charges to perform a gigantic spear thrust that Knocks Back enemies. For each Frenzy Charge consumed, a Wind Serpent follows in the…",
    "stats": [
      "Tier: 13",
      "Level: (1—20)",
      "Cost: (10—69) Mana",
      "Attack Speed: 40% of base",
      "Attack Damage: (165—598)% of base",
      "Requires: Level (1—90), (4—157) Dex",
      "Requires: Spears",
      "Attack Damage: (55—199)%"
    ]
  },
  "Trinity": {
    "excerpt": "Become attuned to all Elements building up Fire, Cold and Lightning Affinity based off the highest Elemental Damage type dealt by your Hits. Your Elemental…",
    "stats": [
      "Tier: 14",
      "Level: (1—20)",
      "Reservation: 100 Spirit",
      "Requires: Level (1—90), (4—86) Dex, (4—86) Int"
    ]
  },
  "Armour Piercing Rounds": {
    "excerpt": "Load your Crossbow with a clip of bolts that can be fired rapidly and Break enemy Armour. Using this Skill again reloads the clip.",
    "stats": [
      "Tier: 1",
      "Level: (1—20)",
      "Cost: (8—55) Mana",
      "Requires: Level (1—90), (4—86) Str, (4—86) Dex",
      "Requires: Crossbows",
      "Cost: 0 Mana",
      "Attack Speed: 425% of base",
      "Attack Damage: (25—91)% of base",
      "Projectile Speed: 32.5 metres per Second"
    ]
  },
  "Explosive Grenade": {
    "excerpt": "Fire a bouncing Grenade that unleashes a devastating fiery blast when its fuse expires.",
    "stats": [
      "Tier: 1",
      "Level: (1—20)",
      "Cost: (10—68) Mana",
      "Cooldown Time: 5.00 s (3 Times)",
      "Attack Speed: 75% of base",
      "Attack Damage: (215—878)% of base",
      "Projectile Speed: 8 metres per Second",
      "Requires: Level (1—90), (4—86) Str, (4—86) Dex",
      "Requires: Crossbows"
    ]
  },
  "Fragmentation Rounds": {
    "excerpt": "Load your Crossbow with Piercing bolts that fragment in flight. Bolts that hit a Frozen enemy Consume the Freeze and cause an explosion of shrapnel.…",
    "stats": [
      "Tier: 1",
      "Level: (1—20)",
      "Cost: (7—53) Mana",
      "Requires: Level (1—90), (4—86) Str, (4—86) Dex",
      "Requires: Crossbows",
      "Cost: 0 Mana",
      "Attack Damage: (20—72)% of base",
      "Projectile Speed: 40 metres per Second"
    ]
  },
  "Permafrost Bolts": {
    "excerpt": "Load your Crossbow with icy bolts that fragment in flight, damaging enemies on hit and in a small cone behind their final target. The icy…",
    "stats": [
      "Tier: 1",
      "Level: (1—20)",
      "Cost: (6—44) Mana",
      "Requires: Level (1—90), (4—86) Str, (4—86) Dex",
      "Requires: Crossbows",
      "Cost: 0 Mana",
      "Attack Damage: (17—49)% of base",
      "Projectile Speed: 28 metres per Second"
    ]
  },
  "Flash Grenade": {
    "excerpt": "Fire a bouncing Grenade that unleashes a Blinding, Stunning explosion when its fuse expires.",
    "stats": [
      "Tier: 3",
      "Level: (1—20)",
      "Cost: (7—53) Mana",
      "Cooldown Time: 5.00 s",
      "Attack Speed: 75% of base",
      "Attack Damage: (100—408)% of base",
      "Projectile Speed: 8 metres per Second",
      "Requires: Level (1—90), (4—86) Str, (4—86) Dex",
      "Requires: Crossbows"
    ]
  },
  "High Velocity Rounds": {
    "excerpt": "Load your Crossbow with Piercing bolts that apply Riven Armour to enemies with Fully Broken Armour, causing any Hits against those enemies to deal extra…",
    "stats": [
      "Tier: 3",
      "Level: (1—20)",
      "Cost: (6—47) Mana",
      "Requires: Level (1—90), (4—86) Str, (4—86) Dex",
      "Requires: Crossbows",
      "Cost: 0 Mana",
      "Attack Damage: (160—464)% of base",
      "Projectile Speed: 42 metres per Second"
    ]
  },
  "Incendiary Shot": {
    "excerpt": "Load your Crossbow with flaming bolts that fragment in flight, damaging and Igniting enemies on hit and in a small cone behind their final target.…",
    "stats": [
      "Tier: 3",
      "Level: (1—20)",
      "Cost: (6—44) Mana",
      "Requires: Level (1—90), (4—86) Str, (4—86) Dex",
      "Requires: Crossbows",
      "Cost: 0 Mana",
      "Attack Damage: (10—36)% of base",
      "Projectile Speed: 34.2 metres per Second"
    ]
  },
  "Attrition": {
    "excerpt": "While active, causes you to deal more Hit damage to Rare and Unique enemies the longer you've been fighting them, and gain Culling Strike against…",
    "stats": [
      "Tier: 4",
      "Level: (1—20)",
      "Reservation: 30 Spirit",
      "Requires: Level (1—90), (4—86) Str, (4—86) Dex"
    ]
  },
  "War Banner": {
    "excerpt": "While active, Attacking enemies builds Glory. When you have maximum Glory, you can place an inspiring Banner for a duration with an Aura that grants…",
    "stats": [
      "Tier: 4",
      "Level: (1—20)",
      "Reservation: 30 Spirit",
      "Requires: Level (1—90), (4—86) Str, (4—86) Dex"
    ]
  },
  "Galvanic Shards": {
    "excerpt": "Load your Crossbow with charged bolts that fragment in flight, releasing Chaining Lightning beams when they Hit enemies. These fragments can Merge.",
    "stats": [
      "Tier: 5",
      "Level: (1—20)",
      "Cost: (6—44) Mana",
      "Requires: Level (1—90), (4—86) Str, (4—86) Dex",
      "Requires: Crossbows",
      "Cost: 0 Mana",
      "Attack Damage: (15—54)% of base",
      "Projectile Speed: 50 metres per Second"
    ]
  },
  "Ice Shards": {
    "excerpt": "Load your Crossbow with a clip of icy bolts that rapidly fire at the ground, leaving a shard of ice at the impact location that…",
    "stats": [
      "Tier: 5",
      "Level: (1—20)",
      "Cost: (12—85) Mana",
      "Requires: Level (1—90), (4—86) Str, (4—86) Dex",
      "Requires: Crossbows",
      "Cost: 0 Mana",
      "Attack Speed: 550% of base",
      "Attack Damage: (8—29)% of base",
      "Projectile Speed: 29.25 metres per Second"
    ]
  },
  "Rapid Shot": {
    "excerpt": "Load your Crossbow with a large clip of heated bolts. Heat builds up on your Crossbow as you fire them, and reaching maximum Heat will…",
    "stats": [
      "Tier: 5",
      "Level: (1—20)",
      "Cost: (27—186) Mana",
      "Requires: Level (1—90), (4—86) Str, (4—86) Dex",
      "Requires: Crossbows",
      "Cost: 0 Mana",
      "Attack Speed: 550% of base",
      "Attack Damage: (26—94)% of base",
      "Projectile Speed: 32.5 metres per Second"
    ]
  },
  "Gas Grenade": {
    "excerpt": "Fire a bouncing Grenade that causes a burst of Poison gas when its fuse expires, damaging enemies and leaving behind a growing Poison cloud. Burning…",
    "stats": [
      "Tier: 5",
      "Level: (1—20)",
      "Cost: (12—86) Mana",
      "Cooldown Time: 3.00 s (3 Times)",
      "Attack Speed: 75% of base",
      "Attack Damage: (40—163)% of base",
      "Projectile Speed: 8 metres per Second",
      "Requires: Level (1—90), (4—86) Str, (4—86) Dex",
      "Requires: Crossbows"
    ]
  },
  "Artillery Ballista": {
    "excerpt": "Deploy a Ballista Totem that rains down a salvo of Pinning, Maiming bolts.",
    "stats": [
      "Tier: 7",
      "Level: (1—20)",
      "Cost: (14—95) Mana",
      "Requires: Level (1—90), (4—86) Str, (4—86) Dex",
      "Requires: Crossbows",
      "Attack Speed: 25% of base",
      "Attack Damage: (15—40)% of base",
      "Projectile Speed: 32.6 metres per Second"
    ]
  },
  "Explosive Shot": {
    "excerpt": "Load your Crossbow with flaming bolts that explode on impact. The explosion will cause any Grenades in its area of effect to also explode.",
    "stats": [
      "Tier: 7",
      "Level: (1—20)",
      "Cost: (9—64) Mana",
      "Requires: Level (1—90), (4—86) Str, (4—86) Dex",
      "Requires: Crossbows",
      "Cost: 0 Mana",
      "Attack Speed: 70% of base",
      "Attack Damage: (130—405)% of base",
      "Projectile Speed: 23.4 metres per Second"
    ]
  },
  "Glacial Bolt": {
    "excerpt": "Load your Crossbow with icy bolts that create two walls of Ice Crystals at the end of their flight.",
    "stats": [
      "Tier: 7",
      "Level: (1—20)",
      "Cost: (7—49) Mana",
      "Requires: Level (1—90), (4—86) Str, (4—86) Dex",
      "Requires: Crossbows",
      "Cost: 0 Mana",
      "Attack Damage: (40—145)% of base",
      "Projectile Speed: 40 metres per Second"
    ]
  },
  "Voltaic Grenade": {
    "excerpt": "Fire a bouncing Grenade that discharges an Electrocuting Lightning blast when its fuse expires, causing all Lightning Hits against enemies to contribute to Electrocution buildup…",
    "stats": [
      "Tier: 7",
      "Level: (1—20)",
      "Cost: (10—73) Mana",
      "Cooldown Time: 4.00 s (3 Times)",
      "Attack Speed: 75% of base",
      "Attack Damage: (80—327)% of base",
      "Projectile Speed: 8 metres per Second",
      "Requires: Level (1—90), (4—86) Str, (4—86) Dex",
      "Requires: Crossbows"
    ]
  },
  "Defiance Banner": {
    "excerpt": "While active, Attacking enemies builds Glory. When you have maximum Glory, you can place an inspiring Banner for a duration with an Aura that grants…",
    "stats": [
      "Tier: 8",
      "Level: (1—20)",
      "Reservation: 30 Spirit",
      "Requires: Level (1—90), (4—86) Str, (4—86) Dex"
    ]
  },
  "Shard Scavenger": {
    "excerpt": "While active, Consuming Freeze, Shock, Ignite, or Fully Broken Armour on an enemy reloads your Crossbow, restores one cooldown use for your Grenades and grants…",
    "stats": [
      "Tier: 8",
      "Level: (1—20)",
      "Reservation: 30 Spirit",
      "Requires: Level (1—90), (4—86) Str, (4—86) Dex",
      "Requires: Crossbows"
    ]
  },
  "Oil Grenade": {
    "excerpt": "Fire a bouncing Grenade that bursts in a spray of Oil when the fuse expires or when it impacts an Enemy, dealing minimal damage but…",
    "stats": [
      "Tier: 9",
      "Level: (1—20)",
      "Cost: (9—60) Mana",
      "Cooldown Time: 4.00 s (3 Times)",
      "Attack Speed: 75% of base",
      "Attack Damage: (100—408)% of base",
      "Projectile Speed: 8 metres per Second",
      "Requires: Level (1—90), (4—86) Str, (4—86) Dex",
      "Requires: Crossbows"
    ]
  },
  "Siege Ballista": {
    "excerpt": "Deploy a Ballista Totem that fires bolts skyward, to explode a short time after landing.",
    "stats": [
      "Tier: 9",
      "Level: (1—20)",
      "Cost: (18—121) Mana",
      "Requires: Level (1—90), (4—86) Str, (4—86) Dex",
      "Requires: Crossbows",
      "Attack Speed: 25% of base",
      "Attack Damage: (25—66)% of base",
      "Projectile Speed: 20 metres per Second"
    ]
  },
  "Stormblast Bolts": {
    "excerpt": "Load your Crossbow with charged bolts that land around the target location and explode if hit by a Detonator Skill. Using this Skill again reloads…",
    "stats": [
      "Tier: 9",
      "Level: (1—20)",
      "Cost: (9—63) Mana",
      "Requires: Level (1—90), (4—86) Str, (4—86) Dex",
      "Requires: Crossbows",
      "Cost: 0 Mana",
      "Attack Damage: (20—72)% of base",
      "Projectile Speed: 20 metres per Second"
    ]
  },
  "Emergency Reload": {
    "excerpt": "Instantly reload all your Crossbow Ammunition clips and Empower each clip's Ammunition to deal more damage for a duration.",
    "stats": [
      "Tier: 11",
      "Level: (1—20)",
      "Cost: (12—82) Mana",
      "Cooldown Time: 45.00 s",
      "Requires: Level (1—90), (4—86) Str, (4—86) Dex",
      "Requires: Crossbows"
    ]
  },
  "Hailstorm Rounds": {
    "excerpt": "Passively generate bolts of ice at a frequency equal to reload time, up to a cap. Activate to Load the accumulated bolts into your Crossbow.…",
    "stats": [
      "Tier: 11",
      "Level: (1—20)",
      "Cost: (28—193) Mana",
      "Requires: Level (1—90), (4—86) Str, (4—86) Dex",
      "Requires: Crossbows",
      "Cost: (24—163) Mana",
      "Attack Speed: 55% of base",
      "Attack Damage: (63—228)% of base",
      "Projectile Speed: 14 metres per Second"
    ]
  },
  "Mortar Cannon": {
    "excerpt": "Raise a cannon Ballista Totem which uses socketed Grenade Skills, with significantly improved Cooldown Recovery Rate.",
    "stats": [
      "Tier: 11",
      "Level: (1—20)",
      "Cost: (18—121) Mana",
      "Requires: Level (1—90), (4—86) Str, (4—86) Dex",
      "Requires: Crossbows"
    ]
  },
  "Shockburst Rounds": {
    "excerpt": "Load your Crossbow with a clip of charged bolts which release damaging pulses upon Hitting an enemy affected by a Lightning Ailment. Using this Skill…",
    "stats": [
      "Tier: 11",
      "Level: (1—20)",
      "Cost: (14—100) Mana",
      "Requires: Level (1—90), (4—86) Str, (4—86) Dex",
      "Requires: Crossbows",
      "Cost: 0 Mana",
      "Attack Speed: 400% of base",
      "Attack Damage: (10—36)% of base",
      "Projectile Speed: 35 metres per Second"
    ]
  },
  "Cluster Grenade": {
    "excerpt": "Fire a bouncing Grenade that explodes when its fuse expires, throwing out a ring of mini Grenades that explode when they come to a stop.",
    "stats": [
      "Tier: 13",
      "Level: (1—20)",
      "Cost: (14—99) Mana",
      "Cooldown Time: 10.00 s",
      "Attack Speed: 75% of base",
      "Attack Damage: (120—490)% of base",
      "Projectile Speed: 8 metres per Second",
      "Requires: Level (1—90), (4—86) Str, (4—86) Dex",
      "Requires: Crossbows"
    ]
  },
  "Plasma Blast": {
    "excerpt": "Load your Crossbow with unstable bolts that require a lengthy charging period to fire but deal devastating damage, Pierce through enemies, and explode upon hitting…",
    "stats": [
      "Tier: 13",
      "Level: (1—20)",
      "Cost: (18—122) Mana",
      "Requires: Level (1—90), (4—86) Str, (4—86) Dex",
      "Requires: Crossbows",
      "Cost: 0 Mana",
      "Attack Damage: (830—3389)% of base",
      "Projectile Speed: 72 metres per Second"
    ]
  },
  "Siege Cascade": {
    "excerpt": "Load your Crossbow with enemy-seeking payloads which are fired into the air, dropping a bolt near every enemy in the target area. These bolts lodge…",
    "stats": [
      "Tier: 13",
      "Level: (1—20)",
      "Cost: (12—81) Mana",
      "Requires: Level (1—90), (4—86) Str, (4—86) Dex",
      "Requires: Crossbows",
      "Cost: 0 Mana",
      "Attack Speed: 75% of base",
      "Attack Damage: (40—145)% of base",
      "Projectile Speed: 20 metres per Second"
    ]
  },
  "Charge Regulation": {
    "excerpt": "While active, you gain powerful Buffs based on your active Charges. However, maintaining the Buff Consumes Charges every few seconds.",
    "stats": [
      "Tier: 14",
      "Level: (1—20)",
      "Reservation: 30 Spirit",
      "Requires: Level (1—90), (4—86) Dex, (4—86) Int"
    ]
  },
  "Falling Thunder": {
    "excerpt": "Suffuse your Quarterstaff with electrical energy, then Slam the ground to deal damage in a large cone in front of you. Consumes your Power Charges…",
    "stats": [
      "Tier: 1",
      "Level: (1—20)",
      "Cost: (11—76) Mana",
      "Attack Speed: 60% of base",
      "Attack Damage: (140—437)% of base",
      "Projectile Speed: 16 metres per Second",
      "Requires: Level (1—90), (4—86) Dex, (4—86) Int",
      "Requires: Quarterstaves"
    ]
  },
  "Frozen Locus": {
    "excerpt": "Leap backward and crack the ground with your staff to call forth an Ice Crystal which can be damaged by you and enemies. If the…",
    "stats": [
      "Tier: 1",
      "Level: (1—20)",
      "Cost: (12—81) Mana",
      "Attack Speed: 70% of base",
      "Requires: Level (1—90), (4—86) Dex, (4—86) Int",
      "Requires: Quarterstaves",
      "Attack Damage: (150—612)%"
    ]
  },
  "Glacial Cascade": {
    "excerpt": "Sweep your Quarterstaff upwards, releasing an icy fissure which deals damage in a series of bursts culminating in a large spike. Frozen enemies hit by…",
    "stats": [
      "Tier: 1",
      "Level: (1—20)",
      "Cost: (9—63) Mana",
      "Attack Speed: 75% of base",
      "Attack Damage: (40—125)% of base",
      "Requires: Level (1—90), (4—86) Dex, (4—86) Int",
      "Requires: Quarterstaves",
      "Attack Damage: (120—374)%"
    ]
  },
  "Killing Palm": {
    "excerpt": "Dash to an enemy and Strike them, Culling enemies if their life is low enough and performing additional dashing Strikes to other Cullable targets in…",
    "stats": [
      "Tier: 1",
      "Level: (1—20)",
      "Cost: (6—42) Mana",
      "Attack Speed: 75% of base",
      "Attack Damage: (90—281)% of base",
      "Requires: Level (1—90), (4—86) Dex, (4—86) Int",
      "Requires: Quarterstaves"
    ]
  },
  "Staggering Palm": {
    "excerpt": "Dash to an enemy and Strike them, instantly Heavily Stunning enemies which are Primed for Stun and performing additional dashing Strikes to other Primed targets…",
    "stats": [
      "Tier: 3",
      "Level: (1—20)",
      "Cost: (7—47) Mana",
      "Attack Speed: 75% of base",
      "Attack Damage: (80—250)% of base",
      "Requires: Level (1—90), (4—86) Dex, (4—86) Int",
      "Requires: Quarterstaves",
      "Attack Damage: (50—204)% of base",
      "Projectile Speed: 31.5 metres per Second"
    ]
  },
  "Tempest Bell": {
    "excerpt": "Build Combo by successfully Striking Enemies with other skills. After reaching maximum Combo, use this skill to cause the Bell on your staff to grow…",
    "stats": [
      "Tier: 3",
      "Level: (1—20)",
      "Cost: (14—98) Mana",
      "Cooldown Time: 0.50 s",
      "Attack Speed: 120% of base",
      "Requires: Level (1—90), (4—86) Dex, (4—86) Int",
      "Requires: Quarterstaves",
      "Attack Damage: (100—408)%"
    ]
  },
  "Wind Blast": {
    "excerpt": "Batter enemies at range by generating a gust of wind as you swing. Enemies will be Dazed and Knocked Back based on how close they…",
    "stats": [
      "Tier: 3",
      "Level: (1—20)",
      "Cost: (9—63) Mana",
      "Attack Speed: 75% of base",
      "Attack Damage: (85—265)% of base",
      "Projectile Speed: 32.6 metres per Second",
      "Requires: Level (1—90), (4—86) Dex, (4—86) Int",
      "Requires: Quarterstaves"
    ]
  },
  "Ghost Dance": {
    "excerpt": "While active, causes you to periodically gain Ghost Shrouds. If you are Hit while you have a Ghost Shroud, it is immediately consumed to recover…",
    "stats": [
      "Tier: 4",
      "Level: (1—20)",
      "Reservation: 30 Spirit",
      "Requires: Level (1—90), (4—86) Dex, (4—86) Int"
    ]
  },
  "Herald of Ice": {
    "excerpt": "While active, Shattering an enemy with a non-Herald Attack Hit will cause an icy explosion that deals Attack damage to surrounding enemies.",
    "stats": [
      "Tier: 4",
      "Level: (1—20)",
      "Reservation: 30 Spirit",
      "Requires: Level (1—90), (4—86) Dex, (4—86) Int",
      "Requires: Any Martial Weapon",
      "Attack Damage: (70—286)%"
    ]
  },
  "Ice Strike": {
    "excerpt": "Perform a fast icy Strike. Using this Attack three times in quick succession causes a final strike that is slower and more powerful.",
    "stats": [
      "Tier: 5",
      "Level: (1—20)",
      "Cost: (5—36) Mana",
      "Attack Speed: 140% of base",
      "Attack Damage: (60—187)% of base",
      "Requires: Level (1—90), (4—86) Dex, (4—86) Int",
      "Requires: Quarterstaves",
      "Attack Damage: (130—405)%"
    ]
  },
  "Tempest Flurry": {
    "excerpt": "Perform a series of aggressive Strikes. When used in quick succession, the third use Strikes three times, and the fourth use performs a Final Strike…",
    "stats": [
      "Tier: 5",
      "Level: (1—20)",
      "Cost: (5—37) Mana",
      "Attack Speed: 140% of base",
      "Attack Damage: (45—140)% of base",
      "Requires: Level (1—90), (4—86) Dex, (4—86) Int",
      "Requires: Quarterstaves",
      "Attack Damage: (90—90)%"
    ]
  },
  "Vaulting Impact": {
    "excerpt": "Leap forward and Slam the ground, sending out a shockwave. The shockwave applies Broken Stance to Dazed enemies, causing any Hits against those enemies to…",
    "stats": [
      "Tier: 5",
      "Level: (1—20)",
      "Cost: (12—83) Mana",
      "Attack Damage: (160—422)% of base",
      "Requires: Level (1—90), (4—86) Dex, (4—86) Int",
      "Requires: Quarterstaves",
      "Attack Damage: (160—100)%"
    ]
  },
  "Siphoning Strike": {
    "excerpt": "Dash to a target and Strike them with your Quarterstaff. If the target is Shocked, Consume their Shock to release a Lightning shockwave around the…",
    "stats": [
      "Tier: 7",
      "Level: (1—20)",
      "Cost: (7—47) Mana",
      "Attack Damage: (75—234)% of base",
      "Requires: Level (1—90), (4—86) Dex, (4—86) Int",
      "Requires: Quarterstaves",
      "Attack Damage: (200—624)%"
    ]
  },
  "Storm Wave": {
    "excerpt": "Sweep your Quarterstaff, projecting a bolt of Lightning through the ground in a long fissure ahead of you.",
    "stats": [
      "Tier: 7",
      "Level: (1—20)",
      "Cost: (8—54) Mana",
      "Attack Speed: 75% of base",
      "Attack Damage: (110—343)% of base",
      "Requires: Level (1—90), (4—86) Dex, (4—86) Int",
      "Requires: Quarterstaves"
    ]
  },
  "Wave of Frost": {
    "excerpt": "Flip backwards and send forth a Freezing wave in front of you, immediately Freezing enemies which are Primed for Freeze.",
    "stats": [
      "Tier: 7",
      "Level: (1—20)",
      "Cost: (14—100) Mana",
      "Attack Speed: 55% of base",
      "Attack Damage: (65—235)% of base",
      "Requires: Level (1—90), (4—86) Dex, (4—86) Int",
      "Requires: Quarterstaves"
    ]
  },
  "Lingering Illusion": {
    "excerpt": "While active, creates a short-lived illusory copy of yourself whenever you dodge roll. The copy can be damaged by enemies, and copies that are destroyed…",
    "stats": [
      "Tier: 8",
      "Level: (1—20)",
      "Reservation: 30 Spirit",
      "Requires: Level (1—90), (4—86) Dex, (4—86) Int",
      "Cost: 10 Mana"
    ]
  },
  "Charged Staff": {
    "excerpt": "Consume all Power Charges to charge your Quarterstaff with electricity, adding Lightning damage and a Lightning shockwave to your Quarterstaff Attacks. Reusing this skill while…",
    "stats": [
      "Tier: 9",
      "Level: (1—20)",
      "Cost: (15—65) Mana",
      "Cast Time: 0.75 sec",
      "Requires: Level (1—90), (4—86) Dex, (4—86) Int",
      "Requires: Quarterstaves",
      "Cast Time: 0.75 sec",
      "Attack Damage: (25—66)% of base"
    ]
  },
  "Hand of Chayula": {
    "excerpt": "Dash to an enemy and Strike them, triggering socketed Marks with increased effect and applying socketed Curses with increased duration.",
    "stats": [
      "Tier: 9",
      "Level: (1—20)",
      "Cost: (11—79) Mana",
      "Attack Speed: 89% of base",
      "Attack Damage: (67—209)% of base",
      "Requires: Level (1—90), (4—86) Dex, (4—86) Int",
      "Requires: Quarterstaves"
    ]
  },
  "Mantra of Destruction": {
    "excerpt": "Build Combo by successfully Striking Enemies with other skills. After reaching maximum Combo, use this skill to Empower your next Quarterstaff Attack, causing it to…",
    "stats": [
      "Tier: 9",
      "Level: (1—20)",
      "Cost: 0 Mana",
      "Requires: Level (1—90), (4—86) Dex, (4—86) Int",
      "Requires: Quarterstaves"
    ]
  },
  "Shattering Palm": {
    "excerpt": "Dash to an enemy and Strike them with an Attack that manifests a wave of cold, coating nearby enemies in shards of ice. Dealing enough…",
    "stats": [
      "Tier: 11",
      "Level: (1—20)",
      "Cost: (5—40) Mana",
      "Attack Speed: 75% of base",
      "Attack Damage: (35—109)% of base",
      "Requires: Level (1—90), (4—86) Dex, (4—86) Int",
      "Requires: Quarterstaves",
      "Attack Damage: (120—374)% of base"
    ]
  },
  "Whirling Assault": {
    "excerpt": "Advance while hitting enemies around you with a series of spinning Strikes.",
    "stats": [
      "Tier: 11",
      "Level: (1—20)",
      "Cost: (18—126) Mana",
      "Attack Speed: 85% of base",
      "Attack Damage: (40—163)% of base",
      "Projectile Speed: 32.6 metres per Second",
      "Requires: Level (1—90), (4—86) Dex, (4—86) Int",
      "Requires: Quarterstaves"
    ]
  },
  "Flicker Strike": {
    "excerpt": "Teleport to an enemy and Strike them. Consumes Power Charges to perform additional teleporting Strikes on nearby enemies.",
    "stats": [
      "Tier: 13",
      "Level: (1—20)",
      "Cost: (12—85) Mana",
      "Attack Speed: 50% of base",
      "Attack Damage: (80—327)% of base",
      "Requires: Level (1—90), (4—86) Dex, (4—86) Int",
      "Requires: Quarterstaves"
    ]
  },
  "Gathering Storm": {
    "excerpt": "Flip backward and Channel to charge your Quarterstaff with Lightning. Releasing causes you to dash towards the target location, damaging enemies along the way. Releasing…",
    "stats": [
      "Tier: 13",
      "Level: (1—20)",
      "Cost: (7.9—53.38) Mana per second",
      "Attack Damage: (120—435)% of base",
      "Requires: Level (1—90), (4—86) Dex, (4—86) Int",
      "Requires: Quarterstaves",
      "Attack Damage: (280—1014)%"
    ]
  },
  "Cast on Dodge": {
    "excerpt": "While active, gains Energy when you dodge roll and triggers socketed spells on reaching maximum Energy.",
    "stats": [
      "Tier: 14",
      "Level: (1—20)",
      "Reservation: 100 Spirit",
      "Requires: Level (1—90), (4—86) Dex, (4—86) Int"
    ]
  },
  "Reaper's Invocation": {
    "excerpt": "While active, gains Energy when you kill an enemy with a Melee Attack. Using the Invocation once sufficient Energy is gathered will consume the Energy…",
    "stats": [
      "Tier: 14",
      "Level: (1—20)",
      "Reservation: 30 Spirit",
      "Cooldown Time: 0.20 s",
      "Requires: Level (1—90), (4—86) Dex, (4—86) Int"
    ]
  },
  "Entangle": {
    "excerpt": "Conjures a rootbound fissure that crawls forward, damaging enemies in its path. While the fissure persists, vines lash out from it and attach to nearby…",
    "stats": [
      "Tier: 1",
      "Level: (1—20)",
      "Cost: (9—95) Mana",
      "Cast Time: 0.90 sec",
      "Critical Hit Chance: 10.00%",
      "Requires: Level (1—90), (4—86) Str, (4—86) Int"
    ]
  },
  "Furious Slam": {
    "excerpt": "Shapeshift into a Bear and Slam the ground with great force, causing a pair of shockwaves. Can spend Rage to create larger shockwaves that leave…",
    "stats": [
      "Tier: 1",
      "Level: (1—20)",
      "Cost: (10—69) Mana",
      "Attack Speed: 70% of base",
      "Attack Damage: (70—254)% of base",
      "Requires: Level (1—90), (4—86) Str, (4—86) Int",
      "Requires: Talismans",
      "Attack Damage: (110—398)%"
    ]
  },
  "Lunar Assault": {
    "excerpt": "Shapeshift into a Werewolf and swipe with your claws, projecting an arc of moonlight and ice forward in a crescent.",
    "stats": [
      "Tier: 1",
      "Level: (1—20)",
      "Cost: (6—46) Mana",
      "Attack Speed: 110% of base",
      "Attack Damage: (40—125)% of base",
      "Requires: Level (1—90), (4—86) Str, (4—86) Int",
      "Requires: Talismans"
    ]
  },
  "Volcano": {
    "excerpt": "Uplift a volcano from the earth, damaging enemies standing on it and releasing a spray of molten Projectiles. While the volcano persists, Slamming it will…",
    "stats": [
      "Tier: 1",
      "Level: (1—20)",
      "Cost: (7—73) Mana (6—61.33) Mana per second",
      "Cast Time: 0.80 sec",
      "Critical Hit Chance: 8.00%",
      "Projectile Speed: 5 metres per Second",
      "Requires: Level (1—90), (4—86) Str, (4—86) Int"
    ]
  },
  "Rolling Magma": {
    "excerpt": "Shapeshift into a Wyvern and lob a ball of magma that deals area damage as it hits the ground. The skillChains, bouncing forward to deal…",
    "stats": [
      "Tier: 3",
      "Level: (1—20)",
      "Cost: (8—83) Mana",
      "Attack Speed: 85% of base",
      "Attack Damage: (70—218)% of base",
      "Projectile Speed: 7.5 metres per Second",
      "Requires: Level (1—90), (4—86) Str, (4—86) Int",
      "Requires: Talismans"
    ]
  },
  "Wing Blast": {
    "excerpt": "Shapeshift into a Wyvern and launch yourself backwards with a powerful wingbeat that Knocks Back enemies. Enemies Primed for Heavy Stun will be stunned, release…",
    "stats": [
      "Tier: 3",
      "Level: (1—20)",
      "Cost: (8—55) Mana",
      "Attack Damage: (85—265)% of base",
      "Requires: Level (1—90), (4—86) Str, (4—86) Int",
      "Requires: Talismans"
    ]
  },
  "Pounce": {
    "excerpt": "Shapeshift into a Werewolf and leap to a target location, damaging enemies in an area around where you land. Predator's Mark will be Triggered targeting…",
    "stats": [
      "Tier: 3",
      "Level: (1—20)",
      "Cost: (15—102) Mana",
      "Cooldown Time: (6.00—5.10) s",
      "Attack Damage: (100—312)% of base",
      "Requires: Level (1—90), (4—86) Str, (4—86) Int",
      "Requires: Talismans"
    ]
  },
  "Briarpatch": {
    "excerpt": "",
    "stats": [
      "Requires: Level 38, 51 Dex",
      "Cost: Briarpatch Laced Boots, Verisium x710, Vorana's Crest of the Scythe x1"
    ]
  },
  "Savage Fury": {
    "excerpt": "While active, your Fury builds from Attacking enemies. Using this Skill releases your Fury to send you into a bestial frenzy, gaining damage and Onslaught…",
    "stats": [
      "Tier: 4",
      "Level: (1—20)",
      "Reservation: 30 Spirit",
      "Requires: Level (1—90), (4—86) Str, (4—86) Int"
    ]
  },
  "Fury of the Mountain": {
    "excerpt": "Shapeshift into a Bear and repeatedly pound the ground, creating Molten Fissures that travel randomly in a wide arc in front of you.",
    "stats": [
      "Tier: 5",
      "Level: (1—20)",
      "Cost: (10—67.52) Mana per second",
      "Attack Speed: 70% of base",
      "Attack Damage: (55—145)% of base",
      "Requires: Level (1—90), (4—86) Str, (4—86) Int",
      "Requires: Talismans"
    ]
  },
  "Thunderstorm": {
    "excerpt": "Conjure a thunderstorm which causes lightning strikes and torrential rain in an area. Enemies in the area are Drenched, causing them to become Shocked or…",
    "stats": [
      "Tier: 5",
      "Level: (1—20)",
      "Cost: (12—129) Mana",
      "Cast Time: 0.90 sec",
      "Critical Hit Chance: 9.00%",
      "Requires: Level (1—90), (4—86) Str, (4—86) Int"
    ]
  },
  "Arctic Howl": {
    "excerpt": "Shapeshift into a Werewolf and let out an icy howl that damages enemies and Freezes Primed enemies. If an enemy is Frozen or a Frozen…",
    "stats": [
      "Tier: 5",
      "Level: (1—20)",
      "Cost: (19—85) Mana",
      "Cooldown Time: 8.00 s",
      "Critical Hit Chance: 10.00%",
      "Requires: Level (1—90), (4—86) Str, (4—86) Int",
      "Requires: Talismans"
    ]
  },
  "Devour": {
    "excerpt": "Shapeshift into a Wyvern and devour a Corpse or Cullable enemy, and additional nearby Corpses. For each enemy or corpse devoured, you regenerate life and…",
    "stats": [
      "Tier: 5",
      "Level: (1—20)",
      "Cost: (8—55) Mana",
      "Attack Speed: 170% of base",
      "Attack Damage: (65—235)% of base",
      "Requires: Level (1—90), (4—86) Str, (4—86) Int",
      "Requires: Talismans"
    ]
  },
  "Ferocious Roar": {
    "excerpt": "Shapeshift into a Bear and roar in defiance, immediately gaining Rage if there are enemies nearby and Empowering subsequent Attacks to Break Armour. Alternatively, socketing…",
    "stats": [
      "Tier: 7",
      "Level: (1—20)",
      "Cost: (19—85) Mana",
      "Cooldown Time: 8.00 s",
      "Requires: Level (1—90), (4—86) Str, (4—86) Int",
      "Requires: Talismans"
    ]
  },
  "Spell Totem": {
    "excerpt": "Consume any combination of 3 Power and/or Endurance Charges to raise a Totem that uses socketed Spells. Cannot use Skills with Cooldowns.",
    "stats": [
      "Tier: 7",
      "Level: (1—20)",
      "Cost: (18—121) Mana",
      "Requires: Level (1—90), (4—86) Str, (4—86) Int"
    ]
  },
  "Cross Slash": {
    "excerpt": "Shapeshift into a Werewolf and leap backwards as you gouge the ground with both claws. Enemies can be Hit separately by both gouges. Hitting a…",
    "stats": [
      "Tier: 7",
      "Level: (1—20)",
      "Cost: (10—67) Mana",
      "Cooldown Time: 2.00 s",
      "Attack Speed: 110% of base",
      "Attack Damage: (65—235)% of base",
      "Requires: Level (1—90), (4—86) Str, (4—86) Int",
      "Requires: Talismans",
      "Attack Damage: (130—471)%"
    ]
  },
  "Barkskin": {
    "excerpt": "While active, taking Hit damage from enemies to your Energy Shield causes you to gain Armour for a short duration. Armour gained from multiple Hits…",
    "stats": [
      "Tier: 8",
      "Level: (1—20)",
      "Reservation: 30 Spirit",
      "Requires: Level (1—90), (4—86) Str, (4—86) Int"
    ]
  },
  "Wolf Pack": {
    "excerpt": "",
    "stats": []
  },
  "Oil Barrage": {
    "excerpt": "Shapeshift into a Wyvern and spit Oil at enemies, creating Oil Ground where the Projectiles land. Consumes Power Charges if possible to instead Channel a…",
    "stats": [
      "Tier: 9",
      "Level: (1—20)",
      "Cost: (6—41) Mana (6—40.5) Mana per second",
      "Attack Speed: 300% of base",
      "Attack Damage: (90—281)% of base",
      "Projectile Speed: 15 metres per Second",
      "Requires: Level (1—90), (4—86) Str, (4—86) Int",
      "Requires: Talismans"
    ]
  },
  "Thrashing Vines": {
    "excerpt": "Spur the growth of huge vines, which emerge randomly within the target area. The vines crash to the ground then retreat, targeting nearby enemies if…",
    "stats": [
      "Tier: 9",
      "Level: (1—20)",
      "Cost: (14—152) Mana",
      "Cast Time: 1.00 sec",
      "Critical Hit Chance: 10.00%",
      "Requires: Level (1—90), (4—86) Str, (4—86) Int"
    ]
  },
  "Rampage": {
    "excerpt": "Shapeshift into a Bear and charge forward, Slamming the ground as you run. Channelling ends after a short amount of time but can be prolonged…",
    "stats": [
      "Tier: 11",
      "Level: (1—20)",
      "Cost: (14—97) Mana 5 Rage per second",
      "Attack Speed: 70% of base",
      "Attack Damage: (75—306)% of base",
      "Requires: Level (1—90), (4—86) Str, (4—86) Int",
      "Requires: Talismans"
    ]
  },
  "Tornado": {
    "excerpt": "Create a storm that sucks in enemies and deals Physical damage over time. A Tornado that overlaps an Elemental Ground Surface absorbs that surface's Debuff,…",
    "stats": [
      "Tier: 11",
      "Level: (1—20)",
      "Cost: (10—110) Mana",
      "Cast Time: 0.75 sec",
      "Requires: Level (1—90), (4—86) Str, (4—86) Int"
    ]
  },
  "Walking Calamity": {
    "excerpt": "Build Glory by gaining Rage while already at maximum Rage. When you have maximum Glory, roar to the heavens to bring them down upon your…",
    "stats": [
      "Tier: 13",
      "Level: (1—20)",
      "Cost: (24—166) Mana",
      "Attack Speed: 70% of base",
      "Attack Damage: 0% of base",
      "Requires: Level (1—90), (4—86) Str, (4—86) Int",
      "Requires: Talismans"
    ]
  },
  "Lunar Blessing": {
    "excerpt": "Shapeshift into a Werewolf and offer your Rage to the moon to receive a blessing, gaining bonus Cold damage for yourself and any Wolf Minions…",
    "stats": [
      "Tier: 13",
      "Level: (1—20)",
      "Cost: (24—166) Mana",
      "Cooldown Time: 22.00 s",
      "Requires: Level (1—90), (4—86) Str, (4—86) Int",
      "Requires: Talismans",
      "Cooldown Time: 1.00 s",
      "Attack Damage: (65—235)% of base"
    ]
  },
  "Flame Breath": {
    "excerpt": "Shapeshift into a Wyvern and take to the skies, immolating enemies with a jet of fire. Channelling ends after a short amount of time but…",
    "stats": [
      "Tier: 13",
      "Level: (1—20)",
      "Cost: (23—157) Mana 6 Rage per second",
      "Cooldown Time: 10.00 s",
      "Attack Speed: 800% of base",
      "Attack Damage: (30—109)% of base",
      "Requires: Level (1—90), (4—86) Str, (4—86) Int",
      "Requires: Talismans"
    ]
  },
  "Eternal Rage": {
    "excerpt": "",
    "stats": []
  },
  "Feral Invocation": {
    "excerpt": "While active, gains Energy when you spend Mana. Using the Invocation once sufficient Energy is gathered will consume the Energy to create visages which attack…",
    "stats": [
      "Tier: 14",
      "Level: (1—20)",
      "Reservation: 60 Spirit",
      "Cooldown Time: 0.20 s",
      "Requires: Level (1—90), (4—86) Str, (4—86) Int",
      "Requires: Talismans"
    ]
  },
  "Maul": {
    "excerpt": "",
    "stats": []
  },
  "Axe Slash": {
    "excerpt": "",
    "stats": []
  },
  "Mace Strike": {
    "excerpt": "",
    "stats": []
  },
  "Sword Slash": {
    "excerpt": "",
    "stats": []
  },
  "Bow Shot": {
    "excerpt": "",
    "stats": [
      "Level: (1—20)",
      "Cost: 0 Mana",
      "Attack Damage: (100—312)% of base",
      "Projectile Speed: 32.6 metres per Second",
      "Requires: Level (1—90)",
      "Requires: Bows"
    ]
  },
  "Claw Stab": {
    "excerpt": "",
    "stats": []
  },
  "Crossbow Shot": {
    "excerpt": "Clear your active Bolt and reload any ammunition.",
    "stats": [
      "Level: (1—20)",
      "Cost: 0 Mana",
      "Attack Damage: (100—362)% of base",
      "Projectile Speed: 60 metres per Second",
      "Requires: Level (1—90)",
      "Requires: Crossbows"
    ]
  },
  "Dagger Stab": {
    "excerpt": "",
    "stats": []
  },
  "Flail Strike": {
    "excerpt": "",
    "stats": []
  },
  "Quarterstaff Strike": {
    "excerpt": "",
    "stats": []
  },
  "Spear Stab": {
    "excerpt": "",
    "stats": []
  },
  "Spear Throw": {
    "excerpt": "Hurl your Spear with force. Consumes a Frenzy Charge if you have one to cause the Spear to explode at the end of its flight.",
    "stats": [
      "Level: (1—20)",
      "Attack Speed: 70% of base",
      "Attack Damage: (125—390)% of base",
      "Projectile Speed: 37 metres per Second",
      "Requires: Level (1—90)",
      "Requires: Spears",
      "Attack Damage: (232—724)%"
    ]
  },
  "Punch": {
    "excerpt": "",
    "stats": []
  },
  "Shred": {
    "excerpt": "Shapeshift into a Werewolf and lash out with a flurry of claw swipes. The first Attack can dash to faraway enemies and the final Attack…",
    "stats": [
      "Level: (1—20)",
      "Cost: 0 Mana",
      "Attack Speed: 200% of base",
      "Attack Damage: (40—125)% of base",
      "Requires: Level (1—90)",
      "Requires: Talismans",
      "Attack Damage: (35—109)%"
    ]
  },
  "Rend": {
    "excerpt": "Shapeshift into a Wyvern and perform a wide slash with your wingtip claws. Consumes a Power Charge if possible to grant you a Buff that…",
    "stats": [
      "Level: (1—20)",
      "Cost: 0 Mana",
      "Attack Speed: 90% of base",
      "Attack Damage: (110—343)% of base",
      "Requires: Level (1—90)",
      "Requires: Talismans",
      "Attack Damage: (130—405)%"
    ]
  },
  "Abyssal Pact": {
    "excerpt": "Sacrifice some of a damageable Minion's life to deal Physical damage in an area around it.",
    "stats": [
      "Level: (1—20)",
      "Cost: 0 Mana",
      "Cast Time: 0.70 sec",
      "Requires: Level (1—90), (4—157) Int"
    ]
  },
  "Unleash": {
    "excerpt": "Place into a Skill's Support Gem socket in the Skills Panel to apply its effects to that Skill. You cannot have multiple Support Gems of…",
    "stats": [
      "Tier: 1"
    ]
  },
  "Bone Blast": {
    "excerpt": "Conjure a circle of ritual inscriptions that last for a short duration. When the duration ends, spikes of bone erupt from enemies in the area,…",
    "stats": [
      "Level: (1—20)",
      "Cost: 0 Mana",
      "Cast Time: 0.75 sec",
      "Critical Hit Chance: 14.00%",
      "Requires: Level (1—90), (4—157) Int"
    ]
  },
  "Chaos Bolt": {
    "excerpt": "Fire a burst of Chaos energy at the target.",
    "stats": [
      "Level: (1—20)",
      "Cost: 0 Mana",
      "Cast Time: 0.75 sec",
      "Critical Hit Chance: 7.00%",
      "Projectile Speed: 38 metres per Second",
      "Requires: Level (1—90), (4—157) Int"
    ]
  },
  "Coiling Bolts": {
    "excerpt": "Simultaneously fires a Physical Projectile and a Chaos Projectile at the target. These projectiles Chain through any number of Cursed targets.",
    "stats": [
      "Level: (1—20)",
      "Cost: 0 Mana",
      "Cast Time: 1.00 sec",
      "Critical Hit Chance: 7.00%",
      "Projectile Speed: 38 metres per Second",
      "Requires: Level (1—90), (4—157) Int"
    ]
  },
  "Dark Pact": {
    "excerpt": "Sacrifice the life of a Minion to deal Chaos damage in an area around it. If you have no Minions, your own life is sacrificed…",
    "stats": [
      "Level: (1—20)",
      "Cost: 0 Mana",
      "Cast Time: 0.70 sec",
      "Critical Hit Chance: 7.00%",
      "Requires: Level (1—90), (4—157) Int"
    ]
  },
  "Discipline": {
    "excerpt": "",
    "stats": []
  },
  "Enervating Nova": {
    "excerpt": "Unleash a Nova of Lightning damage to Electrocute enemies. Enemies close to you take no damage while enemies at the edge of the ring take…",
    "stats": [
      "Level: (1—20)",
      "Cost: 0 Mana",
      "Cast Time: 1.00 sec",
      "Critical Hit Chance: 11.00%",
      "Requires: Level (1—90), (4—157) Int"
    ]
  },
  "Exsanguinate": {
    "excerpt": "Expel your own blood as Chaining blood tendrils in a cone in front of you. Enemies Hit by the tendrils take Physical damage and are…",
    "stats": [
      "Level: (1—20)",
      "Cost: 0 Mana",
      "Cast Time: 1.00 sec",
      "Critical Hit Chance: 8.00%",
      "Requires: Level (1—90), (4—157) Int"
    ]
  },
  "Feast of Flesh": {
    "excerpt": "Consume Corpses near you to recover Life and Mana over a short time per Corpse Consumed.",
    "stats": [
      "Level: (1—20)",
      "Cost: 0 Mana",
      "Cast Time: 1.30 sec",
      "Requires: Level (1—90), (4—157) Int"
    ]
  },
  "Firebolt": {
    "excerpt": "Launch a fiery Projectile towards a target. The Projectile explodes on impact, damaging foes in a small area.",
    "stats": [
      "Level: (1—20)",
      "Cost: 0 Mana",
      "Cast Time: 0.90 sec",
      "Critical Hit Chance: 8.00%",
      "Projectile Speed: 10.4 metres per Second",
      "Requires: Level (1—90), (4—157) Int"
    ]
  },
  "Freezing Shards": {
    "excerpt": "Launch icy Projectiles in a sweeping arc. Multiple Projectiles can hit the same enemy.",
    "stats": [
      "Level: (1—20)",
      "Cost: 0 Mana",
      "Cast Time: 1.20 sec",
      "Critical Hit Chance: 11.00%",
      "Projectile Speed: 16 metres per Second",
      "Requires: Level (1—90), (4—157) Int"
    ]
  },
  "Fulmination": {
    "excerpt": "While active, the first time any Skill Hits a Shocked enemy in your Presence, that Skill also Hits other Shocked enemies in your Presence, up…",
    "stats": [
      "Level: (1—20)",
      "Requires: Level (1—90), (4—157) Int"
    ]
  },
  "Galvanic Field": {
    "excerpt": "Gain a Buff that boosts your Shock chance. Shocking an enemy consumes the Buff to attach an Orb of electricity to that enemy. The Orb…",
    "stats": [
      "Level: (1—20)",
      "Cost: 0 Mana",
      "Cast Time: 0.65 sec",
      "Requires: Level (1—90), (4—157) Int",
      "Critical Hit Chance: 9.00%"
    ]
  },
  "Heart of Ice": {
    "excerpt": "",
    "stats": []
  },
  "Impurity": {
    "excerpt": "",
    "stats": []
  },
  "Malice": {
    "excerpt": "",
    "stats": []
  },
  "Mana Drain": {
    "excerpt": "",
    "stats": []
  },
  "Mirror of Refraction": {
    "excerpt": "Mirrors of Refraction appear in your Presence periodically. Hitting a mirror with a Spell Projectile causes it to shatter, copying the projectiles in a nova…",
    "stats": [
      "Level: (1—20)",
      "Requires: Level (1—90), (4—157) Int"
    ]
  },
  "Parry": {
    "excerpt": "Ready your Buckler to parry the next Hit you would take, Blocking the Hit and retaliating with a quick sweep that leaves enemies off balance,…",
    "stats": [
      "Cost: 0 Mana 0 Mana per second",
      "Critical Hit Chance: 5.00%",
      "Attack Damage: 65% of base",
      "Requires: Level 1",
      "Requires: Bucklers"
    ]
  },
  "Power Siphon": {
    "excerpt": "Attempt to rip the lifeforce from an enemy. Enemies within Culling range will be highlighted and instantly killed on Hit, granting a Power Charge. Can…",
    "stats": [
      "Level: (1—20)",
      "Cost: 0 Mana",
      "Cast Time: 0.70 sec",
      "Critical Hit Chance: 15.00%",
      "Requires: Level (1—90), (4—157) Int"
    ]
  },
  "Purity of Fire": {
    "excerpt": "",
    "stats": []
  },
  "Purity of Ice": {
    "excerpt": "",
    "stats": []
  },
  "Purity of Lightning": {
    "excerpt": "",
    "stats": []
  },
  "Reap": {
    "excerpt": "Conjure a bloody scythe that sweeps across the targeted area, dealing Physical damage to enemies and applying Critical Weakness. Cannot be Triggered.",
    "stats": [
      "Level: (1—20)",
      "Cost: 0 Mana",
      "Cast Time: 1.20 sec",
      "Critical Hit Chance: 14.00%",
      "Requires: Level (1—90), (4—157) Int"
    ]
  },
  "Raise Shield": {
    "excerpt": "Raise your Shield to Block all incoming Blockable hits. Release immediately after Blocking when an enemy is close to perform a Shield Bash, damaging and…",
    "stats": [
      "Cost: 0 Mana 0 Mana per second",
      "Critical Hit Chance: 5.00%",
      "Attack Damage: 80% of base",
      "Requires: Level 1",
      "Requires: Armoured Shield"
    ]
  },
  "Sigil of Power": {
    "excerpt": "Place a Sigil on the ground, providing a powerful Spell Damage Buff to you and Allies while standing in it. The Buff becomes more powerful…",
    "stats": [
      "Level: (1—20)",
      "Cost: 0 Mana",
      "Cooldown Time: 10.00 s",
      "Cast Time: 0.60 sec",
      "Requires: Level (1—90), (4—157) Int"
    ]
  },
  "Skeletal Warrior": {
    "excerpt": "",
    "stats": []
  },
  "Solar Orb": {
    "excerpt": "Create a fiery Orb that periodically releases fiery pulses. Enemies that are very close to the Orb are Ignited. Flameblast can target a Solar Orb…",
    "stats": [
      "Level: (1—20)",
      "Cost: 0 Mana",
      "Cast Time: 0.80 sec",
      "Critical Hit Chance: 7.00%",
      "Requires: Level (1—90), (4—157) Int"
    ]
  },
  "Soulrend": {
    "excerpt": "Fire a Piercing Projectile that seeks out enemies. Enemies hit are inflicted with a Debuff that Hinders them and deals Chaos damage over time for…",
    "stats": [
      "Level: (1—20)",
      "Cost: 0 Mana",
      "Cast Time: 0.80 sec",
      "Critical Hit Chance: 13.00%",
      "Projectile Speed: 8 metres per Second",
      "Requires: Level (1—90), (4—157) Int"
    ]
  },
  "Spellslinger": {
    "excerpt": "While active, gains Energy when you cast Spells. Using the Invocation once sufficient Energy is gathered will consume the Energy to trigger socketed Spells, and…",
    "stats": [
      "Level: (1—20)",
      "Cooldown Time: 0.20 s",
      "Requires: Level (1—90), (4—157) Int"
    ]
  },
  "Spiraling Conspiracy": {
    "excerpt": "A flock of mist ravens circle you, dealing damage over time in an area. Their numbers are bolstered by slain foes, or in the Presence…",
    "stats": [
      "Level: (1—20)",
      "Requires: Level (1—90), (4—157) Int",
      "Cost: 0 Mana"
    ]
  },
  "Consecrate": {
    "excerpt": "Create an area of Consecrated Ground around you.",
    "stats": [
      "Level: (1—20)",
      "Cost: 0 Mana",
      "Cast Time: 1.25 sec",
      "Requires: Level (1—90), (4—86) Str, (4—86) Int"
    ]
  },
  "Volatile Dead": {
    "excerpt": "Consume a Corpse to create a volatile core that seeks out enemies and Ignites enemies near it. The core explodes at the end of its…",
    "stats": [
      "Level: (1—20)",
      "Cost: 0 Mana",
      "Cast Time: 0.80 sec",
      "Critical Hit Chance: 7.00%",
      "Requires: Level (1—90), (4—157) Int"
    ]
  },
  "Wither": {
    "excerpt": "",
    "stats": []
  },
  "Animus Exchange": {
    "excerpt": "Sacrifice a portion of your Life to recover Runic Ward. Runic Ward recovered by this Skill can Overflow.",
    "stats": [
      "Level: (1—20)",
      "Cost: (15—101) Mana",
      "Cooldown Time: 4.00 s",
      "Cast Time: 0.60 sec",
      "Requires: Level (1—90)"
    ]
  },
  "Animus Splinters": {
    "excerpt": "Expend a large amount of Runic Ward to instantly create a short-lived copy of yourself that uses a Socketed Skill once, then vanishes. This Skill's…",
    "stats": [
      "Level: (1—20)",
      "Cost: 0 Ward",
      "Cooldown Time: 8.00 s",
      "Requires: Level (1—90)"
    ]
  },
  "Bitter Dead": {
    "excerpt": "Spend Ward and target an area, transforming Corpses into bitter cores that seek out enemies and Chill enemies near them. The cores explode at the…",
    "stats": [
      "Level: (1—20)",
      "Cost: (11—59) Ward",
      "Cast Time: 0.75 sec",
      "Requires: Level (1—90)",
      "Critical Hit Chance: 12.00%"
    ]
  },
  "Conductive Runes": {
    "excerpt": "Spend Runic Ward to create a number of Hazardous Runes in a cone in front of you, which arm after a time. After arming, these…",
    "stats": [
      "Level: (1—20)",
      "Cost: (15—81) Ward",
      "Critical Hit Chance: 7.00%",
      "Requires: Level (1—90)",
      "Attack Damage: (50—204)%"
    ]
  },
  "Detonate Living": {
    "excerpt": "Spend Runic Ward to cause a destabilising Hit against an enemy under the Culling Strike Threshold, making them violently explode. Highlights enemies under the Culling…",
    "stats": [
      "Level: (1—20)",
      "Cost: (11—59) Ward",
      "Cast Time: 0.65 sec",
      "Critical Hit Chance: 12.00%",
      "Requires: Level (1—90)"
    ]
  },
  "Eternal March": {
    "excerpt": "",
    "stats": []
  },
  "Explosive Transmutation": {
    "excerpt": "While active, picking up Remnants Triggers a deadly explosion, dealing damage at the location of the Remnant based on the type of Remnant picked up.",
    "stats": [
      "Level: (1—20)",
      "Reservation: 30 Spirit",
      "Requires: Level (1—90)",
      "Cost: (7—30) Ward",
      "Cooldown Time: 0.50 s (5 Times)",
      "Cast Time: Instant",
      "Critical Hit Chance: 14.00%"
    ]
  },
  "Fragments Of The Past": {
    "excerpt": "Spend Runic Ward to create a Verisium volcano that deals damage on initial eruption and Triggers Ice Fragments.",
    "stats": [
      "Level: (1—20)",
      "Cost: (11—59) Ward",
      "Attack Speed: 60% of base",
      "Attack Damage: (50—204)% of base",
      "Projectile Speed: 3.2 metres per Second",
      "Requires: Level (1—90)",
      "Requires: Any Martial Weapon, Unarmed",
      "Attack Damage: (45—163)% of base",
      "Projectile Speed: 3.2 metres per Second"
    ]
  },
  "Frostflame Nova": {
    "excerpt": "Unleash a wave of volatile ice that feeds on flames. While the wave doesn't deal damage, the ice latches onto Ignited enemies, refreshing the duration…",
    "stats": [
      "Level: (1—20)",
      "Cost: (11—59) Ward",
      "Cast Time: 0.70 sec",
      "Requires: Level (1—90)",
      "Critical Hit Chance: 12.00%"
    ]
  },
  "Grim Pillars": {
    "excerpt": "Spend Runic Ward to cause damaging Ice-Crystal spears to erupt from the ground around you. These spears can be destroyed for an explosion of Cold…",
    "stats": [
      "Level: (1—20)",
      "Cost: (15—81) Ward",
      "Cast Time: 0.70 sec",
      "Critical Hit Chance: 12.00%",
      "Requires: Level (1—90)"
    ]
  },
  "Hollow Shell": {
    "excerpt": "Sacrifice your Runic Ward to send out an energy pulse that grants nearby Allies Guard.",
    "stats": [
      "Level: (1—20)",
      "Cost: (3—13) Ward",
      "Cast Time: 0.60 sec",
      "Requires: Level (1—90)"
    ]
  },
  "Leylines": {
    "excerpt": "While active, areas of intense runic energy are revealed to you. Standing over them grants you a powerful Spell damage boost but constantly drains your…",
    "stats": [
      "Level: (1—20)",
      "Reservation: 30 Spirit",
      "Requires: Level (1—90)"
    ]
  },
  "Powered by Verisium": {
    "excerpt": "",
    "stats": []
  },
  "Rain of Blades": {
    "excerpt": "Pour your Runic Ward into conjuring blades. For the duration of the Buff, these blades fall on enemies Hit by your Projectile Attacks.",
    "stats": [
      "Level: (1—20)",
      "Cost: (11—59) Ward",
      "Cooldown Time: 10.00 s",
      "Requires: Level (1—90)",
      "Requires: Any Martial Weapon",
      "Cost: (5—27) Ward",
      "Cooldown Time: 0.30 s (5 Times)",
      "Attack Damage: (80—232)% of base"
    ]
  },
  "Refutation": {
    "excerpt": "Spends all your Runic Ward to gain a short-duration Buff that causes you to Block all Blockable Hits and apply Parried to enemies from which…",
    "stats": [
      "Level: (1—20)",
      "Cost: (3—13) Ward",
      "Cooldown Time: (11.90—10.00) s",
      "Cast Time: 0.65 sec",
      "Requires: Level (1—90)"
    ]
  },
  "Remnants of Kalguur": {
    "excerpt": "While active, enemies you Stun or kill have a chance to generate a Runic Ward Remnant. These Remnants can Overflow your Runic Ward.",
    "stats": [
      "Level: (1—20)",
      "Reservation: 30 Spirit",
      "Requires: Level (1—90)"
    ]
  },
  "Repulsion": {
    "excerpt": "Spend Runic Ward to Curse enemies with a Verisium Rune, inflicting them with Fragility. Hitting these enemies removes the Curse to Trigger an explosion, Knocking…",
    "stats": [
      "Level: (1—20)",
      "Cost: (15—116) Ward",
      "Cast Time: 0.50 sec",
      "Requires: Level (1—90)",
      "Cost: 0 Ward",
      "Cooldown Time: 0.50 s (5 Times)",
      "Cast Time: Instant",
      "Critical Hit Chance: 6.00%",
      "Attack Damage: (50—204)% of base"
    ]
  },
  "Runic Reprieve": {
    "excerpt": "Channel to create a protective bubble all around you, Blocking Hits against you. While Channelling this Skill, you cannot be Light Stunned by Hits you…",
    "stats": [
      "Level: (1—20)",
      "Cost: (3—13) Ward per second",
      "Cast Time: 0.12 sec",
      "Requires: Level (1—90)"
    ]
  },
  "Skyfall": {
    "excerpt": "Build Glory by spending Runic Ward. When you have maximum Glory, you may call down a mass of Verisium from the sky, dealing high damage…",
    "stats": [
      "Level: (1—20)",
      "Cost: (25—135) Ward",
      "Cast Time: 1.00 sec",
      "Critical Hit Chance: 14.00%",
      "Requires: Level (1—90)"
    ]
  },
  "Triskelion Cascade": {
    "excerpt": "Tap into the power of the Triskelion Flame to Empower the next Cascadable Spell you cast. The Empowered Spell becomes centred on your location, and…",
    "stats": [
      "Level: (1—20)",
      "Cost: (20—155) Ward",
      "Cooldown Time: 1.00 s",
      "Cast Time: 0.45 sec",
      "Requires: Level (1—90)"
    ]
  },
  "Verisium Manifestations": {
    "excerpt": "While active, Hitting with an Attack will spend Runic Ward to summon a Verisium Manifestation, a short-lived Temporary Minion that rapidly Attacks nearby enemies, ignoring…",
    "stats": [
      "Level: (1—20)",
      "Reservation: 30 Spirit",
      "Requires: Level (1—90)",
      "Cost: (7—30) Ward",
      "Cooldown Time: 0.50 s (5 Times)"
    ]
  },
  "Voltaic Barrier": {
    "excerpt": "Spend Runic Ward to raise a pair of electrified pylons in front of you which project a wall of electricity between them, damaging and Electrocuting…",
    "stats": [
      "Level: (1—20)",
      "Cost: (20—108) Ward",
      "Attack Damage: (20—62)% of base",
      "Requires: Level (1—90)",
      "Requires: Any non-Talisman Martial Weapon",
      "Cost: 0 Ward",
      "Attack Damage: (40—125)% of base"
    ]
  },
  "Wardbound Minions": {
    "excerpt": "Spend all your Runic Ward to summon Temporary Wardbound Casters. These Minions target nearby enemies with damaging Cold Spells.",
    "stats": [
      "Level: (1—20)",
      "Cost: (11—59) Ward",
      "Cast Time: 0.75 sec",
      "Requires: Level (1—90)"
    ]
  },
  "Ancestral Spirits": {
    "excerpt": "This skill is Triggered each time you summon a Totem, summoning an Ancestral Spirit Minion to fight for you. If the Totem dies then the…",
    "stats": [
      "Level: (1—20)",
      "Requires: Level (1—90)"
    ]
  },
  "Apocalypse": {
    "excerpt": "Build Glory by Hitting enemies with Elemental damage. When you have maximum Glory, you may become the walking Apocalypse for a duration, Triggering one of…",
    "stats": [
      "Level: (1—20)",
      "Cost: (8—55) Mana",
      "Cast Time: 1.00 sec",
      "Requires: Level (1—90)",
      "Cost: 0 Mana",
      "Cast Time: Instant",
      "Critical Hit Chance: 12.00%"
    ]
  },
  "Archon of Chayula": {
    "excerpt": "Build Glory by dealing Chaos damage to enemies. When you have maximum Glory, you can entreat the Dreamer to inhabit you, briefly becoming his Archon.",
    "stats": [
      "Level: (1—20)",
      "Requires: Level (1—90)",
      "Requires: Any Martial Weapon",
      "Cost: 0 Mana",
      "Attack Damage: (45—163)% of base"
    ]
  },
  "Align Fate": {
    "excerpt": "While active, visages of yourself from alternate timelines will occasionally appear and cast one of your Spells from your first valid Weapon Set. Until the…",
    "stats": [
      "Level: (1—20)",
      "Requires: Level (1—90)"
    ]
  },
  "Bleeding Concoction": {
    "excerpt": "Consume charges from your Mana Flask to throw a flask that explodes, dealing Physical Attack damage in an area and Aggravating Bleeding on Enemies hit.…",
    "stats": [
      "Level: (1—20)",
      "Cost: 0 Mana",
      "Critical Hit Chance: 5.00%",
      "Attack Speed: 85% of base",
      "Attack Damage: (70—185)% of base",
      "Projectile Speed: 12 metres per Second",
      "Requires: Level (1—90)",
      "Requires: Unarmed"
    ]
  },
  "Ruzhan's Trap": {
    "excerpt": "Command Ruzhan to hurl his greatsword, spreading hazardous runes on the ground where it lands. If an enemy steps on a rune, it erupts in…",
    "stats": [
      "Level: (1—20)",
      "Cost: (4—47) Mana",
      "Requires: Level (1—90)",
      "Cooldown Time: 8.00 s",
      "Cast Time: 1.00 sec",
      "Critical Hit Chance: 7.00%",
      "Projectile Speed: 35 metres per Second"
    ]
  },
  "Ruzhan's Fury": {
    "excerpt": "Command Ruzhan to conjure two volleys of flaming embers and fire them forward. The embers explode on impact, dealing Spell damage.",
    "stats": [
      "Level: (1—20)",
      "Cost: (4—41) Mana",
      "Requires: Level (1—90)",
      "Cooldown Time: 7.00 s",
      "Cast Time: 2.30 sec",
      "Critical Hit Chance: 7.00%",
      "Projectile Speed: 30 metres per Second"
    ]
  },
  "Ruzhan's Reckoning": {
    "excerpt": "Command Ruzhan to teleport to the target location. Upon arrival, the Djinn deals Spell damage to enemies around him then slams his blazing sword into…",
    "stats": [
      "Level: (1—20)",
      "Cost: (6—68) Mana",
      "Requires: Level (1—90)",
      "Cooldown Time: 12.00 s",
      "Cast Time: 2.30 sec",
      "Critical Hit Chance: 7.00%"
    ]
  },
  "Kelari's Deception": {
    "excerpt": "Command Kelari to create a blast at the target location that deals Spell damage, and leave behind a clone that persists for a short duration.…",
    "stats": [
      "Level: (1—20)",
      "Cost: (5—58) Mana",
      "Requires: Level (1—90)",
      "Cooldown Time: 5.00 s (3 Times)",
      "Cast Time: 0.80 sec",
      "Critical Hit Chance: 15.00%"
    ]
  },
  "Kelari's Judgment": {
    "excerpt": "Channel and Command Kelari to Channel alongside you, creating blades that hang over the target location. The longer you Channel, the more blades Kelari will…",
    "stats": [
      "Level: (1—20)",
      "Cost: (3.87—39.52) Mana per second",
      "Requires: Level (1—90)",
      "Cooldown Time: 12.00 s",
      "Cast Time: 0.50 sec",
      "Critical Hit Chance: 15.00%"
    ]
  },
  "Navira's Well": {
    "excerpt": "Command Navira to bolster your Energy Shield, causing it to begin Recharging immediately and granting you increased Energy Shield Recharge Rate for a duration.",
    "stats": [
      "Level: (1—20)",
      "Cost: (6—63) Mana",
      "Requires: Level (1—90)",
      "Level: (1—2)",
      "Cooldown Time: 12.00 s",
      "Cast Time: 2.10 sec"
    ]
  },
  "Navira's Fracturing": {
    "excerpt": "Command Navira to fracture all nearby areas of Chilled Ground that have enemies standing on them, doing high Spell damage with extreme Freeze potential.",
    "stats": [
      "Level: (1—20)",
      "Cost: (3—35) Mana",
      "Requires: Level (1—90)",
      "Cooldown Time: 5.00 s",
      "Cast Time: 1.20 sec",
      "Critical Hit Chance: 12.00%"
    ]
  },
  "Navira's Oasis": {
    "excerpt": "Command Navira to turn nearby Chilled Ground into Navira's Oasis, a mirage which grants you and Allies standing in it Flask charges and damage Recouped…",
    "stats": [
      "Level: (1—20)",
      "Cost: (7—75) Mana",
      "Requires: Level (1—90)",
      "Level: (1—2)",
      "Cooldown Time: 8.00 s",
      "Cast Time: 1.80 sec"
    ]
  },
  "Kelari's Malediction": {
    "excerpt": "Harness Kelari's power to passively Consume Corpses in your Presence, causing Corpse Beetle Minions to burst forth. The Beetles passively follow you until Commanded. On…",
    "stats": [
      "Level: (1—20)",
      "Requires: Level (1—90)",
      "Cost: (7—78) Mana"
    ]
  },
  "Elemental Expression": {
    "excerpt": "Create a fiery explosion, an arcing bolt of lightning, or an icy wave of projectiles. The chance for an explosion is proportional to your Strength,…",
    "stats": [
      "Level: (1—20)",
      "Cost: (3—39) Mana",
      "Cooldown Time: 0.25 s",
      "Cast Time: Instant",
      "Requires: Level (1—90)",
      "Critical Hit Chance: 7.00%",
      "Critical Hit Chance: 12.00%"
    ]
  },
  "Elemental Storm": {
    "excerpt": "Create a stationary Fire, Cold or Lightning storm at a target location for a duration, based on the highest Elemental Damage type for the Hit…",
    "stats": [
      "Level: (1—20)",
      "Cost: (8—55) Mana",
      "Cooldown Time: 3.00 s",
      "Cast Time: Instant",
      "Requires: Level (1—90)"
    ]
  },
  "Encase in Jade": {
    "excerpt": "",
    "stats": []
  },
  "Explosive Concoction": {
    "excerpt": "Consume charges from your Mana Flask to throw a flask that explodes, dealing Fire Attack damage in an area. Additional smaller flasks are thrown at…",
    "stats": [
      "Level: (1—20)",
      "Cost: 0 Mana",
      "Critical Hit Chance: 5.00%",
      "Attack Speed: 85% of base",
      "Attack Damage: (70—185)% of base",
      "Projectile Speed: 12 metres per Second",
      "Requires: Level (1—90)",
      "Requires: Unarmed",
      "Attack Damage: (50—145)%"
    ]
  },
  "Fulminating Concoction": {
    "excerpt": "Consume charges from your Mana Flask to throw a flask that explodes, dealing Lightning Attack damage in an area with high chance to Shock. This…",
    "stats": [
      "Level: (1—20)",
      "Cost: 0 Mana",
      "Critical Hit Chance: 8.00%",
      "Attack Speed: 85% of base",
      "Attack Damage: (70—185)% of base",
      "Projectile Speed: 12 metres per Second",
      "Requires: Level (1—90)",
      "Requires: Unarmed"
    ]
  },
  "Virtuous Barrier": {
    "excerpt": "While active, conjures a glittering barrier that accumulates protective gemstone Motes of each Attribute type over time, but loses a random Mote when you are…",
    "stats": [
      "Level: (1—20)",
      "Requires: Level (1—90)"
    ]
  },
  "Meditate": {
    "excerpt": "Channel to Recharge Energy Shield and allow that Recharge to Overflow. Channelling ends when you take damage or your Energy Shield is fully Overflowed.",
    "stats": [
      "Level: (1—20)",
      "Cooldown Time: (7.00—5.10) s",
      "Cast Time: 1.00 sec",
      "Requires: Level (1—90)"
    ]
  },
  "Moment of Vulnerability": {
    "excerpt": "Send out a temporal Nova to take advantage of enemies' moment of vulnerability. Hitting enemies that are Primed for Stun, Electrocution, or Freeze causes a…",
    "stats": [
      "Level: (1—20)",
      "Cost: (6—18) Mana",
      "Cooldown Time: 1.00 s",
      "Cast Time: 0.65 sec",
      "Requires: Level (1—90)"
    ]
  },
  "Acidic Concoction": {
    "excerpt": "Consume charges from your Mana Flask to throw a flask that explodes, dealing Physical Attack damage in an area. The thrown flask Consumes Poison on…",
    "stats": [
      "Level: (1—20)",
      "Cost: 0 Mana",
      "Critical Hit Chance: 5.00%",
      "Attack Speed: 85% of base",
      "Attack Damage: (70—185)% of base",
      "Projectile Speed: 12 metres per Second",
      "Requires: Level (1—90)",
      "Requires: Unarmed"
    ]
  },
  "Shattering Concoction": {
    "excerpt": "Consume charges from your Mana Flask to throw a flask that explodes, dealing Cold Attack damage in an area and inflicting Exposure. This damage is…",
    "stats": [
      "Level: (1—20)",
      "Cost: 0 Mana",
      "Critical Hit Chance: 11.00%",
      "Attack Speed: 85% of base",
      "Attack Damage: (70—185)% of base",
      "Projectile Speed: 12 metres per Second",
      "Requires: Level (1—90)",
      "Requires: Unarmed"
    ]
  },
  "Ruzhan, the Blazing Sword": {
    "excerpt": "",
    "stats": []
  },
  "Summon Infernal Hound": {
    "excerpt": "",
    "stats": []
  },
  "Kelari, the Tainted Sands": {
    "excerpt": "",
    "stats": []
  },
  "Navira, the Last Mirage": {
    "excerpt": "",
    "stats": []
  },
  "Elemental Surge": {
    "excerpt": "Grants your weapon Surges. Non-Melee Projectile Attacks with that weapon Consume Surges to cause the Projectiles fired to explode at the end of their flight.",
    "stats": [
      "Level: (1—20)",
      "Cost: 0 Mana",
      "Attack Damage: (50—181)% of base",
      "Requires: Level (1—90)",
      "Attack Damage: (50—181)%"
    ]
  },
  "Unbound Avatar": {
    "excerpt": "Gain Unbound Fury by inflicting Elemental Ailments with Hits on enemies. Once you reach maximum Unbound Fury, consume it to become Unbound for a duration,…",
    "stats": [
      "Level: (1—20)",
      "Cooldown Time: 12.00 s",
      "Requires: Level (1—90)"
    ]
  },
  "Blood Boil": {
    "excerpt": "Enemies in your Presence accumulate blood boils periodically. When they die, the boils pop applying Corrupted Blood to enemies near them.",
    "stats": [
      "Level: (1—20)",
      "Requires: Level (1—90)"
    ]
  },
  "Fire Spell on Hit": {
    "excerpt": "While active, gains Energy when you Hit enemies with Melee Attacks and triggers socketed Fire spells on reaching maximum Energy.",
    "stats": [
      "Level: (1—20)",
      "Requires: Level (1—90)"
    ]
  },
  "Demon Form": {
    "excerpt": "Shapeshift into a demon, vastly boosting the power of your Spells. You gain Demonflame every second you remain in demon form, causing your Life to…",
    "stats": [
      "Level: (1—20)",
      "Cost: (6—65) Mana",
      "Cooldown Time: 15.00 s",
      "Requires: Level (1—90)"
    ]
  },
  "Hollow Focus": {
    "excerpt": "While active, ethereal bells periodically appear near you. Your Hits immediately destroy the bells, creating a shockwave that damages nearby enemies and causes a Heavy…",
    "stats": [
      "Level: (1—20)",
      "Requires: Level (1—90)",
      "Requires: Any Melee Martial Weapon",
      "Attack Damage: (90—237)%"
    ]
  },
  "Hollow Form": {
    "excerpt": "Channel to create fleeting images of your astral self near the target location. The images perform a Socketed Melee Attack once then vanish, targeting the…",
    "stats": [
      "Level: (1—20)",
      "Attack Speed: 70% of base",
      "Requires: Level (1—90)",
      "Requires: Any Melee Martial Weapon"
    ]
  },
  "Hollow Resonance": {
    "excerpt": "Attaches an ethereal bell to your back. Critical Hits with other Skills will cause the bell to ring out, damaging nearby enemies.",
    "stats": [
      "Level: (1—20)",
      "Cooldown Time: 0.50 s (3 Times)",
      "Attack Damage: (60—187)% of base",
      "Requires: Level (1—90)",
      "Requires: Any non-Talisman Melee Martial Weapon"
    ]
  },
  "Inevitable Agony": {
    "excerpt": "Debuff all targets in an area, causing a portion of Damage they take from Hits to be tracked by the Debuff. When the debuff's duration…",
    "stats": [
      "Level: (1—20)",
      "Cost: (41—178) Mana",
      "Cooldown Time: 2.00 s",
      "Cast Time: 0.70 sec",
      "Requires: Level (1—90)"
    ]
  },
  "Into the Breach": {
    "excerpt": "Create a Breach around you, allowing you to see nearby Flames of Chayula. You are considered to be in a Breach while this skill is…",
    "stats": [
      "Level: (1—20)",
      "Requires: Level (1—90)"
    ]
  },
  "Manifest Weapon": {
    "excerpt": "Manifest a copy of your main hand Melee Martial Weapon as an immortal Companion to fight by your side. In addition to its standard Strikes,…",
    "stats": [
      "Level: (1—20)",
      "Requires: Level (1—90)",
      "Requires: Any Melee Martial Weapon"
    ]
  },
  "Called Shots": {
    "excerpt": "Applies a socketed Mark Skill to a nearby unmarked Enemy every few seconds. Consuming socketed Marks will cause them to be reapplied to an unmarked…",
    "stats": [
      "Level: (1—20)",
      "Requires: Level (1—90)"
    ]
  },
  "Mirage Deadeye": {
    "excerpt": "While active, firing a ranged Projectile Attack will create a Mirage that uses socketed ranged Attacks for a short duration, then vanish.",
    "stats": [
      "Level: (1—20)",
      "Requires: Level (1—90)",
      "Requires: Bows, Spears, Crossbows",
      "Cooldown Time: 10.00 s"
    ]
  },
  "Primal Bounty": {
    "excerpt": "Empowers the next Projectile Skill you use, causing it to create additional Projectiles and fly faster.",
    "stats": [
      "Level: (1—20)",
      "Requires: Level (1—90)"
    ]
  },
  "Queen's Procession": {
    "excerpt": "While active, Sprinting turns you into a locust swarm which deals Physical Attack damage, which is not based on your Weapon's damage, in an area…",
    "stats": [
      "Level: (1—20)",
      "Critical Hit Chance: 6.00%",
      "Attack Damage: (50—181)% of base",
      "Requires: Level (1—90)"
    ]
  },
  "Ritual Sacrifice": {
    "excerpt": "Sacrifice the Corpse of a Rare Monster to grant you its Modifiers for a duration, or gain a single random Modifier at the cost of…",
    "stats": [
      "Level: (1—20)",
      "Cost: 20 Mana",
      "Requires: Level (1—90)"
    ]
  },
  "Sorcery Ward": {
    "excerpt": "Passively manifests a protective barrier which takes Elemental Damage from Hits for you until depleted. The barrier instantly recharges to its full value a short…",
    "stats": [
      "Level: (1—20)",
      "Cast Time: 1.00 sec",
      "Requires: Level (1—90)"
    ]
  },
  "Supporting Fire": {
    "excerpt": "Recruit artillery Minions that take up positions behind you. They will lie in wait for your Command, then fire volleys of arrows at the target…",
    "stats": [
      "Level: (1—20)",
      "Requires: Level (1—90)",
      "Cost: (8—83) Mana"
    ]
  },
  "Temper Weapon": {
    "excerpt": "Channel to temper your main hand Melee Martial Weapon. Each hit of the hammer against the anvil Empowers subsequent Attacks to Combust when Hitting enemies.",
    "stats": [
      "Level: (1—20)",
      "Cost: (2.9—19.65) Mana per second",
      "Cooldown Time: 5.00 s",
      "Requires: Level (1—90)",
      "Requires: Any non-Talisman Melee Martial Weapon",
      "Attack Damage: (100—362)% of base"
    ]
  },
  "Temporal Rift": {
    "excerpt": "While active, passively leaves afterimages of your recent past. Cast the Spell to return to the oldest afterimage, teleporting to that location and resetting your…",
    "stats": [
      "Level: (1—20)",
      "Cooldown Time: (7.00—5.10) s",
      "Cast Time: 0.10 sec",
      "Requires: Level (1—90)"
    ]
  },
  "Time Freeze": {
    "excerpt": "Release a large wave that stops time for all affected enemies for a duration. Duration is lower the more times the enemy has had time…",
    "stats": [
      "Level: (1—20)",
      "Cost: 20 Mana",
      "Cooldown Time: (65.00—55.50) s",
      "Cast Time: 0.70 sec",
      "Requires: Level (1—90)"
    ]
  },
  "Time Snap": {
    "excerpt": "",
    "stats": []
  },
  "Vivid Stampede": {
    "excerpt": "Call upon Spirits of the Stag, sending them leaping forward. Each Stag releases a damaging shockwave each time it lands, and any Stags that travel…",
    "stats": [
      "Level: (1—20)",
      "Cooldown Time: 0.30 s",
      "Attack Damage: (100—362)% of base",
      "Requires: Level (1—90)",
      "Requires: Any Martial Weapon, Unarmed"
    ]
  },
  "Void Illusion": {
    "excerpt": "While active, creates a short-lived illusory copy of yourself whenever you dodge roll. The copy can be damaged by enemies, and copies that are destroyed…",
    "stats": [
      "Level: (1—20)",
      "Requires: Level (1—90)",
      "Requires: Any Martial Weapon, Unarmed",
      "Cooldown Time: 4.00 s (3 Times)",
      "Attack Damage: (350—1268)% of base"
    ]
  },
  "Wild Protector": {
    "excerpt": "",
    "stats": []
  },
  "Untether": {
    "excerpt": "Plant a seed of Abyssal Energy on the enemy's heart. Dealing enough damage to the enemy, or killing it outright, causes their heart to explode,…",
    "stats": [
      "Level: (1—20)",
      "Cost: 0 Mana",
      "Cast Time: 0.60 sec",
      "Critical Hit Chance: 13.00%",
      "Requires: Level (1—90), (4—157) Int"
    ]
  },
  "Wildwood's Gifts": {
    "excerpt": "You are chosen by Azmerian spirits who provide guidance, allowing you to see nearby Ancient Blooms.",
    "stats": [
      "Level: (1—20)",
      "Requires: Level (1—90)"
    ]
  },
  "Life Remnants": {
    "excerpt": "Drink the blood of your enemies to restore your Life. While active, enemies you kill have a chance to spawn a Life Remnant, and Hitting…",
    "stats": [
      "Level: (1—20)",
      "Requires: Level (1—90)"
    ]
  },
  "Azmerian Swarms": {
    "excerpt": "While active, summons short-lived Azmerian Swarms when you kill enemies affected by Elemental Ailments or hit Rare or Unique enemies affected by Elemental Ailments. The…",
    "stats": [
      "Level: (1—20)",
      "Requires: Level (1—90)"
    ]
  },
  "Azmerian Wolf": {
    "excerpt": "Summons an ancient Reviving Azmerian Wolf that can howl, calling to spirits convening an Eternal Hunt on Command. It Maims when attacking foes, and can…",
    "stats": [
      "Level: (1—20)",
      "Requires: Level (1—90)",
      "Cost: (8—85) Mana"
    ]
  },
  "Black Powder Blitz": {
    "excerpt": "Replaces your dodge roll with an explosive-assisted leap, firing off a round from your prosthetic cannon leg that Blinds and Ignites enemies in the area…",
    "stats": [
      "Level: (1—20)",
      "Requires: Level (1—90)",
      "Cost: 0 Mana",
      "Cooldown Time: (4.50—3.50) s",
      "Critical Hit Chance: 15.00%"
    ]
  },
  "Thundergod's Wrath": {
    "excerpt": "While active, gains Energy when you Hit enemies with Melee Attacks and triggers socketed Lightning spells on reaching maximum Energy.",
    "stats": [
      "Level: (1—20)",
      "Requires: Level (1—90)"
    ]
  },
  "Cast on Block": {
    "excerpt": "While active, gains Energy when you Block and triggers socketed Spells on reaching maximum Energy.",
    "stats": [
      "Level: (1—20)",
      "Requires: Level (1—90)"
    ]
  },
  "Cast on Charm Use": {
    "excerpt": "While active, gains Energy when one of your Charms is used and triggers socketed Spells on reaching maximum Energy.",
    "stats": [
      "Level: (1—20)",
      "Requires: Level (1—90)"
    ]
  },
  "Chaotic Surge": {
    "excerpt": "Grants your weapon Surges. Non-Melee Projectile Attacks with that weapon Consume Surges to cause the Projectiles fired to explode at the end of their flight.",
    "stats": [
      "Level: (1—20)",
      "Attack Damage: (50—181)% of base",
      "Requires: Level (1—90)"
    ]
  },
  "Decompose": {
    "excerpt": "Consume a Corpse to create a cloud of flammable Poisonous gas. Any Burning effects or Detonator skills will explode the gas cloud, creating a fiery…",
    "stats": [
      "Level: (1—20)",
      "Cost: 0 Mana",
      "Cast Time: 0.80 sec",
      "Requires: Level (1—90), (4—157) Int",
      "Critical Hit Chance: 8.00%"
    ]
  },
  "Crackling Palm": {
    "excerpt": "When you Hit with Unarmed Melee Attacks, calls down lightning bolts which deal Unarmed Attack damage to all surrounding enemies.",
    "stats": [
      "Level: (1—20)",
      "Requires: Level (1—90)",
      "Requires: Unarmed",
      "Attack Damage: (25—73)%"
    ]
  },
  "Requiem": {
    "excerpt": "Your weapon passively accumulates anguish from the tormented souls within. When fully charged, use this skill to compose the Requiem, transforming your Crossbow shot into…",
    "stats": [
      "Level: (1—20)",
      "Cost: (22—150) Mana",
      "Requires: Level (1—90)",
      "Requires: Crossbows",
      "Cost: 0 Mana",
      "Attack Speed: 400% of base",
      "Attack Damage: (300—936)% of base",
      "Projectile Speed: 7.5 metres per Second"
    ]
  },
  "Crushing Fear": {
    "excerpt": "Dash to an enemy and Strike them, Culling enemies if their life is low enough. When this skill kills an enemy you draw out their…",
    "stats": [
      "Level: (1—20)",
      "Cost: (6—42) Mana",
      "Attack Speed: 75% of base",
      "Attack Damage: (110—343)% of base",
      "Requires: Level (1—90)",
      "Requires: Quarterstaves",
      "Attack Damage: (400—1449)%"
    ]
  },
  "Bursting Fen Toad": {
    "excerpt": "This skill creates a toad that jumps around briefly, the toad then explodes, dealing Attack damage in an area and inflicting Poison. Damage you deal…",
    "stats": [
      "Level: (1—20)",
      "Cost: 0 Mana",
      "Critical Hit Chance: 5.00%",
      "Attack Damage: (225—702)% of base",
      "Requires: Level (1—90)"
    ]
  },
  "Future-Past": {
    "excerpt": "Hinekora observes your Future-Past granting you the opportunity to subvert a lesser fate. After a period of Hindsight, she will grant you her Foresight, which…",
    "stats": [
      "Level: (1—20)",
      "Requires: Level (1—90)"
    ]
  },
  "Gemini Surge": {
    "excerpt": "Grants your weapon Surges. Non-Melee Projectile Attacks with that weapon Consume Surges to cause the Projectiles fired to explode at the end of their flight.",
    "stats": [
      "Level: (1—20)",
      "Attack Damage: (50—181)% of base",
      "Requires: Level (1—90)",
      "Attack Damage: (50—181)%"
    ]
  },
  "Harbinger of Madness": {
    "excerpt": "Draws out the latent fears of enemies you kill and Rare or Unique enemies you Hit, turning them into unstable apparitions which charge towards enemies…",
    "stats": [
      "Level: (1—20)",
      "Requires: Level (1—90)"
    ]
  },
  "Cackling Companions": {
    "excerpt": "Activate to summon a cackle of Hyena Companions. The cackle is treated as a single Companion for effects that count or limit Companions, regardless of…",
    "stats": [
      "Level: (1—20)",
      "Requires: Level (1—90)"
    ]
  },
  "Icestorm": {
    "excerpt": "Conjure a hail of icy bolts over the targeted area. Chill and Freeze on enemies in front of you are Consumed to fuel the Icestorm…",
    "stats": [
      "Level: (1—20)",
      "Cost: (12—126) Mana",
      "Cast Time: 1.20 sec",
      "Critical Hit Chance: 11.00%",
      "Requires: Level (1—90), (4—157) Int"
    ]
  },
  "Lightning Bolt": {
    "excerpt": "Call down a Shocking bolt of Lightning to strike enemies in a small area.",
    "stats": [
      "Level: (1—20)",
      "Cost: 0 Mana",
      "Cast Time: 0.85 sec",
      "Critical Hit Chance: 10.00%",
      "Requires: Level (1—90), (4—157) Int"
    ]
  },
  "Midnight Zenith": {
    "excerpt": "While active, Critical Hits with other skills that kill targets, or hit powerful targets cause you to gain Arctic Petals. Once you have enough Arctic…",
    "stats": [
      "Level: (1—20)",
      "Requires: Level (1—90)"
    ]
  },
  "Mist Raven": {
    "excerpt": "Summons a mysterious undamageable Mist Raven that can be Commanded to dive at target location, crashing through an otherworldly mirror and damaging enemies in an…",
    "stats": [
      "Level: (1—20)",
      "Requires: Level (1—90)",
      "Cost: 8 Mana"
    ]
  },
  "Molten Crash": {
    "excerpt": "Shapeshift into a burning monstrosity and leap through the air to crash down upon the earth, Slamming twice and creating Molten Fissures. Consumes Rage to…",
    "stats": [
      "Level: (1—20)",
      "Cost: (14—97) Mana",
      "Attack Damage: (120—490)% of base",
      "Requires: Level (1—90)",
      "Requires: Talismans",
      "Attack Damage: (70—185)%"
    ]
  },
  "Molten Shower": {
    "excerpt": "Fires molten Projectiles from the enemy hit, which will explode when they land nearby, dealing Attack damage in an area.",
    "stats": [
      "Level: (1—20)",
      "Cost: 0 Mana",
      "Cooldown Time: 0.25 s ((3—6) Times)",
      "Attack Damage: (50—132)% of base",
      "Projectile Speed: 4 metres per Second",
      "Requires: Level (1—90)"
    ]
  },
  "Soaring Midnight": {
    "excerpt": "Hurl your Shield as a Projectile which Returns to you at the end of its flight. While the Shield is in flight, this skill is…",
    "stats": [
      "Level: (1—20)",
      "Cost: 0 Mana",
      "Cooldown Time: 4.00 s",
      "Critical Hit Chance: 10.00%",
      "Attack Damage: (50—156)% of base",
      "Projectile Speed: 12 metres per Second",
      "Requires: Level (1—90)",
      "Requires: Any Shield"
    ]
  },
  "Phantasmal Arrow": {
    "excerpt": "Fires an arrow that embeds where it lands for a short duration. At the end of the duration, the arrow explodes in spectral flame, turning…",
    "stats": [
      "Level: (1—20)",
      "Cost: (6—40) Mana",
      "Attack Speed: 70% of base",
      "Attack Damage: (20—62)% of base",
      "Projectile Speed: 54 metres per Second",
      "Requires: Level (1—90)",
      "Requires: Bows",
      "Attack Damage: (120—374)%"
    ]
  },
  "Pinnacle of Power": {
    "excerpt": "Consume all Power Charges to master the elements, gaining Elemental Damage and the ability to apply Elemental Ailments with other damage types. Can only be…",
    "stats": [
      "Level: 20",
      "Cost: (93—0) Mana",
      "Cooldown Time: 4.00 s",
      "Cast Time: Instant"
    ]
  },
  "Righteous Descent": {
    "excerpt": "Leap into the air carried by divine wings, damaging enemies with your spear where you land. If there is a Fragment of Divinity near you…",
    "stats": [
      "Level: (1—20)",
      "Cost: 0 Mana",
      "Cooldown Time: 10.00 s",
      "Attack Damage: (200—724)% of base",
      "Requires: Level (1—90)",
      "Attack Damage: (400—1449)%"
    ]
  },
  "Runic Tempering": {
    "excerpt": "Channel to imbue your armour with Runic Plates. When you are Hit while you have these plates, some of the damage you would take will…",
    "stats": [
      "Level: (1—20)",
      "Cost: (2.9—19.65) Mana per second",
      "Cooldown Time: 5.00 s",
      "Requires: Level (1—90)"
    ]
  },
  "Sanguine Revelry": {
    "excerpt": "Conjure hateful energy to fuel your Rage and Life. While active, Bleeding enemies you kill have a chance to spawn a Hateful Remnant, and Hitting…",
    "stats": [
      "Level: (1—20)",
      "Requires: Level (1—90)"
    ]
  },
  "Shattering Spite": {
    "excerpt": "Stamp your spear, destroying all Bloodstone Lances on each enemy in your Presence to cause a damaging explosion around that enemy. Each explosion gains new…",
    "stats": [
      "Level: (1—20)",
      "Cost: 0 Mana",
      "Attack Damage: (125—453)% of base",
      "Requires: Level (1—90)",
      "Requires: Spears"
    ]
  },
  "Rite of Restoration": {
    "excerpt": "Place a Sigil on the ground, providing a powerful Buff to you and Allies standing in it which grants Life Regeneration and amplifies Armour, Evasion…",
    "stats": [
      "Level: (1—20)",
      "Cost: 0 Mana",
      "Cooldown Time: 10.00 s",
      "Cast Time: 0.60 sec",
      "Requires: Level (1—90)"
    ]
  },
  "Spirit Vessel": {
    "excerpt": "Summons a Shapeshifting Spirit Vessel Companion that uses copies of socketed Bear, Werewolf, and Wyvern Skills.",
    "stats": [
      "Level: (1—20)",
      "Requires: Level (1—90)"
    ]
  },
  "Starborn Onslaught": {
    "excerpt": "Build up Glory by Freezing or Chilling enemies. When you have maximum Glory you may jump backwards loosing your Mace with the force of a…",
    "stats": [
      "Level: (1—20)",
      "Cost: 0 Mana",
      "Attack Damage: (63—166)% of base",
      "Requires: Level (1—90)",
      "Requires: Two Hand Maces"
    ]
  },
  "The Stars Answer": {
    "excerpt": "Leash the stars themselves by leveraging your vast magical power, repeatedly Triggering Starfall targeting an enemy in an area around you, or a random location…",
    "stats": [
      "Level: (1—20)",
      "Cost: 10000 Mana",
      "Cast Time: 2.00 sec",
      "Requires: Level (1—90)",
      "Requires: Wands",
      "Cost: 0 Mana",
      "Cast Time: Instant",
      "Critical Hit Chance: 8.00%"
    ]
  },
  "Herald of the Royal Queen": {
    "excerpt": "Killing an enemy with Blood Loss will cause a bloody explosion that deals Physical Attack damage to surrounding enemies. This damage is not based on…",
    "stats": [
      "Level: (1—20)",
      "Requires: Level (1—90)"
    ]
  },
  "Valako's Charge": {
    "excerpt": "While active, taking Lightning damage builds up charge on you. Reaching full charge expends all charge to Trigger this skill, creating a Chaining lightning bolt…",
    "stats": [
      "Level: (1—20)",
      "Cost: 0 Mana",
      "Cooldown Time: 1.00 s",
      "Cast Time: Instant",
      "Critical Hit Chance: 9.00%",
      "Requires: Level (1—90)"
    ]
  }
};
