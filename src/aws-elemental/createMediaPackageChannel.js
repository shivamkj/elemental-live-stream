import { CreateChannelCommand } from "@aws-sdk/client-mediapackagev2";
import { mediaPackageClient } from "./client.js";

export const createMediaPackageChannel = async (id) => {
  const input = {
    "ChannelGroupName": `ChannelGroup-${id}`,
    "ChannelName": `Channel-${id}`,
    "Tags": {
      "creation": "created by API",
    },
  };
  
  const command = new CreateChannelCommand(input);
  const response = await mediaPackageClient.send(command);

  return response.IngestEndpoints;
}

// Sample Response 
// {
//   '$metadata': {
//     httpStatusCode: 200,
//     requestId: 'ca163d0-81-90a-32dfe008',
//     extendedRequestId: undefined,
//     cfId: undefined,
//     attempts: 1,
//     totalRetryDelay: 0
//   },
//   Arn: 'arn:aws:mediapackagev2:ca-central-1:2267:channelGroup/RTMP_Live_Stream_Group/channel/RTMP_Live_Stream_Channel',
//   ChannelGroupName: 'RTMP_Live_Stream_Group',
//   ChannelName: 'RTMP_Live_Stream_Channel',
//   CreatedAt: 2023-11-08T10:22:26.000Z,
//   IngestEndpoints: [
//     {
//       Id: '1',
//       Url: 'https://pnl-1.ingest.pi78fd.mediapackagev2.ca-central-1.amazonaws.com/in/v1/RTMP_Live_Stream_Group/1/RTMP_Live_Stream_Channel/index'
//     },
//     {
//       Id: '2',
//       Url: 'https://pnl-2.ingest.pi78fd.mediapackagev2.ca-central-1.amazonaws.com/in/v1/RTMP_Live_Stream_Group/2/RTMP_Live_Stream_Channel/index'
//     }
//   ],
//   ModifiedAt: 2023-11-08T10:22:26.000Z,
//   Tags: { creation: 'created by API' }
// }