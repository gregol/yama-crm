import React from 'react'

interface IPagination {
  totalResults: number
  resultsPerPage: number
  onChange: (page: number) => void
  label: string
  currentPage: number
  hasPreviousPage: boolean
  hasNextPage: boolean
  totalPage: number
}
export default function Pagination({
  totalResults,
  resultsPerPage,
  onChange,
  label,
  currentPage,
  hasPreviousPage,
  hasNextPage,
  totalPage
}: IPagination) {
  if (!totalResults) return <></>
  return (
    <div className='flex flex-col py-2 justify-between text-xs sm:flex-row text-gray-600 dark:text-gray-400'>
      <span className='flex items-center font-semibold tracking-wide uppercase'></span>
      <div className='flex mt-2 sm:mt-auto sm:justify-end'>
        <nav aria-label={label}>
          <ul className='inline-flex items-center'>
            <li>
              <button
                className='align-bottom inline-flex items-center justify-center leading-5 transition-colors duration-150 font-medium p-2 rounded-md text-gray-600 dark:text-gray-400 focus:outline-none border border-transparent '
                type='button'
                aria-label='Previous'
                onClick={() => onChange(currentPage - 1)}
                disabled={!hasPreviousPage}
              >
                <svg className='h-3 w-3' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20'>
                  <path
                    d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                    clipRule='evenodd'
                    fillRule='evenodd'
                  ></path>
                </svg>
              </button>
            </li>
            <PaginationNumber totalPages={totalPage} handlePageClick={onChange} currentPage={currentPage} />
            <li>
              <button
                className='align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium p-2 rounded-md text-gray-600 dark:text-gray-400 focus:outline-none border border-transparent active:bg-transparent hover:bg-gray-100 focus:shadow-outline-gray dark:hover:bg-gray-500 dark:hover:text-gray-300 dark:hover:bg-opacity-10'
                type='button'
                aria-label='Next'
                onClick={() => onChange(currentPage + 1)}
                disabled={!hasNextPage}
              >
                <svg className='h-3 w-3' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20'>
                  <path
                    d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                    clipRule='evenodd'
                    fillRule='evenodd'
                  ></path>
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

interface PaginationNumberProps {
  totalPages: number
  handlePageClick: (page: number) => void
  currentPage: number
} 


const PaginationNumber = ({ totalPages, handlePageClick, currentPage }: PaginationNumberProps) => {
  if (!totalPages || totalPages < 1) return <></>
  return (
    <>
      {Array.from(Array(totalPages).keys()).map(pageNumber => (
        <li key={pageNumber}>
          <button
            className={
              pageNumber + 1 === currentPage
                ? 'align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-3 py-1 rounded-md text-xs text-white bg-purple-600 border border-transparent active:bg-purple-600 hover:bg-purple-700 focus:shadow-outline-purple'
                : 'align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-3 py-1 rounded-md text-xs text-gray-600 dark:text-gray-400 focus:outline-none border border-transparent active:bg-transparent hover:bg-gray-100 focus:shadow-outline-gray dark:hover:bg-gray-500 dark:hover:text-gray-300 dark:hover:bg-opacity-10'
            }
            type='button'
            onClick={() => handlePageClick(pageNumber + 1)}
            disabled={pageNumber + 1 === currentPage}
          >
            {pageNumber + 1}
          </button>
        </li>
      ))}
    </>
  )
}
