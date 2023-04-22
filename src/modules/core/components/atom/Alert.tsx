import React from 'react'

interface IAlert {
  alertType: 'alert-info' | 'alert-success' | 'alert-warning' | 'alert-error' | null
  alertContent: string
}
export default function Alert({ alertType, alertContent }: IAlert) {
  let svgIcon = ''
  switch (alertType) {
    case 'alert-info': {
      svgIcon = 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
      break
    }
    case 'alert-success': {
      svgIcon = 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
      break
    }
    case 'alert-warning': {
      svgIcon =
        'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
      break
    }
    case 'alert-error': {
      svgIcon = 'M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
      break
    }
    default:
      svgIcon = 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
      break
  }

  return (
    <div className='absolute top-0 right-0 z-20 dark:bg-transparent h-screen w-100 -mb-36'>
      
        <div className={`alert ${alertType} shadow-lg`}>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='stroke-current flex-shrink-0 h-6 w-6 text-bg-gray-50'
              fill='none'
              viewBox='0 0 24 24'
            >
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d={svgIcon} />
            </svg>
            <span className='text-gray-100'>{alertContent}</span>
          </div>
        </div>
    </div>
  )
}
