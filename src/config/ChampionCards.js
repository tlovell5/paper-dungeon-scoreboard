const champions = [
  {
    id: '1',
    champion: 'Warrior',
    cards: [
      {
        id: '1',
        champion: 'Warrior',
        ability: 'Shield Block',
        aggro: 1,
        damage: 0,
        block: 2,
        description: 'No Additional Effect'
      },
      {
        id: '2',
        champion: 'Warrior',
        ability: 'Shield Block',
        aggro: 1,
        damage: 0,
        block: 2,
        description: 'No Additional Effect'
      },
      {
        id: '3',
        champion: 'Warrior',
        ability: 'Bash',
        aggro: 2,
        damage: 2,
        block: 2,
        description: 'No Additional Effect'
      },
      {
        id: '4',
        champion: 'Warrior',
        ability: 'Intercede',
        aggro: 2,
        damage: 0,
        block: 4,
        description: 'Take Direct Damage for Target Player'
      },
      {
        id: '5',
        champion: 'Warrior',
        ability: 'Mirror Shield',
        aggro: 3,
        damage: 0,
        block: 0,
        description:
          '50% of Blocked Damage is Dealt to Attacking Enemy. 50% of Blocked Damage Heals Self'
      },
      {
        id: '6',
        champion: 'Warrior',
        ability: 'Shield Health Residue',
        aggro: 5,
        damage: 0,
        block: 3,
        description: 'Unused Block Points Heal Self'
      },
      {
        id: '7',
        champion: 'Warrior',
        ability: 'Shield Damage Residue',
        aggro: 5,
        damage: 0,
        block: 3,
        description: 'Unused Block Points Damage Attacking Target'
      },
      {
        id: '8',
        champion: 'Warrior',
        ability: 'Taunt',
        aggro: 5,
        damage: 0,
        block: 0,
        description: 'No Additional Effect'
      },
      {
        id: '9',
        champion: 'Warrior',
        ability: 'Taunt',
        aggro: 5,
        damage: 0,
        block: 0,
        description: 'No Additional Effect'
      },
      {
        id: '10',
        champion: 'Warrior',
        ability: 'Taunt',
        aggro: 5,
        damage: 0,
        block: 0,
        description: 'No Additional Effect'
      },
      {
        id: '11',
        champion: 'Warrior',
        ability: 'Commanding Shout',
        aggro: 5,
        damage: 0,
        block: 0,
        description: '+2 Attck to All Players'
      },
      {
        id: '12',
        champion: 'Warrior',
        ability: 'Demoralize',
        aggro: 5,
        damage: 0,
        block: 0,
        description: '-3 Attack to Target'
      },
      {
        id: '13',
        champion: 'Warrior',
        ability: 'Strike',
        aggro: 1,
        damage: 1,
        block: 0,
        description: 'No Additional Effect'
      },
      {
        id: '14',
        champion: 'Warrior',
        ability: 'Strike',
        aggro: 1,
        damage: 1,
        block: 0,
        description: 'No Additional Effect'
      },
      {
        id: '15',
        champion: 'Warrior',
        ability: 'Heroic Strike',
        aggro: 1,
        damage: 3,
        block: 0,
        description: 'No Additional Effect'
      },
      {
        id: '16',
        champion: 'Warrior',
        ability: 'Intimidating Strike',
        aggro: 3,
        damage: 1,
        block: 0,
        description: 'No Additional Effect'
      },
      {
        id: '17',
        champion: 'Warrior',
        ability: 'Intimidating Strike',
        aggro: 3,
        damage: 1,
        block: 0,
        description: 'No Additional Effect'
      }
    ],
    stances: [
      {
        id: '1',
        champion: 'Warrior',
        ability: 'Aggressive Stance',
        aggro: 0,
        damage: 2,
        block: 0,
        description: 'No Additional Effect'
      },
      {
        id: '2',
        champion: 'Warrior',
        ability: 'Deffensive Stance',
        aggro: 0,
        damage: 0,
        block: 2,
        description: 'No Additional Effect'
      },
      {
        id: '3',
        champion: 'Warrior',
        ability: 'Ballanced Stance',
        aggro: 0,
        damage: 1,
        block: 1,
        description: 'No Additional Effect'
      }
    ]
  },
  {
    id: '2',
    champion: 'Priest',
    cards: [
      {
        id: '1',
        champion: 'Priest',
        ability: 'Heal',
        aggro: 2,
        damage: 0,
        block: 0,
        description: '+3 Heal to Target'
      },
      {
        id: '2',
        champion: 'Priest',
        ability: 'Heal',
        aggro: 2,
        damage: 0,
        block: 0,
        description: '+3 Heal to Target'
      },
      {
        id: '3',
        champion: 'Priest',
        ability: 'Major Heal',
        aggro: 4,
        damage: 0,
        block: 0,
        description: '+6 Heal to Target'
      },
      {
        id: '4',
        champion: 'Priest',
        ability: 'Siphon Life',
        aggro: 4,
        damage: 2,
        block: 0,
        description: '+2 Heal to Self'
      },
      {
        id: '5',
        champion: 'Priest',
        ability: 'Buff',
        aggro: 1,
        damage: 0,
        block: 0,
        description: '+1 Shield to Target. +1 Attack to Target'
      },
      {
        id: '6',
        champion: 'Priest',
        ability: 'Buff',
        aggro: 1,
        damage: 0,
        block: 0,
        description: '+1 Shield to Target. +1 Attack to Target'
      },
      {
        id: '7',
        champion: 'Priest',
        ability: 'Empower',
        aggro: 2,
        damage: 0,
        block: 0,
        description: '+2 Shield to Target. +2 Attack to Target'
      },
      {
        id: '8',
        champion: 'Priest',
        ability: 'Cripple',
        aggro: 2,
        damage: 0,
        block: 0,
        description: '-4 Attacks to Target'
      },
      {
        id: '9',
        champion: 'Priest',
        ability: 'Barrier',
        aggro: 1,
        damage: 0,
        block: 0,
        description: '+2 Shield to Target'
      },
      {
        id: '10',
        champion: 'Priest',
        ability: 'Barrier',
        aggro: 1,
        damage: 0,
        block: 0,
        description: '+2 Shield to Target'
      },
      {
        id: '11',
        champion: 'Priest',
        ability: 'Divine Shield',
        aggro: 2,
        damage: 0,
        block: 0,
        description: '+4 Shield to Target'
      },
      {
        id: '12',
        champion: 'Priest',
        ability: 'Immolation Barrier',
        aggro: 2,
        damage: 0,
        block: 0,
        description: '+4 Damage to Enemy When Enemy Attacks Target Player'
      },
      {
        id: '13',
        champion: 'Priest',
        ability: 'Calm',
        aggro: 0,
        damage: 0,
        block: 0,
        description: '-25% Aggro'
      },
      {
        id: '14',
        champion: 'Priest',
        ability: 'Calm',
        aggro: 0,
        damage: 0,
        block: 0,
        description: '-25% Aggro'
      },
      {
        id: '15',
        champion: 'Priest',
        ability: 'Fear',
        aggro: 2,
        damage: 0,
        block: 0,
        description: '50% Chance Target Enemy Takes No Action'
      },
      {
        id: '16',
        champion: 'Priest',
        ability: 'Pacify',
        aggro: 0,
        damage: 0,
        block: 0,
        description: '-50% Aggro'
      }
    ],
    stances: []
  },
  {
    id: '3',
    champion: 'Rogue',
    cards: [
      {
        id: '1',
        champion: 'Rogue',
        ability: 'Stab',
        aggro: 2,
        damage: 2,
        block: 0,
        description: 'No Additional Effect'
      },
      {
        id: '2',
        champion: 'Rogue',
        ability: 'Stab',
        aggro: 2,
        damage: 2,
        block: 0,
        description: 'No Additional Effect'
      },
      {
        id: '3',
        champion: 'Rogue',
        ability: 'Dual Wield',
        aggro: 4,
        damage: 4,
        block: 0,
        description: 'No Additional Effect'
      },
      {
        id: '4',
        champion: 'Rogue',
        ability: 'Hamstring',
        aggro: 4,
        damage: 2,
        block: 0,
        description: '-2 Attacks to Target'
      },
      {
        id: '5',
        champion: 'Rogue',
        ability: 'Stealth',
        aggro: 0,
        damage: 0,
        block: 0,
        description: '-25% Aggro'
      },
      {
        id: '6',
        champion: 'Rogue',
        ability: 'Stealth',
        aggro: 0,
        damage: 0,
        block: 0,
        description: '-25% Aggro'
      },
      {
        id: '7',
        champion: 'Rogue',
        ability: 'Smoke Bomb',
        aggro: 0,
        damage: 0,
        block: 0,
        description: '25% Chance Boss Takes No Action'
      },
      {
        id: '8',
        champion: 'Rogue',
        ability: 'Vanish',
        aggro: 0,
        damage: 0,
        block: 0,
        description: '-50% Aggro'
      },
      {
        id: '9',
        champion: 'Rogue',
        ability: 'Poison',
        aggro: 2,
        damage: 0,
        block: 0,
        description: '3 Poison Tokens to Target for 1+ Damage Each'
      },
      {
        id: '10',
        champion: 'Rogue',
        ability: 'Poison',
        aggro: 2,
        damage: 0,
        block: 0,
        description: '3 Poison Tokens to Target for 1+ Damage Each'
      },
      {
        id: '11',
        champion: 'Rogue',
        ability: 'Poison',
        aggro: 2,
        damage: 0,
        block: 0,
        description: '3 Poison Tokens to Target for 1+ Damage Each'
      },
      {
        id: '12',
        champion: 'Rogue',
        ability: 'Poison Trap',
        aggro: 2,
        damage: 0,
        block: 0,
        description:
          'If Enemy Attacks Target Player Deal +4 Damage to Enemy and Place 3 Poison Tokens on Enemy for 1+ Damage Each'
      },
      {
        id: '13',
        champion: 'Rogue',
        ability: 'Poisoned Blade',
        aggro: 4,
        damage: 0,
        block: 0,
        description:
          '+2 Damage to Target and Place 3 Poison Tokens on Target for +1 Damage Each'
      },
      {
        id: '14',
        champion: 'Rogue',
        ability: 'Preperation',
        aggro: 0,
        damage: 0,
        block: 0,
        description: 'Draw 2 Cards and Play 1'
      },
      {
        id: '15',
        champion: 'Rogue',
        ability: 'Preperation',
        aggro: 0,
        damage: 0,
        block: 0,
        description: 'Draw 2 Cards and Play 1'
      },
      {
        id: '16',
        champion: 'Rogue',
        ability: 'Flurry',
        aggro: 0,
        damage: 0,
        block: 0,
        description: 'Play the Next 2 Cards from Your Deck'
      },
      {
        id: '17',
        champion: 'Rogue',
        ability: 'Master Plan',
        aggro: 0,
        damage: 0,
        block: 0,
        description: 'Select Any Card From Your Deck and Play It'
      }
    ],
    stances: []
  },
  {
    id: '4',
    champion: 'Mage',
    cards: [
      {
        id: '1',
        champion: 'Mage',
        ability: 'Arcane Bolt',
        aggro: 2,
        damage: 2,
        block: 0,
        description: 'No Additional Effects'
      },
      {
        id: '2',
        champion: 'Mage',
        ability: 'Arcane Bolt',
        aggro: 2,
        damage: 2,
        block: 0,
        description: 'No Additional Effects'
      },
      {
        id: '3',
        champion: 'Mage',
        ability: 'Fireball',
        aggro: 4,
        damage: 0,
        block: 0,
        description:
          '+4 Damage to Target Place 2 Burn TOkens on Target Dealing 2 Damage Each'
      },
      {
        id: '4',
        champion: 'Mage',
        ability: 'Iceball',
        aggro: 4,
        damage: 0,
        block: 0,
        description:
          '+2 Damage to Target -2 Attack to Target Place 2 Chill Tokens on Target Rendering -2 Attack Each'
      },
      {
        id: '5',
        champion: 'Mage',
        ability: 'Illusion',
        aggro: 2,
        damage: 0,
        block: 0,
        description:
          'Create an Additional Target with Targeted Players Base Aggro Score Roll Aggro on Illusion'
      },
      {
        id: '6',
        champion: 'Mage',
        ability: 'Illusion',
        aggro: 2,
        damage: 0,
        block: 0,
        description:
          'Create an Additional Target with Targeted Players Base Aggro Score Roll Aggro on Illusion'
      },
      {
        id: '7',
        champion: 'Mage',
        ability: 'Ice Illusion',
        aggro: 4,
        damage: 0,
        block: 0,
        description:
          'Create an Additional Target with Targeted Players Base Aggro Score Roll Aggro on Illusion If Illusion is Hit, Place 2 Chill Tokens on Attacker Chill Tokens Render -2 Attack Each'
      },
      {
        id: '8',
        champion: 'Mage',
        ability: 'Fire Illusion',
        aggro: 4,
        damage: 0,
        block: 0,
        description:
          'Create an Additional Target with Targeted Players Base Aggro Score Roll Aggro on Illusion If Illusion is Hit, Place 2 Burn Tokens on Attacker Burn Tokens Render -2 Attack Each'
      },
      {
        id: '9',
        champion: 'Mage',
        ability: 'Spell Block',
        aggro: 1,
        damage: 0,
        block: 0,
        description: 'Remove 1 Enemy Action Possibly This Round'
      },
      {
        id: '10',
        champion: 'Mage',
        ability: 'Spell Block',
        aggro: 1,
        damage: 0,
        block: 0,
        description: 'Remove 1 Enemy Action Possibly This Round'
      },
      {
        id: '11',
        champion: 'Mage',
        ability: 'Feedback',
        aggro: 4,
        damage: 0,
        block: 0,
        description: 'Enemy Actions Also APply to Themselves This Round'
      },
      {
        id: '12',
        champion: 'Mage',
        ability: 'Brain Freeze',
        aggro: 2,
        damage: 0,
        block: 0,
        description: 'Remove 3 Enemy Action Possiblities This Round'
      },
      {
        id: '13',
        champion: 'Mage',
        ability: 'Fade',
        aggro: 0,
        damage: 0,
        block: 0,
        description: '-25% Aggro'
      },
      {
        id: '14',
        champion: 'Mage',
        ability: 'Fade',
        aggro: 0,
        damage: 0,
        block: 0,
        description: '-25% Aggro'
      },
      {
        id: '15',
        champion: 'Mage',
        ability: 'Heat Mirage',
        aggro: 0,
        damage: 0,
        block: 0,
        description:
          '-100% Aggro Enemies Ignore Aggro This Round and Attack Players at Random'
      },
      {
        id: '16',
        champion: 'Mage',
        ability: 'Incorporeal Mist',
        aggro: 0,
        damage: 0,
        block: 0,
        description:
          '-100% Aggro Cannot Play an Action or Receive Effects Next Round'
      },
      {
        id: '17',
        champion: 'Mage',
        ability: 'Arcane Armor',
        aggro: 0,
        damage: 0,
        block: 0,
        description:
          '+1 Burn Token on Attacker if Hit, Burn Token Renders +2 Damage Each, +1 Chill Token on Attacker if Hit Chill Token Renders -2 Attack Each'
      },
      {
        id: '18',
        champion: 'Mage',
        ability: 'Ice Armor',
        aggro: 0,
        damage: 0,
        block: 0,
        description:
          '+2 Chill Tokens on Attacker if Hit Chill Token Renders -2 Attack Each'
      },
      {
        id: '19',
        champion: 'Mage',
        ability: 'Fire Armor',
        aggro: 0,
        damage: 0,
        block: 0,
        description:
          '+2 Burn TOkens on Attacker if Hit Burn Token Renders +2 Damage Each'
      }
    ],
    stances: []
  },
  {
    id: '5',
    champion: 'Paladin',
    cards: [
      {
        id: '1',
        champion: 'Paladin',
        ability: 'Smite',
        aggro: 3,
        damage: 0,
        block: 0,
        description:
          '+1 Damage to Target +1 Heal to Random Player +1 Block to Random Player'
      },
      {
        id: '2',
        champion: 'Paladin',
        ability: 'Smite',
        aggro: 3,
        damage: 1,
        block: 0,
        description: '+1 Heal to Random Player +1 Block to Random Player'
      },
      {
        id: '3',
        champion: 'Paladin',
        ability: 'Retribution',
        aggro: 3,
        damage: 2,
        block: 0,
        description: '+1 Heal to Random Player +1 Block to Random Player'
      },
      {
        id: '4',
        champion: 'Paladin',
        ability: 'Holy Smite',
        aggro: 3,
        damage: 2,
        block: 0,
        description: '+2 Heal to Random Player'
      },
      {
        id: '5',
        champion: 'Paladin',
        ability: 'Smite',
        aggro: 3,
        damage: 0,
        block: 0,
        description:
          '+1 Damage to Target +1 Heal to Random Player +1 Block to Random Player'
      },
      {
        id: '6',
        champion: 'Paladin',
        ability: 'Compel',
        aggro: 3,
        damage: 0,
        block: 2,
        description: 'No Additonal Effects'
      },
      {
        id: '7',
        champion: 'Paladin',
        ability: 'Compel',
        aggro: 3,
        damage: 0,
        block: 2,
        description: 'No Additonal Effects'
      },
      {
        id: '8',
        champion: 'Paladin',
        ability: 'Share Burden',
        aggro: 0,
        damage: 0,
        block: 0,
        description:
          'Takes 5-% of Target Players Direct Damage Received This Round'
      },
      {
        id: '9',
        champion: 'Paladin',
        ability: 'Intercede',
        aggro: 0,
        damage: 0,
        block: 0,
        description: 'Take 100% of Target Players Direct Damage This Round'
      },
      {
        id: '10',
        champion: 'Paladin',
        ability: 'Blessing of Balance',
        aggro: 2,
        damage: 0,
        block: 0,
        description:
          '+1 attack to Target Player +1 Heal to Target Player +1 Block to Target Player'
      },
      {
        id: '11',
        champion: 'Paladin',
        ability: 'Blessing of Balance',
        aggro: 2,
        damage: 0,
        block: 0,
        description:
          '+1 attack to Target Player +1 Heal to Target Player +1 Block to Target Player'
      },

      {
        id: '12',
        champion: 'Paladin',
        ability: 'Blessing of Protection',
        aggro: 4,
        damage: 0,
        block: 0,
        description: '+2 Heal to Target Player +2 Block to Target Player'
      },
      {
        id: '13',
        champion: 'Paladin',
        ability: 'Blessing of Vengeance',
        aggro: 4,
        damage: 0,
        block: 0,
        description: '+2 Heal to Target Player +2 Attack to Target Player'
      },
      {
        id: '14',
        champion: 'Paladin',
        ability: 'Blessing of Protection',
        aggro: 4,
        damage: 0,
        block: 0,
        description: '+2 to Target Player +2 Block to Target Player'
      },
      {
        id: '15',
        champion: 'Paladin',
        ability: 'Retreat',
        aggro: 0,
        damage: 0,
        block: 0,
        description: '-25% Aggro'
      },
      {
        id: '16',
        champion: 'Paladin',
        ability: 'Retreat',
        aggro: 0,
        damage: 0,
        block: 0,
        description: '-25% Aggro'
      },
      {
        id: '17',
        champion: 'Paladin',
        ability: 'Humility',
        aggro: 0,
        damage: 0,
        block: 0,
        description: '-50% Aggro'
      },
      {
        id: '18',
        champion: 'Paladin',
        ability: 'Diffuse',
        aggro: 0,
        damage: 0,
        block: 0,
        description: '-25% Aggro on Target Player'
      }
    ],
    stances: [
      {
        id: '1',
        champion: 'Paladin',
        ability: 'Aura of Protection',
        aggro: 0,
        damage: 0,
        block: 0,
        description: '+2 on All Player Block Effects'
      },
      {
        id: '2',
        champion: 'Paladin',
        ability: 'Aura of Vengeance',
        aggro: 0,
        damage: 0,
        block: 0,
        description: '+2 on All Player Attack Effects'
      },
      {
        id: '3',
        champion: 'Paladin',
        ability: 'Aura of Life',
        aggro: 0,
        damage: 0,
        block: 0,
        description: '+2 on All Player Heal Effects'
      }
    ]
  }
];
