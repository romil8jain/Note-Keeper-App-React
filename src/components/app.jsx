import React, { useState } from 'react';
import Header from './header'
import Footer from './footer'
import Note from './note'
import CreateArea from './CreateArea'


function App(){

	const [allNotes,setAllNotes] = useState([])
	const [oneNote , setOneNote] = useState({
		title: "",
		content: ""
	});

	function handleOneNote(event){
		const {name, value} = event.target;
		
		setOneNote((prevValue) => {
			return {
			...prevValue,
			[name]: value
			}
		})
	}

	function addNote(event){
		setAllNotes((prevValue)=>{
			prevValue.push(oneNote)
			return prevValue
		})
		setOneNote({
			title: "",
			content: ""
		})
		event.preventDefault()
	}

	function deleteNote(id){
		setAllNotes((prevValue)=>{
			prevValue = prevValue.filter((value, index)=>{
				return index!==id
			})
			return prevValue
		})
	}

	return (
		<div>
			<Header/>
			<Footer/>
			<CreateArea handleOneNote = {handleOneNote} oneNoteTitle = {oneNote.title} oneNoteContent={oneNote.content} addNote = {addNote}/>
			{allNotes.map((value, index)=>{
				return (<Note deleteNote = {deleteNote} key ={index} id={index} noteTitle = {value.title} noteContent ={value.content}/>)
			})}
		</div>)
}

export default App
