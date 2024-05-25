import app from "./expressSetup.mjs";
import ENV from './EnvVars.mjs';
import downloadRoutes from "./routes/downloadRoutes.mjs"

app.use("/download", downloadRoutes);

app.listen(ENV.PORT, () => {
    console.log(`Server running on port ${ENV.PORT}`);
});