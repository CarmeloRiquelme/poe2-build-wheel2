// Ascendancy facts and geometry from the official GGG export.
const TREE_DATA = {
  "source": "https://github.com/grindinggear/poe2-skilltree-export",
  "revision": "04f67f6704c9076ddd4ae6ca67174224dfb72899",
  "retrieved": "2026-11-20",
  "ascendancies": {
    "Infernalist": {
      "class": "Witch",
      "id": "Witch1",
      "source": "https://poe2db.tw/us/Infernalist",
      "image": "Art/2DArt/BaseClassIllustrations/InfernalistAscendancy.png",
      "nodes": [
        {
          "key": "770",
          "id": "AscendancyWitch1Small11",
          "name": "Mana",
          "x": 172.346,
          "y": -18306.5,
          "icon": "Art/2DArt/SkillIcons/passives/Infernalist/InfernalistNode.png",
          "stats": [
            "3% increased maximum Mana"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "10694"
          ],
          "in": [
            "13174"
          ]
        },
        {
          "key": "7793",
          "id": "AscendancyWitch1Small4",
          "name": "Life",
          "x": -1066.01,
          "y": -18700.6,
          "icon": "Art/2DArt/SkillIcons/passives/Infernalist/InfernalistNode.png",
          "stats": [
            "3% increased maximum Life"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "18348"
          ],
          "in": [
            "32699"
          ]
        },
        {
          "key": "8854",
          "id": "AscendancyWitch1Small3",
          "name": "Life",
          "x": -1384.89,
          "y": -17619.3,
          "icon": "Art/2DArt/SkillIcons/passives/Infernalist/InfernalistNode.png",
          "stats": [
            "3% increased maximum Life"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "46644"
          ],
          "in": [
            "18348"
          ]
        },
        {
          "key": "10694",
          "id": "AscendancyWitch1Notable11_",
          "name": "Seething Body",
          "x": 261.765,
          "y": -18041.2,
          "icon": "Art/2DArt/SkillIcons/passives/Infernalist/InfernalistInfernalHeat.png",
          "stats": [
            "Gain [ElementalArchon|Elemental Archon] when you cast a [Spell] while on [HighInfernalFlame|High Infernal Flame]",
            "[ElementalArchon|Elemental Archon] does not expire while on [HighInfernalFlame|High Infernal Flame]",
            "Lose [ElementalArchon|Elemental Archon] on reaching maximum Infernal Flame"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "770"
          ]
        },
        {
          "key": "13174",
          "id": "AscendancyWitch1Notable7",
          "name": "Pyromantic Pact",
          "x": -91.7358,
          "y": -18429.7,
          "icon": "Art/2DArt/SkillIcons/passives/Infernalist/Fireblood.png",
          "stats": [
            "Maximum Mana is replaced by twice as much Maximum Infernal Flame\nGain Infernal Flame instead of spending Mana for Skill costs",
            "Take maximum Life and Energy Shield as [Fire] Damage when Infernal Flame reaches maximum",
            "Lose all Infernal Flame on reaching maximum Infernal Flame",
            "25% of Infernal Flame lost per second if none was gained in the past 2 seconds"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "770"
          ],
          "in": [
            "23880"
          ]
        },
        {
          "key": "17754",
          "id": "AscendancyWitch1Notable10",
          "name": "Loyal Hellhound",
          "x": 308.283,
          "y": -18500.7,
          "icon": "Art/2DArt/SkillIcons/passives/Infernalist/InfernalFamiliar.png",
          "stats": [
            "Grants Skill: <underline>{Summon Infernal Hound}"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "39470"
          ]
        },
        {
          "key": "18158",
          "id": "AscendancyWitch1Notable8",
          "name": "Bringer of Flame",
          "x": -650.125,
          "y": -18383.9,
          "icon": "Art/2DArt/SkillIcons/passives/Infernalist/FuryManifest.png",
          "stats": [
            "All Damage from you and [Allies|Allies] in your [Presence|Presence]\n[Contributes|contributes] to [Flammability] and [Ignite] [BuffMagnitude|Magnitudes]"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "63484"
          ]
        },
        {
          "key": "18348",
          "id": "AscendancyWitch1Notable4",
          "name": "Altered Flesh",
          "x": -1240.73,
          "y": -18157.3,
          "icon": "Art/2DArt/SkillIcons/passives/Infernalist/MoltenFury.png",
          "stats": [
            "20% of [Physical|Physical Damage] taken as [Chaos|Chaos Damage]",
            "20% of [Lightning|Lightning Damage] taken as [Fire|Fire Damage]",
            "20% of [Cold|Cold Damage] taken as [Fire|Fire Damage]"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "19482",
            "8854",
            "46016"
          ],
          "in": [
            "7793"
          ]
        },
        {
          "key": "19482",
          "id": "AscendancyWitch1Small1",
          "name": "Life",
          "x": -1627.63,
          "y": -17676.9,
          "icon": "Art/2DArt/SkillIcons/passives/Infernalist/InfernalistNode.png",
          "stats": [
            "3% increased maximum Life"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "36564"
          ],
          "in": [
            "18348"
          ]
        },
        {
          "key": "23880",
          "id": "AscendancyWitch1Small7",
          "name": "Mana",
          "x": -308.885,
          "y": -18695.3,
          "icon": "Art/2DArt/SkillIcons/passives/Infernalist/InfernalistNode.png",
          "stats": [
            "3% increased maximum Mana"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "13174"
          ],
          "in": [
            "32699"
          ]
        },
        {
          "key": "24039",
          "id": "AscendancyWitch1Notable2",
          "name": "Beidat's Hand",
          "x": -943.498,
          "y": -17449.2,
          "icon": "Art/2DArt/SkillIcons/passives/Infernalist/InfernalistConvertLifeToEnergyShield.png",
          "stats": [
            "[Reservation|Reserves] 25% of Life",
            "+1 to Maximum [EnergyShield|Energy Shield] per 8 Maximum Life"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "46016"
          ]
        },
        {
          "key": "24135",
          "id": "AscendancyWitch1Small9",
          "name": "Critical Chance",
          "x": 32.7561,
          "y": -18894.3,
          "icon": "Art/2DArt/SkillIcons/passives/Infernalist/InfernalistNode.png",
          "stats": [
            "12% increased [Critical|Critical Hit Chance]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "34419"
          ],
          "in": [
            "32699"
          ]
        },
        {
          "key": "25239",
          "id": "AscendancyWitch1Notable5",
          "name": "Demonic Possession",
          "x": -846.885,
          "y": -18551.1,
          "icon": "Art/2DArt/SkillIcons/passives/Infernalist/InfernalistTransformIntoDemon1.png",
          "stats": [
            "Grants Skill: <underline>{Demon Form}"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "63894"
          ],
          "in": [
            "64379"
          ]
        },
        {
          "key": "32699",
          "id": "AscendancyWitch1Start__",
          "name": "Infernalist",
          "x": -308.885,
          "y": -18939.3,
          "icon": "Art/2DArt/SkillIcons/passives/damage.png",
          "stats": [],
          "start": true,
          "notable": false,
          "keystone": false,
          "out": [
            "7793",
            "23880",
            "24135",
            "39470",
            "64379",
            "63484"
          ],
          "in": [
            "54447"
          ]
        },
        {
          "key": "34419",
          "id": "AscendancyWitch1Notable9",
          "name": "Grinning Immolation",
          "x": 351.115,
          "y": -18762.4,
          "icon": "Art/2DArt/SkillIcons/passives/Infernalist/ScorchTheEarth.png",
          "stats": [
            "Become [Ignite|Ignited] when you deal a [Critical|Critical Hit], taking 15% of your maximum Life and [EnergyShield|Energy Shield] as [Fire] Damage per second",
            "50% more [CriticalDamageBonus|Critical Damage Bonus]"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "24135"
          ]
        },
        {
          "key": "36564",
          "id": "AscendancyWitch1Notable1",
          "name": "Beidat's Gaze",
          "x": -1549.28,
          "y": -17167.8,
          "icon": "Art/2DArt/SkillIcons/passives/Infernalist/InfernalistConvertLifeToMana.png",
          "stats": [
            "[Reservation|Reserves] 25% of Life",
            "+1 to Maximum Mana per 6 Maximum Life"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "19482"
          ]
        },
        {
          "key": "39470",
          "id": "AscendancyWitch1Small10",
          "name": "Minion Life",
          "x": -30.3957,
          "y": -18658.6,
          "icon": "Art/2DArt/SkillIcons/passives/Infernalist/InfernalistNode.png",
          "stats": [
            "[Minion|Minions] have 12% increased maximum Life"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "17754"
          ],
          "in": [
            "32699"
          ]
        },
        {
          "key": "46016",
          "id": "AscendancyWitch1Small2",
          "name": "Life",
          "x": -1147.89,
          "y": -17619.3,
          "icon": "Art/2DArt/SkillIcons/passives/Infernalist/InfernalistNode.png",
          "stats": [
            "3% increased maximum Life"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "24039"
          ],
          "in": [
            "18348"
          ]
        },
        {
          "key": "46644",
          "id": "AscendancyWitch1Notable3",
          "name": "Beidat's Will",
          "x": -1240.73,
          "y": -17081.3,
          "icon": "Art/2DArt/SkillIcons/passives/Infernalist/InfernalistConvertLifeToSpirit.png",
          "stats": [
            "[Reservation|Reserves] 25% of Life",
            "+1 to Maximum [Spirit] per 25 Maximum Life"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "8854"
          ]
        },
        {
          "key": "61267",
          "id": "AscendancyWitch1Notable6",
          "name": "Mastered Darkness",
          "x": -1035.48,
          "y": -18038.8,
          "icon": "Art/2DArt/SkillIcons/passives/Infernalist/InfernalistTransformIntoDemon2.png",
          "stats": [
            "Demonflame has no maximum"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "63894"
          ]
        },
        {
          "key": "63484",
          "id": "AscendancyWitch1Small8",
          "name": "Flammability Magnitude",
          "x": -480.665,
          "y": -18547.3,
          "icon": "Art/2DArt/SkillIcons/passives/Infernalist/InfernalistNode.png",
          "stats": [
            "40% increased [Flammability] [BuffMagnitude|Magnitude]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "18158"
          ],
          "in": [
            "32699"
          ]
        },
        {
          "key": "63894",
          "id": "AscendancyWitch1Small6",
          "name": "Spell Damage",
          "x": -848.184,
          "y": -18262,
          "icon": "Art/2DArt/SkillIcons/passives/Infernalist/InfernalistNode.png",
          "stats": [
            "12% increased [Spell] Damage"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "61267"
          ],
          "in": [
            "25239"
          ]
        },
        {
          "key": "64379",
          "id": "AscendancyWitch1Small5",
          "name": "Spell Damage",
          "x": -587.374,
          "y": -18658.6,
          "icon": "Art/2DArt/SkillIcons/passives/Infernalist/InfernalistNode.png",
          "stats": [
            "12% increased [Spell] Damage"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "25239"
          ],
          "in": [
            "32699"
          ]
        }
      ]
    },
    "Blood Mage": {
      "class": "Witch",
      "id": "Witch2",
      "source": "https://poe2db.tw/us/Blood_Mage",
      "image": "Art/2DArt/BaseClassIllustrations/BloodMageAscendancy.png",
      "nodes": [
        {
          "key": "3165",
          "id": "AscendancyWitch2Small7",
          "name": "Life",
          "x": 3201.16,
          "y": -18566.4,
          "icon": "Art/2DArt/SkillIcons/passives/Bloodmage/BloodMageNode.png",
          "stats": [
            "3% increased maximum Life"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "56162"
          ],
          "in": [
            "8415"
          ]
        },
        {
          "key": "8415",
          "id": "AscendancyWitch2Notable3",
          "name": "Sanguimancy",
          "x": 2442.74,
          "y": -18455.4,
          "icon": "Art/2DArt/SkillIcons/passives/Bloodmage/BloodMageLeaveBloodOrbs.png",
          "stats": [
            "Skills gain a Base Life Cost equal to Base Mana Cost",
            "Grants Skill: <underline>{Life Remnants}"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "62388",
            "3165",
            "30071",
            "59342",
            "47442"
          ],
          "in": [
            "30117",
            "59822"
          ]
        },
        {
          "key": "23416",
          "id": "AscendancyWitch2Notable6",
          "name": "Vitality Siphon",
          "x": 1903.45,
          "y": -18259.1,
          "icon": "Art/2DArt/SkillIcons/passives/Bloodmage/BloodMageDamageLeechedLife.png",
          "stats": [
            "20% of [Spell] Damage [LifeLeech|Leeched as Life]"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "59342"
          ]
        },
        {
          "key": "26282",
          "id": "AscendancyWitch2Notable4",
          "name": "Blood Barbs",
          "x": 2114.25,
          "y": -18185.4,
          "icon": "Art/2DArt/SkillIcons/passives/Bloodmage/BloodPhysicalDamageExtraGore.png",
          "stats": [
            "[ElementalDamage|Elemental Damage] also [Contributes] to [Bleeding|Bleeding] [BuffMagnitude|Magnitude]",
            "[Bleeding|Bleeding] you inflict on [Curse|Cursed] targets is [Aggravate|Aggravated]"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "62388"
          ]
        },
        {
          "key": "26383",
          "id": "AscendancyWitch2Notable2_",
          "name": "Sunder the Flesh",
          "x": 1467.56,
          "y": -18071.1,
          "icon": "Art/2DArt/SkillIcons/passives/Bloodmage/BloodMageHigherSpellBaseCritStrike.png",
          "stats": [
            "Base [Critical|Critical Hit Chance] for [Spell|Spells] is 15%"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "48551"
          ],
          "in": [
            "30117"
          ]
        },
        {
          "key": "27667",
          "id": "AscendancyWitch2Notable5",
          "name": "Whispers of the Flesh",
          "x": 2982.04,
          "y": -18259.1,
          "icon": "Art/2DArt/SkillIcons/passives/Bloodmage/BloodMageCurseInfiniteDuration.png",
          "stats": [
            "Targets [Curse|Cursed] by you have 100% reduced Life Regeneration Rate",
            "Targets [Curse|Cursed] by you have at least 15% of Life [Reservation|Reserved]"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "30071"
          ]
        },
        {
          "key": "30071",
          "id": "AscendancyWitch2Small5",
          "name": "Curse Effect",
          "x": 2729.7,
          "y": -18404.8,
          "icon": "Art/2DArt/SkillIcons/passives/Bloodmage/BloodMageNode.png",
          "stats": [
            "6% increased [Curse] [BuffMagnitude|Magnitudes]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "27667"
          ],
          "in": [
            "8415"
          ]
        },
        {
          "key": "30117",
          "id": "AscendancyWitch2Small1",
          "name": "Spell Critical Chance",
          "x": 1684.82,
          "y": -18566.4,
          "icon": "Art/2DArt/SkillIcons/passives/Bloodmage/BloodMageNode.png",
          "stats": [
            "12% increased [Critical|Critical Hit Chance] for [Spell|Spells]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "26383",
            "8415"
          ],
          "in": []
        },
        {
          "key": "31223",
          "id": "AscendancyWitch2Notable8",
          "name": "Crimson Power",
          "x": 2686.76,
          "y": -17185.7,
          "icon": "Art/2DArt/SkillIcons/passives/Bloodmage/BloodMageGainLifeEnergyShield.png",
          "stats": [
            "Gain additional maximum Life equal to 100% of the [ItemEnergyShield|Item Energy Shield] on [Equipped] Body Armour"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "50192"
          ]
        },
        {
          "key": "47442",
          "id": "AscendancyWitch2Small9",
          "name": "Life Flasks",
          "x": 2556.83,
          "y": -18263.4,
          "icon": "Art/2DArt/SkillIcons/passives/Bloodmage/BloodMageNode.png",
          "stats": [
            "15% increased Life [Flask|Flask] Charges gained"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "65518"
          ],
          "in": [
            "8415"
          ]
        },
        {
          "key": "48551",
          "id": "AscendancyWitch2Small2",
          "name": "Spell Critical Chance",
          "x": 1760.62,
          "y": -17480.4,
          "icon": "Art/2DArt/SkillIcons/passives/Bloodmage/BloodMageNode.png",
          "stats": [
            "12% increased [Critical|Critical Hit Chance] for [Spell|Spells]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "52703"
          ],
          "in": [
            "26383"
          ]
        },
        {
          "key": "50192",
          "id": "AscendancyWitch2Small8",
          "name": "Life",
          "x": 3113.62,
          "y": -17480.4,
          "icon": "Art/2DArt/SkillIcons/passives/Bloodmage/BloodMageNode.png",
          "stats": [
            "3% increased maximum Life"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "31223"
          ],
          "in": [
            "56162"
          ]
        },
        {
          "key": "52703",
          "id": "AscendancyWitch2Notable1",
          "name": "Gore Spike",
          "x": 2198.74,
          "y": -17185.7,
          "icon": "Art/2DArt/SkillIcons/passives/Bloodmage/BloodMageCritDamagePerLife.png",
          "stats": [
            "1% increased [CriticalDamageBonus|Critical Damage Bonus] per 50 current Life"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "48551"
          ]
        },
        {
          "key": "56162",
          "id": "AscendancyWitch2Notable7",
          "name": "Grasping Wounds",
          "x": 3417.93,
          "y": -18071.1,
          "icon": "Art/2DArt/SkillIcons/passives/Bloodmage/BloodMageLifeLoss.png",
          "stats": [
            "25% of Life Loss from [Hit|Hits] is prevented, then that much Life is lost over 4 seconds instead"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "50192"
          ],
          "in": [
            "3165"
          ]
        },
        {
          "key": "59342",
          "id": "AscendancyWitch2Small6",
          "name": "Life Leech",
          "x": 2155.79,
          "y": -18404.8,
          "icon": "Art/2DArt/SkillIcons/passives/Bloodmage/BloodMageNode.png",
          "stats": [
            "12% increased amount of Life [LifeLeech|Leeched]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "23416"
          ],
          "in": [
            "8415"
          ]
        },
        {
          "key": "59822",
          "id": "AscendancyWitch2Start",
          "name": "Blood Mage",
          "x": 2442.74,
          "y": -18936.4,
          "icon": "Art/2DArt/SkillIcons/passives/damage.png",
          "stats": [],
          "start": true,
          "notable": false,
          "keystone": false,
          "out": [
            "8415"
          ],
          "in": [
            "54447"
          ]
        },
        {
          "key": "62388",
          "id": "AscendancyWitch2Small4_",
          "name": "Bleed on Critical Chance",
          "x": 2328.66,
          "y": -18263.4,
          "icon": "Art/2DArt/SkillIcons/passives/Bloodmage/BloodMageNode.png",
          "stats": [
            "15% chance to inflict [Bleeding|Bleeding] on [Critical|Critical Hit]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "26282"
          ],
          "in": [
            "8415"
          ]
        },
        {
          "key": "65518",
          "id": "AscendancyWitch2Notable9",
          "name": "Sanguine Tides",
          "x": 2771.24,
          "y": -18185.4,
          "icon": "Art/2DArt/SkillIcons/passives/Bloodmage/BloodMageSaguineTides.png",
          "stats": [
            "[Flask|Flasks] do not recover Life",
            "Gain 1 Life [Flask] Charge per 2% Life spent",
            "On [Hit|Hitting] an Enemy while a Life [Flask] is at full Charges, 40% of its Charges are consumed\n[Gain] 1% of damage as [Physical] damage for 5 seconds per Charge consumed this way"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "47442"
          ]
        }
      ]
    },
    "Lich": {
      "class": "Witch",
      "id": "Witch3",
      "source": "https://poe2db.tw/us/Lich",
      "image": "Art/2DArt/BaseClassIllustrations/LichAscendancy.png",
      "nodes": [
        {
          "key": "59",
          "id": "AscendancyWitch3Notable9",
          "name": "Incessant Cacophony",
          "x": 4242.59,
          "y": -17325.2,
          "icon": "Art/2DArt/SkillIcons/passives/Lich/LichApplyAdditionalCurses.png",
          "stats": [
            "[Curse|Curses] you inflict have infinite Duration",
            "You can apply an additional [Curse]"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "8611"
          ]
        },
        {
          "key": "2516",
          "id": "AscendancyWitch3Notable7",
          "name": "Price of Power",
          "x": 6071.33,
          "y": -18384.9,
          "icon": "Art/2DArt/SkillIcons/passives/Lich/LichSpellsConsumePowerCharges.png",
          "stats": [
            "[Spell|Spells] consume a [Charges|Power Charge] if able to deal 40% more Damage"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "2995"
          ]
        },
        {
          "key": "2877",
          "id": "AscendancyWitch3Notable4",
          "name": "Blackened Heart",
          "x": 3953.75,
          "y": -17464,
          "icon": "Art/2DArt/SkillIcons/passives/Lich/LichImprovedUnholyMight.png",
          "stats": [
            "4% increased [BuffMagnitude|Magnitude] of [UnholyMight|Unholy Might] [Buff|Buffs] you grant per 100 maximum Mana"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "20772"
          ]
        },
        {
          "key": "2995",
          "id": "AscendancyWitch3Small8",
          "name": "Energy Shield if Consumed Power Charge",
          "x": 5699.65,
          "y": -18720.7,
          "icon": "Art/2DArt/SkillIcons/passives/Lich/LichNode.png",
          "stats": [
            "30% increased maximum [EnergyShield|Energy Shield] if you've consumed a [Charges|Power Charge] [Recently|Recently]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "2516"
          ],
          "in": [
            "23710"
          ]
        },
        {
          "key": "8611",
          "id": "AscendancyWitch3Small1",
          "name": "Curse Area",
          "x": 4194.04,
          "y": -17880.1,
          "icon": "Art/2DArt/SkillIcons/passives/Lich/LichNode.png",
          "stats": [
            "15% increased Area of Effect of [Curse|Curses]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "59"
          ],
          "in": [
            "23352"
          ]
        },
        {
          "key": "17788",
          "id": "AscendancyWitch3Notable1",
          "name": "Crystalline Phylactery",
          "x": 5253.69,
          "y": -18532.2,
          "icon": "Art/2DArt/SkillIcons/passives/MasteryBlank.png",
          "stats": [
            "Can Socket a [ItemRarity|non-Unique] [BasicJewel|Basic Jewel] into the Phylactery",
            "100% increased Effect of bonuses gained from Socketed [Jewel]",
            "50% more Mana Cost of Skills if you have no [EnergyShield|Energy Shield]"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "58751"
          ]
        },
        {
          "key": "20772",
          "id": "AscendancyWitch3Small3",
          "name": "Mana",
          "x": 3978.67,
          "y": -18034.9,
          "icon": "Art/2DArt/SkillIcons/passives/Lich/LichNode.png",
          "stats": [
            "3% increased maximum Mana"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "2877"
          ],
          "in": [
            "26085"
          ]
        },
        {
          "key": "23352",
          "id": "AscendancyWitch3Notable2",
          "name": "Rupture the Soul",
          "x": 4429.43,
          "y": -18384.9,
          "icon": "Art/2DArt/SkillIcons/passives/Lich/LichCursedEnemiesExplodeChaos.png",
          "stats": [
            "[Curse|Cursed] Enemies killed by you, or by [Allies] in your [Presence], have a 33% chance to explode, dealing a quarter of their maximum Life as [Chaos] damage"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "8611"
          ],
          "in": [
            "62797"
          ]
        },
        {
          "key": "23710",
          "id": "AscendancyWitch3Start_",
          "name": "Necromancer",
          "x": 5253.69,
          "y": -19013.2,
          "icon": "Art/2DArt/SkillIcons/passives/damage.png",
          "stats": [],
          "start": true,
          "notable": false,
          "keystone": false,
          "out": [
            "58751",
            "2995",
            "51142",
            "39241",
            "33141",
            "62797"
          ],
          "in": [
            "54447"
          ]
        },
        {
          "key": "26085",
          "id": "AscendancyWitch3Notable3",
          "name": "Necromantic Conduit",
          "x": 4242.52,
          "y": -18541.7,
          "icon": "Art/2DArt/SkillIcons/passives/Lich/LichUnholyMight.png",
          "stats": [
            "While you are not on [LowMana|Low Mana], you and [Allies] in your [Presence] have [UnholyMight|Unholy Might]",
            "Lose 5% of maximum Mana per Second"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "20772"
          ],
          "in": [
            "51142"
          ]
        },
        {
          "key": "28431",
          "id": "AscendancyWitch3Notable6",
          "name": "Eternal Life",
          "x": 6553.64,
          "y": -17464,
          "icon": "Art/2DArt/SkillIcons/passives/Lich/LichLifeCannotChangeWhileES.png",
          "stats": [
            "Your Life cannot change while you have [EnergyShield|Energy Shield]"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "36696"
          ]
        },
        {
          "key": "33141",
          "id": "AscendancyWitch3Small6_",
          "name": "Life",
          "x": 5758.84,
          "y": -18912.7,
          "icon": "Art/2DArt/SkillIcons/passives/Lich/LichNode.png",
          "stats": [
            "3% increased maximum Life"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "33570"
          ],
          "in": [
            "23710"
          ]
        },
        {
          "key": "33570",
          "id": "AscendancyWitch3Notable5",
          "name": "Soulless Form",
          "x": 6264.87,
          "y": -18541.7,
          "icon": "Art/2DArt/SkillIcons/passives/Lich/LichManaRegenBasedOnMaxLife.png",
          "stats": [
            "10% of Damage taken bypasses [EnergyShield|Energy Shield]",
            "No inherent Mana Regeneration",
            "Regenerate Mana equal to 6% of maximum Life per second"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "36696"
          ],
          "in": [
            "33141"
          ]
        },
        {
          "key": "36696",
          "id": "AscendancyWitch3Small5",
          "name": "Life",
          "x": 6528.72,
          "y": -18034.9,
          "icon": "Art/2DArt/SkillIcons/passives/Lich/LichNode.png",
          "stats": [
            "3% increased maximum Life"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "28431"
          ],
          "in": [
            "33570"
          ]
        },
        {
          "key": "39241",
          "id": "AscendancyWitch3Small7",
          "name": "Energy Shield",
          "x": 4890.63,
          "y": -18537.4,
          "icon": "Art/2DArt/SkillIcons/passives/Lich/LichNode.png",
          "stats": [
            "20% increased maximum [EnergyShield|Energy Shield]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "58932"
          ],
          "in": [
            "23710"
          ]
        },
        {
          "key": "51142",
          "id": "AscendancyWitch3Small4",
          "name": "Mana",
          "x": 4748.55,
          "y": -18912.7,
          "icon": "Art/2DArt/SkillIcons/passives/Lich/LichNode.png",
          "stats": [
            "3% increased maximum Mana"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "26085"
          ],
          "in": [
            "23710"
          ]
        },
        {
          "key": "58751",
          "id": "AscendancyWitch3Small9",
          "name": "Energy Shield",
          "x": 5253.69,
          "y": -18769.2,
          "icon": "Art/2DArt/SkillIcons/passives/Lich/LichNode.png",
          "stats": [
            "20% increased maximum [EnergyShield|Energy Shield]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "17788"
          ],
          "in": [
            "23710"
          ]
        },
        {
          "key": "58932",
          "id": "AscendancyWitch3Notable8",
          "name": "Eldritch Empowerment",
          "x": 4542.44,
          "y": -18072.1,
          "icon": "Art/2DArt/SkillIcons/passives/Lich/LichSpellCostESandMoreDMG.png",
          "stats": [
            "[Sacrifice|Sacrificing] [EnergyShield|Energy Shield] does not interrupt [ESRecharge|Recharge]",
            "[Sacrifice] 5% of maximum [EnergyShield|Energy Shield] when you Cast a [Spell]\n[Spell|Spells] for which this [Sacrifice] was fully made deal 30% more Damage"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "39241"
          ]
        },
        {
          "key": "62797",
          "id": "AscendancyWitch3Small2",
          "name": "Curse Area",
          "x": 4806.54,
          "y": -18720.7,
          "icon": "Art/2DArt/SkillIcons/passives/Lich/LichNode.png",
          "stats": [
            "15% increased Area of Effect of [Curse|Curses]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "23352"
          ],
          "in": [
            "23710"
          ]
        }
      ]
    },
    "Abyssal Lich": {
      "class": "Witch",
      "id": "Witch3b",
      "source": "https://poe2db.tw/us/Abyssal_Lich",
      "image": "Art/2DArt/BaseClassIllustrations/LichAbyssalAscendancy.png",
      "nodes": [
        {
          "key": "59",
          "id": "AscendancyWitch3Notable9",
          "name": "Incessant Cacophony",
          "x": 4242.59,
          "y": -17325.2,
          "icon": "Art/2DArt/SkillIcons/passives/Lich/LichApplyAdditionalCurses.png",
          "stats": [
            "[Curse|Curses] you inflict have infinite Duration",
            "You can apply an additional [Curse]"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "28740"
          ]
        },
        {
          "key": "11705",
          "id": "AscendancyAltWitch1Notable4",
          "name": "Steward of Kulemak",
          "x": 6071.33,
          "y": -18384.9,
          "icon": "Art/2DArt/SkillIcons/passives/Lich/AbyssalLichAbyssalApparition.png",
          "stats": [
            "Damaging [Spell|Spells] consume a [Charges|Power Charge] if able to trigger Abyssal Apparition",
            "Grants Skill: <underline>{Abyssal Apparition}"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "12474"
          ]
        },
        {
          "key": "36863",
          "id": "AscendancyAltWitch1Notable3",
          "name": "Unwilling Offering",
          "x": 3953.75,
          "y": -17464,
          "icon": "Art/2DArt/SkillIcons/passives/Lich/AbyssalLichBoneOffering.png",
          "stats": [
            "Your [Offering|Offerings] can target Enemies in [CullingStrike|Culling] range",
            "Your [Offering|Offerings] affect you instead of your [Minion|Minions]",
            "[Offering|Offerings] created by [CullingStrike|Culling] Enemies have 1% increased [BuffEffect|Effect] per [Power] of [CullingStrike|Culled] Enemy"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "15028"
          ]
        },
        {
          "key": "12474",
          "id": "AscendancyAltWitch3Small8",
          "name": "Energy Shield if Consumed Power Charge",
          "x": 5699.65,
          "y": -18720.7,
          "icon": "Art/2DArt/SkillIcons/passives/Lich/AbyssalLichNode.png",
          "stats": [
            "30% increased maximum [EnergyShield|Energy Shield] if you've consumed a [Charges|Power Charge] [Recently|Recently]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "11705"
          ],
          "in": [
            "23710"
          ]
        },
        {
          "key": "28740",
          "id": "AscendancyAltWitch3Small1",
          "name": "Curse Area",
          "x": 4194.04,
          "y": -17880.1,
          "icon": "Art/2DArt/SkillIcons/passives/Lich/AbyssalLichNode.png",
          "stats": [
            "15% increased Area of Effect of [Curse|Curses]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "59"
          ],
          "in": [
            "390"
          ]
        },
        {
          "key": "17788",
          "id": "AscendancyWitch3Notable1",
          "name": "Crystalline Phylactery",
          "x": 5253.69,
          "y": -18532.2,
          "icon": "Art/2DArt/SkillIcons/passives/MasteryBlank.png",
          "stats": [
            "Can Socket a [ItemRarity|non-Unique] [BasicJewel|Basic Jewel] into the Phylactery",
            "100% increased Effect of bonuses gained from Socketed [Jewel]",
            "50% more Mana Cost of Skills if you have no [EnergyShield|Energy Shield]"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "35941"
          ]
        },
        {
          "key": "15028",
          "id": "AscendancyAltWitch3Small3",
          "name": "Minion Duration",
          "x": 3978.67,
          "y": -18034.9,
          "icon": "Art/2DArt/SkillIcons/passives/Lich/AbyssalLichNode.png",
          "stats": [
            "15% increased Minion Duration"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "36863"
          ],
          "in": [
            "41162"
          ]
        },
        {
          "key": "390",
          "id": "AscendancyAltWitch1Notable1",
          "name": "Rupture the Flesh",
          "x": 4429.43,
          "y": -18384.9,
          "icon": "Art/2DArt/SkillIcons/passives/Lich/LichCursedEnemiesExplodeChaos.png",
          "stats": [
            "[Curse|Cursed] Enemies Killed by you, or by [Allies] in your [Presence], have a 33% chance to Explode, dealing a quarter of their maximum Life as [Physical] Damage"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "28740"
          ],
          "in": [
            "11965"
          ]
        },
        {
          "key": "23710",
          "id": "AscendancyWitch3Start_",
          "name": "Abyssal Lich",
          "x": 5253.69,
          "y": -19013.2,
          "icon": "Art/2DArt/SkillIcons/passives/damage.png",
          "stats": [],
          "start": true,
          "notable": false,
          "keystone": false,
          "out": [
            "35941",
            "12474",
            "15373",
            "59609",
            "30732",
            "11965"
          ],
          "in": [
            "54447"
          ]
        },
        {
          "key": "41162",
          "id": "AscendancyAltWitch1Notable2",
          "name": "Umbral Well",
          "x": 4242.52,
          "y": -18541.7,
          "icon": "Art/2DArt/SkillIcons/passives/Lich/AbyssalLichBoneGraft.png",
          "stats": [
            "Skeletal [Minion|Minions] you would create instead grant you [LichSkeletalBuff|Umbral Souls] for each [Minion] you would have created"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "15028"
          ],
          "in": [
            "15373"
          ]
        },
        {
          "key": "28431",
          "id": "AscendancyWitch3Notable6",
          "name": "Eternal Life",
          "x": 6553.64,
          "y": -17464,
          "icon": "Art/2DArt/SkillIcons/passives/Lich/LichLifeCannotChangeWhileES.png",
          "stats": [
            "Your Life cannot change while you have [EnergyShield|Energy Shield]"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "31398"
          ]
        },
        {
          "key": "30732",
          "id": "AscendancyAltWitch3Small6",
          "name": "Life",
          "x": 5758.84,
          "y": -18912.7,
          "icon": "Art/2DArt/SkillIcons/passives/Lich/AbyssalLichNode.png",
          "stats": [
            "3% increased maximum Life"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "33570"
          ],
          "in": [
            "23710"
          ]
        },
        {
          "key": "33570",
          "id": "AscendancyWitch3Notable5",
          "name": "Soulless Form",
          "x": 6264.87,
          "y": -18541.7,
          "icon": "Art/2DArt/SkillIcons/passives/Lich/LichManaRegenBasedOnMaxLife.png",
          "stats": [
            "10% of Damage taken bypasses [EnergyShield|Energy Shield]",
            "No inherent Mana Regeneration",
            "Regenerate Mana equal to 6% of maximum Life per second"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "31398"
          ],
          "in": [
            "30732"
          ]
        },
        {
          "key": "31398",
          "id": "AscendancyAltWitch3Small5",
          "name": "Life",
          "x": 6528.72,
          "y": -18034.9,
          "icon": "Art/2DArt/SkillIcons/passives/Lich/AbyssalLichNode.png",
          "stats": [
            "3% increased maximum Life"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "28431"
          ],
          "in": [
            "33570"
          ]
        },
        {
          "key": "59609",
          "id": "AscendancyAltWitch3Small7_",
          "name": "Energy Shield",
          "x": 4890.63,
          "y": -18537.4,
          "icon": "Art/2DArt/SkillIcons/passives/Lich/AbyssalLichNode.png",
          "stats": [
            "20% increased maximum [EnergyShield|Energy Shield]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "58932"
          ],
          "in": [
            "23710"
          ]
        },
        {
          "key": "15373",
          "id": "AscendancyAltWitch3Small4",
          "name": "Minion Reservation Efficiency",
          "x": 4748.55,
          "y": -18912.7,
          "icon": "Art/2DArt/SkillIcons/passives/Lich/AbyssalLichNode.png",
          "stats": [
            "6% increased [Reservation] [Efficiency] of [Minion] Skills"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "41162"
          ],
          "in": [
            "23710"
          ]
        },
        {
          "key": "35941",
          "id": "AscendancyAltWitch3Small9",
          "name": "Energy Shield",
          "x": 5253.69,
          "y": -18769.2,
          "icon": "Art/2DArt/SkillIcons/passives/Lich/AbyssalLichNode.png",
          "stats": [
            "20% increased maximum [EnergyShield|Energy Shield]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "17788"
          ],
          "in": [
            "23710"
          ]
        },
        {
          "key": "58932",
          "id": "AscendancyWitch3Notable8",
          "name": "Eldritch Empowerment",
          "x": 4542.44,
          "y": -18072.1,
          "icon": "Art/2DArt/SkillIcons/passives/Lich/LichSpellCostESandMoreDMG.png",
          "stats": [
            "[Sacrifice|Sacrificing] [EnergyShield|Energy Shield] does not interrupt [ESRecharge|Recharge]",
            "[Sacrifice] 5% of maximum [EnergyShield|Energy Shield] when you Cast a [Spell]\n[Spell|Spells] for which this [Sacrifice] was fully made deal 30% more Damage"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "59609"
          ]
        },
        {
          "key": "11965",
          "id": "AscendancyAltWitch3Small2",
          "name": "Curse Area",
          "x": 4806.54,
          "y": -18720.7,
          "icon": "Art/2DArt/SkillIcons/passives/Lich/AbyssalLichNode.png",
          "stats": [
            "15% increased Area of Effect of [Curse|Curses]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "390"
          ],
          "in": [
            "23710"
          ]
        }
      ]
    },
    "Deadeye": {
      "class": "Ranger",
      "id": "Ranger1",
      "source": "https://poe2db.tw/us/Deadeye",
      "image": "Art/2DArt/BaseClassIllustrations/DeadeyeAscendancy.png",
      "nodes": [
        {
          "key": "30",
          "id": "AscendancyRanger1Notable3",
          "name": "Gathering Winds",
          "x": 14561.8,
          "y": 5351.3,
          "icon": "Art/2DArt/SkillIcons/passives/DeadEye/DeadeyeTailwind.png",
          "stats": [
            "Gain [Tailwind] on Skill use",
            "Lose all [Tailwind] when [Hit]"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "3987"
          ]
        },
        {
          "key": "3987",
          "id": "AscendancyRanger1Small3",
          "name": "Skill Speed",
          "x": 15063.2,
          "y": 5405.7,
          "icon": "Art/2DArt/SkillIcons/passives/DeadEye/DeadeyeNode.png",
          "stats": [
            "4% increased [SkillSpeed|Skill Speed]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "30"
          ],
          "in": [
            "46990"
          ]
        },
        {
          "key": "5817",
          "id": "AscendancyRanger1Notable4",
          "name": "Mirage Deadeye",
          "x": 14981.1,
          "y": 4624.1,
          "icon": "Art/2DArt/SkillIcons/passives/DeadEye/DeadeyeLingeringMirage.png",
          "stats": [
            "Grants Skill: <underline>{Mirage Deadeye}"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "39723"
          ]
        },
        {
          "key": "12033",
          "id": "AscendancyRanger1Notable1",
          "name": "Endless Munitions",
          "x": 14612,
          "y": 4894.44,
          "icon": "Art/2DArt/SkillIcons/passives/DeadEye/DeadeyeGrantsTwoAdditionalProjectiles.png",
          "stats": [
            "Skills fire an additional [Projectile|Projectile]"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "46854"
          ]
        },
        {
          "key": "23508",
          "id": "AscendancyRanger1Notable6",
          "name": "Thrilling Chase",
          "x": 15373.8,
          "y": 4134.21,
          "icon": "Art/2DArt/SkillIcons/passives/DeadEye/DeadeyeFrenzyChargesHaveMoreEffect.png",
          "stats": [
            "Benefits from consuming [Charges|Frenzy Charges] for your Skills have 50% chance to be doubled"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "35801"
          ]
        },
        {
          "key": "24226",
          "id": "AscendancyRanger1Notable8",
          "name": "Bullseye",
          "x": 14381,
          "y": 5800.98,
          "icon": "Art/2DArt/SkillIcons/passives/DeadEye/DeadeyeMoreAccuracy.png",
          "stats": [
            "Apply 10 [CriticalWeakness|Critical Weakness] to Enemies when [Consume|Consuming] a [Mark] on them"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "29871"
          ]
        },
        {
          "key": "24295",
          "id": "AscendancyRanger1Small5",
          "name": "Frenzy Charge Duration",
          "x": 15529.6,
          "y": 4999.28,
          "icon": "Art/2DArt/SkillIcons/passives/DeadEye/DeadeyeNode.png",
          "stats": [
            "25% increased [Charges|Frenzy Charge] Duration"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "37336"
          ],
          "in": [
            "46990"
          ]
        },
        {
          "key": "29871",
          "id": "AscendancyRanger1Small4",
          "name": "Mark Effect",
          "x": 14664.1,
          "y": 5725.15,
          "icon": "Art/2DArt/SkillIcons/passives/DeadEye/DeadeyeNode.png",
          "stats": [
            "12% increased Effect of your [Mark] Skills"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "24226"
          ],
          "in": [
            "59913"
          ]
        },
        {
          "key": "35801",
          "id": "AscendancyRanger1Small6",
          "name": "Frenzy Charge Duration",
          "x": 15425.7,
          "y": 4422.57,
          "icon": "Art/2DArt/SkillIcons/passives/DeadEye/DeadeyeNode.png",
          "stats": [
            "25% increased [Charges|Frenzy Charge] Duration"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "23508"
          ],
          "in": [
            "37336"
          ]
        },
        {
          "key": "37336",
          "id": "AscendancyRanger1Notable5_",
          "name": "Avidity",
          "x": 15478.8,
          "y": 4710.73,
          "icon": "Art/2DArt/SkillIcons/passives/DeadEye/DeadeyeFrenzyChargesGeneration.png",
          "stats": [
            "50% chance when you gain a [Charges|Frenzy Charge] to gain an additional [Charges|Frenzy Charge]"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "35801"
          ],
          "in": [
            "24295"
          ]
        },
        {
          "key": "39723",
          "id": "AscendancyRanger1Small8",
          "name": "Projectile Damage",
          "x": 15280.4,
          "y": 5029.58,
          "icon": "Art/2DArt/SkillIcons/passives/DeadEye/DeadeyeNode.png",
          "stats": [
            "12% increased [Projectile] Damage"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "5817"
          ],
          "in": [
            "46990"
          ]
        },
        {
          "key": "41875",
          "id": "AscendancyRanger1Notable2_2",
          "name": "Point Blank",
          "x": 15021.9,
          "y": 5016.94,
          "icon": "Art/2DArt/SkillIcons/passives/DeadEye/DeadeyeDealMoreProjectileDamageClose.png",
          "stats": [
            "[Projectile|Projectiles] deal 20% more [Hit] damage to targets in the first 3.5 metres of their movement, scaling down with distance travelled to reach 0% after 7 metres"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "42416"
          ],
          "in": []
        },
        {
          "key": "42416",
          "id": "AscendancyRanger1Notable2_Choice",
          "name": "Projectile Proximity Specialisation",
          "x": 15039,
          "y": 5140.94,
          "icon": "Art/2DArt/SkillIcons/passives/DeadEye/DeadeyeProjectileDamageChoose.png",
          "stats": [],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "46854",
            "61461",
            "59542",
            "41875"
          ]
        },
        {
          "key": "46854",
          "id": "AscendancyRanger1Small1__",
          "name": "Projectile Speed",
          "x": 14759.2,
          "y": 4979.44,
          "icon": "Art/2DArt/SkillIcons/passives/DeadEye/DeadeyeNode.png",
          "stats": [
            "10% increased [Projectile] Speed"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "12033",
            "42416"
          ],
          "in": []
        },
        {
          "key": "46990",
          "id": "AscendancyRanger1Start",
          "name": "Deadeye",
          "x": 15613.1,
          "y": 5472.44,
          "icon": "Art/2DArt/SkillIcons/passives/damage.png",
          "stats": [],
          "start": true,
          "notable": false,
          "keystone": false,
          "out": [
            "3987",
            "39723",
            "49165",
            "24295",
            "61461"
          ],
          "in": [
            "50459"
          ]
        },
        {
          "key": "49165",
          "id": "AscendancyRanger1Small7",
          "name": "Mark Effect",
          "x": 15230.8,
          "y": 5573.28,
          "icon": "Art/2DArt/SkillIcons/passives/DeadEye/DeadeyeNode.png",
          "stats": [
            "12% increased Effect of your [Mark] Skills"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "59913"
          ],
          "in": [
            "46990"
          ]
        },
        {
          "key": "59542",
          "id": "AscendancyRanger1Notable2_1",
          "name": "Far Shot",
          "x": 14928.3,
          "y": 5179.94,
          "icon": "Art/2DArt/SkillIcons/passives/DeadEye/DeadeyeDealMoreProjectileDamageFarAway.png",
          "stats": [
            "[Projectile|Projectiles] deal 0% more [Hit] damage to targets in the first 3.5 metres of their movement, scaling up with distance travelled to reach 20% after 7 metres"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "42416"
          ],
          "in": []
        },
        {
          "key": "59913",
          "id": "AscendancyRanger1Notable7",
          "name": "Called Shots",
          "x": 14947.1,
          "y": 5649.31,
          "icon": "Art/2DArt/SkillIcons/passives/DeadEye/DeadeyeMarkEnemiesSpread.png",
          "stats": [
            "Grants Skill: <underline>{Called Shots}"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "29871"
          ],
          "in": [
            "49165"
          ]
        },
        {
          "key": "61461",
          "id": "AscendancyRanger1Small2",
          "name": "Projectile Speed",
          "x": 15196.6,
          "y": 5231.94,
          "icon": "Art/2DArt/SkillIcons/passives/DeadEye/DeadeyeNode.png",
          "stats": [
            "10% increased [Projectile] Speed"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "42416"
          ],
          "in": [
            "46990"
          ]
        }
      ]
    },
    "Pathfinder": {
      "class": "Ranger",
      "id": "Ranger3",
      "source": "https://poe2db.tw/us/Pathfinder",
      "image": "Art/2DArt/BaseClassIllustrations/PathfinderAscendancy.png",
      "nodes": [
        {
          "key": "16",
          "id": "AscendancyRanger3Small6",
          "name": "Life Flask Charges",
          "x": 16325.8,
          "y": 6899.92,
          "icon": "Art/2DArt/SkillIcons/passives/PathFinder/PathfinderNode.png",
          "stats": [
            "20% increased Life [Flask|Flask] Charges gained"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "41619"
          ],
          "in": [
            "1583"
          ]
        },
        {
          "key": "40",
          "id": "AscendancyRanger3Notable5",
          "name": "Sustainable Practices",
          "x": 16767.9,
          "y": 6660.26,
          "icon": "Art/2DArt/SkillIcons/passives/PathFinder/PathfinderEvasionDmgReducVsElementalDmg.png",
          "stats": [
            "50% of [Evasion|Evasion Rating] also grants [ElementalDamage|Elemental Damage] reduction"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "39292"
          ]
        },
        {
          "key": "1583",
          "id": "AscendancyRanger3Start",
          "name": "Pathfinder",
          "x": 16578.8,
          "y": 7454.23,
          "icon": "Art/2DArt/SkillIcons/passives/damage.png",
          "stats": [],
          "start": true,
          "notable": false,
          "keystone": false,
          "out": [
            "14508",
            "9798",
            "49503",
            "39292",
            "12183",
            "16"
          ],
          "in": [
            "50459"
          ]
        },
        {
          "key": "9710",
          "id": "AscendancyRanger3Notable7_5",
          "name": "Bleeding Concoction",
          "x": 15939.3,
          "y": 6460.73,
          "icon": "Art/2DArt/SkillIcons/passives/PathFinder/PathfinderBrewConcoctionBleed.png",
          "stats": [
            "Grants Skill: <underline>{Bleeding Concoction}"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "57141"
          ],
          "in": []
        },
        {
          "key": "9798",
          "id": "AscendancyRanger3Small4",
          "name": "Skill Speed",
          "x": 16192.7,
          "y": 7875.51,
          "icon": "Art/2DArt/SkillIcons/passives/PathFinder/PathfinderNode.png",
          "stats": [
            "4% increased [SkillSpeed|Skill Speed]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "24868"
          ],
          "in": [
            "1583"
          ]
        },
        {
          "key": "12183",
          "id": "AscendancyRanger3Small8",
          "name": "Passive Points",
          "x": 16578.8,
          "y": 7175.17,
          "icon": "Art/2DArt/SkillIcons/passives/PathFinder/PathfinderNode.png",
          "stats": [
            "Grants 1 Passive Skill Point"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "16433"
          ],
          "in": [
            "1583"
          ]
        },
        {
          "key": "12795",
          "id": "AscendancyRanger3Notable8_1",
          "name": "Path of the Sorceress",
          "x": 16657.7,
          "y": 6789.71,
          "icon": "Art/2DArt/SkillIcons/passives/PathFinder/PathfinderPathoftheSorceress.png",
          "stats": [
            "Can Allocate Passive Skills from the Sorceress's starting point",
            "Grants 4 Passive Skill Points"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "44871",
            "4739"
          ],
          "in": [
            "16433"
          ]
        },
        {
          "key": "14508",
          "id": "AscendancyRanger3Small1",
          "name": "Poison Effect",
          "x": 16052.8,
          "y": 7675.63,
          "icon": "Art/2DArt/SkillIcons/passives/PathFinder/PathfinderNode.png",
          "stats": [
            "12% increased [BuffMagnitude|Magnitude] of [Poison] you inflict"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "29074"
          ],
          "in": [
            "1583"
          ]
        },
        {
          "key": "16433",
          "id": "AscendancyRanger3Notable8_Choice_",
          "name": "Path Seeker",
          "x": 16578.8,
          "y": 6892.92,
          "icon": "Art/2DArt/SkillIcons/passives/PathFinder/PathfinderMultichoicePath.png",
          "stats": [],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "12795",
            "57253",
            "36676"
          ],
          "in": [
            "12183"
          ]
        },
        {
          "key": "18940",
          "id": "AscendancyRanger3Notable7_2",
          "name": "Shattering Concoction",
          "x": 16044.1,
          "y": 6279.23,
          "icon": "Art/2DArt/SkillIcons/passives/PathFinder/PathfinderBrewConcoctionCold.png",
          "stats": [
            "Grants Skill: <underline>{Shattering Concoction}"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "57141"
          ],
          "in": []
        },
        {
          "key": "24868",
          "id": "AscendancyRanger3Notable2",
          "name": "Relentless Pursuit",
          "x": 15435.6,
          "y": 8114.23,
          "icon": "Art/2DArt/SkillIcons/passives/PathFinder/PathfinderCannotBeSlowed.png",
          "stats": [
            "Your speed is unaffected by [Slow|Slows]"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "33736"
          ],
          "in": [
            "9798"
          ]
        },
        {
          "key": "29074",
          "id": "AscendancyRanger3Notable4",
          "name": "Overwhelming Toxicity",
          "x": 15435.6,
          "y": 7870.23,
          "icon": "Art/2DArt/SkillIcons/passives/PathFinder/PathfinderEnemiesMultiplePoisons.png",
          "stats": [
            "Double the number of your [Poison|Poisons] that targets can be affected by at the same time",
            "50% less [Poison] Duration"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "14508"
          ]
        },
        {
          "key": "33736",
          "id": "AscendancyRanger3Small3",
          "name": "Skill Speed",
          "x": 14678.5,
          "y": 7875.51,
          "icon": "Art/2DArt/SkillIcons/passives/PathFinder/PathfinderNode.png",
          "stats": [
            "4% increased [SkillSpeed|Skill Speed]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "61991"
          ],
          "in": [
            "24868"
          ]
        },
        {
          "key": "36676",
          "id": "AscendancyRanger3Small9",
          "name": "Passive Points",
          "x": 16582.5,
          "y": 6520.23,
          "icon": "Art/2DArt/SkillIcons/passives/PathFinder/PathfinderNode.png",
          "stats": [
            "Grants 1 Passive Skill Point"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "46454"
          ],
          "in": [
            "16433"
          ]
        },
        {
          "key": "38004",
          "id": "AscendancyRanger3Notable7_1",
          "name": "Explosive Concoction",
          "x": 15939.3,
          "y": 6339.73,
          "icon": "Art/2DArt/SkillIcons/passives/PathFinder/PathfinderBrewConcoctionFire.png",
          "stats": [
            "Grants Skill: <underline>{Explosive Concoction}"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "57141"
          ],
          "in": []
        },
        {
          "key": "39292",
          "id": "AscendancyRanger3Small5",
          "name": "Evasion",
          "x": 16832.5,
          "y": 6899.92,
          "icon": "Art/2DArt/SkillIcons/passives/PathFinder/PathfinderNode.png",
          "stats": [
            "20% increased [Evasion|Evasion Rating]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "40"
          ],
          "in": [
            "1583"
          ]
        },
        {
          "key": "41619",
          "id": "AscendancyRanger3Notable6",
          "name": "Enduring Elixirs",
          "x": 16389.7,
          "y": 6661.26,
          "icon": "Art/2DArt/SkillIcons/passives/PathFinder/PathfinderLifeFlasks.png",
          "stats": [
            "Life [Flask] Effects are not removed when [Reservation|Unreserved] Life is Filled\nLife [Flask] Effects do not Queue"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "16"
          ]
        },
        {
          "key": "46454",
          "id": "AscendancyRanger3Notable9",
          "name": "Traveller's Wisdom",
          "x": 16582.5,
          "y": 6188.03,
          "icon": "Art/2DArt/SkillIcons/passives/PathFinder/PathfinderAdditionalPoints.png",
          "stats": [
            "Attribute Passive Skills can instead grant 5% increased Damage\nAttribute Passive Skills can instead grant 5% increased [Armour], [Evasion] and [EnergyShield|Energy Shield]\nAttribute Passive Skills can instead grant 5% increased Cost [Efficiency]"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "36676"
          ]
        },
        {
          "key": "49503",
          "id": "AscendancyRanger3Small7",
          "name": "Mana Flask Charges",
          "x": 16044.1,
          "y": 6899.92,
          "icon": "Art/2DArt/SkillIcons/passives/PathFinder/PathfinderNode.png",
          "stats": [
            "20% increased Mana [Flask|Flask] Charges gained"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "57141"
          ],
          "in": [
            "1583"
          ]
        },
        {
          "key": "56618",
          "id": "AscendancyRanger3Notable7_3",
          "name": "Fulminating Concoction",
          "x": 16148.9,
          "y": 6338.33,
          "icon": "Art/2DArt/SkillIcons/passives/PathFinder/PathfinderBrewConcoctionLightning.png",
          "stats": [
            "Grants Skill: <underline>{Fulminating Concoction}"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "57141"
          ],
          "in": []
        },
        {
          "key": "57141",
          "id": "AscendancyRanger3Notable7_Choice",
          "name": "Brew Concoction",
          "x": 16044.1,
          "y": 6400.23,
          "icon": "Art/2DArt/SkillIcons/passives/PathFinder/PathfinderBrewConcoction.png",
          "stats": [],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "38004",
            "9710",
            "18940",
            "49503",
            "56618",
            "58379"
          ]
        },
        {
          "key": "57253",
          "id": "AscendancyRanger3Notable8_3",
          "name": "Path of the Warrior",
          "x": 16501.8,
          "y": 6789.73,
          "icon": "Art/2DArt/SkillIcons/passives/PathFinder/PathfinderPathoftheWarrior.png",
          "stats": [
            "Can Allocate Passive Skills from the Warrior's starting point",
            "Grants 4 Passive Skill Points"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "38646",
            "3936"
          ],
          "in": [
            "16433"
          ]
        },
        {
          "key": "58379",
          "id": "AscendancyRanger3Notable7_4",
          "name": "Acidic Concoction",
          "x": 16148.9,
          "y": 6460.73,
          "icon": "Art/2DArt/SkillIcons/passives/PathFinder/PathfinderBrewConcoctionPoison.png",
          "stats": [
            "Grants Skill: <underline>{Acidic Concoction}"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "57141"
          ],
          "in": []
        },
        {
          "key": "61991",
          "id": "AscendancyRanger3Notable1_",
          "name": "Running Assault",
          "x": 14292.5,
          "y": 7454.23,
          "icon": "Art/2DArt/SkillIcons/passives/PathFinder/PathfinderMoreMovemenSpeedUsingSkills.png",
          "stats": [
            "Cannot be [HeavyStun|Heavy Stunned] while Sprinting",
            "30% less Movement Speed Penalty from using Skills while moving"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "33736"
          ]
        }
      ]
    },
    "Titan": {
      "class": "Warrior",
      "id": "Warrior1",
      "source": "https://poe2db.tw/us/Titan",
      "image": "Art/2DArt/BaseClassIllustrations/TitanAscendancy.png",
      "nodes": [
        {
          "key": "3762",
          "id": "AscendancyWarrior1Notable2",
          "name": "Ancestral Empowerment",
          "x": -18797,
          "y": 2792.42,
          "icon": "Art/2DArt/SkillIcons/passives/Titan/TitanSlamSkillsFistOfWar.png",
          "stats": [
            "Every second [Slam] Skill you use yourself is [AncestralBoost|Ancestrally Boosted]"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "38014"
          ]
        },
        {
          "key": "12000",
          "id": "AscendancyWarrior1Notable7",
          "name": "Mysterious Lineage",
          "x": -17758.3,
          "y": 4687.11,
          "icon": "Art/2DArt/SkillIcons/passives/Titan/TitanMoreMaxLife.png",
          "stats": [
            "15% more Maximum Life"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "51690"
          ]
        },
        {
          "key": "13715",
          "id": "AscendancyWarrior1Small3",
          "name": "Stun Buildup",
          "x": -18246.1,
          "y": 4187.49,
          "icon": "Art/2DArt/SkillIcons/passives/Titan/TitanNode.png",
          "stats": [
            "18% increased [Stun] Buildup"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "59372"
          ],
          "in": [
            "32534"
          ]
        },
        {
          "key": "19424",
          "id": "AscendancyWarrior1Small5",
          "name": "Strength",
          "x": -18550.4,
          "y": 4103.69,
          "icon": "Art/2DArt/SkillIcons/passives/Titan/TitanNode.png",
          "stats": [
            "4% increased [Strength]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "60634"
          ],
          "in": [
            "32534"
          ]
        },
        {
          "key": "24807",
          "id": "AscendancyWarrior1Notable8",
          "name": "Stone Skin",
          "x": -18659.6,
          "y": 3126.31,
          "icon": "Art/2DArt/SkillIcons/passives/Titan/TitanMoreBodyArmour.png",
          "stats": [
            "50% more [Armour|Armour] from Equipped Body Armour"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "29323"
          ]
        },
        {
          "key": "27418",
          "id": "AscendancyWarrior1Small6",
          "name": "Strength",
          "x": -18246.4,
          "y": 3928.19,
          "icon": "Art/2DArt/SkillIcons/passives/Titan/TitanNode.png",
          "stats": [
            "4% increased [Strength]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "30115"
          ],
          "in": [
            "60634"
          ]
        },
        {
          "key": "29323",
          "id": "AscendancyWarrior1Small8",
          "name": "Armour",
          "x": -18659.6,
          "y": 3757.32,
          "icon": "Art/2DArt/SkillIcons/passives/Titan/TitanNode.png",
          "stats": [
            "20% increased [Armour]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "24807"
          ],
          "in": [
            "32534"
          ]
        },
        {
          "key": "30115",
          "id": "AscendancyWarrior1Notable5",
          "name": "Hulking Form",
          "x": -18040.3,
          "y": 3809.19,
          "icon": "Art/2DArt/SkillIcons/passives/Titan/TitanSmallPassiveDoubled.png",
          "stats": [
            "50% increased effect of [SmallPassive|Small Passive] Skills"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "27418"
          ]
        },
        {
          "key": "32534",
          "id": "AscendancyWarrior1Start",
          "name": "Titan",
          "x": -18967,
          "y": 4344.19,
          "icon": "Art/2DArt/SkillIcons/passives/damage.png",
          "stats": [],
          "start": true,
          "notable": false,
          "keystone": false,
          "out": [
            "35453",
            "19424",
            "13715",
            "51690",
            "29323"
          ],
          "in": [
            "47175"
          ]
        },
        {
          "key": "35453",
          "id": "AscendancyWarrior1Small1",
          "name": "Slam Area of Effect",
          "x": -18470.8,
          "y": 3798.28,
          "icon": "Art/2DArt/SkillIcons/passives/Titan/TitanNode.png",
          "stats": [
            "[Slam] Skills have 8% increased Area of Effect"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "42275"
          ],
          "in": [
            "32534"
          ]
        },
        {
          "key": "38014",
          "id": "AscendancyWarrior1Small2",
          "name": "Slam Area of Effect",
          "x": -18262.7,
          "y": 2903.41,
          "icon": "Art/2DArt/SkillIcons/passives/Titan/TitanNode.png",
          "stats": [
            "[Slam] Skills have 8% increased Area of Effect"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "3762"
          ],
          "in": [
            "42275"
          ]
        },
        {
          "key": "42275",
          "id": "AscendancyWarrior1Notable1",
          "name": "Earthbreaker",
          "x": -18084.8,
          "y": 3412.2,
          "icon": "Art/2DArt/SkillIcons/passives/Titan/TitanSlamSkillsAftershock.png",
          "stats": [
            "25% chance for [Slam] Skills you use yourself to cause an additional [Aftershock]"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "38014"
          ],
          "in": [
            "35453"
          ]
        },
        {
          "key": "51690",
          "id": "AscendancyWarrior1Small7",
          "name": "Life Regeneration",
          "x": -18305.1,
          "y": 4371.46,
          "icon": "Art/2DArt/SkillIcons/passives/Titan/TitanNode.png",
          "stats": [
            "Regenerate 0.5% of maximum Life per second"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "12000"
          ],
          "in": [
            "32534"
          ]
        },
        {
          "key": "56842",
          "id": "AscendancyWarrior1Small4",
          "name": "Stun Buildup",
          "x": -17364.3,
          "y": 4461.71,
          "icon": "Art/2DArt/SkillIcons/passives/Titan/TitanNode.png",
          "stats": [
            "18% increased [Stun] Buildup"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "59540"
          ],
          "in": [
            "59372"
          ]
        },
        {
          "key": "59372",
          "id": "AscendancyWarrior1Notable4",
          "name": "Crushing Impacts",
          "x": -17718,
          "y": 4045.96,
          "icon": "Art/2DArt/SkillIcons/passives/Titan/TitanYourHitsCrushEnemies.png",
          "stats": [
            "25% more Damage against [HeavyStun|Heavy Stunned] Enemies",
            "Your [Hit|Hits] are [CrushingBlow|Crushing Blows]"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "56842"
          ],
          "in": [
            "13715"
          ]
        },
        {
          "key": "59540",
          "id": "AscendancyWarrior1Notable3",
          "name": "Mountain Splitter",
          "x": -17538.1,
          "y": 4972.91,
          "icon": "Art/2DArt/SkillIcons/passives/Titan/TitanMountainSplitter.png",
          "stats": [
            "Every Third [Slam] skill that doesn't create Fissures which you use yourself causes 3 additional [Aftershock|Aftershocks] ahead and to each side of the initial area"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "56842"
          ]
        },
        {
          "key": "60634",
          "id": "AscendancyWarrior1Notable6",
          "name": "Colossal Capacity",
          "x": -18392.8,
          "y": 4012.69,
          "icon": "Art/2DArt/SkillIcons/passives/Titan/TitanAdditionalInventory.png",
          "stats": [
            "Carry a Chest which adds 20 Inventory Slots"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "27418"
          ],
          "in": [
            "19424"
          ]
        }
      ]
    },
    "Warbringer": {
      "class": "Warrior",
      "id": "Warrior2",
      "source": "https://poe2db.tw/us/Warbringer",
      "image": "Art/2DArt/BaseClassIllustrations/WarbringerAscendancy.png",
      "nodes": [
        {
          "key": "1994",
          "id": "AscendancyWarrior2Small5",
          "name": "Warcry Speed",
          "x": -20833.8,
          "y": 5342.08,
          "icon": "Art/2DArt/SkillIcons/passives/Warbringer/WarbringerNode.png",
          "stats": [
            "20% increased [Warcry|Warcry] Speed"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "47097"
          ],
          "in": [
            "33812"
          ]
        },
        {
          "key": "6127",
          "id": "AscendancyWarrior2Notable3",
          "name": "Jade Heritage",
          "x": -20998.4,
          "y": 4249.81,
          "icon": "Art/2DArt/SkillIcons/passives/Warbringer/WarbringerEncasedInJade.png",
          "stats": [
            "Gain a stack of [Jade] every second",
            "Grants Skill: <underline>{Encase in Jade}"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "18585"
          ]
        },
        {
          "key": "10072",
          "id": "AscendancyWarrior2Small9",
          "name": "Block Chance",
          "x": -20005.1,
          "y": 5031,
          "icon": "Art/2DArt/SkillIcons/passives/Warbringer/WarbringerNode.png",
          "stats": [
            "6% increased [Block] chance"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "52068"
          ],
          "in": [
            "23005"
          ]
        },
        {
          "key": "18585",
          "id": "AscendancyWarrior2Small3",
          "name": "Armour",
          "x": -20998.4,
          "y": 4662.96,
          "icon": "Art/2DArt/SkillIcons/passives/Warbringer/WarbringerNode.png",
          "stats": [
            "20% increased [Armour]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "6127"
          ],
          "in": [
            "33812"
          ]
        },
        {
          "key": "23005",
          "id": "AscendancyWarrior2Notable8",
          "name": "Renly's Training",
          "x": -20376.1,
          "y": 5090.69,
          "icon": "Art/2DArt/SkillIcons/passives/Warbringer/WarbringerBlockChance.png",
          "stats": [
            "Gain 35% Base Chance to [Block] from [Equipped] [Shield] instead of the Shield's value"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "10072"
          ],
          "in": [
            "25935"
          ]
        },
        {
          "key": "25935",
          "id": "AscendancyWarrior2Small8",
          "name": "Block Chance",
          "x": -20833.7,
          "y": 5167.88,
          "icon": "Art/2DArt/SkillIcons/passives/Warbringer/WarbringerNode.png",
          "stats": [
            "6% increased [Block] chance"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "23005"
          ],
          "in": [
            "33812"
          ]
        },
        {
          "key": "33812",
          "id": "AscendancyWarrior2Start",
          "name": "Brute",
          "x": -21155.2,
          "y": 5167.88,
          "icon": "Art/2DArt/SkillIcons/passives/damage.png",
          "stats": [],
          "start": true,
          "notable": false,
          "keystone": false,
          "out": [
            "38769",
            "18585",
            "25935",
            "1994",
            "39365"
          ],
          "in": [
            "47175"
          ]
        },
        {
          "key": "36659",
          "id": "AscendancyWarrior2Notable2",
          "name": "Imploding Impacts",
          "x": -21088.1,
          "y": 3827.93,
          "icon": "Art/2DArt/SkillIcons/passives/Warbringer/WarbringerEnemyArmourBrokenBelowZero.png",
          "stats": [
            "[ArmourBreak|Fully Broken Armour] you inflict increases all Damage Taken from [Hit|Hits] instead",
            "You can [ArmourOverbreak|Break Enemy Armour to below 0]"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "49380"
          ]
        },
        {
          "key": "38769",
          "id": "AscendancyWarrior2Small1",
          "name": "Armour Break",
          "x": -21155.2,
          "y": 4804.1,
          "icon": "Art/2DArt/SkillIcons/passives/Warbringer/WarbringerNode.png",
          "stats": [
            "[ArmourBreak|Break] 25% increased [Armour|Armour]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "58704"
          ],
          "in": [
            "33812"
          ]
        },
        {
          "key": "39365",
          "id": "AscendancyWarrior2Small6",
          "name": "Totem Life",
          "x": -20833,
          "y": 4804.1,
          "icon": "Art/2DArt/SkillIcons/passives/Warbringer/WarbringerNode.png",
          "stats": [
            "20% increased [Totem] Life"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "39411"
          ],
          "in": [
            "33812"
          ]
        },
        {
          "key": "39411",
          "id": "AscendancyWarrior2Notable6",
          "name": "Answered Call",
          "x": -20833.7,
          "y": 4441.1,
          "icon": "Art/2DArt/SkillIcons/passives/Warbringer/WarbringerTotemsDefendedByAncestors.png",
          "stats": [
            "+1 to maximum number of Summoned [Totem|Totems]",
            "Trigger Ancestral Spirits when you Summon a [Totem]",
            "Grants Skill: <underline>{Ancestral Spirits}"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "48682"
          ],
          "in": [
            "39365"
          ]
        },
        {
          "key": "40915",
          "id": "AscendancyWarrior2Notable7",
          "name": "Wooden Wall",
          "x": -20900.7,
          "y": 3827.89,
          "icon": "Art/2DArt/SkillIcons/passives/Warbringer/WarbringerDamageTakenByTotems.png",
          "stats": [
            "20% of Damage from [Hit|Hits] is taken from your nearest [Totem|Totem's] Life before you"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "48682"
          ]
        },
        {
          "key": "47097",
          "id": "AscendancyWarrior2Notable4_",
          "name": "Warcaller's Bellow",
          "x": -20379.9,
          "y": 5421.12,
          "icon": "Art/2DArt/SkillIcons/passives/Warbringer/WarbringerWarcryExplodesCorpses.png",
          "stats": [
            "[Warcry|Warcries] Explode [Corpse|Corpses] dealing 25% of their Life as [Physical] Damage",
            "Ignore [Warcry] Cooldowns"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "1994"
          ]
        },
        {
          "key": "48682",
          "id": "AscendancyWarrior2Small7_",
          "name": "Totem Life",
          "x": -20833.7,
          "y": 4078.1,
          "icon": "Art/2DArt/SkillIcons/passives/Warbringer/WarbringerNode.png",
          "stats": [
            "20% increased [Totem] Life"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "40915"
          ],
          "in": [
            "39411"
          ]
        },
        {
          "key": "49380",
          "id": "AscendancyWarrior2Small2",
          "name": "Armour Break",
          "x": -21155.2,
          "y": 4078.1,
          "icon": "Art/2DArt/SkillIcons/passives/Warbringer/WarbringerNode.png",
          "stats": [
            "[ArmourBreak|Break] 25% increased [Armour|Armour]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "36659"
          ],
          "in": [
            "58704"
          ]
        },
        {
          "key": "52068",
          "id": "AscendancyWarrior2Notable9",
          "name": "Turtle Charm",
          "x": -19976.2,
          "y": 5450.01,
          "icon": "Art/2DArt/SkillIcons/passives/Warbringer/WarbringerCanBlockAllDamageShieldNotRaised.png",
          "stats": [
            "You take 20% of damage from [Block|Blocked] [Hit|Hits]",
            "Maximum [Block] chance is 75%"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "10072"
          ]
        },
        {
          "key": "58704",
          "id": "AscendancyWarrior2Notable1",
          "name": "Anvil's Weight",
          "x": -21155.2,
          "y": 4441.1,
          "icon": "Art/2DArt/SkillIcons/passives/Warbringer/WarbringerBreakEnemyArmour.png",
          "stats": [
            "[ArmourBreak|Break Armour] equal to 10% of [Hit|Hit Damage] dealt"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "49380"
          ],
          "in": [
            "38769"
          ]
        }
      ]
    },
    "Smith of Kitava": {
      "class": "Warrior",
      "id": "Warrior3",
      "source": "https://poe2db.tw/us/Smith_of_Kitava",
      "image": "Art/2DArt/BaseClassIllustrations/SmithOfKitavaAscendancy.png",
      "nodes": [
        {
          "key": "110",
          "id": "AscendancyWarrior3Notable6_10",
          "name": "Internal Layer",
          "x": -21471,
          "y": 7718.69,
          "icon": "Art/2DArt/SkillIcons/passives/SmithofKitava/SmithOfKitavaNormalArmourBonus10.png",
          "stats": [
            "Body Armour grants [Hit|Hits] against you have 100% reduced [CriticalDamageBonus|Critical Damage Bonus]"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "9988"
          ]
        },
        {
          "key": "5386",
          "id": "AscendancyWarrior3Small1",
          "name": "Fire Damage",
          "x": -22167.2,
          "y": 6819.83,
          "icon": "Art/2DArt/SkillIcons/passives/SmithofKitava/SmithofKitavaNode.png",
          "stats": [
            "20% increased [Fire] Damage"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "22541"
          ],
          "in": [
            "5852"
          ]
        },
        {
          "key": "5852",
          "id": "AscendancyWarrior3Start",
          "name": "Smith of Kitava",
          "x": -21978.9,
          "y": 7459.09,
          "icon": "Art/2DArt/SkillIcons/passives/damage.png",
          "stats": [],
          "start": true,
          "notable": false,
          "keystone": false,
          "out": [
            "20895",
            "47236",
            "5386",
            "14960",
            "9988"
          ],
          "in": [
            "47175"
          ]
        },
        {
          "key": "8525",
          "id": "AscendancyWarrior3Notable6_7",
          "name": "Leather Bindings",
          "x": -21238.3,
          "y": 7993.38,
          "icon": "Art/2DArt/SkillIcons/passives/SmithofKitava/SmithOfKitavaNormalArmourBonus7.png",
          "stats": [
            "Body Armour grants regenerate 3% of maximum Life per second"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "9988"
          ]
        },
        {
          "key": "9988",
          "id": "AscendancyWarrior3Notable6_0",
          "name": "Smith's Masterwork",
          "x": -20817.8,
          "y": 7459.09,
          "icon": "Art/2DArt/SkillIcons/passives/SmithofKitava/SmithOfKitavaCanOnlyWearNormalRarityBodyArmour.png",
          "stats": [
            "Can only use a [ItemRarity|Normal] Body Armour",
            "+200 to [Armour] for each Connected Notable Passive Skill Allocated"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "20195",
            "16276",
            "60913",
            "25438",
            "9997",
            "8525",
            "13772",
            "22908",
            "110",
            "49340",
            "61039",
            "64962"
          ],
          "in": [
            "5852"
          ]
        },
        {
          "key": "9997",
          "id": "AscendancyWarrior3Notable6_9",
          "name": "Molten Symbol",
          "x": -21079.7,
          "y": 8080.09,
          "icon": "Art/2DArt/SkillIcons/passives/SmithofKitava/SmithOfKitavaNormalArmourBonus9.png",
          "stats": [
            "Body Armour grants 25% of [Physical] Damage from [Hit|Hits] taken as [Fire] Damage"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "9988"
          ]
        },
        {
          "key": "13772",
          "id": "AscendancyWarrior3Notable6_8",
          "name": "Flowing Metal",
          "x": -20909.6,
          "y": 8123.71,
          "icon": "Art/2DArt/SkillIcons/passives/SmithofKitava/SmithOfKitavaNormalArmourBonus8.png",
          "stats": [
            "Body Armour grants +50% of [Armour] also applies to [ElementalDamage|Elemental Damage]"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "9988"
          ]
        },
        {
          "key": "14960",
          "id": "AscendancyWarrior3Small4",
          "name": "Fire Resistance",
          "x": -21954.6,
          "y": 6819.83,
          "icon": "Art/2DArt/SkillIcons/passives/SmithofKitava/SmithofKitavaNode.png",
          "stats": [
            "+8% to [Resistances|Fire Resistance]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "57959"
          ],
          "in": [
            "5852"
          ]
        },
        {
          "key": "16276",
          "id": "AscendancyWarrior3Notable6_2",
          "name": "Kitavan Imprint",
          "x": -20110.7,
          "y": 7558.75,
          "icon": "Art/2DArt/SkillIcons/passives/SmithofKitava/SmithOfKitavaNormalArmourBonus2.png",
          "stats": [
            "Body Armour grants 60% increased [Glory] generation"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "9988"
          ]
        },
        {
          "key": "20195",
          "id": "AscendancyWarrior3Notable6_3",
          "name": "Spiked Plates",
          "x": -20185.1,
          "y": 7718.69,
          "icon": "Art/2DArt/SkillIcons/passives/SmithofKitava/SmithOfKitavaNormalArmourBonus3.png",
          "stats": [
            "Body Armour grants 100% increased [Thorns|Thorns] damage"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "9988"
          ]
        },
        {
          "key": "20895",
          "id": "AscendancyWarrior3Small2",
          "name": "Strength",
          "x": -21530.6,
          "y": 6819.83,
          "icon": "Art/2DArt/SkillIcons/passives/SmithofKitava/SmithofKitavaNode.png",
          "stats": [
            "5% increased [Strength]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "47184"
          ],
          "in": [
            "5852"
          ]
        },
        {
          "key": "22541",
          "id": "AscendancyWarrior3Notable1",
          "name": "Heat of the Forge",
          "x": -22167.2,
          "y": 6439.13,
          "icon": "Art/2DArt/SkillIcons/passives/SmithofKitava/SmithofKitavaTriggerFireSpellsMeleeWeapon.png",
          "stats": [
            "Grants Skill: <underline>{Fire Spell on Hit}"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "5386"
          ]
        },
        {
          "key": "22908",
          "id": "AscendancyWarrior3Notable6_6",
          "name": "Tribute to Utula",
          "x": -21373.2,
          "y": 7868.53,
          "icon": "Art/2DArt/SkillIcons/passives/SmithofKitava/SmithOfKitavaNormalArmourBonus6.png",
          "stats": [
            "Body Armour grants 30% increased [Spirit]"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "9988"
          ]
        },
        {
          "key": "25438",
          "id": "AscendancyWarrior3Notable6_12_",
          "name": "Heatproofing",
          "x": -20726.4,
          "y": 8123.71,
          "icon": "Art/2DArt/SkillIcons/passives/SmithofKitava/SmithOfKitavaNormalArmourBonus12.png",
          "stats": [
            "Body Armour grants [Unaffected] by [DamagingAilments|Damaging Ailments]"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "9988"
          ]
        },
        {
          "key": "47184",
          "id": "AscendancyWarrior3Notable2",
          "name": "Living Weapon",
          "x": -21530.6,
          "y": 6439.13,
          "icon": "Art/2DArt/SkillIcons/passives/SmithofKitava/SmithOfKitavaCreateMinionMeleeWeapon.png",
          "stats": [
            "Grants Skill: <underline>{Manifest Weapon}"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "20895"
          ]
        },
        {
          "key": "47236",
          "id": "AscendancyWarrior3Small3",
          "name": "Melee Damage",
          "x": -21742.6,
          "y": 6819.83,
          "icon": "Art/2DArt/SkillIcons/passives/SmithofKitava/SmithofKitavaNode.png",
          "stats": [
            "20% increased [Melee] Damage"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "60298"
          ],
          "in": [
            "5852"
          ]
        },
        {
          "key": "48537",
          "id": "AscendancyWarrior3Notable5",
          "name": "Forged in Flame",
          "x": -21318.6,
          "y": 6439.13,
          "icon": "Art/2DArt/SkillIcons/passives/SmithofKitava/SmithOfKitavaImprovedFireResistAppliesToColdLightning.png",
          "stats": [
            "Modifiers to [MaximumResistances|Maximum Fire Resistance] also grant [MaximumResistances|Maximum Cold and Lightning Resistance]"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "63401"
          ]
        },
        {
          "key": "49340",
          "id": "AscendancyWarrior3Notable6_4_",
          "name": "Support Straps",
          "x": -20559.1,
          "y": 8080.09,
          "icon": "Art/2DArt/SkillIcons/passives/SmithofKitava/SmithOfKitavaNormalArmourBonus4.png",
          "stats": [
            "Body Armour grants 20% increased [Strength]"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "9988"
          ]
        },
        {
          "key": "57959",
          "id": "AscendancyWarrior3Notable4",
          "name": "Coal Stoker",
          "x": -21954.6,
          "y": 6074.6,
          "icon": "Art/2DArt/SkillIcons/passives/SmithofKitava/SmithOfKitavaFireResistAppliesToColdLightning.png",
          "stats": [
            "Modifiers to [Resistances|Fire Resistance] also grant [Resistances|Cold and Lightning Resistance] at 50% of their value"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "63401"
          ],
          "in": [
            "14960"
          ]
        },
        {
          "key": "60298",
          "id": "AscendancyWarrior3Notable3",
          "name": "Against the Anvil",
          "x": -21742.6,
          "y": 6439.13,
          "icon": "Art/2DArt/SkillIcons/passives/SmithofKitava/SmithOfKitavaImbueMainHandWeapon.png",
          "stats": [
            "Grants Skill: <underline>{Temper Weapon}"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "47236"
          ]
        },
        {
          "key": "60913",
          "id": "AscendancyWarrior3Notable6_5",
          "name": "Kitavan Engraving",
          "x": -20401.3,
          "y": 7993.38,
          "icon": "Art/2DArt/SkillIcons/passives/SmithofKitava/SmithOfKitavaNormalArmourBonus5.png",
          "stats": [
            "Body Armour grants 15% increased maximum Life"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "9988"
          ]
        },
        {
          "key": "61039",
          "id": "AscendancyWarrior3Notable6_1",
          "name": "Tantalum Alloy",
          "x": -20277.3,
          "y": 7868.53,
          "icon": "Art/2DArt/SkillIcons/passives/SmithofKitava/SmithOfKitavaNormalArmourBonus1.png",
          "stats": [
            "Body Armour grants +75% to [Resistances|Fire Resistance]"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "9988"
          ]
        },
        {
          "key": "63401",
          "id": "AscendancyWarrior3Small5",
          "name": "Fire Resistance",
          "x": -21318.5,
          "y": 6074.6,
          "icon": "Art/2DArt/SkillIcons/passives/SmithofKitava/SmithofKitavaNode.png",
          "stats": [
            "+8% to [Resistances|Fire Resistance]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "48537"
          ],
          "in": [
            "57959"
          ]
        },
        {
          "key": "64962",
          "id": "AscendancyWarrior3Notable6_11",
          "name": "Dedication to Kitava",
          "x": -21528.1,
          "y": 7558.75,
          "icon": "Art/2DArt/SkillIcons/passives/SmithofKitava/SmithOfKitavaNormalArmourBonus11.png",
          "stats": [
            "Body Armour grants +100% of [Armour] also applies to [Chaos|Chaos Damage]"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "9988"
          ]
        }
      ]
    },
    "Stormweaver": {
      "class": "Sorceress",
      "id": "Sorceress1",
      "source": "https://poe2db.tw/us/Stormweaver",
      "image": "Art/2DArt/BaseClassIllustrations/StormcallerAscendancy.png",
      "nodes": [
        {
          "key": "2857",
          "id": "AscendancySorceress1Notable5",
          "name": "Strike Twice",
          "x": -4227.59,
          "y": -17208.1,
          "icon": "Art/2DArt/SkillIcons/passives/Stormweaver/ShockAddditionalTime.png",
          "stats": [
            "Targets can be affected by two of your [Shock]s at the same time",
            "25% less [BuffMagnitude|Magnitude] of [Shock] you inflict"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "7998"
          ],
          "in": [
            "49759"
          ]
        },
        {
          "key": "7246",
          "id": "AscendancySorceress1Small2",
          "name": "Mana Regeneration",
          "x": -4884.09,
          "y": -16481.5,
          "icon": "Art/2DArt/SkillIcons/passives/Stormweaver/StormweaverNode.png",
          "stats": [
            "12% increased Mana Regeneration Rate"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "39204"
          ],
          "in": [
            "8867"
          ]
        },
        {
          "key": "7998",
          "id": "AscendancySorceress1Small6",
          "name": "Shock Chance",
          "x": -3953.79,
          "y": -17307.8,
          "icon": "Art/2DArt/SkillIcons/passives/Stormweaver/StormweaverNode.png",
          "stats": [
            "20% increased chance to [Shock]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "39640"
          ],
          "in": [
            "2857"
          ]
        },
        {
          "key": "8867",
          "id": "AscendancySorceress1Notable1",
          "name": "Constant Gale",
          "x": -4739.94,
          "y": -17019.5,
          "icon": "Art/2DArt/SkillIcons/passives/Stormweaver/GrantsArcaneSurge.png",
          "stats": [
            "You have [ArcaneSurge|Arcane Surge]"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "7246"
          ],
          "in": [
            "64789"
          ]
        },
        {
          "key": "12488",
          "id": "AscendancySorceress1Small9",
          "name": "Remnant Range",
          "x": -3356.63,
          "y": -17721.9,
          "icon": "Art/2DArt/SkillIcons/passives/Stormweaver/StormweaverNode.png",
          "stats": [
            "[Remnant|Remnants] can be collected from 25% further away"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "49189"
          ],
          "in": [
            "40721"
          ]
        },
        {
          "key": "12882",
          "id": "AscendancySorceress1Notable3",
          "name": "Tempest Caller",
          "x": -2876.25,
          "y": -17019.5,
          "icon": "Art/2DArt/SkillIcons/passives/Stormweaver/GrantsElementalStorm.png",
          "stats": [
            "Trigger Elemental Storm on [Critical|Critical Hit] with [Spell|Spells]",
            "Grants Skill: <underline>{Elemental Storm}"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "25618"
          ],
          "in": [
            "65413"
          ]
        },
        {
          "key": "13673",
          "id": "AscendancySorceress1Small7",
          "name": "Chill Duration",
          "x": -3714.32,
          "y": -17553.4,
          "icon": "Art/2DArt/SkillIcons/passives/Stormweaver/StormweaverNode.png",
          "stats": [
            "25% increased [Chill|Chill] Duration on Enemies"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "61985"
          ],
          "in": [
            "40721"
          ]
        },
        {
          "key": "18849",
          "id": "AscendancySorceress1Notable8",
          "name": "Shaper of Winter",
          "x": -3694.01,
          "y": -17128.5,
          "icon": "Art/2DArt/SkillIcons/passives/Stormweaver/AllDamageCanChill.png",
          "stats": [
            "[DamageTypes|All Damage] from [Hit|Hits] [Contributes|Contributes] to [Chill] Magnitude"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "29398"
          ]
        },
        {
          "key": "25618",
          "id": "AscendancySorceress1Small4",
          "name": "Spell Critical Chance",
          "x": -2732.09,
          "y": -16481.5,
          "icon": "Art/2DArt/SkillIcons/passives/Stormweaver/StormweaverNode.png",
          "stats": [
            "12% increased [Critical|Critical Hit Chance] for [Spell|Spells]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "38578"
          ],
          "in": [
            "12882"
          ]
        },
        {
          "key": "29398",
          "id": "AscendancySorceress1Small8",
          "name": "Chill Duration",
          "x": -3662.4,
          "y": -17307.8,
          "icon": "Art/2DArt/SkillIcons/passives/Stormweaver/StormweaverNode.png",
          "stats": [
            "25% increased [Chill|Chill] Duration on Enemies"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "18849"
          ],
          "in": [
            "61985"
          ]
        },
        {
          "key": "38578",
          "id": "AscendancySorceress1Notable4",
          "name": "Multiplying Squalls",
          "x": -2876.25,
          "y": -15943.5,
          "icon": "Art/2DArt/SkillIcons/passives/Stormweaver/ImprovedElementalStorm.png",
          "stats": [
            "+2 to [Limit] for [ElementalDamage|Elemental] Skills"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "25618"
          ]
        },
        {
          "key": "39204",
          "id": "AscendancySorceress1Notable2",
          "name": "Force of Will",
          "x": -4739.94,
          "y": -15943.5,
          "icon": "Art/2DArt/SkillIcons/passives/Stormweaver/ImprovedArcaneSurge.png",
          "stats": [
            "20% of Damage is taken from Mana before Life",
            "20% increased [BuffEffect|Effect] of [ArcaneSurge|Arcane Surge] on you per ten percent missing Mana"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "7246"
          ]
        },
        {
          "key": "39640",
          "id": "AscendancySorceress1Notable6",
          "name": "Shaper of Storms",
          "x": -3922.18,
          "y": -17128.5,
          "icon": "Art/2DArt/SkillIcons/passives/Stormweaver/AllDamageCanShock.png",
          "stats": [
            "[DamageTypes|All Damage] from [HitDamage|Hits] [Contributes|Contributes] to [Shock] Chance"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "7998"
          ]
        },
        {
          "key": "40721",
          "id": "AscendancySorceress1Start_",
          "name": "Stormweaver",
          "x": -3808.09,
          "y": -17801.5,
          "icon": "Art/2DArt/SkillIcons/passives/damage.png",
          "stats": [],
          "start": true,
          "notable": false,
          "keystone": false,
          "out": [
            "64789",
            "65413",
            "49759",
            "13673",
            "12488",
            "44484"
          ],
          "in": [
            "54447"
          ]
        },
        {
          "key": "42522",
          "id": "AscendancySorceress1Notable10",
          "name": "Refracted Infusion",
          "x": -4699.87,
          "y": -17454.7,
          "icon": "Art/2DArt/SkillIcons/passives/Stormweaver/StormweaverRemnant1.png",
          "stats": [
            "When collecting an [ElementalInfusion|Elemental Infusion], gain another different [ElementalInfusion|Elemental Infusion]"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "44484"
          ]
        },
        {
          "key": "44484",
          "id": "AscendancySorceress1Small10",
          "name": "Remnant Range",
          "x": -4259.56,
          "y": -17721.9,
          "icon": "Art/2DArt/SkillIcons/passives/Stormweaver/StormweaverNode.png",
          "stats": [
            "[Remnant|Remnants] can be collected from 25% further away"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "42522"
          ],
          "in": [
            "40721"
          ]
        },
        {
          "key": "49189",
          "id": "AscendancySorceress1Notable9",
          "name": "Storm's Recollection",
          "x": -2916.32,
          "y": -17454.7,
          "icon": "Art/2DArt/SkillIcons/passives/Stormweaver/StormweaverRemnant2.png",
          "stats": [
            "[Remnant|Remnants] can be collected from 50% further away",
            "[Remnant|Remnants] you create reappear once, 3 seconds after being collected"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "12488"
          ]
        },
        {
          "key": "49759",
          "id": "AscendancySorceress1Small5",
          "name": "Shock Chance",
          "x": -3901.87,
          "y": -17553.4,
          "icon": "Art/2DArt/SkillIcons/passives/Stormweaver/StormweaverNode.png",
          "stats": [
            "20% increased chance to [Shock]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "2857"
          ],
          "in": [
            "40721"
          ]
        },
        {
          "key": "61985",
          "id": "AscendancySorceress1Notable7",
          "name": "Heavy Snows",
          "x": -3388.59,
          "y": -17208.1,
          "icon": "Art/2DArt/SkillIcons/passives/Stormweaver/ChillAddditionalTime.png",
          "stats": [
            "Targets can be affected by two of your [Chill]s at the same time",
            "Your [Chill|Chills] can [Slow] targets by up to a maximum of 35%",
            "25% less [BuffMagnitude|Magnitude] of [Chill|Chill] you inflict"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "29398"
          ],
          "in": [
            "13673"
          ]
        },
        {
          "key": "64789",
          "id": "AscendancySorceress1Small1",
          "name": "Mana Regeneration",
          "x": -4176.11,
          "y": -17492.6,
          "icon": "Art/2DArt/SkillIcons/passives/Stormweaver/StormweaverNode.png",
          "stats": [
            "12% increased Mana Regeneration Rate"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "8867"
          ],
          "in": [
            "40721"
          ]
        },
        {
          "key": "65413",
          "id": "AscendancySorceress1Small3",
          "name": "Spell Critical Chance",
          "x": -3440.08,
          "y": -17492.6,
          "icon": "Art/2DArt/SkillIcons/passives/Stormweaver/StormweaverNode.png",
          "stats": [
            "12% increased [Critical|Critical Hit Chance] for [Spell|Spells]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "12882"
          ],
          "in": [
            "40721"
          ]
        }
      ]
    },
    "Chronomancer": {
      "class": "Sorceress",
      "id": "Sorceress2",
      "source": "https://poe2db.tw/us/Chronomancer",
      "image": "Art/2DArt/BaseClassIllustrations/ChronomancerAscendancy.png",
      "nodes": [
        {
          "key": "1579",
          "id": "AscendancySorceress2Small5",
          "name": "Cooldown Recovery Rate",
          "x": -5291.69,
          "y": -15863.3,
          "icon": "Art/2DArt/SkillIcons/passives/Temporalist/TemporalistNode.png",
          "stats": [
            "6% increased [CooldownRecovery|Cooldown Recovery Rate]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "3605"
          ],
          "in": [
            "22147"
          ]
        },
        {
          "key": "3605",
          "id": "AscendancySorceress2Notable6",
          "name": "Unbound Encore",
          "x": -5622.31,
          "y": -14757.2,
          "icon": "Art/2DArt/SkillIcons/passives/Temporalist/TemporalistGrantsReloadCooldownsSkill.png",
          "stats": [
            "Grants Skill: <underline>{Time Snap}"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "1579",
            "32856"
          ]
        },
        {
          "key": "10731",
          "id": "AscendancySorceress2Notable8",
          "name": "Quicksand Hourglass",
          "x": -6196.33,
          "y": -15418.6,
          "icon": "Art/2DArt/SkillIcons/passives/Temporalist/TemporalistGainMoreCastSpeed8Seconds.png",
          "stats": [
            "Grants [Chronobuff|Sands of Time]"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "43128"
          ]
        },
        {
          "key": "10987",
          "id": "AscendancySorceress2Notable5",
          "name": "Now and Again",
          "x": -5678.73,
          "y": -15367,
          "icon": "Art/2DArt/SkillIcons/passives/Temporalist/TemporalistChanceSkillNoCooldownSkill.png",
          "stats": [
            "[Cascadable|Cascadable] [Spell|Spells] have 20% chance to [Cascadable|Echo]",
            "[Repeat|Repeatable] [Spell|Spells] have 20% chance to [Repeat]"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "54194"
          ]
        },
        {
          "key": "18678",
          "id": "AscendancySorceress2Small1",
          "name": "Buff Expiry Rate",
          "x": -6298.25,
          "y": -15856.2,
          "icon": "Art/2DArt/SkillIcons/passives/Temporalist/TemporalistNode.png",
          "stats": [
            "[Buff|Buffs] on you expire 10% slower"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "28153"
          ],
          "in": [
            "22147"
          ]
        },
        {
          "key": "22147",
          "id": "AscendancySorceress2Start",
          "name": "Chronomancer",
          "x": -5794.69,
          "y": -15863.3,
          "icon": "Art/2DArt/SkillIcons/passives/damage.png",
          "stats": [],
          "start": true,
          "notable": false,
          "keystone": false,
          "out": [
            "18678",
            "50219",
            "1579",
            "27990",
            "43128",
            "54194"
          ],
          "in": [
            "54447"
          ]
        },
        {
          "key": "26638",
          "id": "AscendancySorceress2Notable1_",
          "name": "Footprints in the Sand",
          "x": -5917.63,
          "y": -13652.4,
          "icon": "Art/2DArt/SkillIcons/passives/Temporalist/TemporalistGrantsTemporalRiftSkill.png",
          "stats": [
            "Grants Skill: <underline>{Temporal Rift}"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "63002"
          ]
        },
        {
          "key": "27990",
          "id": "AscendancySorceress2Small7",
          "name": "Slow Effect",
          "x": -5431.36,
          "y": -15653.9,
          "icon": "Art/2DArt/SkillIcons/passives/Temporalist/TemporalistNode.png",
          "stats": [
            "[Debuff|Debuffs] you inflict have 6% increased [SlowMagnitudeModifier|Slow Magnitude]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "49049"
          ],
          "in": [
            "22147"
          ]
        },
        {
          "key": "28153",
          "id": "AscendancySorceress2Notable4",
          "name": "Phased Form",
          "x": -5984.28,
          "y": -14757.2,
          "icon": "Art/2DArt/SkillIcons/passives/Temporalist/TemporalistFasterRecoup.png",
          "stats": [
            "Take 30% less Damage",
            "4 seconds after being Damaged by an Enemy [Hit], take Damage equal to 30% of that [Hit]'s Damage"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "63002"
          ],
          "in": [
            "18678"
          ]
        },
        {
          "key": "32856",
          "id": "AscendancySorceress2Small6",
          "name": "Cooldown Recovery Rate",
          "x": -5291.69,
          "y": -13652,
          "icon": "Art/2DArt/SkillIcons/passives/Temporalist/TemporalistNode.png",
          "stats": [
            "6% increased [CooldownRecovery|Cooldown Recovery Rate]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "58747",
            "3605"
          ],
          "in": []
        },
        {
          "key": "42035",
          "id": "AscendancySorceress2Notable3",
          "name": "Inevitability",
          "x": -5910.66,
          "y": -15367,
          "icon": "Art/2DArt/SkillIcons/passives/Temporalist/TemporalistSynchronisationofPain.png",
          "stats": [
            "Grants Skill: <underline>{Inevitable Agony}"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "50219"
          ]
        },
        {
          "key": "43128",
          "id": "AscendancySorceress2Small8",
          "name": "Skill Speed and Area of Effect",
          "x": -6153.54,
          "y": -15646.9,
          "icon": "Art/2DArt/SkillIcons/passives/Temporalist/TemporalistNode.png",
          "stats": [
            "4% increased [SkillSpeed|Skill Speed]",
            "6% increased Area of Effect"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "10731"
          ],
          "in": [
            "22147"
          ]
        },
        {
          "key": "49049",
          "id": "AscendancySorceress2Notable7",
          "name": "Apex of the Moment",
          "x": -5397.04,
          "y": -15418.6,
          "icon": "Art/2DArt/SkillIcons/passives/Temporalist/TemporalistNearbyEnemiesProjectilesSlowed.png",
          "stats": [
            "Enemies in your [Presence|Presence] are [Slow|Slowed] by 20%"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "27990"
          ]
        },
        {
          "key": "50219",
          "id": "AscendancySorceress2Small3",
          "name": "Area of Effect",
          "x": -5910.66,
          "y": -15598.9,
          "icon": "Art/2DArt/SkillIcons/passives/Temporalist/TemporalistNode.png",
          "stats": [
            "8% increased Area of Effect"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "42035"
          ],
          "in": [
            "22147"
          ]
        },
        {
          "key": "54194",
          "id": "AscendancySorceress2Small4",
          "name": "Cast Speed",
          "x": -5678.73,
          "y": -15598.9,
          "icon": "Art/2DArt/SkillIcons/passives/Temporalist/TemporalistNode.png",
          "stats": [
            "6% increased Cast Speed"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "10987"
          ],
          "in": [
            "22147"
          ]
        },
        {
          "key": "58747",
          "id": "AscendancySorceress2Notable2",
          "name": "Ultimate Command",
          "x": -5654.84,
          "y": -13652,
          "icon": "Art/2DArt/SkillIcons/passives/Temporalist/TemporalistGrantsTimeStopSkill.png",
          "stats": [
            "Grants Skill: <underline>{Time Freeze}"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "32856"
          ]
        },
        {
          "key": "63002",
          "id": "AscendancySorceress2Small2",
          "name": "Buff Expiry Rate",
          "x": -6298.25,
          "y": -13652.4,
          "icon": "Art/2DArt/SkillIcons/passives/Temporalist/TemporalistNode.png",
          "stats": [
            "[Buff|Buffs] on you expire 10% slower"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "26638"
          ],
          "in": [
            "28153"
          ]
        }
      ]
    },
    "Disciple of Varashta": {
      "class": "Sorceress",
      "id": "Sorceress3",
      "source": "https://poe2db.tw/us/Disciple_of_Varashta",
      "image": "Art/2DArt/BaseClassIllustrations/DiscipleoftheDjinnAscendancy.png",
      "nodes": [
        {
          "key": "2810",
          "id": "AscendancySorceress3Notable3",
          "name": "Varashta's Intuition",
          "x": -2939.54,
          "y": -14819.9,
          "icon": "Art/2DArt/SkillIcons/passives/DiscipleoftheDjinn/ElementalDamageTakenFromMana.png",
          "stats": [
            "100% of [ElementalDamage|Elemental Damage] is taken from Mana before Life"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "9843"
          ],
          "in": []
        },
        {
          "key": "8305",
          "id": "AscendancySorceress3Start",
          "name": "Disciple of Varashta",
          "x": -2650.28,
          "y": -15491.9,
          "icon": "Art/2DArt/SkillIcons/passives/damage.png",
          "stats": [],
          "start": true,
          "notable": false,
          "keystone": false,
          "out": [
            "9843",
            "56783",
            "13289",
            "32705",
            "34207",
            "30265",
            "35880"
          ],
          "in": [
            "54447"
          ]
        },
        {
          "key": "9843",
          "id": "AscendancySorceress3Small5",
          "name": "Mana",
          "x": -2894.28,
          "y": -15075.6,
          "icon": "Art/2DArt/SkillIcons/passives/DiscipleoftheDjinn/DjinnNode.png",
          "stats": [
            "3% increased maximum Mana"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [],
          "in": [
            "2810",
            "8305"
          ]
        },
        {
          "key": "10561",
          "id": "AscendancySorceress3Notable10_",
          "name": "Navira's Fracturing",
          "x": -2891.77,
          "y": -14588.2,
          "icon": "Art/2DArt/SkillIcons/passives/DiscipleoftheDjinn/WaterDjinnChiilldedGroundBurst.png",
          "stats": [
            "Grants Skill: <underline>{Navira's Fracturing}"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "32705"
          ],
          "in": []
        },
        {
          "key": "13289",
          "id": "AscendancySorceress3Notable8",
          "name": "Barya of Kelari",
          "x": -1610.95,
          "y": -14931.4,
          "icon": "Art/2DArt/SkillIcons/passives/DiscipleoftheDjinn/SummonSandDjinn.png",
          "stats": [
            "Grants Skill: <underline>{Kelari, the Tainted Sands}"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "23265",
            "25653",
            "36109",
            "8305"
          ]
        },
        {
          "key": "14131",
          "id": "AscendancySorceress3Notable18",
          "name": "Ruzhan's Fury",
          "x": -3722.19,
          "y": -14559.2,
          "icon": "Art/2DArt/SkillIcons/passives/DiscipleoftheDjinn/FireDjinnEmberSlash.png",
          "stats": [
            "Grants Skill: <underline>{Ruzhan's Fury}"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "34207"
          ],
          "in": []
        },
        {
          "key": "20701",
          "id": "AscendancySorceress3Notable5_",
          "name": "Instruments of Power",
          "x": -2361.03,
          "y": -14819.9,
          "icon": "Art/2DArt/SkillIcons/passives/DiscipleoftheDjinn/FocusStaff.png",
          "stats": [
            "You can equip a [Focus] while wielding a [Staff]",
            "50% reduced bonuses gained from Equipped [Focus]"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "35880"
          ],
          "in": []
        },
        {
          "key": "23265",
          "id": "AscendancySorceress3Notable13",
          "name": "Kelari's Deception",
          "x": -1335.31,
          "y": -14537.9,
          "icon": "Art/2DArt/SkillIcons/passives/DiscipleoftheDjinn/SandDjinnExplosiveTeleport.png",
          "stats": [
            "Grants Skill: <underline>{Kelari's Deception}"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "13289"
          ],
          "in": []
        },
        {
          "key": "25653",
          "id": "AscendancySorceress3Notable14",
          "name": "Kelari's Judgment",
          "x": -1578.38,
          "y": -14559.2,
          "icon": "Art/2DArt/SkillIcons/passives/DiscipleoftheDjinn/SandDjinnDaggerslamSkill.png",
          "stats": [
            "Grants Skill: <underline>{Kelari's Judgment}"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "13289"
          ],
          "in": []
        },
        {
          "key": "25683",
          "id": "AscendancySorceress3Notable17",
          "name": "Ruzhan's Reckoning",
          "x": -3486.09,
          "y": -14579.8,
          "icon": "Art/2DArt/SkillIcons/passives/DiscipleoftheDjinn/FireDjinnMeteoricSlam.png",
          "stats": [
            "Grants Skill: <underline>{Ruzhan's Reckoning}"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "34207"
          ],
          "in": []
        },
        {
          "key": "30265",
          "id": "AscendancySorceress3Small1",
          "name": "Energy Shield",
          "x": -3087.41,
          "y": -15208.1,
          "icon": "Art/2DArt/SkillIcons/passives/DiscipleoftheDjinn/DjinnNode.png",
          "stats": [
            "20% increased maximum [EnergyShield|Energy Shield]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [],
          "in": [
            "46091",
            "8305"
          ]
        },
        {
          "key": "32705",
          "id": "AscendancySorceress3Notable7",
          "name": "Barya of Navira",
          "x": -2650.28,
          "y": -14986.9,
          "icon": "Art/2DArt/SkillIcons/passives/DiscipleoftheDjinn/SummonWaterDjinn.png",
          "stats": [
            "Grants Skill: <underline>{Navira, the Last Mirage}"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "10561",
            "43426",
            "45602",
            "8305"
          ]
        },
        {
          "key": "34207",
          "id": "AscendancySorceress3Notable9",
          "name": "Barya of Ruzhan",
          "x": -3689.62,
          "y": -14931.4,
          "icon": "Art/2DArt/SkillIcons/passives/DiscipleoftheDjinn/SummonFireDjinn.png",
          "stats": [
            "Grants Skill: <underline>{Ruzhan, the Blazing Sword}"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "64591",
            "25683",
            "14131",
            "8305"
          ]
        },
        {
          "key": "35880",
          "id": "AscendancySorceress3Small4",
          "name": "Cast Speed",
          "x": -2406.28,
          "y": -15075.6,
          "icon": "Art/2DArt/SkillIcons/passives/DiscipleoftheDjinn/DjinnNode.png",
          "stats": [
            "4% increased Cast Speed"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [],
          "in": [
            "20701",
            "8305"
          ]
        },
        {
          "key": "36109",
          "id": "AscendancySorceress3Notable15",
          "name": "Kelari's Malediction",
          "x": -1814.48,
          "y": -14579.8,
          "icon": "Art/2DArt/SkillIcons/passives/DiscipleoftheDjinn/SandDjinnCorpseBeetles.png",
          "stats": [
            "Grants Skill: <underline>{Kelari's Malediction}"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "13289"
          ],
          "in": []
        },
        {
          "key": "36891",
          "id": "AscendancySorceress3Notable6",
          "name": "Baryanic Leylines",
          "x": -2110.99,
          "y": -14010.2,
          "icon": "Art/2DArt/SkillIcons/passives/DiscipleoftheDjinn/TimelostJewelsLargerRadius.png",
          "stats": [
            "Non-[Rarity|Unique] Time-Lost [Jewel|Jewels] have 40% increased radius"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "56783"
          ],
          "in": []
        },
        {
          "key": "43426",
          "id": "AscendancySorceress3Notable11",
          "name": "Navira's Well",
          "x": -2650.28,
          "y": -14488.9,
          "icon": "Art/2DArt/SkillIcons/passives/DiscipleoftheDjinn/WaterDjinnESRechargeCommand.png",
          "stats": [
            "Grants Skill: <underline>{Navira's Well}"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "32705"
          ],
          "in": []
        },
        {
          "key": "45602",
          "id": "AscendancySorceress3Notable12_",
          "name": "Navira's Oasis",
          "x": -2408.8,
          "y": -14588.2,
          "icon": "Art/2DArt/SkillIcons/passives/DiscipleoftheDjinn/WaterDjinnCommandOasis.png",
          "stats": [
            "Grants Skill: <underline>{Navira's Oasis}"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "32705"
          ],
          "in": []
        },
        {
          "key": "46091",
          "id": "AscendancySorceress3Notable2",
          "name": "The Fourth Teaching",
          "x": -3297.3,
          "y": -14767,
          "icon": "Art/2DArt/SkillIcons/passives/DiscipleoftheDjinn/MoreEnergyShieldRechargeRate.png",
          "stats": [
            "-1 second to base [ESRecharge|Energy Shield Recharge] delay",
            "40% more [ESRecharge|Energy Shield Recharge Rate] while on [LowEnergyShield|Low Energy Shield]"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "30265",
            "64223"
          ],
          "in": []
        },
        {
          "key": "56783",
          "id": "AscendancySorceress3Small6_",
          "name": "Area of Effect",
          "x": -2213.09,
          "y": -15208.1,
          "icon": "Art/2DArt/SkillIcons/passives/DiscipleoftheDjinn/DjinnNode.png",
          "stats": [
            "8% increased Area of Effect"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [],
          "in": [
            "36891",
            "8305"
          ]
        },
        {
          "key": "56857",
          "id": "AscendancySorceress3Notable1",
          "name": "Sacred Rituals",
          "x": -3189.58,
          "y": -14010.2,
          "icon": "Art/2DArt/SkillIcons/passives/DiscipleoftheDjinn/EnergyShieldPhyDmgReduction.png",
          "stats": [
            "60% of your current [EnergyShield|Energy Shield] is added to your [Armour] for\ndetermining your Physical Damage Reduction from [Armour]"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "64223"
          ]
        },
        {
          "key": "64223",
          "id": "AscendancySorceress3Small2",
          "name": "Energy Shield",
          "x": -3309.23,
          "y": -14351.1,
          "icon": "Art/2DArt/SkillIcons/passives/DiscipleoftheDjinn/DjinnNode.png",
          "stats": [
            "20% increased maximum [EnergyShield|Energy Shield]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "56857"
          ],
          "in": [
            "46091"
          ]
        },
        {
          "key": "64591",
          "id": "AscendancySorceress3Notable16",
          "name": "Ruzhan's Trap",
          "x": -3965.26,
          "y": -14537.9,
          "icon": "Art/2DArt/SkillIcons/passives/DiscipleoftheDjinn/FireDjinnFlameRunes.png",
          "stats": [
            "Grants Skill: <underline>{Ruzhan's Trap}"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "34207"
          ],
          "in": []
        }
      ]
    },
    "Amazon": {
      "class": "Huntress",
      "id": "Huntress1",
      "source": "https://poe2db.tw/us/Amazon",
      "image": "Art/2DArt/BaseClassIllustrations/AmazonAscendancy.png",
      "nodes": [
        {
          "key": "528",
          "id": "AscendancyHuntress1Small2",
          "name": "Accuracy",
          "x": 17869.6,
          "y": 5440.52,
          "icon": "Art/2DArt/SkillIcons/passives/Amazon/AmazonNode.png",
          "stats": [
            "12% increased [Accuracy] Rating"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "41008"
          ],
          "in": [
            "9294"
          ]
        },
        {
          "key": "2702",
          "id": "AscendancyHuntress1Small9",
          "name": "Life Leech",
          "x": 19245.4,
          "y": 5152.57,
          "icon": "Art/2DArt/SkillIcons/passives/Amazon/AmazonNode.png",
          "stats": [
            "12% increased amount of Life [LifeLeech|Leeched]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "3065"
          ],
          "in": [
            "41736"
          ]
        },
        {
          "key": "3065",
          "id": "AscendancyHuntress1Notable9",
          "name": "Mystic Harvest",
          "x": 19423,
          "y": 4802.1,
          "icon": "Art/2DArt/SkillIcons/passives/Amazon/AmazonIncreasedLifeRecoveryRatePerMissingLife.png",
          "stats": [
            "[LifeLeech|Life Leech] recovers based on your [ElementalDamage|Elemental] damage as well as [Physical] damage"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "2702"
          ]
        },
        {
          "key": "5563",
          "id": "AscendancyHuntress1Small7",
          "name": "Flask Recovery",
          "x": 19778.6,
          "y": 5152.57,
          "icon": "Art/2DArt/SkillIcons/passives/Amazon/AmazonNode.png",
          "stats": [
            "15% increased Life and Mana Recovery from [Flask|Flasks]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "47312"
          ],
          "in": [
            "41736"
          ]
        },
        {
          "key": "6109",
          "id": "AscendancyHuntress1Small8",
          "name": "Evasion",
          "x": 19517,
          "y": 5382.8,
          "icon": "Art/2DArt/SkillIcons/passives/Amazon/AmazonNode.png",
          "stats": [
            "20% increased [Evasion|Evasion Rating]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "63254"
          ],
          "in": [
            "41736"
          ]
        },
        {
          "key": "7979",
          "id": "AscendancyHuntress1Notable6",
          "name": "Elemental Surge",
          "x": 18536.8,
          "y": 5093.42,
          "icon": "Art/2DArt/SkillIcons/passives/Amazon/AmazonConsumeFrenzyChargeGainElementalInstillation.png",
          "stats": [
            "When you Consume a [Charges|Charge], [Trigger] Elemental Surge to gain 3 [Surge|Lightning Surges]",
            "Grants Skill: <underline>{Elemental Surge}"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "19233"
          ],
          "in": [
            "60662"
          ]
        },
        {
          "key": "9294",
          "id": "AscendancyHuntress1Notable1",
          "name": "Critical Strike",
          "x": 18386,
          "y": 5659.28,
          "icon": "Art/2DArt/SkillIcons/passives/Amazon/AmazonExcessChancetoHitConvertedtoCritHitChance.png",
          "stats": [
            "Chance to [Hit] with [Attack|Attacks] can [ExceedChance|exceed 100%]\nGain additional [Critical|Critical Hit] Chance equal to 25% of excess chance to [Hit] with [Attack|Attacks]"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "528"
          ],
          "in": [
            "46071"
          ]
        },
        {
          "key": "19233",
          "id": "AscendancyHuntress1Small6",
          "name": "Elemental Damage",
          "x": 17979.2,
          "y": 5031.73,
          "icon": "Art/2DArt/SkillIcons/passives/Amazon/AmazonNode.png",
          "stats": [
            "12% increased [ElementalDamage|Elemental Damage]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "42441"
          ],
          "in": [
            "7979"
          ]
        },
        {
          "key": "35033",
          "id": "AscendancyHuntress1Small3",
          "name": "Skill Speed",
          "x": 18769.2,
          "y": 5458.94,
          "icon": "Art/2DArt/SkillIcons/passives/Amazon/AmazonNode.png",
          "stats": [
            "4% increased [SkillSpeed|Skill Speed]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "55796"
          ],
          "in": [
            "41736"
          ]
        },
        {
          "key": "35187",
          "id": "AscendancyHuntress1Notable4",
          "name": "In for the Kill",
          "x": 17068.2,
          "y": 5003.15,
          "icon": "Art/2DArt/SkillIcons/passives/Amazon/AmazonSpeedBloodlustedEnemy.png",
          "stats": [
            "20% increased Movement Speed while an enemy with an [RevealWeakness|Open Weakness] is in your [Presence]",
            "40% increased [SkillSpeed|Skill Speed] while an enemy with an [RevealWeakness|Open Weakness] is in your [Presence]"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "43095"
          ]
        },
        {
          "key": "41008",
          "id": "AscendancyHuntress1Notable2",
          "name": "Penetrate",
          "x": 17403,
          "y": 5239.3,
          "icon": "Art/2DArt/SkillIcons/passives/Amazon/AmazonGainPhysicalDamageWeaponsAccuracy.png",
          "stats": [
            "[Attack|Attacks] using your Weapons have Added [Physical] Damage equal\nto 25% of the [Accuracy] Rating on the Weapon"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "528"
          ]
        },
        {
          "key": "41736",
          "id": "AscendancyHuntress1Start",
          "name": "Amazon",
          "x": 19517,
          "y": 5659.29,
          "icon": "Art/2DArt/SkillIcons/passives/damage.png",
          "stats": [],
          "start": true,
          "notable": false,
          "keystone": false,
          "out": [
            "46071",
            "35033",
            "5563",
            "60662",
            "2702",
            "6109"
          ],
          "in": [
            "50459"
          ]
        },
        {
          "key": "42441",
          "id": "AscendancyHuntress1Notable5",
          "name": "Surging Avatar",
          "x": 17473,
          "y": 4968.58,
          "icon": "Art/2DArt/SkillIcons/passives/Amazon/AmazonElementalDamageReductionperElementalInstillation.png",
          "stats": [
            "When you Consume a [Charges|Charge], [Trigger] Elemental Surge to gain 2 [Surge|Fire Surges]",
            "When you Consume a [Charges|Charge], [Trigger] Elemental Surge to gain 2 [Surge|Cold Surges]",
            "Gain 1 fewer [Surge|Lightning Surge] from [Trigger|Triggering] Elemental Surge"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "19233"
          ]
        },
        {
          "key": "43095",
          "id": "AscendancyHuntress1Small4_",
          "name": "Skill Speed",
          "x": 17635.2,
          "y": 5155.06,
          "icon": "Art/2DArt/SkillIcons/passives/Amazon/AmazonNode.png",
          "stats": [
            "4% increased [SkillSpeed|Skill Speed]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "35187"
          ],
          "in": [
            "55796"
          ]
        },
        {
          "key": "46071",
          "id": "AscendancyHuntress1Small1",
          "name": "Accuracy",
          "x": 18743,
          "y": 5659.28,
          "icon": "Art/2DArt/SkillIcons/passives/Amazon/AmazonNode.png",
          "stats": [
            "12% increased [Accuracy] Rating"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "9294"
          ],
          "in": [
            "41736"
          ]
        },
        {
          "key": "47312",
          "id": "AscendancyHuntress1Notable7",
          "name": "Azmeri Brew",
          "x": 19610.8,
          "y": 4802.21,
          "icon": "Art/2DArt/SkillIcons/passives/Amazon/AmazonLifeFlasksRecoverManaViceVersa.png",
          "stats": [
            "Life [Flask|Flasks] also recover Mana\nMana [Flask|Flasks] also recover Life"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "5563"
          ]
        },
        {
          "key": "55796",
          "id": "AscendancyHuntress1Notable3",
          "name": "Predatory Instinct",
          "x": 18202.2,
          "y": 5307,
          "icon": "Art/2DArt/SkillIcons/passives/Amazon/AmazonRareUniqueBloodlusted.png",
          "stats": [
            "[RevealWeakness|Reveal Weaknesses] against [Rarity|Rare and Unique] enemies",
            "50% more damage against enemies with an [RevealWeakness|Open Weakness]"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "43095"
          ],
          "in": [
            "35033"
          ]
        },
        {
          "key": "60662",
          "id": "AscendancyHuntress1Small5",
          "name": "Elemental Damage",
          "x": 18846.7,
          "y": 5272.28,
          "icon": "Art/2DArt/SkillIcons/passives/Amazon/AmazonNode.png",
          "stats": [
            "12% increased [ElementalDamage|Elemental Damage]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "7979"
          ],
          "in": [
            "41736"
          ]
        },
        {
          "key": "63254",
          "id": "AscendancyHuntress1Notable8",
          "name": "Stalking Panther",
          "x": 19517,
          "y": 5152.57,
          "icon": "Art/2DArt/SkillIcons/passives/Amazon/AmazonDoubleEvasionfromGlovesBootsHelmsHalvedBodyArmour.png",
          "stats": [
            "[Evasion] Rating from Equipped Helmet, Gloves and Boots is doubled",
            "[Evasion] Rating from Equipped Body Armour is halved"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "6109"
          ]
        }
      ]
    },
    "Spirit Walker": {
      "class": "Huntress",
      "id": "Huntress2",
      "source": "https://poe2db.tw/us/Spirit_Walker",
      "image": "Art/2DArt/BaseClassIllustrations/WildspeakerAscendancy.png",
      "nodes": [
        {
          "key": "765",
          "id": "AscendancyHuntress2Notable4",
          "name": "The Catha's Balance",
          "x": 17288.4,
          "y": 7550.65,
          "icon": "Art/2DArt/SkillIcons/passives/Wildspeaker/WildspeakerCompanionDmgWeapon.png",
          "stats": [
            "[Companion|Companions] gain added [Attack] damage equal to 60% of your main hand Weapon's damage"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "21519"
          ]
        },
        {
          "key": "4367",
          "id": "AscendancyHuntress2Notable6",
          "name": "The Mhacha's Gift",
          "x": 17358,
          "y": 7131.15,
          "icon": "Art/2DArt/SkillIcons/passives/Wildspeaker/WildspeakerOwlFeatherHigherCritDmg.png",
          "stats": [
            "Dodging can expend up to 3 Owl Feathers, granting Primal Bounty 100% more\n[Empowered|Empowerment] effect per additional Feather expended",
            "Gain Owl Feathers 50% faster"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "41085"
          ]
        },
        {
          "key": "5733",
          "id": "AscendancyHuntress2Small8",
          "name": "Spirit",
          "x": 19185.8,
          "y": 6521.65,
          "icon": "Art/2DArt/SkillIcons/passives/Wildspeaker/WildspeakerNode.png",
          "stats": [
            "+10 to [Spirit|Spirit]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "56489"
          ],
          "in": [
            "63493"
          ]
        },
        {
          "key": "21519",
          "id": "AscendancyHuntress2Small4",
          "name": "Shared Companion Damage",
          "x": 17660.4,
          "y": 7891.55,
          "icon": "Art/2DArt/SkillIcons/passives/Wildspeaker/WildspeakerNode.png",
          "stats": [
            "[Companion|Companions] deal 10% increased Damage",
            "10% increased Damage while your [Companion] is in your [Presence]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "765"
          ],
          "in": [
            "62743"
          ]
        },
        {
          "key": "26294",
          "id": "AscendancyHuntress2Small1",
          "name": "Movement Speed",
          "x": 18632.3,
          "y": 7355.86,
          "icon": "Art/2DArt/SkillIcons/passives/Wildspeaker/WildspeakerNode.png",
          "stats": [
            "2% increased Movement Speed"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "41401"
          ],
          "in": [
            "63493"
          ]
        },
        {
          "key": "27773",
          "id": "AscendancyHuntress2Notable2",
          "name": "The Mórrigan's Guidance",
          "x": 17725.7,
          "y": 7298.15,
          "icon": "Art/2DArt/SkillIcons/passives/Wildspeaker/WildspeakerVividWisps.png",
          "stats": [
            "Gain a Vivid Wisp when Vivid Stampede ends",
            "Stags deal 20% more damage per leap",
            "Stags have 20% more [Shock] [BuffMagnitude|Magnitude] per leap"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "62702"
          ]
        },
        {
          "key": "28254",
          "id": "AscendancyHuntress2Notable9",
          "name": "Sacred Unity",
          "x": 18337.6,
          "y": 7044.71,
          "icon": "Art/2DArt/SkillIcons/passives/Wildspeaker/WildspeakerSacredWisp.png",
          "stats": [
            "Bear Spirit gains [SpiritWalkerBearAura|Embrace of the Wild]",
            "Vivid Stags leap towards enemies",
            "Central [Projectile] of Owl Feather-[Empowered] Skills leaves a trail of [SoaringGround|Soaring Ground]"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "63493"
          ]
        },
        {
          "key": "37769",
          "id": "AscendancyHuntress2Small3",
          "name": "Shared Companion Damage",
          "x": 18608.2,
          "y": 7724.42,
          "icon": "Art/2DArt/SkillIcons/passives/Wildspeaker/WildspeakerNode.png",
          "stats": [
            "[Companion|Companions] deal 10% increased Damage",
            "10% increased Damage while your [Companion] is in your [Presence]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "62743"
          ],
          "in": [
            "63493"
          ]
        },
        {
          "key": "39887",
          "id": "AscendancyHuntress2Notable7",
          "name": "The Natural Order",
          "x": 18496.2,
          "y": 6443.89,
          "icon": "Art/2DArt/SkillIcons/passives/Wildspeaker/WildspeakerTameBeastTargetUnique.png",
          "stats": [
            "Tame Beast can capture [Rarity|Unique] Beasts\nCan have up to one Unique Tamed Beast summoned",
            "[Rarity|Unique] Tamed Beasts have 30% increased movement speed",
            "[Rarity|Unique] Tamed Beasts are [SpiritPossessed|Possessed] by random [AzmeriSpirit|Azmeri Spirits], changing every 20 seconds"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "45228"
          ]
        },
        {
          "key": "41085",
          "id": "AscendancyHuntress2Small6",
          "name": "Critical Chance",
          "x": 17511.7,
          "y": 7553.47,
          "icon": "Art/2DArt/SkillIcons/passives/Wildspeaker/WildspeakerNode.png",
          "stats": [
            "12% increased [Critical|Critical Hit Chance]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "4367",
            "46070"
          ],
          "in": []
        },
        {
          "key": "41401",
          "id": "AscendancyHuntress2Notable1",
          "name": "Vivid Stampede",
          "x": 18294.9,
          "y": 7530.9,
          "icon": "Art/2DArt/SkillIcons/passives/Wildspeaker/WildspeakerVividStags.png",
          "stats": [
            "Gain a Vivid Wisp for every 10 metres you move, up to a maximum of 3\nExpend all Vivid Wisps to trigger Vivid Stampede when you [Attack]",
            "Grants Skill: <underline>{Vivid Stampede}"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "62702"
          ],
          "in": [
            "26294"
          ]
        },
        {
          "key": "45228",
          "id": "AscendancyHuntress2Small7",
          "name": "Companion Life and Area",
          "x": 19026.1,
          "y": 6763.14,
          "icon": "Art/2DArt/SkillIcons/passives/Wildspeaker/WildspeakerNode.png",
          "stats": [
            "[Companion|Companions] have 10% increased Area of Effect",
            "[Companion|Companions] have 15% increased maximum Life"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "39887"
          ],
          "in": [
            "63493"
          ]
        },
        {
          "key": "46070",
          "id": "AscendancyHuntress2Notable5",
          "name": "Primal Bounty",
          "x": 17900.9,
          "y": 7778.17,
          "icon": "Art/2DArt/SkillIcons/passives/Wildspeaker/WildspeakerOwlFeathers.png",
          "stats": [
            "Gain a Primal Owl Feather every 4 seconds, up to a maximum of 3\nExpend an Owl Feather when you Dodge to trigger Primal Bounty",
            "Grants Skill: <underline>{Primal Bounty}"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "62424"
          ],
          "in": [
            "41085"
          ]
        },
        {
          "key": "56489",
          "id": "AscendancyHuntress2Notable8",
          "name": "Idolatry",
          "x": 18572.8,
          "y": 5934.83,
          "icon": "Art/2DArt/SkillIcons/passives/Wildspeaker/WildspeakerBonusPerSocketedTalisman.png",
          "stats": [
            "[Companion|Companions] deal 10% increased damage per [Idol] in your [Equipment]",
            "2% increased [Reservation] [Efficiency] of Skills per [Idol] in your [Equipment]",
            "-4% to all Elemental [Resistances] per non-[Idol] [Augment] in your [Equipment]"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "5733"
          ]
        },
        {
          "key": "62424",
          "id": "AscendancyHuntress2Small5",
          "name": "Critical Chance",
          "x": 18391.8,
          "y": 7669.34,
          "icon": "Art/2DArt/SkillIcons/passives/Wildspeaker/WildspeakerNode.png",
          "stats": [
            "12% increased [Critical|Critical Hit Chance]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [],
          "in": [
            "46070",
            "63493"
          ]
        },
        {
          "key": "62702",
          "id": "AscendancyHuntress2Small2_",
          "name": "Movement Speed",
          "x": 17930.2,
          "y": 7611.74,
          "icon": "Art/2DArt/SkillIcons/passives/Wildspeaker/WildspeakerNode.png",
          "stats": [
            "2% increased Movement Speed"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "27773"
          ],
          "in": [
            "41401"
          ]
        },
        {
          "key": "62743",
          "id": "AscendancyHuntress2Notable3",
          "name": "Wild Protector",
          "x": 18160.6,
          "y": 7957.41,
          "icon": "Art/2DArt/SkillIcons/passives/Wildspeaker/WildspeakerWildBear.png",
          "stats": [
            "Grants Skill: <underline>{Wild Protector}"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "21519"
          ],
          "in": [
            "37769"
          ]
        },
        {
          "key": "63493",
          "id": "AscendancyHuntress2Start",
          "name": "Spirit Walker",
          "x": 19054.3,
          "y": 7409.64,
          "icon": "Art/2DArt/SkillIcons/passives/damage.png",
          "stats": [],
          "start": true,
          "notable": false,
          "keystone": false,
          "out": [
            "26294",
            "37769",
            "45228",
            "5733",
            "62424",
            "28254"
          ],
          "in": [
            "50459"
          ]
        }
      ]
    },
    "Ritualist": {
      "class": "Huntress",
      "id": "Huntress3",
      "source": "https://poe2db.tw/us/Ritualist",
      "image": "Art/2DArt/BaseClassIllustrations/PrimalistAscendancy.png",
      "nodes": [
        {
          "key": "3223",
          "id": "AscendancyHuntress3Small2",
          "name": "Attributes",
          "x": 19683.7,
          "y": 7892.81,
          "icon": "Art/2DArt/SkillIcons/passives/Primalist/PrimalistNode.png",
          "stats": [
            "3% increased [Attributes]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "7068",
            "34785"
          ],
          "in": []
        },
        {
          "key": "4891",
          "id": "AscendancyHuntress3Notable3_",
          "name": "Intricate Sigils",
          "x": 21267.8,
          "y": 7257.88,
          "icon": "Art/2DArt/SkillIcons/passives/Primalist/PrimalistPlusOneMaxCharm.png",
          "stats": [
            "+1 [Charm] Slot",
            "20% more [Charm] Charges gained"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "37972",
            "60859"
          ]
        },
        {
          "key": "7068",
          "id": "AscendancyHuntress3Notable1_",
          "name": "Mystic Attunement",
          "x": 19301.1,
          "y": 7557.78,
          "icon": "Art/2DArt/SkillIcons/passives/Primalist/PrimalistIncreasedEffectOfJewellery.png",
          "stats": [
            "25% increased bonuses gained from Equipped Rings and Amulets"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "3223"
          ]
        },
        {
          "key": "11776",
          "id": "AscendancyHuntress3Small6",
          "name": "Physical Damage",
          "x": 21814.3,
          "y": 7038.65,
          "icon": "Art/2DArt/SkillIcons/passives/Primalist/PrimalistNode.png",
          "stats": [
            "15% increased [Physical] Damage"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "37046"
          ],
          "in": [
            "36365"
          ]
        },
        {
          "key": "17058",
          "id": "AscendancyHuntress3Small1_3",
          "name": "Reduced Resistances",
          "x": 20967,
          "y": 7709.04,
          "icon": "Art/2DArt/SkillIcons/passives/Primalist/PrimalistNode.png",
          "stats": [
            "-20% to all [ElementalDamage|Elemental] [Resistances]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [],
          "in": [
            "34785",
            "36365"
          ]
        },
        {
          "key": "18280",
          "id": "AscendancyHuntress3Notable4",
          "name": "Mind Phylacteries",
          "x": 20731.9,
          "y": 7069.32,
          "icon": "Art/2DArt/SkillIcons/passives/Primalist/PrimalistDrainManaActivateCharms.png",
          "stats": [
            "Can instead consume 25% of maximum Mana to trigger [Charm|Charms] with insufficient charges"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "37972"
          ]
        },
        {
          "key": "22661",
          "id": "AscendancyHuntress3Small8",
          "name": "Movement Speed",
          "x": 21668.5,
          "y": 7437.71,
          "icon": "Art/2DArt/SkillIcons/passives/Primalist/PrimalistNode.png",
          "stats": [
            "3% increased Movement Speed"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "30233"
          ],
          "in": [
            "36365"
          ]
        },
        {
          "key": "30100",
          "id": null,
          "name": "",
          "x": 21304,
          "y": 6898.21,
          "icon": "",
          "stats": [],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "38813"
          ],
          "in": [
            "30233"
          ]
        },
        {
          "key": "30233",
          "id": "AscendancyHuntress3Notable7",
          "name": "As the Whispers Demand",
          "x": 21533.2,
          "y": 7093.73,
          "icon": "Art/2DArt/SkillIcons/passives/Primalist/PrimalistStabCorpse.png",
          "stats": [
            "Grants Skill: <underline>{Ritual Sacrifice}"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "30100"
          ],
          "in": [
            "22661"
          ]
        },
        {
          "key": "34785",
          "id": "AscendancyHuntress3Notable2",
          "name": "Unfurled Finger",
          "x": 20236,
          "y": 7966.04,
          "icon": "Art/2DArt/SkillIcons/passives/Primalist/PrimalistPlusOneRingSlot.png",
          "stats": [
            "+1 Ring Slot"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "58574",
            "42017",
            "17058"
          ],
          "in": [
            "3223"
          ]
        },
        {
          "key": "36365",
          "id": "AscendancyHuntress3Start",
          "name": "Ritualist",
          "x": 21698.9,
          "y": 7966.05,
          "icon": "Art/2DArt/SkillIcons/passives/damage.png",
          "stats": [],
          "start": true,
          "notable": false,
          "keystone": false,
          "out": [
            "60859",
            "58149",
            "22661",
            "17058",
            "42017",
            "58574",
            "11776"
          ],
          "in": [
            "50459"
          ]
        },
        {
          "key": "37046",
          "id": "AscendancyHuntress3Notable6",
          "name": "Corrupted Lifeforce",
          "x": 21360,
          "y": 6508.8,
          "icon": "Art/2DArt/SkillIcons/passives/Primalist/PrimalistBloodBoils.png",
          "stats": [
            "15% more Damage against Enemies affected by Blood Boils",
            "Grants Skill: <underline>{Blood Boil}"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "11776"
          ]
        },
        {
          "key": "37972",
          "id": "AscendancyHuntress3Small3",
          "name": "Charm Charges",
          "x": 21033.7,
          "y": 7111.65,
          "icon": "Art/2DArt/SkillIcons/passives/Primalist/PrimalistNode.png",
          "stats": [
            "15% increased [Charm] Charges gained"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "4891",
            "18280"
          ],
          "in": []
        },
        {
          "key": "38813",
          "id": null,
          "name": "",
          "x": 21042.4,
          "y": 6772.6,
          "icon": "",
          "stats": [],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [],
          "in": [
            "30100"
          ]
        },
        {
          "key": "42017",
          "id": "AscendancyHuntress3Small1_2_",
          "name": "Reduced Spirit",
          "x": 20967,
          "y": 7966.04,
          "icon": "Art/2DArt/SkillIcons/passives/Primalist/PrimalistNode.png",
          "stats": [
            "25% reduced [Spirit]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [],
          "in": [
            "34785",
            "36365"
          ]
        },
        {
          "key": "58149",
          "id": "AscendancyHuntress3Small5",
          "name": "Life Recovery Rate",
          "x": 21311.1,
          "y": 7621.8,
          "icon": "Art/2DArt/SkillIcons/passives/Primalist/PrimalistNode.png",
          "stats": [
            "10% increased Life Recovery rate"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "62804"
          ],
          "in": [
            "36365"
          ]
        },
        {
          "key": "58574",
          "id": "AscendancyHuntress3Small1_1",
          "name": "Reduced Mana",
          "x": 20967,
          "y": 8223.04,
          "icon": "Art/2DArt/SkillIcons/passives/Primalist/PrimalistNode.png",
          "stats": [
            "30% reduced maximum Mana"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [],
          "in": [
            "34785",
            "36365"
          ]
        },
        {
          "key": "60859",
          "id": "AscendancyHuntress3Small4",
          "name": "Charm Charges",
          "x": 21491.7,
          "y": 7497.75,
          "icon": "Art/2DArt/SkillIcons/passives/Primalist/PrimalistNode.png",
          "stats": [
            "15% increased [Charm] Charges gained"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "4891"
          ],
          "in": [
            "36365"
          ]
        },
        {
          "key": "62804",
          "id": "AscendancyHuntress3Notable5",
          "name": "Wildwood Persistence",
          "x": 20951.5,
          "y": 7487.17,
          "icon": "Art/2DArt/SkillIcons/passives/Primalist/PrimalistLifeLeechFromElementalOrChaos.png",
          "stats": [
            "10% increased Life Recovery rate per 5% missing Unreserved Life"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "58149"
          ]
        }
      ]
    },
    "Tactician": {
      "class": "Mercenary",
      "id": "Mercenary1",
      "source": "https://poe2db.tw/us/Tactician",
      "image": "Art/2DArt/BaseClassIllustrations/TacticianAscendancy.png",
      "nodes": [
        {
          "key": "762",
          "id": "AscendancyMercenary1Small9",
          "name": "Minion Damage",
          "x": -5397.08,
          "y": 17327.3,
          "icon": "Art/2DArt/SkillIcons/passives/Tactician/TacticianNode.png",
          "stats": [
            "[Minion|Minions] deal 20% increased Damage"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "1988"
          ],
          "in": [
            "36252"
          ]
        },
        {
          "key": "1988",
          "id": "AscendancyMercenary1Notable9_",
          "name": "Unleash Hell!",
          "x": -5103.5,
          "y": 17157.8,
          "icon": "Art/2DArt/SkillIcons/passives/Tactician/TacticianDeathFromAboveCommand.png",
          "stats": [
            "Grants Skill: <underline>{Supporting Fire}"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "762"
          ]
        },
        {
          "key": "4086",
          "id": "AscendancyMercenary1Notable10_",
          "name": "Strategic Embankments",
          "x": -4572.81,
          "y": 16876.1,
          "icon": "Art/2DArt/SkillIcons/passives/Tactician/TacticianTotemAura.png",
          "stats": [
            "[Totem|Totems] you place grant [TacticianTotemBuff|Embankment Auras]"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "24696"
          ]
        },
        {
          "key": "4245",
          "id": "AscendancyMercenary1Small4",
          "name": "Pin Buildup",
          "x": -6008.35,
          "y": 16436.6,
          "icon": "Art/2DArt/SkillIcons/passives/Tactician/TacticianNode.png",
          "stats": [
            "20% increased [Pinned|Pin] Buildup"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "54838"
          ],
          "in": [
            "44746"
          ]
        },
        {
          "key": "10371",
          "id": "AscendancyMercenary1Notable3",
          "name": "Whoever Pays Best",
          "x": -6504.61,
          "y": 16313.4,
          "icon": "Art/2DArt/SkillIcons/passives/Tactician/TacticianMultipleBanners.png",
          "stats": [
            "[Banner|Banners] gain 5 [Glory] per second",
            "There is no [Limit] on the number of [Banner|Banners] you can place"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "42845"
          ]
        },
        {
          "key": "12054",
          "id": "AscendancyMercenary1Small8",
          "name": "Totem Damage",
          "x": -5256.8,
          "y": 17570.3,
          "icon": "Art/2DArt/SkillIcons/passives/Tactician/TacticianNode.png",
          "stats": [
            "20% increased [Totem|Totem] Damage"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "37523"
          ],
          "in": [
            "36252"
          ]
        },
        {
          "key": "15044",
          "id": "AscendancyMercenary1Notable1",
          "name": "A Solid Plan",
          "x": -6402.59,
          "y": 17088.3,
          "icon": "Art/2DArt/SkillIcons/passives/Tactician/TacticianLessSpiritCostBuff.png",
          "stats": [
            "[Persistent] [Buff|Buffs] have 50% less [Reservation]"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "32560",
            "42845"
          ],
          "in": [
            "29162"
          ]
        },
        {
          "key": "16249",
          "id": "AscendancyMercenary1Notable2",
          "name": "Watch How I Do It",
          "x": -6825.59,
          "y": 16355.7,
          "icon": "Art/2DArt/SkillIcons/passives/Tactician/TacticianAlliesGainAttack.png",
          "stats": [
            "[Allies] in your [Presence] gain added [Attack] Damage equal\nto 25% of your main hand Weapon's damage"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "32560"
          ]
        },
        {
          "key": "24696",
          "id": "AscendancyMercenary1Small10",
          "name": "Totem Damage",
          "x": -4737.38,
          "y": 17175.8,
          "icon": "Art/2DArt/SkillIcons/passives/Tactician/TacticianNode.png",
          "stats": [
            "20% increased [Totem|Totem] Damage"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "4086"
          ],
          "in": [
            "37523"
          ]
        },
        {
          "key": "29162",
          "id": "AscendancyMercenary1Small1",
          "name": "Spirit",
          "x": -6162.88,
          "y": 17328,
          "icon": "Art/2DArt/SkillIcons/passives/Tactician/TacticianNode.png",
          "stats": [
            "8% increased [Spirit]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "15044"
          ],
          "in": [
            "36252"
          ]
        },
        {
          "key": "30151",
          "id": "AscendancyMercenary1Small6",
          "name": "Armour and Evasion",
          "x": -5552.04,
          "y": 16435.6,
          "icon": "Art/2DArt/SkillIcons/passives/Tactician/TacticianNode.png",
          "stats": [
            "15% increased [Armour] and [Evasion] Rating"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "32637"
          ],
          "in": [
            "44371"
          ]
        },
        {
          "key": "32560",
          "id": "AscendancyMercenary1Small3",
          "name": "Presence Area",
          "x": -6614.09,
          "y": 16722,
          "icon": "Art/2DArt/SkillIcons/passives/Tactician/TacticianNode.png",
          "stats": [
            "20% increased [Presence|Presence] Area of Effect"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "16249"
          ],
          "in": [
            "15044"
          ]
        },
        {
          "key": "32637",
          "id": "AscendancyMercenary1Notable7",
          "name": "Stay Light, Use Cover",
          "x": -5552.04,
          "y": 16012.6,
          "icon": "Art/2DArt/SkillIcons/passives/Tactician/TacticianEvasionArmourHigher.png",
          "stats": [
            "Defend with 200% of [Armour|Armour]",
            "Enemies have an [Accuracy|Accuracy] Penalty against you based on Distance",
            "Maximum Chance to [Evasion|Evade] is 50%",
            "Maximum [Physical|Physical Damage] Reduction is 50%"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "30151"
          ]
        },
        {
          "key": "36252",
          "id": "AscendancyMercenary1Start",
          "name": "Tactician",
          "x": -5780.33,
          "y": 17710.6,
          "icon": "Art/2DArt/SkillIcons/passives/damage.png",
          "stats": [],
          "start": true,
          "notable": false,
          "keystone": false,
          "out": [
            "46522",
            "762",
            "12054",
            "29162",
            "54892"
          ],
          "in": [
            "50986"
          ]
        },
        {
          "key": "37523",
          "id": "AscendancyMercenary1Notable8",
          "name": "Cannons, Ready!",
          "x": -4963.23,
          "y": 17400.8,
          "icon": "Art/2DArt/SkillIcons/passives/Tactician/TacticianTotems.png",
          "stats": [
            "+1 to maximum number of Summoned [Totem|Totems]",
            "Skills used by [Totem|Totems] have 30% more [SkillSpeed|Skill Speed]",
            "[Totem|Totems] only use Skills when you fire an [Attack] [Projectile]"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "24696"
          ],
          "in": [
            "12054"
          ]
        },
        {
          "key": "42845",
          "id": "AscendancyMercenary1Small2",
          "name": "Banner Area",
          "x": -6293.11,
          "y": 16679.7,
          "icon": "Art/2DArt/SkillIcons/passives/Tactician/TacticianNode.png",
          "stats": [
            "[Banner] Skills have 16% increased Area of Effect"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "10371"
          ],
          "in": [
            "15044"
          ]
        },
        {
          "key": "44371",
          "id": "AscendancyMercenary1Notable6",
          "name": "Polish That Gear",
          "x": -5552.04,
          "y": 16858.6,
          "icon": "Art/2DArt/SkillIcons/passives/Tactician/TacticianGainStunThresholdArmour.png",
          "stats": [
            "Gain [Deflect|Deflection Rating] equal to 20% of [Armour]",
            "[Gain] 100% of [Evasion|Evasion Rating] as extra [AilmentThreshold|Ailment Threshold]"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "30151"
          ],
          "in": [
            "54892"
          ]
        },
        {
          "key": "44746",
          "id": "AscendancyMercenary1Notable4_",
          "name": "Suppressing Fire",
          "x": -6008.35,
          "y": 16859.6,
          "icon": "Art/2DArt/SkillIcons/passives/Tactician/TacticianProjectileBuildsPin.png",
          "stats": [
            "40% more [Immobilised|Immobilisation] buildup"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "4245"
          ],
          "in": [
            "46522"
          ]
        },
        {
          "key": "46522",
          "id": "AscendancyMercenary1Small5_",
          "name": "Pin Buildup",
          "x": -5920.61,
          "y": 17187,
          "icon": "Art/2DArt/SkillIcons/passives/Tactician/TacticianNode.png",
          "stats": [
            "20% increased [Pinned|Pin] Buildup"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "44746"
          ],
          "in": [
            "36252"
          ]
        },
        {
          "key": "54838",
          "id": "AscendancyMercenary1Notable5",
          "name": "Right Where We Want Them",
          "x": -6008.35,
          "y": 16013.6,
          "icon": "Art/2DArt/SkillIcons/passives/Tactician/TacticianPinnedEnemiesCannotAct.png",
          "stats": [
            "[Projectile] Damage builds [Pinned|Pin]",
            "[Pinned] enemies cannot perform actions"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "4245"
          ]
        },
        {
          "key": "54892",
          "id": "AscendancyMercenary1Small7_",
          "name": "Armour and Evasion",
          "x": -5640.01,
          "y": 17186.9,
          "icon": "Art/2DArt/SkillIcons/passives/Tactician/TacticianNode.png",
          "stats": [
            "15% increased [Armour] and [Evasion] Rating"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "44371"
          ],
          "in": [
            "36252"
          ]
        }
      ]
    },
    "Witchhunter": {
      "class": "Mercenary",
      "id": "Mercenary2",
      "source": "https://poe2db.tw/us/Witchhunter",
      "image": "Art/2DArt/BaseClassIllustrations/WitchhunterAscendancy.png",
      "nodes": [
        {
          "key": "3704",
          "id": "AscendancyMercenary2Notable3_",
          "name": "Witchbane",
          "x": -7039.8,
          "y": 19507,
          "icon": "Art/2DArt/SkillIcons/passives/Witchhunter/WitchunterDrainMonsterFocus.png",
          "stats": [
            "Enemies have Maximum [Concentration] equal to 30% of their Maximum Life",
            "Break enemy [Concentration] on [Hit] equal to 100% of Damage Dealt",
            "Enemies regain 10% of [Concentration] every second if they haven't lost [Concentration] in the past 5 seconds"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "32559"
          ],
          "in": [
            "25172"
          ]
        },
        {
          "key": "6935",
          "id": "AscendancyMercenary2Notable6",
          "name": "Ceremonial Ablution",
          "x": -6505.98,
          "y": 18924.2,
          "icon": "Art/2DArt/SkillIcons/passives/Witchhunter/WitchunterStrongerSpellAegis.png",
          "stats": [
            "Sorcery Ward's Barrier can also take [Physical] and [Chaos] Damage from [Hit|Hits]"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "34501"
          ]
        },
        {
          "key": "7120",
          "id": "AscendancyMercenary2Start",
          "name": "Witchhunter",
          "x": -7044.15,
          "y": 20144.6,
          "icon": "Art/2DArt/SkillIcons/passives/damage.png",
          "stats": [],
          "start": true,
          "notable": false,
          "keystone": false,
          "out": [
            "43131",
            "20830",
            "61897",
            "51737",
            "25172"
          ],
          "in": [
            "50986"
          ]
        },
        {
          "key": "8272",
          "id": "AscendancyMercenary2Notable8",
          "name": "Weapon Master",
          "x": -8095,
          "y": 19204.3,
          "icon": "Art/2DArt/SkillIcons/passives/Witchhunter/WitchunterSpecPoints.png",
          "stats": [
            "100 Passive Skill Points become [WeaponSetPassiveSkillPoints|Weapon Set Skill Points]"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "51737"
          ]
        },
        {
          "key": "17646",
          "id": "AscendancyMercenary2Notable2",
          "name": "Judge, Jury, and Executioner",
          "x": -7582.33,
          "y": 18924.2,
          "icon": "Art/2DArt/SkillIcons/passives/Witchhunter/WitchunterRemovePercentageFullLifeEnemies.png",
          "stats": [
            "[DecimatingStrike|Decimating Strike]"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "40719"
          ]
        },
        {
          "key": "20830",
          "id": "AscendancyMercenary2Small7",
          "name": "Area of Effect",
          "x": -6266.69,
          "y": 19985,
          "icon": "Art/2DArt/SkillIcons/passives/Witchhunter/WitchunterNode.png",
          "stats": [
            "8% increased Area of Effect"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "37078"
          ],
          "in": [
            "7120"
          ]
        },
        {
          "key": "25172",
          "id": "AscendancyMercenary2Small3",
          "name": "Cooldown Recovery Rate",
          "x": -7044.15,
          "y": 19873.9,
          "icon": "Art/2DArt/SkillIcons/passives/Witchhunter/WitchunterNode.png",
          "stats": [
            "6% increased [CooldownRecovery|Cooldown Recovery Rate]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "3704"
          ],
          "in": [
            "7120"
          ]
        },
        {
          "key": "32559",
          "id": "AscendancyMercenary2Small4",
          "name": "Cooldown Recovery Rate",
          "x": -7039.8,
          "y": 19226.1,
          "icon": "Art/2DArt/SkillIcons/passives/Witchhunter/WitchunterNode.png",
          "stats": [
            "6% increased [CooldownRecovery|Cooldown Recovery Rate]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "46535"
          ],
          "in": [
            "3704"
          ]
        },
        {
          "key": "34501",
          "id": "AscendancyMercenary2Small6",
          "name": "Armour and Evasion",
          "x": -6505.97,
          "y": 19201.4,
          "icon": "Art/2DArt/SkillIcons/passives/Witchhunter/WitchunterNode.png",
          "stats": [
            "15% increased [Armour] and [Evasion] Rating"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "6935"
          ],
          "in": [
            "38601"
          ]
        },
        {
          "key": "37078",
          "id": "AscendancyMercenary2Notable7",
          "name": "Zealous Inquisition",
          "x": -5960.33,
          "y": 19204.3,
          "icon": "Art/2DArt/SkillIcons/passives/Witchhunter/WitchunterMonsterHolyExplosion.png",
          "stats": [
            "10% chance for Enemies you Kill to Explode, dealing 100%\nof their maximum Life as [Physical] Damage\nChance is doubled against Undead and Demons"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "20830"
          ]
        },
        {
          "key": "38601",
          "id": "AscendancyMercenary2Notable5",
          "name": "Obsessive Rituals",
          "x": -6504.86,
          "y": 19467.3,
          "icon": "Art/2DArt/SkillIcons/passives/Witchhunter/WitchunterArmourEvasionConvertedSpellAegis.png",
          "stats": [
            "50% less [Armour] and [Evasion] Rating",
            "Grants Skill: <underline>{Sorcery Ward}"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "34501"
          ],
          "in": [
            "61897"
          ]
        },
        {
          "key": "40719",
          "id": "AscendancyMercenary2Small2",
          "name": "Damage vs Low Life Enemies",
          "x": -7582.34,
          "y": 19201.4,
          "icon": "Art/2DArt/SkillIcons/passives/Witchhunter/WitchunterNode.png",
          "stats": [
            "35% increased Damage with [Hit|Hits] against Enemies that are on [LowLife|Low Life]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "17646"
          ],
          "in": [
            "61973"
          ]
        },
        {
          "key": "43131",
          "id": "AscendancyMercenary2Small1",
          "name": "Damage vs Low Life Enemies",
          "x": -7412.17,
          "y": 19835.7,
          "icon": "Art/2DArt/SkillIcons/passives/Witchhunter/WitchunterNode.png",
          "stats": [
            "35% increased Damage with [Hit|Hits] against Enemies that are on [LowLife|Low Life]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "61973"
          ],
          "in": [
            "7120"
          ]
        },
        {
          "key": "46535",
          "id": "AscendancyMercenary2Notable4",
          "name": "No Mercy",
          "x": -7039.8,
          "y": 18924.2,
          "icon": "Art/2DArt/SkillIcons/passives/Witchhunter/WitchunterDamageMonsterMissingFocus.png",
          "stats": [
            "Deal up to 40% more Damage to Enemies based on their missing [Concentration]"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "32559"
          ]
        },
        {
          "key": "51737",
          "id": "AscendancyMercenary2Small8_",
          "name": "Cooldown Recovery Rate",
          "x": -7792.5,
          "y": 19985,
          "icon": "Art/2DArt/SkillIcons/passives/Witchhunter/WitchunterNode.png",
          "stats": [
            "6% increased [CooldownRecovery|Cooldown Recovery Rate]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "8272"
          ],
          "in": [
            "7120"
          ]
        },
        {
          "key": "61897",
          "id": "AscendancyMercenary2Small5",
          "name": "Armour and Evasion",
          "x": -6676.14,
          "y": 19835.7,
          "icon": "Art/2DArt/SkillIcons/passives/Witchhunter/WitchunterNode.png",
          "stats": [
            "15% increased [Armour] and [Evasion] Rating"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "38601"
          ],
          "in": [
            "7120"
          ]
        },
        {
          "key": "61973",
          "id": "AscendancyMercenary2Notable1",
          "name": "Pitiless Killer",
          "x": -7583.45,
          "y": 19467.3,
          "icon": "Art/2DArt/SkillIcons/passives/Witchhunter/WitchunterCullingStrike.png",
          "stats": [
            "[CullingStrike|Culling Strike]"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "40719"
          ],
          "in": [
            "43131"
          ]
        }
      ]
    },
    "Gemling Legionnaire": {
      "class": "Mercenary",
      "id": "Mercenary3",
      "source": "https://poe2db.tw/us/Gemling_Legionnaire",
      "image": "Art/2DArt/BaseClassIllustrations/GemlingAscendancy.png",
      "nodes": [
        {
          "key": "1442",
          "id": "AscendancyMercenary3Small6",
          "name": "Attributes",
          "x": -3801.3,
          "y": 20053.8,
          "icon": "Art/2DArt/SkillIcons/passives/Gemling/GemlingNode.png",
          "stats": [
            "3% increased [Attributes]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "53108"
          ],
          "in": [
            "55536"
          ]
        },
        {
          "key": "3084",
          "id": "AscendancyMercenary3Small7_",
          "name": "Reduced Attribute Requirements",
          "x": -4037.16,
          "y": 19818,
          "icon": "Art/2DArt/SkillIcons/passives/Gemling/GemlingNode.png",
          "stats": [
            "Equipment and Skill Gems have 4% reduced [Attributes|Attribute] Requirements"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "30996"
          ],
          "in": [
            "55536"
          ]
        },
        {
          "key": "11641",
          "id": "AscendancyMercenary3Notable1_",
          "name": "Essence of Virtue",
          "x": -5109.53,
          "y": 19307.2,
          "icon": "Art/2DArt/SkillIcons/passives/Gemling/GemlingBarrier.png",
          "stats": [
            "Grants Skill: <underline>{Virtuous Barrier}"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "45248",
            "55582"
          ],
          "in": [
            "34882"
          ]
        },
        {
          "key": "14429",
          "id": "AscendancyMercenary3Notable4",
          "name": "Advanced Thaumaturgy",
          "x": -5381.29,
          "y": 18293,
          "icon": "Art/2DArt/SkillIcons/passives/Gemling/GemlingSkillsAdditionalSupport.png",
          "stats": [
            "Gem [Quality] grants Socketed Skills an additional effect"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "45248"
          ]
        },
        {
          "key": "18146",
          "id": "AscendancyMercenary3Small3",
          "name": "Reduced Attribute Requirements",
          "x": -4162.05,
          "y": 19048.9,
          "icon": "Art/2DArt/SkillIcons/passives/Gemling/GemlingNode.png",
          "stats": [
            "Equipment and Skill Gems have 4% reduced [Attributes|Attribute] Requirements"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "57819"
          ],
          "in": [
            "30996"
          ]
        },
        {
          "key": "30996",
          "id": "AscendancyMercenary3Notable3",
          "name": "Gem Studded",
          "x": -3901.02,
          "y": 19309.9,
          "icon": "Art/2DArt/SkillIcons/passives/Gemling/GemlingSameSupportMultipleTimes.png",
          "stats": [
            "For each colour of Socketed Support Gem that is most numerous, gain:\n•Red: [Hit|Hits] against you have no [CriticalDamageBonus|Critical Damage Bonus]\n•Blue: Skills have 30% less cost\n•Green: 40% less Movement Speed Penalty from using Skills while Moving"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "53762",
            "18146"
          ],
          "in": [
            "3084"
          ]
        },
        {
          "key": "32952",
          "id": "AscendancyMercenary3Notable2_1",
          "name": "Bolstering Implants",
          "x": -5710.96,
          "y": 18767.6,
          "icon": "Art/2DArt/SkillIcons/passives/Gemling/GemlingLevelStrSkillGems.png",
          "stats": [
            "+2 to Level of all Skills with a [Strength] requirement"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [],
          "in": [
            "60287"
          ]
        },
        {
          "key": "34882",
          "id": "AscendancyMercenary3Small1",
          "name": "Skill Gem Quality",
          "x": -4973.65,
          "y": 19814.3,
          "icon": "Art/2DArt/SkillIcons/passives/Gemling/GemlingNode.png",
          "stats": [
            "+2% to [Quality] of all Skills"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "11641"
          ],
          "in": [
            "55536"
          ]
        },
        {
          "key": "36728",
          "id": "AscendancyMercenary3Notable8",
          "name": "Thaumaturgical Infusion",
          "x": -3628.74,
          "y": 18293.7,
          "icon": "Art/2DArt/SkillIcons/passives/Gemling/GemlingMaxElementalResistanceSupportColour.png",
          "stats": [
            "+1% to [MaximumResistances|Maximum Cold Resistance] per 3 Blue [SupportGem|Support Gems] Socketed",
            "+1% to [MaximumResistances|Maximum Fire Resistance] per 3 Red [SupportGem|Support Gems] Socketed",
            "+1% to [MaximumResistances|Maximum Lightning Resistance] per 3 Green [SupportGem|Support Gems] Socketed"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "53762"
          ]
        },
        {
          "key": "36822",
          "id": "AscendancyMercenary3Small5",
          "name": "Attributes",
          "x": -3528.5,
          "y": 19035.7,
          "icon": "Art/2DArt/SkillIcons/passives/Gemling/GemlingNode.png",
          "stats": [
            "3% increased [Attributes]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "58591"
          ],
          "in": [
            "53108"
          ]
        },
        {
          "key": "37397",
          "id": "AscendancyMercenary3Notable2_3_",
          "name": "Neurological Implants",
          "x": -5601.84,
          "y": 18578.6,
          "icon": "Art/2DArt/SkillIcons/passives/Gemling/GemlingLevelIntSkillGems.png",
          "stats": [
            "+2 to Level of all Skills with an [Intelligence] requirement"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [],
          "in": [
            "60287"
          ]
        },
        {
          "key": "45248",
          "id": "AscendancyMercenary3Small4",
          "name": "Skill Gem Quality",
          "x": -5245.42,
          "y": 18800.1,
          "icon": "Art/2DArt/SkillIcons/passives/Gemling/GemlingNode.png",
          "stats": [
            "+2% to [Quality] of all Skills"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "14429"
          ],
          "in": [
            "11641"
          ]
        },
        {
          "key": "53108",
          "id": "AscendancyMercenary3Notable6",
          "name": "Adaptive Capability",
          "x": -3664.91,
          "y": 19544.8,
          "icon": "Art/2DArt/SkillIcons/passives/Gemling/GemlingHighestAttributeSatisfiesGemRequirements.png",
          "stats": [
            "[Attributes|Attribute] Requirements of Gems can be satisified by your highest Attribute"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "36822"
          ],
          "in": [
            "1442"
          ]
        },
        {
          "key": "53762",
          "id": "AscendancyMercenary3Small8",
          "name": "Reduced Attribute Requirements",
          "x": -3764.88,
          "y": 18801.8,
          "icon": "Art/2DArt/SkillIcons/passives/Gemling/GemlingNode.png",
          "stats": [
            "Equipment and Skill Gems have 4% reduced [Attributes|Attribute] Requirements"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "36728"
          ],
          "in": [
            "30996"
          ]
        },
        {
          "key": "55536",
          "id": "AscendancyMercenary3Start",
          "name": "Gambler",
          "x": -4507.21,
          "y": 20196.5,
          "icon": "Art/2DArt/SkillIcons/passives/damage.png",
          "stats": [],
          "start": true,
          "notable": false,
          "keystone": false,
          "out": [
            "34882",
            "1442",
            "3084"
          ],
          "in": [
            "50986"
          ]
        },
        {
          "key": "55582",
          "id": "AscendancyMercenary3Small2",
          "name": "Skill Gem Quality",
          "x": -5465.96,
          "y": 19211.7,
          "icon": "Art/2DArt/SkillIcons/passives/Gemling/GemlingNode.png",
          "stats": [
            "+2% to [Quality] of all Skills"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "60287"
          ],
          "in": [
            "11641"
          ]
        },
        {
          "key": "57819",
          "id": "AscendancyMercenary3Notable7",
          "name": "Integrated Efficiency",
          "x": -4025.91,
          "y": 18540.8,
          "icon": "Art/2DArt/SkillIcons/passives/Gemling/GemlingBuffSkillsReserveLessSpirit.png",
          "stats": [
            "Skills deal 20% increased Damage per [ConnectedGem|Connected] Red [SupportGem|Support Gem]",
            "Skills have 6% increased [SkillSpeed|Skill Speed] per [ConnectedGem|Connected] Green [SupportGem|Support Gem]",
            "Skills have 20% increased [Critical|Critical Hit Chance] per [ConnectedGem|Connected] Blue [SupportGem|Support Gem]"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "18146"
          ]
        },
        {
          "key": "58591",
          "id": "AscendancyMercenary3Notable5__",
          "name": "Enhanced Effectiveness",
          "x": -3392.1,
          "y": 18526.7,
          "icon": "Art/2DArt/SkillIcons/passives/Gemling/GemlingInherentBonusesFromAttributesDouble.png",
          "stats": [
            "20% less [Attributes]",
            "Inherent bonuses gained from [Attributes] are doubled"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "36822"
          ]
        },
        {
          "key": "60287",
          "id": "AscendancyMercenary3Notable2",
          "name": "Implanted Gems",
          "x": -5601.84,
          "y": 18704.6,
          "icon": "Art/2DArt/SkillIcons/passives/Gemling/GemlingLevelAllSkillGems.png",
          "stats": [],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "37397",
            "32952",
            "63259"
          ],
          "in": [
            "55582"
          ]
        },
        {
          "key": "63259",
          "id": "AscendancyMercenary3Notable2_2_",
          "name": "Motoric Implants",
          "x": -5492.73,
          "y": 18767.6,
          "icon": "Art/2DArt/SkillIcons/passives/Gemling/GemlingLevelDexSkillGems.png",
          "stats": [
            "+2 to Level of all Skills with a [Dexterity] requirement"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [],
          "in": [
            "60287"
          ]
        }
      ]
    },
    "Martial Artist": {
      "class": "Monk",
      "id": "Monk1",
      "source": "https://poe2db.tw/us/Martial_Artist",
      "image": "Art/2DArt/BaseClassIllustrations/MartialArtistIllustration.png",
      "nodes": [
        {
          "key": "1739",
          "id": "AscendancyMonk1Notable7",
          "name": "Hollow Form Technique",
          "x": 14363.5,
          "y": -7010.47,
          "icon": "Art/2DArt/SkillIcons/passives/MartialArtist/MartialArtistMantraofIllusions.png",
          "stats": [
            "Grants Skill: <underline>{Hollow Form}"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "36643"
          ]
        },
        {
          "key": "11495",
          "id": "AscendancyMonk1Start",
          "name": "Martial Artist",
          "x": 15934.7,
          "y": -6466.77,
          "icon": "Art/2DArt/SkillIcons/passives/damage.png",
          "stats": [],
          "start": true,
          "notable": false,
          "keystone": false,
          "out": [
            "34081",
            "36643",
            "53280",
            "20437",
            "52295",
            "37604"
          ],
          "in": [
            "44683"
          ]
        },
        {
          "key": "17356",
          "id": "AscendancyMonk1Notable4",
          "name": "Hollow Resonance Technique",
          "x": 14113.2,
          "y": -6617.64,
          "icon": "Art/2DArt/SkillIcons/passives/MartialArtist/MartialArtistCarrySoectralBell.png",
          "stats": [
            "Grants Skill: <underline>{Hollow Resonance}"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "57449"
          ]
        },
        {
          "key": "19370",
          "id": "AscendancyMonk1Notable3",
          "name": "Hollow Focus Technique",
          "x": 15067,
          "y": -6904.12,
          "icon": "Art/2DArt/SkillIcons/passives/MartialArtist/MartialArtistSpectralBell.png",
          "stats": [
            "Grants Skill: <underline>{Hollow Focus}"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "34081",
            "57449"
          ]
        },
        {
          "key": "20437",
          "id": "AscendancyMonk1Small7",
          "name": "Attributes",
          "x": 15404.2,
          "y": -6649.37,
          "icon": "Art/2DArt/SkillIcons/passives/MartialArtist/MartialArtistNode.png",
          "stats": [
            "+5 to all [Attributes]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "39552"
          ],
          "in": [
            "11495"
          ]
        },
        {
          "key": "34081",
          "id": "AscendancyMonk1Small4",
          "name": "Area of Effect",
          "x": 15501.1,
          "y": -6787.81,
          "icon": "Art/2DArt/SkillIcons/passives/MartialArtist/MartialArtistNode.png",
          "stats": [
            "8% increased Area of Effect"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "19370"
          ],
          "in": [
            "11495"
          ]
        },
        {
          "key": "36643",
          "id": "AscendancyMonk1Small6",
          "name": "Additional Power Charge Chance",
          "x": 15197.4,
          "y": -7085.43,
          "icon": "Art/2DArt/SkillIcons/passives/MartialArtist/MartialArtistNode.png",
          "stats": [
            "10% chance when you gain a [Charges|Power Charge] to gain an additional [Charges|Power Charge]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "1739"
          ],
          "in": [
            "11495"
          ]
        },
        {
          "key": "37604",
          "id": "AscendancyMonk1Small8",
          "name": "Immobilisation Buildup",
          "x": 15934.7,
          "y": -6032.48,
          "icon": "Art/2DArt/SkillIcons/passives/MartialArtist/MartialArtistNode.png",
          "stats": [
            "20% increased [Immobilised|Immobilisation] buildup"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "51546"
          ],
          "in": [
            "11495"
          ]
        },
        {
          "key": "39552",
          "id": "AscendancyMonk1Notable5",
          "name": "Runic Meridians",
          "x": 14999.3,
          "y": -6466.13,
          "icon": "Art/2DArt/SkillIcons/passives/MartialArtist/MartialArtistExtraRunes.png",
          "stats": [
            "Can tattoo [Rune|Runes] onto your body, gaining\nadditional [Rune]-only sockets:\n• 1 Helmet socket\n• 2 Body Armour sockets\n• 1 Gloves socket\n• 1 Boots socket"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "20437"
          ]
        },
        {
          "key": "39595",
          "id": "AscendancyMonk1Notable8",
          "name": "Way of the Stonefist",
          "x": 15446.9,
          "y": -6163.18,
          "icon": "Art/2DArt/SkillIcons/passives/MartialArtist/MartialArtistHandWraps.png",
          "stats": [
            "Gloves you equip have their [BaseType|Base Type] transformed to [HandWraps|Fists of Stone] while equipped, and\ntheir Explicit Modifiers are transformed into more powerful related Modifiers",
            "Ignore [Attributes|Attribute] Requirements to equip Gloves"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "52295"
          ]
        },
        {
          "key": "41751",
          "id": "AscendancyMonk1Notable1_",
          "name": "Martial Adept",
          "x": 15124.3,
          "y": -6167.62,
          "icon": "Art/2DArt/SkillIcons/passives/MartialArtist/MartialArtistAdditionalComboHit.png",
          "stats": [
            "When you gain [Combo], gain an additional [Combo]",
            "-0.2 seconds to current [ESRecharge|Energy Shield Recharge] delay per [Combo] expended when using Skills"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "65228"
          ],
          "in": [
            "53280"
          ]
        },
        {
          "key": "51546",
          "id": "AscendancyMonk1Notable6",
          "name": "Way of the Mountain",
          "x": 15927.9,
          "y": -5202.4,
          "icon": "Art/2DArt/SkillIcons/passives/MartialArtist/MartialArtistCoveredinStone.png",
          "stats": [
            "100% [SurpassChance|Surpassing] chance per enemy [Power] to gain [MountainsTeachings|Mountain's Teachings] on [Immobilised|Immobilising] an enemy, up to a maximum of 30\nLose a [MountainsTeachings|Mountain's Teaching] when you are [Hit], or when you use or [Sustained|Sustain] an [Attack] that benefits from [MountainsTeachings|Mountain's Teachings]"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "37604"
          ]
        },
        {
          "key": "52295",
          "id": "AscendancyMonk1Small3",
          "name": "Evasion and Energy Shield",
          "x": 15595.7,
          "y": -6375.93,
          "icon": "Art/2DArt/SkillIcons/passives/MartialArtist/MartialArtistNode.png",
          "stats": [
            "15% increased [Evasion|Evasion Rating]",
            "15% increased maximum [EnergyShield|Energy Shield]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "39595"
          ],
          "in": [
            "11495"
          ]
        },
        {
          "key": "53280",
          "id": "AscendancyMonk1Small1",
          "name": "Attack Speed",
          "x": 15360.5,
          "y": -6485.8,
          "icon": "Art/2DArt/SkillIcons/passives/MartialArtist/MartialArtistNode.png",
          "stats": [
            "4% increased [Attack] Speed"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "41751"
          ],
          "in": [
            "11495"
          ]
        },
        {
          "key": "57449",
          "id": "AscendancyMonk1Small5",
          "name": "Area of Effect",
          "x": 14531,
          "y": -6842.89,
          "icon": "Art/2DArt/SkillIcons/passives/MartialArtist/MartialArtistNode.png",
          "stats": [
            "8% increased Area of Effect"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "17356",
            "19370"
          ],
          "in": []
        },
        {
          "key": "61586",
          "id": "AscendancyMonk1Notable2",
          "name": "Martial Master",
          "x": 15778.8,
          "y": -6192.36,
          "icon": "Art/2DArt/SkillIcons/passives/MartialArtist/MartialArtistAllAttacksGenerateCombo.png",
          "stats": [
            "Skills can build and retain [Combo] regardless of [WeaponSets|Weapon Set]",
            "Gain [Combo] from all [Attack] [Hit|Hits]"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "65228"
          ]
        },
        {
          "key": "65228",
          "id": "AscendancyMonk1Small2",
          "name": "Attack Speed",
          "x": 15438,
          "y": -5875.8,
          "icon": "Art/2DArt/SkillIcons/passives/MartialArtist/MartialArtistNode.png",
          "stats": [
            "4% increased [Attack] Speed"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "61586"
          ],
          "in": [
            "41751"
          ]
        }
      ]
    },
    "Invoker": {
      "class": "Monk",
      "id": "Monk2",
      "source": "https://poe2db.tw/us/Invoker",
      "image": "Art/2DArt/BaseClassIllustrations/InvokerAscendancy.png",
      "nodes": [
        {
          "key": "7621",
          "id": "AscendancyMonk2Notable3",
          "name": "I am the Thunder...",
          "x": 15364.1,
          "y": -3428.72,
          "icon": "Art/2DArt/SkillIcons/passives/Invoker/InvokerShockMagnitude.png",
          "stats": [
            "[Gain] 10% of Damage as Extra [Lightning] Damage",
            "25% chance on [Shock|Shocking] Enemies to created [ShockedGround|Shocked Ground]"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "55611"
          ],
          "in": [
            "17268"
          ]
        },
        {
          "key": "8143",
          "id": "AscendancyMonk2Notable1_",
          "name": "Lead me through Grace...",
          "x": 15015.2,
          "y": -4547.39,
          "icon": "Art/2DArt/SkillIcons/passives/Invoker/InvokerEvasionEnergyShieldGrantsSpirit.png",
          "stats": [
            "+1 to [Spirit] for every 8 [ItemEnergyShield|Item Energy Shield] on Equipped Body Armour",
            "+1 to [Spirit] for every 20 [Evasion|Evasion Rating] on Equipped Body Armour",
            "Cannot gain [Spirit] from [Equipment]"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "16100"
          ],
          "in": [
            "23415"
          ]
        },
        {
          "key": "9994",
          "id": "AscendancyMonk2Start",
          "name": "Master of the Elements",
          "x": 15872.7,
          "y": -3918.67,
          "icon": "Art/2DArt/SkillIcons/passives/damage.png",
          "stats": [],
          "start": true,
          "notable": false,
          "keystone": false,
          "out": [
            "23415",
            "44357",
            "13065",
            "27686",
            "25434",
            "17268"
          ],
          "in": [
            "44683"
          ]
        },
        {
          "key": "12876",
          "id": "AscendancyMonk2Notable8",
          "name": "Faith is a Choice",
          "x": 15210.7,
          "y": -3945.94,
          "icon": "Art/2DArt/SkillIcons/passives/Invoker/InvokerGrantsMeditate.png",
          "stats": [
            "Grants Skill: <underline>{Meditate}"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "27686"
          ]
        },
        {
          "key": "13065",
          "id": "AscendancyMonk2Small10_",
          "name": "Triggered Spell Damage",
          "x": 15740.6,
          "y": -3626.69,
          "icon": "Art/2DArt/SkillIcons/passives/Invoker/InvokerNode.png",
          "stats": [
            "[Trigger|Triggered] [Spell|Spells] deal 16% increased [Spell] Damage"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "63236"
          ],
          "in": [
            "9994"
          ]
        },
        {
          "key": "16100",
          "id": "AscendancyMonk2Small2",
          "name": "Evasion",
          "x": 14729.5,
          "y": -4334.67,
          "icon": "Art/2DArt/SkillIcons/passives/Invoker/InvokerNode.png",
          "stats": [
            "20% increased [Evasion|Evasion Rating]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "65173"
          ],
          "in": [
            "8143"
          ]
        },
        {
          "key": "17268",
          "id": "AscendancyMonk2Small3",
          "name": "Shock Effect",
          "x": 15489.9,
          "y": -3613.25,
          "icon": "Art/2DArt/SkillIcons/passives/Invoker/InvokerNode.png",
          "stats": [
            "15% increased [BuffMagnitude|Magnitude] of [Shock|Shock] you inflict"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "7621"
          ],
          "in": [
            "9994"
          ]
        },
        {
          "key": "23415",
          "id": "AscendancyMonk2Small1",
          "name": "Evasion and Energy Shield",
          "x": 15486.6,
          "y": -4339.96,
          "icon": "Art/2DArt/SkillIcons/passives/Invoker/InvokerNode.png",
          "stats": [
            "15% increased [Evasion|Evasion Rating]",
            "15% increased maximum [EnergyShield|Energy Shield]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "8143"
          ],
          "in": [
            "9994"
          ]
        },
        {
          "key": "23587",
          "id": "AscendancyMonk2Notable4",
          "name": "I am the Blizzard...",
          "x": 15194.1,
          "y": -3723.24,
          "icon": "Art/2DArt/SkillIcons/passives/Invoker/InvokerChillChanceBasedOnDamage.png",
          "stats": [
            "[Gain] 10% of Damage as Extra [Cold] Damage",
            "On [Freeze|Freezing] Enemies create [ChilledGround|Chilled Ground]"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "25434",
            "29133"
          ],
          "in": []
        },
        {
          "key": "25434",
          "id": "AscendancyMonk2Small4",
          "name": "Chill Effect",
          "x": 15416.8,
          "y": -3739.91,
          "icon": "Art/2DArt/SkillIcons/passives/Invoker/InvokerNode.png",
          "stats": [
            "15% increased [BuffMagnitude|Magnitude] of [Chill] you inflict"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [],
          "in": [
            "23587",
            "9994"
          ]
        },
        {
          "key": "27686",
          "id": "AscendancyMonk2Small9",
          "name": "Energy Shield Recharge Rate",
          "x": 15553.8,
          "y": -3950.31,
          "icon": "Art/2DArt/SkillIcons/passives/Invoker/InvokerNode.png",
          "stats": [
            "20% increased [ESRechargeRate|Energy Shield Recharge Rate]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "12876"
          ],
          "in": [
            "9994"
          ]
        },
        {
          "key": "29133",
          "id": "AscendancyMonk2Small6",
          "name": "Elemental Damage",
          "x": 15074.6,
          "y": -3603.74,
          "icon": "Art/2DArt/SkillIcons/passives/Invoker/InvokerNode.png",
          "stats": [
            "12% increased [ElementalDamage|Elemental Damage]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "64031"
          ],
          "in": [
            "23587"
          ]
        },
        {
          "key": "44357",
          "id": "AscendancyMonk2Small8",
          "name": "Critical Chance",
          "x": 16044.5,
          "y": -3373.72,
          "icon": "Art/2DArt/SkillIcons/passives/Invoker/InvokerNode.png",
          "stats": [
            "12% increased [Critical|Critical Hit Chance]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "63713"
          ],
          "in": [
            "9994"
          ]
        },
        {
          "key": "52448",
          "id": "AscendancyMonk2Notable7_",
          "name": "...and Scatter Them to the Winds",
          "x": 15702.7,
          "y": -2366.9,
          "icon": "Art/2DArt/SkillIcons/passives/Invoker/InvokerWildStrike.png",
          "stats": [
            "Trigger Elemental Expression on [Melee] [Critical|Critical Hit]",
            "Grants Skill: <underline>{Elemental Expression}"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "57181"
          ]
        },
        {
          "key": "55611",
          "id": "AscendancyMonk2Small5",
          "name": "Elemental Damage",
          "x": 15200.9,
          "y": -3384.98,
          "icon": "Art/2DArt/SkillIcons/passives/Invoker/InvokerNode.png",
          "stats": [
            "12% increased [ElementalDamage|Elemental Damage]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "64031"
          ],
          "in": [
            "7621"
          ]
        },
        {
          "key": "57181",
          "id": "AscendancyMonk2Small7",
          "name": "Critical Chance",
          "x": 15661.4,
          "y": -2720.67,
          "icon": "Art/2DArt/SkillIcons/passives/Invoker/InvokerNode.png",
          "stats": [
            "12% increased [Critical|Critical Hit Chance]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "52448"
          ],
          "in": [
            "63713"
          ]
        },
        {
          "key": "63236",
          "id": "AscendancyMonk2Notable9",
          "name": "The Soul Springs Eternal",
          "x": 15565.3,
          "y": -3331.8,
          "icon": "Art/2DArt/SkillIcons/passives/Invoker/InvokerEnergyDoubled.png",
          "stats": [
            "[Meta] Skills gain 35% more [Energy]",
            "[Meta] Skills have 50% increased [Reservation] [Efficiency]"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "13065"
          ]
        },
        {
          "key": "63713",
          "id": "AscendancyMonk2Notable6",
          "name": "Sunder my Enemies...",
          "x": 15988.4,
          "y": -2861.74,
          "icon": "Art/2DArt/SkillIcons/passives/Invoker/InvokerCriticalStrikesIgnoreResistances.png",
          "stats": [
            "[Critical|Critical Hits] ignore non-negative Enemy Monster [Resistances|Elemental Resistances]"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "57181"
          ],
          "in": [
            "44357"
          ]
        },
        {
          "key": "64031",
          "id": "AscendancyMonk2Notable5",
          "name": "...and I Shall Rage",
          "x": 15018.8,
          "y": -3425.67,
          "icon": "Art/2DArt/SkillIcons/passives/Invoker/InvokerUnboundAvatar.png",
          "stats": [
            "Grants Skill: <underline>{Unbound Avatar}"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "55611",
            "29133"
          ]
        },
        {
          "key": "65173",
          "id": "AscendancyMonk2Notable2_",
          "name": "...and Protect me from Harm",
          "x": 14443.8,
          "y": -4547.39,
          "icon": "Art/2DArt/SkillIcons/passives/Invoker/InvokerEvasionGrantsPhysicalDamageReduction.png",
          "stats": [
            "Physical Damage Reduction from [Armour] is based on your combined [Armour] and [Evasion] Rating",
            "35% less [Evasion|Evasion Rating]"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "16100"
          ]
        }
      ]
    },
    "Acolyte of Chayula": {
      "class": "Monk",
      "id": "Monk3",
      "source": "https://poe2db.tw/us/Acolyte_of_Chayula",
      "image": "Art/2DArt/BaseClassIllustrations/AcolyteofChayulaAscendancy.png",
      "nodes": [
        {
          "key": "74",
          "id": "AscendancyMonk3Start",
          "name": "Acolyte of Chayula",
          "x": 18232.4,
          "y": -5305.15,
          "icon": "Art/2DArt/SkillIcons/passives/damage.png",
          "stats": [],
          "start": true,
          "notable": false,
          "keystone": false,
          "out": [
            "17923",
            "24475",
            "36788",
            "25779",
            "1347",
            "25885"
          ],
          "in": [
            "44683"
          ]
        },
        {
          "key": "664",
          "id": "AscendancyMonk3Notable6",
          "name": "Choice of Power",
          "x": 17447.4,
          "y": -4119.15,
          "icon": "Art/2DArt/SkillIcons/passives/AcolyteofChayula/AcolyteOfChayulaBreachFlameDoubles.png",
          "stats": [
            "[Remnant|Remnants] you create have 50% increased effect",
            "[Remnant|Remnants] can be collected from 50% further away",
            "All [FlamesOfChayula|Flames of Chayula] that you manifest are [PurpleFlamesOfChayula|Purple]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [],
          "in": [
            "52395"
          ]
        },
        {
          "key": "1347",
          "id": "AscendancyMonk3Small5",
          "name": "Skill Speed",
          "x": 17815.8,
          "y": -5064.65,
          "icon": "Art/2DArt/SkillIcons/passives/AcolyteofChayula/AcolyteOfChayulaNode.png",
          "stats": [
            "4% increased [SkillSpeed|Skill Speed]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "50098"
          ],
          "in": [
            "74"
          ]
        },
        {
          "key": "3781",
          "id": "AscendancyMonk3Notable2",
          "name": "Unravelling",
          "x": 16637.8,
          "y": -5885.55,
          "icon": "Art/2DArt/SkillIcons/passives/AcolyteofChayula/AcolyteOfChayulaUnravelling.png",
          "stats": [
            "Grants [UnravellingBuff|Unravelling]"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "47344"
          ]
        },
        {
          "key": "11771",
          "id": "AscendancyMonk3Small6",
          "name": "Skill Speed",
          "x": 17706.6,
          "y": -4420.45,
          "icon": "Art/2DArt/SkillIcons/passives/AcolyteofChayula/AcolyteOfChayulaNode.png",
          "stats": [
            "4% increased [SkillSpeed|Skill Speed]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "52395"
          ],
          "in": [
            "50098"
          ]
        },
        {
          "key": "17923",
          "id": "AscendancyMonk3Small1",
          "name": "Volatility",
          "x": 17937.7,
          "y": -5656.33,
          "icon": "Art/2DArt/SkillIcons/passives/AcolyteofChayula/AcolyteOfChayulaNode.png",
          "stats": [
            "10% chance to gain [Volatility] on Kill"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "18826"
          ],
          "in": [
            "74"
          ]
        },
        {
          "key": "18826",
          "id": "AscendancyMonk3Notable1",
          "name": "Inner Turmoil",
          "x": 17540.7,
          "y": -5885.55,
          "icon": "Art/2DArt/SkillIcons/passives/AcolyteofChayula/AcolyteOfChayulaManaLeechInstant.png",
          "stats": [
            "Gain 1 [Volatility] on inflicting an [ElementalAilments|Elemental Ailment]",
            "Take no Damage from [Volatility]"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "47344"
          ],
          "in": [
            "17923"
          ]
        },
        {
          "key": "24475",
          "id": "AscendancyMonk3Small4_",
          "name": "Chaos Resistance",
          "x": 17780.9,
          "y": -5469.42,
          "icon": "Art/2DArt/SkillIcons/passives/AcolyteofChayula/AcolyteOfChayulaNode.png",
          "stats": [
            "+7% to [Resistances|Chaos Resistance]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "59759"
          ],
          "in": [
            "74"
          ]
        },
        {
          "key": "25779",
          "id": "AscendancyMonk3Small7_",
          "name": "Darkness",
          "x": 18404.2,
          "y": -4760.2,
          "icon": "Art/2DArt/SkillIcons/passives/AcolyteofChayula/AcolyteOfChayulaNode.png",
          "stats": [
            "10% increased maximum Darkness"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "41076"
          ],
          "in": [
            "74"
          ]
        },
        {
          "key": "25781",
          "id": "AscendancyMonk3Notable3_",
          "name": "Sap of Nightmares",
          "x": 17203.3,
          "y": -5292.17,
          "icon": "Art/2DArt/SkillIcons/passives/AcolyteofChayula/AcolyteOfChayulaExtraChaosDamage.png",
          "stats": [
            "[Leech] recovers based on [Chaos] Damage as well as [Physical] Damage"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "36788"
          ]
        },
        {
          "key": "25885",
          "id": "AscendancyMonk3Small8",
          "name": "Damage as Chaos",
          "x": 18165.2,
          "y": -4645.15,
          "icon": "Art/2DArt/SkillIcons/passives/AcolyteofChayula/AcolyteOfChayulaNode.png",
          "stats": [
            "[Gain] 4% of Damage as Extra [Chaos] Damage"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "31116"
          ],
          "in": [
            "74"
          ]
        },
        {
          "key": "26283",
          "id": "AscendancyMonk3Notable6_2",
          "name": "Choice of Mana",
          "x": 17553.8,
          "y": -4300.82,
          "icon": "Art/2DArt/SkillIcons/passives/AcolyteofChayula/AcolyteOfChayulaExtraChaosDamageBlue.png",
          "stats": [
            "[Remnant|Remnants] you create have 50% increased effect",
            "[Remnant|Remnants] can be collected from 50% further away",
            "All [FlamesOfChayula|Flames of Chayula] that you manifest are [BlueFlamesOfChayula|Blue]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [],
          "in": [
            "52395"
          ]
        },
        {
          "key": "31116",
          "id": "AscendancyMonk3Notable8",
          "name": "Grasp of the Void",
          "x": 18021.1,
          "y": -4107.15,
          "icon": "Art/2DArt/SkillIcons/passives/AcolyteofChayula/AcolyteOfChayulaExtraChaosDamagePerDarkness.png",
          "stats": [
            "Grants Skill: <underline>{Void Illusion}"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "25885"
          ]
        },
        {
          "key": "32771",
          "id": "AscendancyMonk3Small9",
          "name": "Darkness",
          "x": 17981,
          "y": -3671.95,
          "icon": "Art/2DArt/SkillIcons/passives/AcolyteofChayula/AcolyteOfChayulaNode.png",
          "stats": [
            "10% increased maximum Darkness"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "34817"
          ],
          "in": [
            "41076"
          ]
        },
        {
          "key": "34567",
          "id": "AscendancyMonk3Notable10",
          "name": "Archon of Chayula",
          "x": 16669.7,
          "y": -5371.75,
          "icon": "Art/2DArt/SkillIcons/passives/AcolyteofChayula/AcolyteOfChayulaSpecialNode.png",
          "stats": [
            "Grants Skill: <underline>{Archon of Chayula}"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "60251"
          ]
        },
        {
          "key": "34817",
          "id": "AscendancyMonk3Notable9",
          "name": "Deepening Shadows",
          "x": 17540.7,
          "y": -3404.76,
          "icon": "Art/2DArt/SkillIcons/passives/AcolyteofChayula/AcolyteOfChayulaDarknessProtectsLonger.png",
          "stats": [
            "1% increased maximum Darkness per 1% [Chaos|Chaos Resistance]"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "32771"
          ]
        },
        {
          "key": "36788",
          "id": "AscendancyMonk3Small3",
          "name": "Leech",
          "x": 17628.5,
          "y": -5287.87,
          "icon": "Art/2DArt/SkillIcons/passives/AcolyteofChayula/AcolyteOfChayulaNode.png",
          "stats": [
            "11% increased amount of Life [LifeLeech|Leeched]",
            "11% increased amount of Mana [ManaLeech|Leeched]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "25781"
          ],
          "in": [
            "74"
          ]
        },
        {
          "key": "41076",
          "id": "AscendancyMonk3Notable7",
          "name": "Embrace the Darkness",
          "x": 18308.8,
          "y": -4140.01,
          "icon": "Art/2DArt/SkillIcons/passives/AcolyteofChayula/AcolyteOfChayulaReplaceSpiritWithDarkness.png",
          "stats": [
            "You have no [Spirit]\nBase Maximum Darkness is 100\nDamage taken is Reserved from Darkness before being taken from Life or [EnergyShield|Energy Shield]",
            "Darkness [Reservation] lasts for 5 seconds",
            "+10 to Maximum Darkness per Level"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "32771"
          ],
          "in": [
            "25779"
          ]
        },
        {
          "key": "47344",
          "id": "AscendancyMonk3Small2",
          "name": "Chaos Damage",
          "x": 17089.2,
          "y": -5965.15,
          "icon": "Art/2DArt/SkillIcons/passives/AcolyteofChayula/AcolyteOfChayulaNode.png",
          "stats": [
            "11% increased [Chaos] Damage"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "3781"
          ],
          "in": [
            "18826"
          ]
        },
        {
          "key": "50098",
          "id": "AscendancyMonk3Notable5",
          "name": "Waking Dream",
          "x": 17736.3,
          "y": -4759.24,
          "icon": "Art/2DArt/SkillIcons/passives/AcolyteofChayula/AcolyteOfChayulaBreachWalk.png",
          "stats": [
            "Grants Skill: <underline>{Into the Breach}"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "11771"
          ],
          "in": [
            "1347"
          ]
        },
        {
          "key": "52395",
          "id": "AscendancyMonk3Notable6_Choice",
          "name": "Lucid Dreaming",
          "x": 17553.8,
          "y": -4180.59,
          "icon": "Art/2DArt/SkillIcons/passives/AcolyteofChayula/AcolyteOfChayulaFlameSelector.png",
          "stats": [],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "56331",
            "26283",
            "664"
          ],
          "in": [
            "11771"
          ]
        },
        {
          "key": "56331",
          "id": "AscendancyMonk3Notable6_3",
          "name": "Choice of Life",
          "x": 17657.2,
          "y": -4117.79,
          "icon": "Art/2DArt/SkillIcons/passives/AcolyteofChayula/AcolyteOfChayulaExtraChaosDamageRed.png",
          "stats": [
            "[Remnant|Remnants] you create have 50% increased effect",
            "[Remnant|Remnants] can be collected from 50% further away",
            "All [FlamesOfChayula|Flames of Chayula] that you manifest are [RedFlamesOfChayula|Red]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [],
          "in": [
            "52395"
          ]
        },
        {
          "key": "59759",
          "id": "AscendancyMonk3Notable4",
          "name": "Chayula's Gift",
          "x": 17457.2,
          "y": -5656.26,
          "icon": "Art/2DArt/SkillIcons/passives/AcolyteofChayula/AcolyteOfChayulaExtraChaosResistance.png",
          "stats": [
            "+10% to [MaximumResistances|Maximum Chaos Resistance]",
            "[Chaos] Resistance is doubled"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "60251"
          ],
          "in": [
            "24475"
          ]
        },
        {
          "key": "60251",
          "id": "AscendancyMonk3Small10",
          "name": "Chaos Damage",
          "x": 16995.5,
          "y": -5717.06,
          "icon": "Art/2DArt/SkillIcons/passives/AcolyteofChayula/AcolyteOfChayulaNode.png",
          "stats": [
            "11% increased [Chaos] Damage"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "34567"
          ],
          "in": [
            "59759"
          ]
        }
      ]
    },
    "Oracle": {
      "class": "Druid",
      "id": "Druid1",
      "source": "https://poe2db.tw/us/Oracle",
      "image": "Art/2DArt/BaseClassIllustrations/OracleAscendancy.png",
      "nodes": [
        {
          "key": "378",
          "id": "AscendancyDruid1Small8",
          "name": "Critical Hit Chance",
          "x": -20970.1,
          "y": -3158.38,
          "icon": "Art/2DArt/SkillIcons/passives/Oracle/OracleNode.png",
          "stats": [
            "12% increased [Critical|Critical Hit Chance]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "55135"
          ],
          "in": [
            "34313"
          ]
        },
        {
          "key": "4197",
          "id": "AscendancyDruid1Notable4",
          "name": "Converging Paths",
          "x": -20970.1,
          "y": -2587.38,
          "icon": "Art/2DArt/SkillIcons/passives/Oracle/OracleRipFromTime.png",
          "stats": [
            "Grants Skill: <underline>{Moment of Vulnerability}"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "56505"
          ]
        },
        {
          "key": "5571",
          "id": "AscendancyDruid1Notable2",
          "name": "The Unseen Path",
          "x": -21908.3,
          "y": -1798.32,
          "icon": "Art/2DArt/SkillIcons/passives/Oracle/OracleDiffChoices.png",
          "stats": [
            "Walk the [OraclePaths|Paths Not Taken]"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "47190"
          ],
          "in": [
            "11335"
          ]
        },
        {
          "key": "11335",
          "id": "AscendancyDruid1Small1",
          "name": "Passive Point",
          "x": -22256.7,
          "y": -2244.46,
          "icon": "Art/2DArt/SkillIcons/passives/Oracle/OracleNode.png",
          "stats": [
            "Grants 1 Passive Skill Point"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "5571"
          ],
          "in": [
            "42761"
          ]
        },
        {
          "key": "15275",
          "id": "AscendancyDruid1Small6",
          "name": "Totem Cast and Attack Speed",
          "x": -22028.3,
          "y": -2725.84,
          "icon": "Art/2DArt/SkillIcons/passives/Oracle/OracleNode.png",
          "stats": [
            "[Spell|Spells] Cast by [Totem|Totems] have 5% increased Cast Speed",
            "[Attack|Attacks] used by Totems have 5% increased [Attack] Speed"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "52374"
          ],
          "in": [
            "42761"
          ]
        },
        {
          "key": "21284",
          "id": "AscendancyDruid1Small3",
          "name": "Life and Mana Regeneration Rate",
          "x": -22028.3,
          "y": -2474.27,
          "icon": "Art/2DArt/SkillIcons/passives/Oracle/OracleNode.png",
          "stats": [
            "8% increased Life Regeneration rate",
            "8% increased Mana Regeneration Rate"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "30904"
          ],
          "in": [
            "42761"
          ]
        },
        {
          "key": "25092",
          "id": "AscendancyDruid1Small7",
          "name": "Critical Damage Bonus on You",
          "x": -22257.9,
          "y": -2725.84,
          "icon": "Art/2DArt/SkillIcons/passives/Oracle/OracleNode.png",
          "stats": [
            "[Hit|Hits] against you have 12% reduced [CriticalDamageBonus|Critical Damage Bonus]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "34313"
          ],
          "in": [
            "42761"
          ]
        },
        {
          "key": "30904",
          "id": "AscendancyDruid1Notable3",
          "name": "Harmony Within",
          "x": -21437.2,
          "y": -2474.27,
          "icon": "Art/2DArt/SkillIcons/passives/Oracle/OracleLifeManaHits.png",
          "stats": [
            "[Hit] damage is taken from Mana before Life if your current Mana is higher than your current Life",
            "15% less maximum Life",
            "15% less maximum Mana"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "21284"
          ]
        },
        {
          "key": "32905",
          "id": "AscendancyDruid1Notable1",
          "name": "Entwined Realities",
          "x": -20590.2,
          "y": -2324.46,
          "icon": "Art/2DArt/SkillIcons/passives/Oracle/OraclePassiveTreeAllocation.png",
          "stats": [
            "Non-Keystone Passive Skills in Medium Radius of allocated Keystone Passive Skills can be allocated without being connected to your tree"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "47190"
          ]
        },
        {
          "key": "34313",
          "id": "AscendancyDruid1Notable7",
          "name": "The Lesser Harm",
          "x": -21908.3,
          "y": -3157.38,
          "icon": "Art/2DArt/SkillIcons/passives/Oracle/OracleEnemiesActionsUnlucky.png",
          "stats": [
            "Enemy [Critical|Critical Hit Chance] against you is [Unlucky]",
            "Damage of Enemies [Hit|Hitting] you is [Unlucky]"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "378"
          ],
          "in": [
            "25092"
          ]
        },
        {
          "key": "37782",
          "id": "AscendancyDruid1Notable5",
          "name": "Fateful Vision",
          "x": -20970.1,
          "y": -2359.33,
          "icon": "Art/2DArt/SkillIcons/passives/Oracle/OracleSpellFlux.png",
          "stats": [
            "Grants Skill: <underline>{Align Fate}"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "39659"
          ]
        },
        {
          "key": "39659",
          "id": "AscendancyDruid1Small5",
          "name": "Spell Damage",
          "x": -21908.3,
          "y": -2359.31,
          "icon": "Art/2DArt/SkillIcons/passives/Oracle/OracleNode.png",
          "stats": [
            "12% increased [Spell] Damage"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "37782"
          ],
          "in": [
            "42761"
          ]
        },
        {
          "key": "42761",
          "id": "AscendancyDruid1Start",
          "name": "Oracle",
          "x": -22597.4,
          "y": -2727.53,
          "icon": "Art/2DArt/SkillIcons/passives/damage.png",
          "stats": [],
          "start": true,
          "notable": false,
          "keystone": false,
          "out": [
            "11335",
            "21284",
            "56505",
            "39659",
            "25092",
            "15275"
          ],
          "in": [
            "61525"
          ]
        },
        {
          "key": "47190",
          "id": "AscendancyDruid1Small2",
          "name": "Passive Point",
          "x": -20970.1,
          "y": -1798.32,
          "icon": "Art/2DArt/SkillIcons/passives/Oracle/OracleNode.png",
          "stats": [
            "Grants 1 Passive Skill Point"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "32905"
          ],
          "in": [
            "5571"
          ]
        },
        {
          "key": "52374",
          "id": "AscendancyDruid1Notable6",
          "name": "Unnamed Heartwood",
          "x": -21437.2,
          "y": -2913.72,
          "icon": "Art/2DArt/SkillIcons/passives/Oracle/OracleTotemLimit.png",
          "stats": [
            "+1 to maximum number of Summoned [Totem|Totems]",
            "[Totem|Totems] die 6 seconds after their Life is reduced to 0"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "15275"
          ]
        },
        {
          "key": "55135",
          "id": "AscendancyDruid1Notable8",
          "name": "Forced Outcome",
          "x": -20590.2,
          "y": -2615.85,
          "icon": "Art/2DArt/SkillIcons/passives/Oracle/OracleRerollingCrit.png",
          "stats": [
            "[InevitableCriticalHits|Inevitable Critical Hits]"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "378"
          ]
        },
        {
          "key": "56505",
          "id": "AscendancyDruid1Small4",
          "name": "Immobilisation Buildup",
          "x": -21908.3,
          "y": -2587.38,
          "icon": "Art/2DArt/SkillIcons/passives/Oracle/OracleNode.png",
          "stats": [
            "20% increased [Immobilised|Immobilisation] buildup"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "4197"
          ],
          "in": [
            "42761"
          ]
        }
      ]
    },
    "Shaman": {
      "class": "Druid",
      "id": "Druid2",
      "source": "https://poe2db.tw/us/Shaman",
      "image": "Art/2DArt/BaseClassIllustrations/ShamanAscendancy.png",
      "nodes": [
        {
          "key": "1855",
          "id": "AscendancyDruid2Small7",
          "name": "Flask Recovery",
          "x": -20048.9,
          "y": -2933.74,
          "icon": "Art/2DArt/SkillIcons/passives/Shaman/ShamanNode.png",
          "stats": [
            "12% increased Life and Mana Recovery from [Flask|Flasks]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "16204"
          ],
          "in": [
            "35535"
          ]
        },
        {
          "key": "16204",
          "id": "AscendancyDruid2Notable7",
          "name": "Sacred Flow",
          "x": -20048.9,
          "y": -3366.88,
          "icon": "Art/2DArt/SkillIcons/passives/Shaman/ShamanGainSpiritEmptyCharmSlot.png",
          "stats": [
            "+40 to [Spirit] for each of your empty [Charm] slots"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "1855"
          ]
        },
        {
          "key": "26063",
          "id": "AscendancyDruid2Small2",
          "name": "Elemental Damage",
          "x": -18298.9,
          "y": -3046.83,
          "icon": "Art/2DArt/SkillIcons/passives/Shaman/ShamanNode.png",
          "stats": [
            "12% increased [ElementalDamage|Elemental Damage]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "28745"
          ],
          "in": [
            "62523"
          ]
        },
        {
          "key": "28022",
          "id": "AscendancyDruid2Small1",
          "name": "Elemental Damage",
          "x": -18931.4,
          "y": -1894.41,
          "icon": "Art/2DArt/SkillIcons/passives/Shaman/ShamanNode.png",
          "stats": [
            "12% increased [ElementalDamage|Elemental Damage]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "62523"
          ],
          "in": [
            "35535"
          ]
        },
        {
          "key": "28745",
          "id": "AscendancyDruid2Notable2",
          "name": "Bringer of the Apocalypse",
          "x": -18302.1,
          "y": -3694.04,
          "icon": "Art/2DArt/SkillIcons/passives/Shaman/ShamanUnleashTheElements.png",
          "stats": [
            "Grants Skill: <underline>{Apocalypse}"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "26063"
          ]
        },
        {
          "key": "33824",
          "id": "AscendancyDruid2Small8",
          "name": "Defences",
          "x": -19751.6,
          "y": -2501.42,
          "icon": "Art/2DArt/SkillIcons/passives/Shaman/ShamanNode.png",
          "stats": [
            "10% increased [Armour], [Evasion] and [EnergyShield|Energy Shield]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "42253"
          ],
          "in": [
            "35535"
          ]
        },
        {
          "key": "35535",
          "id": "AscendancyDruid2Start",
          "name": "Shaman",
          "x": -20479.7,
          "y": -3530.3,
          "icon": "Art/2DArt/SkillIcons/passives/damage.png",
          "stats": [],
          "start": true,
          "notable": false,
          "keystone": false,
          "out": [
            "1855",
            "33824",
            "61722",
            "54512",
            "28022"
          ],
          "in": [
            "61525"
          ]
        },
        {
          "key": "35762",
          "id": "AscendancyDruid2Notable6",
          "name": "Furious Wellspring",
          "x": -18771.8,
          "y": -3366.88,
          "icon": "Art/2DArt/SkillIcons/passives/Shaman/ShamanRageonHit.png",
          "stats": [
            "No Inherent loss of [Rage]",
            "Regenerate 6% of your maximum [Rage] per second",
            "Increases and Reductions to Mana Regeneration Rate also apply to [Rage] Regeneration Rate",
            "Skills have +5 to [Rage] cost",
            "+7 to Maximum [Rage]"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "35920"
          ]
        },
        {
          "key": "35920",
          "id": "AscendancyDruid2Small6",
          "name": "Maximum Rage",
          "x": -18771.8,
          "y": -2891.07,
          "icon": "Art/2DArt/SkillIcons/passives/Shaman/ShamanNode.png",
          "stats": [
            "+3 to Maximum [Rage]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "35762"
          ],
          "in": [
            "56933"
          ]
        },
        {
          "key": "42253",
          "id": "AscendancyDruid2Notable8",
          "name": "Wisdom of the Maji",
          "x": -19751.6,
          "y": -2934.42,
          "icon": "Art/2DArt/SkillIcons/passives/Shaman/ShamanRunesTalismans.png",
          "stats": [
            "Gain the benefits of [ShamanOnlyMods|Bonded] modifiers on [Rune|Runes] and [Idol|Idols]"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "33824"
          ]
        },
        {
          "key": "46654",
          "id": "AscendancyDruid2Small5",
          "name": "Elemental Resistances",
          "x": -18567.2,
          "y": -2954.17,
          "icon": "Art/2DArt/SkillIcons/passives/Shaman/ShamanNode.png",
          "stats": [
            "+3% to all [ElementalDamage|Elemental] [Resistances]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "61983"
          ],
          "in": [
            "58646"
          ]
        },
        {
          "key": "54512",
          "id": "AscendancyDruid2Small3",
          "name": "Maximum Rage",
          "x": -19474.5,
          "y": -2267.34,
          "icon": "Art/2DArt/SkillIcons/passives/Shaman/ShamanNode.png",
          "stats": [
            "+3 to Maximum [Rage]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "56933"
          ],
          "in": [
            "35535"
          ]
        },
        {
          "key": "56933",
          "id": "AscendancyDruid2Notable3",
          "name": "Druidic Champion",
          "x": -18771.8,
          "y": -2394.41,
          "icon": "Art/2DArt/SkillIcons/passives/Shaman/ShamanRageAffectsSpells.png",
          "stats": [
            "Every 2 [Rage] also grants 1% more [Spell] damage"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "35920"
          ],
          "in": [
            "54512"
          ]
        },
        {
          "key": "58646",
          "id": "AscendancyDruid2Notable4",
          "name": "Reactive Growth",
          "x": -18567.2,
          "y": -2394.45,
          "icon": "Art/2DArt/SkillIcons/passives/Shaman/ShamanAdaptToElements.png",
          "stats": [
            "10% less [ElementalDamage|Elemental Damage] taken",
            "[Adaptation|Adapt] to the highest [ElementalDamage|Elemental Damage Type] of each [Hit] you take",
            "10% less Damage taken of each [ElementalDamage|Elemental Damage Type] per matching [Adaptation]"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "46654"
          ],
          "in": [
            "61722"
          ]
        },
        {
          "key": "61722",
          "id": "AscendancyDruid2Small4_",
          "name": "Elemental Resistances",
          "x": -19209.9,
          "y": -2094.74,
          "icon": "Art/2DArt/SkillIcons/passives/Shaman/ShamanNode.png",
          "stats": [
            "+3% to all [ElementalDamage|Elemental] [Resistances]"
          ],
          "start": false,
          "notable": false,
          "keystone": false,
          "out": [
            "58646"
          ],
          "in": [
            "35535"
          ]
        },
        {
          "key": "61983",
          "id": "AscendancyDruid2Notable5",
          "name": "Avatar of Evolution",
          "x": -18567.2,
          "y": -3513.86,
          "icon": "Art/2DArt/SkillIcons/passives/Shaman/ShamanEvenMoreAdaptation.png",
          "stats": [
            "5% of [Physical|Physical] Damage taken as [Fire|Fire] Damage",
            "5% of [Physical|Physical] Damage taken as [Lightning|Lightning] Damage",
            "5% of [Physical|Physical] Damage taken as [Cold|Cold] Damage",
            "[Adaptation|Adaptations] have a duration of 5 seconds",
            "Double [Adaptation] Effect"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [],
          "in": [
            "46654"
          ]
        },
        {
          "key": "62523",
          "id": "AscendancyDruid2Notable1",
          "name": "Turning of the Seasons",
          "x": -18297,
          "y": -2394.44,
          "icon": "Art/2DArt/SkillIcons/passives/Shaman/ShamanPickEleDmg.png",
          "stats": [
            "Enemies in your [Presence|Presence] have [Exposure]",
            "[Gain] 10% of Damage as Extra Damage of a random [ElementalDamage|Element]"
          ],
          "start": false,
          "notable": true,
          "keystone": false,
          "out": [
            "26063"
          ],
          "in": [
            "28022"
          ]
        }
      ]
    }
  }
};
