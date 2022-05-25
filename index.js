import express from "express"; //in package.json add "type": Module under "main":"script.js"
import bodyParser from "body-parser"; //take in incoming Post body requests
import usersRoutes from "./routes/users.js"; //imported from routes folder


const app = express();
const PORT = 5050; //this can be any number, do not use 3000.

//middleware
app.use(bodyParser.json()); 
//create route//get request to homepage.

app.use("/users", usersRoutes);

app.get("/", (req, res) =>
  // console.log("Test!");
  res.send("Hello, World")
);

app.listen(PORT, () =>
  console.log(`Server Running on port: http://localhost:${PORT}`)
);
