require("dotenv").config()
const express = require("express")
const session = require("express-session")

// Array for data to be stored temporarily since there is no db in this project
let data = [
    {
        id: 0,
        text: "This is the default post",
        date: new Date()
    }
]

// function to replicate waiting for db data
let dbMimic = (delay, data) => {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve(data)
            }, delay)
        }
        catch(err) {
            console.log(err)
            reject(err)
        }
    })
}

const app = express()

const {
    SERVER_PORT,
    SECRET
} = process.env

const port = SERVER_PORT || 3005

app.set("trust proxy", 1)

app.use(express.json())
app.use(session({
    secret: SECRET,
    resave: false,
    saveUninitialized: true
}))

// get endpoints
app.get("/api/get/posts", async (req, res) => {
    try {
        let posts = await dbMimic(500, data)
        res.status(200).send(posts.sort((a, b) => a.id < b.id))
    }
    catch(err) {
        console.log(err)
        res.status(500).send("Error getting posts")
    }
})

// post endpoints
app.post("/api/add/post", async (req, res) => {
    const { id, text } = req.body
    try {
        data.push({
            id,
            text,
            date: new Date()
        })

        let message = await dbMimic(500, "Successfully added post")

        res.status(200).send(message)
    }
    catch(err) {
        console.log(err)
        res.status(500).send("Error adding post")
    }
})

// put endpoints
app.put("/api/update/post", async (req, res) => {
    const { id, text } = req.body

    try {
        let postIndex = data.findIndex(post => post.id === id)
        let post = data.find(post => post.id === id)

        data.splice(postIndex, 1, {id: post.id, text, date: post.date})

        let message = await dbMimic(500, "Successfully updated post")

        res.status(200).send(message)
    }
    catch(err) {
        console.log(err)
        res.status(500).send("Error udpating post")
    }
})

// delete endpoints
app.delete("/api/delete/post/:id", async (req, res) => {
    const { id } = req.params
    
    try {
        let postIndex = data.findIndex(post => post.id === Number(id))

        data.splice(postIndex, 1)

        let message = await dbMimic(500, "Successfully deleted post")

        res.status(200).send(message)
    }
    catch(err) {
        console.log(err)
        res.status(500).send("Error deleting post")
    }
})

try {
    app.listen(port, () => console.log(`listening on port ${port}`))
}
catch(err) {
    console.log(err)
}