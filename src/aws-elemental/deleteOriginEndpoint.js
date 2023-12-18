import { DeleteOriginEndpointCommand } from "@aws-sdk/client-mediapackagev2";
import { mediaPackageClient } from "./client.js";

export const deleteOriginEndpoint = async (id) => {
	const input = {
		"ChannelGroupName": `ChannelGroup-${id}`,
		"ChannelName": `Channel-${id}`,
		"OriginEndpointName": `Endpoint-${id}`,
	};

	const command = new DeleteOriginEndpointCommand(input);
	const response = await mediaPackageClient.send(command);

	return response.$metadata.httpStatusCode;
}


// Sample Response
// {
//   '$metadata': {
//     httpStatusCode: 200,
//     requestId: '3653c357e3-4eed3-0618cc03cc0',
//     extendedRequestId: undefined,
//     cfId: undefined,
//     attempts: 1,
//     totalRetryDelay: 0
//   }
// }