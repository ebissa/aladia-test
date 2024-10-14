import{_,l as n,m as i,q as s,x as u,G as T,H as V,F as m,s as a,t as c,I as x,J as w,v as L}from"./D0y9BMc6.js";import{a as b,_ as g}from"./D2mLuD72.js";const U={name:"HeaderComponent"};function B(r,e,p,f,t,o){return n(),i("div",{class:"next-icon flex h-8 scale-100 cursor-pointer items-center justify-center gap-2 pb-4 transition-all active:scale-95",onClick:e[0]||(e[0]=d=>r.$emit("back"))},e[1]||(e[1]=[s("div",{class:"inline-flex items-center justify-center pt-0.5 rotate-180"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"octicon arrow-symbol-mktg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none"},[s("path",{fill:"currentColor",d:"M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"}),s("path",{class:"octicon-chevrow-stem",stroke:"currentColor",d:"M1.75 8H11","stroke-width":"1.5","stroke-linecap":"round"})])],-1),u(" Back to Log in ")]))}const y=_(U,[["render",B]]),F={name:"ProfilePictureComponent",props:{profilePicture:{type:String,default:"https://develop.aladia.io/_nuxt/image.ChQ3biW9.png"}},computed:{computedProfilePicture(){return this.profilePicture||"https://develop.aladia.io/_nuxt/image.ChQ3biW9.png"}},methods:{onFileChange(r){const e=r.target.files[0];if(e){const p=new FileReader;p.onload=f=>{this.$emit("update:profilePicture",f.target.result)},p.readAsDataURL(e)}}}},S={class:"mb-4 flex w-full items-end gap-6 px-4"},K={class:"relative h-24 w-24 rounded border transition-all border-gray-300 hover:border-gray-400"},M=["src"];function j(r,e,p,f,t,o){return n(),i("div",S,[s("div",K,[e[1]||(e[1]=s("div",{class:"gradient absolute inset-0 opacity-20"},null,-1)),s("img",{class:"absolute inset-0 h-full w-full rounded object-cover",src:o.computedProfilePicture},null,8,M),e[2]||(e[2]=s("div",{class:"absolute inset-0 flex items-end justify-center pb-4"},null,-1)),s("input",{type:"file",accept:"image/*",onChange:e[0]||(e[0]=(...d)=>o.onFileChange&&o.onFileChange(...d)),class:"absolute inset-0 opacity-0"},null,32)]),e[3]||(e[3]=s("div",null,[s("div",{class:"mb-1 text-sm font-semibold"},"Nice to meet you,"),s("div",{class:"text-xs text-gray-600"},[u(" Upload a profile picture "),s("br"),u(" and complete your "),s("br"),u(" presentation ")])],-1))])}const P=_(F,[["render",j]]),N={name:"TermsCheckboxComponent",data(){return{acceptedTerms:!1}},methods:{emitTermsAccepted(){this.$emit("update:acceptedTerms",this.acceptedTerms)}}},A={class:"mb-4 flex items-center gap-2"},q={class:"flex h-4 w-4 cursor-pointer items-center justify-center rounded border transition-all border-gray-400 hover:border-gray-500"},H={class:"flex h-4 w-4 items-center justify-center rounded border border-gray-400 bg-black"},I={key:0,class:"fa-solid fa-check text-sm text-white"};function Z(r,e,p,f,t,o){return n(),i("div",A,[s("label",q,[T(s("input",{type:"checkbox","onUpdate:modelValue":e[0]||(e[0]=d=>t.acceptedTerms=d),class:"opacity-0 absolute h-4 w-4",onChange:e[1]||(e[1]=(...d)=>o.emitTermsAccepted&&o.emitTermsAccepted(...d))},null,544),[[V,t.acceptedTerms]]),s("span",H,[t.acceptedTerms?(n(),i("i",I)):m("",!0)])]),e[2]||(e[2]=s("div",{class:"text-xs text-gray-600"},[u(" I accept "),s("span",{class:"underline"},"Terms & Conditions"),u(" and "),s("span",{class:"underline"},"Privacy Policy")],-1))])}const v=_(N,[["render",Z]]),D={components:{HeaderComponent:y,ProfilePictureComponent:P,TermsCheckboxComponent:v,InputFieldComponent:b,ButtonComponent:g},data(){return{profilePicture:"",acceptedTerms:!1,name:"",surname:"",email:"",password:"",confirmPassword:"",profilePictureError:"",termsError:"",nameError:"",surnameError:"",emailError:"",passwordError:"",confirmPasswordError:""}},methods:{handleBack(){this.$router.push({name:"login"})},updateProfilePicture(r){this.profilePicture=r},updateAcceptedTerms(r){this.acceptedTerms=r},validateEmail(r){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r)},validateForm(){let r=!0;return this.acceptedTerms?this.termsError="":(this.termsError="You must accept the terms and conditions",r=!1),this.name?this.nameError="":(this.nameError="Name is required",r=!1),this.surname?this.surnameError="":(this.surnameError="Surname is required",r=!1),this.email?this.validateEmail(this.email)?this.emailError="":(this.emailError="Invalid email format",r=!1):(this.emailError="Email is required",r=!1),this.password?this.password.length<6?(this.passwordError="Password must be at least 6 characters long",r=!1):this.passwordError="":(this.passwordError="Password is required",r=!1),this.confirmPassword!==this.password?(this.confirmPasswordError="Passwords do not match",r=!1):this.confirmPasswordError="",console.log("Form validation result:",r),r},handleSubmit(){console.log("Submit button clicked"),this.validateForm()?(console.log("Form submitted with:",{name:this.name,surname:this.surname,email:this.email,password:this.password}),this.$router.push({name:"welcome"})):console.log("Validation errors found")}}},Q={class:"flex justify-center items-center h-screen bg-black"},R={class:"relative z-10 w-full max-w-md p-5 bg-black border border-white rounded-lg shadow-lg"},W={class:"flex flex-col items-center px-4"},z={key:0,class:"text-red-500 text-sm"},G={key:1,class:"text-red-500 text-sm"},J={key:2,class:"text-red-500 text-sm"},Y={key:3,class:"text-red-500 text-sm"},O={key:4,class:"text-red-500 text-sm"},X={key:5,class:"text-red-500 text-sm"},$={key:6,class:"text-red-500 text-sm"};function ee(r,e,p,f,t,o){const d=y,C=P,E=v,h=b,k=g;return n(),i("div",Q,[s("div",R,[a(d,{onBack:o.handleBack},null,8,["onBack"]),s("div",W,[a(C,{profilePicture:t.profilePicture,"onUpdate:profilePicture":o.updateProfilePicture},null,8,["profilePicture","onUpdate:profilePicture"]),t.profilePictureError?(n(),i("p",z,c(t.profilePictureError),1)):m("",!0),a(E,{"onUpdate:acceptedTerms":o.updateAcceptedTerms},null,8,["onUpdate:acceptedTerms"]),t.termsError?(n(),i("p",G,c(t.termsError),1)):m("",!0),e[6]||(e[6]=s("div",{class:"mb-4 text-center text-xs"},"Enter your details",-1)),a(h,{placeholder:"Name",iconClass:"fa-solid fa-user text-base text-gray-500",modelValue:t.name,"onUpdate:modelValue":e[0]||(e[0]=l=>t.name=l),onKeydown:x(w(o.handleSubmit,["prevent"]),["enter"])},null,8,["modelValue","onKeydown"]),t.nameError?(n(),i("p",J,c(t.nameError),1)):m("",!0),a(h,{placeholder:"Surname",iconClass:"fa-solid fa-user text-base text-gray-500",modelValue:t.surname,"onUpdate:modelValue":e[1]||(e[1]=l=>t.surname=l),onKeydown:x(w(o.handleSubmit,["prevent"]),["enter"])},null,8,["modelValue","onKeydown"]),t.surnameError?(n(),i("p",Y,c(t.surnameError),1)):m("",!0),a(h,{placeholder:"Email",iconClass:"fa-solid fa-envelope text-base text-gray-500",inputType:"text",modelValue:t.email,"onUpdate:modelValue":e[2]||(e[2]=l=>t.email=l)},null,8,["modelValue"]),t.emailError?(n(),i("p",O,c(t.emailError),1)):m("",!0),a(h,{placeholder:"Password",iconClass:"fa-solid fa-lock text-base text-gray-500",inputType:"password",modelValue:t.password,"onUpdate:modelValue":e[3]||(e[3]=l=>t.password=l),showToggle:!0,onKeydown:x(w(o.handleSubmit,["prevent"]),["enter"])},null,8,["modelValue","onKeydown"]),t.passwordError?(n(),i("p",X,c(t.passwordError),1)):m("",!0),a(h,{placeholder:"Confirm Password",iconClass:"fa-solid fa-lock text-base text-gray-500",inputType:"password",modelValue:t.confirmPassword,"onUpdate:modelValue":e[4]||(e[4]=l=>t.confirmPassword=l),showToggle:!0,onKeydown:x(w(o.handleSubmit,["prevent"]),["enter"])},null,8,["modelValue","onKeydown"]),t.confirmPasswordError?(n(),i("p",$,c(t.confirmPasswordError),1)):m("",!0),a(k,{onClick:o.handleSubmit},{default:L(()=>e[5]||(e[5]=[u("Enter")])),_:1},8,["onClick"])])])])}const se=_(D,[["render",ee]]);export{se as default};
