import { DeleteChannelCommand } from "@aws-sdk/client-medialive";
import { mediaLiveClient } from "./client.js";

export const deleteMediaLiveChannel = async (channelId) => {
    const input = {
        "ChannelId": channelId,
    };

    const command = new DeleteChannelCommand(input);
    const response = await mediaLiveClient.send(command);

    return response.$metadata.httpStatusCode;
}

// Sample Response
// {
//     '$metadata': {
//       httpStatusCode: 200,
//       requestId: 'c3143546d1405f3',
//       extendedRequestId: undefined,
//       cfId: 'HD2L7gFeCKqcQFnEhdT3U7arj2A=',
//       attempts: 1,
//       totalRetryDelay: 0
//     },
//     Arn: 'arn:aws:medialive:ca-central-1:22167:channel:9438473',
//     ChannelClass: 'STANDARD',
//     Destinations: [
//       { Id: 'destination1', MediaPackageSettings: [], Settings: [Array] }
//     ],
//     EgressEndpoints: [ { SourceIp: '3.98.118.122' }, { SourceIp: '15.222.175.7' } ],
//     EncoderSettings: {
//       AudioDescriptions: [ [Object], [Object], [Object], [Object] ],
//       CaptionDescriptions: [],
//       OutputGroups: [ [Object] ],
//       TimecodeConfig: { Source: 'SYSTEMCLOCK' },
//       VideoDescriptions: [ [Object], [Object], [Object], [Object] ]
//     },
//     Id: '93843',
//     InputAttachments: [ { InputAttachmentName: 'Input 2', InputId: '9864' } ],
//     InputSpecification: { Codec: 'AVC', MaximumBitrate: 'MAX_10_MBPS', Resolution: 'SD' },
//     LogLevel: 'ERROR',
//     Maintenance: { MaintenanceDay: 'MONDAY', MaintenanceStartTime: '17:00' },
//     Name: 'test_sdk',
//     PipelineDetails: [],
//     PipelinesRunningCount: 0,
//     RoleArn: 'arn:aws:iam::2289167:role/MediaLiveAccessRole',
//     State: 'DELETING',
//     Tags: { creation: 'created by API' }
// }