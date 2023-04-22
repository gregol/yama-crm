import React, { ReactNode } from 'react'

const baseStyle = 'px-4 py-3 border-t dark:border-gray-700 bg-gray-50 text-gray-500 dark:text-gray-400 dark:bg-gray-800'

interface ITableFooter {
  children: ReactNode
  colspan: number
  newStyle?: string
}
export default function TableFooter({ children, colspan, newStyle }: ITableFooter) {
  return (
    <tfoot className={`${baseStyle} ${newStyle}`}>
      <tr>
        <td colSpan={colspan}>{children}</td>
      </tr>
    </tfoot>
  )
}
