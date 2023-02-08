import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const ORIGIN = "http://localhost:5173";

const RoomPage = () => {
    const { roomId } = useParams();

    const myMeeting = async (element) => {
        const appId = 1103228408;
        const serverSecret = "b4cf09d18155fedd27982b9de3fa577e";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appId,
            serverSecret,
            roomId,
            Date.now().toString(),
            "Ricko"
        );
        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name: "Copy Link",
                    url: `${ORIGIN}/room/${roomId}`,
                },
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
        });
    };

    return (
        <div>
            <div ref={myMeeting} style={{ height: "100vh" }} />
        </div>
    );
};

export default RoomPage;
