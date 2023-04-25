import { FieldError, RegisterOptions, UseFormRegister } from "react-hook-form";

interface TextInputFieldProps {
  name: string;
  label: string;
  register: UseFormRegister<any>;
  registerOptions?: RegisterOptions;
  error?: FieldError;
  [x: string]: any;
}

export default function TextInputField({
  name,
  label,
  register,
  registerOptions,
  error,
  ...props
}: TextInputFieldProps) {
  return (
    <div className="flex min-h-[106px] w-full  gap-2 flex-col">
      <label className=" font-medium text-[15px] text-blue-900">{label}</label>
      <input
        className=" placeholder:text-[#CCCCCC]  font-secondary font-bold text-blue-950 rounded-[6px] outline-purple-950  border-[#CCCCCC] border w-[500px] max-w-full p-2 bg-white"
        {...props}
        {...register(name, registerOptions)}
      />
    </div>
  );
}
