(this.webpackJsonpfriendlies=this.webpackJsonpfriendlies||[]).push([[0],{33:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(1),s=a.n(n),r=a(21),l=a.n(r),i=a(13),d=a(9),j=a(2);var o=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("div",{className:"navbar",style:{backgroundColor:"#ef838b"},children:Object(c.jsx)("nav",{className:"nav nav-pills nav-fill",children:Object(c.jsx)(d.c,{className:"nav-link",to:"/",children:Object(c.jsx)("li",{className:"nav-item",style:{color:"white"},children:"Home"})})})})})};var u=a(6),h=a(11),b=a(8);function m(e){switch(e.length){case 4:return function(e){for(var t=[],a=Object(h.a)(e),c=0,n=2,s=1,r=3,l=1;l<=3;l++){var i={rid:l,matches:[{mid:"".concat(l,"A"),match:"A",teamA:{ids:[a[c].id,a[n].id],values:[a[c].value,a[n].value]},teamB:{ids:[a[s].id,a[r].id],values:[a[s].value,a[r].value]},selected:"none"}]};a=v(a,!0),t.push(i)}return t}(e);case 5:return function(e){for(var t=[],a=Object(h.a)(e),c=2,n=3,s=4,r=1,l=1;l<=5;l++){var i={rid:l,matches:[{mid:"".concat(l,"A"),match:"A",teamA:{ids:[a[c].id,a[n].id],values:[a[c].value,a[n].value]},teamB:{ids:[a[s].id,a[r].id],values:[a[s].value,a[r].value]},selected:"none"}]};a=v(a,!1),t.push(i)}return t}(e);case 6:return;case 8:return function(e){for(var t=[],a=Object(h.a)(e),c=2,n=3,s=4,r=6,l=5,i=1,d=7,j=0,o=1;o<=7;o++){var u={rid:o,matches:[{mid:"".concat(o,"A"),match:"A",teamA:{ids:[a[c].id,a[n].id],values:[a[c].value,a[n].value]},teamB:{ids:[a[s].id,a[r].id],values:[a[s].value,a[r].value]},selected:"none"},{mid:"".concat(o,"B"),match:"B",teamA:{ids:[a[l].id,a[i].id],values:[a[l].value,a[i].value]},teamB:{ids:[a[d].id,a[j].id],values:[a[d].value,a[j].value]},selected:"none"}]};a=v(a,!0),t.push(u)}return t}(e);case 12:return function(e){for(var t=[],a=Object(h.a)(e),c=2,n=3,s=1,r=6,l=8,i=10,d=4,j=7,o=5,u=9,b=11,m=0,O=1;O<=11;O++){var x={rid:O,matches:[{mid:"".concat(O,"A"),match:"A",teamA:{ids:[a[c].id,a[n].id],values:[a[c].value,a[n].value]},teamB:{ids:[a[s].id,a[r].id],values:[a[s].value,a[r].value]},selected:"none"},{mid:"".concat(O,"B"),match:"B",teamA:{ids:[a[l].id,a[i].id],values:[a[l].value,a[i].value]},teamB:{ids:[a[d].id,a[j].id],values:[a[d].value,a[j].value]},selected:"none"},{mid:"".concat(O,"C"),match:"C",teamA:{ids:[a[o].id,a[u].id],values:[a[o].value,a[u].value]},teamB:{ids:[a[b].id,a[m].id],values:[a[b].value,a[m].value]},selected:"none"}]};a=v(a,!0),t.push(x)}return t}(e)}}function v(e,t){for(var a=t?e.length-1:e.length,c=e[0],n=0;n<a;n++)e[n]=e[n+1];return e[a-1]=c,e}var O=function(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{className:"text-center text-white",children:Object(c.jsx)("strong",{children:"Scoreboard"})}),Object(c.jsxs)("table",{className:"table table-striped table-borderless text-white",style:{backgroundColor:"#ef838b"},children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"col",children:"Player"}),Object(c.jsx)("th",{scope:"col",children:"Wins"}),Object(c.jsx)("th",{scope:"col",children:"Losses"})]})}),Object(c.jsx)("tbody",{children:e.playerList.map((function(e){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"row",children:e.value}),Object(c.jsx)("td",{children:e.wins}),Object(c.jsx)("td",{children:e.losses})]})}))})]})]})};var x=function(e){return Object(c.jsxs)("div",{children:[void 0!==e.match?Object(c.jsx)("h6",{children:"Match ".concat(e.match)}):"",Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-5",children:"".concat(e.teamA.values[0]," & ").concat(e.teamA.values[1])}),Object(c.jsx)("div",{className:"col-2",children:"VS"}),Object(c.jsx)("div",{className:"col-5",children:"".concat(e.teamB.values[0]," & ").concat(e.teamB.values[1])})]}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"form-check inline col-5",children:Object(c.jsx)("input",{className:"form-check-input",name:e.mid,type:"radio",value:"teamA",checked:"teamA"===e.selected,onChange:function(t){return e.handleChange(t,e.teamA.ids,e.teamB.ids,e.selected,e.rid)}})}),Object(c.jsx)("div",{className:"col-2"}),Object(c.jsx)("div",{className:"form-check inline col-5",children:Object(c.jsx)("input",{className:"form-check-input",name:e.mid,type:"radio",value:"teamB",checked:"teamB"===e.selected,onChange:function(t){return e.handleChange(t,e.teamB.ids,e.teamA.ids,e.selected,e.rid)}})})]}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{})]})};var f=function(e){var t=e.matches.map((function(t){return Object(c.jsx)("div",{children:Object(c.jsx)(x,{mid:t.mid,rid:e.rid,selected:t.selected,match:t.match,teamA:t.teamA,teamB:t.teamB,handleChange:e.handleChange},t.mid)})}));return Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"card text-center text-white",style:{backgroundColor:"#E8A87C"},children:[Object(c.jsx)("div",{className:"card-header",children:Object(c.jsx)("h5",{children:"Round ".concat(e.rid)})}),Object(c.jsx)("br",{}),t,Object(c.jsx)("br",{})]}),Object(c.jsx)("br",{})]})};var p=function(e){var t=Object(n.useState)(!1),a=Object(b.a)(t,2),s=a[0],r=a[1],l=Object(n.useState)([]),i=Object(b.a)(l,2),d=i[0],j=i[1],o=Object(n.useState)([]),v=Object(b.a)(o,2),x=v[0],p=v[1];function g(e,t,a,c,n){var s=e.target,r=s.name,l=s.value,i=x.map((function(e){return e.rid===n?Object(u.a)(Object(u.a)({},e),{},{matches:e.matches.map((function(e){return e.mid===r?Object(u.a)(Object(u.a)({},e),{},{selected:l}):e}))}):e})),o=d.map((function(e){return e.id===t[0]||e.id===t[1]?Object(u.a)(Object(u.a)({},e),{},{wins:e.wins+1,losses:"none"===c?e.losses:e.losses-1}):e.id===a[0]||e.id===a[1]?Object(u.a)(Object(u.a)({},e),{},{wins:"none"===c?e.wins:e.wins-1,losses:e.losses+1}):e}));p(i),j(o)}return Object(n.useEffect)((function(){"undefined"===typeof e.location.state||s||(r(!0),j(Object(h.a)(e.location.state)),p(m(e.location.state)))}),[]),Object(c.jsx)("div",{className:"",children:s?Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("h3",{className:"text-center text-white",children:Object(c.jsx)("strong",{children:"Bracket"})}),x.map((function(e){return Object(c.jsx)(f,{rid:e.rid,matches:e.matches,handleChange:g},e.rid)})),Object(c.jsx)("hr",{}),Object(c.jsx)(O,{playerList:d,numRounds:x.length})]}):Object(c.jsx)("h1",{children:"You need to create a new game first!"})})};var g=function(e){return Object(c.jsx)("div",{className:"form-check form-check-inline",children:Object(c.jsx)("input",{className:"btn btn-secondary",type:"button",name:e.name,value:e.value,onClick:e.handleChange})})};var N=function(e){return Object(c.jsx)("div",{className:"form-group col",children:Object(c.jsx)("input",{className:"form-control",type:"text",id:e.id,name:e.name,value:e.value,placeholder:e.placeholder,onChange:e.handleChange})})};var y=function(){var e=Object(n.useState)(0),t=Object(b.a)(e,2),a=t[0],s=t[1],r=Object(n.useState)([]),l=Object(b.a)(r,2),i=l[0],d=l[1],o=Object(n.useState)(!1),h=Object(b.a)(o,2),m=h[0],v=h[1],O=Object(j.f)();function x(e){var t=e.target,c=t.type,n=t.value;if("text"===c){var r=e.target.id;d((function(e){return e.map((function(e){return e.id==r?Object(u.a)(Object(u.a)({},e),{},{value:n}):e}))}))}else a!==n&&(s(n),function(e){for(var t=[],a=0;a<e;a++){var c={id:a,placeholder:"Player ".concat(a+1),name:"playerName",value:"",wins:0,losses:0};t.push(c)}d(t)}(n))}return Object(n.useEffect)((function(){for(var e=0;e<a;e++)if(""===i[e].value)return void v(!1);v(!0)}),[i,a]),Object(c.jsx)("div",{children:Object(c.jsxs)("div",{class:"jumbotron container-sm",align:"center",children:[Object(c.jsx)("h1",{className:"display-4",children:"Friendlies"}),Object(c.jsx)("p",{className:"lead",children:"A round-robin bracket generator for rotating doubles"}),Object(c.jsx)("hr",{className:"my-4"}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h5",{children:"Select Number of Players"}),Object(c.jsxs)("div",{className:"btn-group",role:"group",children:[Object(c.jsx)(g,{handleChange:x,name:"playerCount",value:4}),Object(c.jsx)(g,{handleChange:x,name:"playerCount",value:5}),Object(c.jsx)(g,{handleChange:x,name:"playerCount",value:8}),Object(c.jsx)(g,{handleChange:x,name:"playerCount",value:12})]})]}),Object(c.jsx)("br",{}),a>0?Object(c.jsxs)("div",{children:[Object(c.jsx)("h5",{children:"Enter Player Names"}),Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),O.push("/bracket",i)},children:[i.map((function(e){return Object(c.jsx)(N,{placeholder:e.placeholder,name:e.name,value:e.value,id:e.id,handleChange:x},e.id)})),Object(c.jsx)("button",{className:"btn",style:m?{color:"white",backgroundColor:"#ef838b"}:{backgroundColor:"grey"},disabled:!m,children:"Generate Bracket!"})]})]}):null]})})};var C=function(){var e;return Object(c.jsx)(d.b,{basename:"/",children:Object(c.jsxs)(d.a,{children:[Object(c.jsx)(o,{}),Object(c.jsx)("div",{className:"p-3 container",children:Object(c.jsxs)(j.c,{children:[Object(c.jsx)(j.a,{path:"/bracket",exact:!0,component:p}),Object(c.jsx)(j.a,(e={exact:!0,path:"/"},Object(i.a)(e,"exact",!0),Object(i.a)(e,"component",y),e))]})})]})})};l.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(C,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.2cc0bf47.chunk.js.map