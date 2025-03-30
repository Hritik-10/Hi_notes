const express = require('express')
const router = express.Router();
const Notes = require('../models/Notes')
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchUser');
const User = require('../models/User');

//route 1: get all notes. GET "api/notes/fetchuserdetails" .logom required
router.get('/fetchallnotes', fetchuser, async (req, res) => {

    //1. get all the notes
    try {
        const notes = await Notes.find({ user: req.user.id }); //fetching only notes having userid of created user.
        res.json(notes);
    } catch (error) {
        res.status(500).send("Internal server error");
    }
})

//route 2: Add note . get request "api/notes/addnote". login required
router.post('/addnote', fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Description must be atleat 5 letters').isLength({ min: 5 }),
], async (req, res) => {
    //if there are errors, return bad request and the errors
    const errors = await validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { title, description, tag } = req.body;
        const new_note = new Notes({
            user: req.user.id,
            title,
            description,
            tag
        })
        const saved_note = await new_note.save();
        res.json(saved_note);
    } catch (err) {
        res.status(500).send("Internal server error");
    }
})


//route 3: update user Put: "api/notes/update/:id", login required
router.put('/update/:id', fetchuser,[
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Description must be atleat 5 letters').isLength({ min: 5 }),
], async (req,res)=>{
    try {
    const {title,description,tag}= req.body;
    const new_note ={}
    if(title){ new_note.title= title};
    if(description){ new_note.description= description};
    if(tag){ new_note.tag= tag};
    
    //find the note to be updated and update it.
    const note_id= req.params.id;
    
    //first find the note, check user and then allow to update using findByIdAndUpdate
    const note =await Notes.findById(note_id);
    
    if(!note){return res.status(404).send("Not Found")}
    //jr note id ne sapadlich tr verify kar ki notes madhla user is equal to req user.(FYI: notes madhe user chi id save ahe)
    if(note.user.toString()!==req.user.id){
        return res.status(401).send("Unauthorised. Not allowed");
    }
    //now the note exist
    const updated_note= await Notes.findByIdAndUpdate(req.params.id, {$set:new_note},{new:true})
    res.json({updated_note});

    } catch (err) {
        res.status(500).send("Internal server error");
    }
})

//route 4: update user delete: "api/notes/delete/:id", login required
router.delete('/delete/:id', fetchuser, async (req,res)=>{
    try { 
    //find the note to be deleted.
    const note_id= req.params.id;

    //first find the note, check user and then allow to delete using findByIdAndDelete
    const note =await Notes.findById(note_id);
    
    if(!note){return res.status(404).send("Not Found")}
    //jr note id ne sapadlich tr verify kar ki notes madhla user is equal to req user.(FYI: notes madhe user chi id save ahe)
    if(note.user.toString()!==req.user.id){
        return res.status(401).send("Unauthorised. Not allowed");
    }
    //now the note exist
    const deleted_note= await Notes.findByIdAndDelete(req.params.id)
    res.json({ "Success": "Note has been deleted" ,note: deleted_note});

    } catch (err) {
        res.status(500).send("Internal server error");
    }
})

module.exports = router
