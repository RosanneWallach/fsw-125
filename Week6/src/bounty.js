const express = require("express")
const app = express()
app.use(express.json())
var uuid = require("uuid")


const bounties= [
    {firstName: "luke", lastName: "skyWalker", Living: true, BountyAmount: 10000, type: "jedi", id: uuid.v4()},
    {firstName: "Crystal", lastName: "Mullins", Living: true, BountyAmount: 10000000, type: "Sith", id: uuid.v4()},
    {firstName: "Giselle", lastName: "skyWalker", Living: true, BountyAmount: 10000, type: "jedi", id: uuid.v4()}

]

app.get("/bounties", (req,res) => {
    res.send(bounties)

})
app.post("/bounties", (req,res) => {
 const body = req.body
   console.log(body)
   body.id = uuid.v4()
   bounties.push(body)
    res.send(body)

})
app.delete("/bounties/:bountiesId", (req, res) => {
    const bountiesId = req.params.bountiesId
    const bountiesIndex = bounties.findIndex(bounties => bounties.id === bountiesId)
    bounties.splice(bountiesIndex, 1)
    res.send("Successful deleted movie!")
})
app.put("/bounties/:bountiesId", (req, res) => {
    console.log(req.body)
    const bountiesId = req.params.bountiesId
    console.log(bountiesId)
    const bountiesIndex = bounties.findIndex(bounties => { bounties.id == bountiesId})
    const updatedBounty = Object.assign(bounties[bountiesIndex], req.body);
    
    res.send(updatedBounty)
})





app.listen(4000, () => {
    console.log("The server is running on Port 4000")

})