(self.webpackChunkreact_webpack=self.webpackChunkreact_webpack||[]).push([[296],{2193:function(e,t,n){"use strict";n.d(t,{eV:function(){return s},a0:function(){return a},ZP:function(){return p},t6:function(){return f}});var r=n(5379),o=n(7294);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e){var t=u({},e);function n(e){var n=u({},e);return o.createElement(t.component,u({},n,{route:{routes:t.routes}}))}return n.displayName="WithSubRoutes".concat((0,r.Z)(t.component)),n}var i=n(5977),a=["/","/search/:query"],s=["/film/:id"],l=[{path:a.concat.apply(a,s),component:(0,o.lazy)((function(){return n.e(957).then(n.bind(n,2957))})),exact:!0,routes:[{path:a,component:(0,o.lazy)((function(){return Promise.all([n.e(216),n.e(315)]).then(n.bind(n,8315))})),exact:!0},{path:s,component:(0,o.lazy)((function(){return n.e(775).then(n.bind(n,775))})),exact:!0}]},{path:"*",component:(0,o.lazy)((function(){return n.e(650).then(n.bind(n,8650))})),status:404}],f=function(e){return o.createElement(i.AW,{key:"app-route-".concat(e.path),path:e.path,render:c(e),exact:e.exact,status:e.status})},p=l},6385:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(6010),o=n(7294),u=n(5697),c=n.n(u);function i(e){var t=e.children,n=e.type,r=e.classes,u=e.tabIndex,c=e.onClick;return o.createElement("button",{type:n,className:r,onClick:c,tabIndex:u},t)}function a(e){var t=e.children,n=e.type,u=e.classes,c=e.tabIndex,a=e.onClick,s=(0,o.useMemo)((function(){return(0,r.Z)("btn",u)}),[u]);return o.createElement(i,{type:n,classes:s,onClick:a,tabIndex:c},t)}i.defaultProps={type:"button",classes:"",onClick:null,tabIndex:void 0},i.propTypes={type:c().oneOf(["button","submit","reset"]),classes:c().string,onClick:c().func,tabIndex:c().number},a.defaultProps=i.defaultProps,a.propTypes=i.propTypes;var s=a},7484:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(7294),o=n(5697),u=n.n(o),c=n(1436),i=n(7625);function a(e){var t=e.body,n=e.footer,o=e.title,u=e.onCloseTrigger;return r.createElement("div",{className:"modal"},r.createElement("div",{className:"modal__content"},r.createElement("button",{type:"button",className:"modal__close-trigger",onClick:u},r.createElement(i.G,{size:"2x",icon:c.NBC})),o&&r.createElement("h3",{className:"modal__header"},o),r.createElement("div",{className:"modal__body"},t),n&&r.createElement("div",{className:"modal__footer"},n)))}a.defaultProps={footer:null,title:null},a.propTypes={body:u().element.isRequired,footer:u().element,title:u().string,onCloseTrigger:u().func.isRequired};var s=(0,r.memo)(a);function l(e){var t,n,o=e.body,u=e.footer,c=e.title,i=e.onCloseTrigger,a=(0,r.useCallback)((function(e){e.target.classList.contains("modal")&&i()}),[i]);return t=document,n=a,(0,r.useEffect)((function(){return t.addEventListener("click",n,!1),function(){t.removeEventListener("click",n,!1)}}),[]),r.createElement(s,{title:c,body:o,footer:u,onCloseTrigger:i})}l.defaultProps={footer:null,title:null},l.propTypes={body:u().element.isRequired,footer:u().element,title:u().string,onCloseTrigger:u().func.isRequired};var f=(0,r.memo)(l)},335:function(e,t,n){"use strict";n.d(t,{Ml:function(){return r},Pt:function(){return o},w3:function(){return u},vo:function(){return c},rN:function(){return i},Gs:function(){return a},KY:function(){return s},z4:function(){return l}});var r="Add Movie",o="Edit Movie",u="Delete Movie",c="Add",i="Edit",a="Delete",s="Are you sure you want to delete this movie?",l=[{label:"Documentary",value:"documentary"},{label:"Comedy",value:"comedy"},{label:"Horror",value:"horror"},{label:"Crime",value:"crime"}]},1552:function(e,t,n){"use strict";n.d(t,{Oi:function(){return a},fJ:function(){return l},sl:function(){return f},Y8:function(){return m}});var r=n(2605),o=n(9501);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){return"string"!=typeof e?e:{value:e.toLowerCase(),label:e}}function s(e){return"string"==typeof e?e:e.label}function l(e){return c(c({},e),{},{release_date:new Date(e.release_date)})}function f(e){return c(c({},e),{},{genres:e.genres.map(s),release_date:(0,r.Z)(e.release_date,"yyyy-MM-dd"),runtime:Number(e.runtime),tagline:e.tagline||void 0})}var p=function(e){return"".concat(e," is required")},d=function(e){return"Select at least one ".concat(e," to proceed")},m=o.Ry().shape({title:o.Z_().required(p("Title")),release_date:o.hT("Input a valid Release Date to proceed").nullable(),poster_path:o.Z_().url("Input a valid URL to proceed").required(p("Movie Poster URL")),genres:o.IX().min(1,d("genre")).required(d("genre")),overview:o.Z_().required(p("Overview")),runtime:o.Rx().typeError(p("Runtime")).required(p("Runtime"))})},101:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(5379),o=n(6010),u=n(7294);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.classes;function i(t){var r=c({},t),i=(0,u.useMemo)((function(){return(0,o.Z)("section",n)}),[n]);return u.createElement("section",{className:i},u.createElement(e,r))}return i.displayName="WithSection".concat((0,r.Z)(e)),i}},6239:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(5379),o=n(7294);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e){function t(t){var n=u({},t);return o.createElement("div",{className:"wrapper"},o.createElement(e,n))}return t.displayName="WithWrapper".concat((0,r.Z)(e)),t}},577:function(e,t,n){"use strict";n.d(t,{vu:function(){return r},c9:function(){return o},xg:function(){return u},VP:function(){return c}});var r="IDLE",o="LOADING",u="COMPLETE",c="ERROR"},8689:function(e,t,n){"use strict";var r=n(4021),o=n(5572),u=n(1971),c=n(7703),i=n(577),a=n(5697),s=n.n(a),l=n(7294),f=n(5977),p=n(3727);function d(e){var t=e.name,n=e.subName;return l.createElement("h1",{className:"brand-logo"},l.createElement(p.rU,{to:"/"},t,l.createElement("span",{className:"font--regular"},n)))}d.defaultProps={name:"netflix",subName:"roulette"},d.propTypes={name:s().string,subName:s().string};var m=(0,l.memo)(d),v=n(101),y=n(6239),b=(0,v.Z)((0,y.Z)(m),{classes:"background--grey"});function O(){return l.createElement("footer",{className:"text-align--center"},l.createElement(b,null))}var E=(0,l.memo)(O),g=n(2193),h=n(6010);function j(e){var t=e.actionButton,n=e.classes;return l.createElement("header",{className:n},l.createElement("div",{className:"header-nav"},l.createElement("div",{className:"header-nav__logo-container"},l.createElement(m,null)),t&&l.createElement("div",{className:"header-nav__btn-container"},t)))}j.defaultProps={classes:"",actionButton:void 0},j.propTypes={actionButton:s().element,classes:s().string};var P=(0,l.memo)(j),S="header-nav-container",_=n(3680),w=n(4051),I=n(335),T=n(6385),M=n(1436),C=n(7625);function D(e){var t=e.onClick;return l.createElement(T.Z,{classes:"btn--secondary btn--with-icon",onClick:t},l.createElement(C.G,{size:"xs",icon:M.r8p}),"Add Movie")}D.propTypes={onClick:s().func.isRequired};var A=D;function N(e){var t=e.setFormAction,n=e.setIsOpenedModal,r=(0,l.useCallback)((function(){t(I.vo),n(!0)}),[]);return l.createElement(A,{onClick:r})}N.propTypes={setFormAction:s().func.isRequired,setIsOpenedModal:s().func.isRequired};var R=N,x={setFormAction:w.d0,setIsOpenedModal:_.$m},L=(0,c.$j)(null,x)((0,l.memo)(R));function k(){return l.createElement(p.rU,{to:"/",className:"color--primary",title:"Search movies"},l.createElement(C.G,{size:"lg",icon:M.wn1,rotation:90}))}var Z=(0,l.memo)(k),V=[{path:g.a0,component:L,exact:!0},{path:g.eV,component:Z,exact:!0}];function q(){var e=(0,f.$B)(g.a0).isExact,t=(0,l.useMemo)((function(){return(0,h.Z)(S,(t={},n="".concat(S,"--with-bg"),r=!e,n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t));var t,n,r}),[e]);return l.createElement(P,{headerLogo:l.createElement(m,null),actionButton:l.createElement(f.rs,null,V.map(g.t6)),classes:t})}function U(){return l.createElement("div",{className:"spinner"},l.createElement("div",{className:"spinner__circle"}),l.createElement("p",null,"Loading..."))}var F=(0,l.memo)(U),z=n(5194),B=n(7484);function Y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,u=void 0;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){o=!0,u=e}finally{try{r||null==i.return||i.return()}finally{if(o)throw u}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return J(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?J(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function J(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function H(e){var t=e.title,n=e.message,r=e.icon;return l.createElement("div",{className:"text-align--center"},l.createElement(C.G,{className:"color--primary",size:"3x",icon:r}),l.createElement("h1",{className:"font--regular text-transform--uppercase"},t),l.createElement("p",null,n))}function G(){return(G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function W(e){var t=e.error,n=e.success,r=e.status,o=e.removeNotification,u=function(){var e=Y((0,l.useState)(!1),2),t=e[0],n=e[1],r=Y((0,l.useState)({}),2),o=r[0],u=r[1],c=(0,l.useCallback)((function(e,t){u({title:(null==e?void 0:e.title)||t,message:null==e?void 0:e.message}),n(!!e)}),[]);return{isOpened:t,setIsOpened:n,notification:o,setNotification:c}}(),c=u.isOpened,a=u.setIsOpened,s=u.notification,f=u.setNotification;(0,l.useEffect)((function(){r===i.VP?f(t,"Oops an Error occurred!"):r===i.xg&&f(n,"Congratulations!")}),[n,t,r]);var p=(0,l.useMemo)((function(){return r===i.VP?M.nYk:M.f8k}),[c]),d=(0,l.useCallback)((function(){a(!1),o()}),[]);return c?l.createElement(B.Z,{onCloseTrigger:d,body:l.createElement(H,G({icon:p},s))}):null}H.defaultProps={message:""},H.propTypes={title:s().string.isRequired,message:s().string,icon:s().object.isRequired},W.defaultProps={error:null,success:null},W.propTypes={error:s().object,success:s().object,status:s().string.isRequired,removeNotification:s().func.isRequired};var $={removeNotification:z.WR},K=(0,c.$j)((function(e){return{error:(0,o.tl)(e),success:(0,o.NR)(e),status:(0,o.St)(e)}}),$)((0,l.memo)(W)),X=(0,l.lazy)((function(){return Promise.all([n.e(216),n.e(497)]).then(n.bind(n,497))}));function Q(e){var t=e.modalIsOpened,n=e.showSpinner;return l.createElement(l.Fragment,null,l.createElement(q,null),l.createElement(l.Suspense,{fallback:l.createElement(F,null)},l.createElement(f.rs,null,g.ZP.map(g.t6)),t&&l.createElement(X,null)),l.createElement(K,null),l.createElement(E,null),n&&l.createElement(F,null))}Q.propTypes={modalIsOpened:s().bool.isRequired,showSpinner:s().bool.isRequired};var ee=Q;function te(e){var t=e.status,n=e.modalIsOpened,r=(0,l.useMemo)((function(){return t===i.c9}),[t]),o=(0,f.TH)();return(0,l.useEffect)((function(){window.document.body.scrollTo({top:0,behavior:"smooth"})}),[o]),l.createElement(ee,{showSpinner:r,modalIsOpened:n})}te.propTypes={status:s().string.isRequired,modalIsOpened:s().bool.isRequired};var ne={fetchMovies:u.vw,selectMovie:u.W3},re=(0,c.$j)((function(e){return{sortBy:(0,o.Rk)(e),filter:(0,o.DI)(e),selectedMovie:(0,o.$Z)(e),status:(0,o.St)(e),modalIsOpened:(0,r.iz)(e)}}),ne)(te),oe=n(988),ue=n(4890),ce=n(3894),ie=n(9039);function ae(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function se(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ae(Object(n),!0).forEach((function(t){le(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ae(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function le(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var fe={selectedMovie:void 0,action:void 0},pe=n(5398);function de(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function me(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?de(Object(n),!0).forEach((function(t){ve(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):de(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ve(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ye={isOpened:!1,title:""},be=n(1552),Oe=n(1678);function Ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ge(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ee(Object(n),!0).forEach((function(t){he(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ee(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function he(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var je={status:i.vu,items:[],limit:12,offset:0,totalAmount:0,sortBy:"release_date",searchBy:"title",sortOrder:"desc",filter:[""],selectedMovie:null,error:null,success:null,invalidate:0},Pe=(0,ue.UY)({movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Oe.Bs:case Oe.Vj:case Oe.zR:case Oe.b4:case Oe.Z1:return ge(ge({},e),{},{status:i.c9});case Oe.Jp:return ge(ge({},e),{},{status:i.xg,invalidate:e.invalidate+1,success:{message:"The movie has been added to database successfully"}});case Oe.C:return ge(ge({},e),{},{status:i.xg,invalidate:e.invalidate+1,success:{message:"The movie has been deleted from database successfully"}});case Oe.jE:return ge(ge({},e),{},{status:i.xg,items:e.items.map((function(e){return e.id===t.payload.id?(0,be.fJ)(t.payload):e})),success:{message:"The movie has been updated to database successfully"}});case Oe.c0:case Oe.ex:case Oe.Cf:case Oe.dZ:case Oe.QX:return ge(ge({},e),{},{status:i.VP,error:t.error});case Oe.YT:return ge(ge({},e),{},{status:i.xg,items:t.payload.data.map(be.fJ),totalAmount:t.payload.totalAmount});case Oe.gQ:return ge(ge({},e),{},{sortBy:t.payload.value,sortOrder:t.payload.sortOrder});case Oe.MY:return ge(ge({},e),{},{filter:t.payload});case Oe.HA:return ge(ge({},e),{},{selectedMovie:t.payload,status:i.xg});case Oe.Kf:return ge(ge({},e),{},{error:null,success:null});default:return e}},modal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case pe.IN:return me(me({},e),{},{isOpened:t.payload});case pe.li:return me(me({},e),{},{title:t.payload});case pe.Kz:return ye;default:return e}},modalForm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ie.N1:return se(se({},e),{},{selectedMovie:t.payload});case ie.IA:return se(se({},e),{},{action:t.payload});case ie.Hx:return fe;default:return e}}}),Se=!(0,oe.Z)()&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ue.qC,_e=(0,ue.MT)(Pe,Se((0,ue.md)(ce.Z))),we=n(3935),Ie=document.getElementById("root");we.render(l.createElement(l.StrictMode,null,l.createElement(c.zt,{store:_e},l.createElement(p.VK,null,l.createElement(re,null)))),Ie),(0,oe.Z)()},3680:function(e,t,n){"use strict";n.d(t,{$m:function(){return o},tZ:function(){return u},gk:function(){return c}});var r=n(5398),o=function(e){return{type:r.IN,payload:e}},u=function(e){return{type:r.li,payload:e}},c=function(){return{type:r.Kz}}},4051:function(e,t,n){"use strict";n.d(t,{ID:function(){return o},d0:function(){return u},Ev:function(){return c}});var r=n(9039),o=function(e){return{type:r.N1,payload:e}},u=function(e){return{type:r.IA,payload:e}},c=function(){return{type:r.Hx}}},5194:function(e,t,n){"use strict";n.d(t,{Jt:function(){return o},YC:function(){return u},DL:function(){return c},pm:function(){return i},lR:function(){return a},AE:function(){return s},fd:function(){return l},SO:function(){return f},sM:function(){return p},a0:function(){return d},c_:function(){return m},oT:function(){return v},ew:function(){return y},oG:function(){return b},DS:function(){return O},E6:function(){return E},Ew:function(){return g},WR:function(){return h}});var r=n(1678),o=function(){return{type:r.b4}},u=function(e){return{type:r.YT,payload:e}},c=function(e){return{type:r.dZ,error:e}},i=function(e){return{type:r.Bs,payload:e}},a=function(e){return{type:r.Jp,payload:e}},s=function(e){return{type:r.c0,error:e}},l=function(e){return{type:r.zR,payload:e}},f=function(e){return{type:r.jE,payload:e}},p=function(e){return{type:r.Cf,error:e}},d=function(e){return{type:r.Vj,payload:e}},m=function(e){return{type:r.C,payload:e}},v=function(e){return{type:r.ex,error:e}},y=function(){return{type:r.Z1}},b=function(e){return{type:r.QX,error:e}},O=function(e){return{type:r.HA,payload:e}},E=function(e){return{type:r.gQ,payload:e}},g=function(e){return{type:r.MY,payload:e}},h=function(){return{type:r.Kf}}},5398:function(e,t,n){"use strict";n.d(t,{IN:function(){return o},li:function(){return u},Kz:function(){return c}});var r=function(e){return"[MODAL] ".concat(e)},o=r("SET_IS_OPENED_MODAL"),u=r("SET_MODAL_TITLE"),c=r("RESET_MODAL_STATE")},9039:function(e,t,n){"use strict";n.d(t,{N1:function(){return o},IA:function(){return u},Hx:function(){return c}});var r=function(e){return"[MODAL_FORM] ".concat(e)},o=r("SET_FORM_SELECTED_MOVIE"),u=r("SET_FORM_ACTION"),c=r("RESET_MODAL_FORM_STATE")},1678:function(e,t,n){"use strict";n.d(t,{b4:function(){return o},YT:function(){return u},dZ:function(){return c},Bs:function(){return i},Jp:function(){return a},c0:function(){return s},Vj:function(){return l},C:function(){return f},ex:function(){return p},zR:function(){return d},jE:function(){return m},Cf:function(){return v},Z1:function(){return y},HA:function(){return b},QX:function(){return O},gQ:function(){return E},MY:function(){return g},Kf:function(){return h}});var r=function(e){return"[MOVIES] ".concat(e)},o=r("FETCH_MOVIES"),u=r("FETCH_MOVIES_SUCCESS"),c=r("MOVIES_FETCHED_FAILURE"),i=r("ADD_MOVIE"),a=r("ADD_MOVIE_SUCCESS"),s=r("ADD_MOVIE_FAILURE"),l=r("DELETE_MOVIE"),f=r("DELETE_MOVIE_SUCCESS"),p=r("DELETE_MOVIE_FAILURE"),d=r("UPDATE_MOVIE"),m=r("UPDATE_MOVIE_SUCCESS"),v=r("UPDATE_MOVIE_FAILURE"),y=r("SELECT_MOVIE"),b=r("SELECT_MOVIE_SUCCESS"),O=r("SELECT_MOVIE_FAILURE"),E=r("APPLY_SORT"),g=r("APPLY_FILTER"),h=r("REMOVE_NOTIFICATION")},4021:function(e,t,n){"use strict";n.d(t,{iz:function(){return o},F8:function(){return u}});var r=function(e){return e.modal},o=function(e){return r(e).isOpened},u=function(e){return r(e).title}},5572:function(e,t,n){"use strict";n.d(t,{n7:function(){return r},bJ:function(){return o},$Z:function(){return u},rX:function(){return c},DI:function(){return i},Rk:function(){return a},St:function(){return s},tl:function(){return l},NR:function(){return f},I:function(){return p}});var r=function(e){return e.movies},o=function(e){return r(e).items},u=function(e){return r(e).selectedMovie},c=function(e){return r(e).totalAmount},i=function(e){return r(e).filter},a=function(e){return r(e).sortBy},s=function(e){return r(e).status},l=function(e){return r(e).error},f=function(e){return r(e).success},p=function(e){return r(e).invalidate}},1971:function(e,t,n){"use strict";n.d(t,{dO:function(){return E},fx:function(){return h},vw:function(){return O},W3:function(){return j},u8:function(){return g}});var r=n(988);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:500;return new Promise((function(t){return setTimeout(t,e)}))}((0,r.Z)()?0:500).then((function(){return fetch(e,t).then((function(e){return function(e){return e.json().then((function(e){return e})).catch((function(){return null}))}(e).then((function(t){if(!e.ok)throw t;return t}))}))}))}var a,s,l=(a="http://localhost:4000/movies",s={"Content-Type":"application/json"},{get:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=new URLSearchParams(t).toString();return i("".concat(a).concat(e,"?").concat(r),u({method:"GET",headers:s},n))},post:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return i("".concat(a).concat(e),u({method:"POST",body:JSON.stringify(t),headers:s},n))},put:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return i("".concat(a).concat(e),u({method:"PUT",headers:s,body:JSON.stringify(t)},n))},delete:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return i("".concat(a).concat(e),u({method:"DELETE",headers:s},t))}}),f=function(e){return l.get("/",e)},p=function(e){return e?l.get("/".concat(e)):Promise.reject(new Error("[MovieServiceAPI]: getOne function requires movieId as an argument!"))},d=function(e){return e?l.post("/",e):Promise.reject(new Error("[MovieServiceAPI]: add function requires movie as an argument!"))},m=function(e){return e?l.delete("/".concat(e)):Promise.reject(new Error("[MovieServiceAPI]: delete function requires movieId as an argument!"))},v=function(e){return e?l.put("/",e):Promise.reject(new Error("[MovieServiceAPI]: update function requires movie as an argument!"))},y=n(5194),b=n(5572),O=function(e){var t=e.search;return function(e,n){e((0,y.Jt)());var r=(0,b.n7)(n());return f({sortBy:r.sortBy,sortOrder:r.sortOrder,filter:r.filter,offset:r.offset,limit:r.limit,searchBy:r.searchBy,search:t}).then((function(t){return e((0,y.YC)(t))})).catch((function(t){return e((0,y.DL)(t))}))}},E=function(e){return function(t){return t((0,y.pm)(e)),d(e).then((function(e){return t((0,y.lR)(e))})).catch((function(e){return t((0,y.AE)(e))}))}},g=function(e){return function(t){return t((0,y.fd)(e)),v(e).then((function(e){return t((0,y.SO)(e))})).catch((function(e){return t((0,y.sM)(e))}))}},h=function(e){return function(t){return t((0,y.a0)(e)),m(e).then((function(e){return t((0,y.c_)(e))})).catch((function(e){return t((0,y.oT)(e))}))}},j=function(e){return function(t,n){if(t((0,y.ew)()),!e)return t((0,y.DS)(null));var r=(0,b.bJ)(n()).find((function(t){return t.id===e}));return r?t((0,y.DS)(r)):p(e).then((function(e){return t((0,y.DS)(e))})).catch((function(e){return t((0,y.oG)(e))}))}}},5379:function(e,t,n){"use strict";function r(e){return e.displayName||e.name||"Component"}n.d(t,{Z:function(){return r}})},988:function(e,t,n){"use strict";function r(){return!0}n.d(t,{Z:function(){return r}})}},function(e){"use strict";var t;t=e.x,e.x=function(){var n=t();return[216,497,775,650].map(e.E),n}},[[8689,666,216]]]);