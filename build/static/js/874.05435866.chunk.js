/*! For license information please see 874.05435866.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkadvanced_react_hooks=self.webpackChunkadvanced_react_hooks||[]).push([[874],{2874:function(e,n,s){s.r(n);var a=s(2556);function t(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",a:"a",pre:"pre",span:"span",ul:"ul",li:"li",h3:"h3"},e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{children:"useContext: simple Counter"}),"\n",(0,a.jsx)(n.h2,{children:"\ud83d\udcdd Your Notes"}),"\n",(0,a.jsxs)(n.p,{children:["Elaborate on your learnings here in ",(0,a.jsx)(n.code,{children:"src/exercise/03.md"})]}),"\n",(0,a.jsx)(n.h2,{children:"Background"}),"\n",(0,a.jsxs)(n.p,{children:["Sharing state between components is a common problem. The best solution for this\nis to \ud83d\udcdc ",(0,a.jsx)(n.a,{href:"https://reactjs.org/docs/lifting-state-up.html",children:"lift your state"}),". This\nrequires \ud83d\udcdc ",(0,a.jsx)(n.a,{href:"https://kentcdodds.com/blog/prop-drilling",children:"prop drilling"})," which is\nnot a problem, but there are some times where prop drilling can cause a real\npain."]}),"\n",(0,a.jsxs)(n.p,{children:["To avoid this pain, we can insert some state into a section of our react tree,\nand then extract that state anywhere within that react tree without having to\nexplicitly pass it everywhere. This feature is called ",(0,a.jsx)(n.code,{children:"context"}),". In some ways\nit's like global variables, but it doesn't suffer from the same problems (and\nmaintainability nightmares) of global variables thanks to how the API works to\nmake the relationships explicit."]}),"\n",(0,a.jsx)(n.p,{children:"Here's how you use context:"}),"\n",(0,a.jsx)(n.pre,{className:"language-javascript",children:(0,a.jsxs)(n.code,{className:"language-javascript",children:[(0,a.jsx)(n.span,{className:"token keyword module",children:"import"})," ",(0,a.jsxs)(n.span,{className:"token imports",children:[(0,a.jsx)(n.span,{className:"token operator",children:"*"})," ",(0,a.jsx)(n.span,{className:"token keyword module",children:"as"})," ",(0,a.jsx)(n.span,{className:"token maybe-class-name",children:"React"})]})," ",(0,a.jsx)(n.span,{className:"token keyword module",children:"from"})," ",(0,a.jsx)(n.span,{className:"token string",children:"'react'"}),"\n\n",(0,a.jsx)(n.span,{className:"token keyword",children:"const"})," ",(0,a.jsx)(n.span,{className:"token maybe-class-name",children:"FooContext"})," ",(0,a.jsx)(n.span,{className:"token operator",children:"="})," ",(0,a.jsx)(n.span,{className:"token maybe-class-name",children:"React"}),(0,a.jsx)(n.span,{className:"token punctuation",children:"."}),(0,a.jsx)(n.span,{className:"token method function property-access",children:"createContext"}),(0,a.jsx)(n.span,{className:"token punctuation",children:"("}),(0,a.jsx)(n.span,{className:"token punctuation",children:")"}),"\n\n",(0,a.jsx)(n.span,{className:"token keyword",children:"function"})," ",(0,a.jsx)(n.span,{className:"token function",children:(0,a.jsx)(n.span,{className:"token maybe-class-name",children:"FooDisplay"})}),(0,a.jsx)(n.span,{className:"token punctuation",children:"("}),(0,a.jsx)(n.span,{className:"token punctuation",children:")"})," ",(0,a.jsx)(n.span,{className:"token punctuation",children:"{"}),"\n  ",(0,a.jsx)(n.span,{className:"token keyword",children:"const"})," foo ",(0,a.jsx)(n.span,{className:"token operator",children:"="})," ",(0,a.jsx)(n.span,{className:"token maybe-class-name",children:"React"}),(0,a.jsx)(n.span,{className:"token punctuation",children:"."}),(0,a.jsx)(n.span,{className:"token method function property-access",children:"useContext"}),(0,a.jsx)(n.span,{className:"token punctuation",children:"("}),(0,a.jsx)(n.span,{className:"token maybe-class-name",children:"FooContext"}),(0,a.jsx)(n.span,{className:"token punctuation",children:")"}),"\n  ",(0,a.jsx)(n.span,{className:"token keyword control-flow",children:"return"})," ",(0,a.jsx)(n.span,{className:"token operator",children:"<"}),"div",(0,a.jsx)(n.span,{className:"token operator",children:">"}),(0,a.jsx)(n.span,{className:"token maybe-class-name",children:"Foo"})," is",(0,a.jsx)(n.span,{className:"token operator",children:":"})," ",(0,a.jsx)(n.span,{className:"token punctuation",children:"{"}),"foo",(0,a.jsx)(n.span,{className:"token punctuation",children:"}"}),(0,a.jsx)(n.span,{className:"token operator",children:"<"}),(0,a.jsx)(n.span,{className:"token operator",children:"/"}),"div",(0,a.jsx)(n.span,{className:"token operator",children:">"}),"\n",(0,a.jsx)(n.span,{className:"token punctuation",children:"}"}),"\n\n",(0,a.jsx)(n.span,{className:"token maybe-class-name",children:"ReactDOM"}),(0,a.jsx)(n.span,{className:"token punctuation",children:"."}),(0,a.jsx)(n.span,{className:"token method function property-access",children:"render"}),(0,a.jsx)(n.span,{className:"token punctuation",children:"("}),"\n  ",(0,a.jsx)(n.span,{className:"token operator",children:"<"}),(0,a.jsx)(n.span,{className:"token maybe-class-name",children:"FooContext"}),(0,a.jsx)(n.span,{className:"token punctuation",children:"."}),(0,a.jsx)(n.span,{className:"token property-access",children:(0,a.jsx)(n.span,{className:"token maybe-class-name",children:"Provider"})})," value",(0,a.jsx)(n.span,{className:"token operator",children:"="}),(0,a.jsx)(n.span,{className:"token string",children:'"I am foo"'}),(0,a.jsx)(n.span,{className:"token operator",children:">"}),"\n    ",(0,a.jsx)(n.span,{className:"token operator",children:"<"}),(0,a.jsx)(n.span,{className:"token maybe-class-name",children:"FooDisplay"})," ",(0,a.jsx)(n.span,{className:"token operator",children:"/"}),(0,a.jsx)(n.span,{className:"token operator",children:">"}),"\n  ",(0,a.jsx)(n.span,{className:"token operator",children:"<"}),(0,a.jsx)(n.span,{className:"token operator",children:"/"}),(0,a.jsx)(n.span,{className:"token maybe-class-name",children:"FooContext"}),(0,a.jsx)(n.span,{className:"token punctuation",children:"."}),(0,a.jsx)(n.span,{className:"token property-access",children:(0,a.jsx)(n.span,{className:"token maybe-class-name",children:"Provider"})}),(0,a.jsx)(n.span,{className:"token operator",children:">"}),(0,a.jsx)(n.span,{className:"token punctuation",children:","}),"\n  ",(0,a.jsx)(n.span,{className:"token dom variable",children:"document"}),(0,a.jsx)(n.span,{className:"token punctuation",children:"."}),(0,a.jsx)(n.span,{className:"token method function property-access",children:"getElementById"}),(0,a.jsx)(n.span,{className:"token punctuation",children:"("}),(0,a.jsx)(n.span,{className:"token string",children:"'root'"}),(0,a.jsx)(n.span,{className:"token punctuation",children:")"}),(0,a.jsx)(n.span,{className:"token punctuation",children:","}),"\n",(0,a.jsx)(n.span,{className:"token punctuation",children:")"}),"\n",(0,a.jsx)(n.span,{className:"token comment",children:"// renders <div>Foo is: I am foo</div>"}),"\n"]})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"<FooDisplay />"})," could appear anywhere in the render tree, and it will have\naccess to the ",(0,a.jsx)(n.code,{children:"value"})," which is passed by the ",(0,a.jsx)(n.code,{children:"FooContext.Provider"})," component."]}),"\n",(0,a.jsxs)(n.p,{children:["Note that as a first argument to ",(0,a.jsx)(n.code,{children:"createContext"}),", you can provide a default\nvalue which React will use in the event someone calls ",(0,a.jsx)(n.code,{children:"useContext"})," with your\ncontext, when no value has been provided:"]}),"\n",(0,a.jsx)(n.pre,{className:"language-javascript",children:(0,a.jsxs)(n.code,{className:"language-javascript",children:[(0,a.jsx)(n.span,{className:"token maybe-class-name",children:"ReactDOM"}),(0,a.jsx)(n.span,{className:"token punctuation",children:"."}),(0,a.jsx)(n.span,{className:"token method function property-access",children:"render"}),(0,a.jsx)(n.span,{className:"token punctuation",children:"("}),(0,a.jsx)(n.span,{className:"token operator",children:"<"}),(0,a.jsx)(n.span,{className:"token maybe-class-name",children:"FooDisplay"})," ",(0,a.jsx)(n.span,{className:"token operator",children:"/"}),(0,a.jsx)(n.span,{className:"token operator",children:">"}),(0,a.jsx)(n.span,{className:"token punctuation",children:","})," ",(0,a.jsx)(n.span,{className:"token dom variable",children:"document"}),(0,a.jsx)(n.span,{className:"token punctuation",children:"."}),(0,a.jsx)(n.span,{className:"token method function property-access",children:"getElementById"}),(0,a.jsx)(n.span,{className:"token punctuation",children:"("}),(0,a.jsx)(n.span,{className:"token string",children:"'root'"}),(0,a.jsx)(n.span,{className:"token punctuation",children:")"}),(0,a.jsx)(n.span,{className:"token punctuation",children:")"}),"\n"]})}),"\n",(0,a.jsx)(n.p,{children:"Most of the time, I don't recommend using a default value because it's probably\na mistake to try and use context outside a provider, so in our exercise I'll\nshow you how to avoid that from happening."}),"\n",(0,a.jsxs)(n.p,{children:["\ud83e\udd89 Keep in mind that while context makes sharing state easy, it's not the only\nsolution to Prop Drilling pains and it's not necessarily the best solution\neither. React's composition model is powerful and can be used to avoid issues\nwith prop drilling as well. Learn more about this from\n",(0,a.jsx)(n.a,{href:"https://twitter.com/mjackson/status/1195495535483817984",children:"Michael Jackson on Twitter"})]}),"\n",(0,a.jsx)(n.h2,{children:"Exercise"}),"\n",(0,a.jsx)(n.p,{children:"Production deploys:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://advanced-react-hooks.netlify.com/isolated/exercise/03.js",children:"Exercise"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://advanced-react-hooks.netlify.com/isolated/final/03.js",children:"Final"})}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"We're putting everything in one file to keep things simple, but I've labeled\nthings a bit so you know that typically your context provider will be placed in\na different file and expose the provider component itself as well as the custom\nhook to access the context value."}),"\n",(0,a.jsxs)(n.p,{children:["We're going to take the Count component that we had before and separate the\nbutton from the count display. We need to access both the ",(0,a.jsx)(n.code,{children:"count"})," state as well\nas the ",(0,a.jsx)(n.code,{children:"setCount"})," updater in these different components which live in different\nparts of the tree. Normally lifting state up would be the way to solve this\ntrivial problem, but this is a contrived example so you can focus on learning\nhow to use context."]}),"\n",(0,a.jsxs)(n.p,{children:["Your job is to fill in the ",(0,a.jsx)(n.code,{children:"CountProvider"})," function component so that the app\nworks and the tests pass."]}),"\n",(0,a.jsx)(n.h2,{children:"Extra Credit"}),"\n",(0,a.jsx)(n.h3,{children:"1. \ud83d\udcaf create a consumer hook"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://advanced-react-hooks.netlify.com/isolated/final/03.extra-1.js",children:"Production deploy"})}),"\n",(0,a.jsx)(n.p,{children:"Imagine what would happen if someone tried to consume your context value without\nusing your context provider. For example, as mentioned above when discussing the\ndefault value:"}),"\n",(0,a.jsx)(n.pre,{className:"language-javascript",children:(0,a.jsxs)(n.code,{className:"language-javascript",children:[(0,a.jsx)(n.span,{className:"token maybe-class-name",children:"ReactDOM"}),(0,a.jsx)(n.span,{className:"token punctuation",children:"."}),(0,a.jsx)(n.span,{className:"token method function property-access",children:"render"}),(0,a.jsx)(n.span,{className:"token punctuation",children:"("}),(0,a.jsx)(n.span,{className:"token operator",children:"<"}),(0,a.jsx)(n.span,{className:"token maybe-class-name",children:"FooDisplay"})," ",(0,a.jsx)(n.span,{className:"token operator",children:"/"}),(0,a.jsx)(n.span,{className:"token operator",children:">"}),(0,a.jsx)(n.span,{className:"token punctuation",children:","})," ",(0,a.jsx)(n.span,{className:"token dom variable",children:"document"}),(0,a.jsx)(n.span,{className:"token punctuation",children:"."}),(0,a.jsx)(n.span,{className:"token method function property-access",children:"getElementById"}),(0,a.jsx)(n.span,{className:"token punctuation",children:"("}),(0,a.jsx)(n.span,{className:"token string",children:"'root'"}),(0,a.jsx)(n.span,{className:"token punctuation",children:")"}),(0,a.jsx)(n.span,{className:"token punctuation",children:")"}),"\n"]})}),"\n",(0,a.jsxs)(n.p,{children:["If you don't provide a default context value, that would render\n",(0,a.jsx)(n.code,{children:"<div>Foo is: </div>"}),". This is because the context value would be ",(0,a.jsx)(n.code,{children:"undefined"}),".\nIn real-world scenarios, having an unexpected ",(0,a.jsx)(n.code,{children:"undefined"})," value can result in\nerrors that can be difficult to debug."]}),"\n",(0,a.jsx)(n.p,{children:"In this extra credit, you need to create a custom hook that I can use like this:"}),"\n",(0,a.jsx)(n.pre,{className:"language-javascript",children:(0,a.jsxs)(n.code,{className:"language-javascript",children:[(0,a.jsx)(n.span,{className:"token keyword",children:"const"})," ",(0,a.jsx)(n.span,{className:"token punctuation",children:"["}),"count",(0,a.jsx)(n.span,{className:"token punctuation",children:","})," setCount",(0,a.jsx)(n.span,{className:"token punctuation",children:"]"})," ",(0,a.jsx)(n.span,{className:"token operator",children:"="})," ",(0,a.jsx)(n.span,{className:"token function",children:"useCount"}),(0,a.jsx)(n.span,{className:"token punctuation",children:"("}),(0,a.jsx)(n.span,{className:"token punctuation",children:")"}),"\n"]})}),"\n",(0,a.jsxs)(n.p,{children:["And if you change the ",(0,a.jsx)(n.code,{children:"App"})," to this:"]}),"\n",(0,a.jsx)(n.pre,{className:"language-javascript",children:(0,a.jsxs)(n.code,{className:"language-javascript",children:[(0,a.jsx)(n.span,{className:"token keyword",children:"function"})," ",(0,a.jsx)(n.span,{className:"token function",children:(0,a.jsx)(n.span,{className:"token maybe-class-name",children:"App"})}),(0,a.jsx)(n.span,{className:"token punctuation",children:"("}),(0,a.jsx)(n.span,{className:"token punctuation",children:")"})," ",(0,a.jsx)(n.span,{className:"token punctuation",children:"{"}),"\n  ",(0,a.jsx)(n.span,{className:"token keyword control-flow",children:"return"})," ",(0,a.jsx)(n.span,{className:"token punctuation",children:"("}),"\n    ",(0,a.jsx)(n.span,{className:"token operator",children:"<"}),"div",(0,a.jsx)(n.span,{className:"token operator",children:">"}),"\n      ",(0,a.jsx)(n.span,{className:"token operator",children:"<"}),(0,a.jsx)(n.span,{className:"token maybe-class-name",children:"CountDisplay"})," ",(0,a.jsx)(n.span,{className:"token operator",children:"/"}),(0,a.jsx)(n.span,{className:"token operator",children:">"}),"\n      ",(0,a.jsx)(n.span,{className:"token operator",children:"<"}),(0,a.jsx)(n.span,{className:"token maybe-class-name",children:"Counter"})," ",(0,a.jsx)(n.span,{className:"token operator",children:"/"}),(0,a.jsx)(n.span,{className:"token operator",children:">"}),"\n    ",(0,a.jsx)(n.span,{className:"token operator",children:"<"}),(0,a.jsx)(n.span,{className:"token operator",children:"/"}),"div",(0,a.jsx)(n.span,{className:"token operator",children:">"}),"\n  ",(0,a.jsx)(n.span,{className:"token punctuation",children:")"}),"\n",(0,a.jsx)(n.span,{className:"token punctuation",children:"}"}),"\n"]})}),"\n",(0,a.jsxs)(n.p,{children:["It should throw an error indicating that ",(0,a.jsx)(n.code,{children:"useCount"})," must be used within a\nCountProvider."]}),"\n",(0,a.jsx)(n.h3,{children:"2. \ud83d\udcaf caching in a context provider"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://advanced-react-hooks.netlify.com/isolated/final/03.extra-2.js",children:"Production deploy"})}),"\n",(0,a.jsx)(n.p,{children:"Let's try the last exercise over again with a bit more of a complex/practical\nexample. That's right! We're back to the Pokemon info app! This time it has\ncaching in place which is cool. So if you enter the same pokemon information,\nit's cached so it loads instantaneously."}),"\n",(0,a.jsx)(n.p,{children:"However, we have a requirement that we want to list all the cached pokemon in\nanother part of the app, so we're going to use context to store the cache. This\nway both parts of the app which need access to the pokemon cache will have\naccess."}),"\n",(0,a.jsxs)(n.p,{children:["Because this is hard to describe in words (and because it's a completely\nseparate example), there's a starting point for you in\n",(0,a.jsx)(n.code,{children:"./src/exercise/03.extra-2.js"}),"."]}),"\n",(0,a.jsx)(n.h2,{children:"\ud83e\udd89 Other notes"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Context"}),' also has the unique ability to be scoped to a specific section of the\nReact component tree. A common mistake of context (and generally any\n"application" state) is to make it globally available anywhere in your\napplication when it\'s actually only needed to be available in a part of the app\n(like a single page). Keeping a context value scoped to the area that needs it\nmost has improved performance and maintainability characteristics.']}),"\n",(0,a.jsx)(n.h2,{children:"\ud83e\udd89 Feedback"}),"\n",(0,a.jsxs)(n.p,{children:["Fill out\n",(0,a.jsx)(n.a,{href:"https://ws.kcd.im/?ws=Advanced%20React%20Hooks%20%F0%9F%94%A5&e=03%3A%20useContext%3A%20simple%20Counter&em=",children:"the feedback form"}),"."]})]})}n.default=function(e={}){const{wrapper:n}=e.components||{};return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(t,e)})):t(e)}},3238:function(e,n,s){var a=s(4519),t=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,r=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function i(e,n,s){var a,o={},i=null,p=null;for(a in void 0!==s&&(i=""+s),void 0!==n.key&&(i=""+n.key),void 0!==n.ref&&(p=n.ref),n)c.call(n,a)&&!l.hasOwnProperty(a)&&(o[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===o[a]&&(o[a]=n[a]);return{$$typeof:t,type:e,key:i,ref:p,props:o,_owner:r.current}}n.Fragment=o,n.jsx=i,n.jsxs=i},2556:function(e,n,s){e.exports=s(3238)}}]);
//# sourceMappingURL=874.05435866.chunk.js.map