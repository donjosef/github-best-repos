(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,a,t){e.exports=t(80)},38:function(e,a,t){},45:function(e,a,t){},75:function(e,a,t){},77:function(e,a,t){},80:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(31),c=t.n(s),l=(t(38),t(10)),i=t(11),o=t(13),p=t(12),u=t(14),h=function(e){var a=e.value,t=e.optValues,n=e.onSelect,s=e.label,c=e.className,l=t.map(function(e){return r.a.createElement("option",{key:e,value:e},e)});return s?r.a.createElement("label",{className:"controls-wrapper__label"},r.a.createElement("span",null,s),r.a.createElement("select",{className:c,value:a,onChange:n},l)):r.a.createElement("select",{className:c,value:a,onChange:n},l)},m=t(81),g=t(7),d=t(8),v=t(6);g.b.add(v.c);var f=function(e){var a=e.name,t=e.url,n=e.avatar,s=e.stars,c=e.language,l=e.description,i=e.creationDate,o=e.updateDate,p=e.type,u=e.owner;return r.a.createElement("li",{className:"hit"},r.a.createElement("div",{className:"hit__header"},r.a.createElement("div",{className:"hit__avatar"},r.a.createElement("img",{src:n,alt:a})),r.a.createElement("h2",{className:"hit__title"},r.a.createElement("a",{href:t},a)),r.a.createElement("div",{className:"hit__language"},r.a.createElement("p",null,c)),r.a.createElement(m.a,{className:"hit__stars",to:"/"+u+"/"+a+"/starwatchers"},r.a.createElement(d.a,{icon:"star",size:"xs",color:"#FBBC05"}),r.a.createElement("p",null,s))),r.a.createElement("div",{className:"hit__body"},r.a.createElement("h3",null,p),r.a.createElement("p",null,l),r.a.createElement("p",null,"Created at: ",i.substr(0,10)),r.a.createElement("p",null,"Last update: ",o.substr(0,10))))},E=t(16),b=t.n(E),w=(t(45),function(e){return r.a.createElement("div",{className:"bar"},r.a.createElement("div",{style:{width:e.percentage+"%"},className:"bar__filler"}))}),y=t(15),C=t.n(y),N=t(21),_=t(22),k=t.n(_),S=t(9),j=t.n(S);function O(e){return!e.last}function D(e,a){return I.apply(this,arguments)}function I(){return(I=Object(N.a)(C.a.mark(function e(a,t){var n,r,s,c=arguments;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>2&&void 0!==c[2]?c[2]:1,e.next=3,k.a.get("https://api.github.com/search/repositories?q=stars:>1+language:".concat(a,"+created:>").concat(t,"&sort=stars&order=desc&per_page=40&page=").concat(n));case 3:return r=e.sent,s=O(j()(r.headers.link))?parseInt(j()(r.headers.link).prev.page,10)+1:parseInt(j()(r.headers.link).last.page,10),e.abrupt("return",{hits:r.data.items,pageCount:s});case 6:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function x(e,a){return L.apply(this,arguments)}function L(){return(L=Object(N.a)(C.a.mark(function e(a,t){var n,r,s,c=arguments;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>2&&void 0!==c[2]?c[2]:1,e.next=3,k.a.get("https://api.github.com/repos/".concat(a,"/").concat(t,"/stargazers?per_page=40&page=").concat(n));case 3:return r=e.sent,s=O(j()(r.headers.link))?parseInt(j()(r.headers.link).prev.page,10)+1:parseInt(j()(r.headers.link).last.page,10),e.abrupt("return",{watchers:r.data,pageCount:s});case 6:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}g.b.add(v.a,v.b);var P=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(o.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={hits:[],pageCount:0,loading:!1,error:null,percentage:0},t.componentDidMount=function(){var e=t.props.location.pathname,a=t.props,n=a.language,r=a.date;t.setState({loading:!0,percentage:0});var s=setInterval(function(){t.setState(function(e){return{percentage:e.percentage+10}})},100);if("/"===e||"/page1"===e)D(n,r).then(function(e){clearInterval(s),t.setState({hits:e.hits,pageCount:e.pageCount,percentage:100,loading:!1})}).catch(function(e){return t.setState({error:e.message})});else{D(n,r,e.match(/\d+/)[0]).then(function(e){clearInterval(s),t.setState({hits:e.hits,pageCount:e.pageCount,percentage:100,loading:!1})}).catch(function(e){return t.setState({error:e.message})})}},t.changePageHandler=function(e){var a=e.selected+1;t.props.history.push("/page"+a)},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,a){var t=this;if(e.location.pathname!==this.props.location.pathname||e.language!==this.props.language||e.date!==this.props.date){var n,r=this.props,s=r.language,c=r.date;n="/"===this.props.location.pathname?1:this.props.location.pathname.match(/\d+/)[0],this.setState({loading:!0,percentage:0});var l=setInterval(function(){t.setState(function(e){return{percentage:e.percentage+10}})},100);D(s,c,n).then(function(e){clearInterval(l),t.setState({hits:e.hits,percentage:100,loading:!1})}).catch(function(e){return console.log(e)})}}},{key:"render",value:function(){var e,a=this.state.hits,t=this.props.location.pathname;return e="/"===t?1:parseInt(t.match(/\d+/)[0],10),!this.state.loading&&this.state.percentage>=100?r.a.createElement("div",null,r.a.createElement("ul",{className:"hits"},a.map(function(e){return e.name.includes("eeeeeee")?null:r.a.createElement(f,{key:e.id,owner:e.owner.login,name:e.name,url:e.html_url,avatar:e.owner.avatar_url,stars:e.stargazers_count,language:e.language,description:e.description,creationDate:e.created_at,updateDate:e.updated_at,type:e.owner.type})})),r.a.createElement(b.a,{pageCount:this.state.pageCount,pageRangeDisplayed:3,marginPagesDisplayed:2,forcePage:e-1,onPageChange:this.changePageHandler,disableInitialCallback:!0,containerClassName:"paginate-wrapper",pageLinkClassName:"paginate-link",pageClassName:"paginate-li",previousClassName:"paginate-li",nextClassName:"paginate-li",previousLabel:r.a.createElement(d.a,{icon:"chevron-left"}),nextLabel:r.a.createElement(d.a,{icon:"chevron-right"}),activeClassName:"active-link"})):this.state.error?r.a.createElement("h1",null,this.state.error):r.a.createElement(w,{percentage:this.state.percentage})}}]),a}(r.a.Component),V=function(e){var a=e.avatar,t=e.name,n=e.url;return r.a.createElement("li",{className:"watcher"},r.a.createElement("div",{className:"watcher__avatar"},r.a.createElement("img",{src:a,alt:t})),r.a.createElement("h3",null,r.a.createElement("a",{href:n},t)))};t(75);g.b.add(v.a,v.b);var H=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(o.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={watchers:[],pageCount:0,error:null},t.changePageHandler=function(e){var a=e.selected+1;"/"===t.props.match.url[t.props.match.url.length-1]?(console.log(t.props.match.url),t.props.history.push(t.props.match.url+a)):t.props.history.push(t.props.match.url+"/"+a)},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params,t=a.owner,n=a.repo,r=this.props.location.pathname;if(r.endsWith("/starwatchers")||r.endsWith("/starwatchers/1"))x(t,n).then(function(a){e.setState({watchers:a.watchers,pageCount:a.pageCount})}).catch(function(a){return e.setState({error:a.message})});else{x(t,n,r.match(/\d+/)[0]).then(function(a){e.setState({watchers:a.watchers,pageCount:a.pageCount})}).catch(function(a){return e.setState({error:a.message})})}}},{key:"componentDidUpdate",value:function(e,a){var t=this;if(e.location.pathname!==this.props.location.pathname){var n=/\d+/,r=this.props.match.params;x(r.owner,r.repo,this.props.location.pathname.match(n)?this.props.location.pathname.match(n)[0]:1).then(function(e){t.setState({watchers:e.watchers})})}}},{key:"render",value:function(){var e=this.state.watchers.map(function(e){return r.a.createElement(V,{key:e.id,avatar:e.avatar_url,name:e.login,url:e.html_url})}),a=r.a.createElement("div",null,r.a.createElement("ul",{className:"watchers"},e),r.a.createElement(b.a,{pageCount:this.state.pageCount,pageRangeDisplayed:3,marginPagesDisplayed:2,onPageChange:this.changePageHandler,disableInitialCallback:!0,containerClassName:"paginate-wrapper",pageLinkClassName:"paginate-link",pageClassName:"paginate-li",previousClassName:"paginate-li",nextClassName:"paginate-li",previousLabel:r.a.createElement(d.a,{icon:"chevron-left"}),nextLabel:r.a.createElement(d.a,{icon:"chevron-right"}),activeClassName:"active-link"}));return this.state.error&&(a=r.a.createElement("h1",null,this.state.error)),a}}]),a}(n.Component),A=function(e){var a=Date.now();return new Date(a-365*e*864e5).toISOString().substr(0,10)},B=t(84),W=t(83),z=(t(77),function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(o.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={language:"javascript",date:"2011-01-01",dateSelectValue:"all"},t.changeLanguageHandler=function(e){t.setState({language:e.target.value})},t.changeDateHandler=function(e){t.setState({dateSelectValue:e.target.value})},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,a){if(a.dateSelectValue!==this.state.dateSelectValue)switch(this.state.dateSelectValue){case"all":this.setState({date:"2011-01-01"});break;case"last 5 years":this.setState({date:A(5)});break;case"last year":this.setState({date:A(1)})}}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"header"},r.a.createElement("h1",{className:"header__title"},"Most popular github repos")),r.a.createElement("div",{className:"controls-wrapper"},r.a.createElement(h,{className:"controls-wrapper__select",label:"Search",optValues:["all","javascript","java","python","ruby"],onSelect:this.changeLanguageHandler,value:this.state.language}),r.a.createElement(h,{className:"controls-wrapper__select",label:"for",optValues:["all","last year","last 5 years"],onSelect:this.changeDateHandler,value:this.dateSelectValue})),r.a.createElement(B.a,null,r.a.createElement(W.a,{path:"/:owner/:repo/starwatchers",component:H}),r.a.createElement(W.a,{path:"/",render:function(a){return r.a.createElement(P,Object.assign({language:e.state.language,date:e.state.date},a))}})))}}]),a}(n.Component)),M=t(82);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(M.a,{basename:"/github-best-repos"},r.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,2,1]]]);
//# sourceMappingURL=main.aecd5d09.chunk.js.map