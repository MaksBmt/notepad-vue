import R from"./HomeView-d3b6d2a8.js";import{_ as B,r as n,u as N,b as T,w,c as q,o as g,d as U,e as u,f as r,g as k,h as s,i as j,n as A,j as S,t as M,k as $,s as z,p as D,l as H,F as G}from"./index-6d9278c7.js";import{A as J,a as K,b as h,c as L,d as O,v as Q,e as x}from"./validator-86c9a7ec.js";const p=c=>(D("data-v-727208ff"),c=c(),H(),c),W=["onSubmit"],X={class:"form__wrap"},Y=p(()=>s("label",{class:"form__label",for:"email"},"Email",-1)),Z={class:"form__wrap"},ee=p(()=>s("label",{class:"form__label",for:"password"},"Пароль",-1)),se={class:"form__wrap"},oe=p(()=>s("label",{class:"form__label",for:"confirm_password"},"Пароль ещё раз",-1)),ae={class:"form__wrap"},re={class:"form__box"},te=p(()=>s("span",{class:"form__text"},"У вас есть аккаунт?",-1)),le=p(()=>s("span",{class:"form__text form__text--green"},"Войдите",-1)),ne={key:0,class:"form__server",role:"alert"},C=!0,ie={__name:"FormReg",setup(c){const V=()=>({email:{error:"",rules:["required","email"]},password:{error:"",rules:["required"]},confirmPassword:{error:"",rules:["required"]}}),t=n(""),i=n(""),d=n(""),o=n(V()),m=N(),a=n(null),f=n(!0),v=n(!0),I=T(),b=e=>{e.nextElementSibling.type==="password"?e.nextElementSibling.type="text":e.nextElementSibling.type="password"},P=({target:e})=>{f.value=!f.value,b(e)},E=({target:e})=>{v.value=!v.value,b(e)};w(t,()=>{a.value&&(a.value=null),o.value.email.error&&x(o.value)}),w(i,()=>{a.value&&(a.value=null),o.value.password.error&&x(o.value)}),w(d,()=>{a.value&&(a.value=null),o.value.confirmPassword.error&&x(o.value)});async function F(){if(!Q({email:t.value,password:i.value,confirmPassword:d.value},o.value))return;const e=await m.reg(t.value,i.value,d.value);if((e==null?void 0:e.statusCode)>=400)Array.isArray(e.message)?a.value=e.message.join(", "):a.value=e.message;else{m.isAuthenticated=!0;const l=await m.getToken(t.value,i.value);z(l.accessToken),m.user.email=t.value,I.push("/notes")}}return(e,l)=>{const y=q("router-link");return g(),U(O,{class:"form"},{default:u(()=>[r(y,{to:"/",title:"закрыть"},{default:u(()=>[r(J,{class:"form__close"})]),_:1}),r(K,{class:"form__title"},{default:u(()=>[k("Регистрация")]),_:1}),s("form",{onSubmit:j(F,["prevent"])},[s("div",X,[Y,r(h,{id:"email",modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=_=>t.value=_),type:"email",name:"email",class:"form__input",placeholder:"E-mail",autocomplete:"email","error-text":o.value.email.error},null,8,["modelValue","error-text"])]),s("div",Z,[ee,r(h,{id:"password",modelValue:i.value,"onUpdate:modelValue":l[1]||(l[1]=_=>i.value=_),type:"password",name:"password",autocomplete:"new-password",class:A(["form__input",[f.value?"input--password-close":"input--password-open"]]),placeholder:"Пароль","error-text":o.value.password.error,"is-password":C,onAction:P},null,8,["modelValue","class","error-text"])]),s("div",se,[oe,r(h,{id:"confirm_password",modelValue:d.value,"onUpdate:modelValue":l[2]||(l[2]=_=>d.value=_),type:"password",name:"confirm_password",class:A(["form__input",[v.value?"input--password-close":"input--password-open"]]),placeholder:"Пароль еще раз","error-text":o.value.confirmPassword.error,"is-password":C,onAction:E},null,8,["modelValue","class","error-text"])]),s("div",ae,[r(L,{class:"form__button",type:"submit"},{default:u(()=>[k("Войти")]),_:1}),s("div",re,[te,r(y,{to:"/login",class:"form__link",title:"перейти на страницу авторизации"},{default:u(()=>[le]),_:1})])])],40,W),a.value?(g(),S("p",ne,M(a.value),1)):$("",!0)]),_:1})}}},ue=B(ie,[["__scopeId","data-v-727208ff"]]),ce=s("div",{class:"overlay"},null,-1),me={__name:"RegView",setup(c){return(V,t)=>(g(),S(G,null,[ce,r(R,null,{default:u(()=>[r(ue)]),_:1})],64))}};export{me as default};
