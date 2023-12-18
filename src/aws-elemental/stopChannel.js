import { StopChannelCommand } from "@aws-sdk/client-medialive";
import { mediaLiveClient } from "./client.js";

export const stopChannel = async (channelId) => {
    const input = {
        "ChannelId": channelId,
    };

    const command = new StopChannelCommand(input);
    const response = await mediaLiveClient.send(command);

    return response;
}

// Sample Response
// {
//     '$metadata': {
//       httpStatusCode: 200,
//       requestId: 'ae7932-4d8-bbc06d9c66e3a',
//       extendedRequestId: undefined,
//       cfId: 'SNpvMIS7o5hm9DEe02TTgyBU4L6aMUv0B8q1BfqFA==',
//       attempts: 1,
//       totalRetryDelay: 0
//     },
//     Arn: 'arn:aws:medialive:ca-central-1:2210417:channel:3699',
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
//     Id: '3069947',
//     InputAttachments: [ { InputAttachmentName: 'RTMP Input', InputId: '8196181' } ],
//     InputSpecification: { Codec: 'AVC', MaximumBitrate: 'MAX_10_MBPS', Resolution: 'SD' },
//     LogLevel: 'ERROR',
//     Maintenance: { MaintenanceDay: 'TUESDAY', MaintenanceStartTime: '13:00' },
//     Name: 'RTMP MediaLive Channel af0b9e6m',
//     PipelineDetails: [],
//     PipelinesRunningCount: 2,
//     RoleArn: '',
//     State: 'STOPPING',
//     Tags: { creation: 'created by API' }
// }