(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{458:function(module,exports,__webpack_require__){__webpack_require__(459),__webpack_require__(619),__webpack_require__(620),__webpack_require__(828),__webpack_require__(825),__webpack_require__(826),__webpack_require__(827),__webpack_require__(829),module.exports=__webpack_require__(817)},526:function(module,exports){},620:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(335)},817:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(335).configure)([__webpack_require__(818),__webpack_require__(824)],module,!1)}).call(this,__webpack_require__(193)(module))},818:function(module,exports,__webpack_require__){var map={"./Semoji.stories.mdx":830};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=818},824:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=824},829:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__(21),__webpack_require__(5),__webpack_require__(50),__webpack_require__(414),__webpack_require__(814),__webpack_require__(51),__webpack_require__(815),__webpack_require__(816),__webpack_require__(413);var client_api=__webpack_require__(836),esm=__webpack_require__(6),parameters={controls:{expanded:!0},docs:{theme:__webpack_require__(134).a.dark}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.c)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.d)(loader,!1)}));case"parameters":return Object(client_api.e)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(client_api.b)(enhancer)}));case"render":return Object(client_api.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.e)(v,!1);default:return console.log(key+" was not supported :( !")}}))},830:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Template",(function(){return Semoji_stories_Template})),__webpack_require__.d(__webpack_exports__,"twitterThumbsUp",(function(){return twitterThumbsUp})),__webpack_require__.d(__webpack_exports__,"gitHubThumbsUp",(function(){return gitHubThumbsUp}));__webpack_require__(21),__webpack_require__(819),__webpack_require__(5),__webpack_require__(820),__webpack_require__(15),__webpack_require__(0);var esm=__webpack_require__(4),dist_esm=__webpack_require__(98),jsx_runtime=(__webpack_require__(821),__webpack_require__(8),__webpack_require__(80),__webpack_require__(822),__webpack_require__(46),__webpack_require__(29),__webpack_require__(280)),sources={GitHub:"https://github.githubassets.com/images/icons/emoji/unicode/{unicode}.png?v8",Twitter:"https://twemoji.maxcdn.com/v/latest/svg/{unicode}.svg"};function Semoji(_ref){var _emoji$codePointAt,_ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,emoji=_ref.emoji,_ref$height=_ref.height,height=void 0===_ref$height?"1em":_ref$height,source=_ref.source,unicode=null===(_emoji$codePointAt=emoji.codePointAt(0))||void 0===_emoji$codePointAt?void 0:_emoji$codePointAt.toString(16);return unicode?Object(jsx_runtime.jsx)("span",{style:{lineHeight:0},children:Object(jsx_runtime.jsx)("img",{alt:emoji,className:className,src:sources[source].replace("{unicode}",unicode),style:{display:"inline-block",height:height}})}):null}Semoji.displayName="Semoji";try{Semoji.displayName="Semoji",Semoji.__docgenInfo={description:"",displayName:"Semoji",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},emoji:{defaultValue:null,description:"",name:"emoji",required:!0,type:{name:"string"}},height:{defaultValue:{value:"1em"},description:"",name:"height",required:!1,type:{name:"string"}},source:{defaultValue:null,description:"",name:"source",required:!0,type:{name:"enum",value:[{value:'"GitHub"'},{value:'"Twitter"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Semoji.tsx#Semoji"]={docgenInfo:Semoji.__docgenInfo,name:"Semoji",path:"src/Semoji.tsx#Semoji"})}catch(__react_docgen_typescript_loader_error){}var _excluded=["components"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}var Semoji_stories_Template=function Template(args){return Object(esm.b)(Semoji,_extends({},args,{mdxType:"Semoji"}))};Semoji_stories_Template.displayName="Template";var layoutProps={Template:Semoji_stories_Template};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,_excluded);return Object(esm.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(esm.b)(dist_esm.d,{title:"switch-emoji",component:Semoji,mdxType:"Meta"}),Object(esm.b)("h1",{id:"switch-emoji-"},"Switch Emoji 💃"),Object(esm.b)("p",null,Object(esm.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/switch-emoji",target:"_blank",rel:"nofollow noopener noreferrer"},Object(esm.b)("img",{parentName:"a",src:"https://badgen.net/npm/v/switch-emoji",alt:"Semoji"})),"\n",Object(esm.b)("a",{parentName:"p",href:"https://github.com/MauricioRobayo/switch-emoji/actions/workflows/main.yml",target:"_blank",rel:"nofollow noopener noreferrer"},Object(esm.b)("img",{parentName:"a",src:"https://github.com/MauricioRobayo/switch-emoji/actions/workflows/main.yml/badge.svg",alt:"CI"})),"\n",Object(esm.b)("a",{parentName:"p",href:"https://codecov.io/gh/MauricioRobayo/switch-emoji",target:"_blank",rel:"nofollow noopener noreferrer"},Object(esm.b)("img",{parentName:"a",src:"https://codecov.io/gh/MauricioRobayo/switch-emoji/branch/main/graph/badge.svg?token=gkrRmHZHGB",alt:"codecov"})),"\n",Object(esm.b)("a",{parentName:"p",href:"https://www.codefactor.io/repository/github/mauriciorobayo/switch-emoji",target:"_blank",rel:"nofollow noopener noreferrer"},Object(esm.b)("img",{parentName:"a",src:"https://www.codefactor.io/repository/github/mauriciorobayo/switch-emoji/badge",alt:"CodeFactor"})),"\n",Object(esm.b)("a",{parentName:"p",href:"https://bundlephobia.com/package/switch-emoji",target:"_blank",rel:"nofollow noopener noreferrer"},Object(esm.b)("img",{parentName:"a",src:"https://badgen.net/bundlephobia/minzip/switch-emoji",alt:"bundlephobia"}))),Object(esm.b)("p",null,Object(esm.b)("strong",{parentName:"p"},"Switchable Twitter/GitHub emojis"),"."),Object(esm.b)("table",null,Object(esm.b)("thead",{parentName:"table"},Object(esm.b)("tr",{parentName:"thead"},Object(esm.b)("th",{parentName:"tr",align:null},"GitHub"),Object(esm.b)("th",{parentName:"tr",align:null},"Twitter"))),Object(esm.b)("tbody",{parentName:"table"},Object(esm.b)("tr",{parentName:"tbody"},Object(esm.b)("td",{parentName:"tr",align:null},Object(esm.b)(Semoji,{emoji:"💃",source:"GitHub",mdxType:"Semoji"})),Object(esm.b)("td",{parentName:"tr",align:null},Object(esm.b)(Semoji,{emoji:"💃",source:"Twitter",mdxType:"Semoji"}))),Object(esm.b)("tr",{parentName:"tbody"},Object(esm.b)("td",{parentName:"tr",align:null},Object(esm.b)(Semoji,{emoji:"🎆",source:"GitHub",mdxType:"Semoji"})),Object(esm.b)("td",{parentName:"tr",align:null},Object(esm.b)(Semoji,{emoji:"🎆",source:"Twitter",mdxType:"Semoji"}))),Object(esm.b)("tr",{parentName:"tbody"},Object(esm.b)("td",{parentName:"tr",align:null},Object(esm.b)(Semoji,{emoji:"🎉",source:"GitHub",mdxType:"Semoji"})),Object(esm.b)("td",{parentName:"tr",align:null},Object(esm.b)(Semoji,{emoji:"🎉",source:"Twitter",mdxType:"Semoji"}))),Object(esm.b)("tr",{parentName:"tbody"},Object(esm.b)("td",{parentName:"tr",align:null},Object(esm.b)(Semoji,{emoji:"🔫",source:"GitHub",mdxType:"Semoji"})),Object(esm.b)("td",{parentName:"tr",align:null},Object(esm.b)(Semoji,{emoji:"🔫",source:"Twitter",mdxType:"Semoji"}))))),Object(esm.b)("h2",{id:"installation"},"Installation"),Object(esm.b)("pre",null,Object(esm.b)("code",{parentName:"pre",className:"language-sh"},"npm install --save switch-emoji\n")),Object(esm.b)("h2",{id:"usage"},"Usage"),Object(esm.b)("pre",null,Object(esm.b)("code",{parentName:"pre",className:"language-js"},'import { Semoji } from "switch-emoji";\n\nexport function SomeComponent() {\n  return <Semoji emoji="👋" source="GitHub" />;\n}\n')),Object(esm.b)("h2",{id:"twemoji"},"Twemoji"),Object(esm.b)("p",null,"You can wrap ",Object(esm.b)("inlineCode",{parentName:"p"},"Semoji")," to create you own ",Object(esm.b)("inlineCode",{parentName:"p"},"Twemoji")," React component:"),Object(esm.b)("pre",null,Object(esm.b)("code",{parentName:"pre",className:"language-ts"},'import React from "react";\nimport { Semoji, SemojiProps } from "switch-emoji";\n\ntype Props = Omit<SemojiProps, "source">;\n\nexport function Twemoji(props: Props): JSX.Element | null {\n  return <Semoji {...props} source="Twitter" />;\n}\n')),Object(esm.b)("h2",{id:"props"},"Props"),Object(esm.b)(dist_esm.b,{mdxType:"ArgsTable"}),Object(esm.b)("h2",{id:"twitter-emoji"},"Twitter Emoji"),Object(esm.b)(dist_esm.c,{mdxType:"Canvas"},Object(esm.b)(dist_esm.e,{name:"Twitter Thumbs Up",args:{emoji:"👍",source:"Twitter"},mdxType:"Story"},Semoji_stories_Template.bind({}))),Object(esm.b)("h2",{id:"github-emoji"},"GitHub Emoji"),Object(esm.b)(dist_esm.c,{mdxType:"Canvas"},Object(esm.b)(dist_esm.e,{name:"GitHub Thumbs Up",args:{emoji:"👍",source:"GitHub"},mdxType:"Story"},Semoji_stories_Template.bind({}))),Object(esm.b)("h2",{id:"typescript"},"TypeScript"),Object(esm.b)("p",null,"The component is written in TypeScript and type definitions are included."),Object(esm.b)("h2",{id:"acknowledgements"},"Acknowledgements"),Object(esm.b)("p",null,"This is an ",Object(esm.b)("a",{parentName:"p",href:"https://github.com/MauricioRobayo/switch-emoji",target:"_blank",rel:"nofollow noopener noreferrer"},"open-source")," project, all contributions are welcome and highly appreciated."),Object(esm.b)("h2",{id:"license"},"License"),Object(esm.b)("p",null,Object(esm.b)("a",{parentName:"p",href:"https://github.com/MauricioRobayo/switch-emoji/blob/main/LICENSE",target:"_blank",rel:"nofollow noopener noreferrer"},"MIT")))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;var twitterThumbsUp=Semoji_stories_Template.bind({});twitterThumbsUp.storyName="Twitter Thumbs Up",twitterThumbsUp.args={emoji:"👍",source:"Twitter"},twitterThumbsUp.parameters={storySource:{source:"args => <Semoji {...args} />"}};var gitHubThumbsUp=Semoji_stories_Template.bind({});gitHubThumbsUp.storyName="GitHub Thumbs Up",gitHubThumbsUp.args={emoji:"👍",source:"GitHub"},gitHubThumbsUp.parameters={storySource:{source:"args => <Semoji {...args} />"}};var componentMeta={title:"switch-emoji",component:Semoji,includeStories:["twitterThumbsUp","gitHubThumbsUp"]},mdxStoryNameToKey={"Twitter Thumbs Up":"twitterThumbsUp","GitHub Thumbs Up":"gitHubThumbsUp"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(esm.b)(dist_esm.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentMeta:componentMeta},Object(esm.b)(MDXContent,null))}});__webpack_exports__.default=componentMeta}},[[458,2,3]]]);