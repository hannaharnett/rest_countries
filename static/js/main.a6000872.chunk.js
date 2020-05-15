(this.webpackJsonprest_countries=this.webpackJsonprest_countries||[]).push([[0],{14:function(e,t,a){e.exports={searchField:"CountriesList_searchField__2wid_",dropdown:"CountriesList_dropdown__ipHmZ",container:"CountriesList_container__TL0sz",queryNav:"CountriesList_queryNav__3x1DX",countryGrid:"CountriesList_countryGrid__3CZ5j"}},18:function(e,t,a){e.exports={countryCard:"CountryCard_countryCard__1Mc_A",flag:"CountryCard_flag__1AhD4",cardInfo:"CountryCard_cardInfo__3Kuch"}},20:function(e,t,a){e.exports={navbar:"navbar_navbar__r6YTX",themeBtn:"navbar_themeBtn__LpfqG"}},31:function(e,t,a){e.exports=a(42)},36:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(25),c=a.n(l),o=a(7),i=(a(36),a(30)),s=a(26),u=a(8),m=a(9),p=a(3),d=a(11),h=a(10),g=a(12),E=a(29),f=r.a.createContext({dark:!1,toggleTheme:function(){}}),b=f;function v(e){var t=Object(n.useState)(!1),a=Object(E.a)(t,2),l=a[0],c=a[1];Object(n.useLayoutEffect)((function(){"true"===window.localStorage.getItem("darkTheme")?(c(!0),o(y)):(c(!1),o(C))}),[l]);var o=function(e){document.getElementsByTagName("html")[0].style.cssText=e.join(";")};return r.a.createElement(f.Provider,{value:{dark:l,toggleTheme:function(){document.getElementsByTagName("body")[0].style.cssText="transition: background .5s ease",c(!l),window.localStorage.setItem("darkTheme",!l)}}},e.children)}var C=["--border: rgba(0,0,0,.2)","--elements: hsl(0, 0%, 100%)","--text: hsl(200, 15%, 8%)","--textInput: hsl(0, 0%, 52%)","--background: hsl(0, 0%, 98%)"],y=["--border: rgba(0,0,0,.2)","--elements: hsl(209, 23%, 22%)","--text: hsl(0, 0%, 100%)","--textInput: hsl(0, 0%, 52%)","--background: hsl(207, 26%, 17%)"],_=a(20),k=a.n(_);function j(){var e=Object(n.useContext)(b),t=e.dark,a=e.toggleTheme,l=r.a.createElement("button",{className:k.a.themeBtn,onClick:function(){return a()}},t?r.a.createElement("span",null,r.a.createElement("i",{className:"fas fa-moon"}),"Dark Mode"):r.a.createElement("span",null,r.a.createElement("i",{className:"far fa-moon"}),"Light Mode"));return r.a.createElement("div",{className:k.a.navbar},r.a.createElement(o.b,{to:"/",className:"link"},r.a.createElement("h2",null,"Where in the World?")),l)}var N=a(18),O=a.n(N),I=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.population,n=e.region,l=e.capital,c=e.flag;return r.a.createElement("div",{className:O.a.countryCard},r.a.createElement(o.b,{to:"/".concat(t.toLowerCase()),className:"link"},r.a.createElement("div",{className:O.a.flag,style:{backgroundImage:"url(".concat(c,")")}}),r.a.createElement("div",{className:O.a.cardInfo},r.a.createElement("h3",null,t),r.a.createElement("p",null,"Population: ",r.a.createElement("span",null,a.toLocaleString())),r.a.createElement("p",null,"Region: ",r.a.createElement("span",null,n)),r.a.createElement("p",null,"Capital: ",r.a.createElement("span",null,l)))))}}]),a}(n.Component),S=a(14),B=a.n(S),D=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).onInputChange=n.onInputChange.bind(Object(p.a)(n)),n.onInputKeyPress=n.onInputKeyPress.bind(Object(p.a)(n)),n.onInputSelect=n.onInputSelect.bind(Object(p.a)(n)),n}return Object(m.a)(a,[{key:"onInputChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.props.handleChange(a,n)}},{key:"onInputKeyPress",value:function(e){"Enter"===e.key&&this.props.displaySearch(this.props.search)}},{key:"onInputSelect",value:function(e){this.props.handleChange("region",e.currentTarget.dataset.id),this.props.displaySearch(e.currentTarget.dataset.id,"region")}},{key:"render",value:function(){var e=this,t=this.props,a=t.countries,n=t.region,l=a.map((function(e){var t=e.name,a=e.capital,n=e.region,l=e.population,c=e.flag;return r.a.createElement(I,{name:t,capital:a,population:l,region:n,flag:c,key:t})}));return r.a.createElement("div",{className:B.a.container},r.a.createElement("div",{className:B.a.queryNav},r.a.createElement("span",{className:B.a.searchField},r.a.createElement("i",{className:"fas fa-search",onClick:function(){return e.props.displaySearch(e.props.search)}}),r.a.createElement("input",{type:"text",name:"search",autoComplete:"off",placeholder:"Search for a country...",onChange:this.onInputChange,onKeyPress:this.onInputKeyPress})),r.a.createElement("div",{class:B.a.dropdown},r.a.createElement("button",null,r.a.createElement("span",null,n||"Filter by Region"),r.a.createElement("i",{className:"fas fa-chevron-down"})),r.a.createElement("ul",null,r.a.createElement("li",{"data-id":"Africa",onClick:this.onInputSelect},"Africa"),r.a.createElement("li",{"data-id":"Americas",onClick:this.onInputSelect},"Americas"),r.a.createElement("li",{"data-id":"Asia",onClick:this.onInputSelect},"Asia"),r.a.createElement("li",{"data-id":"Europe",onClick:this.onInputSelect},"Europe"),r.a.createElement("li",{"data-id":"Oceania",onClick:this.onInputSelect},"Oceania"),r.a.createElement("li",{"data-id":"",onClick:this.onInputSelect},"Remove filter")))),r.a.createElement("div",{className:B.a.countryGrid},l))}}]),a}(n.Component),x=a(5),w=a.n(x),L=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).goBack=n.goBack.bind(Object(p.a)(n)),n}return Object(m.a)(a,[{key:"loopProperty",value:function(e,t){var a=[];return e.map((function(e){for(var n in e)n===t&&a.push(e[n]);return a})),a}},{key:"goBack",value:function(){this.props.history.goBack()}},{key:"truncateString",value:function(e,t){return e.length<=t?e:e.slice(0,t)+"..."}},{key:"render",value:function(){var e=this,t=this.props.countries.filter((function(t){return t.name.toLowerCase()===e.props.match.params.id})).map((function(t){var a=t.name,n=t.capital,l=t.region,c=t.population,i=t.flag,s=t.alpha3Code,u=t.nativeName,m=t.subregion,p=t.topLevelDomain,d=t.currencies,h=t.languages,g=e.loopProperty(d,"name").join(", "),E=e.loopProperty(h,"name").join(", "),f=e.props.countries.filter((function(e){return e.borders.includes(s)})).map((function(t,a){return r.a.createElement("div",{key:a},r.a.createElement(o.b,{to:"/".concat(t.name.toLowerCase())},r.a.createElement("button",{className:"link ".concat(w.a.borderBtn," ").concat(w.a.btn)},e.truncateString(t.name,9))))}));return r.a.createElement("div",{key:a,className:w.a.detailsContainer},r.a.createElement("div",{className:w.a.flagContainer},r.a.createElement("img",{src:i,alt:a})),r.a.createElement("div",{className:w.a.textContainer},r.a.createElement("h1",null,a),r.a.createElement("div",{className:w.a.countryInfo},r.a.createElement("p",null,"Native Name:",r.a.createElement("span",null,u)),r.a.createElement("p",null,"Population:",r.a.createElement("span",null,c.toLocaleString())),r.a.createElement("p",null,"Region:",r.a.createElement("span",null,l)),r.a.createElement("p",null,"Sub Region:",r.a.createElement("span",null,m)),r.a.createElement("p",null,"Capital:",r.a.createElement("span",null,n)),r.a.createElement("p",null,"Top Level Domain:",r.a.createElement("span",null,p)),r.a.createElement("p",null,"Currencies:",r.a.createElement("span",null,g)),r.a.createElement("p",null,"Languages:",r.a.createElement("span",null,E))),r.a.createElement("div",{className:w.a.bordersContainer},r.a.createElement("p",null,f.length<1?"No Bordering Countries":"Border Countries:"),r.a.createElement("div",{className:w.a.borders},f))))}));return r.a.createElement("div",null,r.a.createElement("button",{className:"".concat(w.a.goBackBtn," ").concat(w.a.btn),onClick:this.goBack},r.a.createElement("i",{className:"fas fa-arrow-left"}),"Back"),r.a.createElement("div",null,t))}}]),a}(n.Component),T=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={countries:[],search:"",region:""},n.getData=n.getData.bind(Object(p.a)(n)),n.displaySearch=n.displaySearch.bind(Object(p.a)(n)),n.handleChange=n.handleChange.bind(Object(p.a)(n)),n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.getAllCountries()}},{key:"handleChange",value:function(e,t){this.setState(Object(s.a)({},e,t))}},{key:"getData",value:function(e){var t=this;fetch(e).then((function(e){return e.json()})).then((function(e){t.setState({countries:Object(i.a)(e)})})).catch((function(e){console.log("Error:",e)}))}},{key:"getAllCountries",value:function(){this.getData("https://restcountries.eu/rest/v2/all")}},{key:"displaySearch",value:function(e,t){return e&&""!==t?t?void this.getData("https://restcountries.eu/rest/v2/".concat(t,"/").concat(e)):this.getData("https://restcountries.eu/rest/v2/name/".concat(e)):this.getAllCountries()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(j,null),r.a.createElement(g.c,null,r.a.createElement(g.a,{path:"/:id",render:function(t){return r.a.createElement(L,Object.assign({},t,{countries:e.state.countries}))}}),r.a.createElement(g.a,{path:"/",render:function(t){return r.a.createElement(D,Object.assign({},t,{region:e.state.region,handleChange:e.handleChange,search:e.state.search,countries:e.state.countries,displaySearch:e.displaySearch}))}})))}}]),a}(n.Component);c.a.render(r.a.createElement(o.a,null,r.a.createElement(v,null,r.a.createElement(T,null))),document.getElementById("root"))},5:function(e,t,a){e.exports={detailsContainer:"CountryDetails_detailsContainer__jgGDD",countryInfo:"CountryDetails_countryInfo__31xI_",btn:"CountryDetails_btn__QwA2d",goBackBtn:"CountryDetails_goBackBtn__3bye8",borderBtn:"CountryDetails_borderBtn__j2MFz",textContainer:"CountryDetails_textContainer__wr9Ye",bordersContainer:"CountryDetails_bordersContainer__X73Cq",borders:"CountryDetails_borders__31Tzz"}}},[[31,1,2]]]);
//# sourceMappingURL=main.a6000872.chunk.js.map