 import SACP_Logo from "../../assets/SACP_LOGO.svg"  
const FormHeader = () => {
  return (
     <div className="w-full p-6 lg:relative bg-Page-background ">
       <img src={SACP_Logo} alt="SACP Logo" className="h-8 lg:h-12 absolute left-7 lg:left-5 top-6  lg:top-8 "/>
       <p className="text-2xl font-login-page font-bold absolute left-18 top-6 lg:left-23 lg:top-9 lg:text-3xl">SACP</p>

    </div>
  )
}

export default FormHeader;