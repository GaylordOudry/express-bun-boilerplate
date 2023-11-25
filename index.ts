import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(
  process.env.PORT || 8000,
  () =>
    `App listening on port ${process.env.PORT || 8000} at http://localhost:${
      process.env.PORT || 8000
    }`,
);
