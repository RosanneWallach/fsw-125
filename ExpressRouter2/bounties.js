const express = require('express');
const bountyRouter = express.Router();
const {v4:uuid} =require('uuid');

// Data
const bounties = [
    {
        firstName: "Luke",
        lastName: "Skywalker",
        living: true,
        bountyAmount: 50000,
        type: "Jedi",
        _ID: uuid()
    },
    {
        firstName: "Darth",
        lastName: "Vader",
        living: true,
        bountyAmount: 150000,
        type: "Sith",
        _ID: uuid()
    },
    {
        firstName: "Obi-Wan",
        lastName: "Kenobi",
        living: true,
        bountyAmount: 75000,
        type: "Jedi",
        _ID: uuid()
    },
    {
        firstName: "Darth",
        lastName: "Maul",
        living: true,
        bountyAmount: 50000,
        type: "Sith",
        _ID: uuid()
    },
    {
        firstName: "Mace",
        lastName: "Windu",
        living: true,
        bountyAmount: 25000,
        type: "Jedi",
        _ID: uuid()
    }
]

// Routes
bountyRouter.route("/")
    .get((req, res) => {
        res.send(bounties)
    })
    .post((req, res) => {
        const newBounty = req.body;
        newBounty._ID = uuid();
        bounties.push(newBounty)
        res.send(`Successfully added ${newBounty.firstName} ${newBounty.lastName} to the bounties list.`)
    });

bountyRouter.route("/:ID")
    .get((req, res) => {
        res.send(bounties.filter(req.params._ID))
    })
    .delete((req, res) => {
        res.send(`DELETE on /bounty/${req.params._ID} endpoint`)
    })

module.exports = bountyRouter