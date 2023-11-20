function NoteBlock(props){
    return(
        <div id = {props.id} className="flex flex-col w-[300px] h-[300px] m-6 p-2 justify-center items-center bg-gray-200
        shadow-lg rounded-2xl">
            <div className="font-semibold text-3xl">
                {props.author}
            </div>
            <div>
                {props.notes}
            </div>
        </div>
    )
}

export default NoteBlock;