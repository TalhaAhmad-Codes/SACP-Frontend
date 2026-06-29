import FormHeader from "@shared/components/FormHeader";
import { useForm } from "react-hook-form";
import InputField from "@shared/components/InputField";
import Button from "@shared/components/Button";
import PasswordInput from "@shared/components/PasswordInput";

const RightLoginContent = ({ onNavigate }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("Logged in with:", data);
  };

  return (
    <div className="h-screen flex flex-col flex-1 ">
      <FormHeader />

      <div className="flex flex-1 justify-center items-center ">
        <div className="w-full px-6 max-w-md space-y-6">
          <div>

          <h1 className="main-heading-2 leading-tight ">
            Welcome
          </h1>
          <p className="font-medium ">
            Login to your academic workspace
          </p>
          </div>

          <form
            className="flex flex-col space-y-6"
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

          <div className="flex justify-center items-center space-x-2 mt-7 md:mt-10">
            <p className="text-center">
              Don't have an account?
            </p>
            <p
              onClick={onNavigate}
              className=" font-semibold cursor-pointer hover:underline hover:text-blue-600 transition-colors duration-200"
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