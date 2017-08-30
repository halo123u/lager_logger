const Notes = require("../models/notes")

const notesController= {
    create :function(req,res){
        Notes.create({
            relationship_id:req.body.relationship_id,
            note_type:req.body.note_type,
            content:req.body.content,
            date_info:req.body.date_info,
            employee_id:req.body.employee_id,
        }).then((note)=>{
            res.json({
                message: "Done",
                note: note
            })
        }).catch((err)=>{
            console.log(err);
            res.status(500).json({error: err});
        })
    },

    update:function(req,res){
        Notes.update({
            note_id:req.params.note_id,
            content:req.body.content,
            date_info:req.body.date_info,
            employee_id:req.body.employee_id,
        }).then(()=>{
            res.json({
                message: "Done",
            })
        }).catch((err)=>{
            console.log(err);
            res.status(500).json({error: err});
        })
    },

    findById:function(req,res){
        Notes.findById(req.params.note_id)
        .then(note=>{
            res.json({
                message:"Done",
                note: note
            })
        }).catch((err)=>{
            console.log(err);
            res.status(500).json({error: err});
        })
    },

    findAllByType: function(req,res){
        Notes.findAllByType((req.params.note_type).toUpperCase())
        .then((note)=>{
            res.json({
                message:"Done",
                note: note
            })
        }).catch((err)=>{
            console.log(err);
            res.status(500).json({error: err});
        })
    },


    findAllByRelationship: function(req,res){
        Notes.findAllByRelationship({
            note_type:(req.params.note_type).toUpperCase(),
            relationship_id:req.body.relationship_id,
        }).then((note)=>{
            res.json({
                message:"Done",
                note: note,
            })
        }).catch((err)=>{
            console.log(err);
            res.status(500).json({error: err});
        })
    },

    delete: function(req,res){
        Notes.delete(req.body.note_id)
        .then(()=>{
            res.json({
                message:"Done",
            })
        }).catch((err)=>{
            console.log(err);
            res.status(500).json({error: err});
        })
    }
}


module.exports = notesController
