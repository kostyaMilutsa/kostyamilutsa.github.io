import React from 'react'
import DeleteIcon from "../icons/delete.png"
const NoteDeleteButton = ({ onDelete }) => {
    return (
        <div className='w-6 h-6 cursor-pointer' onClick={onDelete} >
            <img src={DeleteIcon} alt="" />
        </div>
    )
}

export default NoteDeleteButton