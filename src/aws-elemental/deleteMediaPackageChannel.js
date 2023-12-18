import { DeleteChannelCommand } from "@aws-sdk/client-mediapackagev2";
import { mediaPackageClient } from "./client.js";

export const deleteMediaPackageChannel = async (id) => {
	const input = {
		"ChannelGroupName": `ChannelGroup-${id}`,
		"ChannelName": `Channel-${id}`,
	};

	const command = new DeleteChannelCommand(input);
	const response = await mediaPackageClient.send(command);

	return response.$metadata.httpStatusCode;
}


// Sample Response
// {
//   '$metadata': {
//     httpStatusCode: 200,
//     requestId: 'ed34137940f-958e3ef23',
//     extendedRequestId: undefined,
//     cfId: undefined,
//     attempts: 1,
//     totalRetryDelay: 0
//   }
// }