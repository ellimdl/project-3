
/*
    Controllers are responsible to handle Request and Response
*/

const {Comedian} = require("../models");
const httpStatus = require("http-status");

// Implement create function
const create = async (req, res) => {
    try{
        const result = await Comedian.create(req.body);
        res.json(result);   
    }catch(e){
        console.error(e);
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}

const findAll = async (req, res) => {
    try{        
        console.log(req.query);
        const result = await Comedian.find(req.query).exec();
        res.json(result);
    }catch(e){
        console.error(e);
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}

const updateOne = async (req, res) => {
    try{
        const id = req.params.id;
        const updated = await Comedian.updateOne({_id:id}, {$set:req.body});
        res.json(updated);
    }catch(e){
        console.error(e);
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR)
    }
}

const deleteOne = async (req, res) => {
    try{
        const id = req.params.id;
        const result = await Comedian.deleteOne({_id:id});
        res.json(result);
    }catch(e){
        console.error(e);
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}

const findOne = async (req, res) => {
    try{
        const id = req.params.id;
        const fetched = await Comedian.findOne({_id:id});
        res.json(fetched);
    }catch(e){
        console.error(e);
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}

// Export functions
module.exports = {
    create, findAll, deleteOne, updateOne, findOne
}