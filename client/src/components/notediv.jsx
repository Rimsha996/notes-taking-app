const { default: NoteBlock } = require("./noteBlock")

function NoteDiv(props){
    return(
        <div className="flex m-4">
            {props.allNotes.map((note)=>{
                return <NoteBlock
                id = {note._id}
                key = {note.key}
                author = {note.author}
                notes = {note.notes}
                
                />
            })}
        </div>
    )
}

export default NoteDiv;