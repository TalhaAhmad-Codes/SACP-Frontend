//  import SACP_Logo from "@assets/SACP_LOGO.svg"
import logo from "@assets/sacpLogo.png";

const TopLogo = () => {
  return (
    <div className="flex flex-col w-max justify-center items-center space-y-1">
      <img
        src={logo}
        alt="SACP Logo"
        className="h-18 w-15 drop-shadow-md drop-shadow-accent/20"
      />
      <p className="font-semibold text-shadow-md text-shadow-blue-400/30 text-blue-900 text-3xl">
        SACP
      </p>
    </div>
  );
};

export default TopLogo;
