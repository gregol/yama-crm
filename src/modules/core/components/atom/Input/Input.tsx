import { FC, InputHTMLAttributes, ReactNode } from 'react'
import { FieldError, RegisterOptions, UseFormRegister } from 'react-hook-form'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  register?: UseFormRegister<any>
  label?: string
  validation?: RegisterOptions
  error?: FieldError
  Icon?: ReactNode
}

const Input: FC<InputProps> = ({ label, register, validation, error, Icon, ...props }) => {
  return (
    <div className='mb-0'>
      {label && (
        <label className='block text-gray-200 font-bold mb-2' htmlFor={props.id}>
          {label}
        </label>
      )}
      <div className='relative'>
        {register ? (
          <>
            <input
              className={`${
                error ? 'border-red-500' : ''
              } shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline`}
              id={props.id}
              type={props.type}
              placeholder={props.placeholder}
              //@ts-ignore
              {...register(props.name, validation)}
            />
            {error && <span className='text-red-500 text-sm'>{error.message}</span>}
          </>
        ) : (
          <input
            className={`${
              error ? 'border-red-500' : ''
            } shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline`}
            id={props.id}
            type={props.type}
            placeholder={props.placeholder}
          />
        )}
        {Icon && Icon}
      </div>
    </div>
  )
}

export default Input
