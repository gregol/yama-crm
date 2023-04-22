import { useEffect } from 'react'
import FaceFrownIcon  from '@heroicons/react/24/solid/FaceFrownIcon'

function InternalPage(){
    return(
        <div className="hero h-4/5 bg-base-200">
            <div className="hero-content text-accent text-center">
                <div className="max-w-md">
                <FaceFrownIcon className="h-48 w-48 inline-block text-primary"/>
                <h1 className="text-5xl  font-bold text-primary">404 - Not Found</h1>
                </div>
            </div>
        </div>
    )
}

export default InternalPage