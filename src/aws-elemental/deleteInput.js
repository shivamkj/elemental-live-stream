import { DeleteInputCommand } from "@aws-sdk/client-medialive";
import { mediaLiveClient } from "./client.js";

export const deleteInput = async (inputId) => {
    const input = {
        "InputId": inputId,
    };

    const command = new DeleteInputCommand(input);
    const response = await mediaLiveClient.send(command);

    return response.$metadata.httpStatusCode;
}

// Sample Response
// {
//     '$metadata': {
//       httpStatusCode: 200,
//       requestId: 'c4542f04d463f-84e-0e98539a',
//       extendedRequestId: undefined,
//       cfId: '9Dcl5mJ442Tez4JvHa3qqeDuMnDLnq==',
//       attempts: 1,
//       totalRetryDelay: 0
//     }
// }