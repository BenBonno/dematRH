import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// URL de connexion à la base de données
const MONGODB_URI = process.env.MONGODB_URI;

// Définir les options de connexion MongoDB
// const options: mongoose.ConnectOptions = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
// };

// Fonction pour se connecter à la base de données
export const connectToDatabase = async (): Promise<void> => {
  try {
    await mongoose.connect(MONGODB_URI as string);
    console.log("Connecté à la base de données MongoDB");
  } catch (error) {
    console.error("Erreur de connexion à la base de données :", error);
    process.exit(1); // Arrête l'application en cas d'échec de la connexion
  }
};
