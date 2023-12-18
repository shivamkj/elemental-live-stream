import { DeleteInputSecurityGroupCommand } from "@aws-sdk/client-medialive";
import { mediaLiveClient } from "./client.js";

export const deleteInputSecurityGroup = async (securityGroupId) => {
  const input = {
    "InputSecurityGroupId": securityGroupId
  };

  const command = new DeleteInputSecurityGroupCommand(input);
  const response = await mediaLiveClient.send(command);

  return response.$metadata.httpStatusCode;
}

// Sample Response
// {
//   '$metadata': {
//     httpStatusCode: 200,
//     requestId: '6cafdbbfe79-91dddfa1f',
//     extendedRequestId: undefined,
//     cfId: 'D239hVRqO2i0k8D1wEZGmBXmF2r4ruLLh8Q==',
//     attempts: 1,
//     totalRetryDelay: 0
//   }
// }