import express, { Express } from "express";

import { router as v1WorkoutRouter } from "./v1/routes/workoutRoutes";

const app: Express = express();
const PORT = process.env.PORT || 3000;

app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});
