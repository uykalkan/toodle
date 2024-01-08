import { open, Database } from "sqlite";
import sqlite3 from "sqlite3";
import path from "path";

export let db: Database = null as any;

export async function connectDatabase() {
  if (!db) {
    try {
      db = await open({
        filename: path.join(process.cwd(), "database.db"),
        driver: sqlite3.Database,
      });
      console.log("Veritabanına bağlantı başarılı.");
    } catch (error) {
      console.error("Veritabanına bağlantı hatası:", error);
    }
  }
  return db;
}

export default connectDatabase;
