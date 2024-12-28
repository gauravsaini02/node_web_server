import express from 'express'

const app = express()

const port = 3000


app.get("/", (req,res) => {
    res.send("Hello this is gaurav")
})


app.get("/ice-tea", (req,res) => {
    res.send("Hello this is gaurav an i need an ice tea")
})

app.get("/hot-tea", (req,res) => {
    res.send("Hello this is gaurav an i need a hot tea.")
})

app.listen(port, () => (
    console.log(`Server is running at port ${port}`)
))
