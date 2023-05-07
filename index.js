const express = require("express");
const app = express();
app.get("/", (req, res) => res.send("Hello Kubernetes ho!"));
app.listen(3000, () => "app listening on port 3000!");
