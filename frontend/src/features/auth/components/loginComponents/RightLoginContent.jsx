import FormHeader from "../../../../shared/components/FormHeader";
import { useForm } from "react-hook-form";
import InputField from "../../../../shared/components/InputField";
import Button from "../../../../shared/components/Button";
import PasswordInput from "../../../../shared/components/PasswordInput";

const RightLoginContent = ({ onNavigate }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("Logged in with:", data);
  };

  return (
    <div className="h-screen flex flex-col flex-1">
      <FormHeader />

      <div className="flex flex-1 justify-center items-center font-login-page Login-Form-Container">
        <div className="w-full px-6 max-w-md">
          <h1 className="text-4xl md:text-5xl text-Login-Heading mb-2 font-bold leading-tight">
            Welcome
          </h1>
          <p className="text-base md:text-xl text-Login-Text">
            Login to your academic workspace
          </p>

          <form
            className="flex flex-col gap-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <InputField
              label="Email Address"
              id="email"
              name="email"
              type="email"
              placeholder="student@university.edu"
              register={register}
            />
            <PasswordInput
              label="Password"
              register={register}
            />

            <Button label="Login" />
          </form>

          <div className="flex justify-center items-center gap-2 mt-7 md:mt-10">
            <p className="text-center text-Login-Text text-sm">
              Don't have an account?
            </p>
            <p
              onClick={onNavigate}
              className="text-Login-Register-Link font-semibold cursor-pointer hover:underline hover:text-blue-600 transition-colors duration-200"
            >
              Register here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightLoginContent;