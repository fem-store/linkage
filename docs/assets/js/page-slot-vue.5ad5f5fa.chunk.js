(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{147:function(e,l,t){"use strict";t.r(l);var r={data:function(){return{content:[],form:{dialect:"",className:"",url:""},store:{driver:"",db:"",ip:"",port:""},defaultPort:{mysql:"3306",oracle:"1521"},classNameOpts:{mysql:[{label:"com.mysql.jdbc.Driver",value:"com.mysql.jdbc.Driver"},{label:"com.mysql.cj.jdbc.Driver",value:"com.mysql.cj.jdbc.Driver"}],oracle:[{label:"oracle.jdbc.driver.OracleDriver",value:"oracle.jdbc.driver.OracleDriver"}]},inputs:[{model:"driver",placeholder:"jdbc",text:":"},{model:"db",placeholder:"mysql",text:"://"},{span:12,model:"ip",placeholder:"127.0.0.1",text:":"},{model:"port",placeholder:"3306",config:{type:"number"}}],value:{}}},methods:{onDialect:function(e){this.store=Object.assign({},this.store,{driver:"jdbc",db:e}),this.store.port||(this.store.port=this.defaultPort[e]),this.form.className=""},logVal:function(){var e=this.store,l="";l=e.driver&&e.db&&e.ip&&e.port?"".concat(e.driver,":").concat(e.db,"://").concat(e.ip,":").concat(e.port):"",this.value=Object.assign({},this.form,{url:l},this.$refs.form.getFormValue())}}},o=t(47),a=Object(o.a)(r,function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",[t("h3",[e._v("\u901a\u8fc7slot\u64cd\u63a7\u8054\u52a8")]),e._v(" "),t("el-form-renderer",{ref:"form",attrs:{content:e.content}},[t("el-form-item",{attrs:{label:"\u6570\u636e\u6e90"}},[t("el-select",{on:{change:e.onDialect},model:{value:e.form.dialect,callback:function(l){e.$set(e.form,"dialect",l)},expression:"form.dialect"}},[t("el-option",{attrs:{label:"mysql",value:"mysql"}}),e._v(" "),t("el-option",{attrs:{label:"oracle",value:"oracle"}})],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"URL"}},[t("el-row",{staticStyle:{display:"inline-block"}},[e._l(e.inputs,function(l){return[t("el-col",{key:l.model,attrs:{span:l.span||3}},[t("el-input",e._b({attrs:{placeholder:l.placeholder},model:{value:e.store[l.model],callback:function(t){e.$set(e.store,l.model,t)},expression:"store[input.model]"}},"el-input",l.config,!1))],1),e._v(" "),l.text?t("el-col",{key:l.k,staticStyle:{"text-align":"center"},attrs:{span:1}},[e._v("\n            "+e._s(l.text)+"\n          ")]):e._e()]})],2)],1),e._v(" "),t("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.form.dialect,expression:"form.dialect"}],attrs:{label:"\u6570\u636e\u5e93"}},[t("el-select",{model:{value:e.form.className,callback:function(l){e.$set(e.form,"className",l)},expression:"form.className"}},e._l(e.classNameOpts[e.form.dialect],function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1)],1),e._v(" "),t("el-button",{on:{click:e.logVal}},[e._v("\u6253\u5370\u6570\u636e")]),e._v(" "),t("pre",[e._v(e._s(e.value))])],1)},[],!1,null,null,null);l.default=a.exports}}]);