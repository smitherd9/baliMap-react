(this["webpackJsonpbalimap-react"]=this["webpackJsonpbalimap-react"]||[]).push([[0],{12:function(e,t,n){},37:function(e,t,n){},44:function(e){e.exports=JSON.parse("{}")},63:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(9),s=n.n(i),r=(n(37),n(12),n(64)),o=n.p+"static/media/bali_mask.74f1fe77.jpg",l=n(3);var j=function(){return Object(l.jsx)("div",{className:"header",children:Object(l.jsxs)(r.a,{children:[Object(l.jsx)("div",{className:"menu-icon",children:Object(l.jsx)("i",{className:"fa fa-bars fa-2x"})}),Object(l.jsxs)("div",{className:"logo",children:["BALI GAMELAN MAP",Object(l.jsx)("div",{className:"logo-img",children:Object(l.jsx)("a",{href:"#",children:Object(l.jsx)("img",{className:"mask-logo",src:o})})})]}),Object(l.jsx)("div",{className:"menu",children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"#",children:"Home"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"#",children:"About"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"#",children:"Blog"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"#",children:"Contact"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"#",children:"Contact"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"#",children:"Contact"})})]})})]})})},d=n(16),h=n(17),b=n(30),O=n(29),u=n(10),x=n(15),f=(n(43),n.p+"static/media/peliatan.94cae6eb.mp3"),g=(n(44),{width:"100%",height:"100%"}),m=(Object({NODE_ENV:"production",PUBLIC_URL:"/baliMap-react",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_GOOGLE_KEY,function(e){Object(b.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(d.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={showingInfoWindow:!1,activeMarker:{},selectedPlace:{}},e.onMarkerClick=function(t,n,c){return e.setState({selectedPlace:t,activeMarker:n,showingInfoWindow:!0})},e.onClose=function(t){e.state.showingInfoWindow&&e.setState({showingInfoWindow:!1,activeMarker:null})},e}return Object(h.a)(n,[{key:"render",value:function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(x.a,{autoPlay:!0,src:f,onPlay:function(e){return console.log("onPlay")}}),Object(l.jsxs)(u.Map,{google:this.props.google,zoom:10,style:g,initialCenter:{lat:-8.403449367266102,lng:115.1592653203491},children:[Object(l.jsx)(u.Marker,{onClick:this.onMarkerClick,name:"Bali, Indonesia"}),Object(l.jsx)(u.Marker,{onClick:this.onMarkerClick,name:"Banjar Geladag, Pedungan",position:{lat:-8.687686367992407,lng:115.20591205890749}}),Object(l.jsxs)(u.InfoWindow,{marker:this.state.activeMarker,visible:this.state.showingInfoWindow,onClose:this.onClose,children:[Object(l.jsx)("div",{children:Object(l.jsx)("h4",{children:this.state.selectedPlace.name})}),Object(l.jsxs)("div",{children:[Object(l.jsx)(x.a,{autoPlay:!0,src:f,onPlay:function(e){return console.log("onPlay")}}),"   "]})]})]})]})}}]),n}(c.Component)),p=Object(u.GoogleApiWrapper)({apiKey:"AIzaSyDGN7BSfrfmmy-o5uoiXuLspyBQJbrtkVQ"})(m);var v=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(j,{}),Object(l.jsx)("p",{children:"It works."}),Object(l.jsx)(p,{})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,65)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root")),k()}},[[63,1,2]]]);
//# sourceMappingURL=main.ba440880.chunk.js.map