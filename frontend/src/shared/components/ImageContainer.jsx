import Login_Illustration from "../../assets/Login_Illustration.png";
import image from "../../assets/SignUp_Illustration.png";

export const ImageContainer = () => {
  return (
    // <div className="h-full w-full hidden lg:block bg-Page-background">
      <img 
        src={Login_Illustration} 
        alt="Login Illustration" 
        className="outline-none border-none w-full h-screen" 
      />
    // </div>
  );
};

export const ImageContainer2 = () => {
  return (
    // <div className="h-full w-full hidden lg:block bg-Page-background">
      <img 
        src={image} 
        alt="Register Illustration" 
        className="outline-none border-none h-screen w-full bg-Page-background image2" 
      />
    // </div>
  );
};

export default ImageContainer;