(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),s=(n(14),n(3)),i=n(4),l=n(6),u=n(5),h=n(7);var m=function(e){var t=e.sources;return r.a.createElement("div",null,t.map(function(e,n){return r.a.createElement("button",{className:"black br3 pa3 ma2 grow shadow-5 dib bg-yellow classify starwars"},t[n])}))};var p=function(e){var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"tc br3 pa3 ba b--yellow bg-light-yellow",type:"search",placeholder:"search categories",onChange:t}))};var d=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"50px solid black",height:"800px"}},e.children)},f=(n(15),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).componentDidMount=function(){fetch("https://swapi.co/api/").then(function(e){return e.json()}).then(function(t){return e.setState({sources:Object.keys(t)})})},e.onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.onSourceChange=function(t){fetch("https://swapi.co/api/people/").then(function(e){return e.json()}).then(function(t){return e.setState({sources:t.results})})},e.state={searchfield:"",sources:[]},e}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.searchfield,n=e.sources,a=n.filter(function(e){return e.toLowerCase().includes(t.toLowerCase())});return n.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",null,r.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1280px-Star_Wars_Logo.svg.png",height:"200"})),r.a.createElement(p,{searchChange:this.onSearchChange}),r.a.createElement(d,null,r.a.createElement(m,{sources:a}))):r.a.createElement("h1",{className:"tc yellow"},"Loading")}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(16);c.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(17)}},[[8,1,2]]]);
//# sourceMappingURL=main.3df53671.chunk.js.map