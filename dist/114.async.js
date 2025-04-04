"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[114],{78354:function(Ce,K,r){r.d(K,{Z:function(){return X}});var k=r(52003),o=r(75271),V={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"}}]},name:"check-circle",theme:"filled"},ee=V,te=r(65522),z=function(Y,J){return o.createElement(te.Z,(0,k.Z)({},Y,{ref:J,icon:ee}))},G=o.forwardRef(z),X=G},21427:function(Ce,K,r){r.d(K,{Z:function(){return X}});var k=r(52003),o=r(75271),V={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"exclamation-circle",theme:"filled"},ee=V,te=r(65522),z=function(Y,J){return o.createElement(te.Z,(0,k.Z)({},Y,{ref:J,icon:ee}))},G=o.forwardRef(z),X=G},15007:function(Ce,K,r){r.d(K,{Z:function(){return X}});var k=r(52003),o=r(75271),V={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"info-circle",theme:"filled"},ee=V,te=r(65522),z=function(Y,J){return o.createElement(te.Z,(0,k.Z)({},Y,{ref:J,icon:ee}))},G=o.forwardRef(z),X=G},51114:function(Ce,K,r){r.d(K,{ZP:function(){return Dt}});var k=r(81230),o=r(75271);const V=o.createContext({}),ee=o.createContext({message:{},notification:{},modal:{}});var te=null,z=r(36441),G=r(45388),X=r(41480),ue=r(78354),Y=r(48368),J=r(21427),Ke=r(15007),Ve=r(28019),Xe=r(82187),W=r.n(Xe),D=r(75611),Re=r(99960),oe=r(99426),Ye=r(30967),fe=r(52003),ye=r(65213),Je=r(62803),Fe=r(74826),Qe=r(14583),qe=r(71305),_e=o.forwardRef(function(e,t){var s=e.prefixCls,n=e.style,a=e.className,l=e.duration,f=l===void 0?4.5:l,m=e.showProgress,S=e.pauseOnHover,c=S===void 0?!0:S,g=e.eventKey,x=e.content,u=e.closable,C=e.closeIcon,P=C===void 0?"x":C,y=e.props,v=e.onClick,M=e.onNoticeClose,b=e.times,I=e.hovering,O=o.useState(!1),R=(0,D.Z)(O,2),p=R[0],F=R[1],d=o.useState(0),i=(0,D.Z)(d,2),h=i[0],E=i[1],j=o.useState(0),H=(0,D.Z)(j,2),A=H[0],re=H[1],Z=I||p,w=f>0&&m,B=function(){M(g)},le=function(N){(N.key==="Enter"||N.code==="Enter"||N.keyCode===Qe.Z.ENTER)&&B()};o.useEffect(function(){if(!Z&&f>0){var T=Date.now()-A,N=setTimeout(function(){B()},f*1e3-A);return function(){c&&clearTimeout(N),re(Date.now()-T)}}},[f,Z,b]),o.useEffect(function(){if(!Z&&w&&(c||A===0)){var T=performance.now(),N,$=function xe(){cancelAnimationFrame(N),N=requestAnimationFrame(function(Ee){var ne=Ee+A-T,q=Math.min(ne/(f*1e3),1);E(q*100),q<1&&xe()})};return $(),function(){c&&cancelAnimationFrame(N)}}},[f,A,Z,w,b]);var ve=o.useMemo(function(){return(0,Fe.Z)(u)==="object"&&u!==null?u:u?{closeIcon:P}:{}},[u,P]),he=(0,qe.Z)(ve,!0),ie=100-(!h||h<0?0:h>100?100:h),U="".concat(s,"-notice");return o.createElement("div",(0,fe.Z)({},y,{ref:t,className:W()(U,a,(0,ye.Z)({},"".concat(U,"-closable"),u)),style:n,onMouseEnter:function(N){var $;F(!0),y==null||($=y.onMouseEnter)===null||$===void 0||$.call(y,N)},onMouseLeave:function(N){var $;F(!1),y==null||($=y.onMouseLeave)===null||$===void 0||$.call(y,N)},onClick:v}),o.createElement("div",{className:"".concat(U,"-content")},x),u&&o.createElement("a",(0,fe.Z)({tabIndex:0,className:"".concat(U,"-close"),onKeyDown:le,"aria-label":"Close"},he,{onClick:function(N){N.preventDefault(),N.stopPropagation(),B()}}),ve.closeIcon),w&&o.createElement("progress",{className:"".concat(U,"-progress"),max:"100",value:ie},ie+"%"))}),be=_e,Me=o.createContext({}),et=function(t){var s=t.children,n=t.classNames;return o.createElement(Me.Provider,{value:{classNames:n}},s)},tt=et,$e=8,Ae=3,je=16,nt=function(t){var s={offset:$e,threshold:Ae,gap:je};if(t&&(0,Fe.Z)(t)==="object"){var n,a,l;s.offset=(n=t.offset)!==null&&n!==void 0?n:$e,s.threshold=(a=t.threshold)!==null&&a!==void 0?a:Ae,s.gap=(l=t.gap)!==null&&l!==void 0?l:je}return[!!t,s]},ot=nt,at=["className","style","classNames","styles"],st=function(t){var s=t.configList,n=t.placement,a=t.prefixCls,l=t.className,f=t.style,m=t.motion,S=t.onAllNoticeRemoved,c=t.onNoticeClose,g=t.stack,x=(0,o.useContext)(Me),u=x.classNames,C=(0,o.useRef)({}),P=(0,o.useState)(null),y=(0,D.Z)(P,2),v=y[0],M=y[1],b=(0,o.useState)([]),I=(0,D.Z)(b,2),O=I[0],R=I[1],p=s.map(function(Z){return{config:Z,key:String(Z.key)}}),F=ot(g),d=(0,D.Z)(F,2),i=d[0],h=d[1],E=h.offset,j=h.threshold,H=h.gap,A=i&&(O.length>0||p.length<=j),re=typeof m=="function"?m(n):m;return(0,o.useEffect)(function(){i&&O.length>1&&R(function(Z){return Z.filter(function(w){return p.some(function(B){var le=B.key;return w===le})})})},[O,p,i]),(0,o.useEffect)(function(){var Z;if(i&&C.current[(Z=p[p.length-1])===null||Z===void 0?void 0:Z.key]){var w;M(C.current[(w=p[p.length-1])===null||w===void 0?void 0:w.key])}},[p,i]),o.createElement(Je.V4,(0,fe.Z)({key:n,className:W()(a,"".concat(a,"-").concat(n),u==null?void 0:u.list,l,(0,ye.Z)((0,ye.Z)({},"".concat(a,"-stack"),!!i),"".concat(a,"-stack-expanded"),A)),style:f,keys:p,motionAppear:!0},re,{onAllRemoved:function(){S(n)}}),function(Z,w){var B=Z.config,le=Z.className,ve=Z.style,he=Z.index,ie=B,U=ie.key,T=ie.times,N=String(U),$=B,xe=$.className,Ee=$.style,ne=$.classNames,q=$.styles,Tt=(0,Re.Z)($,at),Ne=p.findIndex(function(ge){return ge.key===N}),me={};if(i){var ce=p.length-1-(Ne>-1?Ne:he-1),Ue=n==="top"||n==="bottom"?"-50%":"0";if(ce>0){var Se,Pe,Oe;me.height=A?(Se=C.current[N])===null||Se===void 0?void 0:Se.offsetHeight:v==null?void 0:v.offsetHeight;for(var Be=0,Ie=0;Ie<ce;Ie++){var Ze;Be+=((Ze=C.current[p[p.length-1-Ie].key])===null||Ze===void 0?void 0:Ze.offsetHeight)+H}var zt=(A?Be:ce*E)*(n.startsWith("top")?1:-1),Gt=!A&&v!==null&&v!==void 0&&v.offsetWidth&&(Pe=C.current[N])!==null&&Pe!==void 0&&Pe.offsetWidth?((v==null?void 0:v.offsetWidth)-E*2*(ce<3?ce:3))/((Oe=C.current[N])===null||Oe===void 0?void 0:Oe.offsetWidth):1;me.transform="translate3d(".concat(Ue,", ").concat(zt,"px, 0) scaleX(").concat(Gt,")")}else me.transform="translate3d(".concat(Ue,", 0, 0)")}return o.createElement("div",{ref:w,className:W()("".concat(a,"-notice-wrapper"),le,ne==null?void 0:ne.wrapper),style:(0,oe.Z)((0,oe.Z)((0,oe.Z)({},ve),me),q==null?void 0:q.wrapper),onMouseEnter:function(){return R(function(_){return _.includes(N)?_:[].concat((0,k.Z)(_),[N])})},onMouseLeave:function(){return R(function(_){return _.filter(function(Wt){return Wt!==N})})}},o.createElement(be,(0,fe.Z)({},Tt,{ref:function(_){Ne>-1?C.current[N]=_:delete C.current[N]},prefixCls:a,classNames:ne,styles:q,className:W()(xe,u==null?void 0:u.notice),style:Ee,times:T,key:U,eventKey:U,onNoticeClose:c,hovering:i&&O.length>0})))})},rt=st,lt=o.forwardRef(function(e,t){var s=e.prefixCls,n=s===void 0?"rc-notification":s,a=e.container,l=e.motion,f=e.maxCount,m=e.className,S=e.style,c=e.onAllRemoved,g=e.stack,x=e.renderNotifications,u=o.useState([]),C=(0,D.Z)(u,2),P=C[0],y=C[1],v=function(i){var h,E=P.find(function(j){return j.key===i});E==null||(h=E.onClose)===null||h===void 0||h.call(E),y(function(j){return j.filter(function(H){return H.key!==i})})};o.useImperativeHandle(t,function(){return{open:function(i){y(function(h){var E=(0,k.Z)(h),j=E.findIndex(function(re){return re.key===i.key}),H=(0,oe.Z)({},i);if(j>=0){var A;H.times=(((A=h[j])===null||A===void 0?void 0:A.times)||0)+1,E[j]=H}else H.times=0,E.push(H);return f>0&&E.length>f&&(E=E.slice(-f)),E})},close:function(i){v(i)},destroy:function(){y([])}}});var M=o.useState({}),b=(0,D.Z)(M,2),I=b[0],O=b[1];o.useEffect(function(){var d={};P.forEach(function(i){var h=i.placement,E=h===void 0?"topRight":h;E&&(d[E]=d[E]||[],d[E].push(i))}),Object.keys(I).forEach(function(i){d[i]=d[i]||[]}),O(d)},[P]);var R=function(i){O(function(h){var E=(0,oe.Z)({},h),j=E[i]||[];return j.length||delete E[i],E})},p=o.useRef(!1);if(o.useEffect(function(){Object.keys(I).length>0?p.current=!0:p.current&&(c==null||c(),p.current=!1)},[I]),!a)return null;var F=Object.keys(I);return(0,Ye.createPortal)(o.createElement(o.Fragment,null,F.map(function(d){var i=I[d],h=o.createElement(rt,{key:d,configList:i,placement:d,prefixCls:n,className:m==null?void 0:m(d),style:S==null?void 0:S(d),motion:l,onNoticeClose:v,onAllNoticeRemoved:R,stack:g});return x?x(h,{prefixCls:n,key:d}):h})),a)}),it=lt,ct=["getContainer","motion","prefixCls","maxCount","className","style","onAllRemoved","stack","renderNotifications"],ut=function(){return document.body},ke=0;function ft(){for(var e={},t=arguments.length,s=new Array(t),n=0;n<t;n++)s[n]=arguments[n];return s.forEach(function(a){a&&Object.keys(a).forEach(function(l){var f=a[l];f!==void 0&&(e[l]=f)})}),e}function dt(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.getContainer,s=t===void 0?ut:t,n=e.motion,a=e.prefixCls,l=e.maxCount,f=e.className,m=e.style,S=e.onAllRemoved,c=e.stack,g=e.renderNotifications,x=(0,Re.Z)(e,ct),u=o.useState(),C=(0,D.Z)(u,2),P=C[0],y=C[1],v=o.useRef(),M=o.createElement(it,{container:P,ref:v,prefixCls:a,motion:n,maxCount:l,className:f,style:m,onAllRemoved:S,stack:c,renderNotifications:g}),b=o.useState([]),I=(0,D.Z)(b,2),O=I[0],R=I[1],p=o.useMemo(function(){return{open:function(d){var i=ft(x,d);(i.key===null||i.key===void 0)&&(i.key="rc-notification-".concat(ke),ke+=1),R(function(h){return[].concat((0,k.Z)(h),[{type:"open",config:i}])})},close:function(d){R(function(i){return[].concat((0,k.Z)(i),[{type:"close",key:d}])})},destroy:function(){R(function(d){return[].concat((0,k.Z)(d),[{type:"destroy"}])})}}},[]);return o.useEffect(function(){y(s())}),o.useEffect(function(){if(v.current&&O.length){O.forEach(function(i){switch(i.type){case"open":v.current.open(i.config);break;case"close":v.current.close(i.key);break;case"destroy":v.current.destroy();break}});var F,d;R(function(i){return(F!==i||!d)&&(F=i,d=i.filter(function(h){return!O.includes(h)})),d})}},[O]),[p,M]}var Le=r(15178),He=r(85317),vt=r(47371),mt=r(76889),gt=r(8158),Ct=r(30509);const yt=e=>{const{componentCls:t,iconCls:s,boxShadow:n,colorText:a,colorSuccess:l,colorError:f,colorWarning:m,colorInfo:S,fontSizeLG:c,motionEaseInOutCirc:g,motionDurationSlow:x,marginXS:u,paddingXS:C,borderRadiusLG:P,zIndexPopup:y,contentPadding:v,contentBg:M}=e,b=`${t}-notice`,I=new He.E4("MessageMoveIn",{"0%":{padding:0,transform:"translateY(-100%)",opacity:0},"100%":{padding:C,transform:"translateY(0)",opacity:1}}),O=new He.E4("MessageMoveOut",{"0%":{maxHeight:e.height,padding:C,opacity:1},"100%":{maxHeight:0,padding:0,opacity:0}}),R={padding:C,textAlign:"center",[`${t}-custom-content`]:{display:"flex",alignItems:"center"},[`${t}-custom-content > ${s}`]:{marginInlineEnd:u,fontSize:c},[`${b}-content`]:{display:"inline-block",padding:v,background:M,borderRadius:P,boxShadow:n,pointerEvents:"all"},[`${t}-success > ${s}`]:{color:l},[`${t}-error > ${s}`]:{color:f},[`${t}-warning > ${s}`]:{color:m},[`${t}-info > ${s},
      ${t}-loading > ${s}`]:{color:S}};return[{[t]:Object.assign(Object.assign({},(0,mt.Wf)(e)),{color:a,position:"fixed",top:u,width:"100%",pointerEvents:"none",zIndex:y,[`${t}-move-up`]:{animationFillMode:"forwards"},[`
        ${t}-move-up-appear,
        ${t}-move-up-enter
      `]:{animationName:I,animationDuration:x,animationPlayState:"paused",animationTimingFunction:g},[`
        ${t}-move-up-appear${t}-move-up-appear-active,
        ${t}-move-up-enter${t}-move-up-enter-active
      `]:{animationPlayState:"running"},[`${t}-move-up-leave`]:{animationName:O,animationDuration:x,animationPlayState:"paused",animationTimingFunction:g},[`${t}-move-up-leave${t}-move-up-leave-active`]:{animationPlayState:"running"},"&-rtl":{direction:"rtl",span:{direction:"rtl"}}})},{[t]:{[`${b}-wrapper`]:Object.assign({},R)}},{[`${t}-notice-pure-panel`]:Object.assign(Object.assign({},R),{padding:0,textAlign:"start"})}]},pt=e=>({zIndexPopup:e.zIndexPopupBase+vt.u6+10,contentBg:e.colorBgElevated,contentPadding:`${(e.controlHeightLG-e.fontSize*e.lineHeight)/2}px ${e.paddingSM}px`});var we=(0,gt.I$)("Message",e=>{const t=(0,Ct.IX)(e,{height:150});return[yt(t)]},pt),ht=function(e,t){var s={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(s[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(s[n[a]]=e[n[a]]);return s};const xt={info:o.createElement(Ke.Z,null),success:o.createElement(ue.Z,null),error:o.createElement(Y.Z,null),warning:o.createElement(J.Z,null),loading:o.createElement(Ve.Z,null)},De=e=>{let{prefixCls:t,type:s,icon:n,children:a}=e;return o.createElement("div",{className:W()(`${t}-custom-content`,`${t}-${s}`)},n||xt[s],o.createElement("span",null,a))};var Et=e=>{const{prefixCls:t,className:s,type:n,icon:a,content:l}=e,f=ht(e,["prefixCls","className","type","icon","content"]),{getPrefixCls:m}=o.useContext(z.E_),S=t||m("message"),c=(0,Le.Z)(S),[g,x,u]=we(S,c);return g(o.createElement(be,Object.assign({},f,{prefixCls:S,className:W()(s,x,`${S}-notice-pure-panel`,u,c),eventKey:"pure",duration:null,content:o.createElement(De,{prefixCls:S,type:n,icon:a},l)})))},Nt=r(45659),St=r(17581);function Pt(e,t){return{motionName:t!=null?t:`${e}-move-up`}}function pe(e){let t;const s=new Promise(a=>{t=e(()=>{a(!0)})}),n=()=>{t==null||t()};return n.then=(a,l)=>s.then(a,l),n.promise=s,n}var Ot=function(e,t){var s={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(s[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(s[n[a]]=e[n[a]]);return s};const It=8,Zt=3,Rt=e=>{let{children:t,prefixCls:s}=e;const n=(0,Le.Z)(s),[a,l,f]=we(s,n);return a(o.createElement(tt,{classNames:{list:W()(l,f,n)}},t))},Ft=(e,t)=>{let{prefixCls:s,key:n}=t;return o.createElement(Rt,{prefixCls:s,key:n},e)},bt=o.forwardRef((e,t)=>{const{top:s,prefixCls:n,getContainer:a,maxCount:l,duration:f=Zt,rtl:m,transitionName:S,onAllRemoved:c}=e,{getPrefixCls:g,getPopupContainer:x,message:u,direction:C}=o.useContext(z.E_),P=n||g("message"),y=()=>({left:"50%",transform:"translateX(-50%)",top:s!=null?s:It}),v=()=>W()({[`${P}-rtl`]:m!=null?m:C==="rtl"}),M=()=>Pt(P,S),b=o.createElement("span",{className:`${P}-close-x`},o.createElement(Nt.Z,{className:`${P}-close-icon`})),[I,O]=dt({prefixCls:P,style:y,className:v,motion:M,closable:!1,closeIcon:b,duration:f,getContainer:()=>(a==null?void 0:a())||(x==null?void 0:x())||document.body,maxCount:l,onAllRemoved:c,renderNotifications:Ft});return o.useImperativeHandle(t,()=>Object.assign(Object.assign({},I),{prefixCls:P,message:u})),O});let Te=0;function ze(e){const t=o.useRef(null),s=(0,St.ln)("Message");return[o.useMemo(()=>{const a=c=>{var g;(g=t.current)===null||g===void 0||g.close(c)},l=c=>{if(!t.current){const F=()=>{};return F.then=()=>{},F}const{open:g,prefixCls:x,message:u}=t.current,C=`${x}-notice`,{content:P,icon:y,type:v,key:M,className:b,style:I,onClose:O}=c,R=Ot(c,["content","icon","type","key","className","style","onClose"]);let p=M;return p==null&&(Te+=1,p=`antd-message-${Te}`),pe(F=>(g(Object.assign(Object.assign({},R),{key:p,content:o.createElement(De,{prefixCls:x,type:v,icon:y},P),placement:"top",className:W()(v&&`${C}-${v}`,b,u==null?void 0:u.className),style:Object.assign(Object.assign({},u==null?void 0:u.style),I),onClose:()=>{O==null||O(),F()}})),()=>{a(p)}))},m={open:l,destroy:c=>{var g;c!==void 0?a(c):(g=t.current)===null||g===void 0||g.destroy()}};return["info","success","warning","error","loading"].forEach(c=>{const g=(x,u,C)=>{let P;x&&typeof x=="object"&&"content"in x?P=x:P={content:x};let y,v;typeof u=="function"?v=u:(y=u,v=C);const M=Object.assign(Object.assign({onClose:v,duration:y},P),{type:c});return l(M)};m[c]=g}),m},[]),o.createElement(bt,Object.assign({key:"message-holder"},e,{ref:t}))]}function Mt(e){return ze(e)}let L=null,Q=e=>e(),ae=[],se={};function Ge(){const{getContainer:e,duration:t,rtl:s,maxCount:n,top:a}=se,l=(e==null?void 0:e())||document.body;return{getContainer:()=>l,duration:t,rtl:s,maxCount:n,top:a}}const $t=o.forwardRef((e,t)=>{const{messageConfig:s,sync:n}=e,{getPrefixCls:a}=(0,o.useContext)(z.E_),l=se.prefixCls||a("message"),f=(0,o.useContext)(V),[m,S]=ze(Object.assign(Object.assign(Object.assign({},s),{prefixCls:l}),f.message));return o.useImperativeHandle(t,()=>{const c=Object.assign({},m);return Object.keys(c).forEach(g=>{c[g]=function(){return n(),m[g].apply(m,arguments)}}),{instance:c,sync:n}}),S}),At=o.forwardRef((e,t)=>{const[s,n]=o.useState(Ge),a=()=>{n(Ge)};o.useEffect(a,[]);const l=(0,G.w6)(),f=l.getRootPrefixCls(),m=l.getIconPrefixCls(),S=l.getTheme(),c=o.createElement($t,{ref:t,sync:a,messageConfig:s});return o.createElement(G.ZP,{prefixCls:f,iconPrefixCls:m,theme:S},l.holderRender?l.holderRender(c):c)});function de(){if(!L){const e=document.createDocumentFragment(),t={fragment:e};L=t,Q(()=>{(0,X.x)()(o.createElement(At,{ref:n=>{const{instance:a,sync:l}=n||{};Promise.resolve().then(()=>{!t.instance&&a&&(t.instance=a,t.sync=l,de())})}}),e)});return}L.instance&&(ae.forEach(e=>{const{type:t,skipped:s}=e;if(!s)switch(t){case"open":{Q(()=>{const n=L.instance.open(Object.assign(Object.assign({},se),e.config));n==null||n.then(e.resolve),e.setCloseFn(n)});break}case"destroy":Q(()=>{L==null||L.instance.destroy(e.key)});break;default:Q(()=>{var n;const a=(n=L.instance)[t].apply(n,(0,k.Z)(e.args));a==null||a.then(e.resolve),e.setCloseFn(a)})}}),ae=[])}function jt(e){se=Object.assign(Object.assign({},se),e),Q(()=>{var t;(t=L==null?void 0:L.sync)===null||t===void 0||t.call(L)})}function kt(e){const t=pe(s=>{let n;const a={type:"open",config:e,resolve:s,setCloseFn:l=>{n=l}};return ae.push(a),()=>{n?Q(()=>{n()}):a.skipped=!0}});return de(),t}function Lt(e,t){const s=(0,G.w6)(),n=pe(a=>{let l;const f={type:e,args:t,resolve:a,setCloseFn:m=>{l=m}};return ae.push(f),()=>{l?Q(()=>{l()}):f.skipped=!0}});return de(),n}const Ht=e=>{ae.push({type:"destroy",key:e}),de()},wt=["success","info","warning","error","loading"],We={open:kt,destroy:Ht,config:jt,useMessage:Mt,_InternalPanelDoNotUseOrYouWillBeFired:Et};wt.forEach(e=>{We[e]=function(){for(var t=arguments.length,s=new Array(t),n=0;n<t;n++)s[n]=arguments[n];return Lt(e,s)}});const Kt=()=>{};let Vt=null,Xt=null;var Dt=We}}]);
