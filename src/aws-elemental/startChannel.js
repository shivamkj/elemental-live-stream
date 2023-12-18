import { StartChannelCommand } from "@aws-sdk/client-medialive";
import { mediaLiveClient } from "./client.js";

export const startChannel = async (channelId) => {
    const input = {
        "ChannelId": channelId,
    };

    const command = new StartChannelCommand(input);
    const response = await mediaLiveClient.send(command);

    return response;
}

// Sample Response
// {
//     '$metadata': {
//       httpStatusCode: 200,
//       requestId: '6a0353128d6-4ce6-af5debecf9',
//       extendedRequestId: undefined,
//       cfId: 'M6VUY5gjDBYu6Axgy3qLo7FZzHkzBCQaDty1JrCq0YgmA==',
//       attempts: 1,
//       totalRetryDelay: 0
//     },
//     Arn: 'arn:aws:medialive:ca-central-1:2284217:channel:0997',
//     ChannelClass: 'STANDARD',
//     Destinations: [
//       { Id: 'destination1', MediaPackageSettings: [], Settings: [Array] }
//     ],
//     EgressEndpoints: [ { SourceIp: '3.98.218.77' }, { SourceIp: '15.222.151.47' } ],
//     EncoderSettings: {
//       AudioDescriptions: [ [Object], [Object], [Object], [Object] ],
//       CaptionDescriptions: [],
//       OutputGroups: [ [Object] ],
//       TimecodeConfig: { Source: 'SYSTEMCLOCK' },
//       VideoDescriptions: [ [Object], [Object], [Object], [Object] ]
//     },
//     Id: '306997',
//     InputAttachments: [ { InputAttachmentName: 'RTMP Input', InputId: '8196181' } ],
//     InputSpecification: { Codec: 'AVC', MaximumBitrate: 'MAX_10_MBPS', Resolution: 'SD' },
//     LogLevel: 'ERROR',
//     Maintenance: { MaintenanceDay: 'TUESDAY', MaintenanceStartTime: '13:00' },
//     Name: 'RTMP MediaLive Channel a079ce06m',
//     PipelineDetails: [],
//     PipelinesRunningCount: 0,
//     RoleArn: '',
//     State: 'STARTING',
//     Tags: { creation: 'created by API' }
// }