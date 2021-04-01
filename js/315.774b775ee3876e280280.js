(self.webpackChunkreact_webpack=self.webpackChunkreact_webpack||[]).push([[315],{1910:function(e,r,t){"use strict";t.d(r,{Z:function(){return i}});var n=t(7294),a=t(5697),s=t.n(a);function l(e){var r=e.label,t=e.id;return r&&n.createElement("label",{className:"form__label",htmlFor:t},r)}l.defaultProps={label:"",id:""},l.propTypes={label:s().string,id:s().string};var i=(0,n.memo)(l)},9252:function(e,r,t){"use strict";t.d(r,{Z:function(){return d}});var n=t(6010),a=t(7294),s=t(6193),l=t(5697),i=t.n(l),c=t(1910);function u(e){var r=e.classes,t=e.label,n=e.value,s=e.type,l=e.placeholder,i=e.name,u=e.id,o=e.required,p=e.pattern,m=e.disabled,d=e.onChange,f=e.onClick,v=e.onBlur,b=e.children;return a.createElement(a.Fragment,null,a.createElement(c.Z,{label:t,id:u}),a.createElement("input",{className:r,type:s,name:i,id:u,placeholder:l,value:n||"",required:o,pattern:p,disabled:m,onChange:d,onClick:f,onBlur:v}),b)}u.defaultProps={type:"text",placeholder:"",name:"",id:"",classes:"",value:"",label:"",required:void 0,pattern:void 0,disabled:void 0,onChange:void 0,onClick:void 0,onBlur:void 0},u.propTypes={type:i().string,placeholder:i().string,name:i().string,id:i().string,classes:i().string,value:i().oneOfType([i().string,i().number]),label:i().string,required:i().bool,pattern:i().string,disabled:i().bool,onChange:i().func,onClick:i().func,onBlur:i().func};var o=(0,s.Z)(u);function p(){return(p=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function m(e){var r=e.classes,t=e.children,s=function(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}(e,["classes","children"]),l=(0,a.useMemo)((function(){return(0,n.Z)("form__input",r)}),[r]);return a.createElement(o,p({classes:l},s),t)}m.defaultProps=o.defaultProps,m.propTypes=o.propTypes;var d=(0,a.memo)(m)},6652:function(e,r,t){"use strict";t.d(r,{Z:function(){return o}});var n=t(6010),a=t(5697),s=t.n(a),l=t(7294);function i(e){var r=e.children,t=e.classes;return l.createElement("div",{className:t},r)}i.defaultProps={classes:""},i.propTypes={classes:s().string};var c=i;function u(e){var r=e.children,t=e.classes,a=(0,l.useMemo)((function(){return(0,n.Z)("column",t)}),[t]);return l.createElement(c,{classes:a},r)}u.defaultProps={classes:""},u.propTypes={classes:s().string};var o=u},6929:function(e,r,t){"use strict";t.d(r,{Z:function(){return o}});var n=t(6010),a=t(5697),s=t.n(a),l=t(7294);function i(e){var r=e.children,t=e.classes;return l.createElement("div",{className:t},r)}i.defaultProps={classes:""},i.propTypes={classes:s().string};var c=i;function u(e){var r=e.children,t=e.classes,a=(0,l.useMemo)((function(){return(0,n.Z)("row",t)}),[t]);return l.createElement(c,{classes:a},r)}u.defaultProps={classes:""},u.propTypes={classes:s().string};var o=u},6193:function(e,r,t){"use strict";t.d(r,{Z:function(){return l}});var n=t(5379),a=t(7294);function s(){return(s=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function l(e){function r(r){var t=s({},r);return a.createElement("div",{className:"form-element-wrapper"},a.createElement(e,t))}return r.displayName="WithFormElementWrapper".concat((0,n.Z)(e)),r}},5541:function(e,r,t){"use strict";t.d(r,{K:function(){return c}});var n=t(5379),a=t(5697),s=t.n(a),l=t(7294);function i(){return(i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function c(e){function r(r){var t=r.touched,n=r.errors,a=r.values,s=r.name,c=function(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}(r,["touched","errors","values","name"]);return l.createElement(l.Fragment,null,l.createElement(e,i({value:a[s],name:s},c)),t[s]&&n[s]&&l.createElement("div",{className:"form__error"},n[s]))}return r.displayName="WithFormikError".concat((0,n.Z)(e)),r.propTypes={touched:s().object.isRequired,errors:s().object.isRequired,values:s().object.isRequired,name:s().string.isRequired},r}},8315:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return P}});var n=t(3564),a=t(5697),s=t.n(a),l=t(7294),i=t(5977),c=function(e){return l.createElement("source",{key:e.id,media:e.media,srcSet:e.srcSet})};function u(e){var r=e.children,t=e.imgSrc,n=e.imgAlt,a=e.sources;return l.createElement("section",{className:"banner"},l.createElement("picture",null,a.map(c),l.createElement("img",{src:t,alt:n})),l.createElement("div",{className:"banner__content"},l.createElement("div",{className:"wrapper"},r)))}u.defaultProps={sources:[]},u.propTypes={imgSrc:s().string.isRequired,imgAlt:s().string.isRequired,sources:s().arrayOf(s().shape({id:s().string.isRequired,media:s().string.isRequired,srcSet:s().string.isRequired}))};var o=u,p=t(6385),m=t(9252),d=t(6652),f=t(6929),v=t(6193),b=t(5541),y=t(688),h=(0,v.Z)(p.Z),g=(0,b.K)(m.Z);function E(e){var r=e.title,t=e.formik,n=t.values,a=t.touched,s=t.errors,i=t.handleSubmit,c=t.handleReset,u=t.handleChange;return l.createElement(o,{imgSrc:y,imgAlt:"Posts of movies on the wall"},l.createElement("h1",{className:"banner__title"},r),l.createElement("form",{onSubmit:i,onReset:c},l.createElement(f.Z,null,l.createElement(d.Z,{classes:"column--m-9"},l.createElement(g,{name:"query",placeholder:"What do you want to watch?",values:n,touched:a,errors:s,onChange:u})),l.createElement(d.Z,{classes:"column--m-3"},l.createElement(h,{type:"submit",classes:"btn--primary btn--full-width"},"Search")))))}E.defaultProps={title:"Find your Movie"},E.propTypes={title:s().string,formik:s().object.isRequired};var O=(0,l.memo)(E);function q(e){var r=e.title,t=(0,i.k6)(),a=(0,i.UO)().query,s=void 0===a?"":a,c=(0,l.useCallback)((function(e,r){e.query?t.push("/search/".concat(e.query)):t.push("/"),r.setSubmitting(!1)}),[]),u=(0,l.useCallback)((function(e){return e.query||s?{}:{query:"Please input a query to search!"}}),[s]),o=(0,n.TA)({initialValues:{query:s},onSubmit:c,validate:u});return(0,l.useEffect)((function(){o.setFieldValue("query",s),o.setFieldTouched("query",!1)}),[s]),l.createElement(O,{title:r,formik:o})}q.defaultProps={title:"Find your Movie"},q.propTypes={title:s().string};var k=(0,l.memo)(q);function P(){return l.createElement(k,null)}},688:function(e,r,t){"use strict";e.exports=t.p+"8e99483bfe28b5b6cff5.jpg"}}]);