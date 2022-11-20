import React, { useEffect, useState } from 'react'
import { useLoaderData, useNavigate } from "react-router-dom"
import { editNote } from '../api/notes'
const EditNotePage = () => {
    const { id, notePromise } = useLoaderData();
    const navigate = useNavigate()
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const handleTitleChange = (e) => setTitle(e.target.value)
    const handleBodyChange = (e) => setBody(e.target.value)
    const handleSave = () => {
        editNote({ id, title, body }).then((note) => navigate(`/notes/${note.id}`))
    }
    useEffect(() => {
        notePromise.then((note) => {
            setTitle(note.title);
            setBody(note.body)
        })
    }, [notePromise])
    return (
        <div className="py-4">
            <h2 className="text-2xl text-center">Старонка рэдагаваньня заметак:</h2>
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
                    onClick={handleSave}
                >
                    Захаваць
                </button>
            </div>
        </div>
    )
}

export default EditNotePage