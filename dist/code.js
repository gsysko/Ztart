!function(e){var t={};function n(a){if(t[a])return t[a].exports;var i=t[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(a,i,function(t){return e[t]}.bind(null,i));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}({8:function(e,t){var n=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(i,r){function o(e){try{l(a.next(e))}catch(e){r(e)}}function c(e){try{l(a.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,c)}l((a=a.apply(e,t||[])).next())}))};figma.showUI(__html__),figma.ui.resize(400,400),figma.ui.onmessage=e=>n(this,void 0,void 0,(function*(){switch(e.type){case"create-projct":yield function(e,t){return n(this,void 0,void 0,(function*(){let a=figma.createPage(),i=figma.createPage(),r=figma.createPage(),o=figma.createPage(),c=figma.createPage(),l=figma.createPage();figma.currentPage.name="📖 About",a.name="🤔 Problem Space",i.name="💡 Solution Space",r.name="📐 Design Spec",o.name="🔬 Research",c.name="🕹 Prototype",l.name="📦 Archive";let f=figma.createFrame();f.name="You can add other pages, like these...",f.y=340,f.resizeWithoutConstraints(640,1),f.layoutMode="VERTICAL",f.counterAxisSizingMode="FIXED",f.verticalPadding=16,f.horizontalPadding=16,f.itemSpacing=16,figma.currentPage.appendChild(f);let u=e=>{let t=figma.createText();t.fontName={family:"Inter",style:"Regular"},t.characters=e,t.fontSize=16,f.appendChild(t)},d=(e,t)=>{figma.importComponentByKeyAsync("ac0b158c37de3fa8ba94d2b3801913aea262ffcb").catch(e=>{figma.notify("Annotation Kit library is required for thumbnails."),figma.closePlugin()}).then(a=>n(this,void 0,void 0,(function*(){if(a){let n=a.createInstance();yield figma.loadFontAsync({family:"Sharp Sans No1",style:"Bold"}).then(()=>{let t=n.findOne(e=>"File Name"==e.name);t.characters=""!==e?e:"Enter title here"}),yield figma.loadFontAsync({family:"Proxima Nova",style:"Regular"}).then(()=>{n.findOne(e=>"Badge"==e.name&&"TEXT"==e.type).characters=t}),figma.currentPage.appendChild(n),figma.closePlugin()}})))};(()=>{n(this,void 0,void 0,(function*(){yield figma.loadFontAsync({family:"Inter",style:"Regular"}),yield figma.loadFontAsync({family:"Inter",style:"Bold"}),yield d(e,t),yield u("🚢 Shipped"),yield u("💅🏽 Styles"),yield u("⚙️ Components"),yield u("👀 Ready for Review")}))})()}))}(e.projectTitle,e.projectType)}}))}});