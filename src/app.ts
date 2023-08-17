require("dotenv").config();
import express = require("express");
import { client } from "./config/database";
import blogRouter from "./routes/blogRouter";
const app = express();
const port = process.env.PORT;

async function mongoConnect() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    await client.close();
  }
}
mongoConnect().catch(console.dir);

app.use(express.json());

app.use("/", blogRouter);

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
