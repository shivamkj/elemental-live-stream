import { CreateChannelGroupCommand } from "@aws-sdk/client-mediapackagev2";
import { mediaPackageClient } from "./client.js";

export const createMediaPackageChannelGroup = async (id) => {
    const input = {
        "ChannelGroupName": `ChannelGroup-${id}`,
        "Tags": {
            "creation": "created by API",
        },
    };

    const command = new CreateChannelGroupCommand(input);
    const response = await mediaPackageClient.send(command);

    return response.Arn;
}

// Sample Response
// {
//     '$metadata': {
//       httpStatusCode: 200,
//       requestId: '76b8cd241a8-e23166f4',
//       extendedRequestId: undefined,
//       cfId: undefined,
//       attempts: 1,
//       totalRetryDelay: 0
//     },
//     Arn: 'arn:aws:mediapackagev2:ca-central-1:22190427:channelGroup/RTMP_Live_Stream_Group',
//     ChannelGroupName: 'RTMP_Live_Stream_Group',
//     CreatedAt: 2023-11-08T10:21:55.000Z,
//     EgressDomain: 'p1nl.egress.pi8fd.mediapackagev2.ca-central-1.amazonaws.com',
//     ModifiedAt: 2023-11-08T10:21:55.000Z,
//     Tags: { creation: 'created by API' }
// }