import express from "express";
import cors from "cors";
import apiRoutes from "./routes/api.routes.ts";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1", apiRoutes);

app.listen(process.env.PORT || 8000, () =>
  console.log(
    `App listening on port ${process.env.PORT || 8000} at http://localhost:${
      process.env.PORT || 8000
    }`,
  ),
);
