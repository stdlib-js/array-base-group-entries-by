"use strict";var g=function(t,r){return function(){try{return r||t((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var c=g(function(m,l){
var p=require('@stdlib/assert-is-array/dist'),f=require('@stdlib/array-base-resolve-getter/dist');function q(t,r,i){var o,n,a,s,u,v,e;for(n=t.length,o=f(t),a={},e=0;e<n;e++)v=o(t,e),s=r.call(i,v,e,t),u=a[s],p(u)?u.push([e,v]):a[s]=[[e,v]];return a}l.exports=q
});var h=c();module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
