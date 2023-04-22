import React, { ReactNode } from 'react'

const baseStyle =
  'text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800'
interface ITableHeader {
  children: ReactNode
  newStyle?: string
}
export default function TableHeader({ children, newStyle }: ITableHeader) {
  return <thead className={`${baseStyle} ${newStyle}`}>{children}</thead>
}
