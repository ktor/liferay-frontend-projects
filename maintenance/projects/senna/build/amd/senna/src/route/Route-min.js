define(["exports","metal/src/metal","metal-path-parser/src/pathParser"],function(t,e,a){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function t(t,e){for(var a=0;a<e.length;a++){var r=e[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,a,r){return a&&t(e.prototype,a),r&&t(e,r),e}}(),i=function(){function t(a,n){if(r(this,t),!(0,e.isDefAndNotNull)(a))throw new Error("Route path not specified.");if(!(0,e.isFunction)(n))throw new Error("Route handler is not a function.");this.handler=n,this.path=a}return n(t,[{key:"buildParsedData_",value:function(){if(!this.parsedData_){var t=(0,a.parse)(this.path),e=(0,a.toRegex)(t);this.parsedData_={regex:e,tokens:t}}return this.parsedData_}},{key:"extractParams",value:function(t){return(0,e.isString)(this.path)?(0,a.extractData)(this.buildParsedData_().tokens,t):{}}},{key:"getHandler",value:function(){return this.handler}},{key:"getPath",value:function(){return this.path}},{key:"matchesPath",value:function(t){var a=this.path;return(0,e.isFunction)(a)?a(t):((0,e.isString)(a)&&(a=this.buildParsedData_().regex),a instanceof RegExp&&t.search(a)>-1)}}]),t}();t["default"]=i});