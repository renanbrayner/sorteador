(this.webpackJsonpsorteador=this.webpackJsonpsorteador||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(6),r=n.n(l),o=(n(12),n(3)),u=n(4);n(13),n(14);var i=function(e){var t=e.handleDraw;return c.a.createElement("div",{className:"Button"},c.a.createElement("button",{onClick:t},"SORTEAR"))};n(15);var m=function(e){var t=e.handleChange,n=e.newItem,a=e.handleAddItem,l=e.itens,r=e.deleteAll;return c.a.createElement("div",{className:"Sorter"},c.a.createElement("form",{className:"flex",onSubmit:a},c.a.createElement("input",{placeholder:"Novo Item",onChange:t,value:n}),c.a.createElement("button",{type:"submit"},"ADICIONAR ITEM")),c.a.createElement("p",{onClick:r},"excluir todos"),c.a.createElement("ol",null,l))};var s=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],l=t[1],r=Object(a.useState)(""),s=Object(u.a)(r,2),d=s[0],f=s[1],v=n.map((function(e,t){return c.a.createElement("li",{key:t,id:t}," ",t+1,". ",e,"  ",c.a.createElement("span",{onClick:function(){return function(e){h();var t=Object(o.a)(n);t.splice(e,1),l(t)}(t)}},"excluir")," ")})),E=function(e,t){return e+Math.floor((t-e)*Math.random())},h=function(){var e=document.querySelectorAll("li");[].forEach.call(e,(function(e){e.className=""}))},p=function(e){document.getElementById("".concat(e)).className="selected"};return c.a.createElement("div",{className:"App"},c.a.createElement(i,{handleDraw:function(){var e=n.length;if(!(e<=0)){var t=E(0,e);h(),p(t),console.log("ativei")}}}),c.a.createElement(m,{handleChange:function(e){f(e.target.value)},newItem:d,handleAddItem:function(e){e.preventDefault(),l([].concat(Object(o.a)(n),[d]))},itens:v,deleteAll:function(){l([])}}))};r.a.render(c.a.createElement(s,null),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.4a3fb58e.chunk.js.map