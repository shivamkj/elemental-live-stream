import { CreateInputSecurityGroupCommand } from "@aws-sdk/client-medialive";
import { mediaLiveClient } from "./client.js";

export const createInputSecurityGroup = async (id, cidr = "0.0.0.0/0") => {
    const input = {
        "WhitelistRules": [
            {
                "Cidr": cidr,
            },
        ],
        "Tags": {
            "id": id,
            "creation": "created by API",
        },
    };

    const command = new CreateInputSecurityGroupCommand(input);
    const response = await mediaLiveClient.send(command);

    return response.SecurityGroup.Id;
}

// Sample Response
// {
//     '$metadata': {
//       httpStatusCode: 201,
//       requestId: '0152b4e8-40a2-98b-1e608071',
//       extendedRequestId: undefined,
//       cfId: 'PgTPRYfDq28N8qAyUHWsTndOrYSxsmEAMm63vxVH39w==',
//       attempts: 1,
//       totalRetryDelay: 0
//     },
//     SecurityGroup: {
//       Arn: 'arn:aws:medialive:ca-central-1:290467:inputSecurityGroup:72476',
//       Id: '7216',
//       Inputs: [],
//       State: 'IDLE',
//       Tags: { creation: 'created by API' },
//       WhitelistRules: [ [Object] ]
//     }
// }