import { MongoClient } from "mongodb"

const uri = process.env.MONGODB_URI
const dbName = process.env.MONGODB_NAME

let cachedClient = null
let cachedDb = null

if (!uri) {
  throw new Error("Please add your MONGODB_URI to .env.local")
}

if (!dbName) {
    throw new Error("Please add your MONGODB_NAME to .env.local")
}
  
export async function connectToDatabase() {
    if(cachedClient && cachedDb) {
        return { client: cachedClient, db: cachedDb }
    }

    const client = await MongoClient.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    const db = await client.db(dbName)

    cachedClient = client
    cachedDb = db

    return { client, db }
}