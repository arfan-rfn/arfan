'use server';
import { BucketName, s3 } from "@/lib/s3-client";
import { PutObjectCommand } from "@aws-sdk/client-s3";



export async function uploadFilesToS3(files: File[]) {
	const response = await Promise.all(
		files.map(async (file: File) => {
			const Body = await file.arrayBuffer();
			const buffer = Buffer.from(Body);
			const key = `${Date.now()}-${file.name}`;
			await s3.send(new PutObjectCommand({ Bucket: BucketName, Key: key, Body: buffer }));
			return key;
		})
	);

	return response;
}