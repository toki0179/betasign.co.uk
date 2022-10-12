const express = require('express')
const app = express()
const path = require("path");
const sys = require('sys')
const exec = require('child_process').exec 
const port = 3000

const ping = async (host) => {
   const {stdout, stderr} = await exec(`ping -c 5 ${host}`);
   return stdout, stderr
}

app.use(express.static(__dirname + '/public'))

// set view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/src/views"));

app.get("/", (req, res) => {
    res.render("index", { title: "Home" });
});

app.get("/imprint", (req, res) => {
    res.render("imprint", { title: "Projects" })
})

app.use((req, res, next) => {
    res.status(404).render('errors/404', { title: 'Error' });
});

app.use((req, res, next) => {
    res.status(500).render("errors/500", { title: 'Error' });
});

app.listen(port, () => {
    console.log(`Server starting | express`);
});
