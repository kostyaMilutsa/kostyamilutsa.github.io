import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { createNote } from '../api/notes'
import BackBtn from '../components/BackBtn'
import { useUserContext } from '../components/UserProvider'
const CreateNotePage = () => {
    const { user } = useUserContext()
    const navigate = useNavigate()
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const handleTitleChange = (e) => setTitle(e.target.value)
    const handleBodyChange = (e) => setBody(e.target.value)
    const handleCreate = () => {
        createNote({ userId: user.id, title, body }).then((note) => navigate(`/notes/${note.id}`))
    }
    return (
        <div className="py-4">
            <BackBtn to='/notes' />
            <h2 className="text-2xl text-center">Стварыць заметку:</h2>
            <div className="max-w-xs mx-auto flex flex-col gap-2">
                <input
                    type="email"
                    className="border border-gray-300 py-1 px-2 rounded-md"
                    value={title}
                    placeholder="Title"
                    onChange={handleTitleChange}
                />
                <textarea
                    className="border border-gray-300 py-1 px-2 rounded-md"
                    value={body}
                    placeholder="Body"
                    onChange={handleBodyChange}
                />
                <button
                    className="bg-slate-400 py-1 px-2 rounded-md text-white"
                    onClick={handleCreate}
                >
                    Create
                </button>
            </div>
        </div>
    )
}

export default CreateNotePage