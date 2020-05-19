(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),o=n.n(c),s=n(5),u=n.n(s),l=n(6),i=n(9),m=n(4),b=(n(16),function(e){return fetch("https://jsonplaceholder.typicode.com/"+e).then((function(e){return e.json()}))}),d=function(e){var t,n=e.todo;return r.a.createElement("li",{className:"card",key:n.id},r.a.createElement("br",null),r.a.createElement("span",{className:"card__number"},n.id),r.a.createElement("p",null,r.a.createElement("strong",null,"User: "),r.a.createElement("i",{className:"user__name"},null===(t=n.user)||void 0===t?void 0:t.name)),r.a.createElement("p",null,r.a.createElement("strong",null,"To-do: "),r.a.createElement("i",null,n.title)),r.a.createElement("p",null,r.a.createElement("strong",null,"Complete: "),n.completed?r.a.createElement("span",{className:"todo__done"},"Done"):r.a.createElement("span",{className:"todo__notDone"},"In process")))},p=n(2),f=function(){var e=Object(a.useState)(""),t=Object(m.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(!1),s=Object(m.a)(o,2),f=s[0],E=s[1],j=Object(a.useState)([]),y=Object(m.a)(j,2),O=y[0],N=y[1],h=function(){var e=Object(i.a)(u.a.mark((function e(){var t,n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(!0),e.next=3,b("todos");case 3:return t=e.sent,e.next=6,b("users");case 6:n=e.sent,a=t.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{user:n.find((function(t){return t.id===e.userId}))})})),N(a);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=Object(a.useMemo)((function(){return function(e,t){switch(t){case"title":return Object(p.a)(e).sort((function(e,t){return e.title.localeCompare(t.title)}));case"id":return Object(p.a)(e).sort((function(e,t){return e.id-t.id}));case"userName":return Object(p.a)(e).sort((function(e,t){return e.user&&t.user?e.user.name.localeCompare(t.user.name):0}));case"status":return Object(p.a)(e).sort((function(e,t){return+e.completed-+t.completed}));default:return e}}(O,n)}),[O,n]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"title"},"Dynamic list of TODOs"),O.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"btn sort-title-btn",type:"button",onClick:function(){return c("title")}},"Sort by title"),r.a.createElement("button",{className:"btn sort-user-btn",type:"button",onClick:function(){return c("userName")}},"Sort by user"),r.a.createElement("button",{className:"btn sort-status-btn",type:"button",onClick:function(){return c("status")}},"Sort by status"),r.a.createElement("button",{className:"btn reset-btn",type:"button",onClick:function(){return c("id")}},"Reset"),r.a.createElement("ul",{className:"list"},k.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(d,{todo:e}))})))):r.a.createElement("button",{className:"btn load-btn",type:"button",onClick:h,disabled:f},f?"Loading...":"Load"))};o.a.render(r.a.createElement(f,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.7b896567.chunk.js.map