const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const routerApi = require('./routes');

app.use(express.json());

app.use(cors());

routerApi(app);

app.get("/", (req, res) =>{
  res.send("Test");
});


app.listen(port, () => {
  console.log(`Corriendo en el port http://localhost:${port}`)

});
