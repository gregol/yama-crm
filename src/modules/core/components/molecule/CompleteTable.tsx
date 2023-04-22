import React, { useState } from 'react'

import { Table, TableBody, TableCell, TableContainer, TableFooter, TableHeader } from '../atom/Table'
import Pagination from './Pagination'
import { EditIcon, TrashIcon } from '../../icons'
import ButtonAtom from '../atom/ButtonAtom'
import Modal from './Modal'
export interface PaginationItems {
  id: string
  name: string
}
export interface IPagination {
  totalResults: number
  resultsPerPage: number
}
interface ICompleteTable {
  headersItems: PaginationItems[]
  bodyItems: PaginationItems[][]
  paginationInfo: IPagination
  setCurrentPage: (page: number) => void
  currentPage: number
  hasPreviousPage: boolean
  hasNextPage: boolean
  totalPage: number
  setShowModal: (show: boolean) => void
  showModal: boolean
  EditFunction?: (id: string) => void
  DeleteFunction: (id: string) => void
  
}
export default function CompleteTable({
  headersItems,
  bodyItems,
  paginationInfo,
  setCurrentPage,
  currentPage,
  hasPreviousPage,
  hasNextPage,
  totalPage,
  EditFunction,
  DeleteFunction,
  showModal,
  setShowModal
}: ICompleteTable) {
  const [theIdToDelete, setTheIdToDelete] = useState<string>('')
  const deleteAction = (idToDelete: string) => {
    setTheIdToDelete(idToDelete)
    setShowModal(true)
  }
  return (
    <TableContainer newStyle='w-full overflow-x-auto'>
      <Table>
        <TableHeader>
          <tr>
            {headersItems?.map(item => (
              <TableCell key={item.id}>{item.name}</TableCell>
            ))}
          </tr>
        </TableHeader>
        <TableBody>
          {bodyItems?.map((clientData: any, index: number) => {
            let dataId: string = ''
            return (
              <tr key={index}>
                {clientData?.map((client: any) => {
                  if (client.id.indexOf('DATA-ID-') === 0) {
                    dataId = client.name
                    return null
                  } else
                    return (
                      <TableCell key={client.id}>
                        <div dangerouslySetInnerHTML={{ __html: client.name }} />
                      </TableCell>
                    )
                })}
                {EditFunction && (
                  <td>
                    <div className='flex items-center space-x-4'>
                      <ButtonAtom
                        className='bg-primary w-8 h-8 text-white text-xs rounded-md'
                        aria-label='Edit'
                        onClick={() => EditFunction(dataId)}
                      >
                        <EditIcon aria-hidden='true' />
                      </ButtonAtom>
                      <ButtonAtom
                        className='bg-red-600 w-8 h-8 text-white text-xs p-1 rounded-md'
                        aria-label='Delete'
                        onClick={() => deleteAction(dataId)}
                        // onClick={() => DeleteFunction(dataId)}
                      >
                        <TrashIcon aria-hidden='true' />
                      </ButtonAtom>
                    </div>
                  </td>
                )}
              </tr>
            )
          })}
        </TableBody>
        <TableFooter colspan={headersItems.length}>
          <Pagination
            totalResults={paginationInfo?.totalResults}
            resultsPerPage={paginationInfo?.resultsPerPage}
            onChange={setCurrentPage}
            label='Table clients'
            currentPage={currentPage}
            hasNextPage={hasNextPage}
            hasPreviousPage={hasPreviousPage}
            totalPage={totalPage}
          />
        </TableFooter>
      </Table>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        modalContent='Realmente quieres eliminar este registro'
        modalTitle='Eliminar Registro'
        actionFunction={() => DeleteFunction(theIdToDelete)}
      />
    </TableContainer>
  )
}
