const express = require('express')
const app = express()
const port = 3000




// definsco la prima rotta con un semplice messaggio
app.get('/', (req, res) => {

    res.send("Server del mio blog")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    });