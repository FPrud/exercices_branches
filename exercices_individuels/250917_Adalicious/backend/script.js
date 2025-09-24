import express from "express";
import data from "./data.json" with { type: "json" };
import cors from "cors";
import dotenv from "dotenv";
import {Pool} from "pg";

dotenv.config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {rejectUnauthorized: false}, // recommandé pour Neon afin de sécuriser la connexion
});

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://127.0.0.1:5500" }));


app.get("/menu", async (req, res) => {
  try {
        const result = await pool.query("SELECT * FROM plates");
        res.json(result.rows);
    } catch (error) {
        console.error("Erreur lors de la récupération des recettes:", error);
        res.status(500).json({error: "Erreur serveur"});
    };
});

app.get("/menu/:id", (req, res) => {
  const id = Number(req.params.id);
  const plat = data.find(p => p.id === id);
  if (!plat) return res.status(404).json({ error: `Plat id=${id} non trouvé` });
  res.json(plat);
});

app.post("/orders", (req, res) => {
  console.log("[POST /orders] body reçu:", req.body);
  const { id, plate, userName } = req.body;
  if (!id || !plate || !userName) {
    return res.status(400).json({ error: "Champs manquants ou invalides" });
  }
  console.log(`[COMMANDE REÇUE] id=${id} | plat="${plate}" | client="${userName}"`);
  return res.status(201).json({ ok: true, message: `Commande reçue ${plate} pour ${userName}` });
});

app.listen(3000, () => { console.log("Serveur lancé sur http://localhost:3000"); });