import React , {useState} from 'react';
function NoteInput(props){
    const [author , setAuthor] = useState('');
    const [notes , setNotes ] = useState('');

    return(
        <div className='flex flex-col justify-center items-center w-full'>
            <div className='flex h-8 m-2 justify-center items-center w-full'>
                <label className="pr-4 font-bold">Author : </label>
            <input 
            value = {author}
            type='text'
            placeholder='Please enter Author name'
            onChange={(e) => setAuthor(e.target.value)}
            className='h-full w-[50%] rounded-[7px] border border-gray-700 p-1'
            />
            </div>

            <div className='flex w-full justify-center items-center h-16 m-2'>
            <label className="pr-4 font-bold">Notes : </label>
                <textarea
                value={notes}
                type='text'
                placeholder='Please enter your notes'
                onChange={(e)=> setNotes(e.target.value)}
                className='h-full w-[50%] rounded-[7px] border border-gray-700 p-1'
                ></textarea>
            </div>

            <button onClick={()=> props.saveNotes({
                author , notes
            })} type='button' 
            className='border border-blue-700 bg-blue-800 w-2/12 text-white rounded-[10px]'>Save Notes</button>
        </div>
    )
}

export default NoteInput;