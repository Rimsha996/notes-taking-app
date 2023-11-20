import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import NoteInput from './components/noteInput';
import NoteDiv from './components/notediv';
import { useEffect, useState } from 'react';

function App() {
  const [allNotes , setNotes] = useState([]);

  useEffect(()=>{
  fetch('http://localhost:8000/api')
  .then(response=>response.json())
  .then(data => setNotes(data.notes));
  },[allNotes]);

  function saveNotes(newItem){
    fetch('http://localhost:8000/api',{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem)
    })
    console.log(newItem);
  }
  return (
    <div className="h-screen flex flex-col">
      <Header/>
      <NoteInput saveNotes={(newItem)=>{ saveNotes(newItem)}}/>
      <NoteDiv allNotes={allNotes}/>
      <Footer/>
    </div>
  );
}

export default App;
