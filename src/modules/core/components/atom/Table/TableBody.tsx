import React, { ReactNode } from 'react'

const baseStyle = 'bg-white divide-y dark:divide-gray-700 dark:bg-gray-800 text-gray-700 dark:text-gray-400'

interface ITableBody {
  children: ReactNode
  newStyle?: string
}
export default function TableBody({ children, newStyle }: ITableBody) {
  return <tbody className={`${baseStyle} ${newStyle}`}>{children}</tbody>
}
