import InputField from "../../../../shared/components/InputField"
import {motion} from 'framer-motion';
import PasswordInput from "../../../../shared/components/PasswordInput";
const Student = ({register}) => {
  return (
    <div className="flex flex-col gap-5">
        <InputField
            label={"Username"}
            placeholder={"Name RollNo"}
            name={"username"}
            id={"username"}
            type={"text"}
            register={register}
        />
        <div className="flex flex-col gap-5 w-full md:flex-row">
        <motion.div className="w-full flex flex-col gap-3"
           initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeIn" }}>

        <label for="department">Degree/Certificate</label>
  
    <select
  
    id="degree" name="degree"               className="outline-none px-4 py-4 border border-input-border text-gray-400"
>
      <option value="" disabled selected>Select Degree/Certificate</option>
      <option value="BS"></option>
      <option value="engineering"></option>
      <option value="marketing"></option>
    </select>
    </motion.div>
        <InputField
            label={"Registeration Number"}
            placeholder={"e.g. STU-2024-892"}
            name={"registeration number"}
            id={"registeration number"}
            type={"text"}
            register={register}
        />
        </div>
        <InputField
            label={"Institution Email"}
            placeholder={"student@university.edu"}
            name={"student email"}
            id={"student email"}
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

export default Student