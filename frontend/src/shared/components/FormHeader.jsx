 import SACP_Logo from "../../assets/SACP_LOGO.svg"  
const FormHeader = () => {
  return (
     <div className="w-full p-6 lg:relative bg-Page-background FormHeader-Sticky">
       <img src={SACP_Logo} alt="SACP Logo" className="h-8 lg:h-12"/>
       <p className="text-2xl font-login-page font-bold absolute left-18 top-6 lg:left-23 lg:top-8 lg:text-3xl">SACP</p>

    </div>
  )
}

export default FormHeader;