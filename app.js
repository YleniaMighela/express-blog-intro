const express = require('express')
const app = express()
const port = 3000

// definisco la cartella per i file statici
app.use(express.static('public'));


// definsco la prima rotta con un semplice messaggio
app.get('/', (req, res) => {

    res.send("Server del mio blog")
})



// definsco la rotta/ bacheca che conterrà l'array di oggetti

app.get('/bacheca', (req, res) => {

    const bacheca = [

        {
          title: "Ciambellone soffice",
          content: "Una ricetta semplice per un ciambellone soffice e gustoso.",
          image: "ciambellone.jpeg",
          tags: ["Dolci", "Colazione", "Forno"]
        },

        {
          title: "Cracker alla barbabietola",
          content: "Uno snack sano e croccante con un tocco di barbabietola.",
          image: "cracker_barbabietola.jpeg",
          tags: ["Snack", "Salato", "Barbabietola"]
        },

        {
          title: "Pane fritto dolce",
          content: "Un dessert fritto irresistibile, perfetto per ogni occasione.",
          image: "pane_fritto_dolce.jpeg",
          tags: ["Dolci", "Fritto", "Tradizione"]
        },

        {
          title: "Pasta alla barbabietola",
          content: "Un primo piatto colorato e saporito a base di barbabietola.",
          image: "pasta_barbabietola.jpeg",
          tags: ["Primi", "Barbabietola", "Cucina Italiana"]
        },

        {
          title: "Torta paesana",
          content: "Un dolce della tradizione lombarda ricco di sapore.",
          image: "torta_paesana.jpeg",
          tags: ["Dolci", "Tradizione", "Lombardia"]
        }

      ];
       
    //   ritorno l'array della bacheca in formato Json
      res.json(bacheca);
})














app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    });