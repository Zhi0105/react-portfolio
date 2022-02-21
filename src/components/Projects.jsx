import React from 'react'

import Sidebar from './Sidebar'

const Projects = () => {
    return (
        <div className="grid grid-cols-9 grid-rows-1">
        <div>
            <Sidebar />
        </div>
        <div className="col-span-8 grid grid-cols-2 grid-rows-1">
            <div className="bg-neutral-900 p-4">
                Project page
            </div>
            <div className="bg-neutral-900">

            </div>
        </div>
    </div>
    )
}

export default Projects