var e=Object.defineProperty,t=(t,i,a)=>((t,i,a)=>i in t?e(t,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[i]=a)(t,"symbol"!=typeof i?i+"":i,a);import{R as i}from"./RestBase-6hwWqa7t.js";import{r as a,m as s}from"./index-CFoXpmaN.js";import{d as n}from"./index-brT4NzTB.js";import{d}from"./debounceValidator-Cl5zTG4a.js";const r={create:{name:{required:a,isUnique:d((function(e,t){const{id:i,name:a}={...t.state},s=i?"update":"create";return!a||u.validate({name:a,id:i,_scenario:s,_specific:!0})}),void 0,500)},description:{required:a,maxLength:s(65535)}},update:{name:{required:a,isUnique:d((function(e,t){const{id:i,name:a}={...t.state},s=i?"update":"create";return!a||u.validate({name:a,id:i,_scenario:s,_specific:!0})}),void 0,500)},description:{required:a,maxLength:s(65535)}}},c=await i("business_sectors","manage/business_sectors"),o=class extends c{constructor(e=null){super(),t(this,"id"),t(this,"name"),t(this,"description"),t(this,"created_at"),t(this,"updated_at"),null!=e&&(this.id=e.id||void 0,this.name=e.name||null,this.description=e.description||null,this.created_at=e.created_at?n(e.created_at):null,this.updated_at=e.updated_at?n(e.updated_at):null)}set_attributes(e=null){null!=e&&(this.id=e.id,this.name=e.name,this.description=e.description,this.created_at=n(e.created_at),this.updated_at=n(e.updated_at))}get_id(){return this.id}class_name(){return"Business_sectors"}};t(o,"validations",r),t(o,"feedbacks",{create:{name:{isUnique:"This name has been taken"},id:{isUnique:"This id has been taken"}},update:{name:{isUnique:"This name has been taken"},id:{isUnique:"This id has been taken"}}}),t(o,"columns",[{title:"Name",dataIndex:"name",align:"center",key:"name",sorter:(e,t)=>+(e.name>t.name)-+(e.name<t.name)},{title:"Description",dataIndex:"description",align:"center",key:"description",sorter:(e,t)=>+(e.description>t.description)-+(e.description<t.description)},{title:"Acciones",key:"_action",fixed:"right",scopedSlots:{customRender:"_action"}}]),t(o,"visible_columns",o.show_columns(["*"],!0));let u=o;export{u as B};