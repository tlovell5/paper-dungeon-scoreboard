(this["webpackJsonppaper-dungeon-scoreboard"]=this["webpackJsonppaper-dungeon-scoreboard"]||[]).push([[0],{35:function(a,e,i){},39:function(a,e,i){"use strict";i.r(e);var o=i(1),t=i(0),r=i.n(t),c=i(14),n=i.n(c),l=i(9),d=i(11),g=i(13),s=i(4),m=i(15);var b=function(a){var e=Object(t.useState)(a.aggro),i=Object(m.a)(e,2),r=i[0],c=i[1];function n(e){if(!(0===r&&e<0)){var i=r+e;c(i),a.setBaseAggro(i)}}return Object(o.jsxs)("div",{className:"grid-container",children:[Object(o.jsx)("h1",{className:"name",children:"Aggro"}),Object(o.jsx)("button",{className:"decrease",onClick:function(){return n(-1)},children:"-"}),Object(o.jsx)("h1",{className:"number",children:a.aggro}),Object(o.jsx)("button",{className:"increase",onClick:function(){return n(1)},children:"+"})]})};var h=function(a){var e=a.min,i=a.max;return Object(o.jsxs)("div",{className:"grid-container-two",children:[Object(o.jsx)("button",{className:"diceButton",onClick:function(){var o=Math.floor(Math.random()*(i-e+1)+e);a.setDiceRoll(o)},children:"Roll Dice"}),Object(o.jsx)("h1",{className:"dice",children:Object(o.jsx)("span",{children:a.roll})})]})};var p=function(a){var e=Object(t.useState)(a.health),i=Object(m.a)(e,2),r=i[0],c=i[1];function n(e){if(!(0===r&&e<0)){var i=r+e;c(i),a.setHealth(i)}}return Object(o.jsxs)("div",{className:"grid-container",children:[Object(o.jsx)("h1",{className:"name",children:"Health"}),Object(o.jsx)("button",{className:"decrease",onClick:function(){return n(-1)},children:"-"}),Object(o.jsx)("h1",{className:"number",children:a.health}),Object(o.jsx)("button",{className:"increase",onClick:function(){return n(1)},children:"+"})]})},u=[{id:"1",champion:"Warrior",cards:[{id:"1",champion:"Warrior",ability:"Shield Block",aggro:1,damage:0,block:2,description:"No Additional Effect"},{id:"2",champion:"Warrior",ability:"Shield Block",aggro:1,damage:0,block:2,description:"No Additional Effect"},{id:"3",champion:"Warrior",ability:"Bash",aggro:2,damage:2,block:2,description:"No Additional Effect"},{id:"4",champion:"Warrior",ability:"Intercede",aggro:2,damage:0,block:4,description:"Take Direct Damage for Target Player"},{id:"5",champion:"Warrior",ability:"Mirror Shield",aggro:3,damage:0,block:0,description:"50% of Blocked Damage is Dealt to Attacking Enemy. 50% of Blocked Damage Heals Self"},{id:"6",champion:"Warrior",ability:"Shield Health Residue",aggro:5,damage:0,block:3,description:"Unused Block Points Heal Self"},{id:"7",champion:"Warrior",ability:"Shield Damage Residue",aggro:5,damage:0,block:3,description:"Unused Block Points Damage Attacking Target"},{id:"8",champion:"Warrior",ability:"Taunt",aggro:5,damage:0,block:0,description:"No Additional Effect"},{id:"9",champion:"Warrior",ability:"Taunt",aggro:5,damage:0,block:0,description:"No Additional Effect"},{id:"10",champion:"Warrior",ability:"Taunt",aggro:5,damage:0,block:0,description:"No Additional Effect"},{id:"11",champion:"Warrior",ability:"Commanding Shout",aggro:5,damage:0,block:0,description:"+2 Attck to All Players"},{id:"12",champion:"Warrior",ability:"Demoralize",aggro:5,damage:0,block:0,description:"-3 Attack to Target"},{id:"13",champion:"Warrior",ability:"Strike",aggro:1,damage:1,block:0,description:"No Additional Effect"},{id:"14",champion:"Warrior",ability:"Strike",aggro:1,damage:1,block:0,description:"No Additional Effect"},{id:"15",champion:"Warrior",ability:"Heroic Strike",aggro:1,damage:3,block:0,description:"No Additional Effect"},{id:"16",champion:"Warrior",ability:"Intimidating Strike",aggro:3,damage:1,block:0,description:"No Additional Effect"},{id:"17",champion:"Warrior",ability:"Intimidating Strike",aggro:3,damage:1,block:0,description:"No Additional Effect"}],stances:[{id:"1",champion:"Warrior",ability:"Aggressive Stance",aggro:0,damage:2,block:0,description:"No Additional Effect"},{id:"2",champion:"Warrior",ability:"Deffensive Stance",aggro:0,damage:0,block:2,description:"No Additional Effect"},{id:"3",champion:"Warrior",ability:"Ballanced Stance",aggro:0,damage:1,block:1,description:"No Additional Effect"}]},{id:"2",champion:"Priest",cards:[{id:"1",champion:"Priest",ability:"Heal",aggro:2,damage:0,block:0,description:"+3 Heal to Target"},{id:"2",champion:"Priest",ability:"Heal",aggro:2,damage:0,block:0,description:"+3 Heal to Target"},{id:"3",champion:"Priest",ability:"Major Heal",aggro:4,damage:0,block:0,description:"+6 Heal to Target"},{id:"4",champion:"Priest",ability:"Siphon Life",aggro:4,damage:2,block:0,description:"+2 Heal to Self"},{id:"5",champion:"Priest",ability:"Buff",aggro:1,damage:0,block:0,description:"+1 Shield to Target. +1 Attack to Target"},{id:"6",champion:"Priest",ability:"Buff",aggro:1,damage:0,block:0,description:"+1 Shield to Target. +1 Attack to Target"},{id:"7",champion:"Priest",ability:"Empower",aggro:2,damage:0,block:0,description:"+2 Shield to Target. +2 Attack to Target"},{id:"8",champion:"Priest",ability:"Cripple",aggro:2,damage:0,block:0,description:"-4 Attacks to Target"},{id:"9",champion:"Priest",ability:"Barrier",aggro:1,damage:0,block:0,description:"+2 Shield to Target"},{id:"10",champion:"Priest",ability:"Barrier",aggro:1,damage:0,block:0,description:"+2 Shield to Target"},{id:"11",champion:"Priest",ability:"Divine Shield",aggro:2,damage:0,block:0,description:"+4 Shield to Target"},{id:"12",champion:"Priest",ability:"Immolation Barrier",aggro:2,damage:0,block:0,description:"+4 Damage to Enemy When Enemy Attacks Target Player"},{id:"13",champion:"Priest",ability:"Calm",aggro:0,damage:0,block:0,description:"-25% Aggro"},{id:"14",champion:"Priest",ability:"Calm",aggro:0,damage:0,block:0,description:"-25% Aggro"},{id:"15",champion:"Priest",ability:"Fear",aggro:2,damage:0,block:0,description:"50% Chance Target Enemy Takes No Action"},{id:"16",champion:"Priest",ability:"Pacify",aggro:0,damage:0,block:0,description:"-50% Aggro"}],stances:[]},{id:"3",champion:"Rogue",cards:[{id:"1",champion:"Rogue",ability:"Stab",aggro:2,damage:2,block:0,description:"No Additional Effect"},{id:"2",champion:"Rogue",ability:"Stab",aggro:2,damage:2,block:0,description:"No Additional Effect"},{id:"3",champion:"Rogue",ability:"Dual Wield",aggro:4,damage:4,block:0,description:"No Additional Effect"},{id:"4",champion:"Rogue",ability:"Hamstring",aggro:4,damage:2,block:0,description:"-2 Attacks to Target"},{id:"5",champion:"Rogue",ability:"Stealth",aggro:0,damage:0,block:0,description:"-25% Aggro"},{id:"6",champion:"Rogue",ability:"Stealth",aggro:0,damage:0,block:0,description:"-25% Aggro"},{id:"7",champion:"Rogue",ability:"Smoke Bomb",aggro:0,damage:0,block:0,description:"25% Chance Boss Takes No Action"},{id:"8",champion:"Rogue",ability:"Vanish",aggro:0,damage:0,block:0,description:"-50% Aggro"},{id:"9",champion:"Rogue",ability:"Poison",aggro:2,damage:0,block:0,description:"3 Poison Tokens to Target for 1+ Damage Each"},{id:"10",champion:"Rogue",ability:"Poison",aggro:2,damage:0,block:0,description:"3 Poison Tokens to Target for 1+ Damage Each"},{id:"11",champion:"Rogue",ability:"Poison",aggro:2,damage:0,block:0,description:"3 Poison Tokens to Target for 1+ Damage Each"},{id:"12",champion:"Rogue",ability:"Poison Trap",aggro:2,damage:0,block:0,description:"If Enemy Attacks Target Player Deal +4 Damage to Enemy and Place 3 Poison Tokens on Enemy for 1+ Damage Each"},{id:"13",champion:"Rogue",ability:"Poisoned Blade",aggro:4,damage:0,block:0,description:"+2 Damage to Target and Place 3 Poison Tokens on Target for +1 Damage Each"},{id:"14",champion:"Rogue",ability:"Preperation",aggro:0,damage:0,block:0,description:"Draw 2 Cards and Play 1"},{id:"15",champion:"Rogue",ability:"Preperation",aggro:0,damage:0,block:0,description:"Draw 2 Cards and Play 1"},{id:"16",champion:"Rogue",ability:"Flurry",aggro:0,damage:0,block:0,description:"Play the Next 2 Cards from Your Deck"},{id:"17",champion:"Rogue",ability:"Master Plan",aggro:0,damage:0,block:0,description:"Select Any Card From Your Deck and Play It"}],stances:[]},{id:"4",champion:"Mage",cards:[{id:"1",champion:"Mage",ability:"Arcane Bolt",aggro:2,damage:2,block:0,description:"No Additional Effects"},{id:"2",champion:"Mage",ability:"Arcane Bolt",aggro:2,damage:2,block:0,description:"No Additional Effects"},{id:"3",champion:"Mage",ability:"Fireball",aggro:4,damage:0,block:0,description:"+4 Damage to Target Place 2 Burn TOkens on Target Dealing 2 Damage Each"},{id:"4",champion:"Mage",ability:"Iceball",aggro:4,damage:0,block:0,description:"+2 Damage to Target -2 Attack to Target Place 2 Chill Tokens on Target Rendering -2 Attack Each"},{id:"5",champion:"Mage",ability:"Illusion",aggro:2,damage:0,block:0,description:"Create an Additional Target with Targeted Players Base Aggro Score Roll Aggro on Illusion"},{id:"6",champion:"Mage",ability:"Illusion",aggro:2,damage:0,block:0,description:"Create an Additional Target with Targeted Players Base Aggro Score Roll Aggro on Illusion"},{id:"7",champion:"Mage",ability:"Ice Illusion",aggro:4,damage:0,block:0,description:"Create an Additional Target with Targeted Players Base Aggro Score Roll Aggro on Illusion If Illusion is Hit, Place 2 Chill Tokens on Attacker Chill Tokens Render -2 Attack Each"},{id:"8",champion:"Mage",ability:"Fire Illusion",aggro:4,damage:0,block:0,description:"Create an Additional Target with Targeted Players Base Aggro Score Roll Aggro on Illusion If Illusion is Hit, Place 2 Burn Tokens on Attacker Burn Tokens Render -2 Attack Each"},{id:"9",champion:"Mage",ability:"Spell Block",aggro:1,damage:0,block:0,description:"Remove 1 Enemy Action Possibly This Round"},{id:"10",champion:"Mage",ability:"Spell Block",aggro:1,damage:0,block:0,description:"Remove 1 Enemy Action Possibly This Round"},{id:"11",champion:"Mage",ability:"Feedback",aggro:4,damage:0,block:0,description:"Enemy Actions Also APply to Themselves This Round"},{id:"12",champion:"Mage",ability:"Brain Freeze",aggro:2,damage:0,block:0,description:"Remove 3 Enemy Action Possiblities This Round"},{id:"13",champion:"Mage",ability:"Fade",aggro:0,damage:0,block:0,description:"-25% Aggro"},{id:"14",champion:"Mage",ability:"Fade",aggro:0,damage:0,block:0,description:"-25% Aggro"},{id:"15",champion:"Mage",ability:"Heat Mirage",aggro:0,damage:0,block:0,description:"-100% Aggro Enemies Ignore Aggro This Round and Attack Players at Random"},{id:"16",champion:"Mage",ability:"Incorporeal Mist",aggro:0,damage:0,block:0,description:"-100% Aggro Cannot Play an Action or Receive Effects Next Round"},{id:"17",champion:"Mage",ability:"Arcane Armor",aggro:0,damage:0,block:0,description:"+1 Burn Token on Attacker if Hit, Burn Token Renders +2 Damage Each, +1 Chill Token on Attacker if Hit Chill Token Renders -2 Attack Each"},{id:"18",champion:"Mage",ability:"Ice Armor",aggro:0,damage:0,block:0,description:"+2 Chill Tokens on Attacker if Hit Chill Token Renders -2 Attack Each"},{id:"19",champion:"Mage",ability:"Fire Armor",aggro:0,damage:0,block:0,description:"+2 Burn TOkens on Attacker if Hit Burn Token Renders +2 Damage Each"}],stances:[]},{id:"5",champion:"Paladin",cards:[{id:"1",champion:"Paladin",ability:"Smite",aggro:3,damage:0,block:0,description:"+1 Damage to Target +1 Heal to Random Player +1 Block to Random Player"},{id:"2",champion:"Paladin",ability:"Smite",aggro:3,damage:1,block:0,description:"+1 Heal to Random Player +1 Block to Random Player"},{id:"3",champion:"Paladin",ability:"Retribution",aggro:3,damage:2,block:0,description:"+1 Heal to Random Player +1 Block to Random Player"},{id:"4",champion:"Paladin",ability:"Holy Smite",aggro:3,damage:2,block:0,description:"+2 Heal to Random Player"},{id:"5",champion:"Paladin",ability:"Smite",aggro:3,damage:0,block:0,description:"+1 Damage to Target +1 Heal to Random Player +1 Block to Random Player"},{id:"6",champion:"Paladin",ability:"Compel",aggro:3,damage:0,block:2,description:"No Additonal Effects"},{id:"7",champion:"Paladin",ability:"Compel",aggro:3,damage:0,block:2,description:"No Additonal Effects"},{id:"8",champion:"Paladin",ability:"Share Burden",aggro:0,damage:0,block:0,description:"Takes 5-% of Target Players Direct Damage Received This Round"},{id:"9",champion:"Paladin",ability:"Intercede",aggro:0,damage:0,block:0,description:"Take 100% of Target Players Direct Damage This Round"},{id:"10",champion:"Paladin",ability:"Blessing of Balance",aggro:2,damage:0,block:0,description:"+1 attack to Target Player +1 Heal to Target Player +1 Block to Target Player"},{id:"11",champion:"Paladin",ability:"Blessing of Balance",aggro:2,damage:0,block:0,description:"+1 attack to Target Player +1 Heal to Target Player +1 Block to Target Player"},{id:"12",champion:"Paladin",ability:"Blessing of Protection",aggro:4,damage:0,block:0,description:"+2 Heal to Target Player +2 Block to Target Player"},{id:"13",champion:"Paladin",ability:"Blessing of Vengeance",aggro:4,damage:0,block:0,description:"+2 Heal to Target Player +2 Attack to Target Player"},{id:"14",champion:"Paladin",ability:"Blessing of Protection",aggro:4,damage:0,block:0,description:"+2 to Target Player +2 Block to Target Player"},{id:"15",champion:"Paladin",ability:"Retreat",aggro:0,damage:0,block:0,description:"-25% Aggro"},{id:"16",champion:"Paladin",ability:"Retreat",aggro:0,damage:0,block:0,description:"-25% Aggro"},{id:"17",champion:"Paladin",ability:"Humility",aggro:0,damage:0,block:0,description:"-50% Aggro"},{id:"18",champion:"Paladin",ability:"Diffuse",aggro:0,damage:0,block:0,description:"-25% Aggro on Target Player"}],stances:[{id:"1",champion:"Paladin",ability:"Aura of Protection",aggro:0,damage:0,block:0,description:"+2 on All Player Block Effects"},{id:"2",champion:"Paladin",ability:"Aura of Vengeance",aggro:0,damage:0,block:0,description:"+2 on All Player Attack Effects"},{id:"3",champion:"Paladin",ability:"Aura of Life",aggro:0,damage:0,block:0,description:"+2 on All Player Heal Effects"}]}];var y=Object(l.b)((function(a){return{health:a.championReducer.health,baseAggro:a.championReducer.baseAggro,lastDiceRoll:a.championReducer.lastDiceRoll,champion:a.championReducer.champion,cards:a.championReducer.cards,currentCardIndex:a.championReducer.currentCardIndex,drawnCards:a.championReducer.drawnCards}}),(function(a){return{selectChampion:function(e){return a(function(a){return{type:"SELECT_CHAMPION",payload:a}}(e))},updateChampionHealth:function(e){return a(function(a){return{type:"UPDATE_CHAMPION_HEALTH",payload:a}}(e))},updateBaseAggro:function(e){return a(function(a){return{type:"UPDATE_CHAMPION_AGGRO",payload:a}}(e))},setDiceRoll:function(e){return a(function(a){return{type:"UPDATE_CHAMPION_ROLL",payload:a}}(e))},drawCards:function(){return a({type:"DRAW_TWO"})}}}))((function(a){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"champion-select",children:Object(o.jsxs)("select",{defaultValue:-1,onChange:function(e){a.selectChampion(u[e.target.value])},children:[Object(o.jsx)("option",{disabled:!0,value:-1,children:"Choose Champion"}),u.map((function(a,e){return Object(o.jsx)("option",{value:e,children:a.champion},a.champion+a.id)}))]})}),Object(o.jsx)(p,{health:a.health,setHealth:a.updateChampionHealth}),Object(o.jsx)(b,{aggro:a.baseAggro,setBaseAggro:a.updateBaseAggro}),Object(o.jsxs)("div",{id:"totalAggro",children:["Total Aggro: ",a.baseAggro+a.lastDiceRoll]}),Object(o.jsx)(h,{min:1,max:20,roll:a.lastDiceRoll,setDiceRoll:a.setDiceRoll}),Object(o.jsx)("button",{disabled:void 0===a.champion,className:"drawCardsButton",onClick:a.drawCards,children:"Draw Cards"}),Object(o.jsx)("section",{className:"cards",children:a.drawnCards.length>0&&a.drawnCards.map((function(a){return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("h3",{children:a.ability}),Object(o.jsxs)("h4",{children:["aggro: ",a.aggro]}),Object(o.jsxs)("h4",{children:["damage: ",a.damage]}),Object(o.jsxs)("h4",{children:["block: ",a.block]}),Object(o.jsxs)("p",{children:["description: ",a.description]})]},a.id)}))})]})}));var k=Object(l.b)((function(a){return{health:a.monsterReducer.health,lastDiceRoll:a.monsterReducer.lastDiceRoll}}),(function(a){return{updateMonsterHealth:function(e){return a(function(a){return{type:"UPDATE_MONSTER_HEALTH",payload:a}}(e))},setDiceRoll:function(e){return a(function(a){return{type:"UPDATE_MONSTER_ROLL",payload:a}}(e))}}}))((function(a){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(p,{health:a.health,setHealth:a.updateMonsterHealth}),Object(o.jsx)(h,{min:1,max:6,roll:a.lastDiceRoll,setDiceRoll:a.setDiceRoll})]})}));var j=Object(l.b)((function(a){return{min:a.customDiceReducer.min,max:a.customDiceReducer.max,lastDiceRoll:a.customDiceReducer.lastDiceRoll}}),(function(a){return{setDiceMin:function(e){return a(function(a){return{type:"UPDATE_MIN",payload:a}}(e))},setDiceMax:function(e){return a(function(a){return{type:"UPDATE_MAX",payload:a}}(e))},setDiceRoll:function(e){return a(function(a){return console.log(a),{type:"UPDATE_CUSTOM_ROLL",payload:a}}(e))}}}))((function(a){return console.log(a),Object(o.jsxs)("div",{className:"hero",children:[Object(o.jsx)("h2",{children:"Custom Dice"}),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)("div",{className:"numContainer",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{children:"Min"}),Object(o.jsx)("input",{type:"number",value:a.min,onChange:function(e){return a.setDiceMin(+e.target.value)}})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{children:"Max"}),Object(o.jsx)("input",{type:"number",value:a.max,onChange:function(e){return a.setDiceMax(+e.target.value)}})]}),Object(o.jsx)("br",{})]}),Object(o.jsx)("button",{onClick:function(){a.setDiceRoll(Math.floor(Math.random()*(a.max-a.min+1)+a.min))},children:"Roll Dice"})]}),Object(o.jsx)("div",{className:"randomNum",children:Object(o.jsxs)("p",{children:["You rolled a ",Object(o.jsx)("span",{children:a.lastDiceRoll})]})})]})}));i(35);var f=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Paper Dungeon Scoreboard"}),Object(o.jsxs)(g.a,{children:[Object(o.jsxs)("nav",{id:"nav",children:[Object(o.jsx)("li",{id:"li",children:Object(o.jsx)(g.b,{id:"a",to:"/",children:"Champion"})}),Object(o.jsx)("li",{id:"li",children:Object(o.jsx)(g.b,{id:"a",to:"/Monster",children:"Monster"})}),Object(o.jsx)("li",{id:"li",children:Object(o.jsx)(g.b,{id:"a",to:"/CustomDice",children:"Custom Dice"})})]}),Object(o.jsxs)(s.c,{children:[Object(o.jsx)(s.a,{exact:!0,path:"/",children:Object(o.jsx)(y,{})}),Object(o.jsx)(s.a,{path:"/Monster",children:Object(o.jsx)(k,{})}),Object(o.jsx)(s.a,{path:"/CustomDice",children:Object(o.jsx)(j,{})})]})]})]})},A=i(3);function P(a){for(var e=a.slice(),i=e.length-1;i>0;i--){var o=Math.floor(Math.random()*i),t=e[i];e[i]=e[o],e[o]=t}return e}var O={health:0,baseAggro:0,lastDiceRoll:0,drawnCards:[]},T=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SELECT_CHAMPION":return Object(A.a)(Object(A.a)({},a),{},{champion:e.payload.champion,cards:P(e.payload.cards),stance:e.payload.stance,currentCardIndex:0});case"DRAW_TWO":var i=a.currentCardIndex+2,o=a.cards;return a.cards.length-i<2&&(P(o),i=0),Object(A.a)(Object(A.a)({},a),{},{drawnCards:[a.cards[a.currentCardIndex],a.cards[a.currentCardIndex+1]],currentCardIndex:i,cards:o});case"UPDATE_CHAMPION_HEALTH":return Object(A.a)(Object(A.a)({},a),{},{health:e.payload});case"UPDATE_CHAMPION_AGGRO":return Object(A.a)(Object(A.a)({},a),{},{baseAggro:e.payload});case"UPDATE_CHAMPION_ROLL":return Object(A.a)(Object(A.a)({},a),{},{lastDiceRoll:e.payload});default:return a}},R={health:0,lastDiceRoll:0},D=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"UPDATE_MONSTER_HEALTH":return Object(A.a)(Object(A.a)({},a),{},{health:e.payload});case"UPDATE_MONSTER_ROLL":return Object(A.a)(Object(A.a)({},a),{},{lastDiceRoll:e.payload});default:return a}},x={min:1,max:20,lastDiceRoll:0},E=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"UPDATE_MIN":return Object(A.a)(Object(A.a)({},a),{},{min:e.payload});case"UPDATE_MAX":return Object(A.a)(Object(A.a)({},a),{},{max:e.payload});case"UPDATE_CUSTOM_ROLL":return Object(A.a)(Object(A.a)({},a),{},{lastDiceRoll:e.payload});default:return a}},C=Object(d.b)({championReducer:T,monsterReducer:D,customDiceReducer:E}),M=Object(d.c)(C);n.a.render(Object(o.jsx)(l.a,{store:M,children:Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(f,{})})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.1ffb43af.chunk.js.map