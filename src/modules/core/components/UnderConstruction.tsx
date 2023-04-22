import { useEffect } from 'react'

import WrenchIcon  from '@heroicons/react/24/solid/WrenchIcon'

function UnderConstruction(){
      
    return(
        <div className="hero h-screen ">
            <div className="hero-content text-accent text-center">
                <div className="max-w-md">
                <WrenchIcon className="h-48 w-48 inline-block text-primary"/>
                <h1 className="text-5xl mt-2 font-bold text-primary">Under Construction</h1>
                </div>
            </div>
        </div>
    )
}


export default UnderConstruction