(this["webpackJsonpmvm-web"]=this["webpackJsonpmvm-web"]||[]).push([[0],{258:function(e,a,t){e.exports=t(378)},378:function(e,a,t){"use strict";t.r(a);t(259);var n,r,o=t(0),i=t.n(o),c=t(16),l=t.n(c),s=t(433),u=t(428),m=t(237),d=t(56),p=t(80),h=t(17),E=t(29),f=t(154),g=t.n(f),b=t(211),w=t(49),S=t.n(w),v=function(e){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e)try{a?localStorage.setItem("token",e):sessionStorage.setItem("token",e)}catch(t){console.error("Local Storage not supported")}},O=function(){try{localStorage.removeItem("token"),sessionStorage.removeItem("token")}catch(e){console.error("Local Storage not supported")}},R={isLoading:!0,username:"",role:4,needNewPassword:!1,refreshToken:""},C=Object(o.createContext)(R),I=function(){return Object(o.useContext)(C)},N=function(e){var a=Object(o.useState)(R),t=Object(E.a)(a,2),n=t[0],r=t[1];Object(o.useEffect)((function(){window.requestIdleCallback((function(){g.a.getPromise({preprocessor:function(e,a){if("userAgent"===e){var t=new b.UAParser(a);return((t.getDevice().model||"")+" "+(t.getDevice().type||"")+" "+(t.getDevice().vendor||"")+" "+(t.getOS().name||"")+" "+(t.getOS().version||"")+" "+(t.getBrowser().name||"")+" "+(t.getEngine().name||"")+" "+(t.getCPU().architecture||"")).trim()}return a}}).then((function(e){var a,t,n=e.map((function(e){return e.value})),o=g.a.x64hash128(n.join(""),31);(a=o,new Promise((function(e,n){var r="",o=!0;try{(r=String(localStorage.getItem("token")||""))||(o=!1,r=String(sessionStorage.getItem("token")||""))}catch(c){o=!1,console.error("Local Storage not supported")}if(r){var i={method:"GET",url:"".concat("https://virtusloop-mvm-api.herokuapp.com/").concat("api/auth/me/"),headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8",Authorization:"Bearer ".concat(r),"X-Browser-Hash":a}};t&&(i.headers["X-Refresh-Token"]=t),S()(i).then((function(a){if(a&&200===a.status){var t=a.headers["x-token"],r=a.headers["x-refresh-token"];v(t,o),e({username:a.data.username,role:a.data.role,needNewPassword:a.data.needNewPassword,refreshToken:r})}else O(),n()})).catch((function(){O(),n()}))}else n()}))).then((function(e){r(Object(h.a)({},e,{isLoading:!1,browserHash:o}))})).catch((function(){r(Object(h.a)({},R,{isLoading:!1,browserHash:o}))}))}))}))}),[]);var c=Object(o.useMemo)((function(){return Object(h.a)({},n,{onLogin:function(e){return r(e)},onLogout:function(e){return r(Object(h.a)({},R,{isLoading:!1,browserHash:e}))},setLoading:function(e){return r(Object(h.a)({},n,{isLoading:e}))}})}),[n]);return i.a.createElement(C.Provider,Object.assign({value:c},e))},A=t(179),T=function(){return i.a.createElement("div",{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",backgroundColor:"#F7FAFC"}},i.a.createElement(A.a,{disableShrink:!0,size:70}))},j=t(443),P=t(199),y=t(434),D=t(435),k=t(209),L=t(204),U=t(207),x=t(234),H=t.n(x),B=t(58),W=t(217),F=t(432),_=t(95),M=t.n(_),G=t(419),z=function(){return i.a.createElement(B.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",i.a.createElement(G.a,{color:"inherit",href:"https://material-ui.com/"},"Your Website")," ".concat((new Date).getFullYear(),"."))},V=t(122),q=t(3),X=t(18),Y=t(429),J=t(436),Z=t(185),$=t(182),K=t(437),Q=t(444),ee=t(438),ae=t(423),te=t(390),ne=t(439),re=t(202),oe=t(440),ie=t(224),ce=t.n(ie),le=t(225),se=t.n(le),ue=t(226),me=t.n(ue),de=t(227),pe=t.n(de),he=t(228),Ee=t.n(he),fe=t(229),ge=t.n(fe),be=t(230),we=t.n(be),Se=t(231),ve=t.n(Se),Oe=t(232),Re=t.n(Oe),Ce=t(233),Ie=t.n(Ce),Ne=t(425),Ae=t(430),Te=t(426),je=t(431),Pe=t(427),ye=t(442),De=t(441),ke=t(155),Le=t.n(ke),Ue=t(6),xe=Object(Ue.a)({root:{color:"#C53030","&:hover":{background:"rgba(197, 47, 48, 0.08)"}}})(P.a),He=t(218),Be=t(219),We=t(236),Fe=t(220),_e=t(238),Me=t(198),Ge=t(210),ze=t(186),Ve=t(200),qe=t(221),Xe=t.n(qe),Ye=t(222),Je=t.n(Ye),Ze=function(e){function a(e){var t;return Object(He.a)(this,a),(t=Object(We.a)(this,Object(Fe.a)(a).call(this,e))).handleClickShowAddPassword=function(){t.setState({showAddPassword:!t.state.showAddPassword})},t.handleMouseDownPassword=function(e){e.preventDefault()},t.state={showAddPassword:!0,password:e.initialPassword},t}return Object(_e.a)(a,e),Object(Be.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement(Me.a,{style:this.props.formStyle},this.props.label&&i.a.createElement(Ge.a,{htmlFor:"passwordInput"},this.props.label),i.a.createElement(ze.a,{style:this.props.inputStyle,id:"passwordInput",type:this.state.showAddPassword?"text":"password",autoComplete:"new-password",placeholder:this.props.placeholder,value:this.state.password,onChange:function(a){e.setState({password:a.target.value}),e.props.onChange&&e.props.onChange(a.target.value)},endAdornment:i.a.createElement(Ve.a,{position:"end"},i.a.createElement($.a,{"aria-label":"toggle password visibility",onClick:this.handleClickShowAddPassword,onMouseDown:this.handleMouseDownPassword},this.state.showAddPassword?i.a.createElement(Xe.a,null):i.a.createElement(Je.a,null)))}))}},{key:"password",get:function(){return this.state.password}}]),a}(i.a.Component);!function(e){e[e.ADMINISTRATOR=1]="ADMINISTRATOR",e[e.MODERATOR=2]="MODERATOR",e[e.TEHNICIAN=3]="TEHNICIAN",e[e.FILLER=4]="FILLER"}(n||(n={})),function(e){e[e.FAILURE=0]="FAILURE",e[e.SUCCESS=1]="SUCCESS"}(r||(r={}));var $e,Ke=function(e){var a={};return Object.keys(e).filter((function(e){return!1===isNaN(Number(e))})).forEach((function(t){return a[parseInt(t)]=e[t]})),a},Qe={isOpen:!1,message:"",status:r.SUCCESS},ea={isOpen:!1,rowData:{}},aa=function(e){return i.a.createElement(De.a,Object.assign({elevation:6,variant:"filled"},e))},ta=function(){var e=I(),a=e.username,t=e.role,c=Object(o.useState)(Qe),l=Object(E.a)(c,2),s=l[0],u=l[1],m=function(e,a){"clickaway"!==a&&u(Object(h.a)({},s,{isOpen:!1,message:""}))},d=Object(o.useRef)(null),p=Object(o.useState)(ea),f=Object(E.a)(p,2),g=f[0],b=f[1],w=function(e){return function(){b(Object(h.a)({},g,{rowData:e,isOpen:!0}))}},v=function(e){return function(){if(e){var a,t,n=null!==(a=null===(t=d.current)||void 0===t?void 0:t.password)&&void 0!==a?a:"";(o=g.rowData.username,i=n,new Promise((function(e,a){var t={method:"PUT",url:"".concat("https://virtusloop-mvm-api.herokuapp.com/").concat("api/users/reset_password/").concat(o),headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8"},data:{newPassword:i}};S()(t).then((function(t){200===(null===t||void 0===t?void 0:t.status)||201===(null===t||void 0===t?void 0:t.status)?e(t.data):a()})).catch((function(){a()}))}))).then((function(){b(Object(h.a)({},ea)),u(Object(h.a)({},s,{isOpen:!0,status:r.SUCCESS,message:"Parola resetata cu success!"}))})).catch((function(){b(Object(h.a)({},ea)),u(Object(h.a)({},s,{isOpen:!0,status:r.FAILURE,message:"Parola nu a putut fi resetata!"}))}))}var o,i;b(ea)}},O=Object(o.useState)({columns:[{title:"Nume",field:"username",cellStyle:{maxWidth:90}},{title:"Parola",field:"password",editable:"onAdd",cellStyle:{maxWidth:90,minWidth:180},sorting:!1,searchable:!1,editComponent:function(e){return i.a.createElement(Ze,{formStyle:{minWidth:150,maxWidth:"70%"},inputStyle:{fontSize:13},placeholder:"Parola initiala",initialPassword:"",onChange:e.onChange})}},{title:"Rol",field:"role",lookup:Ke(n),initialEditValue:n.FILLER,defaultSort:"asc",customSort:function(e,a){return e.role-a.role}},{title:"Ultima modificare",field:"updated",editable:"never",initialEditValue:(new Date).toLocaleString("ro-RO")}],data:[],localization:{grouping:{groupedBy:"Grupeaza dupa:",placeholder:"Muta capetele de table pentru a le grupa"},pagination:{labelDisplayedRows:"{from}-{to} din {count}",labelRowsPerPage:"Randuri pe pagina:",labelRowsSelect:"randuri"},toolbar:{},header:{actions:"Actiuni"},body:{filterRow:{},editRow:{saveTooltip:"Salvare",cancelTooltip:"Anulare",deleteText:"Esti sigur ca vrei sa stergi aceasta persoana?"},addTooltip:"Adaugare persoana noua",deleteTooltip:"Sterge",editTooltip:"Modifica"}}}),R=Object(E.a)(O,1)[0],C=function(e){return t<e.role&&e.username!==a},N=function(e){var n;return!e||("update"===(null===(n=e.tableData)||void 0===n?void 0:n.editing)||(t>=e.role||e.username===a))};return i.a.createElement("div",null,i.a.createElement(Le.a,{title:"Personal",columns:R.columns,data:function(e){return new Promise((function(a,t){new Promise((function(e,a){var t={method:"GET",url:"".concat("https://virtusloop-mvm-api.herokuapp.com/").concat("api/users/"),headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8"}};S()(t).then((function(t){t&&200===t.status?e({data:t.data,page:0,totalCount:10}):a()})).catch((function(){a()}))})).then((function(t){t.data.forEach((function(e){return e.updated=new Date(e.updated).toLocaleString("ro-RO",{timeZone:"Etc/GMT-4"})})),t.data=t.data.filter((function(a){return a.username.toLowerCase().includes(e.search.toLowerCase())||n[a.role].toLowerCase().includes(e.search.toLowerCase())||a.role.toString()===e.search})),a(t)}))}))},localization:R.localization,options:{draggable:!1,pageSize:10,padding:"default",actionsColumnIndex:4,headerStyle:{maxWidth:90},debounceInterval:300},actions:[function(e){return{icon:"lock_open",tooltip:"Resetare parola",onClick:w(e),disabled:N(e)}}],components:{EditField:function(e){return"role"===e.columnDef.field&&(e.columnDef.lookup=function(e){var a=Ke(n);return Object.keys(a).forEach((function(t){e>=parseInt(t)&&delete a[parseInt(t)]})),a}(t)),i.a.createElement(ke.MTableEditField,e)}},editable:{isEditable:function(e){return C(e)},isDeletable:function(e){return C(e)},onRowAdd:function(e){return new Promise((function(a){var t;(t={username:e.username,password:e.password,role:+e.role},new Promise((function(e,a){var n={method:"POST",url:"".concat("https://virtusloop-mvm-api.herokuapp.com/").concat("api/users/"),headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8"},data:t};S()(n).then((function(t){200===(null===t||void 0===t?void 0:t.status)||201===(null===t||void 0===t?void 0:t.status)?e(t.data):a()})).catch((function(){a()}))}))).then((function(){u(Object(h.a)({},s,{isOpen:!0,status:r.SUCCESS,message:"Utilizator adaugat cu succes!"})),a()})).catch((function(){u(Object(h.a)({},s,{isOpen:!0,status:r.FAILURE,message:"A intervenit o problema la adaugarea utilizatorului!"})),a()}))}))},onRowUpdate:function(e,a){return new Promise((function(t){var n,o;(n=null===a||void 0===a?void 0:a.username,o={username:e.username,role:+e.role},new Promise((function(e,a){var t={method:"PUT",url:"".concat("https://virtusloop-mvm-api.herokuapp.com/").concat("api/users/").concat(n),headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8"},data:o};S()(t).then((function(t){200===(null===t||void 0===t?void 0:t.status)||201===(null===t||void 0===t?void 0:t.status)?e(t.data):a()})).catch((function(){a()}))}))).then((function(){u(Object(h.a)({},s,{isOpen:!0,status:r.SUCCESS,message:"Utilizator modificat cu succes!"})),t()})).catch((function(){u(Object(h.a)({},s,{isOpen:!0,status:r.FAILURE,message:"A intervenit o problema la modificarea utilizatorului!"})),t()}))}))},onRowDelete:function(e){return new Promise((function(a){var t;(t=e.username,new Promise((function(e,a){var n={method:"DELETE",url:"".concat("https://virtusloop-mvm-api.herokuapp.com/").concat("api/users/").concat(t),headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8"}};S()(n).then((function(t){200===(null===t||void 0===t?void 0:t.status)||201===(null===t||void 0===t?void 0:t.status)?e(t.data):a()})).catch((function(){a()}))}))).then((function(){u(Object(h.a)({},s,{isOpen:!0,status:r.SUCCESS,message:"Utilizator sters cu succes!"})),a()})).catch((function(){u(Object(h.a)({},s,{isOpen:!0,status:r.FAILURE,message:"A intervenit o problema la stergerea utilizatorului!"})),a()}))}))}}}),i.a.createElement(Ne.a,{open:g.isOpen,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",disableBackdropClick:!0,disableScrollLock:!0},i.a.createElement(Ae.a,{id:"alert-dialog-title"},"Resetare parola pentru ".concat(g.rowData.username)),i.a.createElement(Te.a,null,i.a.createElement(je.a,{id:"alert-dialog-description"},"Parola contului va fi resetata cu o noua parola definita, iar la prima autentificare utilizatorul va trebui sa isi seteze o noua parola.")),i.a.createElement(Ze,{ref:d,formStyle:{margin:"0 auto 10px",maxWidth:"80%"},label:"Noua parola",initialPassword:""}),i.a.createElement(Pe.a,{style:{justifyContent:"space-around"}},i.a.createElement(xe,{onClick:v(!1)},"Renunta"),i.a.createElement(P.a,{onClick:v(!0),color:"primary"},"Reseteaza"))),i.a.createElement(ye.a,{open:s.isOpen,autoHideDuration:6e3,onClose:m},i.a.createElement(aa,{onClose:m,severity:s.status===r.SUCCESS?"success":"error"},s.message)))},na=Object(W.a)((function(e){return{"@global":{body:{backgroundColor:e.palette.common.white}},card:{minWidth:275},paper:{marginTop:e.spacing(2),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));!function(e){e[e.INITIAL=-1]="INITIAL",e[e.SERVER_ERROR=0]="SERVER_ERROR",e[e.CLIENT_ERROR=1]="CLIENT_ERROR",e[e.SUCCESS=2]="SUCCESS"}($e||($e={}));var ra,oa=function(){var e=na(),a=I(),t=a.browserHash,n=void 0===t?"":t,r=a.refreshToken,c=a.onLogin,l=Object(o.useState)($e.INITIAL),u=Object(E.a)(l,2),m=u[0],d=u[1],p=Object(o.useState)(!1),f=Object(E.a)(p,2),g=f[0],b=f[1];return i.a.createElement(F.a,{component:"main",maxWidth:"xs"},i.a.createElement(s.a,null),i.a.createElement("div",{className:e.paper},i.a.createElement("form",{className:e.form,onSubmit:function(e){e.preventDefault();var a=new FormData(e.currentTarget),t=String(a.get("oldPassword")||""),o=String(a.get("newPassword1")||""),i=String(a.get("newPassword2")||"");o===i?(b(!0),function(e,a,t,n){return new Promise((function(r,o){var i="",c=!0;try{(i=String(localStorage.getItem("token")||""))||(c=!1,i=String(sessionStorage.getItem("token")||""))}catch(s){c=!1,console.error("Local Storage not supported")}if(i){var l={method:"POST",url:"".concat("https://virtusloop-mvm-api.herokuapp.com/").concat("api/auth/change_password/"),headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8",Authorization:"Bearer ".concat(i),"X-Refresh-Token":n,"X-Browser-Hash":t},data:{oldPassword:e,newPassword:a}};S()(l).then((function(e){if(e&&201===e.status){var a=e.headers["x-token"],t=e.headers["x-refresh-token"];v(a,c),r({username:e.data.username,role:e.data.role,needNewPassword:e.data.needNewPassword,refreshToken:t})}else o()})).catch((function(){o()}))}else o()}))}(t,i,n,r).then((function(e){b(!1),d($e.SUCCESS),c&&c(Object(h.a)({},e,{browserHash:n}))})).catch((function(){b(!1),d($e.SERVER_ERROR)}))):d($e.CLIENT_ERROR)}},i.a.createElement(k.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"oldPassword",label:"Vechea parola",type:"password",id:"oldPassword",autoComplete:"current-password",onChange:function(){return d($e.INITIAL)},disabled:g}),i.a.createElement(k.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"newPassword1",label:"Noua parola",type:"password",id:"newPassword1",autoComplete:"new-password",onChange:function(){return d($e.INITIAL)},disabled:g}),i.a.createElement(k.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"newPassword2",label:"Reintrodueti noua parola",type:"password",id:"newPassword2",autoComplete:"new-password",onChange:function(){return d($e.INITIAL)},disabled:g}),m!==$e.INITIAL&&i.a.createElement(y.a,{className:e.card},i.a.createElement(D.a,null,i.a.createElement(B.a,{variant:"body1",component:"p",color:m===$e.SUCCESS?"primary":"error"},m===$e.SUCCESS?"Parola schimbata cu succes!":m===$e.SERVER_ERROR?"Nu s-a putut schimba parola! Verifica vechea parola si incearca din nou.":"Noua parola nu este identica la reintroducere!"))),i.a.createElement(P.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,disabled:g},g?i.a.createElement(M.a,null):"Schimbare parola"))))},ia=Object(W.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(h.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(V.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}}));!function(e){e.HOME="/",e.LOGIN="/login",e.NEW_PASSWORD="/new_password",e.DASHBOARD="/dashboard",e.MACHINES="/machines",e.INGREDIENTS="/ingredients",e.LOCATIONS="/locations",e.USERS="/users",e.CHANGE_PASSWORD="/change_password",e.FORBIDDEN="/forbidden",e.NOT_FOUND="/404",e.TEMPORARY="/temporary"}(ra||(ra={}));var ca,la=new Map([[ra.DASHBOARD,"Panou principal"],[ra.MACHINES,"Aparate"],[ra.INGREDIENTS,"Ingrediente"],[ra.LOCATIONS,"Locatii"],[ra.USERS,"Personal"],[ra.CHANGE_PASSWORD,"Schimbare parola"],[ra.TEMPORARY,"Temporar"]]),sa=function(e){var a=e.tab,t=ia(),n=Object(X.a)(),r=Object(Y.a)(n.breakpoints.up("md"),{noSsr:!0}),c=Object(o.useState)(r),l=Object(E.a)(c,2),u=l[0],m=l[1],h=Object(p.g)(),f=Object(p.h)(),g=I(),b=g.username,w=g.role,v=g.browserHash,R=void 0===v?"":v,C=g.refreshToken,N=g.onLogout,A=g.setLoading;return i.a.createElement("div",{className:t.root},i.a.createElement(s.a,null),i.a.createElement(J.a,{position:"absolute",className:Object(q.a)(t.appBar,u&&t.appBarShift)},i.a.createElement(Z.a,{className:t.toolbar},i.a.createElement($.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){m(!0)},className:Object(q.a)(t.menuButton,u&&t.menuButtonHidden)},i.a.createElement(ce.a,null)),i.a.createElement(B.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:t.title},la.get(a)),i.a.createElement($.a,{color:"inherit"},i.a.createElement(K.a,{badgeContent:0,color:"secondary"},i.a.createElement(se.a,null))))),i.a.createElement(Q.a,{variant:"permanent",classes:{paper:Object(q.a)(t.drawerPaper,!u&&t.drawerPaperClose)},open:u},i.a.createElement("div",{className:t.toolbarIcon},i.a.createElement($.a,{onClick:function(){m(!1)}},i.a.createElement(me.a,null))),i.a.createElement(ee.a,null),i.a.createElement(ae.a,null,i.a.createElement(te.a,{button:!0,component:d.b,to:ra.DASHBOARD},i.a.createElement(ne.a,null,i.a.createElement(pe.a,null)),i.a.createElement(re.a,{primary:la.get(ra.DASHBOARD)})),i.a.createElement(te.a,{button:!0,component:d.b,to:ra.MACHINES},i.a.createElement(ne.a,null,i.a.createElement(Ee.a,null)),i.a.createElement(re.a,{primary:la.get(ra.MACHINES)})),i.a.createElement(te.a,{button:!0,component:d.b,to:ra.INGREDIENTS},i.a.createElement(ne.a,null,i.a.createElement(ge.a,null)),i.a.createElement(re.a,{primary:la.get(ra.INGREDIENTS)})),i.a.createElement(te.a,{button:!0,component:d.b,to:ra.LOCATIONS},i.a.createElement(ne.a,null,i.a.createElement(we.a,null)),i.a.createElement(re.a,{primary:la.get(ra.LOCATIONS)})),w<3&&i.a.createElement(te.a,{button:!0,component:d.b,to:ra.USERS},i.a.createElement(ne.a,null,i.a.createElement(ve.a,null)),i.a.createElement(re.a,{primary:la.get(ra.USERS)}))),i.a.createElement(ee.a,null),i.a.createElement(ae.a,null,i.a.createElement(oe.a,{inset:!0},"Utilizator: ",i.a.createElement("b",null,b)),i.a.createElement(te.a,{button:!0,component:d.b,to:ra.CHANGE_PASSWORD},i.a.createElement(ne.a,null,i.a.createElement(Re.a,null)),i.a.createElement(re.a,{primary:la.get(ra.CHANGE_PASSWORD)})),i.a.createElement(te.a,{button:!0,onClick:function(){A&&A(!0),function(e,a){return new Promise((function(t,n){var r="";try{(r=String(localStorage.getItem("token")||""))||(r=String(sessionStorage.getItem("token")||""))}catch(i){console.error("Local Storage not supported")}var o={method:"POST",url:"".concat("https://virtusloop-mvm-api.herokuapp.com/").concat("api/auth/logout/"),headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8",Authorization:"Bearer ".concat(r),"X-Browser-Hash":e}};a&&(o.headers["X-Refresh-Token"]=a),S()(o).then((function(e){e&&201===e.status?(O(),t()):n()})).catch((function(){n()}))}))}(R,C).then((function(){N&&N(R),h.replace(ra.LOGIN,{from:f})}))}},i.a.createElement(ne.a,null,i.a.createElement(Ie.a,null)),i.a.createElement(re.a,{primary:"Deconectare"})))),i.a.createElement("main",{className:t.content},i.a.createElement("div",{className:t.appBarSpacer}),i.a.createElement(F.a,{maxWidth:"xl",className:t.container},function(){var e=la.get(a);if(!e)return i.a.createElement(p.a,{from:f.pathname,to:ra.NOT_FOUND});switch(a){case ra.DASHBOARD:case ra.MACHINES:case ra.INGREDIENTS:case ra.LOCATIONS:return i.a.createElement("h1",null,e);case ra.CHANGE_PASSWORD:return i.a.createElement(oa,null);case ra.USERS:return w<3?i.a.createElement(ta,null):i.a.createElement(p.a,{from:f.pathname,to:ra.FORBIDDEN});default:return i.a.createElement(p.a,{from:f.pathname,to:ra.NOT_FOUND})}}())))},ua=Object(W.a)((function(e){return{"@global":{body:{backgroundColor:e.palette.common.white}},card:{minWidth:275},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),ma=function(){var e=ua(),a=I(),t=a.browserHash,n=void 0===t?"":t,r=a.onLogin,c=Object(o.useState)(!1),l=Object(E.a)(c,2),u=l[0],m=l[1],d=Object(o.useState)(!1),f=Object(E.a)(d,2),g=f[0],b=f[1],w=Object(o.useState)(!1),R=Object(E.a)(w,2),C=R[0],N=R[1],A=Object(p.g)(),T=(Object(p.h)().state||{from:{pathname:"/"}}).from;return i.a.createElement(F.a,{component:"main",maxWidth:"xs"},i.a.createElement(s.a,null),i.a.createElement("div",{className:e.paper},i.a.createElement(j.a,{className:e.avatar},i.a.createElement(H.a,null)),i.a.createElement(B.a,{component:"h1",variant:"h5"},"Conectare"),i.a.createElement("form",{className:e.form,onSubmit:function(e){e.preventDefault(),b(!0);var a=new FormData(e.currentTarget);(function(e,a,t,n){return new Promise((function(r,o){var i={method:"POST",url:"".concat("https://virtusloop-mvm-api.herokuapp.com/").concat("api/auth/login/"),headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8","X-Browser-Hash":t},data:{username:e,password:a}};S()(i).then((function(e){if(e&&201===e.status){var a=e.headers["x-token"],t=e.headers["x-refresh-token"];v(a,n),r({username:e.data.username,role:e.data.role,needNewPassword:e.data.needNewPassword,refreshToken:t})}else O(),o()})).catch((function(){O(),o()}))}))})(String(a.get("username")||""),String(a.get("password")||""),n,C).then((function(e){b(!1),r&&r(Object(h.a)({},e,{browserHash:n})),e.needNewPassword?A.replace(ra.NEW_PASSWORD,T):A.replace(T)})).catch((function(){b(!1),m(!0)}))}},i.a.createElement(k.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Nume",name:"username",autoComplete:"username",autoFocus:!0,onChange:function(){return m(!1)},disabled:g}),i.a.createElement(k.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Parola",type:"password",id:"password",autoComplete:"current-password",onChange:function(){return m(!1)},disabled:g}),i.a.createElement(L.a,{control:i.a.createElement(U.a,{value:"remember",color:"primary",onChange:function(e,a){N(a)},disabled:g}),label:"Tine-ma conectat"}),u&&i.a.createElement(y.a,{className:e.card},i.a.createElement(D.a,null,i.a.createElement(B.a,{variant:"body1",component:"p",color:"error"},"Nume sau parola incorecte! Incearca din nou."))),i.a.createElement(P.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,disabled:g},g?i.a.createElement(M.a,null):"Conectare"))),i.a.createElement(z,null))},da=Object(W.a)((function(e){return{"@global":{body:{backgroundColor:e.palette.common.white}},card:{minWidth:275},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));!function(e){e[e.INITIAL=-1]="INITIAL",e[e.SERVER_ERROR=0]="SERVER_ERROR",e[e.CLIENT_ERROR=1]="CLIENT_ERROR",e[e.SUCCESS=2]="SUCCESS"}(ca||(ca={}));var pa=function(){var e=da(),a=I(),t=a.browserHash,n=void 0===t?"":t,r=a.refreshToken,c=a.onLogin,l=Object(o.useState)(ca.INITIAL),u=Object(E.a)(l,2),m=u[0],d=u[1],f=Object(o.useState)(!1),g=Object(E.a)(f,2),b=g[0],w=g[1],O=Object(p.g)(),R=(Object(p.h)().state||{from:{pathname:"/"}}).from;return i.a.createElement(F.a,{component:"main",maxWidth:"xs"},i.a.createElement(s.a,null),i.a.createElement("div",{className:e.paper},i.a.createElement(B.a,{component:"h1",variant:"h5"},"Alege o noua parola"),i.a.createElement("form",{className:e.form,onSubmit:function(e){e.preventDefault();var a=new FormData(e.currentTarget),t=String(a.get("newPassword1")||""),o=String(a.get("newPassword2")||"");t===o?(w(!0),function(e,a,t){return new Promise((function(n,r){var o="",i=!0;try{(o=String(localStorage.getItem("token")||""))||(i=!1,o=String(sessionStorage.getItem("token")||""))}catch(l){i=!1,console.error("Local Storage not supported")}if(o){var c={method:"POST",url:"".concat("https://virtusloop-mvm-api.herokuapp.com/").concat("api/auth/reset_password/"),headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8",Authorization:"Bearer ".concat(o),"X-Refresh-Token":t,"X-Browser-Hash":a},data:{newPassword:e}};S()(c).then((function(e){if(e&&201===e.status){var a=e.headers["x-token"],t=e.headers["x-refresh-token"];v(a,i),n({username:e.data.username,role:e.data.role,needNewPassword:e.data.needNewPassword,refreshToken:t})}else r()})).catch((function(){r()}))}else r()}))}(o,n,r).then((function(e){w(!1),d(ca.SUCCESS),c&&c(Object(h.a)({},e,{browserHash:n})),O.replace(R)})).catch((function(){w(!1),d(ca.SERVER_ERROR)}))):d(ca.CLIENT_ERROR)}},i.a.createElement(k.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"newPassword1",label:"Noua parola",type:"password",id:"newPassword1",autoComplete:"new-password",onChange:function(){return d(ca.INITIAL)},disabled:b}),i.a.createElement(k.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"newPassword2",label:"Reintrodueti noua parola",type:"password",id:"newPassword2",autoComplete:"new-password",onChange:function(){return d(ca.INITIAL)},disabled:b}),m!==ca.INITIAL&&i.a.createElement(y.a,{className:e.card},i.a.createElement(D.a,null,i.a.createElement(B.a,{variant:"body1",component:"p",color:m===ca.SUCCESS?"primary":"error"},m===ca.SUCCESS?"Parola schimbata cu succes!":m===ca.SERVER_ERROR?"Nu s-a putut schimba parola!":"Noua parola nu este identica la reintroducere!"))),i.a.createElement(P.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,disabled:b},b?i.a.createElement(M.a,null):"Schimbare parola"))))},ha=function(){var e=I(),a=e.isLoading,t=e.username,n=e.needNewPassword;return a?i.a.createElement(T,null):i.a.createElement(p.d,null,i.a.createElement(p.a,{exact:!0,from:ra.HOME,to:ra.DASHBOARD}),i.a.createElement(p.b,{path:ra.LOGIN,render:function(){return t?i.a.createElement(p.a,{to:ra.DASHBOARD}):i.a.createElement(ma,null)}}),i.a.createElement(Ea,{path:ra.NEW_PASSWORD,render:function(){return n?i.a.createElement(pa,null):i.a.createElement(p.a,{to:ra.DASHBOARD})}}),i.a.createElement(Ea,{path:ra.DASHBOARD,render:function(){return i.a.createElement(sa,{tab:ra.DASHBOARD})}}),i.a.createElement(Ea,{path:ra.MACHINES,render:function(){return i.a.createElement(sa,{tab:ra.MACHINES})}}),i.a.createElement(Ea,{path:ra.INGREDIENTS,render:function(){return i.a.createElement(sa,{tab:ra.INGREDIENTS})}}),i.a.createElement(Ea,{path:ra.LOCATIONS,render:function(){return i.a.createElement(sa,{tab:ra.LOCATIONS})}}),i.a.createElement(Ea,{path:ra.USERS,render:function(){return i.a.createElement(sa,{tab:ra.USERS})}}),i.a.createElement(Ea,{path:ra.TEMPORARY,render:function(){return i.a.createElement(sa,{tab:ra.TEMPORARY})}}),i.a.createElement(Ea,{path:ra.CHANGE_PASSWORD,render:function(){return i.a.createElement(sa,{tab:ra.CHANGE_PASSWORD})}}),i.a.createElement(p.b,{path:ra.FORBIDDEN,component:function(){return i.a.createElement("h1",null,"Forbidden")}}),i.a.createElement(p.b,{component:function(){return i.a.createElement("h1",null,"404 Not found")}}))},Ea=function(e){var a=e.path,t=e.render,n=Object(m.a)(e,["path","render"]),r=I().username?t:function(){return i.a.createElement(p.a,{to:{pathname:ra.LOGIN,state:{from:a}}})};return i.a.createElement(p.b,Object.assign({},n,{render:r}))},fa=function(){return i.a.createElement(d.a,{basename:"/mvm-web"},i.a.createElement(N,null,i.a.createElement(ha,null)))},ga=t(235),ba=Object(ga.a)({palette:{primary:{main:"#2B6CB0"},secondary:{main:"#2C7A7B"},error:{main:"#C53030"},background:{default:"#F7FAFC"}}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));window.requestIdleCallback=window.requestIdleCallback||function(e){var a=Date.now();return setTimeout((function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-a))}})}),1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)},l.a.render(i.a.createElement(u.a,{theme:ba},i.a.createElement(s.a,null),i.a.createElement(fa,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[258,1,2]]]);