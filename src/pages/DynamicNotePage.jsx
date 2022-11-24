import React, { Suspense, useCallback } from 'react'
import { deleteNote, getNoteById } from '../api/notes'
import { useLoaderData, Await, useNavigate, Link } from "react-router-dom"
import NoteDeleteButton from '../components/NoteDeleteButton'
import BackBtn from '../components/BackBtn'
import NoteEditButton from '../components/NoteEditButton'

const DynamicNotePage = () => {
    const navigate = useNavigate()
    const { notePromise, id } = useLoaderData()
    const handleDeleteNote = useCallback(() => {
        deleteNote(id).then(() => navigate("/notes"))
    }, [id, navigate])
    const handleEditNote = useCallback(() => {
        navigate(`/notes/${id}/edit`)
    }, [id, navigate])
    return (
        <>
            <BackBtn to='/notes' />
            <Suspense fallback={<p>Loading...</p>}>
                <Await resolve={notePromise} errorElement={
                    <>
                        <h1 className='text-3xl font-bold text-center'>
                            No note with ID {id}
                        </h1>
                        <p className='text-2xl text-center'>

                            <Link to={"/notes"} >To notes list</Link>
                        </p>
                    </>
                }>
                    {(note) => <div className='flex'>
                        <div className="">

                            <h3 className="font-bold text-xl">{note.title} </h3>
                            <p>{note.body} </p>
                        </div>
                        <div className="ml-auto flex flex-col gap-1 justify-center items-center">
                            <NoteDeleteButton onDelete={handleDeleteNote} />
                            <NoteEditButton onEdit={handleEditNote} />
                        </div>
                    </div>}
                </Await>
            </Suspense>
        </>
    )
}

export default DynamicNotePage

export const noteLoader = ({ params: { id } }) => {
    return { notePromise: getNoteById(id), id }
}