(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(6),l=c.n(a),r=(c(12),c(7)),i=c(3),o=c(0),j=function(e){var t=Object(s.useState)(!1),c=Object(i.a)(t,2),n=c[0],a=c[1],l=e.removeTask,r=e.index,j=e.task;return Object(o.jsxs)("div",{className:"bg-white rounded-sm p-4 mx-4 mt-3 text-gray-800 flex items-center",children:[Object(o.jsx)("div",{onMouseEnter:function(){return a(!0)},onMouseLeave:function(){return a(!1)},onClick:function(){return l(r)},children:n?Object(o.jsx)("i",{className:"far fa-check-circle mr-3"}):Object(o.jsx)("i",{className:"far fa-circle mr-3"})}),j]})};var x=function(){var e=Object(s.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(""),l=Object(i.a)(a,2),x=l[0],d=l[1],m=function(e){n(c.filter((function(t,c){return e!==c})))};return Object(o.jsxs)("div",{className:"flex h-screen text-white",children:[Object(o.jsxs)("div",{className:"w-2/5 bg-gradient-to-b from-purple-500 to-purple-700 flex flex-col",children:[Object(o.jsx)("img",{src:"assets/note.png",alt:"",className:"max-w-2xl max-h-2xl"}),Object(o.jsxs)("div",{className:"flex flex-col p-6 flex-1 justify-between",children:[Object(o.jsxs)("div",{className:"flex flex-col",children:[Object(o.jsx)("h1",{className:"text-5xl my-4",children:"Todo App"}),Object(o.jsx)("textarea",{placeholder:"What's on your mind?",className:"p-2 rounded-sm w-3/4 mt-4 text-gray-800",rows:"4",value:x,onChange:function(e){return d(e.target.value)}}),Object(o.jsx)("button",{className:"p-2 bg-blue-500 rounded-sm w-2/5 mt-8 hover:bg-blue-600",onClick:function(){x&&(n([x].concat(Object(r.a)(c))),d(""))},children:"Add Task"})]}),Object(o.jsx)("p",{children:"From @steven with love \ud83d\udc9b"})]})]}),Object(o.jsx)("div",{className:"w-3/5 bg-gradient-to-b from-pink-500 to-pink-600 flex flex-col pt-8",children:c.length?Object(o.jsx)("div",{className:"flex flex-col overflow-y-auto pb-6",children:c.map((function(e,t){return Object(o.jsx)(j,{task:e,index:t,removeTask:m},t)}))}):Object(o.jsxs)("div",{className:"flex flex-col items-center",children:[Object(o.jsx)("img",{alt:"",src:"assets/lazycat.png",className:"mt-12"}),Object(o.jsx)("h1",{className:"text-2xl my-4",children:"Your day is currently empty"}),Object(o.jsx)("h2",{children:"Let's fulfill it ;)"})]})})]})};l.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(x,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.5c4450c2.chunk.js.map