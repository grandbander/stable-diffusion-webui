"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[50],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(n),h=r,f=c["".concat(l,".").concat(h)]||c[h]||p[h]||a;return n?o.createElement(f,i(i({ref:t},d),{},{components:n})):o.createElement(f,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9756:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var o=n(7462),r=(n(7294),n(3905));const a={title:"Post Processing"},i=void 0,s={unversionedId:"post-processing",id:"post-processing",title:"Post Processing",description:"\x3c!--",source:"@site/docs/4.post-processing.md",sourceDirName:".",slug:"/post-processing",permalink:"/sygil-webui/docs/post-processing",draft:!1,editUrl:"https://github.com/Sygil-Dev/sygil-webui/tree/main/docs/4.post-processing.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Post Processing"},sidebar:"tutorialSidebar",previous:{title:"Gradio Web UI Interface",permalink:"/sygil-webui/docs/Gradio/gradio-interface"},next:{title:"SD Concepts Library",permalink:"/sygil-webui/docs/concepts-library"}},l={},u=[{value:"GFPGAN",id:"gfpgan",level:2},{value:"RealESRGAN",id:"realesrgan",level:2},{value:"GoBig (Gradio only currently)",id:"gobig-gradio-only-currently",level:2},{value:"Latent Diffusion Super Resolution - LSDR (Gradio only currently)",id:"latent-diffusion-super-resolution---lsdr-gradio-only-currently",level:2},{value:"GoLatent (Gradio only currently)",id:"golatent-gradio-only-currently",level:2},{value:"Future Additions",id:"future-additions",level:2}],d={toc:u};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Included with both versions of the Web UI Interface are a series of image restorers and upscalers. They are included to help users create outputs with restored features, such as better faces, or at larger resolutions than Stable Diffusion is able to natively output."),(0,r.kt)("h2",{id:"gfpgan"},"GFPGAN"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(3854).Z,width:"1024",height:"768"})),(0,r.kt)("p",null,"GFPGAN is designed to help restore faces in Stable Diffusion outputs. If you have ever tried to generate images with people in them, you know why having a face restorer can come in handy. This is where GFPGAN comes in handy. It uses it's own GAN to detect and restore the faces of subjects within an image. It greatly helps to enhance the details in human faces, while also fixing issues with asymmetry or awkward looking eyes."),(0,r.kt)("p",null,"If you want to use GFPGAN to improve generated faces, you need to download the models for it separately if you are on Windows or doing so manually on Linux.\nDownload ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/TencentARC/GFPGAN/releases/download/v1.3.0/GFPGANv1.3.pth"},"GFPGANv1.3.pth")," and put it\ninto the ",(0,r.kt)("inlineCode",{parentName:"p"},"/sygil-webui/models/gfpgan")," directory after you have setup the conda environment for the first time."),(0,r.kt)("h2",{id:"realesrgan"},"RealESRGAN"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(2166).Z,width:"2048",height:"1024"})),(0,r.kt)("p",null,"RealESRGAN is a 4x upscaler built into both versions of the Web UI interface. It uses its own GAN to upscale images while retaining details of an image. Two different versions of RealESRGAN can be used, ",(0,r.kt)("inlineCode",{parentName:"p"},"RealESRGAN 4X")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"RealESRGAN 4X Anime"),". Despite the name, don't hesitate to try either version when upscaling an image to see which works best for a given output."),(0,r.kt)("p",null,"If you want to use RealESRGAN to upscale your images, you need to download the models for it separately if you are on Windows or doing so manually on Linux.\nDownload ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/xinntao/Real-ESRGAN/releases/download/v0.1.0/RealESRGAN_x4plus.pth"},"RealESRGAN_x4plus.pth")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/xinntao/Real-ESRGAN/releases/download/v0.2.2.4/RealESRGAN_x4plus_anime_6B.pth"},"RealESRGAN_x4plus_anime_6B.pth"),".\nPut them into the ",(0,r.kt)("inlineCode",{parentName:"p"},"sygil-webui/models/realesrgan")," directory after you have setup the conda environment for the first time."),(0,r.kt)("h2",{id:"gobig-gradio-only-currently"},"GoBig (Gradio only currently)"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"GoBig is a 2X upscaler that uses RealESRGAN to upscale the image and then slice it into small parts, each part gets diffused further by SD to create more details, great for adding and increasing details but will change the composition, might also fix issues like eyes etc. The settings are similar to Image2Image, with regards to strength and seed of the generation."),(0,r.kt)("p",null,"To use GoBig, you will need to download the RealESRGAN models as directed above."),(0,r.kt)("h2",{id:"latent-diffusion-super-resolution---lsdr-gradio-only-currently"},"Latent Diffusion Super Resolution - LSDR (Gradio only currently)"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"LSDR is a 4X upscaler with high VRAM usage that uses a Latent Diffusion model to upscale the image. This will accentuate the details of an image, but won't change the composition. This might introduce sharpening, but it is great for textures or compositions with plenty of details. However, it is slower and will use more VRAM."),(0,r.kt)("p",null,"If you want to use LSDR to upscale your images, you need to download the models for it separately if you are on Windows or doing so manually on Linux.\nDownload the LDSR ",(0,r.kt)("a",{parentName:"p",href:"https://heibox.uni-heidelberg.de/f/31a76b13ea27482981b4/?dl=1"},"project.yaml")," and ",(0,r.kt)("a",{parentName:"p",href:"https://heibox.uni-heidelberg.de/f/578df07c8fc04ffbadf3/?dl=1"}," model last.cpkt"),". Rename ",(0,r.kt)("inlineCode",{parentName:"p"},"last.ckpt")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"model.ckpt")," and place both in the ",(0,r.kt)("inlineCode",{parentName:"p"},"sygil-webui/models/ldsr")," directory after you have setup the conda environment for the first time.  "),(0,r.kt)("h2",{id:"golatent-gradio-only-currently"},"GoLatent (Gradio only currently)"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"GoLatent is an 8X upscaler with high VRAM usage. It uses GoBig to add details and then uses a Latent Diffusion (LSDR) model to upscale the image. This will result in less artifacts and sharpening. Use the settings to feed GoBig settings that will contribute to the result. Please note, this mode is considerably slower and uses significantly more VRAM."),(0,r.kt)("p",null,"To use GoLatent, you will need to download the appropriate LSDR models as described above."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"future-additions"},"Future Additions"),(0,r.kt)("p",null,"Currently, these are the 4 main enhancers and upscalers used in the project, but more may be implemented in the future. Stay Tuned!"))}p.isMDXComponent=!0},3854:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/GFPGAN-9909322f78ae9e67efff221c5459b6b5.png"},2166:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/RealESRGAN-7820b3dda15d2ba05435ab9789b625f4.png"}}]);