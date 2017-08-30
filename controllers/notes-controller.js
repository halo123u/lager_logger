const Notes = require("../models/notes")

const notesController= {
    create :function(req,res)=>{
        Notes.create({
            relationship_id:req.body.relationship_id,
            note_type:req.body.note_type,
            content:req.body.content,
            date_info:req.body.date_info,
            employee_id:req.body.employee_id,
        }).then((note)=>{
            message:"Done",
            note:note,
        }).catch({
            console.log(err);
            res.status(500).json({error: err});
        })
    },

    update :function(req,res)=>{
        Notes.update({
            note_id:req.body.note_id,
            content:req.body.content,
            date_info:req.body.date_info,
            employee_id:req.body.employee_id,
        }).then((note)=>{
            message:"Done",
            note:note,
        }).catch({
            console.log(err);
            res.status(500).json({error: err});
        })
    },

    findById:function(req,res)=>{
        Notes.findById(req.params.note_id)
        .then(note=>{
            message:"Done",
            note: note,
        }).catch({
            console.log(err);
            res.status(500).json({error: err});
        })

    },

    findByType:function(req,res)=>{
        Notes.findByType(req.body.note_id)
        .then((note)=>{
            message:"Done",
            note: note,
        }).catch({
            console.log(err);
            res.status(500).json({error: err});
        })
    },

    findByType:function(req,res)=>{
        Notes.findByType(req.body.note_type)
        .then((note)=>{
            message:"Done",
            note: note,
        }).catch({
            console.log(err);
            res.status(500).json({error: err});
        })
    },

    findByrelationship:function(req,res)=>{
        Notes.findByrelationship({
            note_type:req.body.note_type,
            relationship_id:req.body.relationship_id,
        }).then((not)e=>{
            message:"Done",
            note: note,
        }).catch({
            console.log(err);
            res.status(500).json({error: err});
        })
    },

    delete :function(req,res)=>{
        Notes.delete(req.body.note_id)
        .then(()=>{
            message:done,
        }).catch({
            console.log(err);
            res.status(500).json({error: err});
        })
    }

}


module.exports = notesController
