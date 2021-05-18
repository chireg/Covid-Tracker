(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{118:function(e,t,n){},120:function(e,t,n){},121:function(e,t,n){},233:function(e,t,n){},234:function(e,t,n){},237:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(7),r=n.n(s),o=(n(118),n(27)),i=n.n(o),l=n(44),u=n(13),d=(n(120),n(272)),j=n(273),f=n(274),h=n(264),b=n(268),v=n(25),p=n(269),O=(n(121),n(3));var x=function(e){var t=e.title,n=e.cases,c=e.total,a=e.active,s=e.isRed,r=Object(v.a)(e,["title","cases","total","active","isRed"]);return console.log(t,a),Object(O.jsx)(h.a,{onClick:r.onClick,className:"infoBox ".concat(a&&"infoBox--selected"," ").concat(s&&"infoBox--red"),children:Object(O.jsxs)(b.a,{children:[Object(O.jsx)(p.a,{color:"textSecondary",gutterBottom:!0,children:t}),Object(O.jsx)("h2",{className:"infoBox__cases ".concat(!s&&"infoBox__cases--green"),children:n}),Object(O.jsxs)(p.a,{className:"infoBox__total",color:"textSecondary",children:[c," Total"]})]})})},m=n(107),g=n(14),y=n.n(g),w={legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return y()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,n){return y()(e).format("0a")}}}]}},_=function(e,t){var n,c=[];for(var a in e.cases){if(n){var s={x:a,y:e[t][a]-n};c.push(s)}n=e[t][a]}return c};var C=function(e){var t=e.casesType,n=Object(c.useState)({}),a=Object(u.a)(n,2),s=a[0],r=a[1];return Object(c.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120").then((function(e){return e.json()})).then((function(e){var n=_(e,t);r(n),console.log(n)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(O.jsx)("div",{children:(null===s||void 0===s?void 0:s.length)>0&&Object(O.jsx)(m.a,{data:{datasets:[{backgroundColor:"rgba(204, 16, 52, 0.5)",borderColor:"#CC1034",data:s}]},options:w})})};n(233);var k=function(e){var t=e.countries;return Object(O.jsx)("div",{className:"table",children:t.map((function(e){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:e.country}),Object(O.jsx)("td",{children:Object(O.jsx)("strong",{children:y()(e.cases).format("0,0")})})]})}))})},N=n(10),S=n(275),B=n(270),I={cases:{hex:"#CC1034",rgb:"rgb(204, 16, 52)",half_op:"rgba(204, 16, 52, 0.5)",multiplier:800},recovered:{hex:"#7dd71d",rgb:"rgb(125, 215, 29)",half_op:"rgba(125, 215, 29, 0.5)",multiplier:1200},deaths:{hex:"#fb4443",rgb:"rgb(251, 68, 67)",half_op:"rgba(251, 68, 67, 0.5)",multiplier:2e3}},R=function(e){var t=Object(N.a)(e);return t.sort((function(e,t){return e.cases>t.cases?-1:1})),t},D=function(e){return e?"+".concat(y()(e).format("0.0a")):"+0"},T=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases";return e.map((function(e){return Object(O.jsx)(S.a,{center:[e.countryInfo.lat,e.countryInfo.long],color:I[t].hex,fillColor:I[t].hex,fillOpacity:.4,radius:Math.sqrt(e[t])*I[t].multiplier,children:Object(O.jsx)(B.a,{children:Object(O.jsxs)("div",{className:"info-container",children:[Object(O.jsx)("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),Object(O.jsx)("div",{className:"info-name",children:e.country}),Object(O.jsxs)("div",{className:"info-confirmed",children:["Cases: ",y()(e.cases).format("0,0")]}),Object(O.jsxs)("div",{className:"info-recovered",children:["Recovered: ",y()(e.recovered).format("0,0")]}),Object(O.jsxs)("div",{className:"info-deaths",children:["Deaths: ",y()(e.deaths).format("0,0")]})]})})})}))},M=n(271),z=n(276);n(234);var E=function(e){var t=e.countries,n=e.casesType,c=e.center,a=e.zoom;return Object(O.jsx)("div",{className:"map",children:Object(O.jsxs)(M.a,{center:c,zoom:a,children:[Object(O.jsx)(z.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),T(t,n)]})})},W=(n(235),function(){var e=Object(c.useState)("worldwide"),t=Object(u.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)({}),r=Object(u.a)(s,2),o=r[0],v=r[1],p=Object(c.useState)([]),m=Object(u.a)(p,2),g=m[0],w=m[1],_=Object(c.useState)([]),N=Object(u.a)(_,2),S=N[0],B=N[1],I=Object(c.useState)([]),T=Object(u.a)(I,2),M=T[0],z=T[1],W=Object(c.useState)("cases"),A=Object(u.a)(W,2),J=A[0],L=A[1],Y=Object(c.useState)({lat:34.80746,lng:-40.4796}),q=Object(u.a)(Y,2),F=q[0],V=q[1],$=Object(c.useState)(3),G=Object(u.a)($,2),H=G[0],K=G[1];Object(c.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){v(e)}))}),[]),Object(c.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),n=R(e);w(t),B(e),z(n)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),console.log(J);var P=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.value,c="worldwide"===n?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(n),e.next=4,fetch(c).then((function(e){return e.json()})).then((function(e){a(n),v(e),V([e.countryInfo.lat,e.countryInfo.long]),K(4)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"app",children:[Object(O.jsxs)("div",{className:"app__left",children:[Object(O.jsxs)("div",{className:"app__header",children:[" ",Object(O.jsx)("h1",{children:"COVID-19 Tracker"}),Object(O.jsx)(d.a,{className:"app__dropdown",children:Object(O.jsxs)(j.a,{variant:"outlined",value:n,onChange:P,children:[Object(O.jsx)(f.a,{value:"worldwide",children:"Worldwide"}),g.map((function(e){return Object(O.jsx)(f.a,{value:e.value,children:e.name})}))]})})]}),Object(O.jsxs)("div",{className:"app__stats",children:[" ",Object(O.jsx)(x,{onClick:function(e){return L("cases")},title:"Coronavirus Cases",isRed:!0,active:"cases"===J,cases:D(o.todayCases),total:y()(o.cases).format("0.0a")}),Object(O.jsx)(x,{onClick:function(e){return L("recovered")},title:"Recovered",active:"recovered"===J,cases:D(o.todayRecovered),total:y()(o.recovered).format("0.0a")}),Object(O.jsx)(x,{onClick:function(e){return L("deaths")},title:"Deaths",isRed:!0,active:"deaths"===J,cases:D(o.todayDeaths),total:y()(o.deaths).format("0.0a")})]}),Object(O.jsx)(E,{countries:S,casesType:J,center:F,zoom:H})]}),Object(O.jsx)(h.a,{className:"app__right",children:Object(O.jsxs)(b.a,{children:["  ",Object(O.jsxs)("div",{className:"app__information",children:[Object(O.jsx)("h3",{children:"Live Cases by Country"}),Object(O.jsx)(k,{countries:M}),Object(O.jsxs)("h3",{children:["Worldwide new ",J]}),Object(O.jsx)(C,{casesType:J})]})]})})]})});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(W,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[237,1,2]]]);
//# sourceMappingURL=main.bc2e530c.chunk.js.map