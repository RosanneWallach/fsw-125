const express = require('express')
const app = express()

const movies = [
    {
        name: "Forrest Gump",
        year: 1994
    },
    {
        name: "Thor: Ragnarok",
        year: 2017
    },
    {
        name: "Back to the Future",
        year: 1985
    },
    {   
        name: "Pulp Fiction",
        year: 1994
    }
]

const TVshows = [
    {
        name: "2 Broke Girls",
        year: 2011
    },
    {
        name: "90 Day Fiance",
        year: 2014
    },
    {
        name: "Roseanne",
        year: 1988
    },
    {   
        name: "That 70s Show",
        year: 1998
    }
]



const anime = [
  {
    name: Shingeki no Kyojin 
    year: 2009
  },
  {
    name: Sailor Moon 
    year: 1991
  },
  {
    name: Dr.Stone 
    year: 2019
  },
  {
    name: My Hero Academia
    year: 2016
  }
]
app.get("/movies", (req, res) => {
    res.send(movies)
})

app.get("/TVshows", (req, res) => {
    res.send(TVshows)
})

app.get("/anime", (req, res) => {
  res.send(anime)

})

app.listen(4000, () => {
    console.log("The server is running on Port 4000")
})