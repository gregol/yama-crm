import React from 'react'
import * as Icons from '../../icons'
import Link from 'next/link'
// import { Button } from '@windmill/react-ui'
import { routes } from '../../services/Data/menu'
import Image from 'next/image'
import Logo from '../../../../../public/images/YamaCrmLogo.png'


function Icon({ icon, ...props }: any) {
  //@ts-ignore
  const Icon = Icons[icon]
  return <Icon {...props} />
}

function SidebarContent() {
  return (
    <div className='py-4 text-gray-500 dark:text-gray-400 transition transform translate-y-1'>
      <Link className='py-10 ml-6 text-lg font-bold text-gray-800 dark:text-gray-200' href='/user/dashboard'>
        <Image alt='logo' src={Logo} width={200} height={100} className='ml-4' />
      </Link>
      <ul className='mt-6'>
        {routes.map(route => (
          <Link key={route.link} className='flex ml-4 py-2 hover:text-primary' href={route.link}>
            <span
              className='absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg'
              aria-hidden='true'
            ></span>
            <Icon className='w-5 h-5' aria-hidden='true' icon={route.icon} />
            <span className='ml-4'>{route.name}</span>
          </Link>
        ))}
      </ul>
      <div className='px-6 my-6'>
        <button>
          Create account
          <span className='ml-2' aria-hidden='true'>
            +
          </span>
        </button>
      </div>
    </div>
  )
}

export default SidebarContent
