import { MediaLiveClient } from "@aws-sdk/client-medialive";
import { MediaPackageV2Client } from "@aws-sdk/client-mediapackagev2";
import 'dotenv/config'

// MediaLive Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/medialive/
// MediaPackage Documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mediapackagev2/

const config = {
    credentials: { accessKeyId: process.env.AccessKeyId, secretAccessKey: process.env.SecretAccessKey },
    region: "ca-central-1", // Replace with your AWS region
}

export const mediaLiveClient = new MediaLiveClient(config);

export const mediaPackageClient = new MediaPackageV2Client(config);