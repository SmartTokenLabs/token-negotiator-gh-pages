(self.webpackChunkart_gallery_website=self.webpackChunkart_gallery_website||[]).push([[914],{67109:(e,r,t)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});const n=t(47465);function o(e,r,t){try{Reflect.apply(e,r,t)}catch(n){setTimeout((()=>{throw n}))}}class i extends n.EventEmitter{emit(e){let r="error"===e;const t=this._events;if(void 0!==t)r=r&&void 0===t.error;else if(!r)return!1;for(var n=arguments.length,i=new Array(n>1?n-1:0),s=1;s<n;s++)i[s-1]=arguments[s];if(r){let e;if(i.length>0&&([e]=i),e instanceof Error)throw e;const r=new Error("Unhandled error.".concat(e?" (".concat(e.message,")"):""));throw r.context=e,r}const a=t[e];if(void 0===a)return!1;if("function"===typeof a)o(a,this,i);else{const e=a.length,r=function(e){const r=e.length,t=new Array(r);for(let n=0;n<r;n+=1)t[n]=e[n];return t}(a);for(let t=0;t<e;t+=1)o(r[t],this,i)}return!0}}r.default=i},66300:(e,r,t)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.EthereumProviderError=r.EthereumRpcError=void 0;const n=t(11053);class o extends Error{constructor(e,r,t){if(!Number.isInteger(e))throw new Error('"code" must be an integer.');if(!r||"string"!==typeof r)throw new Error('"message" must be a nonempty string.');super(r),this.code=e,void 0!==t&&(this.data=t)}serialize(){const e={code:this.code,message:this.message};return void 0!==this.data&&(e.data=this.data),this.stack&&(e.stack=this.stack),e}toString(){return n.default(this.serialize(),i,2)}}r.EthereumRpcError=o;function i(e,r){if("[Circular]"!==r)return r}r.EthereumProviderError=class extends o{constructor(e,r,t){if(!function(e){return Number.isInteger(e)&&e>=1e3&&e<=4999}(e))throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');super(e,r,t)}}},3381:(e,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.errorValues=r.errorCodes=void 0,r.errorCodes={rpc:{invalidInput:-32e3,resourceNotFound:-32001,resourceUnavailable:-32002,transactionRejected:-32003,methodNotSupported:-32004,limitExceeded:-32005,parse:-32700,invalidRequest:-32600,methodNotFound:-32601,invalidParams:-32602,internal:-32603},provider:{userRejectedRequest:4001,unauthorized:4100,unsupportedMethod:4200,disconnected:4900,chainDisconnected:4901}},r.errorValues={"-32700":{standard:"JSON RPC 2.0",message:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."},"-32600":{standard:"JSON RPC 2.0",message:"The JSON sent is not a valid Request object."},"-32601":{standard:"JSON RPC 2.0",message:"The method does not exist / is not available."},"-32602":{standard:"JSON RPC 2.0",message:"Invalid method parameter(s)."},"-32603":{standard:"JSON RPC 2.0",message:"Internal JSON-RPC error."},"-32000":{standard:"EIP-1474",message:"Invalid input."},"-32001":{standard:"EIP-1474",message:"Resource not found."},"-32002":{standard:"EIP-1474",message:"Resource unavailable."},"-32003":{standard:"EIP-1474",message:"Transaction rejected."},"-32004":{standard:"EIP-1474",message:"Method not supported."},"-32005":{standard:"EIP-1474",message:"Request limit exceeded."},4001:{standard:"EIP-1193",message:"User rejected the request."},4100:{standard:"EIP-1193",message:"The requested account and/or method has not been authorized by the user."},4200:{standard:"EIP-1193",message:"The requested method is not supported by this Ethereum provider."},4900:{standard:"EIP-1193",message:"The provider is disconnected from all chains."},4901:{standard:"EIP-1193",message:"The provider is disconnected from the specified chain."}}},78041:(e,r,t)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.ethErrors=void 0;const n=t(66300),o=t(34432),i=t(3381);function s(e,r){const[t,i]=u(r);return new n.EthereumRpcError(e,t||o.getMessageFromCode(e),i)}function a(e,r){const[t,i]=u(r);return new n.EthereumProviderError(e,t||o.getMessageFromCode(e),i)}function u(e){if(e){if("string"===typeof e)return[e];if("object"===typeof e&&!Array.isArray(e)){const{message:r,data:t}=e;if(r&&"string"!==typeof r)throw new Error("Must specify string message.");return[r||void 0,t]}}return[]}r.ethErrors={rpc:{parse:e=>s(i.errorCodes.rpc.parse,e),invalidRequest:e=>s(i.errorCodes.rpc.invalidRequest,e),invalidParams:e=>s(i.errorCodes.rpc.invalidParams,e),methodNotFound:e=>s(i.errorCodes.rpc.methodNotFound,e),internal:e=>s(i.errorCodes.rpc.internal,e),server:e=>{if(!e||"object"!==typeof e||Array.isArray(e))throw new Error("Ethereum RPC Server errors must provide single object argument.");const{code:r}=e;if(!Number.isInteger(r)||r>-32005||r<-32099)throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');return s(r,e)},invalidInput:e=>s(i.errorCodes.rpc.invalidInput,e),resourceNotFound:e=>s(i.errorCodes.rpc.resourceNotFound,e),resourceUnavailable:e=>s(i.errorCodes.rpc.resourceUnavailable,e),transactionRejected:e=>s(i.errorCodes.rpc.transactionRejected,e),methodNotSupported:e=>s(i.errorCodes.rpc.methodNotSupported,e),limitExceeded:e=>s(i.errorCodes.rpc.limitExceeded,e)},provider:{userRejectedRequest:e=>a(i.errorCodes.provider.userRejectedRequest,e),unauthorized:e=>a(i.errorCodes.provider.unauthorized,e),unsupportedMethod:e=>a(i.errorCodes.provider.unsupportedMethod,e),disconnected:e=>a(i.errorCodes.provider.disconnected,e),chainDisconnected:e=>a(i.errorCodes.provider.chainDisconnected,e),custom:e=>{if(!e||"object"!==typeof e||Array.isArray(e))throw new Error("Ethereum Provider custom errors must provide single object argument.");const{code:r,message:t,data:o}=e;if(!t||"string"!==typeof t)throw new Error('"message" must be a nonempty string');return new n.EthereumProviderError(r,t,o)}}}},27037:(e,r,t)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.getMessageFromCode=r.serializeError=r.EthereumProviderError=r.EthereumRpcError=r.ethErrors=r.errorCodes=void 0;const n=t(66300);Object.defineProperty(r,"EthereumRpcError",{enumerable:!0,get:function(){return n.EthereumRpcError}}),Object.defineProperty(r,"EthereumProviderError",{enumerable:!0,get:function(){return n.EthereumProviderError}});const o=t(34432);Object.defineProperty(r,"serializeError",{enumerable:!0,get:function(){return o.serializeError}}),Object.defineProperty(r,"getMessageFromCode",{enumerable:!0,get:function(){return o.getMessageFromCode}});const i=t(78041);Object.defineProperty(r,"ethErrors",{enumerable:!0,get:function(){return i.ethErrors}});const s=t(3381);Object.defineProperty(r,"errorCodes",{enumerable:!0,get:function(){return s.errorCodes}})},34432:(e,r,t)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.serializeError=r.isValidCode=r.getMessageFromCode=r.JSON_RPC_SERVER_ERROR_MESSAGE=void 0;const n=t(3381),o=t(66300),i=n.errorCodes.rpc.internal,s="Unspecified error message. This is a bug, please report it.",a={code:i,message:u(i)};function u(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s;if(Number.isInteger(e)){const t=e.toString();if(l(n.errorValues,t))return n.errorValues[t].message;if(d(e))return r.JSON_RPC_SERVER_ERROR_MESSAGE}return t}function c(e){if(!Number.isInteger(e))return!1;const r=e.toString();return!!n.errorValues[r]||!!d(e)}function d(e){return e>=-32099&&e<=-32e3}function f(e){return e&&"object"===typeof e&&!Array.isArray(e)?Object.assign({},e):e}function l(e,r){return Object.prototype.hasOwnProperty.call(e,r)}r.JSON_RPC_SERVER_ERROR_MESSAGE="Unspecified server error.",r.getMessageFromCode=u,r.isValidCode=c,r.serializeError=function(e){let{fallbackError:r=a,shouldIncludeStack:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};var n,i;if(!r||!Number.isInteger(r.code)||"string"!==typeof r.message)throw new Error("Must provide fallback error with integer number code and string message.");if(e instanceof o.EthereumRpcError)return e.serialize();const s={};if(e&&"object"===typeof e&&!Array.isArray(e)&&l(e,"code")&&c(e.code)){const r=e;s.code=r.code,r.message&&"string"===typeof r.message?(s.message=r.message,l(r,"data")&&(s.data=r.data)):(s.message=u(s.code),s.data={originalError:f(e)})}else{s.code=r.code;const t=null===(n=e)||void 0===n?void 0:n.message;s.message=t&&"string"===typeof t?t:r.message,s.data={originalError:f(e)}}const d=null===(i=e)||void 0===i?void 0:i.stack;return t&&e&&d&&"string"===typeof d&&(s.stack=d),s}},11053:e=>{e.exports=s,s.default=s,s.stable=d,s.stableStringify=d;var r="[...]",t="[Circular]",n=[],o=[];function i(){return{depthLimit:Number.MAX_SAFE_INTEGER,edgesLimit:Number.MAX_SAFE_INTEGER}}function s(e,r,t,s){var a;"undefined"===typeof s&&(s=i()),u(e,"",0,[],void 0,0,s);try{a=0===o.length?JSON.stringify(e,r,t):JSON.stringify(e,l(r),t)}catch(d){return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")}finally{for(;0!==n.length;){var c=n.pop();4===c.length?Object.defineProperty(c[0],c[1],c[3]):c[0][c[1]]=c[2]}}return a}function a(e,r,t,i){var s=Object.getOwnPropertyDescriptor(i,t);void 0!==s.get?s.configurable?(Object.defineProperty(i,t,{value:e}),n.push([i,t,r,s])):o.push([r,t,e]):(i[t]=e,n.push([i,t,r]))}function u(e,n,o,i,s,c,d){var f;if(c+=1,"object"===typeof e&&null!==e){for(f=0;f<i.length;f++)if(i[f]===e)return void a(t,e,n,s);if("undefined"!==typeof d.depthLimit&&c>d.depthLimit)return void a(r,e,n,s);if("undefined"!==typeof d.edgesLimit&&o+1>d.edgesLimit)return void a(r,e,n,s);if(i.push(e),Array.isArray(e))for(f=0;f<e.length;f++)u(e[f],f,f,i,e,c,d);else{var l=Object.keys(e);for(f=0;f<l.length;f++){var p=l[f];u(e[p],p,f,i,e,c,d)}}i.pop()}}function c(e,r){return e<r?-1:e>r?1:0}function d(e,r,t,s){"undefined"===typeof s&&(s=i());var a,u=f(e,"",0,[],void 0,0,s)||e;try{a=0===o.length?JSON.stringify(u,r,t):JSON.stringify(u,l(r),t)}catch(d){return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")}finally{for(;0!==n.length;){var c=n.pop();4===c.length?Object.defineProperty(c[0],c[1],c[3]):c[0][c[1]]=c[2]}}return a}function f(e,o,i,s,u,d,l){var p;if(d+=1,"object"===typeof e&&null!==e){for(p=0;p<s.length;p++)if(s[p]===e)return void a(t,e,o,u);try{if("function"===typeof e.toJSON)return}catch(m){return}if("undefined"!==typeof l.depthLimit&&d>l.depthLimit)return void a(r,e,o,u);if("undefined"!==typeof l.edgesLimit&&i+1>l.edgesLimit)return void a(r,e,o,u);if(s.push(e),Array.isArray(e))for(p=0;p<e.length;p++)f(e[p],p,p,s,e,d,l);else{var h={},g=Object.keys(e).sort(c);for(p=0;p<g.length;p++){var y=g[p];f(e[y],y,p,s,e,d,l),h[y]=e[y]}if("undefined"===typeof u)return h;n.push([u,o,e]),u[o]=h}s.pop()}}function l(e){return e="undefined"!==typeof e?e:function(e,r){return r},function(r,t){if(o.length>0)for(var n=0;n<o.length;n++){var i=o[n];if(i[1]===r&&i[0]===t){t=i[2],o.splice(n,1);break}}return e.call(this,r,t)}}},35941:(e,r,t)=>{var n="undefined"!==typeof JSON?JSON:t(12947);e.exports=function(e,r){r||(r={}),"function"===typeof r&&(r={cmp:r});var t=r.space||"";"number"===typeof t&&(t=Array(t+1).join(" "));var s,a="boolean"===typeof r.cycles&&r.cycles,u=r.replacer||function(e,r){return r},c=r.cmp&&(s=r.cmp,function(e){return function(r,t){var n={key:r,value:e[r]},o={key:t,value:e[t]};return s(n,o)}}),d=[];return function e(r,s,f,l){var p=t?"\n"+new Array(l+1).join(t):"",h=t?": ":":";if(f&&f.toJSON&&"function"===typeof f.toJSON&&(f=f.toJSON()),void 0!==(f=u.call(r,s,f))){if("object"!==typeof f||null===f)return n.stringify(f);if(o(f)){for(var g=[],y=0;y<f.length;y++){var m=e(f,y,f[y],l+1)||n.stringify(null);g.push(p+t+m)}return"["+g.join(",")+p+"]"}if(-1!==d.indexOf(f)){if(a)return n.stringify("__cycle__");throw new TypeError("Converting circular structure to JSON")}d.push(f);var v=i(f).sort(c&&c(f));for(g=[],y=0;y<v.length;y++){var b=e(f,s=v[y],f[s],l+1);if(b){var E=n.stringify(s)+h+b;g.push(p+t+E)}}return d.splice(d.indexOf(f),1),"{"+g.join(",")+p+"}"}}({"":e},"",e,0)};var o=Array.isArray||function(e){return"[object Array]"==={}.toString.call(e)},i=Object.keys||function(e){var r=Object.prototype.hasOwnProperty||function(){return!0},t=[];for(var n in e)r.call(e,n)&&t.push(n);return t}},12947:(e,r,t)=>{r.parse=t(53884),r.stringify=t(61185)},53884:e=>{var r,t,n,o,i={'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:"\n",r:"\r",t:"\t"},s=function(e){throw{name:"SyntaxError",message:e,at:r,text:n}},a=function(e){return e&&e!==t&&s("Expected '"+e+"' instead of '"+t+"'"),t=n.charAt(r),r+=1,t},u=function(){var e,r="";for("-"===t&&(r="-",a("-"));t>="0"&&t<="9";)r+=t,a();if("."===t)for(r+=".";a()&&t>="0"&&t<="9";)r+=t;if("e"===t||"E"===t)for(r+=t,a(),"-"!==t&&"+"!==t||(r+=t,a());t>="0"&&t<="9";)r+=t,a();if(e=+r,isFinite(e))return e;s("Bad number")},c=function(){var e,r,n,o="";if('"'===t)for(;a();){if('"'===t)return a(),o;if("\\"===t)if(a(),"u"===t){for(n=0,r=0;r<4&&(e=parseInt(a(),16),isFinite(e));r+=1)n=16*n+e;o+=String.fromCharCode(n)}else{if("string"!==typeof i[t])break;o+=i[t]}else o+=t}s("Bad string")},d=function(){for(;t&&t<=" ";)a()};o=function(){switch(d(),t){case"{":return function(){var e,r={};if("{"===t){if(a("{"),d(),"}"===t)return a("}"),r;for(;t;){if(e=c(),d(),a(":"),Object.hasOwnProperty.call(r,e)&&s('Duplicate key "'+e+'"'),r[e]=o(),d(),"}"===t)return a("}"),r;a(","),d()}}s("Bad object")}();case"[":return function(){var e=[];if("["===t){if(a("["),d(),"]"===t)return a("]"),e;for(;t;){if(e.push(o()),d(),"]"===t)return a("]"),e;a(","),d()}}s("Bad array")}();case'"':return c();case"-":return u();default:return t>="0"&&t<="9"?u():function(){switch(t){case"t":return a("t"),a("r"),a("u"),a("e"),!0;case"f":return a("f"),a("a"),a("l"),a("s"),a("e"),!1;case"n":return a("n"),a("u"),a("l"),a("l"),null}s("Unexpected '"+t+"'")}()}},e.exports=function(e,i){var a;return n=e,r=0,t=" ",a=o(),d(),t&&s("Syntax error"),"function"===typeof i?function e(r,t){var n,o,s=r[t];if(s&&"object"===typeof s)for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(void 0!==(o=e(s,n))?s[n]=o:delete s[n]);return i.call(r,t,s)}({"":a},""):a}},61185:e=>{var r,t,n,o=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,i={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};function s(e){return o.lastIndex=0,o.test(e)?'"'+e.replace(o,(function(e){var r=i[e];return"string"===typeof r?r:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)}))+'"':'"'+e+'"'}function a(e,o){var i,u,c,d,f,l=r,p=o[e];switch(p&&"object"===typeof p&&"function"===typeof p.toJSON&&(p=p.toJSON(e)),"function"===typeof n&&(p=n.call(o,e,p)),typeof p){case"string":return s(p);case"number":return isFinite(p)?String(p):"null";case"boolean":case"null":return String(p);case"object":if(!p)return"null";if(r+=t,f=[],"[object Array]"===Object.prototype.toString.apply(p)){for(d=p.length,i=0;i<d;i+=1)f[i]=a(i,p)||"null";return c=0===f.length?"[]":r?"[\n"+r+f.join(",\n"+r)+"\n"+l+"]":"["+f.join(",")+"]",r=l,c}if(n&&"object"===typeof n)for(d=n.length,i=0;i<d;i+=1)"string"===typeof(u=n[i])&&(c=a(u,p))&&f.push(s(u)+(r?": ":":")+c);else for(u in p)Object.prototype.hasOwnProperty.call(p,u)&&(c=a(u,p))&&f.push(s(u)+(r?": ":":")+c);return c=0===f.length?"{}":r?"{\n"+r+f.join(",\n"+r)+"\n"+l+"}":"{"+f.join(",")+"}",r=l,c}}e.exports=function(e,o,i){var s;if(r="",t="","number"===typeof i)for(s=0;s<i;s+=1)t+=" ";else"string"===typeof i&&(t=i);if(n=o,o&&"function"!==typeof o&&("object"!==typeof o||"number"!==typeof o.length))throw new Error("JSON.stringify");return a("",{"":e})}}}]);
//# sourceMappingURL=914.b0a98204.chunk.js.map