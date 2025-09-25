// 'npm run dev' dans le terminal sur l'emplacement 'backend'

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {Pool} from "pg";

dotenv.config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {rejectUnauthorized: false},
});

const app = express();
app.use(express.json());
app.use(cors());

app.get("/menu", async (req, res) => {
  try {
        const result = await pool.query("SELECT plate_name, plate_description, plate_image FROM menu");
        res.json(result.rows);
    } catch (error) {
        console.error("Erreur lors de la récupération des recettes:", error);
        res.status(500).json({error: "Erreur serveur"});
    };
});

app.post("/orders", (req, res) => {
  console.log("[POST /orders] body reçu:", req.body);
  const { id, plate, userName } = req.body;
  if (!id || !plate || !userName) {
    return res.status(400).json({ error: "Champs manquants ou invalides" });
  };
  console.log(`[COMMANDE REÇUE] id=${id} | plat="${plate}" | client="${userName}"`);
  return res.status(201).json({ ok: true, message: `Commande reçue ${plate} pour ${userName}` });
});

app.get("/orders", async (req, res) => {
  try {
        const result = await pool.query("SELECT user_name, plate_id, order_status_id FROM orders");
        res.json(result.rows);
    } catch (error) {
        console.error("Erreur lors de la récupération des recettes:", error);
        res.status(500).json({error: "Erreur serveur"});
    };
});

app.listen(3000, () => { console.log("Serveur lancé sur http://localhost:3000"); });