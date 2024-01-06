import{_ as w,r as u,w as g,a as F,o as d,j as f,f as p,e as b,g as k,h as t,i as D,t as _,k as N,F as B,p as C,l as V,q as I,v as q,x as j,y as z,d as $,z as L}from"./index-6d9278c7.js";import{A as U,a as G,b as S,c as H,d as J,e as A,v as K}from"./validator-86c9a7ec.js";const v=e=>(C("data-v-9038a975"),e=e(),V(),e),O=v(()=>t("div",{class:"overlay"},null,-1)),P=["onSubmit"],Q={class:"form__wrap"},R=v(()=>t("label",{class:"form__label",for:"title"},"Название заметки",-1)),W={class:"form__count-wrap"},X={class:"form__count"},Y=v(()=>t("p",{id:"maxTitle"},"максимальное количество знаков",-1)),Z={class:"form__wrap"},tt=v(()=>t("label",{class:"form__label",for:"content"},"Текст заметки",-1)),et={class:"form__count-wrap"},st={class:"form__count"},ot=v(()=>t("p",{id:"maxContent"},"максимальное количество знаков",-1)),at={class:"form__wrap"},nt={key:0,class:"form__server",role:"alert"},rt=!0,lt=100,ct=500,it={__name:"FormNotes",setup(e){const s=u(""),a=u(""),m=r=>r.value.length,l=u(0),i=u(0);g(s,()=>l.value=m(s)),g(a,()=>i.value=m(a));const o=u((()=>({title:{error:"",rules:["required"]},content:{error:"",rules:["required"]}}))()),n=F(),c=u(null),E=()=>{n.isFormMessage=!n.isFormMessage};g(s,()=>{o.value.title.error&&A(o.value)}),g(a,()=>{o.value.content.error&&A(o.value)});async function T(){if(!K({title:s.value,content:a.value},o.value))return;const r=await n.setNotes({title:s.value,content:a.value});(r==null?void 0:r.statusCode)>=400?Array.isArray(r.message)?c.value=r.message.join(", "):c.value=r.message:(n.set(r),n.isFormMessage=!1)}return(r,x)=>(d(),f(B,null,[O,p(J,{class:"form modal__notes"},{default:b(()=>[p(U,{class:"form__close",title:"закрыть",onClick:E}),p(G,{class:"form__title"},{default:b(()=>[k("Добавление заметки")]),_:1}),t("form",{onSubmit:D(T,["prevent"])},[t("div",Q,[R,p(S,{id:"title",modelValue:s.value,"onUpdate:modelValue":x[0]||(x[0]=y=>s.value=y),type:"text",name:"title",class:"form__input",placeholder:"Введите название","error-text":o.value.title.error},null,8,["modelValue","error-text"]),t("div",W,[t("span",X,_(l.value)+"/",1),t("span",{class:"form__count","aria-describedby":"maxTitle"},_(lt)),Y])]),t("div",Z,[tt,p(S,{id:"content",modelValue:a.value,"onUpdate:modelValue":x[1]||(x[1]=y=>a.value=y),type:"text",name:"content",class:"form__input form__textarea",placeholder:"Введите текст","is-text-area":rt,"error-text":o.value.content.error},null,8,["modelValue","error-text"]),t("div",et,[t("span",st,_(i.value)+"/",1),t("span",{class:"form__count","aria-describedby":"maxContent"},_(ct)),ot])]),t("div",at,[p(H,{class:"form__button",type:"submit"},{default:b(()=>[k("Добавить")]),_:1})])],40,P),c.value?(d(),f("p",nt,_(c.value),1)):N("",!0)]),_:1})],64))}},_t=w(it,[["__scopeId","data-v-9038a975"]]);const dt=e=>(C("data-v-e3f8fe5e"),e=e(),V(),e),ut=I+"#close",pt=["data-id"],mt={class:"note__title"},ft={class:"note__text"},vt=dt(()=>t("svg",{width:"16",height:"16",class:"note__svg"},[t("use",{"xlink:href":ut})],-1)),ht={__name:"AppNote",props:{title:{type:String,default:""},content:{type:String,default:""},id:{type:[Number,String],required:!0}},emits:["clickButtonDelete"],setup(e,{emit:s}){const a=s;return(m,l)=>(d(),f("article",{class:"note","data-id":`${e.id}`},[t("h2",mt,_(e.title),1),t("p",ft,_(e.content),1),t("button",{class:"note__button",onClick:l[0]||(l[0]=i=>a("clickButtonDelete",i.target))},[vt,k(" Удалить ")])],8,pt))}},xt=w(ht,[["__scopeId","data-v-e3f8fe5e"]]);const M=e=>(C("data-v-4aa2fca4"),e=e(),V(),e),gt=I+"#plus",yt={class:"notes"},bt=M(()=>t("svg",{width:"24",height:"24",class:"notes__plus"},[t("use",{"xlink:href":gt})],-1)),kt=M(()=>t("p",{id:"button-add"},"Добавить заметку",-1)),Nt=[bt,kt],wt={__name:"NotesView",setup(e){const s=F(),a=i=>{const h=i.parentElement.dataset.id,o=s.notes.findIndex(c=>c.id==h);s.notes.splice(o,1);const n=L();fetch("https://dist.nd.ru/api/notes/"+h,{method:"DELETE",headers:{"Content-Type":"application/json;charset=utf-8",Authorization:n?`Bearer ${n}`:""}}).catch(c=>console.log(c))},m=()=>{s.isFormMessage=!s.isFormMessage},l=q(()=>s.notes);return(i,h)=>(d(),f("main",yt,[t("button",{class:"notes__button","aria-describedby":"button-add",onClick:m},Nt),l.value.length?(d(!0),f(B,{key:0},j(l.value,(o,n)=>(d(),$(xt,{id:o.id,key:n,title:o.title,content:o.content,class:"notes__note",onClickButtonDelete:a},null,8,["id","title","content"]))),128)):N("",!0),z(s).isFormMessage?(d(),$(_t,{key:1})):N("",!0)]))}},$t=w(wt,[["__scopeId","data-v-4aa2fca4"]]);export{$t as default};