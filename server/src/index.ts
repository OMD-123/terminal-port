import cors from "cors";
import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import { portfolioProfile } from "./data/profile.js";
import { ProfileModel } from "./models/Profile.js";

const app = express();
const port = Number(process.env.PORT ?? 5000);

app.use(cors());
app.use(express.json());

app.get("/api/health", (_request, response) => {
  response.json({ status: "ok" });
});

app.get("/api/profile", async (_request, response, next) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const storedProfile = await ProfileModel.findOne().lean();
      response.json(storedProfile ?? portfolioProfile);
      return;
    }

    response.json(portfolioProfile);
  } catch (error) {
    next(error);
  }
});

app.use(
  (
    error: unknown,
    _request: express.Request,
    response: express.Response,
    _next: express.NextFunction
  ) => {
    console.error(error);
    response.status(500).json({ message: "Unable to load portfolio profile" });
  }
);

async function startServer() {
  const mongoUri = process.env.MONGO_URI;

  if (mongoUri) {
    await mongoose.connect(mongoUri);
    await ProfileModel.updateOne({}, portfolioProfile, { upsert: true });
  }

  app.listen(port, () => {
    console.log(`Portfolio API running on http://127.0.0.1:${port}`);
  });
}

startServer().catch((error) => {
  console.error(error);
  process.exit(1);
});
