const express = require("express");
const trackEvents = express.Router();
const { v4: uuidv4 } = require('uuid');


const events = [
    {
        event: "MCAT Prep Class",
        description: "Preparing for the MCAT.",
        completed: true,
        date: 06122020,
        itemsNeeded: ["books, ", "tests, ", "class, ", "notes, ", "videos"],
        _id: uuidv4()
    },
    {
        event: "Internship",
        description: "Winter Bootcamp Coding Internship",
        completed: true,
        date: 07042020,
        itemsNeeded: ["laptop, ", "internet, ", "VS code"],
        _id: uuidv4()
    },
    {
        event: "Bryan University",
        description: "Attend Live Events for FSW-125",
        completed: false,
        date: 08092020,
        itemsNeeded: ["camera, ", "speakers, ", "notes"],
        _id: uuidv4()
    },
    {
        event: "Fur babies",
        description: "Take the dogs out for a walk",
        completed: false,
        date: 09132020,
        itemsNeeded: ["coats, ", "booties", "leashes", "plastic bag"],
        _id: uuidv4()
    }
];

//Get & Post
trackEvents.route("/")
    .get((req, res) => {
        res.status(200)
        res.send(events)
    })
    .post((req, res) => {
    const newEvent = req.body
    newEvent._id = uuidv4()
    events.push(newEvent)
    res.status(201).send(newEvent)
});

//Get One
trackEvents.get("/:eventId", (req, res, next) => {
    const eventId = req.params.eventId
    const foundEvent = events.find(event => event._id === eventId)
    if(!foundEvent){
        const error = new Error(`The item with id ${eventId} was not found.`)
        res.status(500)
        return next(error)
    }
    res.status(200).send(foundEvent)
})

//Delete
trackEvents.delete("/:eventId", (req, res) => {
    const eventId = req.params.eventId
    const event = req.body
    event._id = uuidv4()
    const eventIndex = events.findIndex(event => event._id === eventId)
    events.splice(eventIndex, 1)
    res.status(201).send("Event was deleted!")
})

//Update - Put
trackEvents.put("/:eventId", (req, res) => {
    const eventId = req.params.eventId
    const event = req.body
    event._id = uuidv4()
    const eventIndex = events.findIndex(event => event._id === eventId)
    const updatedEvent = Object.assign(events[eventIndex], req.body) 
    res.status(201).send(updatedEvent)
})

module.exports = trackEvents;