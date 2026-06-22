import InputField from "../../../../shared/components/InputField"
import PasswordInput from "../../../../shared/components/PasswordInput";
const Admin = ({register}) => {
  return (
    <div className="flex flex-col gap-5">
        <InputField
            label={"Username"}
            placeholder={"e.g. admin_name"}
            name={"username"}
            id={"username"}
            type={"text"}
            register={register}
        />
        <InputField
            label={"Organization Name"}
            placeholder={"e.g. Univarsity of Punjab "}
            name={"organization name"}
            id={"organization name"}
            type={"text"}
            register={register}
        />
        
        <InputField
            label={"Email Address"}
            placeholder={"admin@university.edu"}
            name={"admin email"}
            id={"admin email"}
            type={"email"}
            register={register}
        />
        
        <div className="flex flex-col gap-5 w-full md:flex-row">
       <PasswordInput
              label="Password"
              register={register}
            />
        <PasswordInput
            label={"Confirm Password"}
            
            register={register}
        />
        </div>
    </div>
  )
}

export default Admin;