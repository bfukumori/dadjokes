(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{263:function(e,t,n){"use strict";n.r(t);var r=n(9),o=(n(58),n(73)),c=n.n(o),l={data:function(){return{joke:{}}},created:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={headers:{Accept:"application/json"}},t.prev=1,t.next=4,c.a.get("https://icanhazdadjoke.com/j/".concat(e.$route.params.id),n);case 4:r=t.sent,e.joke=r.data,t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))()}},k=n(31),component=Object(k.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("NuxtLink",{attrs:{to:"/jokes"}},[e._v("Back To Tokes ")]),e._v(" "),n("h2",[e._v(e._s(e.joke.joke))]),e._v(" "),n("hr"),e._v(" "),n("small",[e._v("Joke ID: "+e._s(e.joke.id))])],1)}),[],!1,null,null,null);t.default=component.exports}}]);