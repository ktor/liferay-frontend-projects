define(["exports","metal/src/metal","./dataAttributes","../globals/globals","./App","../screen/HtmlScreen","../route/Route"],function(e,t,a,n,i,s,r){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var f=l(a),p=l(n),d=l(i),h=l(s),b=l(r),y=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),m=function(e){function a(){u(this,a);var e=o(this,(a.__proto__||Object.getPrototypeOf(a)).call(this));return e.app=null,e.baseElement=null,e}return c(a,e),y(a,[{key:"handle",value:function(){if(!(0,t.isElement)(this.baseElement))throw new Error("Senna data attribute handler base element not set or invalid, try setting a valid element that contains a `data-senna` attribute.");if(this.baseElement.hasAttribute(f["default"].senna)){if(this.app)throw new Error("Senna app was already initialized.");this.app=new d["default"],this.maybeAddRoutes_(),this.maybeAddSurfaces_(),this.maybeSetBasePath_(),this.maybeSetLinkSelector_(),this.maybeSetLoadingCssClass_(),this.maybeSetUpdateScrollPosition_(),this.maybeDispatch_()}}},{key:"disposeInternal",value:function(){this.app&&this.app.dispose()}},{key:"getApp",value:function(){return this.app}},{key:"getBaseElement",value:function(){return this.baseElement}},{key:"maybeAddRoutes_",value:function(){var e=this,t='link[rel="senna-route"]';this.querySelectorAllAsArray_(t).forEach(function(t){return e.maybeParseLinkRoute_(t)}),this.app.hasRoutes()||this.app.addRoutes(new b["default"](/.*/,h["default"]))}},{key:"maybeAddSurfaces_",value:function(){var e=this,t="["+f["default"].surface+"]";this.querySelectorAllAsArray_(t).forEach(function(t){e.updateElementIdIfSpecialSurface_(t),e.app.addSurfaces(t.id)})}},{key:"maybeDispatch_",value:function(){this.baseElement.hasAttribute(f["default"].dispatch)&&this.app.dispatch()}},{key:"maybeParseLinkRoute_",value:function(e){var t=new b["default"](this.maybeParseLinkRoutePath_(e),this.maybeParseLinkRouteHandler_(e));this.app.addRoutes(t)}},{key:"maybeParseLinkRouteHandler_",value:function(e){var a=e.getAttribute("type");return(0,t.isDefAndNotNull)(a)&&(a=t.object.getObjectByName(a)),a}},{key:"maybeParseLinkRoutePath_",value:function(e){var a=e.getAttribute("href");return(0,t.isDefAndNotNull)(a)&&0===a.indexOf("regex:")&&(a=new RegExp(a.substring(6))),a}},{key:"maybeSetBasePath_",value:function(){var e=this.baseElement.getAttribute(f["default"].basePath);(0,t.isDefAndNotNull)(e)&&this.app.setBasePath(e)}},{key:"maybeSetLinkSelector_",value:function(){var e=this.baseElement.getAttribute(f["default"].linkSelector);(0,t.isDefAndNotNull)(e)&&this.app.setLinkSelector(e)}},{key:"maybeSetLoadingCssClass_",value:function(){var e=this.baseElement.getAttribute(f["default"].loadingCssClass);(0,t.isDefAndNotNull)(e)&&this.app.setLoadingCssClass(e)}},{key:"maybeSetUpdateScrollPosition_",value:function(){var e=this.baseElement.getAttribute(f["default"].updateScrollPosition);(0,t.isDefAndNotNull)(e)&&("false"===e?this.app.setUpdateScrollPosition(!1):this.app.setUpdateScrollPosition(!0))}},{key:"querySelectorAllAsArray_",value:function(e){return Array.prototype.slice.call(p["default"].document.querySelectorAll(e))}},{key:"updateElementIdIfSpecialSurface_",value:function(e){e.id||e!==p["default"].document.body||(e.id="senna_surface_"+(0,t.getUid)())}},{key:"setBaseElement",value:function(e){this.baseElement=e}}]),a}(t.Disposable);e["default"]=m});