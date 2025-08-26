import {Client} from "pg";

// Exemple de connectionString
const connectionString = 'postgresql://neondb_owner:npg_L5VHoTZ1qyQt@ep-purple-resonance-a2rs48he-pooler.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require';

// Création du client
const client = new Client({
    connectionString,
});

async function run() {
    try {
        // Connexion
        await client.connect();

        // Exemple de requête SELECT
        const result = await client.query("SELECT * FROM topics;");

        console.log("Résultats :", result.rows);
    } catch (err) {
        console.error("Erreur :", err);
    } finally {
        // Déconnexion
        await client.end();
    }
};

run();

console.log("Recherche : ", process.argv[2]);