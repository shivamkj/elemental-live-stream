import { CreateChannelCommand } from "@aws-sdk/client-medialive";
import { mediaLiveClient } from "./client.js"

const ENCODER_SETTINGS = {
    "AudioDescriptions": [
        {
            "AudioSelectorName": "default",
            "AudioTypeControl": "FOLLOW_INPUT",
            "CodecSettings": {
                "AacSettings": {
                    "Bitrate": 64000,
                    "RawFormat": "NONE",
                    "Spec": "MPEG4"
                }
            },
            "LanguageCodeControl": "FOLLOW_INPUT",
            "Name": "audio_1_aac64"
        },
        {
            "AudioSelectorName": "default",
            "AudioTypeControl": "FOLLOW_INPUT",
            "CodecSettings": {
                "AacSettings": {
                    "Bitrate": 64000,
                    "RawFormat": "NONE",
                    "Spec": "MPEG4"
                }
            },
            "LanguageCodeControl": "FOLLOW_INPUT",
            "Name": "audio_3_aac64"
        },
        {
            "AudioSelectorName": "default",
            "AudioTypeControl": "FOLLOW_INPUT",
            "CodecSettings": {
                "AacSettings": {
                    "Bitrate": 96000,
                    "RawFormat": "NONE",
                    "Spec": "MPEG4"
                }
            },
            "LanguageCodeControl": "FOLLOW_INPUT",
            "Name": "audio_2_aac96"
        },
        {
            "AudioSelectorName": "default",
            "AudioTypeControl": "FOLLOW_INPUT",
            "CodecSettings": {
                "AacSettings": {
                    "Bitrate": 96000,
                    "RawFormat": "NONE",
                    "Spec": "MPEG4"
                }
            },
            "LanguageCodeControl": "FOLLOW_INPUT",
            "Name": "audio_3_aac96"
        }
    ],
    "CaptionDescriptions": [],
    "OutputGroups": [
        {
            "Name": "TN2224",
            "OutputGroupSettings": {
                "HlsGroupSettings": {
                    "AdMarkers": [],
                    "CaptionLanguageMappings": [],
                    "CaptionLanguageSetting": "OMIT",
                    "ClientCache": "ENABLED",
                    "CodecSpecification": "RFC_4281",
                    "Destination": {
                        "DestinationRefId": "destination1"
                    },
                    "DirectoryStructure": "SINGLE_DIRECTORY",
                    "HlsCdnSettings": {
                        "HlsBasicPutSettings": {
                            "ConnectionRetryInterval": 30,
                            "FilecacheDuration": 300,
                            "NumRetries": 5,
                            "RestartDelay": 5
                        }
                    },
                    "IndexNSegments": 10,
                    "InputLossAction": "EMIT_OUTPUT",
                    "IvInManifest": "INCLUDE",
                    "IvSource": "FOLLOWS_SEGMENT_NUMBER",
                    "KeepSegments": 21,
                    "ManifestCompression": "NONE",
                    "ManifestDurationFormat": "FLOATING_POINT",
                    "Mode": "LIVE",
                    "OutputSelection": "MANIFESTS_AND_SEGMENTS",
                    "ProgramDateTime": "INCLUDE",
                    "ProgramDateTimePeriod": 600,
                    "SegmentLength": 4,
                    "SegmentationMode": "USE_SEGMENT_DURATION",
                    "SegmentsPerSubdirectory": 10000,
                    "StreamInfResolution": "INCLUDE",
                    "TimedMetadataId3Frame": "PRIV",
                    "TimedMetadataId3Period": 10,
                    "TsFileMode": "SEGMENTED_FILES"
                }
            },
            "Outputs": [
                {
                    "AudioDescriptionNames": [
                        "audio_2_aac96"
                    ],
                    "CaptionDescriptionNames": [],
                    "OutputSettings": {
                        "HlsOutputSettings": {
                            "H265PackagingType": "HVC1",
                            "HlsSettings": {
                                "StandardHlsSettings": {
                                    "AudioRenditionSets": "program_audio",
                                    "M3u8Settings": {
                                        "AudioFramesPerPes": 4,
                                        "AudioPids": "492-498",
                                        "EcmPid": "8182",
                                        "KlvBehavior": "NO_PASSTHROUGH",
                                        "NielsenId3Behavior": "NO_PASSTHROUGH",
                                        "PcrControl": "PCR_EVERY_PES_PACKET",
                                        "PmtPid": "480",
                                        "ProgramNum": 1,
                                        "Scte35Behavior": "NO_PASSTHROUGH",
                                        "Scte35Pid": "500",
                                        "TimedMetadataBehavior": "NO_PASSTHROUGH",
                                        "TimedMetadataPid": "502",
                                        "VideoPid": "481"
                                    }
                                }
                            },
                            "NameModifier": "_960x540_2000k"
                        }
                    },
                    "VideoDescriptionName": "video_960_540"
                },
                {
                    "AudioDescriptionNames": [
                        "audio_3_aac96"
                    ],
                    "CaptionDescriptionNames": [],
                    "OutputSettings": {
                        "HlsOutputSettings": {
                            "HlsSettings": {
                                "StandardHlsSettings": {
                                    "AudioRenditionSets": "program_audio",
                                    "M3u8Settings": {
                                        "AudioPids": "492-498",
                                        "EcmPid": "8182",
                                        "PcrControl": "PCR_EVERY_PES_PACKET",
                                        "PmtPid": "480",
                                        "Scte35Behavior": "NO_PASSTHROUGH",
                                        "Scte35Pid": "500",
                                        "TimedMetadataBehavior": "NO_PASSTHROUGH",
                                        "VideoPid": "481"
                                    }
                                }
                            },
                            "NameModifier": "_1280x720_3300k"
                        }
                    },
                    "VideoDescriptionName": "video_1280_720_1"
                },
                {
                    "AudioDescriptionNames": [
                        "audio_1_aac64"
                    ],
                    "CaptionDescriptionNames": [],
                    "OutputSettings": {
                        "HlsOutputSettings": {
                            "HlsSettings": {
                                "StandardHlsSettings": {
                                    "AudioRenditionSets": "program_audio",
                                    "M3u8Settings": {
                                        "AudioPids": "492-498",
                                        "EcmPid": "8182",
                                        "PcrControl": "PCR_EVERY_PES_PACKET",
                                        "PmtPid": "480",
                                        "Scte35Behavior": "NO_PASSTHROUGH",
                                        "Scte35Pid": "500",
                                        "TimedMetadataBehavior": "NO_PASSTHROUGH",
                                        "VideoPid": "481"
                                    }
                                }
                            },
                            "NameModifier": "_416x234_200k"
                        }
                    },
                    "VideoDescriptionName": "video_416_234"
                },
                {
                    "AudioDescriptionNames": [
                        "audio_3_aac64"
                    ],
                    "CaptionDescriptionNames": [],
                    "OutputSettings": {
                        "HlsOutputSettings": {
                            "H265PackagingType": "HVC1",
                            "HlsSettings": {
                                "StandardHlsSettings": {
                                    "AudioRenditionSets": "program_audio",
                                    "M3u8Settings": {
                                        "AudioFramesPerPes": 4,
                                        "AudioPids": "492-498",
                                        "EcmPid": "8182",
                                        "KlvBehavior": "NO_PASSTHROUGH",
                                        "NielsenId3Behavior": "NO_PASSTHROUGH",
                                        "PcrControl": "PCR_EVERY_PES_PACKET",
                                        "PmtPid": "480",
                                        "ProgramNum": 1,
                                        "Scte35Behavior": "NO_PASSTHROUGH",
                                        "Scte35Pid": "500",
                                        "TimedMetadataBehavior": "NO_PASSTHROUGH",
                                        "TimedMetadataPid": "502",
                                        "VideoPid": "481"
                                    }
                                }
                            },
                            "NameModifier": "_640x360_800k"
                        }
                    },
                    "VideoDescriptionName": "video_640_360"
                }
            ]
        }
    ],
    "TimecodeConfig": {
        "Source": "SYSTEMCLOCK"
    },
    "VideoDescriptions": [
        {
            "CodecSettings": {
                "H264Settings": {
                    "AdaptiveQuantization": "HIGH",
                    "Bitrate": 200000,
                    "ColorMetadata": "INSERT",
                    "EntropyEncoding": "CAVLC",
                    "FlickerAq": "ENABLED",
                    "FramerateControl": "SPECIFIED",
                    "FramerateDenominator": 1001,
                    "FramerateNumerator": 15000,
                    "GopBReference": "DISABLED",
                    "GopNumBFrames": 0,
                    "GopSize": 30,
                    "GopSizeUnits": "FRAMES",
                    "Level": "H264_LEVEL_3",
                    "LookAheadRateControl": "HIGH",
                    "ParControl": "INITIALIZE_FROM_SOURCE",
                    "Profile": "BASELINE",
                    "RateControlMode": "CBR",
                    "SceneChangeDetect": "ENABLED",
                    "SpatialAq": "ENABLED",
                    "Syntax": "DEFAULT",
                    "TemporalAq": "ENABLED"
                }
            },
            "Height": 236,
            "Name": "video_416_234",
            "ScalingBehavior": "DEFAULT",
            "Width": 416
        },
        {
            "CodecSettings": {
                "H264Settings": {
                    "AdaptiveQuantization": "HIGH",
                    "AfdSignaling": "NONE",
                    "Bitrate": 800000,
                    "ColorMetadata": "INSERT",
                    "EntropyEncoding": "CABAC",
                    "FlickerAq": "ENABLED",
                    "ForceFieldPictures": "DISABLED",
                    "FramerateControl": "SPECIFIED",
                    "FramerateDenominator": 1001,
                    "FramerateNumerator": 30000,
                    "GopBReference": "ENABLED",
                    "GopClosedCadence": 1,
                    "GopNumBFrames": 3,
                    "GopSize": 60,
                    "GopSizeUnits": "FRAMES",
                    "Level": "H264_LEVEL_3",
                    "LookAheadRateControl": "HIGH",
                    "NumRefFrames": 1,
                    "ParControl": "INITIALIZE_FROM_SOURCE",
                    "Profile": "MAIN",
                    "RateControlMode": "CBR",
                    "ScanType": "PROGRESSIVE",
                    "SceneChangeDetect": "ENABLED",
                    "SpatialAq": "ENABLED",
                    "SubgopLength": "FIXED",
                    "Syntax": "DEFAULT",
                    "TemporalAq": "ENABLED",
                    "TimecodeInsertion": "DISABLED"
                }
            },
            "Height": 360,
            "Name": "video_640_360",
            "RespondToAfd": "NONE",
            "ScalingBehavior": "DEFAULT",
            "Sharpness": 50,
            "Width": 640
        },
        {
            "CodecSettings": {
                "H264Settings": {
                    "AdaptiveQuantization": "HIGH",
                    "AfdSignaling": "NONE",
                    "Bitrate": 2200000,
                    "ColorMetadata": "INSERT",
                    "EntropyEncoding": "CABAC",
                    "FlickerAq": "ENABLED",
                    "ForceFieldPictures": "DISABLED",
                    "FramerateControl": "SPECIFIED",
                    "FramerateDenominator": 1001,
                    "FramerateNumerator": 30000,
                    "GopBReference": "ENABLED",
                    "GopClosedCadence": 1,
                    "GopNumBFrames": 3,
                    "GopSize": 60,
                    "GopSizeUnits": "FRAMES",
                    "Level": "H264_LEVEL_4_1",
                    "LookAheadRateControl": "HIGH",
                    "NumRefFrames": 1,
                    "ParControl": "INITIALIZE_FROM_SOURCE",
                    "Profile": "HIGH",
                    "RateControlMode": "CBR",
                    "ScanType": "PROGRESSIVE",
                    "SceneChangeDetect": "ENABLED",
                    "SpatialAq": "ENABLED",
                    "SubgopLength": "FIXED",
                    "Syntax": "DEFAULT",
                    "TemporalAq": "ENABLED",
                    "TimecodeInsertion": "DISABLED"
                }
            },
            "Height": 540,
            "Name": "video_960_540",
            "RespondToAfd": "NONE",
            "ScalingBehavior": "DEFAULT",
            "Sharpness": 50,
            "Width": 960
        },
        {
            "CodecSettings": {
                "H264Settings": {
                    "AdaptiveQuantization": "HIGH",
                    "Bitrate": 3300000,
                    "ColorMetadata": "INSERT",
                    "EntropyEncoding": "CABAC",
                    "FlickerAq": "ENABLED",
                    "FramerateControl": "SPECIFIED",
                    "FramerateDenominator": 1001,
                    "FramerateNumerator": 30000,
                    "GopBReference": "ENABLED",
                    "GopNumBFrames": 3,
                    "GopSize": 60,
                    "GopSizeUnits": "FRAMES",
                    "Level": "H264_LEVEL_4_1",
                    "LookAheadRateControl": "HIGH",
                    "ParControl": "INITIALIZE_FROM_SOURCE",
                    "Profile": "HIGH",
                    "RateControlMode": "CBR",
                    "SceneChangeDetect": "ENABLED",
                    "SpatialAq": "ENABLED",
                    "Syntax": "DEFAULT",
                    "TemporalAq": "ENABLED"
                }
            },
            "Height": 720,
            "Name": "video_1280_720_1",
            "ScalingBehavior": "DEFAULT",
            "Width": 1280
        }
    ]
}

export const createMediaLiveChannel = async (id, inputId, destinationSettings) => {

    const input = {
        // CdiInputSpecification: { // CdiInputSpecification
        //     Resolution: "SD", // || "HD" || "FHD" || "UHD",
        // },
        "ChannelClass": "STANDARD", // || "SINGLE_PIPELINE",
        "Destinations": [
            {
                "MediaPackageSettings": [],
                "Id": `destination1`,
                "Settings": [
                    {
                        "Url": destinationSettings[0].Url,
                        // "Username": "cf9b8e8af4b330f289ef4943",
                        // "PasswordParam": "/medialive/password",
                    },
                    {
                        "Url": destinationSettings[1].Url,
                        // "Username": "4e811a9748859823dacdf53",
                        // "PasswordParam": "/medialive/password2",
                    },
                ],
            },
        ],
        "EncoderSettings": ENCODER_SETTINGS,
        "InputAttachments": [
            {

                "InputAttachmentName": "RTMP Input",
                "InputId": inputId,
            },
        ],
        "InputSpecification": { // InputSpecification
            "Codec": "AVC", // "MPEG2", "HEVC"
            "MaximumBitrate": "MAX_10_MBPS", // "MAX_20_MBPS", "MAX_50_MBPS"
            "Resolution": "SD", // "HD", "UHD",
        },
        "LogLevel": "ERROR", // "WARNING" , "INFO" , "DEBUG" , "DISABLED"
        // Maintenance: { // MaintenanceCreateSettings
        //     MaintenanceDay: "MONDAY" , "TUESDAY" , "WEDNESDAY" , "THURSDAY" , "FRIDAY" , "SATURDAY" , "SUNDAY"
        //     MaintenanceStartTime: "STRING_VALUE",
        // },
        "Name": `MediaLive Channel ${id}`,
        "RoleArn": process.env.RoleArn,
        "Tags": {
            "creation": "created by API",
        },
    };

    const command = new CreateChannelCommand(input);
    const response = await mediaLiveClient.send(command);

    return response.Channel.Id;
}

// Sample Response
// {
//     '$metadata': {
//       httpStatusCode: 201,
//       requestId: '75674d05349f1-fd1-6f0e09902',
//       extendedRequestId: undefined,
//       cfId: 'Waa9EMc8tMMJLwIpx86ym2SeHrFbGhUEAOhD1Rj89==',
//       attempts: 1,
//       totalRetryDelay: 0
//     },
//     Channel: {
//       Arn: 'arn:aws:medialive:ca-central-1:22970267:channel:9438473',
//       ChannelClass: 'STANDARD',
//       Destinations: [ [Object] ],
//       EgressEndpoints: [],
//       EncoderSettings: {
//         AudioDescriptions: [Array],
//         CaptionDescriptions: [],
//         OutputGroups: [Array],
//         TimecodeConfig: [Object],
//         VideoDescriptions: [Array]
//       },
//       Id: '9438473',
//       InputAttachments: [ [Object] ],
//       InputSpecification: { Codec: 'AVC', MaximumBitrate: 'MAX_10_MBPS', Resolution: 'SD' },
//       LogLevel: 'ERROR',
//       Maintenance: { MaintenanceDay: 'MONDAY', MaintenanceStartTime: '17:00' },
//       Name: 'test_sdk',
//       PipelineDetails: [],
//       PipelinesRunningCount: 0,
//       RoleArn: 'arn:aws:iam::2210467:role/MediaLiveAccessRole',
//       State: 'CREATING',
//       Tags: { creation: 'created by API' }
//     }
// }