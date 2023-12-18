import { CreateOriginEndpointCommand } from "@aws-sdk/client-mediapackagev2";
import { mediaPackageClient } from "./client.js";

export const createOriginEndpoint = async (id) => {
	const input = {
		"ChannelGroupName": `ChannelGroup-${id}`,
		"ChannelName": `Channel-${id}`,
		"OriginEndpointName": `Endpoint-${id}`,
		"ContainerType": "TS", // "CMAF"
		"Segment": {
			"SegmentDurationSeconds": Number("4"),
			"SegmentName": "segment",
		},
		"LowLatencyHlsManifests": [
			{
				"ManifestName": `LL-HLS`, // required
			},
		],
		"Tags": {
			"creation": "created by API",
		},
	};

	const command = new CreateOriginEndpointCommand(input);
	const response = await mediaPackageClient.send(command);

	return response.LowLatencyHlsManifests[0].Url;
}


// Sample Response
// {
//   '$metadata': {
//     httpStatusCode: 200,
//     requestId: 'b3a26153-806-884d37db082',
//     extendedRequestId: undefined,
//     cfId: undefined,
//     attempts: 1,
//     totalRetryDelay: 0
//   },
//   Arn: 'arn:aws:mediapackagev2:ca-central-1:229067:channelGroup/RTMP_Live_Stream_Group/channel/RTMP_Live_Stream_Channel/originEndpoint/RTMP_LiveStream_Endpoint',
//   ChannelGroupName: 'RTMP_Live_Stream_Group',
//   ChannelName: 'RTMP_Live_Stream_Channel',
//   ContainerType: 'TS',
//   CreatedAt: 2023-11-08T12:20:15.000Z,
//   HlsManifests: [],
//   LowLatencyHlsManifests: [
//     {
//       ManifestName: 'LL-HLS',
//       ManifestWindowSeconds: 60,
//       Url: 'https://hr9k.egress.pi78fd.mediapackagev2.ca-central-1.amazonaws.com/out/v1/RTMP_Live_Stream_Group/RTMP_Live_Stream_Channel/RTMP_LiveStream_Endpoint/LL-HLS.m3u8'
//     }
//   ],
//   ModifiedAt: 2023-11-08T12:20:15.000Z,
//   OriginEndpointName: 'RTMP_LiveStream_Endpoint',
//   Segment: {
//     IncludeIframeOnlyStreams: false,
//     SegmentDurationSeconds: 4,
//     SegmentName: 'segment',
//     TsIncludeDvbSubtitles: true,
//     TsUseAudioRenditionGroup: true
//   },
//   StartoverWindowSeconds: 900,
//   Tags: { creation: 'created by API' }
// }