const express = require('express');
const bountyRouter = express.Router();
const { v4: uuidv4 } = require('uuid');

const bounty = [ 
        {firstName: "William" , lastName: "Morris" , Living: true, bounty: 10000, type: "Jedi", _id: uuidv4()},
        {firstName: "Luke" , lastName: "Skywalker" , Living: true, bounty: 5000, type: "Jedi", _id: uuidv4()},
        {firstName: "Darth" , lastName: "Vayder" , Living: true, bounty: 10000, type: "Sith", _id: uuidv4()},
        {firstName: "Boogie" , lastName: "Man" , Living: true, bounty: 105000, type: "Sith", _id: uuidv4()}
    ]

//Routes
bountyRouter.route("/")
.get((req, res)=>{
    res.send(bounty)
})
.post((req, res)=>{
    const newBounty = req.body;    
    newBounty._id = uuidv4();
    bounty.push(newBounty);
    res.send(`Successfully added ${newBounty.firstName} ${newBounty.lastName} to the database`)
})

//Get the get post delete put data with an ID
bountyRouter.route("/:_id")
.get( (req, res) =>{ 
    const theId = req.params._id;
    const theSuspectIn = bounty.findIndex(hunted => hunted._id === theId)
    res.send(bounty[theSuspectIn] )
})
.put((req, res) => {
    const theId = req.params._id
    const updatedObject = req.body
    const theSuspectIn = bounty.findIndex(hunted => hunted._id === theId)
    const updateBounty = Object.assign(bounty[theSuspectIn], updatedObject)
    res.send(updateBounty)
})
.delete((req, res) => {
    const theId = req.params._id;
    const theSuspectzIn = bounty.findIndex(hunted => hunted._id === theId)
    let toDelete = bounty[theSuspectzIn]
    bounty.splice(theSuspectzIn, 1)
    res.send(`Successfully deleted the ${toDelete.firstName} ${toDelete.lastName} with a bounty of ${toDelete.bounty}`)
})


module.exports = bountyRouter;