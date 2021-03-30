const fs= require('fs');
const chalk= require ('chalk');

//get notes
const  getNotes=function(){

    return 'your notes...';

}

// add notes
 const addNotes = function(title,body)
 {
   const notes=loadNotes();
   const duplicateNotes =notes.filter(function(note){return note.title===title; } )
   if (duplicateNotes.length === 0)
   {
       notes.push({
           title:title,
           body:body
       })
       saveNotes(notes);
       console.log('new note added');
   }
   else{

    console.log('note title taken');
   }
 }

 //save note after adding

 const saveNotes=function(notes){
    const dataJson =JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJson);
 }
//load note 

 const loadNotes =function()
 {
try {

const dataBuffer=fs.readFileSync('notes.json');
const dataJson=dataBuffer.toString();
return JSON.parse(dataJson);

}
catch(error)
{
    return [];
}


}


//remove notes
const removeNotes=function(title)
{
    const notes=loadNotes();
    const noteTokeep=notes.filter(function(notes){ return notes.title !==title;})
    saveNotes(noteTokeep);
    console.log("notes removed");


}

//listing the notes

const listNotes =()=>{
const notes =loadNotes();
console.log(chalk.inverse('your notes'));
notes.forEach((notes) => {
  console.log(notes.title);    
});

}

//read the notes

const readNotes =(title)=>{
  const notes=loadNotes();
  const note=notes.find((note)=>note.title === title);

  if (note)
  {
      console.log(chalk.inverse(note.title));
      console.log(note.body);
  }
  else{
console.log(chalk.red.inverse("note not found"));

  }


}

module.exports={
    getNotes:getNotes,
    addNotes:addNotes,
    removeNotes:removeNotes,
    listNotes:listNotes,
    readNotes:readNotes
}
//mohansuriya