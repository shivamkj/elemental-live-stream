import { createInput } from "./aws-elemental/createInput.js";
import { createInputSecurityGroup } from "./aws-elemental/createInputSecurityGroup.js"
import { createMediaLiveChannel } from "./aws-elemental/createMediaLiveChannel.js";
import { createMediaPackageChannel } from "./aws-elemental/createMediaPackageChannel.js";
import { createMediaPackageChannelGroup } from "./aws-elemental/createMediaPackageChannelGroup.js";
import { createOriginEndpoint } from "./aws-elemental/createOriginEndpoint.js";
import { deleteInput } from "./aws-elemental/deleteInput.js";
import { deleteInputSecurityGroup } from "./aws-elemental/deleteInputSecurityGroup.js";
import { deleteMediaLiveChannel } from "./aws-elemental/deleteMediaLiveChannel.js";
import { deleteMediaPackageChannel } from "./aws-elemental/deleteMediaPackageChannel.js";
import { deleteMediaPackageChannelGroup } from "./aws-elemental/deleteMediaPackageChannelGroup.js";
import { deleteOriginEndpoint } from "./aws-elemental/deleteOriginEndpoint.js";
import { putOriginEndpointPolicy } from "./aws-elemental/putOriginEndpointPolicy.js";
import { startChannel } from "./aws-elemental/startChannel.js";
import { stopChannel } from "./aws-elemental/stopChannel.js";

const ID = "af07b1ce0lkm";
const DELAY_BETWEEN_DELETIONS = 20000;

const createLiveStream = async (id) => {
    const securityGroupId = await createInputSecurityGroup(id);
    console.log({ securityGroupId });
    const { inputId, destinations } = await createInput(id, securityGroupId);
    console.log({ inputId, destinations });
    await createMediaPackageChannelGroup(id);
    const ingestEndpoints = await createMediaPackageChannel(id);
    const url = await createOriginEndpoint(id);
    console.log(url);
    await putOriginEndpointPolicy(id);
    const channelId = await createMediaLiveChannel(id, inputId, ingestEndpoints);
    console.log({ channelId })
}

const startLiveStream = async (channelId) => {
    await startChannel(channelId);
}

const deleteLiveStream = async (id, channelId, inputId, securityGroupId) => {
    await stopChannel(channelId)
        .then(() => withDelay(deleteMediaLiveChannel.bind(null, channelId)))
        .then(() => withDelay(deleteInput.bind(null, inputId, 40000)))
        .then(() => withDelay(deleteInputSecurityGroup.bind(null, securityGroupId)))
        .then(() => deleteOriginEndpoint(id))
        .then(() => deleteMediaPackageChannel(id))
        .then(() => deleteMediaPackageChannelGroup(id));
}

const withDelay = async (funnction, time) => {
    await new Promise(resolve => setTimeout(resolve, time || DELAY_BETWEEN_DELETIONS)).then(() => funnction());
}

// createLiveStream(ID).then(() => {
//     console.log("Created Successfully");
// });

// startLiveStream("444284").then(() => {
//     console.log("Started Successfully");
// });

// deleteLiveStream(ID, "444282", "72745", "567418").then(() => {
//     console.log("Deleted Successfully");
// });