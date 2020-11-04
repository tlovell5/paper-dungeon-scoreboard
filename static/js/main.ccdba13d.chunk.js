(this["webpackJsonppaper-dungeon-scoreboard"]=this["webpackJsonppaper-dungeon-scoreboard"]||[]).push([[0],{35:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(0),r=c.n(a),s=c(15),i=c.n(s),j=c(12),l=c(11),o=c(14),b=c(3),u=c(5);var d=function(e){var t=Object(a.useState)(0),c=Object(u.a)(t,2),r=c[0],s=c[1];function i(t){if(!(0===r&&t<0)){var c=r+t;s(c),e.setBaseAggro(c)}}return Object(n.jsxs)("div",{className:"grid-container",children:[Object(n.jsx)("h1",{className:"name",children:"Aggro"}),Object(n.jsx)("button",{className:"decrease",onClick:function(){return i(-1)},children:"-"}),Object(n.jsx)("h1",{className:"number",children:e.aggro}),Object(n.jsx)("button",{className:"increase",onClick:function(){return i(1)},children:"+"})]})};var h=function(e){var t=e.min,c=e.max,r=Object(a.useState)(Math.floor(Math.random()*(c-t+1)+t)),s=Object(u.a)(r,2),i=s[0],j=s[1];return Object(n.jsxs)("div",{className:"grid-container-two",children:[Object(n.jsx)("button",{className:"diceButton",onClick:function(){var n=Math.floor(Math.random()*(c-t+1)+t);j(n),e.setDiceRoll(n)},children:"Roll Dice"}),Object(n.jsx)("h1",{className:"dice",children:Object(n.jsx)("span",{children:i})})]})};var O=function(e){var t=Object(a.useState)(0),c=Object(u.a)(t,2),r=c[0],s=c[1];function i(t){if(!(0===r&&t<0)){var c=r+t;s(c),e.setHealth(c)}}return Object(n.jsxs)("div",{className:"grid-container",children:[Object(n.jsx)("h1",{className:"name",children:"Health"}),Object(n.jsx)("button",{className:"decrease",onClick:function(){return i(-1)},children:"-"}),Object(n.jsx)("h1",{className:"number",children:e.health}),Object(n.jsx)("button",{className:"increase",onClick:function(){return i(1)},children:"+"})]})};var x=Object(j.b)((function(e){return{health:e.championReducer.health,baseAggro:e.championReducer.baseAggro,lastDiceRoll:e.championReducer.lastDiceRoll}}),(function(e){return{updateChampionHealth:function(t){return e(function(e){return{type:"UPDATE_CHAMPION_HEALTH",payload:e}}(t))},updateBaseAggro:function(t){return e(function(e){return{type:"UPDATE_CHAMPION_AGGRO",payload:e}}(t))},setDiceRoll:function(t){return e(function(e){return{type:"UPDATE_CHAMPION_ROLL",payload:e}}(t))}}}))((function(e){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(O,{health:e.health,setHealth:e.updateChampionHealth}),Object(n.jsx)(d,{aggro:e.baseAggro,setBaseAggro:e.updateBaseAggro}),Object(n.jsxs)("div",{id:"totalAggro",children:["Total Aggro: ",e.baseAggro+e.lastDiceRoll]}),Object(n.jsx)(h,{min:1,max:20,setDiceRoll:e.setDiceRoll})]})}));var m=Object(j.b)((function(e){return{}}),(function(e){return{}}))((function(){var e=Object(a.useState)(0),t=Object(u.a)(e,2),c=t[0],r=t[1],s=Object(a.useState)(0),i=Object(u.a)(s,2),j=i[0],l=i[1],o=Object(a.useState)(0),b=Object(u.a)(o,2),x=(b[0],b[1]);return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(O,{health:c,setHealth:r}),Object(n.jsx)(d,{aggro:j,setBaseAggro:l}),Object(n.jsx)(h,{min:1,max:6,setDiceRoll:x})]})}));var g=function(){var e=Object(a.useState)(1),t=Object(u.a)(e,2),c=t[0],r=t[1],s=Object(a.useState)(20),i=Object(u.a)(s,2),j=i[0],l=i[1],o=Object(a.useState)(5),b=Object(u.a)(o,2),d=b[0],h=b[1];return Object(n.jsxs)("div",{className:"hero",children:[Object(n.jsx)("h2",{children:"Custom Dice"}),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("div",{className:"numContainer",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{children:"Min"}),Object(n.jsx)("input",{type:"number",value:c,onChange:function(e){return r(+e.target.value)}})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{children:"Max"}),Object(n.jsx)("input",{type:"number",value:j,onChange:function(e){return l(+e.target.value)}})]}),Object(n.jsx)("br",{})]}),Object(n.jsx)("button",{onClick:function(){h(Math.floor(Math.random()*(j-c+1)+c))},children:"Roll Dice"})]}),Object(n.jsx)("div",{className:"randomNum",children:Object(n.jsxs)("p",{children:["You rolled a ",Object(n.jsx)("span",{children:d})]})})]})};c(35);var p=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Paper Dungeon Scoreboard"}),Object(n.jsxs)(o.a,{children:[Object(n.jsxs)("nav",{id:"nav",children:[Object(n.jsx)("li",{id:"li",children:Object(n.jsx)(o.b,{id:"a",to:"/",children:"Champion"})}),Object(n.jsx)("li",{id:"li",children:Object(n.jsx)(o.b,{id:"a",to:"/Monster",children:"Monster"})}),Object(n.jsx)("li",{id:"li",children:Object(n.jsx)(o.b,{id:"a",to:"/CustomDice",children:"Custom Dice"})})]}),Object(n.jsxs)(b.c,{children:[Object(n.jsx)(b.a,{exact:!0,path:"/",children:Object(n.jsx)(x,{})}),Object(n.jsx)(b.a,{path:"/Monster",children:Object(n.jsx)(m,{})}),Object(n.jsx)(b.a,{path:"/CustomDice",children:Object(n.jsx)(g,{})})]})]})]})},f=c(9),v={health:0,baseAggro:0,lastDiceRoll:0},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_CHAMPION_HEALTH":return Object(f.a)(Object(f.a)({},e),{},{health:t.payload});case"UPDATE_CHAMPION_AGGRO":return Object(f.a)(Object(f.a)({},e),{},{baseAggro:t.payload});case"UPDATE_CHAMPION_ROLL":return Object(f.a)(Object(f.a)({},e),{},{lastDiceRoll:t.payload});default:return e}},N=Object(l.b)({championReducer:A}),D=Object(l.c)(N);i.a.render(Object(n.jsx)(j.a,{store:D,children:Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(p,{})})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.ccdba13d.chunk.js.map