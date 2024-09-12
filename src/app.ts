import express, { Application } from 'express';
import path from 'path';
import helmet from 'helmet';
import routes from './routes';
// Application
const app: Application = express();
const PORT = process.env.PORT || 3000;

// Public Folder
app.use('/assets', express.static(path.join(__dirname, '../src/assets')));

// Helmet helps you secure your Express apps
app.use(helmet());

// routes
app.use(routes);

//server listening
app.listen(PORT, () => {
  console.log(`Server Listening on ${PORT}`);
});

export default app;
