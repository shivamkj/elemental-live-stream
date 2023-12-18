import { PutOriginEndpointPolicyCommand } from "@aws-sdk/client-mediapackagev2";
import { mediaPackageClient } from "./client.js";

export const putOriginEndpointPolicy = async (id) => {
    const input = {
        "ChannelGroupName": `ChannelGroup-${id}`,
        "ChannelName": `Channel-${id}`,
        "OriginEndpointName": `Endpoint-${id}`,
        "Policy": `{
            "Version": "2012-10-17",
            "Id": "AnonymousAccessPolicy",
            "Statement": [
                {
                    "Sid": "AllowAnonymousAccess",
                    "Effect": "Allow",
                    "Principal": "*",
                    "Action": "mediapackagev2:GetObject",
                    "Resource": "arn:aws:mediapackagev2:${process.env.Region}:${process.env.AccountID}:channelGroup/ChannelGroup-${id}/channel/Channel-${id}/originEndpoint/Endpoint-${id}"
                }
            ]
        }`
    };

    const command = new PutOriginEndpointPolicyCommand(input);
    const response = await mediaPackageClient.send(command);

    return response.$metadata.httpStatusCode;
}


// Sample Response
// {
//     '$metadata': {
//       httpStatusCode: 200,
//       requestId: '9ef1b1464-959a5c9d07998',
//       extendedRequestId: undefined,
//       cfId: undefined,
//       attempts: 1,
//       totalRetryDelay: 0
//     }
// }