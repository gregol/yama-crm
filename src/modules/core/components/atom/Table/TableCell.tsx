import React, { ReactNode } from 'react'

const baseStyle = 'px-4 py-3'

interface ITableCell {
  children: ReactNode
  newStyle?: string
}
export default function TableCell({ children, newStyle }: ITableCell) {
  return <td className={`${baseStyle}`}>{children}</td>
}
