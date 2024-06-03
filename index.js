import express from 'express';
import { engine } from "express-handlebars";

const app = express();
const port = 3000;


app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "source/public");

// app.use(express.static(__dirname + "/source/public"));
app.use(express.static('source/public'));

app.get("/", (req, res) => {
    res.render("home", { layout: false });
  // res.render("home");
});

app.get("/form", (req, res) => {
    res.render("form", { layout: false });
  // res.render("form");
});

app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`app listening at http://localhost:${port}`);
});
