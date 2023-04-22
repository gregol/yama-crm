import { FC, ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'danger'
  Icon?: ReactNode
  iconPosition?: 'left' | 'right'
}

const ButtonAtom: FC<ButtonProps> = ({
  children,
  variant = 'primary',
  Icon,
  iconPosition = 'left',
  className = '',
  ...props
}) => {
  const baseStyle =
    'p-2 w-24 inline-flex items-center justify-center font-medium rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2'
  let bgColor = ''
  let textColor = ''
  switch (variant) {
    case 'primary':
      bgColor = 'bg-primary hover:bg-secondary'
      textColor = 'text-white'
      break
    case 'secondary':
      bgColor = 'bg-gray-300 hover:bg-gray-400'
      textColor = 'text-gray-700'
      break
    case 'danger':
      bgColor = 'bg-red-600 hover:bg-red-700'
      textColor = 'text-white'
      break
    default:
      break
  }

  return (
    <button className={`${baseStyle} ${bgColor} ${textColor} ${className}`} {...props}>
      {Icon && iconPosition === 'left' && Icon }
      {children}
      {Icon && iconPosition === 'right' && Icon}
    </button>
  )
}

export default ButtonAtom
