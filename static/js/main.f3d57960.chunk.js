(this["webpackJsonpmvm-web"]=this["webpackJsonpmvm-web"]||[]).push([[0],{259:function(e,a,t){e.exports=t(379)},379:function(e,a,t){"use strict";t.r(a);t(260);var n,r,o=t(0),i=t.n(o),c=t(16),l=t.n(c),s=t(422),u=t(433),m=t(236),d=t(66),p=t(80),h=t(20),f=t(38),E=t(154),b=t.n(E),g=t(210),S=t(54),w=t.n(S),v=function(e){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e)try{a?localStorage.setItem("token",e):sessionStorage.setItem("token",e)}catch(t){console.error("Local Storage not supported")}},O=function(){try{localStorage.removeItem("token"),sessionStorage.removeItem("token")}catch(e){console.error("Local Storage not supported")}},C={isLoading:!0,username:"",role:4,refreshToken:""},R=Object(o.createContext)(C),I=function(){return Object(o.useContext)(R)},A=function(e){var a=Object(o.useState)(C),t=Object(f.a)(a,2),n=t[0],r=t[1];Object(o.useEffect)((function(){window.requestIdleCallback((function(){b.a.getPromise({preprocessor:function(e,a){if("userAgent"===e){var t=new g.UAParser(a);return((t.getDevice().model||"")+" "+(t.getDevice().type||"")+" "+(t.getDevice().vendor||"")+" "+(t.getOS().name||"")+" "+(t.getOS().version||"")+" "+(t.getBrowser().name||"")+" "+(t.getEngine().name||"")+" "+(t.getCPU().architecture||"")).trim()}return a}}).then((function(e){var a,t,n=e.map((function(e){return e.value})),o=b.a.x64hash128(n.join(""),31);(a=o,new Promise((function(e,n){var r="",o=!0;try{(r=String(localStorage.getItem("token")||""))||(o=!1,r=String(sessionStorage.getItem("token")||""))}catch(c){o=!1,console.error("Local Storage not supported")}if(r){var i={method:"GET",url:"".concat("https://virtusloop-mvm-api.herokuapp.com/").concat("api/auth/me/"),headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8",Authorization:"Bearer ".concat(r),"X-Browser-Hash":a}};t&&(i.headers["X-Refresh-Token"]=t),w()(i).then((function(a){if(a&&200===a.status){var t=a.headers["x-token"],r=a.headers["x-refresh-token"];v(t,o),e({username:a.data.username,role:a.data.role,refreshToken:r})}else O(),n()})).catch((function(){O(),n()}))}else n()}))).then((function(e){r(Object(h.a)({},e,{isLoading:!1,browserHash:o}))})).catch((function(){r(Object(h.a)({},C,{isLoading:!1,browserHash:o}))}))}))}))}),[]);var c=Object(o.useMemo)((function(){return Object(h.a)({},n,{onLogin:function(e){return r(e)},onLogout:function(e){return r(Object(h.a)({},C,{isLoading:!1,browserHash:e}))},setLoading:function(e){return r(Object(h.a)({},n,{isLoading:e}))}})}),[n]);return i.a.createElement(R.Provider,Object.assign({value:c},e))},T=t(178),j=function(){return i.a.createElement("div",{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",backgroundColor:"#F7FAFC"}},i.a.createElement(T.a,{disableShrink:!0,size:70}))},N=t(444),y=t(184),D=t(427),P=t(428),k=t(209),L=t(182),x=t(206),H=t(213),U=t.n(H),B=t(56),F=t(211),W=t(421),M=t(126),G=t.n(M),_=t(420),z=function(){return i.a.createElement(B.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",i.a.createElement(_.a,{color:"inherit",href:"https://material-ui.com/"},"Your Website")," ".concat((new Date).getFullYear(),"."))},q=Object(F.a)((function(e){return{"@global":{body:{backgroundColor:e.palette.common.white}},card:{minWidth:275},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),V=function(){var e=q(),a=I(),t=a.browserHash,n=void 0===t?"":t,r=a.onLogin,c=Object(o.useState)(!1),l=Object(f.a)(c,2),u=l[0],m=l[1],d=Object(o.useState)(!1),E=Object(f.a)(d,2),b=E[0],g=E[1],S=Object(o.useState)(!1),C=Object(f.a)(S,2),R=C[0],A=C[1],T=Object(p.g)(),j=(Object(p.h)().state||{from:{pathname:"/"}}).from;return i.a.createElement(W.a,{component:"main",maxWidth:"xs"},i.a.createElement(s.a,null),i.a.createElement("div",{className:e.paper},i.a.createElement(N.a,{className:e.avatar},i.a.createElement(U.a,null)),i.a.createElement(B.a,{component:"h1",variant:"h5"},"Conectare"),i.a.createElement("form",{className:e.form,onSubmit:function(e){e.preventDefault(),g(!0);var a=new FormData(e.currentTarget);(function(e,a,t,n){return new Promise((function(r,o){var i={method:"POST",url:"".concat("https://virtusloop-mvm-api.herokuapp.com/").concat("api/auth/login/"),headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8","X-Browser-Hash":t},data:{username:e,password:a}};w()(i).then((function(e){if(e&&201===e.status){var a=e.headers["x-token"],t=e.headers["x-refresh-token"];v(a,n),r({username:e.data.username,role:e.data.role,refreshToken:t})}else O(),o()})).catch((function(){O(),o()}))}))})(String(a.get("username")||""),String(a.get("password")||""),n,R).then((function(e){g(!1),r&&r(Object(h.a)({},e,{browserHash:n})),T.replace(j)})).catch((function(){g(!1),m(!0)}))}},i.a.createElement(k.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Nume",name:"username",autoComplete:"username",autoFocus:!0,onChange:function(){return m(!1)},disabled:b}),i.a.createElement(k.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Parola",type:"password",id:"password",autoComplete:"current-password",onChange:function(){return m(!1)},disabled:b}),i.a.createElement(L.a,{control:i.a.createElement(x.a,{value:"remember",color:"primary",onChange:function(e,a){A(a)},disabled:b}),label:"Tine-ma conectat"}),u&&i.a.createElement(D.a,{className:e.card},i.a.createElement(P.a,null,i.a.createElement(B.a,{variant:"body1",component:"p",color:"error"},"Nume sau parola incorecte! Incearca din nou."))),i.a.createElement(y.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,disabled:b},b?i.a.createElement(G.a,null):"Conectare"))),i.a.createElement(z,null))},X=t(120),Y=t(3),J=t(17),Z=t(434),$=t(437),K=t(188),Q=t(183),ee=t(438),ae=t(445),te=t(439),ne=t(426),re=t(392),oe=t(440),ie=t(202),ce=t(441),le=t(224),se=t.n(le),ue=t(225),me=t.n(ue),de=t(226),pe=t.n(de),he=t(227),fe=t.n(he),Ee=t(228),be=t.n(Ee),ge=t(229),Se=t.n(ge),we=t(230),ve=t.n(we),Oe=t(231),Ce=t.n(Oe),Re=t(232),Ie=t.n(Re),Ae=t(233),Te=t.n(Ae),je=t(138),Ne=t(430),ye=t(435),De=t(431),Pe=t(436),ke=t(432),Le=t(443),xe=t(442),He=t(157),Ue=t.n(He),Be=t(6),Fe=Object(Be.a)({root:{color:"#C53030","&:hover":{background:"rgba(197, 47, 48, 0.08)"}}})(y.a),We=t(219),Me=t(220),Ge=t(235),_e=t(221),ze=t(237),qe=t(181),Ve=t(208),Xe=t(180),Ye=t(200),Je=t(222),Ze=t.n(Je),$e=t(223),Ke=t.n($e),Qe=function(e){function a(e){var t;return Object(We.a)(this,a),(t=Object(Ge.a)(this,Object(_e.a)(a).call(this,e))).handleClickShowAddPassword=function(){t.setState({showAddPassword:!t.state.showAddPassword})},t.handleMouseDownPassword=function(e){e.preventDefault()},t.state={showAddPassword:!0,password:e.initialPassword},t}return Object(ze.a)(a,e),Object(Me.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement(qe.a,{style:this.props.formStyle},this.props.label&&i.a.createElement(Ve.a,{htmlFor:"passwordInput"},this.props.label),i.a.createElement(Xe.a,{style:this.props.inputStyle,id:"passwordInput",type:this.state.showAddPassword?"text":"password",autoComplete:"new-password",placeholder:this.props.placeholder,value:this.state.password,onChange:function(a){e.setState({password:a.target.value}),e.props.onChange&&e.props.onChange(a.target.value)},endAdornment:i.a.createElement(Ye.a,{position:"end"},i.a.createElement(Q.a,{"aria-label":"toggle password visibility",onClick:this.handleClickShowAddPassword,onMouseDown:this.handleMouseDownPassword},this.state.showAddPassword?i.a.createElement(Ze.a,null):i.a.createElement(Ke.a,null)))}))}},{key:"password",get:function(){return this.state.password}}]),a}(i.a.Component);!function(e){e[e.ADMINISTRATOR=1]="ADMINISTRATOR",e[e.MODERATOR=2]="MODERATOR",e[e.TEHNICIAN=3]="TEHNICIAN",e[e.FILLER=4]="FILLER"}(n||(n={})),function(e){e[e.FAILURE=0]="FAILURE",e[e.SUCCESS=1]="SUCCESS"}(r||(r={}));var ea,aa=function(e){var a={};return Object.keys(e).filter((function(e){return!1===isNaN(Number(e))})).forEach((function(t){return a[parseInt(t)]=e[t]})),a},ta={isOpen:!1,message:"",status:r.SUCCESS},na={isOpen:!1,rowData:{}},ra=function(e){return i.a.createElement(xe.a,Object.assign({elevation:6,variant:"filled"},e))},oa=function(){var e=I(),a=e.username,t=e.role,c=Object(o.useRef)(null),l=Object(o.useState)(ta),s=Object(f.a)(l,2),u=s[0],m=s[1],d=function(e,a){"clickaway"!==a&&m(Object(h.a)({},u,{isOpen:!1,message:""}))},p=Object(o.useState)(na),E=Object(f.a)(p,2),b=E[0],g=E[1],S=function(e){return function(){g(Object(h.a)({},b,{rowData:e,isOpen:!0}))}},v=function(e){return function(){if(e){var a,t,n=null!==(a=null===(t=c.current)||void 0===t?void 0:t.password)&&void 0!==a?a:"";(o=b.rowData.username,i=n,new Promise((function(e,a){var t={method:"PUT",url:"".concat("https://virtusloop-mvm-api.herokuapp.com/").concat("api/users/reset_password/").concat(o),headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8"},data:{newPassword:i}};w()(t).then((function(t){200===(null===t||void 0===t?void 0:t.status)||201===(null===t||void 0===t?void 0:t.status)?e(t.data):a()})).catch((function(){a()}))}))).then((function(){g(Object(h.a)({},na)),m(Object(h.a)({},u,{isOpen:!0,status:r.SUCCESS,message:"Parola resetata cu success!"}))})).catch((function(){g(Object(h.a)({},na)),m(Object(h.a)({},u,{isOpen:!0,status:r.FAILURE,message:"Parola nu a putut fi resetata!"}))}))}var o,i;g(na)}},O=Object(o.useState)({columns:[{title:"Nume",field:"username",cellStyle:{maxWidth:90}},{title:"Parola",field:"password",editable:"onAdd",cellStyle:{maxWidth:90,minWidth:180},editComponent:function(e){return i.a.createElement(Qe,{formStyle:{minWidth:150,maxWidth:"70%"},inputStyle:{fontSize:13},placeholder:"Parola initiala",initialPassword:"",onChange:e.onChange})}},{title:"Rol",field:"role",lookup:aa(n),initialEditValue:n.FILLER,defaultSort:"asc",customSort:function(e,a){return e.role-a.role}},{title:"Ultima modificare",field:"updated",editable:"never",initialEditValue:(new Date).toLocaleString("ro-RO")}],data:[],localization:{grouping:{groupedBy:"Grupeaza dupa:",placeholder:"Muta capetele de table pentru a le grupa"},pagination:{labelDisplayedRows:"{from}-{to} din {count}",labelRowsPerPage:"Randuri pe pagina:",labelRowsSelect:"randuri"},toolbar:{},header:{actions:"Actiuni"},body:{filterRow:{},editRow:{saveTooltip:"Salvare",cancelTooltip:"Anulare",deleteText:"Esti sigur ca vrei sa stergi aceasta persoana?"},addTooltip:"Adaugare persoana noua",deleteTooltip:"Sterge",editTooltip:"Modifica"}}}),C=Object(f.a)(O,2),R=C[0],A=C[1],T=function(e){return t<e.role&&e.username!==a},j=function(e){var n;return!e||("update"===(null===(n=e.tableData)||void 0===n?void 0:n.editing)||(t>=e.role||e.username===a))};return i.a.createElement("div",null,i.a.createElement(Ue.a,{title:"Personal",columns:R.columns,data:function(e){return new Promise((function(a,t){new Promise((function(e,a){var t={method:"GET",url:"".concat("https://virtusloop-mvm-api.herokuapp.com/").concat("api/users/"),headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8"}};w()(t).then((function(t){t&&200===t.status?e({data:t.data,page:0,totalCount:1}):a()})).catch((function(){a()}))})).then((function(t){t.data.forEach((function(e){return e.updated=new Date(e.updated).toLocaleString("ro-RO",{timeZone:"Etc/GMT-4"})})),t.data=t.data.filter((function(a){return a.username.toLowerCase().includes(e.search)||n[a.role].toLowerCase().includes(e.search)||a.role.toString()===e.search})),a(t)}))}))},localization:R.localization,options:{draggable:!1,pageSize:10,padding:"default",actionsColumnIndex:4,headerStyle:{maxWidth:90},debounceInterval:300},actions:[function(e){return{icon:"lock_open",tooltip:"Resetare parola",onClick:S(e),disabled:j(e)}}],components:{EditField:function(e){return"role"===e.columnDef.field&&(e.columnDef.lookup=function(e){var a=aa(n);return Object.keys(a).forEach((function(t){e>=parseInt(t)&&delete a[parseInt(t)]})),a}(t)),i.a.createElement(He.MTableEditField,e)}},editable:{isEditable:function(e){return T(e)},isDeletable:function(e){return T(e)},onRowAdd:function(e){return new Promise((function(a){var t;(t={username:e.username,password:e.password,role:+e.role},new Promise((function(e,a){var n={method:"POST",url:"".concat("https://virtusloop-mvm-api.herokuapp.com/").concat("api/users/"),headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8"},data:t};w()(n).then((function(t){200===(null===t||void 0===t?void 0:t.status)||201===(null===t||void 0===t?void 0:t.status)?e(t.data):a()})).catch((function(){a()}))}))).then((function(e){A((function(a){var t=Object(je.a)(a.data);return t.push(e),Object(h.a)({},a,{data:t})})),a()}))}))},onRowUpdate:function(e,a){return new Promise((function(t){var n,o;(n=null===a||void 0===a?void 0:a.username,o={username:e.username,role:+e.role},new Promise((function(e,a){var t={method:"PUT",url:"".concat("https://virtusloop-mvm-api.herokuapp.com/").concat("api/users/").concat(n),headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8"},data:o};w()(t).then((function(t){200===(null===t||void 0===t?void 0:t.status)||201===(null===t||void 0===t?void 0:t.status)?e(t.data):a()})).catch((function(){a()}))}))).then((function(e){a&&A((function(t){var n=Object(je.a)(t.data);return n[n.indexOf(a)]=e,Object(h.a)({},t,{data:n})})),m(Object(h.a)({},u,{isOpen:!0,status:r.SUCCESS,message:"Utilizator modificat cu succes!"})),t()})).catch((function(){m(Object(h.a)({},u,{isOpen:!0,status:r.FAILURE,message:"A intervenit o problema la modificarea utilizatorului!"})),t()}))}))},onRowDelete:function(e){return new Promise((function(a){var t;(t=e.username,new Promise((function(e,a){var n={method:"DELETE",url:"".concat("https://virtusloop-mvm-api.herokuapp.com/").concat("api/users/").concat(t),headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8"}};w()(n).then((function(t){200===(null===t||void 0===t?void 0:t.status)||201===(null===t||void 0===t?void 0:t.status)?e(t.data):a()})).catch((function(){a()}))}))).then((function(t){A((function(a){var t=Object(je.a)(a.data);return t.splice(t.indexOf(e),1),Object(h.a)({},a,{data:t})})),a()}))}))}}}),i.a.createElement(Ne.a,{open:b.isOpen,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",disableBackdropClick:!0,disableScrollLock:!0},i.a.createElement(ye.a,{id:"alert-dialog-title"},"Resetare parola pentru ".concat(b.rowData.username)),i.a.createElement(De.a,null,i.a.createElement(Pe.a,{id:"alert-dialog-description"},"Parola contului va fi resetata cu o noua parola definita, iar la prima autentificare utilizatorul va trebui sa isi seteze o noua parola.")),i.a.createElement(Qe,{ref:c,formStyle:{margin:"0 auto 10px",maxWidth:"80%"},label:"Noua parola",initialPassword:""}),i.a.createElement(ke.a,{style:{justifyContent:"space-around"}},i.a.createElement(Fe,{onClick:v(!1)},"Renunta"),i.a.createElement(y.a,{onClick:v(!0),color:"primary"},"Reseteaza"))),i.a.createElement(Le.a,{open:u.isOpen,autoHideDuration:6e3,onClose:d},i.a.createElement(ra,{onClose:d,severity:u.status===r.SUCCESS?"success":"error"},u.message)))},ia=Object(F.a)((function(e){return{"@global":{body:{backgroundColor:e.palette.common.white}},card:{minWidth:275},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));!function(e){e[e.INITIAL=-1]="INITIAL",e[e.SERVER_ERROR=0]="SERVER_ERROR",e[e.CLIENT_ERROR=1]="CLIENT_ERROR",e[e.SUCCESS=2]="SUCCESS"}(ea||(ea={}));var ca,la=function(){var e=ia(),a=I(),t=a.browserHash,n=void 0===t?"":t,r=a.refreshToken,c=a.onLogin,l=Object(o.useState)(ea.INITIAL),u=Object(f.a)(l,2),m=u[0],d=u[1],p=Object(o.useState)(!1),E=Object(f.a)(p,2),b=E[0],g=E[1];return i.a.createElement(W.a,{component:"main",maxWidth:"xs"},i.a.createElement(s.a,null),i.a.createElement("div",{className:e.paper},i.a.createElement(B.a,{component:"h1",variant:"h5"},"Schimbare parola"),i.a.createElement("form",{className:e.form,onSubmit:function(e){e.preventDefault();var a=new FormData(e.currentTarget),t=String(a.get("oldPassword")||""),o=String(a.get("newPassword1")||""),i=String(a.get("newPassword2")||"");o===i?(g(!0),function(e,a,t,n){return new Promise((function(r,o){var i="",c=!0;try{(i=String(localStorage.getItem("token")||""))||(c=!1,i=String(sessionStorage.getItem("token")||""))}catch(s){c=!1,console.error("Local Storage not supported")}if(i){var l={method:"POST",url:"".concat("https://virtusloop-mvm-api.herokuapp.com/").concat("api/auth/change_password/"),headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8",Authorization:"Bearer ".concat(i),"X-Refresh-Token":n,"X-Browser-Hash":t},data:{oldPassword:e,newPassword:a}};w()(l).then((function(e){if(e&&201===e.status){var a=e.headers["x-token"],t=e.headers["x-refresh-token"];v(a,c),r({username:e.data.username,role:e.data.role,refreshToken:t})}else o()})).catch((function(){o()}))}else o()}))}(t,i,n,r).then((function(e){g(!1),d(ea.SUCCESS),c&&c(Object(h.a)({},e,{browserHash:n}))})).catch((function(){g(!1),d(ea.SERVER_ERROR)}))):d(ea.CLIENT_ERROR)}},i.a.createElement(k.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"oldPassword",label:"Vechea parola",type:"password",id:"oldPassword",autoComplete:"current-password",onChange:function(){return d(ea.INITIAL)},disabled:b}),i.a.createElement(k.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"newPassword1",label:"Noua parola",type:"password",id:"newPassword1",autoComplete:"new-password",onChange:function(){return d(ea.INITIAL)},disabled:b}),i.a.createElement(k.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"newPassword2",label:"Reintrodueti noua parola",type:"password",id:"newPassword2",autoComplete:"new-password",onChange:function(){return d(ea.INITIAL)},disabled:b}),m!==ea.INITIAL&&i.a.createElement(D.a,{className:e.card},i.a.createElement(P.a,null,i.a.createElement(B.a,{variant:"body1",component:"p",color:m===ea.SUCCESS?"primary":"error"},m===ea.SUCCESS?"Parola schimbata cu succes!":m===ea.SERVER_ERROR?"Nu s-a putut schimba parola! Verifica vechea parola si incearca din nou.":"Noua parola nu este identica la reintroducere!"))),i.a.createElement(y.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,disabled:b},b?i.a.createElement(G.a,null):"Schimbare parola"))))},sa=Object(F.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(h.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(X.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}}));!function(e){e.HOME="/",e.LOGIN="/login",e.DASHBOARD="/dashboard",e.MACHINES="/machines",e.INGREDIENTS="/ingredients",e.LOCATIONS="/locations",e.USERS="/users",e.CHANGE_PASSWORD="/change_password",e.FORBIDDEN="/forbidden",e.NOT_FOUND="/404",e.TEMPORARY="/temporary"}(ca||(ca={}));var ua=new Map([[ca.DASHBOARD,"Panou principal"],[ca.MACHINES,"Aparate"],[ca.INGREDIENTS,"Ingrediente"],[ca.LOCATIONS,"Locatii"],[ca.USERS,"Personal"],[ca.CHANGE_PASSWORD,"Schimbare parola"],[ca.TEMPORARY,"Temporar"]]),ma=function(e){var a=e.tab,t=sa(),n=Object(J.a)(),r=Object(Z.a)(n.breakpoints.up("md"),{noSsr:!0}),c=Object(o.useState)(r),l=Object(f.a)(c,2),u=l[0],m=l[1],h=Object(p.g)(),E=Object(p.h)(),b=I(),g=b.username,S=b.role,v=b.browserHash,C=void 0===v?"":v,R=b.refreshToken,A=b.onLogout,T=b.setLoading;return i.a.createElement("div",{className:t.root},i.a.createElement(s.a,null),i.a.createElement($.a,{position:"absolute",className:Object(Y.a)(t.appBar,u&&t.appBarShift)},i.a.createElement(K.a,{className:t.toolbar},i.a.createElement(Q.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){m(!0)},className:Object(Y.a)(t.menuButton,u&&t.menuButtonHidden)},i.a.createElement(se.a,null)),i.a.createElement(B.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:t.title},ua.get(a)),i.a.createElement(Q.a,{color:"inherit"},i.a.createElement(ee.a,{badgeContent:0,color:"secondary"},i.a.createElement(me.a,null))))),i.a.createElement(ae.a,{variant:"permanent",classes:{paper:Object(Y.a)(t.drawerPaper,!u&&t.drawerPaperClose)},open:u},i.a.createElement("div",{className:t.toolbarIcon},i.a.createElement(Q.a,{onClick:function(){m(!1)}},i.a.createElement(pe.a,null))),i.a.createElement(te.a,null),i.a.createElement(ne.a,null,i.a.createElement(re.a,{button:!0,component:d.b,to:ca.DASHBOARD},i.a.createElement(oe.a,null,i.a.createElement(fe.a,null)),i.a.createElement(ie.a,{primary:ua.get(ca.DASHBOARD)})),i.a.createElement(re.a,{button:!0,component:d.b,to:ca.MACHINES},i.a.createElement(oe.a,null,i.a.createElement(be.a,null)),i.a.createElement(ie.a,{primary:ua.get(ca.MACHINES)})),i.a.createElement(re.a,{button:!0,component:d.b,to:ca.INGREDIENTS},i.a.createElement(oe.a,null,i.a.createElement(Se.a,null)),i.a.createElement(ie.a,{primary:ua.get(ca.INGREDIENTS)})),i.a.createElement(re.a,{button:!0,component:d.b,to:ca.LOCATIONS},i.a.createElement(oe.a,null,i.a.createElement(ve.a,null)),i.a.createElement(ie.a,{primary:ua.get(ca.LOCATIONS)})),S<3&&i.a.createElement(re.a,{button:!0,component:d.b,to:ca.USERS},i.a.createElement(oe.a,null,i.a.createElement(Ce.a,null)),i.a.createElement(ie.a,{primary:ua.get(ca.USERS)}))),i.a.createElement(te.a,null),i.a.createElement(ne.a,null,i.a.createElement(ce.a,{inset:!0},"Utilizator: ",i.a.createElement("b",null,g)),i.a.createElement(re.a,{button:!0,component:d.b,to:ca.CHANGE_PASSWORD},i.a.createElement(oe.a,null,i.a.createElement(Ie.a,null)),i.a.createElement(ie.a,{primary:ua.get(ca.CHANGE_PASSWORD)})),i.a.createElement(re.a,{button:!0,onClick:function(){T&&T(!0),function(e,a){return new Promise((function(t,n){var r="";try{(r=String(localStorage.getItem("token")||""))||(r=String(sessionStorage.getItem("token")||""))}catch(i){console.error("Local Storage not supported")}var o={method:"POST",url:"".concat("https://virtusloop-mvm-api.herokuapp.com/").concat("api/auth/logout/"),headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8",Authorization:"Bearer ".concat(r),"X-Browser-Hash":e}};a&&(o.headers["X-Refresh-Token"]=a),w()(o).then((function(e){e&&201===e.status?(O(),t()):n()})).catch((function(){n()}))}))}(C,R).then((function(){A&&A(C),h.replace(ca.LOGIN,{from:E})}))}},i.a.createElement(oe.a,null,i.a.createElement(Te.a,null)),i.a.createElement(ie.a,{primary:"Deconectare"})))),i.a.createElement("main",{className:t.content},i.a.createElement("div",{className:t.appBarSpacer}),i.a.createElement(W.a,{maxWidth:"xl",className:t.container},function(){var e=ua.get(a);if(!e)return i.a.createElement(p.a,{exact:!0,from:E.pathname,to:ca.NOT_FOUND});switch(a){case ca.DASHBOARD:case ca.MACHINES:case ca.INGREDIENTS:case ca.LOCATIONS:return i.a.createElement("h1",null,e);case ca.CHANGE_PASSWORD:return i.a.createElement(la,null);case ca.USERS:return S<3?i.a.createElement(oa,null):i.a.createElement(p.a,{exact:!0,from:E.pathname,to:ca.FORBIDDEN});default:return i.a.createElement(p.a,{exact:!0,from:E.pathname,to:ca.NOT_FOUND})}}())))},da=function(){var e=I(),a=e.isLoading,t=e.username;return a?i.a.createElement(j,null):i.a.createElement(p.d,null,i.a.createElement(p.a,{exact:!0,from:ca.HOME,to:ca.DASHBOARD}),i.a.createElement(p.b,{path:ca.LOGIN,render:function(){return t?i.a.createElement(p.a,{to:ca.DASHBOARD}):i.a.createElement(V,null)}}),i.a.createElement(pa,{path:ca.DASHBOARD,render:function(){return i.a.createElement(ma,{tab:ca.DASHBOARD})}}),i.a.createElement(pa,{path:ca.MACHINES,render:function(){return i.a.createElement(ma,{tab:ca.MACHINES})}}),i.a.createElement(pa,{path:ca.INGREDIENTS,render:function(){return i.a.createElement(ma,{tab:ca.INGREDIENTS})}}),i.a.createElement(pa,{path:ca.LOCATIONS,render:function(){return i.a.createElement(ma,{tab:ca.LOCATIONS})}}),i.a.createElement(pa,{path:ca.USERS,render:function(){return i.a.createElement(ma,{tab:ca.USERS})}}),i.a.createElement(pa,{path:ca.TEMPORARY,render:function(){return i.a.createElement(ma,{tab:ca.TEMPORARY})}}),i.a.createElement(pa,{path:ca.CHANGE_PASSWORD,render:function(){return i.a.createElement(ma,{tab:ca.CHANGE_PASSWORD})}}),i.a.createElement(p.b,{path:ca.FORBIDDEN,component:function(){return i.a.createElement("h1",null,"Forbidden")}}),i.a.createElement(p.b,{component:function(){return i.a.createElement("h1",null,"404 Not found")}}))},pa=function(e){var a=e.path,t=e.render,n=Object(m.a)(e,["path","render"]),r=I().username?t:function(){return i.a.createElement(p.a,{to:{pathname:ca.LOGIN,state:{from:a}}})};return i.a.createElement(p.b,Object.assign({},n,{render:r}))},ha=function(){return i.a.createElement(d.a,{basename:"/mvm-web"},i.a.createElement(A,null,i.a.createElement(da,null)))},fa=t(234),Ea=Object(fa.a)({palette:{primary:{main:"#2B6CB0"},secondary:{main:"#2C7A7B"},error:{main:"#C53030"},background:{default:"#F7FAFC"}}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));window.requestIdleCallback=window.requestIdleCallback||function(e){var a=Date.now();return setTimeout((function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-a))}})}),1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)},l.a.render(i.a.createElement(u.a,{theme:Ea},i.a.createElement(s.a,null),i.a.createElement(ha,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[259,1,2]]]);