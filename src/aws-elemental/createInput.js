import { CreateInputCommand } from "@aws-sdk/client-medialive";
import { mediaLiveClient } from "./client.js";

export const createInput = async (id, securityGroupId) => {
    const input = {
        "Destinations": [
            { "StreamName": `live/${id}` },
            { "StreamName": `live/${id}` },
        ],
        "InputSecurityGroups": [
            securityGroupId,
        ],
        "Name": `RTMP Input ${id}`,
        "Type": "RTMP_PUSH", // "UDP_PUSH", "RTP_PUSH", "RTMP_PULL", "URL_PULL", "MP4_FILE", "MEDIACONNECT", "INPUT_DEVICE", "AWS_CDI", "TS_FILE"
        "Tags": {
            "creation": "created by API",
        },
    };

    const command = new CreateInputCommand(input);
    const response = await mediaLiveClient.send(command);

    return {
        inputId: response.Input.Id,
        destinations: response.Input.Destinations,
    };
}

// Sample Response
// {
//     '$metadata': {
//       httpStatusCode: 201,
//       requestId: '7678864-40bf-ae9-a0dfda70fd4',
//       extendedRequestId: undefined,
//       cfId: 'UTMj8wK_p7KvPjg6Na7RO_CDKx6vrGj9-77cb80gkpRT1YTQ==',
//       attempts: 1,
//       totalRetryDelay: 0
//     },
//     Input: {
//       Arn: 'arn:aws:medialive:ca-central-1:228702167:input:9363926',
//       AttachedChannels: [],
//       Destinations: [ [Object], [Object] ],
//       Id: '96392',
//       InputClass: 'STANDARD',
//       InputDevices: [],
//       InputPartnerIds: [],
//       InputSourceType: 'STATIC',
//       MediaConnectFlows: [],
//       Name: 'Elemental Test SDK',
//       SecurityGroups: [ '491737' ],
//       Sources: [],
//       State: 'DETACHED',
//       Tags: { creation: 'created by API' },
//       Type: 'RTMP_PUSH'
//     }
// }