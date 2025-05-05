'use server';
import { BucketName, s3 } from "@/lib/s3-client";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

type options = {
	expiresIn?: number;
	bucketName?: string;
}

export async function getS3SrcByKey(key: string, {
	expiresIn: expiresIn = 3600,
	bucketName: bucketName = BucketName,
}: options = {
	}): Promise<string> {
	const command = new GetObjectCommand({ Bucket: bucketName, Key: key });

	const src = await getSignedUrl(s3, command, { expiresIn: expiresIn });
	return src;
}

export async function getS3Object(key: string) {
	const command = new GetObjectCommand({ Bucket: BucketName, Key: key });
	const response = await s3.send(command);
	return response;
}