(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,n,t){},16:function(e,n,t){},18:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(7),l=t.n(o),c=(t(15),t(1)),s=t(2),i=t(4),h=t(3),u=t(5),m=(t(16),function(e){var n=e.children;return r.a.createElement("div",{style:{overflowY:"scroll"}},n)}),d=function(e){var n=e.channel,t=e.onChannelChange;return n?r.a.createElement("li",{className:"list-group-item list-group-item-action",onClick:function(){return t(n)},key:n.name},r.a.createElement("h3",null,n.name)):r.a.createElement("h4",null,"No channel Provided / Selected")},g=function(e){var n=e.onChannelChange,t=e.channels;return e.status?r.a.createElement("div",{className:"channels-list mr-3 mt-1"},r.a.createElement(m,null,r.a.createElement("ul",{className:"list-group"},t?t.map(function(e){return r.a.createElement(d,{key:e.name,channel:e,onChannelChange:n})}):r.a.createElement("h4",null,"No Channels Provided to Parse")))):null},f=t(8),w=t.n(f),v=function(e){function n(){return Object(c.a)(this,n),Object(i.a)(this,Object(h.a)(n).apply(this,arguments))}return Object(u.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){var e=this.props,n=e.url,t=e.width,a=e.height;return r.a.createElement(w.a,{autoPlay:!0,width:t,height:a,url:n})}}]),n}(a.PureComponent),p=function(e){var n=e.channel;return n?r.a.createElement("div",{className:"card text-center mt-1"},r.a.createElement("div",{className:"card-header"},n.name.toUpperCase()+" CHANNEL"),r.a.createElement("div",{className:"card-body"},r.a.createElement(v,{url:n.url,height:"640px",width:"350px",controls:!0,playing:!0}))):r.a.createElement("div",{className:"channel-info mt-1"},r.a.createElement("h4",null,"Please Select a Channel",r.a.createElement("br",null)," to Start Streaming..."))},C=function(e){e.onChannelsToggle,e.status;var n=e.onInputChange;return r.a.createElement("nav",{className:"navbar navbar-light bg-light"},r.a.createElement("form",{className:"form-inline"},r.a.createElement("input",{onChange:function(e){return n(e)},className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search"}),r.a.createElement("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"submit"},"Search")))},E=function(e){function n(){var e;return Object(c.a)(this,n),(e=Object(i.a)(this,Object(h.a)(n).call(this))).onChannelChange=function(n){e.setState({current:n}),console.log(n)},e.onChannelsToggle=function(n){e.setState({showChannels:n}),console.log(e.state.showChannels)},e.onInputChange=function(n){e.setState({search:n.target.value})},e.state={channels:[{name:"JWPlatform",url:"https://content.jwplatform.com/manifests/vM7nH0Kl.m3u8"},{name:"Yemen Shabbab",url:"http://stream.starmenacdn.com:8080/hls/yemenshabab.m3u8?v=1657905409"},{name:"Al-Shareyyah",url:"http://streamer12.elementssys.com:8080/SAUDI-Channels/AL-SHAREYYAH/index.m3u8"},{name:"Al-Saeedah",url:"http://178.132.5.224:8000/live/ag6677/8473993/3911.ts?token=SxsNBEZQFQ8WBQNbXAECBVhSUwlYBQZeAAQHVgRSBwYHDVVRUwtWUwxGHBoXRUUGAFxuUF0VCAtYVwBPEBQVVUJmDAEXAhUBA1QDDVcTG0EVWFxcGw0DDVRQAVIDVVUHHBsVDFEaDRcGUQUJVBMbQQRJRVxLWVNUPgJUFVsCAxIKVxAJWRQVWlo7VF0JUFkHQwsTCBsbEFESFhNZECIJXVNYFhEVe1ZXWAEQewtcWhYPWFJYTV5dVhJGfS9xQ0oSUlARF1RMUhcORgIIXAcVT0NSXkxXQ0BBQ1wTNmFDShJVQREAW0teWlpGChoQQhVPQ1hCZktSQUwTA1AOVxNEChIJR0kXVVZNawdfVgpUVBcIXl9KGw0QCUNKEw5dDw9EX0s6FVxcFQ8WVgUMUQMVHg=="}],current:null,showChannels:!0,search:""},e}return Object(u.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){var e=this.state,n=e.channels,t=e.search,a=n.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())});return r.a.createElement("div",{className:"container"},r.a.createElement(C,{onInputChange:this.onInputChange,status:this.state.showChannels,onChannelsToggle:this.onChannelsToggle}),r.a.createElement("div",{className:"container-content"},r.a.createElement(g,{status:this.state.showChannels,channels:a,onChannelChange:this.onChannelChange}),r.a.createElement(p,{channel:this.state.current})))}}]),n}(a.Component),b=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function V(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}t(17);l.a.render(r.a.createElement(E,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/ArabicTv",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/ArabicTv","/service-worker.js");b?(function(e,n){fetch(e).then(function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):V(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):V(n,e)})}}()},9:function(e,n,t){e.exports=t(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.267cea15.chunk.js.map