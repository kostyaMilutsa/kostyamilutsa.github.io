import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useUserContext } from '../components/UserProvider'
import NoteDeleteButton from '../components/NoteDeleteButton'
import NoteEditButton from '../components/NoteEditButton'
import { deleteNote, getNotesByUserId } from '../api/notes'
const NotesPage = () => {
    const navigate = useNavigate()
    const { user } = useUserContext()
    const [notes, setNotes] = useState([])
    useEffect(() => {
        getNotesByUserId(user.id).then((notes) => setNotes(notes))
    }, [user.id])

    return (
        <div className='flex flex-col gap-2'>
            <div className='border-gray-200 border max-w-xs px-2 py-1 text-xl'>
                <Link to='/notes/new'>Add new</Link>
            </div>
            {notes.map((note) => {
                const handleDeleteNote = () => {
                    deleteNote(note.id)
                }
                const handleEditNote = () => {
                    navigate(`/notes/${note.id}/edit`)
                }
                return <div className="flex border rounded-sm px-2 py-1">
                    <div className="">
                        <Link to={`/notes/${note.id}`} className='text-xl font-bold'>{note.title} </Link>
                        <p>{new Date(note.createdAt).toDateString()} </p>
                    </div>
                    <div className="ml-auto flex flex-col gap-1 justify-center items-center">
                        <NoteDeleteButton onDelete={handleDeleteNote} />
                        <NoteEditButton onEdit={handleEditNote} />
                    </div>
                </div>
            })}
        </div>
    )
}

export default NotesPage