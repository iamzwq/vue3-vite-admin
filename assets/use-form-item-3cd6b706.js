import{G as R,c as U,e as S,g as N,h as G}from"./base-c06b0c93.js";import{g as K,c as _,j as u,u as T,r as g,k as L,w as V,I as q,af as J}from"./index-2540ab83.js";var Y=typeof global=="object"&&global&&global.Object===Object&&global;const Z=Y;var X=typeof self=="object"&&self&&self.Object===Object&&self,B=Z||X||Function("return this")();const I=B;var Q=I.Symbol;const l=Q;var F=Object.prototype,W=F.hasOwnProperty,k=F.toString,h=l?l.toStringTag:void 0;function tt(t){var e=W.call(t,h),r=t[h];try{t[h]=void 0;var n=!0}catch{}var a=k.call(t);return n&&(e?t[h]=r:delete t[h]),a}var et=Object.prototype,rt=et.toString;function nt(t){return rt.call(t)}var at="[object Null]",ot="[object Undefined]",w=l?l.toStringTag:void 0;function D(t){return t==null?t===void 0?ot:at:w&&w in Object(t)?tt(t):nt(t)}function st(t){return t!=null&&typeof t=="object"}var it="[object Symbol]";function O(t){return typeof t=="symbol"||st(t)&&D(t)==it}function ct(t,e){for(var r=-1,n=t==null?0:t.length,a=Array(n);++r<n;)a[r]=e(t[r],r,t);return a}var ut=Array.isArray;const j=ut;var lt=1/0,z=l?l.prototype:void 0,E=z?z.toString:void 0;function A(t){if(typeof t=="string")return t;if(j(t))return ct(t,A)+"";if(O(t))return E?E.call(t):"";var e=t+"";return e=="0"&&1/t==-lt?"-0":e}function x(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var ft="[object AsyncFunction]",pt="[object Function]",ht="[object GeneratorFunction]",dt="[object Proxy]";function _t(t){if(!x(t))return!1;var e=D(t);return e==pt||e==ht||e==ft||e==dt}var vt=I["__core-js_shared__"];const m=vt;var C=function(){var t=/[^.]+$/.exec(m&&m.keys&&m.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function gt(t){return!!C&&C in t}var yt=Function.prototype,bt=yt.toString;function mt(t){if(t!=null){try{return bt.call(t)}catch{}try{return t+""}catch{}}return""}var St=/[\\^$.*+?()[\]{}|]/g,Tt=/^\[object .+?Constructor\]$/,It=Function.prototype,Ot=Object.prototype,jt=It.toString,Pt=Ot.hasOwnProperty,$t=RegExp("^"+jt.call(Pt).replace(St,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function wt(t){if(!x(t)||gt(t))return!1;var e=_t(t)?$t:Tt;return e.test(mt(t))}function zt(t,e){return t==null?void 0:t[e]}function M(t,e){var r=zt(t,e);return wt(r)?r:void 0}function Et(t,e){return t===e||t!==t&&e!==e}var Ct=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Nt=/^\w*$/;function Ft(t,e){if(j(t))return!1;var r=typeof t;return r=="number"||r=="symbol"||r=="boolean"||t==null||O(t)?!0:Nt.test(t)||!Ct.test(t)||e!=null&&t in Object(e)}var Dt=M(Object,"create");const d=Dt;function At(){this.__data__=d?d(null):{},this.size=0}function xt(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var Mt="__lodash_hash_undefined__",Ht=Object.prototype,Rt=Ht.hasOwnProperty;function Ut(t){var e=this.__data__;if(d){var r=e[t];return r===Mt?void 0:r}return Rt.call(e,t)?e[t]:void 0}var Gt=Object.prototype,Kt=Gt.hasOwnProperty;function Lt(t){var e=this.__data__;return d?e[t]!==void 0:Kt.call(e,t)}var Vt="__lodash_hash_undefined__";function qt(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=d&&e===void 0?Vt:e,this}function i(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}i.prototype.clear=At;i.prototype.delete=xt;i.prototype.get=Ut;i.prototype.has=Lt;i.prototype.set=qt;function Jt(){this.__data__=[],this.size=0}function y(t,e){for(var r=t.length;r--;)if(Et(t[r][0],e))return r;return-1}var Yt=Array.prototype,Zt=Yt.splice;function Xt(t){var e=this.__data__,r=y(e,t);if(r<0)return!1;var n=e.length-1;return r==n?e.pop():Zt.call(e,r,1),--this.size,!0}function Bt(t){var e=this.__data__,r=y(e,t);return r<0?void 0:e[r][1]}function Qt(t){return y(this.__data__,t)>-1}function Wt(t,e){var r=this.__data__,n=y(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this}function f(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}f.prototype.clear=Jt;f.prototype.delete=Xt;f.prototype.get=Bt;f.prototype.has=Qt;f.prototype.set=Wt;var kt=M(I,"Map");const te=kt;function ee(){this.size=0,this.__data__={hash:new i,map:new(te||f),string:new i}}function re(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function b(t,e){var r=t.__data__;return re(e)?r[typeof e=="string"?"string":"hash"]:r.map}function ne(t){var e=b(this,t).delete(t);return this.size-=e?1:0,e}function ae(t){return b(this,t).get(t)}function oe(t){return b(this,t).has(t)}function se(t,e){var r=b(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this}function c(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}c.prototype.clear=ee;c.prototype.delete=ne;c.prototype.get=ae;c.prototype.has=oe;c.prototype.set=se;var ie="Expected a function";function P(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(ie);var r=function(){var n=arguments,a=e?e.apply(this,n):n[0],o=r.cache;if(o.has(a))return o.get(a);var s=t.apply(this,n);return r.cache=o.set(a,s)||o,s};return r.cache=new(P.Cache||c),r}P.Cache=c;var ce=500;function ue(t){var e=P(t,function(n){return r.size===ce&&r.clear(),n}),r=e.cache;return e}var le=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,fe=/\\(\\)?/g,pe=ue(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(le,function(r,n,a,o){e.push(a?o.replace(fe,"$1"):n||r)}),e});const he=pe;function de(t){return t==null?"":A(t)}function _e(t,e){return j(t)?t:Ft(t,e)?[t]:he(de(t))}var ve=1/0;function ge(t){if(typeof t=="string"||O(t))return t;var e=t+"";return e=="0"&&1/t==-ve?"-0":e}function ye(t,e){e=_e(e,t);for(var r=0,n=e.length;t!=null&&r<n;)t=t[ge(e[r++])];return r&&r==n?t:void 0}function Ie(t,e,r){var n=t==null?void 0:ye(t,e);return n===void 0?r:n}const Oe="update:modelValue",je="input",H=t=>{const e=K();return _(()=>{var r,n;return(n=((r=e.proxy)==null?void 0:r.$props)[t])!=null?n:void 0})},Pe=R({type:String,values:U,required:!1}),be=Symbol("size"),me=()=>{const t=u(be,{});return _(()=>T(t.size)||"")},$e=(t,e={})=>{const r=g(void 0),n=e.prop?r:H("size"),a=e.global?r:me(),o=e.form?{size:void 0}:u(S,void 0),s=e.formItem?{size:void 0}:u(N,void 0);return _(()=>n.value||T(t)||(s==null?void 0:s.size)||(o==null?void 0:o.size)||a.value||"")},we=t=>{const e=H("disabled"),r=u(S,void 0);return _(()=>e.value||T(t)||(r==null?void 0:r.disabled)||!1)},ze=()=>{const t=u(S,void 0),e=u(N,void 0);return{form:t,formItem:e}},Ee=(t,{formItemContext:e,disableIdGeneration:r,disableIdManagement:n})=>{r||(r=g(!1)),n||(n=g(!1));const a=g();let o;const s=_(()=>{var p;return!!(!t.label&&e&&e.inputIds&&((p=e.inputIds)==null?void 0:p.length)<=1)});return L(()=>{o=V([q(t,"id"),r],([p,$])=>{const v=p??($?void 0:G().value);v!==a.value&&(e!=null&&e.removeInputId&&(a.value&&e.removeInputId(a.value),!(n!=null&&n.value)&&!$&&v&&e.addInputId(v)),a.value=v)},{immediate:!0})}),J(()=>{o&&o(),e!=null&&e.removeInputId&&a.value&&e.removeInputId(a.value)}),{isLabeledByFormItem:s,inputId:a}};export{je as I,f as L,c as M,l as S,Oe as U,st as a,x as b,Pe as c,ze as d,Ee as e,we as f,O as g,Et as h,j as i,D as j,_e as k,Ft as l,Ie as m,ye as n,_t as o,ct as p,M as q,I as r,Z as s,ge as t,$e as u,te as v,mt as w};
