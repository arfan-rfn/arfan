import { env } from "@/env";
import { S3Client } from "@aws-sdk/client-s3";

const BUCKET = env.AWS_BUCKET_NAME;
const REGION = env.AWS_REGION;
const AWS_KEY = env.AWS_ACCESS_KEY_ID;
const AWS_SECRET = env.AWS_SECRET_ACCESS_KEY;



export const s3: S3Client = new S3Client({
	region: REGION,
	credentials: {
		accessKeyId: AWS_KEY as string,
		secretAccessKey: AWS_SECRET as string,
	},
});

export const BucketName = BUCKET;