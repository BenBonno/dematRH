import express, { Request, Response } from "express";
import { connectToDatabase } from "./mangoose.config";
import dotenv from "dotenv";

// Charger les variables d'environnement
dotenv.config();

// Créer une application Express
const app = express();

// Middleware pour parser le JSON
app.use(express.json());

// Port sur lequel le serveur écoutera
const APP_PORT = process.env.APP_PORT || 3000;

// Route de test
app.get("/", (req: Request, res: Response) => {
  res.send("Bienvenue sur mon serveur Express");
});

// Démarrer le serveur
app.listen(APP_PORT, () => {
  console.log(`Serveur démarré sur le port ${APP_PORT}`);
});

//connexion à la base de données
connectToDatabase();

