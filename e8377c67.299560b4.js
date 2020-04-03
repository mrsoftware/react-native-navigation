(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{161:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var a=n(1),r=n(6),o=(n(0),n(171)),c={id:"stack-programmatically",title:"Interact programmatically with the Stack",sidebar_label:"Interact programmatically"},i={id:"stack-programmatically",title:"Interact programmatically with the Stack",description:"The Navigation object provides ways to programmatically manipulate the stack.",source:"@site/docs/stack-programmatically.mdx",permalink:"/react-native-navigation//stack-programmatically",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/docs/docs/stack-programmatically.mdx",sidebar_label:"Interact programmatically"},p=[{value:"Interact with the Stack by componentId",id:"interact-with-the-stack-by-componentid",children:[]},{value:"Interact with the Stack by a predefined id",id:"interact-with-the-stack-by-a-predefined-id",children:[]}],s={rightToc:p};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The Navigation object provides ways to programmatically manipulate the stack."),Object(o.b)("h2",{id:"interact-with-the-stack-by-componentid"},"Interact with the Stack by componentId"),Object(o.b)("p",null,"Each layout pushed into the stack has an id. When in the context of a component, The component's ",Object(o.b)("inlineCode",{parentName:"p"},"componentId")," can be used to interact with a parent stack.\nWhen using a component's componentId, the native implementation knows to perform the command on the parent Stack of this component."),Object(o.b)("p",null,"In this example, we push a screen onto the component's parent stack."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"const React = require('react');\nconst Navigation = require('react-native-navigation');\n\nclass MyComponent extends React.Component {\n  onButtonClick = () => {\n    Navigation.push(this.props.componentId, {\n      component: {\n        name: 'PUSHED_SCREEN'\n      }\n    });\n  }\n}\n")),Object(o.b)("h2",{id:"interact-with-the-stack-by-a-predefined-id"},"Interact with the Stack by a predefined id"),Object(o.b)("p",null,"Sometimes we're required to interact with a specific stack not from the context of a component pushed into it. To do so, assign the stack a predefined ",Object(o.b)("inlineCode",{parentName:"p"},"id")," and use it when invoking any stack command."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"Navigation.setRoot({\n  root: {\n    stack: {\n      id: 'MyStack', // This is the id we're going to use when interacting with the stack\n      children: [\n        {\n          component: {\n            name: 'SomeComponent'\n          }\n        }\n      ]\n    }\n  }\n});\n\nfunction push() {\n  Navigation.push('MyStack', {\n    component: {\n      name: 'PushedScreen'\n    }\n  });\n}\n")))}l.isMDXComponent=!0},171:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},m=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,b=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?r.a.createElement(b,i({ref:t},s,{components:n})):r.a.createElement(b,i({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);