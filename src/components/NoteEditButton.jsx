import React from 'react'
import EditIcon from "../icons/edit.png"
const NoteEditButton = ({ onEdit }) => {
    return (
        <div className='w-6 h-6 cursor-pointer' onClick={onEdit} >
            <img src={EditIcon} alt="" />
        </div>
    )
}

export default NoteEditButton