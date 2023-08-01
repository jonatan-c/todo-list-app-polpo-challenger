const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.use("/users", require("./routes/userRoutes"));
app.use("/users", require("./routes/todoRoutes"));
app.use("/todos", require("./routes/taskRoutes"));

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
