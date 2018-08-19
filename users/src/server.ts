import express from "express"
import * as bodyParser from "body-parser"

const PORT = process.env.PORT || 3002
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/test', (req, res) => {
    res.send('Users service is up!');
})

app.listen(PORT, () => {
    console.log(`Users service listening on ${PORT}`)
})