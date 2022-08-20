/*! For license information please see 453.7369af87.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkadvanced_react_hooks=self.webpackChunkadvanced_react_hooks||[]).push([[453],{749:function(e,n,t){t.r(n);var r=t(1413),a=t(9439),o=t(4519),i=t(3344),s=t(2556);function c(e,n){switch(n.type){case"pending":return{status:"pending",data:null,error:null};case"resolved":return{status:"resolved",data:n.data,error:null};case"rejected":return{status:"rejected",data:null,error:n.error};default:throw new Error("Unhandled action type: ".concat(n.type))}}function u(e){var n=e.pokemonName,t=function(e,n){var t=o.useReducer(c,(0,r.Z)({status:"idle",data:null,error:null},n)),i=(0,a.Z)(t,2),s=i[0],u=i[1];return o.useEffect((function(){var n=e();n&&(u({type:"pending"}),n.then((function(e){u({type:"resolved",data:e})}),(function(e){u({type:"rejected",error:e})})))}),[e]),s}(o.useCallback((function(){if(n)return(0,i.kW)(n)}),[n]),{status:n?"pending":"idle"}),u=t.data,l=t.status,d=t.error;switch(l){case"idle":return(0,s.jsx)("span",{children:"Submit a pokemon"});case"pending":return(0,s.jsx)(i.Uh,{name:n});case"rejected":throw d;case"resolved":return(0,s.jsx)(i.nV,{pokemon:u});default:throw new Error("This should be impossible")}}function l(){var e=o.useState(""),n=(0,a.Z)(e,2),t=n[0],r=n[1];return(0,s.jsxs)("div",{className:"pokemon-info-app",children:[(0,s.jsx)(i.AS,{pokemonName:t,onSubmit:function(e){r(e)}}),(0,s.jsx)("hr",{}),(0,s.jsx)("div",{className:"pokemon-info",children:(0,s.jsx)(i.kG,{onReset:function(){r("")},resetKeys:[t],children:(0,s.jsx)(u,{pokemonName:t})})})]})}n.default=function(){var e=o.useState(!0),n=(0,a.Z)(e,2),t=n[0],r=n[1];return(0,s.jsxs)("div",{children:[(0,s.jsxs)("label",{children:[(0,s.jsx)("input",{type:"checkbox",checked:t,onChange:function(e){return r(e.target.checked)}})," ","Mount Component"]}),(0,s.jsx)("hr",{}),t?(0,s.jsx)(l,{}):null]})}},3344:function(e,n,t){t.d(n,{AS:function(){return f},Uh:function(){return m},kG:function(){return k},kW:function(){return d},nV:function(){return p}});var r=t(1413),a=t(9439),o=t(4165),i=t(5861),s=t(4519),c=t(3694),u=t(2556),l=function(e){return"".concat(e.getHours(),":").concat(String(e.getMinutes()).padStart(2,"0")," ").concat(String(e.getSeconds()).padStart(2,"0"),".").concat(String(e.getMilliseconds()).padStart(3,"0"))};function d(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1500,t="\n    query PokemonInfo($name: String) {\n      pokemon(name: $name) {\n        id\n        number\n        name\n        image\n        attacks {\n          special {\n            name\n            type\n            damage\n          }\n        }\n      }\n    }\n  ";return window.fetch("https://graphql-pokemon2.vercel.app/",{method:"POST",headers:{"content-type":"application/json;charset=UTF-8",delay:n},body:JSON.stringify({query:t,variables:{name:e.toLowerCase()}})}).then(function(){var n=(0,i.Z)((0,o.Z)().mark((function n(t){var r,a,i,s,c;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.json();case 2:if(r=n.sent,a=r.data,!t.ok){n.next=14;break}if(!(i=null===a||void 0===a?void 0:a.pokemon)){n.next=11;break}return i.fetchedAt=l(new Date),n.abrupt("return",i);case 11:return n.abrupt("return",Promise.reject(new Error('No pokemon with the name "'.concat(e,'"'))));case 12:n.next=16;break;case 14:return c={message:null===a||void 0===a||null===(s=a.errors)||void 0===s?void 0:s.map((function(e){return e.message})).join("\n")},n.abrupt("return",Promise.reject(c));case 16:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}function m(e){var n=e.name,t={name:s.useRef(n).current,number:"XXX",image:"/img/pokemon/fallback-pokemon.jpg",attacks:{special:[{name:"Loading Attack 1",type:"Type",damage:"XX"},{name:"Loading Attack 2",type:"Type",damage:"XX"}]},fetchedAt:"loading..."};return(0,u.jsx)(p,{pokemon:t})}function p(e){var n=e.pokemon;return(0,u.jsxs)("div",{children:[(0,u.jsx)("div",{className:"pokemon-info__img-wrapper",children:(0,u.jsx)("img",{src:n.image,alt:n.name})}),(0,u.jsx)("section",{children:(0,u.jsxs)("h2",{children:[n.name,(0,u.jsx)("sup",{children:n.number})]})}),(0,u.jsx)("section",{children:(0,u.jsx)("ul",{children:n.attacks.special.map((function(e){return(0,u.jsxs)("li",{children:[(0,u.jsx)("label",{children:e.name}),":"," ",(0,u.jsxs)("span",{children:[e.damage," ",(0,u.jsxs)("small",{children:["(",e.type,")"]})]})]},e.name)}))})}),(0,u.jsx)("small",{className:"pokemon-info__fetch-time",children:n.fetchedAt})]})}function f(e){var n=e.pokemonName,t=e.initialPokemonName,r=void 0===t?n||"":t,o=e.onSubmit,i=s.useState(r),c=(0,a.Z)(i,2),l=c[0],d=c[1];function m(e){d(e),o(e)}return s.useEffect((function(){"string"===typeof n&&d(n)}),[n]),(0,u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),o(l)},className:"pokemon-form",children:[(0,u.jsx)("label",{htmlFor:"pokemonName-input",children:"Pokemon Name"}),(0,u.jsxs)("small",{children:["Try"," ",(0,u.jsx)("button",{className:"invisible-button",type:"button",onClick:function(){return m("pikachu")},children:'"pikachu"'}),", ",(0,u.jsx)("button",{className:"invisible-button",type:"button",onClick:function(){return m("charizard")},children:'"charizard"'}),", or ",(0,u.jsx)("button",{className:"invisible-button",type:"button",onClick:function(){return m("mew")},children:'"mew"'})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)("input",{className:"pokemonName-input",id:"pokemonName-input",name:"pokemonName",placeholder:"Pokemon Name...",value:l,onChange:function(e){d(e.target.value)}}),(0,u.jsx)("button",{type:"submit",disabled:!l.length,children:"Submit"})]})]})}function h(e){var n=e.error,t=e.resetErrorBoundary;return(0,u.jsxs)("div",{role:"alert",children:["There was an error:"," ",(0,u.jsx)("pre",{style:{whiteSpace:"normal"},children:n.message}),(0,u.jsx)("button",{onClick:t,children:"Try again"})]})}function k(e){return(0,u.jsx)(c.ErrorBoundary,(0,r.Z)({FallbackComponent:h},e))}},3238:function(e,n,t){var r=t(4519),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(e,n,t){var r,o={},u=null,l=null;for(r in void 0!==t&&(u=""+t),void 0!==n.key&&(u=""+n.key),void 0!==n.ref&&(l=n.ref),n)i.call(n,r)&&!c.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:a,type:e,key:u,ref:l,props:o,_owner:s.current}}n.Fragment=o,n.jsx=u,n.jsxs=u},2556:function(e,n,t){e.exports=t(3238)}}]);
//# sourceMappingURL=453.7369af87.chunk.js.map