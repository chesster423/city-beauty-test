System.register(["./vendor-legacy-5a00c1f1.js","./app-legacy-f97a04bf.js","./__commonjsHelpers__-legacy-366a78b9.js"],(function(e,t){"use strict";var s,a,n,l,i,r,c,o,d,u,m,p,f,g,v,x,h,b,y;return{setters:[e=>{s=e.a,a=e.b,n=e.Q,l=e.r,i=e.o,r=e.c,c=e.e,o=e.d,d=e.w,u=e.D,m=e.J,p=e.K,f=e.E,g=e.z,v=e.B,x=e.H,h=e.I},e=>{b=e.t,y=e._},null],execute:function(){var t=document.createElement("style");t.textContent="[data-v-6fd97b5a] .text-white{color:#fff!important}\n",document.head.appendChild(t);const w={name:"SavedCars",components:{},props:{},setup:()=>({}),data:()=>({cars:[],rendered:!1,noImage:window.location.origin+"/images/no-img.jpg"}),computed:{...s({authenticated:"auth/authenticated",user:"auth/user",roles:"auth/roles"})},watch:{},created(){},mounted(){this.getSavedCars()},beforeUnmount(){},updated(){},methods:{...a({popToast:"toast/popToast"}),track:b,async getSavedCars(){this.rendered=!1,await n.get("../api/car/user").then((e=>{this.rendered=!0,this.cars=e.data}))},engineValue(e){const t=e.engine_induction??"";return e.engine_cylinders+"cyl "+e.engine_size+" "+t},removeCar(e,t){this.$swal.fire({title:"Are you sure?",text:"This car will be removed from the list",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, remove it!"}).then((s=>{if(s.isConfirmed){const s={car_id:e};n.post("/api/car/user/save",s).then((e=>{1===e.data&&this.cars.splice(t,1)}))}}))}}},_=e=>(x("data-v-6fd97b5a"),e=e(),h(),e),k={class:"lg:-p-0 container mx-auto p-5"},C=_((()=>c("div",{class:"mt-5"},[c("h1",{class:"mb-4 text-2xl font-bold"},"Saved Matches")],-1))),B={key:0,class:"mt-10 text-center"},j=_((()=>c("span",null,"No data available",-1))),S=_((()=>c("br",null,null,-1))),T={class:"grid gap-4 lg:grid-cols-4"},N=["onClick"],E=[_((()=>c("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"float-right h-6 w-6"},[c("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1)))],I=["src"],M={class:"p-5"},V={class:"text-lg font-bold"},z={class:"mb-2 mt-2 flex items-center"},D=_((()=>c("div",{class:"icon-engine"},null,-1))),H={class:"ml-4"},L=_((()=>c("p",{class:"text-xs leading-4 text-slate-400"},"Engine",-1))),A={class:"text-sm font-medium"},F={class:"mb-2 flex items-center"},J=_((()=>c("div",{class:"icon-drive-type"},null,-1))),K={class:"ml-4"},Q=_((()=>c("p",{class:"text-xs leading-4 text-slate-400"},"Drive Type",-1))),U={class:"text-sm font-medium"},Y={class:"mb-2 flex items-center"},$=_((()=>c("div",{class:"icon-body-type"},null,-1))),q={class:"ml-4"},G=_((()=>c("p",{class:"text-xs leading-4 text-slate-400"},"Body Type",-1))),O={class:"text-sm font-medium"},P={class:"mb-2 flex items-center"},R=_((()=>c("div",{class:"icon-fuel-efficiency"},null,-1))),W={class:"ml-4"},X=_((()=>c("p",{class:"text-xs leading-4 text-slate-400"},"Fuel Efficiency",-1))),Z={class:"text-sm font-medium"},ee={class:"mt-4 grid grid-cols-2"},te=["href"],se=[_((()=>c("button",{class:"funnel-button-rounded funnel-bg-blue rounded-full px-3 py-2 text-xs text-white opacity-90 hover:opacity-100",style:{width:"100px"}}," View Listing ",-1)))];e("default",y(w,[["render",function(e,t,s,a,n,x){const h=l("router-link");return i(),r("div",k,[C,c("div",null,[0==n.cars.length?(i(),r("p",B,[j,S,o(h,{to:{name:"step-1"},class:"mt-5 block text-blue-500 hover:text-blue-300"},{default:d((()=>[f(" Start getting your carsona now! ")])),_:1})])):u("",!0)]),c("div",T,[(i(!0),r(m,null,p(n.cars,((t,s)=>(i(),r("div",{key:s,class:"border-1 cursor-pointer rounded border"},[c("button",{class:"w-full p-2",onClick:e=>x.removeCar(t.car.id,s)},E,8,N),e.authenticated?(i(),g(h,{key:0,to:{name:"car-info",params:{id:t.car.id}}},{default:d((()=>[c("img",{src:t.car.images[0]?t.car.images[0].image_url:n.noImage,class:"mx-auto max-h-48"},null,8,I)])),_:2},1032,["to"])):u("",!0),c("div",M,[c("label",V,v(t.car.model),1),c("div",z,[D,c("div",H,[L,c("p",A,v(x.engineValue(t.car)??"Not specified"),1)])]),c("div",F,[J,c("div",K,[Q,c("p",U,v(t.car.drive_train_type??"Not specified"),1)])]),c("div",Y,[$,c("div",q,[G,c("p",O,v(t.car.engine??"Not specified"),1)])]),c("div",P,[R,c("div",W,[X,c("p",Z,v(t.car.fuel_consumption_combined??"Not specified"),1)])]),c("div",ee,[t.car.dealership_url?(i(),r("a",{key:0,href:t.car.dealership_url,target:"_blank"},se,8,te)):u("",!0)])])])))),128))])])}],["__scopeId","data-v-6fd97b5a"]]))}}}));