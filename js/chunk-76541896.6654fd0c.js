(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-76541896"],{"124d":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"deploy-contract-container"},[n("interface-container-title",{attrs:{title:t.$t("common.depContract")}}),n("div",{staticClass:"content-container"},[n("div",{staticClass:"send-form"},[n("div",{staticClass:"title-container"},[n("div",{staticClass:"title"},[n("h4",[t._v(t._s(t.$t("interface.byteCode")))]),n("div",{staticClass:"copy-buttons"},[n("button",{staticClass:"title-button",on:{click:function(e){return t.deleteInput("bytecode")}}},[t._v("\n              "+t._s(t.$t("common.clear"))+"\n            ")]),n("button",{staticClass:"title-button",on:{click:function(e){return t.copyToClipboard("bytecode")}}},[t._v("\n              "+t._s(t.$t("common.copy"))+"\n            ")])])])]),n("div",{staticClass:"the-form byte-code"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.bytecode,expression:"bytecode"}],ref:"bytecode",staticClass:"custom-textarea-1",domProps:{value:t.bytecode},on:{input:function(e){e.target.composing||(t.bytecode=e.target.value)}}}),n("i",{class:[t.isValidByte?"":"not-good","fa fa-check-circle good-button"],attrs:{"aria-hidden":"true"}})])]),n("div",{staticClass:"send-form"},[n("div",{staticClass:"title-container"},[n("div",{staticClass:"title"},[n("h4",[t._v(t._s(t.$t("interface.abiJsonInt")))]),n("div",{staticClass:"copy-buttons"},[n("button",{staticClass:"title-button",on:{click:function(e){return t.deleteInput("abi")}}},[t._v("\n              "+t._s(t.$t("common.clear"))+"\n            ")]),n("button",{staticClass:"title-button",on:{click:function(e){return t.copyToClipboard("abi")}}},[t._v("\n              "+t._s(t.$t("common.copy"))+"\n            ")])])])]),n("div",{staticClass:"the-form"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.abi,expression:"abi"}],ref:"abi",staticClass:"custom-textarea-1",domProps:{value:t.abi},on:{input:function(e){e.target.composing||(t.abi=e.target.value)}}}),n("i",{class:[t.isValidAbi&&""!==t.abi?"":"not-good","fa fa-check-circle good-button"],attrs:{"aria-hidden":"true"}})])]),t.abiConstructor?n("div",{staticClass:"send-form"},[n("div",{staticClass:"title-container"},[n("div",{staticClass:"title"},[n("h4",[t._v("\n            "+t._s(t.$t("interface.constructor"))+"\n            "+t._s(t.abiConstructor?"Inputs":"Input")+":\n          ")])])]),t._l(t.abiConstructor.inputs,function(e,a){return n("div",{key:e.name+a},[n("div",{staticClass:"title-container"},[n("div",{staticClass:"title"},[n("h5",[t._v(t._s(t._f("capitalize")(e.name))+" ("+t._s(e.type)+"):")])])]),n("div",{staticClass:"the-form contract-name"},["checkbox"===t.getType(e.type).type&&"radio"!==t.getType(e.type).type?n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputs[e.name],expression:"inputs[input.name]"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.inputs[e.name])?t._i(t.inputs[e.name],null)>-1:t.inputs[e.name]},on:{change:function(n){var a=t.inputs[e.name],i=n.target,s=!!i.checked;if(Array.isArray(a)){var o=null,r=t._i(a,o);i.checked?r<0&&t.$set(t.inputs,e.name,a.concat([o])):r>-1&&t.$set(t.inputs,e.name,a.slice(0,r).concat(a.slice(r+1)))}else t.$set(t.inputs,e.name,s)}}}):"radio"===t.getType(e.type).type&&"radio"!==t.getType(e.type).type?n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputs[e.name],expression:"inputs[input.name]"}],attrs:{type:"radio"},domProps:{checked:t._q(t.inputs[e.name],null)},on:{change:function(n){return t.$set(t.inputs,e.name,null)}}}):"radio"!==t.getType(e.type).type?n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputs[e.name],expression:"inputs[input.name]"}],attrs:{type:t.getType(e.type).type},domProps:{value:t.inputs[e.name]},on:{input:function(n){n.target.composing||t.$set(t.inputs,e.name,n.target.value)}}}):t._e(),"radio"===t.getType(e.type).type?n("div",{staticClass:"bool-input-container"},[n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputs[e.name],expression:"inputs[input.name]"}],attrs:{name:e.name,type:"radio"},domProps:{value:!0,checked:t._q(t.inputs[e.name],!0)},on:{change:function(n){return t.$set(t.inputs,e.name,!0)}}}),n("label",{attrs:{for:e.name}},[t._v("True")])]),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputs[e.name],expression:"inputs[input.name]"}],attrs:{name:e.name,type:"radio",checked:""},domProps:{value:!1,checked:t._q(t.inputs[e.name],!1)},on:{change:function(n){return t.$set(t.inputs,e.name,!1)}}}),n("label",{attrs:{for:e.name}},[t._v("False")])])]):t._e(),n("i",{class:[t.isValidInput(t.inputs[e.name],t.getType(e.type).solidityType)?"":"not-good","fa fa-check-circle good-button"],attrs:{"aria-hidden":"true"}})])])})],2):t._e(),null!==t.abiConstructor&&t.abiConstructor.payable?n("div",{staticClass:"send-form"},[t._m(0),n("div",{staticClass:"the-form contract-name"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],ref:"value",attrs:{step:"any",placeholder:"Value in ETH"},domProps:{value:t.value},on:{input:function(e){e.target.composing||(t.value=e.target.value)}}})])]):t._e(),n("div",{staticClass:"send-form"},[n("div",{staticClass:"title-container"},[n("div",{staticClass:"title"},[n("h4",[t._v(t._s(t.$t("interface.contractName")))])])]),n("div",{staticClass:"the-form contract-name"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.contractName,expression:"contractName"}],ref:"contractName",attrs:{placeholder:"Name for the contract"},domProps:{value:t.contractName},on:{input:function(e){e.target.composing||(t.contractName=e.target.value)}}})])]),n("div",{staticClass:"submit-button-container"},[n("div",{staticClass:"buttons"},[n("div",{class:[t.allValid?"":"disabled","submit-button large-round-button-green-filled clickable"],on:{click:t.confirmationModalOpen}},[t._v("\n          "+t._s(t.$t("common.signTx"))+"\n        ")])]),n("interface-bottom-text",{attrs:{"link-text":t.$t("interface.helpCenter"),question:t.$t("interface.haveIssues"),link:"https://kb.myetherwallet.com"}})],1)])],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title-container"},[n("div",{staticClass:"title"},[n("h4",[t._v("Value in ETH:")])])])}],s=(n("20d6"),n("6b54"),n("96cf"),n("3b8d")),o=n("7618"),r=(n("7f7f"),n("ac6a"),n("cebc")),c=n("539d"),u=n("55c1"),l=n("ce96"),d=n("b7d3"),p=n("70c1"),m=n.n(p),b=n("dbd9"),v=n.n(b),h=n("901e"),f=n.n(h),y=n("8ded"),g=n.n(y),C=n("b671"),x=n("2f62"),_={name:"DeployContract",components:{"interface-bottom-text":c["a"],"interface-container-title":u["a"]},data:function(){return{bytecode:"",abi:"",inputs:{},contractName:"",gasLimit:21e3,data:"",value:0}},computed:Object(r["a"])({},Object(x["b"])({gasPrice:"gasPrice",web3:"web3",network:"network"}),{isValidAbi:function(){return l["c"].isJson(this.abi)},abiConstructor:function(){var t=this,e=null;return this.isValidAbi&&JSON.parse(this.abi).forEach(function(t){"constructor"===t.type&&(e=t)}),e&&e.hasOwnProperty("inputs")&&e.inputs.forEach(function(e){"bool"===e.type&&(t.inputs[e.name]=!1)}),e},isValidByte:function(){return this.bytecode&&"0x"===this.bytecode.substr(0,2)&&l["c"].validateHexString(this.bytecode)},txByteCode:function(){return l["c"].sanitizeHex(this.bytecode)},deployArgs:function(){var t=this,e=[];return this.abiConstructor&&this.abiConstructor.inputs.forEach(function(n){e.push(t.inputs[n.name])}),e},txData:function(){return new this.web3.eth.Contract(JSON.parse(this.abi)).deploy({data:this.txByteCode,arguments:this.deployArgs}).encodeABI()},allValid:function(){var t=this,e=!0;return this.abiConstructor&&this.abiConstructor.inputs.forEach(function(n){t.isValidInput(t.inputs[n.name],t.getType(n.type).solidityType)||(e=!1)}),e&&this.isValidAbi&&this.isValidByte}}),methods:{isValidInput:function(t,e){return t||(t=""),"uint"===e?""!==t&&!isNaN(t)&&l["c"].isInt(t):"address"===e?Object(d["a"])(t):"string"===e||("bytes"===e?"0x"==t.substr(0,2)&&l["c"].validateHexString(t):"bool"===e&&(Object(o["a"])(t)==Object(o["a"])(!0)||""===t))},getType:l["c"].solidityType,sendTransaction:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,n,a,i,s,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.estimateGas();case 3:return e=this.web3,t.next=6,e.eth.getCoinbase();case 6:return n=t.sent,t.next=9,e.eth.getTransactionCount(n);case 9:a=t.sent,i=new v.a({nonce:a,gasPrice:l["c"].sanitizeHex(m.a.toWei(this.gasPrice,"gwei").toString(16)),gasLimit:l["c"].sanitizeHex(new f.a(this.gasLimit).toString(16)),data:this.txData}),s=i.toJSON(!0),delete s.to,s.from=n,this.web3.eth.sendTransaction(s).catch(function(t){l["d"].responseHandler(t,l["d"].WARN)}),o=Object(C["bufferToHex"])(Object(C["generateAddress"])(n,a)),this.pushContractToStore(o),t.next=22;break;case 19:t.prev=19,t.t0=t["catch"](0),l["d"].responseHandler(t.t0,!1);case 22:case"end":return t.stop()}},t,this,[[0,19]])}));function e(){return t.apply(this,arguments)}return e}(),pushContractToStore:function(t){var e=this,n=g.a.get("customContracts")||[],a=n.findIndex(function(t){return t.name.toLowerCase()===e.contractName.toLowerCase()});if(-1===a){var i={abi:JSON.parse(this.abi),address:t,comment:"",name:this.contractName};n.push(i)}else n[a]={abi:JSON.parse(this.abi),address:t,comment:"",name:this.contractName};g.a.set("customContracts",n)},confirmationModalOpen:function(){this.sendTransaction(),window.scrollTo(0,0)},estimateGas:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.web3.eth.getCoinbase();case 2:return e=t.sent,n={from:e,data:this.txData},t.next=6,this.web3.eth.estimateGas(n).catch(function(t){l["d"].responseHandler(t,l["d"].WARN)});case 6:this.gasLimit=t.sent;case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),copyToClipboard:function(t){this.$refs[t].select(),document.execCommand("copy")},deleteInput:function(t){this[t]=""}}},w=_,k=(n("7525"),n("2877")),N=Object(k["a"])(w,a,i,!1,null,"705cd2e8",null),T=N.exports;n.d(e,"default",function(){return T})},7525:function(t,e,n){"use strict";var a=n("8db5"),i=n.n(a);i.a},"8db5":function(t,e,n){}}]);
//# sourceMappingURL=chunk-76541896.6654fd0c.js.map