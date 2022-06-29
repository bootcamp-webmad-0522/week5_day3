require("dotenv/config");

const express = require("express");
const app = express();

require("./config")(app);

app.locals.appTitle = `FULL AXIOS CRUD`;

const index = require("./routes/index.routes");
app.use("/", index);

require("./error-handling")(app);

module.exports = app