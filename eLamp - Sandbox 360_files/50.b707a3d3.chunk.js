(this["webpackJsonp@elamp/main-app"]=this["webpackJsonp@elamp/main-app"]||[]).push([[50],{1582:function(e,t,r){"use strict";r.r(t);var n=r(139),i=r.n(n),l=r(286),a=r(53),o=r(17),c=r(188),s=r(0),u=r(14),d=r(45),f=r(122),p=r(37),b=r(19),v=r(414),m=r(817),O=r(834),j=r(835),y=r(232),g=r(10),h=r(233),x=r(767),w=r(897),C=function(e,t){var r=((null===e||void 0===e?void 0:e.qualifiers)||[]).flat().find((function(e){return e.id===t}));if(r)return r.value},S=function(e){return e?(e||[]).map((function(e){return{id:e.id,capabilities:{canReview:e.capabilities.canReview},updatedAt:e.updatedAt,appetence:Object(b.maybeToOptional)(e.appetence)||b.SkillAppetenceOpinion.Neutral,description:Object(b.maybeToOptional)(e.description),upgradeDescription:Object(b.maybeToOptional)(e.upgradeDescription),user:Object(o.a)(Object(o.a)({},Object(b.getFormatedUserBasicFragment)(e.user)),{},{externalId:Object(b.maybeToOptional)(e.user.externalId),groups:(e.user.groups.nodes||[]).map((function(e){return{kind:"groupTag",id:e.id,name:e.name}})),customFields:e.user.customFields}),qualifiers:(e.qualifiers.edges||[]).map((function(e){return Object(o.a)(Object(o.a)({},Object(b.getFormatedQualifierBasicFragment)(e.node)),{},{value:e.value,isValidated:e.validated})})),isUpgrade:"upgrade"===e.type,skill:Object(o.a)(Object(o.a)({},Object(b.getFormatedSkillBasicFragment)(e.skill)),{},{description:Object(b.maybeToOptional)(e.skill.description),libraryContext:Object(b.getFormatedLibraryBasicFragment)(e.skill.libraryContext),qualifiers:(e.skill.qualifiers.nodes||[]).map((function(e){return Object(b.getFormatedQualifierBasicFragment)(e)}))})}})):[]},k=r(1),F=["BOOLEAN","DATE","MULTIVALUES","NUMERIC","TEXT"],R=function(e,t){var r;if("undefined"!==typeof(null===e||void 0===e?void 0:e.inSkills)||"undefined"!==typeof(null===t||void 0===t?void 0:t.inSkills))return{inSkills:Array.from(new Set((r=(null===e||void 0===e?void 0:e.inSkills)||[]).concat.apply(r,Object(c.a)((null===t||void 0===t?void 0:t.inSkills)||[]))))}},_=function(e,t){if("undefined"!==typeof(null===e||void 0===e?void 0:e.inValues)||"undefined"!==typeof(null===t||void 0===t?void 0:t.inValues))return{inValues:Array.from(new Set([].concat(Object(c.a)((null===e||void 0===e?void 0:e.inValues)||[]),Object(c.a)((null===t||void 0===t?void 0:t.inValues)||[]))))}},T=function(e,t){var r=[{name:e("my_subalterns"),filters:{filter_power:{user:{managedBy:["me"]}}}},{name:e("all_my_subalterns"),filters:{filter_power:{user:{managedByWithHierarchy:["me"]}}}}];return t.length>0&&r.push({name:e("my_entities"),filters:{filter_power:{user:{inGroups:t}}}}),r};t.default=function(){var e,t,r,n,c,E=Object(u.useTranslate)({capitalize:!0}),I=Object(u.useAlert)(),L=Object(g.useAppContext)(),M=L.customFields,D=L.getErrorMessage,A=L.userGroups,P=L.userPreferences,z=L.usersManagedByMe,V=Object(s.useMemo)((function(){return Object(d.c)(M.userFields)}),[M]),B=Object(x.f)({}),W=B.close,q=B.skillId,K=B.userId,U=B.isOpened,H=B.setSkillId,N=B.setUserAndSkillId,Q=Object(g.useFilters)({savedDataFilters:null===P||void 0===P?void 0:P.savedDataFilters,category:g.UserSavedDataFiltersEnum.MyTeamPowers,defaultEntity:"filter_power",defaultSelectedFilterName:z.length>0?E("my_subalterns"):E("my_entities"),entities:["filter_power"],initialStandardFilters:T(E,A),defaultFilter:{filter_power:{user:z.length>0?{managedBy:["me"]}:{inGroups:A}}},mergeFilters:function(e,t){var r,n,i,l;return Object(o.a)(Object(o.a)({},e),{},{filter_power:Object(o.a)(Object(o.a)({},e.filter_power),{},{skill:R(null===(r=e.filter_power)||void 0===r?void 0:r.skill,null===(n=t.filter_power)||void 0===n?void 0:n.skill),validationStatus:_(null===(i=e.filter_power)||void 0===i?void 0:i.validationStatus,null===(l=t.filter_power)||void 0===l?void 0:l.validationStatus)})})}}),G=Q.createAdvancedFilter,Z=Q.dataFilters,Y=Q.deleteAdvancedFilter,J=Q.filterNameToDelete,X=Q.isDeletingAdvancedFilter,$=Q.isOpenedDeleteConfirmModal,ee=Q.localStorageLabel,te=Q.onCloseDeleteConfirmModal,re=Q.openDeleteAdvancedFilterModal,ne=Q.quickFilters,ie=Q.selectedFilter,le=Q.setQuickFilters,ae=Q.setSelectedFilter,oe=Q.standardFilters,ce=Q.updateAdvancedFilter;Object(s.useEffect)((function(){Object(v.setLocalStorage)({label:ee,value:{dataFilters:Z,quickFilters:ne,selectedFilter:ie,standardFilters:oe}})}),[Z,ne,ie,oe]);var se=Object(s.useMemo)((function(){var e,t;return((null===(e=Z.filter_power)||void 0===e||null===(t=e.skill)||void 0===t?void 0:t.inSkills)||[]).length>0}),[Z]),ue=Object(s.useMemo)((function(){var e,t;return((null===(e=Z.filter_power)||void 0===e||null===(t=e.validationStatus)||void 0===t?void 0:t.inValues)||[]).length>0}),[Z]),de=Object(b.usePaginateGraphQLQuery)({query:b.GetMyTeamPowersDocument,variables:{dataFilters:Z.filter_power},pageSize:100,getConnections:function(e){return e.powers}}),fe=de.nodes,pe=de.loading,be=de.isLoadingMore,ve=de.error,me=de.totalCount,Oe=de.loadMore,je=de.fetchMorePromise,ye=de.isRefetching,ge=de.refetch,he=Object(w.c)({onReviewCreated:ge}),xe=he.getValidationSkillIconProps,we=he.isConfirmModalOpened,Ce=he.isLoading,Se=he.onCloseModal,ke=he.onConfirmReviewCreation,Fe=he.valuedQualifierForModal,Re=Object(b.useGetAllQualifiersLazyQuery)(),_e=Object(a.a)(Re,2),Te=_e[0],Ee=_e[1],Ie=Ee.data,Le=Ee.loading;Object(s.useEffect)((function(){Te()}),[]);var Me=Object(s.useMemo)((function(){return w.b}),[]),De=function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:ge();case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ae=function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:ge(),W();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Pe=Object(s.useMemo)((function(){var e=null===Ie||void 0===Ie?void 0:Ie.qualifiers.nodes;if(e)return Object(f.getSortedQualifiersByPriorityAndByName)(e.map((function(e){return Object(b.getFormatedQualifierBasicFragment)(e)})))}),[Ie]),ze=Object(s.useMemo)((function(){return"undefined"!==typeof Pe?S(fe):[]}),[fe,Pe]),Ve=function(e){le({filter_power:Object(o.a)(Object(o.a)({},ne.filter_power),{},{skill:{inSkills:e.length>0?e:void 0}})})},Be=function(e){le({filter_power:Object(o.a)(Object(o.a)({},ne.filter_power),{},{validationStatus:{inValues:e.length>0?e:void 0}})})},We=function(){var e=[{dataKey:"powerId",headerTitle:E("id"),isSortable:!1,columnWidth:Object(d.b)("small"),cellRenderer:function(){return Object(k.jsx)(k.Fragment,{})},xlsCellRenderer:function(e){var t=e.node;return Object(g.xlsStringCell)(t.id)},isExportOnly:!0},{dataKey:"userId",headerTitle:E("user_id"),isSortable:!1,columnWidth:Object(d.b)("small"),cellRenderer:function(){return Object(k.jsx)(k.Fragment,{})},xlsCellRenderer:function(e){var t=e.node;return Object(g.xlsStringCell)(t.user.id)},isExportOnly:!0},{dataKey:"externalId",headerTitle:E("external_id_short"),isSortable:!1,columnWidth:Object(d.b)("small"),cellRenderer:function(){return Object(k.jsx)(k.Fragment,{})},xlsCellRenderer:function(e){var t=e.node;return Object(g.xlsStringCell)(t.user.externalId)},isExportOnly:!0},{dataKey:"familyName",headerTitle:E("user",{smart_count:1}),isSortable:!1,columnWidth:Object(d.b)("large"),cellRenderer:function(e){var t=e.node;return Object(k.jsx)(g.SingleUserCell,{user:t.user,size:"large"})},xlsCellRenderer:function(e){var t=e.node;return"".concat(t.user.familyName," ").concat(t.user.givenName)}},{dataKey:"groups",headerTitle:E("groups"),isSortable:!1,columnWidth:Object(d.b)("small"),cellRenderer:function(){return Object(k.jsx)(k.Fragment,{})},xlsCellRenderer:function(e){var t=e.node;return Object(g.xlsObjectTagCell)(t.user.groups)},isExportOnly:!0}];return V.size>0&&V.forEach((function(t){e.push({dataKey:"customFields.".concat(t._key),headerTitle:t.name,isSortable:!!F.includes(t.field_type),columnWidth:Object(d.b)("large"),cellRenderer:function(e){var r=e.node.user.customFields;return Object.keys(r).includes(t._key)?Object(k.jsx)(g.CustomFieldCell,{field:t,customFields:r,value:r[t._key],size:"large"}):Object(k.jsx)(u.Line,{width:"100%",height:"100%",bg:"grey.0"})},xlsCellRenderer:function(e){var r=e.node;return Object(g.xlsCustomFieldCell)({field:t,value:t._key in(r.user.customFields||{})?r.user.customFields[t._key]:null,translate:E})},isExportOnly:!0})})),e.push.apply(e,[{dataKey:"library",headerTitle:E("library",1),isSortable:!1,isIcon:!0,iconData:{icon:m.a,color:"black",size:20},columnWidth:Object(d.b)("xtraSmall"),cellRenderer:function(e){var t=e.node;return Object(k.jsx)(g.LibraryWithIconCell,{library:t.skill.libraryContext,size:"xtraSmall",isLogoOnly:!0})},xlsCellRenderer:function(e){var t=e.node;return"".concat(t.skill.libraryContext.name)}},{dataKey:"skill",headerTitle:E("skill",1),isSortable:!1,columnWidth:Object(d.b)("large"),cellRenderer:function(e){var t=e.node;return Object(k.jsx)(g.SkillNameWithIconAndDescriptionCell,{skill:{name:t.skill.name,description:t.skill.description},isClickable:!0,onClick:function(){N({userId:t.user.id,skillId:t.skill.id})}})},xlsCellRenderer:function(e){var t=e.node;return"".concat(t.skill.name)}},{dataKey:"skill.description",headerTitle:E("description"),isSortable:!1,columnWidth:Object(d.b)("large"),cellRenderer:function(){return Object(k.jsx)(k.Fragment,{})},xlsCellRenderer:function(e){return e.node.skill.description||"-"},isExportOnly:!0},{dataKey:"updatedAt",headerTitle:E("last_update",{smart_count:1}),isSortable:!1,columnWidth:Object(d.b)("small"),cellRenderer:function(e){var t=e.node;return Object(k.jsx)(g.UpdatedAtCell,{updatedAt:t.updatedAt,size:"small"})},xlsCellRenderer:function(e){var t=e.node;return Object(g.xlsDateCell)(t.updatedAt)}},{dataKey:"description",headerTitle:E("details"),isSortable:!1,columnWidth:Object(d.b)("large"),cellRenderer:function(){return Object(k.jsx)(k.Fragment,{})},xlsCellRenderer:function(e){return e.node.description||"-"},isExportOnly:!0},{dataKey:"appetite",headerTitle:E("appetite",1),isSortable:!1,isIcon:!0,iconData:{icon:O.a,size:30},columnWidth:Object(d.b)("xtraSmall"),cellRenderer:function(e){var t=e.node;return Object(k.jsx)(g.SkillsIconsCell,{icon:"appetite",isActive:t.appetence===b.SkillAppetenceOpinion.Like})},xlsCellRenderer:function(e){return e.node.appetence===b.SkillAppetenceOpinion.Like?E("yes"):E("no")}},{dataKey:"objective",headerTitle:E("objective",1),isSortable:!1,isIcon:!0,iconData:{icon:j.a,size:30},columnWidth:Object(d.b)("xtraSmall"),cellRenderer:function(e){var t=e.node;return Object(k.jsx)(g.SkillsIconsCell,{size:"xtraSmall",icon:"objective",isActive:t.isUpgrade})},xlsCellRenderer:function(e){return e.node.isUpgrade?E("yes"):E("no")}},{dataKey:"upgradeDescription",headerTitle:E("skill_upgrade_comment"),isSortable:!1,columnWidth:Object(d.b)("large"),cellRenderer:function(){return Object(k.jsx)(k.Fragment,{})},xlsCellRenderer:function(e){return e.node.upgradeDescription||"-"},isExportOnly:!0}]),(Pe||[]).forEach((function(t){e.push({dataKey:t.name,headerTitle:t.name,headerDescription:t.description,isSortable:!1,columnWidth:Object(d.a)(t.fieldType),cellRenderer:function(e){var r=e.node,n=r.qualifiers.find((function(e){return e.id===t.id}));if(n){var i=C(r,t.id);return null!==i&&void 0!==i?Object(k.jsx)(h.a,{qualifier:n,value:i}):Object(k.jsx)(g.ShortTextCell,{text:"-",size:Object(d.a)(n.fieldType)})}return Object(k.jsx)(u.Line,{width:"100%",height:"100%",bg:"grey.0"})},xlsCellRenderer:function(e){var r=e.node,n=r.qualifiers.find((function(e){return e.id===t.id}));return"undefined"!==typeof n?Object(g.xlsQualifierCell)({translate:E,qualifier:n,value:C(r,t.id)}):null}},{dataKey:"".concat(t.name,"_validation"),headerTitle:"".concat(E("validated")," ?"),isSortable:!1,isIcon:!0,iconData:{icon:y.a,size:30},columnWidth:Object(d.b)("xtraSmall"),cellRenderer:function(e){var r=e.node,n=function(e,t){var r=((null===e||void 0===e?void 0:e.qualifiers)||[]).flat().find((function(e){return e.id===t}));return!!r&&r.isValidated}(r,t.id),i=r.qualifiers.find((function(e){return e.id===t.id})),l=C(r,t.id);if(i){if(l){var a=!0===n,o=xe({canReview:r.capabilities.canReview,isValidated:a,qualifiers:[{id:i.id,value:l}],skillId:r.skill.id,translate:E,userId:r.user.id,valuedQualifierForModal:{qualifier:i,isValidated:a,value:l}}),c=o.onClick,s=o.tooltipTitle;return Object(k.jsx)(g.SkillsIconsCell,{icon:"validate",isActive:n,isClickable:"function"===typeof c,onClick:c,tooltipTitle:s},"skillsIconCell_".concat(!0===n?"validated":"notValidated"))}return Object(k.jsx)(k.Fragment,{})}return Object(k.jsx)(u.Line,{width:"100%",height:"100%",bg:"grey.0"})},xlsCellRenderer:function(e){var r=e.node.qualifiers.find((function(e){return e.id===t.id}));return r&&r.isValidated?E("yes"):E("no")}})})),e.push({dataKey:"library_name",headerTitle:E("library"),isSortable:!1,columnWidth:Object(d.b)("large"),cellRenderer:function(e){var t=e.node;return Object(k.jsx)(g.LongTextCell,{text:t.skill.libraryContext.name,size:"large"})},xlsCellRenderer:function(e){var t=e.node;return"".concat(t.skill.libraryContext.name)}},{dataKey:"library_category",headerTitle:E("library_category"),isSortable:!1,columnWidth:Object(d.b)("large"),cellRenderer:function(e){var t=e.node;return Object(k.jsx)(g.LongTextCell,{text:t.skill.libraryContext.familyTag,size:"large"})},xlsCellRenderer:function(e){var t=e.node;return"".concat(t.skill.libraryContext.familyTag)}}),e},qe=Object(g.useExportTable)({worksheetName:"Team_Powers_".concat(Object(p.localeMoment)().format("DD.MM.YYYY")),columns:We(),fetchRowsPromise:je,rowsMappingFn:function(e){return S(e.powers.nodes)},pageSize:100,totalRowCount:me,fixedColumnCount:3}),Ke=Object(a.a)(qe,2),Ue=Ke[0],He=Ke[1];return ve&&I.error(D(ve)),Object(k.jsxs)(g.PageLayout,{pb:"0px",pr:"0px",display:"flex",flexDirection:"column",children:[Object(k.jsx)(g.TableToolbox,{totalCount:me,isLoading:pe||Le,quickFilters:[{id:"skill",title:E("skills_title"),type:g.QuickFilterTypes.Skill,initialValue:null===(e=Z.filter_power)||void 0===e||null===(t=e.skill)||void 0===t?void 0:t.inSkills,isSelected:se,onApplyFilter:Ve,onClearFilter:function(){Ve([])}},{id:"validationStatus",title:E("filter_power_validation_status"),type:g.QuickFilterTypes.MultiSelect,elements:Me,value:(null===(r=Z.filter_power)||void 0===r||null===(n=r.validationStatus)||void 0===n?void 0:n.inValues)||[],isSelected:ue,onApplyFilter:Be,onClearFilter:function(){Be([])}}],advancedFilters:{advancedFilters:(null===P||void 0===P||null===(c=P.savedDataFilters)||void 0===c?void 0:c.myTeamPowers)||[],advancedFiltersSchema:[b.PowerUserDataFiltersSchema],subFieldsCustomFieldsSchema:{user:Object(b.getDataFiltersCustomFields)(M.userFields)||[]},standardFilters:oe,selectedFilter:ie,onSelectFilter:ae,onNewFilter:function(e){G(Object(o.a)(Object(o.a)({},e),{},{filters:e.filters[b.PowerUserDataFiltersSchema.entity]}))},onUpdateFilter:function(e){ce(Object(o.a)(Object(o.a)({},e),{},{filters:e.filters[b.PowerUserDataFiltersSchema.entity]}))},onDeleteFilter:function(e){re(e)}},menuActions:[{title:E("export"),onClick:function(){return He()},disabled:Ue}]}),ye&&Object(k.jsx)(u.LoadingOverlay,{}),Object(k.jsx)(g.TableContent,{rows:ze,fixedColumnCount:3,columns:We(),isLoading:pe||Le,isLoadingMore:be,loadMoreRows:function(e){var t=e.startIndex;Oe(t)},noRowsRenderer:function(){return Object(k.jsx)(g.NoDataToDisplay,{})},totalRowCount:me}),Object(k.jsx)(x.c,{userId:K,skillId:q,onChangeSkillId:H,isOpened:U,onClose:W,onPowerUpdated:De,onPowerDeleted:Ae},"UserSkillPanel_".concat(q,"_").concat(K)),Object(k.jsx)(g.DeleteAdvancedFilterConfirmModal,{filterName:J,isOpened:$,onConfirm:function(){Y()},onCancel:te,isLoading:X}),Fe&&Object(k.jsx)(w.a,{isLoading:Ce,isOpened:we,onConfirm:ke,onClose:Se,qualifier:Fe.qualifier,value:Fe.value})]})}},752:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(0),i=["title","titleId"];function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function o(e,t){var r=e.title,o=e.titleId,c=a(e,i);return n.createElement("svg",l({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1000 1000",ref:t,"aria-labelledby":o},c),r?n.createElement("title",{id:o},r):null,n.createElement("path",{d:"M444.144 230.551a40.004 40.004 0 0127.866 68.688L311.398 459.852h473.346a40.148 40.148 0 110 80.289H311.398L472.01 700.754a40.004 40.004 0 11-56.569 56.569L188.916 530.795a40.004 40.004 0 01-11.43-15.74 40.148 40.148 0 010-.002 40.004 40.004 0 01-1.156-3.32 40.148 40.148 0 01-.184-.559 40.004 40.004 0 01-.691-2.898 40.148 40.148 0 01-.023-.098 40.004 40.004 0 01-.112-.469 40.148 40.148 0 01-.105-.51 40.004 40.004 0 01-.283-2.064 40.004 40.004 0 01-.211-1.576 40.148 40.148 0 01-.034-.469 40.004 40.004 0 01-.043-1.074 40.004 40.004 0 01-.085-2.623 40.148 40.148 0 01.006-.12 40.004 40.004 0 01.019-.378 40.004 40.004 0 010-.012 40.004 40.004 0 01.002-.031 40.004 40.004 0 0114.436-29.762l226.42-226.42a40.004 40.004 0 0128.702-12.119z",style:{lineHeight:"normal",textIndent:0,textAlign:"start",textDecorationLine:"none",textDecorationStyle:"solid",textTransform:"none",blockProgression:"tb",whiteSpace:"normal",isolation:"auto",mixBlendMode:"normal",solidOpacity:1},fontWeight:400,fontFamily:"sans-serif",overflow:"visible",fillRule:"evenodd"}))}var c=n.forwardRef(o);r.p},795:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n,i=r(0),l=["title","titleId"];function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function c(e,t){var r=e.title,c=e.titleId,s=o(e,l);return i.createElement("svg",a({viewBox:"0 0 10 16",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":c},s),r?i.createElement("title",{id:c},r):null,n||(n=i.createElement("path",{d:"M2.16667 0L0 2.27368L5.66667 8L0 13.7263L2.16667 16L10 8L2.16667 0Z"})))}var s=i.forwardRef(c);r.p},799:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));r(0);var n=r(14),i=r(1),l=function(e){var t=e.renderHeader,r=e.children;return Object(i.jsxs)(n.Box,{width:"100%",height:"100%",bg:"white",display:"flex",flexDirection:"column",backgroundColor:"white",children:[Object(i.jsx)(n.Box,{flexGrow:0,p:2,children:t()}),Object(i.jsx)(n.Box,{px:2,children:Object(i.jsx)(n.Separator,{width:"100%"})}),Object(i.jsx)(n.Box,{flexGrow:1,overflow:"auto",p:2,width:"100%",children:r})]})}},817:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n,i,l,a=r(0),o=["title","titleId"];function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function u(e,t){var r=e.title,u=e.titleId,d=s(e,o);return a.createElement("svg",c({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 192 192",ref:t,"aria-labelledby":u},d),r?a.createElement("title",{id:u},r):null,n||(n=a.createElement("path",{d:"M54 4H6c-1.1 0-2 .9-2 2v180c0 1.1.9 2 2 2h48c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM16 160h28v16H16v-16zm0-12V44h28v104H16zm0-116V16h28v16H16z"})),i||(i=a.createElement("path",{d:"M186 4h-48c-1.1 0-2 .9-2 2v180c0 1.1.9 2 2 2h48c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-38 156h28v16h-28v-16zm0-12V44h28v104h-28zm0-116V16h28v16h-28z"})),l||(l=a.createElement("path",{d:"M123 38H69c-1.1 0-2 .9-2 2v146c0 1.1.9 2 2 2h54c1.1 0 2-.9 2-2V40c0-1.1-.9-2-2-2zM79 75.1h34v76H79v-76zm34-10H79V50h34v15.1zm-34 98h34V176H79v-12.9z"})))}var d=a.forwardRef(u);r.p},834:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n,i,l=r(0),a=["title","titleId"];function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function s(e,t){var r=e.title,s=e.titleId,u=c(e,a);return l.createElement("svg",o({width:30,height:30,viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":s},u),r?l.createElement("title",{id:s},r):null,n||(n=l.createElement("path",{d:"M0 2C0 0.89543 0.895431 0 2 0H28C29.1046 0 30 0.895431 30 2V28C30 29.1046 29.1046 30 28 30H2C0.89543 30 0 29.1046 0 28V2Z",fill:"#FFEBF0"})),i||(i=l.createElement("path",{d:"M19.6667 6C17.75 6 16.0833 6.85973 15 8.40724C13.9167 6.85973 12.25 6 10.4167 6C7.66667 6 5 7.80543 5 11.4163C5 14.9412 8.5 18.3801 12.8333 22.7647C13.5 23.3665 14.0833 24.0543 14.75 24.7421L15 25L15.25 24.7421C15.9167 24.0543 16.5833 23.4525 17.1667 22.7647C21.5833 18.3801 25 14.9412 25 11.4163C25 7.80543 22.3333 6 19.6667 6Z",fill:"#ED001C"})))}var u=l.forwardRef(s);r.p},835:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n,i,l=r(0),a=["title","titleId"];function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function s(e,t){var r=e.title,s=e.titleId,u=c(e,a);return l.createElement("svg",o({width:30,height:30,viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":s},u),r?l.createElement("title",{id:s},r):null,n||(n=l.createElement("path",{d:"M0 2C0 0.89543 0.895431 0 2 0H28C29.1046 0 30 0.895431 30 2V28C30 29.1046 29.1046 30 28 30H2C0.89543 30 0 29.1046 0 28V2Z",fill:"#62F2D1"})),i||(i=l.createElement("path",{d:"M24.6576 5L9.84571 7.84605C9.79763 7.86422 9.75385 7.89221 9.71716 7.92826C9.68046 7.9643 9.65165 8.0076 9.63257 8.0554C9.61348 8.1032 9.60454 8.15446 9.6063 8.20592C9.60807 8.25737 9.6205 8.30789 9.64281 8.35427L13.9038 12.6233L5.0775 21.4664C5.02759 21.5223 5 21.5947 5 21.6697C5 21.7447 5.02759 21.8171 5.0775 21.873L8.12104 24.9224C8.17684 24.9724 8.24908 25 8.32394 25C8.39881 25 8.47105 24.9724 8.52685 24.9224L17.3531 16.0793L21.6141 20.3483C21.6518 20.3973 21.7045 20.4325 21.7641 20.4488C21.8237 20.4651 21.8869 20.4614 21.9442 20.4385C22.0016 20.4155 22.0499 20.3744 22.0818 20.3215C22.1138 20.2685 22.1276 20.2066 22.1213 20.1451L24.962 5.30493C25.0634 5.10164 24.962 5 24.6576 5Z",fill:"#030E2D"})))}var u=l.forwardRef(s);r.p}}]);