(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{163:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return r})),n.d(e,"metadata",(function(){return c})),n.d(e,"rightToc",(function(){return l})),n.d(e,"default",(function(){return s}));var a=n(1),o=n(6),i=(n(0),n(171)),r={id:"fonts",title:"Changing fonts",sidebar_label:"Changing fonts"},c={id:"fonts",title:"Changing fonts",description:"Before you begin using your own fonts, you'll first need to add them to the app project.",source:"@site/docs/styling-fonts.mdx",permalink:"/react-native-navigation//fonts",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/docs/docs/styling-fonts.mdx",sidebar_label:"Changing fonts",sidebar:"docs",previous:{title:"Animations",permalink:"/react-native-navigation//docs-animations"},next:{title:"Constants",permalink:"/react-native-navigation//constants-docs"}},l=[{value:"BottomTab font",id:"bottomtab-font",children:[]},{value:"Button font",id:"button-font",children:[]},{value:"Title font",id:"title-font",children:[]},{value:"Subtitle font",id:"subtitle-font",children:[]},{value:"Back button",id:"back-button",children:[]}],b={rightToc:l};function s(t){var e=t.components,n=Object(o.a)(t,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Before you begin using your own fonts, you'll first need to add them to the app project."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Android")," - add the ",Object(i.b)("inlineCode",{parentName:"li"},".ttf")," or ",Object(i.b)("inlineCode",{parentName:"li"},".otf")," files to ",Object(i.b)("inlineCode",{parentName:"li"},"src/main/assets/fonts/")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"iOS")," - follow this ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://medium.com/react-native-training/react-native-custom-fonts-ccc9aacf9e5e"}),"guide"))),Object(i.b)("p",null,"Once we've added the font files to our project, we can star using them in options."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("div",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"When declaring fonts in options, use only the file name without the file type suffix."))),Object(i.b)("h2",{id:"bottomtab-font"},"BottomTab font"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"options: {\n  bottomTab: {\n    fontFamily: 'helvetica'\n  }\n}\n")),Object(i.b)("h2",{id:"button-font"},"Button font"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"options: {\n  rightButtons: [\n    {\n      id: 'SAVE_BUTTON',\n      text: 'Save',\n      fontFamily: 'helvetica'\n    }\n  ],\n  leftButtons: [\n    {\n      id: 'CANCEL_BUTTON',\n      text: 'Cancel',\n      fontFamily: 'helvetica'\n    }\n  ]\n}\n")),Object(i.b)("h2",{id:"title-font"},"Title font"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"options: {\n  topBar: {\n    title: {\n      fontFamily: 'helvetica'\n    }\n  }\n}\n")),Object(i.b)("h2",{id:"subtitle-font"},"Subtitle font"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"options: {\n  topBar: {\n    subtitle: {\n      fontFamily: 'helvetica'\n    }\n  }\n}\n")),Object(i.b)("h2",{id:"back-button"},"Back button"),Object(i.b)("p",null,"In iOS the back button will display the title of the previous screen. Use the ",Object(i.b)("inlineCode",{parentName:"p"},"backButton")," option to modify its font family."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"options: {\n  topBar: {\n    backButton: {\n      fontFamily: 'helvetica'\n    }\n  }\n}\n")))}s.isMDXComponent=!0},171:function(t,e,n){"use strict";n.d(e,"a",(function(){return p})),n.d(e,"b",(function(){return d}));var a=n(0),o=n.n(a);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var b=o.a.createContext({}),s=function(t){var e=o.a.useContext(b),n=e;return t&&(n="function"==typeof t?t(e):c({},e,{},t)),n},p=function(t){var e=s(t.components);return o.a.createElement(b.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.a.createElement(o.a.Fragment,{},e)}},f=Object(a.forwardRef)((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,r=t.parentName,b=l(t,["components","mdxType","originalType","parentName"]),p=s(n),f=a,d=p["".concat(r,".").concat(f)]||p[f]||u[f]||i;return n?o.a.createElement(d,c({ref:e},b,{components:n})):o.a.createElement(d,c({ref:e},b))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,r=new Array(i);r[0]=f;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:a,r[1]=c;for(var b=2;b<i;b++)r[b]=n[b];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);