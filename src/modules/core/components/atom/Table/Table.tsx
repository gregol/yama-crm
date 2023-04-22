import React, { ReactNode } from 'react'

const baseStyle = 'w-full whitespace-no-wrap'

interface iTable {
  children: ReactNode
}
export default function Table({ children }: iTable) {
  return <table className={`${baseStyle}`}>{children}</table>
}
