import React from "react"
import { InputProps } from "./input.type"



const Input = React.forwardRef<HTMLInputElement, InputProps>(({
    label,
    name,
    type,
    placeholder,
    disabled
}) => {
    return(
    <div className="mt-2">
            <label className="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            {label}
            </span>
            <input 
                type={type}
                name={name}
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" 
                placeholder={placeholder} 
                disabled={disabled}
                />
            </label>
    </div>
    )
})

export default Input