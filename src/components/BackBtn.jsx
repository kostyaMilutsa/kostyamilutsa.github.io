import React from 'react'
import { Link } from "react-router-dom"
const BackBtn = ({ to = ".." }) => {
    return (
        <div className='border-2 py-1 px-2 max-w-[80px] rounded-md'>
            <Link to={to}>Back </Link>
        </div>
    )
}

export default BackBtn