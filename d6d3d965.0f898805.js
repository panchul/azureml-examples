(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{105:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),l=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=l(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(a),b=r,d=u["".concat(c,".").concat(b)]||u[b]||m[b]||o;return a?n.a.createElement(d,i(i({ref:t},p),{},{components:a})):n.a.createElement(d,i({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=a[p];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},93:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return l}));var r=a(2),n=a(6),o=(a(0),a(105)),c={title:"Installation",description:"Guide to installing Azure ML Python SDK and setting up key resources.",keywords:["azureml-sdk","installation","workspace","compute","cpu","gpu"]},i={unversionedId:"cheatsheet/installation",id:"cheatsheet/installation",isDocsHomePage:!1,title:"Installation",description:"Guide to installing Azure ML Python SDK and setting up key resources.",source:"@site/docs/cheatsheet/installation.md",slug:"/cheatsheet/installation",permalink:"/azureml-examples/docs/cheatsheet/installation",editUrl:"https://github.com/Azure/azureml-examples/tree/main/website/docs/cheatsheet/installation.md",version:"current",sidebar:"mainSidebar",previous:{title:"Cheat Sheet",permalink:"/azureml-examples/docs/cheatsheet/"},next:{title:"Workspace",permalink:"/azureml-examples/docs/cheatsheet/workspace"}},s=[{value:"Create Workspace",id:"create-workspace",children:[]},{value:"Create Compute Target",id:"create-compute-target",children:[]}],p={rightToc:s};function l(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Install the Azure ML Python SDK:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-console"}),"pip install azureml-sdk\n")),Object(o.b)("h3",{id:"create-workspace"},"Create Workspace"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"from azureml.core import Workspace\n\nws = Workspace.create(name='<my_workspace_name>', # provide a name for your workspace\n                      subscription_id='<azure-subscription-id>', # provide your subscription ID\n                      resource_group='<myresourcegroup>', # provide a resource group name\n                      create_resource_group=True,\n                      location='<NAME_OF_REGION>') # e.g. 'westeurope' or 'eastus2' or 'westus2' or 'southeastasia'.\n\n# write out the workspace details to a configuration file: .azureml/config.json\nws.write_config(path='.azureml')\n")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"You can easily access this later with"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"from azureml.core import Workspace\nws = Workspace.from_config()\n")))),Object(o.b)("h3",{id:"create-compute-target"},"Create Compute Target"),Object(o.b)("p",null,"The following example creates a compute target in your workspace with:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"VM type: CPU"),Object(o.b)("li",{parentName:"ul"},"VM size: STANDARD_D2_V2"),Object(o.b)("li",{parentName:"ul"},"Cluster size: up to 4 nodes"),Object(o.b)("li",{parentName:"ul"},"Idle time: 2400s before the node scales down automatically")),Object(o.b)("p",null,"Modify this code to update to GPU, or to change the SKU of your VMs."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"from azureml.core import Workspace\nfrom azureml.core.compute import ComputeTarget, AmlCompute\nfrom azureml.core.compute_target import ComputeTargetException\n\nws = Workspace.from_config() # automatically looks for a directory .azureml/\n\n# name for your cluster\ncpu_cluster_name = \"cpu-cluster\"\n\ntry:\n    # check if cluster already exists\n    cpu_cluster = ComputeTarget(workspace=ws, name=cpu_cluster_name)\n    print('Found existing cluster, use it.')\nexcept ComputeTargetException:\n    # if not, create it\n    compute_config = AmlCompute.provisioning_configuration(\n        vm_size='STANDARD_D2_V2',\n        max_nodes=4, \n        idle_seconds_before_scaledown=2400,)\n    cpu_cluster = ComputeTarget.create(ws, cpu_cluster_name, compute_config)\n    cpu_cluster.wait_for_completion(show_output=True)\n")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"You can access this later with"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"from azureml.core import ComputeTarget\ncpu_cluster = ComputeTarget(ws, 'cpu-cluster')\n")))))}l.isMDXComponent=!0}}]);