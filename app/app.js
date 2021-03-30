const chalk =require ('chalk');
const yargs =require ('yargs');
const notes =require ('./notes');

yargs.version ('1.1.0');

yargs.command({
 command:'add',
 describe:'add new note',
 builder:{
      title:{
      describe:'note title',
      demandoption:true,
      type:'string'
 },
     body:{
     describe:'note body',
     demandoption:true,
     type: 'string'
     }
    },
handler:function(argv){
notes.addNotes(argv.title,argv.body);

}
})

yargs.command({
  command:'remove',
  describe:'remove a item',
  builder:{
    title:{
        describe:'note title',
        demandoption:true,
        type:'string'
   }
  },
  handler:function(argv){
    notes.removeNotes(argv.title);
    
    }


})


//list command

yargs.command({
command:'list',
describe:'list the data',
handler()
{
  notes.listNotes();
}


})


//read command

yargs.command({
command:'read',
describe:'read the datas',
builder:{
  title:{
    describe:'note title',
    demandoption:true,
    type:'string'
}
},
handler(argv)
{
  notes.readNotes(argv.title);
}
})

yargs.parse();
//node app.js add  --title="mohan" --body="web developer"
// node app.js list
// node app.js read --title="mohan" 
// node app.js remove --title="mohan"