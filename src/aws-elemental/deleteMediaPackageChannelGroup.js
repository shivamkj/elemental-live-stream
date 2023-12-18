import { DeleteChannelGroupCommand } from "@aws-sdk/client-mediapackagev2";
import { mediaPackageClient } from "./client.js";

export const deleteMediaPackageChannelGroup = async (id) => {
    const input = {
        "ChannelGroupName": `ChannelGroup-${id}`,
    };

    const command = new DeleteChannelGroupCommand(input);
    const response = await mediaPackageClient.send(command);

    return response.$metadata.httpStatusCode;
}

// Sample Response
// {
//     '$metadata': {
//       httpStatusCode: 200,
//       requestId: '7a985585-4e208c8d38e22f',
//       extendedRequestId: undefined,
//       cfId: undefined,
//       attempts: 1,
//       totalRetryDelay: 0
//     }
//   }