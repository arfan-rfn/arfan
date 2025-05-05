'use server';

import { env } from "@/env"
import { MongoClient } from "mongodb"

let cached: MongoClient | null = null;
const uri = env.MONGODB_URI;
const options = {
	maxPoolSize: 100, // Pool size of 100 connections
	connectTimeoutMS: 10000, // 10 seconds
};

const mongoClientPromise = (): Promise<MongoClient> => {

	const connectToMongo = async (): Promise<MongoClient> => {
		if (cached !== null) {
			return cached as MongoClient;
		}
		const client = new MongoClient(uri, options)
		try {
			await client.connect();
			cached = client;

			client.on("close", () => {
				cached = null;
			});

			return client;
		} catch (error) {
			console.error("Error connecting to MongoDB", error)
			throw error
		}
	}

	let clientPromise: Promise<MongoClient>

	clientPromise = connectToMongo()
	return clientPromise
}

export default mongoClientPromise
