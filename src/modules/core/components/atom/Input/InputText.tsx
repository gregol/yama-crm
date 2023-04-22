import { useState } from "react"

interface IInputText {
    labelTitle: string,
    inputId: string,
    updateFormValue: (obj: object) => void,
    updateType: any,
    type?: string,
    labelStyle?: string,
    containerStyle?: string,
    defaultValue?: string  | null,
    placeholder?: string,
}
function InputText({labelTitle,inputId,  labelStyle, type, containerStyle, defaultValue, placeholder, updateFormValue, updateType}: IInputText){

    const [value, setValue] = useState<string | null | undefined>(defaultValue)
    const updateInputValue = (val: string) => {
        setValue(val)
        updateFormValue({updateType, value : val})
    }

    return(
        <div className={`form-control w-full ${containerStyle}`}>
            <label className="label">
                <span className={"label-text text-base-content " + labelStyle}>{labelTitle}</span>
            </label>
            <input id={inputId} type={type || "text"} placeholder={placeholder || ""} onChange={(e) => updateInputValue(e.target.value)}className="input  input-bordered w-full " />
        </div>
    )
}


export default InputText