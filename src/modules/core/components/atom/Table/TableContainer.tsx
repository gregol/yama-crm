import React, { ReactNode } from 'react'

const baseStyle = 'px-4 py-3'

interface ITableFooter {
  children: ReactNode
  newStyle?: string
}
export default function TableContainer({ children, newStyle }: ITableFooter) {
  return <div className={`${baseStyle} ${newStyle}`}>{children}</div>
}
