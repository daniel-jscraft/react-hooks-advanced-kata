/*! For license information please see 667.dd9d5ade.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkadvanced_react_hooks=self.webpackChunkadvanced_react_hooks||[]).push([[667],{1667:function(e,s,n){n.r(s);var t=n(2556);function r(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",ol:"ol",li:"li",a:"a",ul:"ul"},e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{children:"useLayoutEffect: auto-scrolling textarea"}),"\n",(0,t.jsx)(s.h2,{children:"\ud83d\udcdd Your Notes"}),"\n",(0,t.jsxs)(s.p,{children:["Elaborate on your learnings here in ",(0,t.jsx)(s.code,{children:"src/exercise/04.md"})]}),"\n",(0,t.jsx)(s.h2,{children:"Background"}),"\n",(0,t.jsx)(s.p,{children:"There are two ways to tell React to run side-effects after it renders:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"useEffect"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"useLayoutEffect"})}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["The difference about these is subtle (they have the exact same API), but\nsignificant. 99% of the time ",(0,t.jsx)(s.code,{children:"useEffect"})," is what you want, but sometimes\n",(0,t.jsx)(s.code,{children:"useLayoutEffect"})," can improve your user experience."]}),"\n",(0,t.jsxs)(s.p,{children:["To learn about the difference, read\n",(0,t.jsx)(s.a,{href:"https://kentcdodds.com/blog/useeffect-vs-uselayouteffect",children:"useEffect vs useLayoutEffect"})]}),"\n",(0,t.jsxs)(s.p,{children:["And check out the ",(0,t.jsx)(s.a,{href:"https://github.com/donavon/hook-flow",children:"hook flow diagram"})," as\nwell."]}),"\n",(0,t.jsx)(s.h2,{children:"Exercise"}),"\n",(0,t.jsx)(s.p,{children:"Production deploys:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://advanced-react-hooks.netlify.com/isolated/exercise/04.js",children:"Exercise"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://advanced-react-hooks.netlify.com/isolated/final/04.js",children:"Final"})}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["NOTE: React 18 has smoothed out the differences in the UX between ",(0,t.jsx)(s.code,{children:"useEffect"}),"\nand ",(0,t.jsx)(s.code,{children:"useLayoutEffect"}),'. That said, the simple "rule" described still applies!']}),"\n",(0,t.jsxs)(s.p,{children:["There's no exercise for this one because basically you just need to replace\n",(0,t.jsx)(s.code,{children:"useEffect"})," with ",(0,t.jsx)(s.code,{children:"useLayoutEffect"})," and you're good. So you pretty much just need\nto experiment with things a bit."]}),"\n",(0,t.jsxs)(s.p,{children:["Before you do that though, compare the finished example with the exercise.\nAdd/remove messages and you'll find that there's a janky experience with the\nexercise version because we're using ",(0,t.jsx)(s.code,{children:"useEffect"})," and there's a gap between the\ntime that the DOM is visually updated and our code runs."]}),"\n",(0,t.jsxs)(s.p,{children:["Here's the simple rule for when you should use ",(0,t.jsx)(s.code,{children:"useLayoutEffect"}),": If you are\nmaking observable changes to the DOM, then it should happen in\n",(0,t.jsx)(s.code,{children:"useLayoutEffect"}),", otherwise ",(0,t.jsx)(s.code,{children:"useEffect"}),"."]}),"\n",(0,t.jsx)(s.h2,{children:"\ud83e\udd89 Feedback"}),"\n",(0,t.jsxs)(s.p,{children:["Fill out\n",(0,t.jsx)(s.a,{href:"https://ws.kcd.im/?ws=Advanced%20React%20Hooks%20%F0%9F%94%A5&e=04%3A%20useLayoutEffect%3A%20auto-scrolling%20textarea&em=",children:"the feedback form"}),"."]})]})}s.default=function(e={}){const{wrapper:s}=e.components||{};return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(r,e)})):r(e)}},3238:function(e,s,n){var t=n(4519),r=Symbol.for("react.element"),c=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function a(e,s,n){var t,c={},a=null,d=null;for(t in void 0!==n&&(a=""+n),void 0!==s.key&&(a=""+s.key),void 0!==s.ref&&(d=s.ref),s)o.call(s,t)&&!h.hasOwnProperty(t)&&(c[t]=s[t]);if(e&&e.defaultProps)for(t in s=e.defaultProps)void 0===c[t]&&(c[t]=s[t]);return{$$typeof:r,type:e,key:a,ref:d,props:c,_owner:i.current}}s.Fragment=c,s.jsx=a,s.jsxs=a},2556:function(e,s,n){e.exports=n(3238)}}]);
//# sourceMappingURL=667.dd9d5ade.chunk.js.map