System.register(["./vendor-legacy-5a00c1f1.js"],(function(e,a){"use strict";var l,t,u,i,r,n,s,o,v,c,d,p,f,g,h,b,m,y,S,O;return{setters:[e=>{l=e.o,t=e.c,u=e.e,i=e.D,r=e.aJ,n=e.G,s=e.n,o=e.J,v=e.K,c=e.Z,d=e.aK,p=e.E,f=e.B,g=e.aL,h=e.aM,b=e.aN,m=e.aO,y=e.aP,S=e.aQ,O=e.aR}],execute:function(){function a(e){return-1!==[null,void 0].indexOf(e)}function L(e,l,t){const{object:u,valueProp:i,mode:r}=g(e),n=h().proxy,s=t.iv,o=e=>u.value||a(e)?e:Array.isArray(e)?e.map((e=>e[i.value])):e[i.value],v=e=>a(e)?"single"===r.value?{}:[]:e;return{update:(e,a=!0)=>{s.value=v(e);const t=o(e);l.emit("change",t,n),a&&(l.emit("input",t),l.emit("update:modelValue",t))}}}function _(e,a){const{value:l,modelValue:t,mode:u,valueProp:i}=g(e),r=b("single"!==u.value?[]:{}),n=t&&void 0!==t.value?t:l,s=m((()=>"single"===u.value?r.value[i.value]:r.value.map((e=>e[i.value])))),o=m((()=>"single"!==u.value?r.value.map((e=>e[i.value])).join(","):r.value[i.value]));return{iv:r,internalValue:r,ev:n,externalValue:n,textValue:o,plainValue:s}}function k(e,a,l){const{regex:t}=g(e),u=h().proxy,i=l.isOpen,r=l.open,n=b(null),s=b(null);return y(n,(e=>{!i.value&&e&&r(),a.emit("search-change",e,u)})),{search:n,input:s,clearSearch:()=>{n.value=""},handleSearchInput:e=>{n.value=e.target.value},handleKeypress:e=>{if(t&&t.value){let a=t.value;"string"==typeof a&&(a=new RegExp(a)),e.key.match(a)||e.preventDefault()}},handlePaste:e=>{if(t&&t.value){let a=(e.clipboardData||window.clipboardData).getData("Text"),l=t.value;"string"==typeof l&&(l=new RegExp(l)),a.split("").every((e=>!!e.match(l)))||e.preventDefault()}a.emit("paste",e,u)}}}function x(e,a,l){const{groupSelect:t,mode:u,groups:i,disabledProp:r}=g(e),n=b(null),s=e=>{void 0===e||null!==e&&e[r.value]||i.value&&e&&e.group&&("single"===u.value||!t.value)||(n.value=e)};return{pointer:n,setPointer:s,clearPointer:()=>{s(null)}}}function w(e,a=!0){return a?String(e).toLowerCase().trim():String(e).toLowerCase().normalize("NFD").trim().replace(new RegExp(/æ/g),"ae").replace(new RegExp(/œ/g),"oe").replace(new RegExp(/ø/g),"o").replace(/\p{Diacritic}/gu,"")}function q(e,l,t){const{options:u,mode:i,trackBy:r,limit:n,hideSelected:s,createTag:o,createOption:v,label:c,appendNewTag:d,appendNewOption:p,multipleLabel:f,object:S,loading:O,delay:L,resolveOnLoad:_,minChars:k,filterResults:x,clearOnSearch:q,clearOnSelect:T,valueProp:P,allowAbsent:E,groupLabel:C,canDeselect:I,max:B,strict:D,closeOnSelect:R,closeOnDeselect:A,groups:j,reverse:M,infinite:V,groupOptions:$,groupHideEmpty:K,groupSelect:N,onCreate:H,disabledProp:F,searchStart:z,searchFilter:G}=g(e),U=h().proxy,W=t.iv,J=t.ev,Q=t.search,Z=t.clearSearch,X=t.update,Y=t.pointer,ee=t.clearPointer,ae=t.focus,le=t.deactivate,te=t.close,ue=t.localize,ie=b([]),re=b([]),ne=b(!1),se=b(null),oe=b(V.value&&-1===n.value?10:n.value),ve=m((()=>o.value||v.value||!1)),ce=m((()=>void 0!==d.value?d.value:void 0===p.value||p.value)),de=m((()=>{if(j.value){let e=ge.value||[],a=[];return e.forEach((e=>{He(e[$.value]).forEach((l=>{a.push(Object.assign({},l,e[F.value]?{[F.value]:!0}:{}))}))})),a}{let e=He(re.value||[]);return ie.value.length&&(e=e.concat(ie.value)),e}})),pe=m((()=>{let e=de.value;return M.value&&(e=e.reverse()),Le.value.length&&(e=Le.value.concat(e)),Ne(e)})),fe=m((()=>{let e=pe.value;return oe.value>0&&(e=e.slice(0,oe.value)),e})),ge=m((()=>{if(!j.value)return[];let e=[],a=re.value||[];return ie.value.length&&e.push({[C.value]:" ",[$.value]:[...ie.value],__CREATE__:!0}),e.concat(a)})),he=m((()=>{let e=[...ge.value].map((e=>({...e})));return Le.value.length&&(e[0]&&e[0].__CREATE__?e[0][$.value]=[...Le.value,...e[0][$.value]]:e=[{[C.value]:" ",[$.value]:[...Le.value],__CREATE__:!0}].concat(e)),e})),be=m((()=>{if(!j.value)return[];let e=he.value;return Ke((e||[]).map(((e,a)=>{const l=He(e[$.value]);return{...e,index:a,group:!0,[$.value]:Ne(l,!1).map((a=>Object.assign({},a,e[F.value]?{[F.value]:!0}:{}))),__VISIBLE__:Ne(l).map((a=>Object.assign({},a,e[F.value]?{[F.value]:!0}:{})))}})))})),me=m((()=>{switch(i.value){case"single":return!a(W.value[P.value]);case"multiple":case"tags":return!a(W.value)&&W.value.length>0}})),ye=m((()=>void 0!==f&&void 0!==f.value?f.value(W.value,U):W.value&&W.value.length>1?`${W.value.length} options selected`:"1 option selected")),Se=m((()=>!de.value.length&&!ne.value&&!Le.value.length)),Oe=m((()=>de.value.length>0&&0==fe.value.length&&(Q.value&&j.value||!j.value))),Le=m((()=>!1!==ve.value&&Q.value?-1!==Ve(Q.value)?[]:[{[P.value]:Q.value,[_e.value]:Q.value,[c.value]:Q.value,__CREATE__:!0}]:[])),_e=m((()=>r.value||c.value)),ke=m((()=>{switch(i.value){case"single":return null;case"multiple":case"tags":return[]}})),xe=m((()=>O.value||ne.value)),we=e=>{switch("object"!=typeof e&&(e=Me(e)),i.value){case"single":X(e);break;case"multiple":case"tags":X(W.value.concat(e))}l.emit("select",Te(e),e,U)},qe=e=>{switch("object"!=typeof e&&(e=Me(e)),i.value){case"single":Ee();break;case"tags":case"multiple":X(Array.isArray(e)?W.value.filter((a=>-1===e.map((e=>e[P.value])).indexOf(a[P.value]))):W.value.filter((a=>a[P.value]!=e[P.value])))}l.emit("deselect",Te(e),e,U)},Te=e=>S.value?e:e[P.value],Pe=e=>{qe(e)},Ee=()=>{l.emit("clear",U),X(ke.value)},Ce=e=>{if(void 0!==e.group)return"single"!==i.value&&je(e[$.value])&&e[$.value].length;switch(i.value){case"single":return!a(W.value)&&W.value[P.value]==e[P.value];case"tags":case"multiple":return!a(W.value)&&-1!==W.value.map((e=>e[P.value])).indexOf(e[P.value])}},Ie=e=>!0===e[F.value],Be=()=>!(void 0===B||-1===B.value||!me.value&&B.value>0)&&W.value.length>=B.value,De=e=>{switch(e.__CREATE__&&delete(e={...e}).__CREATE__,i.value){case"single":if(e&&Ce(e))return I.value&&qe(e),void(A.value&&(ee(),te()));e&&Re(e),T.value&&Z(),R.value&&(ee(),te()),e&&we(e);break;case"multiple":if(e&&Ce(e))return qe(e),void(A.value&&(ee(),te()));if(Be())return void l.emit("max",U);e&&(Re(e),we(e)),T.value&&Z(),s.value&&ee(),R.value&&te();break;case"tags":if(e&&Ce(e))return qe(e),void(A.value&&(ee(),te()));if(Be())return void l.emit("max",U);e&&Re(e),T.value&&Z(),e&&we(e),s.value&&ee(),R.value&&te()}R.value||ae()},Re=e=>{void 0===Me(e[P.value])&&ve.value&&(l.emit("tag",e[P.value],U),l.emit("option",e[P.value],U),l.emit("create",e[P.value],U),ce.value&&$e(e),Z())},Ae=e=>void 0===e.find((e=>!Ce(e)&&!e[F.value])),je=e=>void 0===e.find((e=>!Ce(e))),Me=e=>de.value[de.value.map((e=>String(e[P.value]))).indexOf(String(e))],Ve=(e,a=!0)=>de.value.map((e=>parseInt(e[_e.value])==e[_e.value]?parseInt(e[_e.value]):e[_e.value])).indexOf(parseInt(e)==e?parseInt(e):e),$e=e=>{ie.value.push(e)},Ke=e=>K.value?e.filter((e=>Q.value?e.__VISIBLE__.length:e[$.value].length)):e.filter((e=>!Q.value||e.__VISIBLE__.length)),Ne=(e,a=!0)=>{let l=e;if(Q.value&&x.value){let e=G.value;e||(e=(e,a)=>{let l=w(ue(e[_e.value]),D.value);return z.value?l.startsWith(w(Q.value,D.value)):-1!==l.indexOf(w(Q.value,D.value))}),l=l.filter(e)}return s.value&&a&&(l=l.filter((e=>!(e=>-1!==["tags","multiple"].indexOf(i.value)&&s.value&&Ce(e))(e)))),l},He=e=>{let a=e;var l;return l=a,"[object Object]"===Object.prototype.toString.call(l)&&(a=Object.keys(a).map((e=>{let l=a[e];return{[P.value]:e,[_e.value]:l,[c.value]:l}}))),a=a.map((e=>"object"==typeof e?e:{[P.value]:e,[_e.value]:e,[c.value]:e})),a},Fe=()=>{a(J.value)||(W.value=Ue(J.value))},ze=e=>(ne.value=!0,new Promise(((a,l)=>{u.value(Q.value,U).then((a=>{re.value=a||[],"function"==typeof e&&e(a),ne.value=!1})).catch((e=>{console.error(e),re.value=[],ne.value=!1})).finally((()=>{a()}))}))),Ge=()=>{if(me.value)if("single"===i.value){let e=Me(W.value[P.value]);if(void 0!==e){let a=e[c.value];W.value[c.value]=a,S.value&&(J.value[c.value]=a)}}else W.value.forEach(((e,a)=>{let l=Me(W.value[a][P.value]);if(void 0!==l){let e=l[c.value];W.value[a][c.value]=e,S.value&&(J.value[a][c.value]=e)}}))},Ue=e=>a(e)?"single"===i.value?{}:[]:S.value?e:"single"===i.value?Me(e)||(E.value?{[c.value]:e,[P.value]:e,[_e.value]:e}:{}):e.filter((e=>!!Me(e)||E.value)).map((e=>Me(e)||{[c.value]:e,[P.value]:e,[_e.value]:e})),We=()=>{se.value=y(Q,(e=>{e.length<k.value||!e&&0!==k.value||(ne.value=!0,q.value&&(re.value=[]),setTimeout((()=>{e==Q.value&&u.value(Q.value,U).then((a=>{e!=Q.value&&Q.value||(re.value=a,Y.value=fe.value.filter((e=>!0!==e[F.value]))[0]||null,ne.value=!1)})).catch((e=>{console.error(e)}))}),L.value))}),{flush:"sync"})};if("single"!==i.value&&!a(J.value)&&!Array.isArray(J.value))throw new Error(`v-model must be an array when using "${i.value}" mode`);return u&&"function"==typeof u.value?_.value?ze(Fe):1==S.value&&Fe():(re.value=u.value,Fe()),L.value>-1&&We(),y(L,((e,a)=>{se.value&&se.value(),e>=0&&We()})),y(J,(e=>{if(a(e))X(Ue(e),!1);else switch(i.value){case"single":(S.value?e[P.value]!=W.value[P.value]:e!=W.value[P.value])&&X(Ue(e),!1);break;case"multiple":case"tags":(function(e,a){const l=a.slice().sort();return e.length===a.length&&e.slice().sort().every((function(e,a){return e===l[a]}))})(S.value?e.map((e=>e[P.value])):e,W.value.map((e=>e[P.value])))||X(Ue(e),!1)}}),{deep:!0}),y(u,((a,l)=>{"function"==typeof e.options?_.value&&(!l||a&&a.toString()!==l.toString())&&ze():(re.value=e.options,Object.keys(W.value).length||Fe(),Ge())})),y(c,Ge),{pfo:pe,fo:fe,filteredOptions:fe,hasSelected:me,multipleLabelText:ye,eo:de,extendedOptions:de,eg:ge,extendedGroups:ge,fg:be,filteredGroups:be,noOptions:Se,noResults:Oe,resolving:ne,busy:xe,offset:oe,select:we,deselect:qe,remove:Pe,selectAll:()=>{"single"!==i.value&&we(fe.value.filter((e=>!e.disabled&&!Ce(e))))},clear:Ee,isSelected:Ce,isDisabled:Ie,isMax:Be,getOption:Me,handleOptionClick:e=>{if(!Ie(e))return H&&H.value&&!Ce(e)&&e.__CREATE__&&(delete(e={...e}).__CREATE__,(e=H.value(e,U))instanceof Promise)?(ne.value=!0,void e.then((e=>{ne.value=!1,De(e)}))):void De(e)},handleGroupClick:e=>{if(!Ie(e)&&"single"!==i.value&&N.value){switch(i.value){case"multiple":case"tags":Ae(e[$.value])?qe(e[$.value]):we(e[$.value].filter((e=>-1===W.value.map((e=>e[P.value])).indexOf(e[P.value]))).filter((e=>!e[F.value])).filter(((e,a)=>W.value.length+1+a<=B.value||-1===B.value)))}R.value&&le()}},handleTagRemove:(e,a)=>{0===a.button?Pe(e):a.preventDefault()},refreshOptions:e=>{ze(e)},resolveOptions:ze,refreshLabels:Ge}}function T(e,a,l){const{valueProp:t,showOptions:u,searchable:i,groupLabel:r,groups:n,mode:s,groupSelect:o,disabledProp:v,groupOptions:c}=g(e),d=l.fo,p=l.fg,f=l.handleOptionClick,h=l.handleGroupClick,b=l.search,O=l.pointer,L=l.setPointer,_=l.clearPointer,k=l.multiselect,x=l.isOpen,w=m((()=>d.value.filter((e=>!e[v.value])))),q=m((()=>p.value.filter((e=>!e[v.value])))),T=m((()=>"single"!==s.value&&o.value)),P=m((()=>O.value&&O.value.group)),E=m((()=>$(O.value))),C=m((()=>{const e=P.value?O.value:$(O.value),a=q.value.map((e=>e[r.value])).indexOf(e[r.value]);let l=q.value[a-1];return void 0===l&&(l=B.value),l})),I=m((()=>{let e=q.value.map((e=>e.label)).indexOf(P.value?O.value[r.value]:$(O.value)[r.value])+1;return q.value.length<=e&&(e=0),q.value[e]})),B=m((()=>[...q.value].slice(-1)[0])),D=m((()=>O.value.__VISIBLE__.filter((e=>!e[v.value]))[0])),R=m((()=>{const e=E.value.__VISIBLE__.filter((e=>!e[v.value]));return e[e.map((e=>e[t.value])).indexOf(O.value[t.value])-1]})),A=m((()=>{const e=$(O.value).__VISIBLE__.filter((e=>!e[v.value]));return e[e.map((e=>e[t.value])).indexOf(O.value[t.value])+1]})),j=m((()=>[...C.value.__VISIBLE__.filter((e=>!e[v.value]))].slice(-1)[0])),M=m((()=>[...B.value.__VISIBLE__.filter((e=>!e[v.value]))].slice(-1)[0])),V=()=>{L(w.value[0]||null)},$=e=>q.value.find((a=>-1!==a.__VISIBLE__.map((e=>e[t.value])).indexOf(e[t.value]))),K=()=>{let e=k.value.querySelector("[data-pointed]");if(!e)return;let a=e.parentElement.parentElement;n.value&&(a=P.value?e.parentElement.parentElement.parentElement:e.parentElement.parentElement.parentElement.parentElement),e.offsetTop+e.offsetHeight>a.clientHeight+a.scrollTop&&(a.scrollTop=e.offsetTop+e.offsetHeight-a.clientHeight),e.offsetTop<a.scrollTop&&(a.scrollTop=e.offsetTop)};return y(b,(e=>{i.value&&(e.length&&u.value?V():_())})),y(x,(e=>{if(e){let e=k.value.querySelectorAll("[data-selected]")[0];if(!e)return;let a=e.parentElement.parentElement;S((()=>{a.scrollTop>0||(a.scrollTop=e.offsetTop)}))}})),{pointer:O,canPointGroups:T,isPointed:e=>!(!O.value||!(!e.group&&O.value[t.value]===e[t.value]||void 0!==e.group&&O.value[r.value]===e[r.value]))||void 0,setPointerFirst:V,selectPointer:()=>{O.value&&!0!==O.value[v.value]&&(P.value?h(O.value):f(O.value))},forwardPointer:()=>{if(null===O.value)L((n.value&&T.value?q.value[0].__CREATE__?w.value[0]:q.value[0]:w.value[0])||null);else if(n.value&&T.value){let e=P.value?D.value:A.value;void 0===e&&(e=I.value,e.__CREATE__&&(e=e[c.value][0])),L(e||null)}else{let e=w.value.map((e=>e[t.value])).indexOf(O.value[t.value])+1;w.value.length<=e&&(e=0),L(w.value[e]||null)}S((()=>{K()}))},backwardPointer:()=>{if(null===O.value){let e=w.value[w.value.length-1];n.value&&T.value&&(e=M.value,void 0===e&&(e=B.value)),L(e||null)}else if(n.value&&T.value){let e=P.value?j.value:R.value;void 0===e&&(e=P.value?C.value:E.value,e.__CREATE__&&(e=j.value,void 0===e&&(e=C.value))),L(e||null)}else{let e=w.value.map((e=>e[t.value])).indexOf(O.value[t.value])-1;e<0&&(e=w.value.length-1),L(w.value[e]||null)}S((()=>{K()}))}}}function P(e,a,l){const{disabled:t}=g(e),u=h().proxy,i=b(!1);return{isOpen:i,open:()=>{i.value||t.value||(i.value=!0,a.emit("open",u))},close:()=>{i.value&&(i.value=!1,a.emit("close",u))}}}function E(e,a,l){const{searchable:t,disabled:u,clearOnBlur:i}=g(e),r=l.input,n=l.open,s=l.close,o=l.clearSearch,v=l.isOpen,c=b(null),d=b(null),p=b(null),f=b(!1),h=b(!1),y=m((()=>t.value||u.value?-1:0)),S=()=>{t.value&&r.value.blur(),d.value.blur()},O=(e=!0)=>{u.value||(f.value=!0,e&&n())},L=()=>{f.value=!1,setTimeout((()=>{f.value||(s(),i.value&&o())}),1)};return{multiselect:c,wrapper:d,tags:p,tabindex:y,isActive:f,mouseClicked:h,blur:S,focus:()=>{t.value&&!u.value&&r.value.focus()},activate:O,deactivate:L,handleFocusIn:e=>{e.target.closest("[data-tags]")&&"INPUT"!==e.target.nodeName||e.target.closest("[data-clear]")||O(h.value)},handleFocusOut:()=>{L()},handleCaretClick:()=>{L(),S()},handleMousedown:e=>{h.value=!0,v.value&&(e.target.isEqualNode(d.value)||e.target.isEqualNode(p.value))?setTimeout((()=>{L()}),0):document.activeElement.isEqualNode(d.value)&&!v.value&&O(),setTimeout((()=>{h.value=!1}),0)}}}function C(e,a,l){const{mode:t,addTagOn:u,openDirection:i,searchable:r,showOptions:n,valueProp:s,groups:o,addOptionOn:v,createTag:c,createOption:d,reverse:p}=g(e),f=h().proxy,b=l.iv,y=l.update,S=l.search,O=l.setPointer,L=l.selectPointer,_=l.backwardPointer,k=l.forwardPointer,x=l.multiselect,w=l.wrapper,q=l.tags,T=l.isOpen,P=l.open,E=l.blur,C=l.fo,I=m((()=>c.value||d.value||!1)),B=m((()=>void 0!==u.value?u.value:void 0!==v.value?v.value:["enter"])),D=()=>{"tags"===t.value&&!n.value&&I.value&&r.value&&!o.value&&O(C.value[C.value.map((e=>e[s.value])).indexOf(S.value)])};return{handleKeydown:e=>{let l,u;switch(a.emit("keydown",e,f),-1!==["ArrowLeft","ArrowRight","Enter"].indexOf(e.key)&&"tags"===t.value&&(l=[...x.value.querySelectorAll("[data-tags] > *")].filter((e=>e!==q.value)),u=l.findIndex((e=>e===document.activeElement))),e.key){case"Backspace":if("single"===t.value)return;if(r.value&&-1===[null,""].indexOf(S.value))return;if(0===b.value.length)return;y((e=>{let a=e.length-1;for(;a>=0&&(!1===e[a].remove||e[a].disabled);)a--;return a<0||e.splice(a,1),e})([...b.value]));break;case"Enter":if(e.preventDefault(),229===e.keyCode)return;if(-1!==u&&void 0!==u)return y([...b.value].filter(((e,a)=>a!==u))),void(u===l.length-1&&(l.length-1?l[l.length-2].focus():r.value?q.value.querySelector("input").focus():w.value.focus()));if(-1===B.value.indexOf("enter")&&I.value)return;D(),L();break;case" ":if(!I.value&&!r.value)return e.preventDefault(),D(),void L();if(!I.value)return!1;if(-1===B.value.indexOf("space")&&I.value)return;e.preventDefault(),D(),L();break;case"Tab":case";":case",":if(-1===B.value.indexOf(e.key.toLowerCase())||!I.value)return;D(),L(),e.preventDefault();break;case"Escape":E();break;case"ArrowUp":if(e.preventDefault(),!n.value)return;T.value||P(),_();break;case"ArrowDown":if(e.preventDefault(),!n.value)return;T.value||P(),k();break;case"ArrowLeft":if(r.value&&q.value&&q.value.querySelector("input").selectionStart||e.shiftKey||"tags"!==t.value||!b.value||!b.value.length)return;e.preventDefault(),-1===u?l[l.length-1].focus():u>0&&l[u-1].focus();break;case"ArrowRight":if(-1===u||e.shiftKey||"tags"!==t.value||!b.value||!b.value.length)return;e.preventDefault(),l.length>u+1?l[u+1].focus():r.value?q.value.querySelector("input").focus():r.value||w.value.focus()}},handleKeyup:e=>{a.emit("keyup",e,f)},preparePointer:D}}function I(e,a,l){const{classes:t,disabled:u,openDirection:i,showOptions:r}=g(e),n=l.isOpen,s=l.isPointed,o=l.isSelected,v=l.isDisabled,c=l.isActive,d=l.canPointGroups,p=l.resolving,f=l.fo,h=m((()=>({container:"multiselect",containerDisabled:"is-disabled",containerOpen:"is-open",containerOpenTop:"is-open-top",containerActive:"is-active",wrapper:"multiselect-wrapper",singleLabel:"multiselect-single-label",singleLabelText:"multiselect-single-label-text",multipleLabel:"multiselect-multiple-label",search:"multiselect-search",tags:"multiselect-tags",tag:"multiselect-tag",tagDisabled:"is-disabled",tagRemove:"multiselect-tag-remove",tagRemoveIcon:"multiselect-tag-remove-icon",tagsSearchWrapper:"multiselect-tags-search-wrapper",tagsSearch:"multiselect-tags-search",tagsSearchCopy:"multiselect-tags-search-copy",placeholder:"multiselect-placeholder",caret:"multiselect-caret",caretOpen:"is-open",clear:"multiselect-clear",clearIcon:"multiselect-clear-icon",spinner:"multiselect-spinner",inifinite:"multiselect-inifite",inifiniteSpinner:"multiselect-inifite-spinner",dropdown:"multiselect-dropdown",dropdownTop:"is-top",dropdownHidden:"is-hidden",options:"multiselect-options",optionsTop:"is-top",group:"multiselect-group",groupLabel:"multiselect-group-label",groupLabelPointable:"is-pointable",groupLabelPointed:"is-pointed",groupLabelSelected:"is-selected",groupLabelDisabled:"is-disabled",groupLabelSelectedPointed:"is-selected is-pointed",groupLabelSelectedDisabled:"is-selected is-disabled",groupOptions:"multiselect-group-options",option:"multiselect-option",optionPointed:"is-pointed",optionSelected:"is-selected",optionDisabled:"is-disabled",optionSelectedPointed:"is-selected is-pointed",optionSelectedDisabled:"is-selected is-disabled",noOptions:"multiselect-no-options",noResults:"multiselect-no-results",fakeInput:"multiselect-fake-input",assist:"multiselect-assistive-text",spacer:"multiselect-spacer",...t.value}))),b=m((()=>!!(n.value&&r.value&&(!p.value||p.value&&f.value.length))));return{classList:m((()=>{const e=h.value;return{container:[e.container].concat(u.value?e.containerDisabled:[]).concat(b.value&&"top"===i.value?e.containerOpenTop:[]).concat(b.value&&"top"!==i.value?e.containerOpen:[]).concat(c.value?e.containerActive:[]),wrapper:e.wrapper,spacer:e.spacer,singleLabel:e.singleLabel,singleLabelText:e.singleLabelText,multipleLabel:e.multipleLabel,search:e.search,tags:e.tags,tag:[e.tag].concat(u.value?e.tagDisabled:[]),tagDisabled:e.tagDisabled,tagRemove:e.tagRemove,tagRemoveIcon:e.tagRemoveIcon,tagsSearchWrapper:e.tagsSearchWrapper,tagsSearch:e.tagsSearch,tagsSearchCopy:e.tagsSearchCopy,placeholder:e.placeholder,caret:[e.caret].concat(n.value?e.caretOpen:[]),clear:e.clear,clearIcon:e.clearIcon,spinner:e.spinner,inifinite:e.inifinite,inifiniteSpinner:e.inifiniteSpinner,dropdown:[e.dropdown].concat("top"===i.value?e.dropdownTop:[]).concat(n.value&&r.value&&b.value?[]:e.dropdownHidden),options:[e.options].concat("top"===i.value?e.optionsTop:[]),group:e.group,groupLabel:a=>{let l=[e.groupLabel];return s(a)?l.push(o(a)?e.groupLabelSelectedPointed:e.groupLabelPointed):o(a)&&d.value?l.push(v(a)?e.groupLabelSelectedDisabled:e.groupLabelSelected):v(a)&&l.push(e.groupLabelDisabled),d.value&&l.push(e.groupLabelPointable),l},groupOptions:e.groupOptions,option:(a,l)=>{let t=[e.option];return s(a)?t.push(o(a)?e.optionSelectedPointed:e.optionPointed):o(a)?t.push(v(a)?e.optionSelectedDisabled:e.optionSelected):(v(a)||l&&v(l))&&t.push(e.optionDisabled),t},noOptions:e.noOptions,noResults:e.noResults,assist:e.assist,fakeInput:e.fakeInput}})),showDropdown:b}}function B(e,a,l){const{limit:t,infinite:u}=g(e),i=l.isOpen,r=l.offset,n=l.search,s=l.pfo,o=l.eo,v=b(null),c=b(null),d=m((()=>r.value<s.value.length)),p=e=>{const{isIntersecting:a,target:l}=e[0];if(a){const e=l.offsetParent,a=e.scrollTop;r.value+=-1==t.value?10:t.value,S((()=>{e.scrollTop=a}))}},f=()=>{i.value&&r.value<s.value.length?v.value.observe(c.value):!i.value&&v.value&&v.value.disconnect()};return y(i,(()=>{u.value&&f()})),y(n,(()=>{u.value&&(r.value=t.value,f())}),{flush:"post"}),y(o,(()=>{u.value&&f()}),{immediate:!1,flush:"post"}),O((()=>{window&&window.IntersectionObserver&&(v.value=new IntersectionObserver(p))})),{hasMore:d,infiniteLoader:c}}function D(e,a,l){const{placeholder:t,id:u,valueProp:i,label:r,mode:n,groupLabel:s,aria:o,searchable:v}=g(e),c=l.pointer,d=l.iv,p=l.hasSelected,f=l.multipleLabelText,h=b(null),y=m((()=>{let e=[];return u&&u.value&&e.push(u.value),e.push("assist"),e.join("-")})),S=m((()=>{let e=[];return u&&u.value&&e.push(u.value),e.push("multiselect-options"),e.join("-")})),L=m((()=>{let e=[];if(u&&u.value&&e.push(u.value),c.value)return e.push(c.value.group?"multiselect-group":"multiselect-option"),e.push(c.value.group?c.value.index:c.value[i.value]),e.join("-")})),_=m((()=>t.value)),k=m((()=>"single"!==n.value)),x=m((()=>{let e="";return"single"===n.value&&p.value&&(e+=d.value[r.value]),"multiple"===n.value&&p.value&&(e+=f.value),"tags"===n.value&&p.value&&(e+=d.value.map((e=>e[r.value])).join(", ")),e})),w=m((()=>{let e={...o.value};return v.value&&(e["aria-labelledby"]=e["aria-labelledby"]?`${y.value} ${e["aria-labelledby"]}`:y.value,x.value&&e["aria-label"]&&(e["aria-label"]=`${x.value}, ${e["aria-label"]}`)),e}));return O((()=>{if(u&&u.value&&document&&document.querySelector){let e=document.querySelector(`[for="${u.value}"]`);h.value=e?e.innerText:null}})),{arias:w,ariaLabel:x,ariaAssist:y,ariaControls:S,ariaPlaceholder:_,ariaMultiselectable:k,ariaActiveDescendant:L,ariaOptionId:e=>{let a=[];return u&&u.value&&a.push(u.value),a.push("multiselect-option"),a.push(e[i.value]),a.join("-")},ariaOptionLabel:e=>{let a=[];return a.push(e),a.join(" ")},ariaGroupId:e=>{let a=[];return u&&u.value&&a.push(u.value),a.push("multiselect-group"),a.push(e.index),a.join("-")},ariaGroupLabel:e=>{let a=[];return a.push(e),a.join(" ")},ariaTagLabel:e=>`${e} ❎`}}function R(e,a,l){const{locale:t,fallbackLocale:u}=g(e);return{localize:e=>e&&"object"==typeof e?e&&e[t.value]?e[t.value]:e&&t.value&&e[t.value.toUpperCase()]?e[t.value.toUpperCase()]:e&&e[u.value]?e[u.value]:e&&u.value&&e[u.value.toUpperCase()]?e[u.value.toUpperCase()]:e&&Object.keys(e)[0]?e[Object.keys(e)[0]]:"":e}}var A=e("s",{name:"Multiselect",emits:["paste","open","close","select","deselect","input","search-change","tag","option","update:modelValue","change","clear","keydown","keyup","max","create"],props:{value:{required:!1},modelValue:{required:!1},options:{type:[Array,Object,Function],required:!1,default:()=>[]},id:{type:[String,Number],required:!1},name:{type:[String,Number],required:!1,default:"multiselect"},disabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:"label"},trackBy:{type:String,required:!1,default:void 0},valueProp:{type:String,required:!1,default:"value"},placeholder:{type:String,required:!1,default:null},mode:{type:String,required:!1,default:"single"},searchable:{type:Boolean,required:!1,default:!1},limit:{type:Number,required:!1,default:-1},hideSelected:{type:Boolean,required:!1,default:!0},createTag:{type:Boolean,required:!1,default:void 0},createOption:{type:Boolean,required:!1,default:void 0},appendNewTag:{type:Boolean,required:!1,default:void 0},appendNewOption:{type:Boolean,required:!1,default:void 0},addTagOn:{type:Array,required:!1,default:void 0},addOptionOn:{type:Array,required:!1,default:void 0},caret:{type:Boolean,required:!1,default:!0},loading:{type:Boolean,required:!1,default:!1},noOptionsText:{type:[String,Object],required:!1,default:"The list is empty"},noResultsText:{type:[String,Object],required:!1,default:"No results found"},multipleLabel:{type:Function,required:!1},object:{type:Boolean,required:!1,default:!1},delay:{type:Number,required:!1,default:-1},minChars:{type:Number,required:!1,default:0},resolveOnLoad:{type:Boolean,required:!1,default:!0},filterResults:{type:Boolean,required:!1,default:!0},clearOnSearch:{type:Boolean,required:!1,default:!1},clearOnSelect:{type:Boolean,required:!1,default:!0},canDeselect:{type:Boolean,required:!1,default:!0},canClear:{type:Boolean,required:!1,default:!0},max:{type:Number,required:!1,default:-1},showOptions:{type:Boolean,required:!1,default:!0},required:{type:Boolean,required:!1,default:!1},openDirection:{type:String,required:!1,default:"bottom"},nativeSupport:{type:Boolean,required:!1,default:!1},classes:{type:Object,required:!1,default:()=>({})},strict:{type:Boolean,required:!1,default:!0},closeOnSelect:{type:Boolean,required:!1,default:!0},closeOnDeselect:{type:Boolean,required:!1,default:!1},autocomplete:{type:String,required:!1},groups:{type:Boolean,required:!1,default:!1},groupLabel:{type:String,required:!1,default:"label"},groupOptions:{type:String,required:!1,default:"options"},groupHideEmpty:{type:Boolean,required:!1,default:!1},groupSelect:{type:Boolean,required:!1,default:!0},inputType:{type:String,required:!1,default:"text"},attrs:{required:!1,type:Object,default:()=>({})},onCreate:{required:!1,type:Function},disabledProp:{type:String,required:!1,default:"disabled"},searchStart:{type:Boolean,required:!1,default:!1},reverse:{type:Boolean,required:!1,default:!1},regex:{type:[Object,String,RegExp],required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:!1},infinite:{type:Boolean,required:!1,default:!1},aria:{required:!1,type:Object,default:()=>({})},clearOnBlur:{required:!1,type:Boolean,default:!0},locale:{required:!1,type:String,default:null},fallbackLocale:{required:!1,type:String,default:"en"},searchFilter:{required:!1,type:Function,default:null},allowAbsent:{required:!1,type:Boolean,default:!1}},setup:(e,a)=>function(e,a,l,t={}){return l.forEach((l=>{l&&(t={...t,...l(e,a,t)})})),t}(e,a,[R,_,x,P,k,L,E,q,B,T,C,I,D])});const j=["id","dir"],M=["tabindex","aria-controls","aria-placeholder","aria-expanded","aria-activedescendant","aria-multiselectable","role"],V=["type","modelValue","value","autocomplete","id","aria-controls","aria-placeholder","aria-expanded","aria-activedescendant","aria-multiselectable"],$=["onKeyup","aria-label"],K=["onClick"],N=["type","modelValue","value","id","autocomplete","aria-controls","aria-placeholder","aria-expanded","aria-activedescendant","aria-multiselectable"],H=["innerHTML"],F=["id"],z=["id","aria-label","aria-selected"],G=["data-pointed","onMouseenter","onClick"],U=["innerHTML"],W=["aria-label"],J=["data-pointed","data-selected","onMouseenter","onClick","id","aria-selected","aria-label"],Q=["data-pointed","data-selected","onMouseenter","onClick","id","aria-selected","aria-label"],Z=["innerHTML"],X=["innerHTML"],Y=["value"],ee=["name","value"],ae=["name","value"],le=["id"];A.render=function(e,a,g,h,b,m){return l(),t("div",{ref:"multiselect",class:s(e.classList.container),id:g.searchable?void 0:g.id,dir:g.rtl?"rtl":void 0,onFocusin:a[10]||(a[10]=(...a)=>e.handleFocusIn&&e.handleFocusIn(...a)),onFocusout:a[11]||(a[11]=(...a)=>e.handleFocusOut&&e.handleFocusOut(...a)),onKeyup:a[12]||(a[12]=(...a)=>e.handleKeyup&&e.handleKeyup(...a)),onKeydown:a[13]||(a[13]=(...a)=>e.handleKeydown&&e.handleKeydown(...a))},[u("div",r({class:e.classList.wrapper,onMousedown:a[9]||(a[9]=(...a)=>e.handleMousedown&&e.handleMousedown(...a)),ref:"wrapper",tabindex:e.tabindex,"aria-controls":g.searchable?void 0:e.ariaControls,"aria-placeholder":g.searchable?void 0:e.ariaPlaceholder,"aria-expanded":g.searchable?void 0:e.isOpen,"aria-activedescendant":g.searchable?void 0:e.ariaActiveDescendant,"aria-multiselectable":g.searchable?void 0:e.ariaMultiselectable,role:g.searchable?void 0:"combobox"},g.searchable?{}:e.arias),[i(" Search "),"tags"!==g.mode&&g.searchable&&!g.disabled?(l(),t("input",r({key:0,type:g.inputType,modelValue:e.search,value:e.search,class:e.classList.search,autocomplete:g.autocomplete,id:g.searchable?g.id:void 0,onInput:a[0]||(a[0]=(...a)=>e.handleSearchInput&&e.handleSearchInput(...a)),onKeypress:a[1]||(a[1]=(...a)=>e.handleKeypress&&e.handleKeypress(...a)),onPaste:a[2]||(a[2]=n(((...a)=>e.handlePaste&&e.handlePaste(...a)),["stop"])),ref:"input","aria-controls":e.ariaControls,"aria-placeholder":e.ariaPlaceholder,"aria-expanded":e.isOpen,"aria-activedescendant":e.ariaActiveDescendant,"aria-multiselectable":e.ariaMultiselectable,role:"combobox"},{...g.attrs,...e.arias}),null,16,V)):i("v-if",!0),i(" Tags (with search) "),"tags"==g.mode?(l(),t("div",{key:1,class:s(e.classList.tags),"data-tags":""},[(l(!0),t(o,null,v(e.iv,((a,r,o)=>c(e.$slots,"tag",{option:a,handleTagRemove:e.handleTagRemove,disabled:g.disabled},(()=>[(l(),t("span",{class:s([e.classList.tag,a.disabled?e.classList.tagDisabled:null]),tabindex:"-1",onKeyup:d((l=>e.handleTagRemove(a,l)),["enter"]),key:o,"aria-label":e.ariaTagLabel(e.localize(a[g.label]))},[p(f(e.localize(a[g.label]))+" ",1),g.disabled||a.disabled?i("v-if",!0):(l(),t("span",{key:0,class:s(e.classList.tagRemove),onClick:n((l=>e.handleTagRemove(a,l)),["stop"])},[u("span",{class:s(e.classList.tagRemoveIcon)},null,2)],10,K))],42,$))])))),256)),u("div",{class:s(e.classList.tagsSearchWrapper),ref:"tags"},[i(" Used for measuring search width "),u("span",{class:s(e.classList.tagsSearchCopy)},f(e.search),3),i(" Actual search input "),g.searchable&&!g.disabled?(l(),t("input",r({key:0,type:g.inputType,modelValue:e.search,value:e.search,class:e.classList.tagsSearch,id:g.searchable?g.id:void 0,autocomplete:g.autocomplete,onInput:a[3]||(a[3]=(...a)=>e.handleSearchInput&&e.handleSearchInput(...a)),onKeypress:a[4]||(a[4]=(...a)=>e.handleKeypress&&e.handleKeypress(...a)),onPaste:a[5]||(a[5]=n(((...a)=>e.handlePaste&&e.handlePaste(...a)),["stop"])),ref:"input","aria-controls":e.ariaControls,"aria-placeholder":e.ariaPlaceholder,"aria-expanded":e.isOpen,"aria-activedescendant":e.ariaActiveDescendant,"aria-multiselectable":e.ariaMultiselectable,role:"combobox"},{...g.attrs,...e.arias}),null,16,N)):i("v-if",!0)],2)],2)):i("v-if",!0),i(" Single label "),"single"==g.mode&&e.hasSelected&&!e.search&&e.iv?c(e.$slots,"singlelabel",{key:2,value:e.iv},(()=>[u("div",{class:s(e.classList.singleLabel)},[u("span",{class:s(e.classList.singleLabelText)},f(e.localize(e.iv[g.label])),3)],2)])):i("v-if",!0),i(" Multiple label "),"multiple"==g.mode&&e.hasSelected&&!e.search?c(e.$slots,"multiplelabel",{key:3,values:e.iv},(()=>[u("div",{class:s(e.classList.multipleLabel),innerHTML:e.multipleLabelText},null,10,H)])):i("v-if",!0),i(" Placeholder "),!g.placeholder||e.hasSelected||e.search?i("v-if",!0):c(e.$slots,"placeholder",{key:4},(()=>[u("div",{class:s(e.classList.placeholder),"aria-hidden":"true"},f(g.placeholder),3)])),i(" Spinner "),g.loading||e.resolving?c(e.$slots,"spinner",{key:5},(()=>[u("span",{class:s(e.classList.spinner),"aria-hidden":"true"},null,2)])):i("v-if",!0),i(" Clear "),e.hasSelected&&!g.disabled&&g.canClear&&!e.busy?c(e.$slots,"clear",{key:6,clear:e.clear},(()=>[u("span",{"aria-hidden":"true",tabindex:"0",role:"button","data-clear":"","aria-roledescription":"❎",class:s(e.classList.clear),onClick:a[6]||(a[6]=(...a)=>e.clear&&e.clear(...a)),onKeyup:a[7]||(a[7]=d(((...a)=>e.clear&&e.clear(...a)),["enter"]))},[u("span",{class:s(e.classList.clearIcon)},null,2)],34)])):i("v-if",!0),i(" Caret "),g.caret&&g.showOptions?c(e.$slots,"caret",{key:7},(()=>[u("span",{class:s(e.classList.caret),onClick:a[8]||(a[8]=(...a)=>e.handleCaretClick&&e.handleCaretClick(...a)),"aria-hidden":"true"},null,2)])):i("v-if",!0)],16,M),i(" Options "),u("div",{class:s(e.classList.dropdown),tabindex:"-1"},[c(e.$slots,"beforelist",{options:e.fo}),u("ul",{class:s(e.classList.options),id:e.ariaControls,role:"listbox"},[g.groups?(l(!0),t(o,{key:0},v(e.fg,((a,r,n)=>(l(),t("li",{class:s(e.classList.group),key:n,id:e.ariaGroupId(a),"aria-label":e.ariaGroupLabel(e.localize(a[g.groupLabel])),"aria-selected":e.isSelected(a),role:"option"},[a.__CREATE__?i("v-if",!0):(l(),t("div",{key:0,class:s(e.classList.groupLabel(a)),"data-pointed":e.isPointed(a),onMouseenter:l=>e.setPointer(a,r),onClick:l=>e.handleGroupClick(a)},[c(e.$slots,"grouplabel",{group:a,isSelected:e.isSelected,isPointed:e.isPointed},(()=>[u("span",{innerHTML:e.localize(a[g.groupLabel])},null,8,U)]))],42,G)),u("ul",{class:s(e.classList.groupOptions),"aria-label":e.ariaGroupLabel(e.localize(a[g.groupLabel])),role:"group"},[(l(!0),t(o,null,v(a.__VISIBLE__,((i,r,n)=>(l(),t("li",{class:s(e.classList.option(i,a)),"data-pointed":e.isPointed(i),"data-selected":e.isSelected(i)||void 0,key:n,onMouseenter:a=>e.setPointer(i),onClick:a=>e.handleOptionClick(i),id:e.ariaOptionId(i),"aria-selected":e.isSelected(i),"aria-label":e.ariaOptionLabel(e.localize(i[g.label])),role:"option"},[c(e.$slots,"option",{option:i,isSelected:e.isSelected,isPointed:e.isPointed,search:e.search},(()=>[u("span",null,f(e.localize(i[g.label])),1)]))],42,J)))),128))],10,W)],10,z)))),128)):(l(!0),t(o,{key:1},v(e.fo,((a,i,r)=>(l(),t("li",{class:s(e.classList.option(a)),"data-pointed":e.isPointed(a),"data-selected":e.isSelected(a)||void 0,key:r,onMouseenter:l=>e.setPointer(a),onClick:l=>e.handleOptionClick(a),id:e.ariaOptionId(a),"aria-selected":e.isSelected(a),"aria-label":e.ariaOptionLabel(e.localize(a[g.label])),role:"option"},[c(e.$slots,"option",{option:a,isSelected:e.isSelected,isPointed:e.isPointed,search:e.search},(()=>[u("span",null,f(e.localize(a[g.label])),1)]))],42,Q)))),128))],10,F),e.noOptions?c(e.$slots,"nooptions",{key:0},(()=>[u("div",{class:s(e.classList.noOptions),innerHTML:e.localize(g.noOptionsText)},null,10,Z)])):i("v-if",!0),e.noResults?c(e.$slots,"noresults",{key:1},(()=>[u("div",{class:s(e.classList.noResults),innerHTML:e.localize(g.noResultsText)},null,10,X)])):i("v-if",!0),g.infinite&&e.hasMore?(l(),t("div",{key:2,class:s(e.classList.inifinite),ref:"infiniteLoader"},[c(e.$slots,"infinite",{},(()=>[u("span",{class:s(e.classList.inifiniteSpinner)},null,2)]))],2)):i("v-if",!0),c(e.$slots,"afterlist",{options:e.fo})],2),i(" Hacky input element to show HTML5 required warning "),g.required?(l(),t("input",{key:0,class:s(e.classList.fakeInput),tabindex:"-1",value:e.textValue,required:""},null,10,Y)):i("v-if",!0),i(" Native input support "),g.nativeSupport?(l(),t(o,{key:1},["single"==g.mode?(l(),t("input",{key:0,type:"hidden",name:g.name,value:void 0!==e.plainValue?e.plainValue:""},null,8,ee)):(l(!0),t(o,{key:1},v(e.plainValue,((e,a)=>(l(),t("input",{type:"hidden",name:`${g.name}[]`,value:e,key:a},null,8,ae)))),128))],64)):i("v-if",!0),i(" Screen reader assistive text "),g.searchable&&e.hasSelected?(l(),t("div",{key:2,class:s(e.classList.assist),id:e.ariaAssist,"aria-hidden":"true"},f(e.ariaLabel),11,le)):i("v-if",!0),i(" Create height for empty input "),u("div",{class:s(e.classList.spacer)},null,2)],42,j)},A.__file="src/Multiselect.vue"}}}));