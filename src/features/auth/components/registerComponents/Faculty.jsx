import InputField from "../../../../shared/components/InputField"
import {motion} from "framer-motion"
import PasswordInput from "../../../../shared/components/PasswordInput";
const Faculty = ({register}) => {
  return (
    <div className="flex flex-col gap-5">
     <div className="flex flex-col gap-5 w-full md:flex-row">

        <InputField
            label={"Username"}
            placeholder={"e.g. admin_name"}
            name={"username"}
            id={"username"}
            type={"text"}
            register={register}
        />
        <InputField
            label={"Email Address"}
            placeholder={"academic@university.edu"}
            name={"admin email"}
            id={"admin-email"}
            type={"email"}
            register={register}
        />
        </div>
        
        <div className="flex flex-col gap-5 w-full md:flex-row ">
       <motion.div className="w-full flex flex-col gap-3 p-1 "
          initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeIn" }}>

        <label for="department">Department</label>
  
    <select id="department" name="department"               className=" px-4 py-4 border border-input-border focus:ring-2  focus:ring-blue-800 foucs:border-blue-800 outline-none  text-gray-400 "

>
      <option value="" disabled selected>Select Department</option>
      <option value="hr" className="selection:bg-gray-100 hover:cursor-pointer ">Human Resources</option>
      <option value="engineering">Engineering</option>
      <option value="marketing">Marketing</option>
    </select>
    </motion.div>
        <InputField
            label={"Role Title"}
            placeholder={"e.g. Associate Professor"}
            name={"role-title"}
            id={"role-title"}
            type={"text"}
            text={"(Optional)"}
            register={register}
        />
        </div>
        <InputField
            label={"Access Code"}
            placeholder={"Enter alphanumeric code"}
            name={"access code"}
            id={"access-code"}
            type={"text"}
            text={"(Given by Admin)"}
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

export default Faculty;