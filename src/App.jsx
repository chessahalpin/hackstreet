import { useState } from "react";
import "./App.css";
import StreamlabsLogo from "./assets/StreamlabsLogo.svg";
import Video from "./assets/Video.svg";
import Video2 from "./assets/Video2.svg";
import Thumbnail1 from "./assets/thumbnail1.png";
import Thumbnail2 from "./assets/thumbnail2.png";
import Thumbnail3 from "./assets/thumbnail3.png";
import Thumbnail4 from "./assets/thumbnail4.png";
import Thumbnail5 from "./assets/thumbnail5.png";
import cloudbot from "./assets/cloudbot.svg";
import vector from "./assets/Vector.svg";
import multistream from "./assets/multistream.svg";
import droppedFrames from "./assets/dropped-frames.svg";
import notifications from "./assets/notifications.svg";
import StreamlabsIcon from "./assets/streamlabs.svg";
import Card from "./Card";

function App() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [isPart2, setIsPart2] = useState(false);

  const handleClick = () => {
    setIsSpinning(true);
    setTimeout(() => {
      setIsSpinning(false);
      setIsPart2(true);
    }, 2000);
  };

  return (
    <div style={{ display: "grid", gap: 15, position: "relative" }}>
      {isSpinning && (
        <div
          style={{
            position: "absolute", 
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.7)", // Black background with 70% opacity
            zIndex: 1000, // Ensure it's on top of the content
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={StreamlabsLogo}
            alt="Streamlabs Logo"
            className="spinner"
            style={{ width: "100px", height: "auto" }}
          />
        </div>
      )}
      <div style={{ display: "flex", gap: 20, alignItems: "end" }}>
        <img src={StreamlabsLogo} alt="Streamlabs Logo" className="logo" />
        <div
          style={{
            fontSize: 24,
            fontWeight: "500",
          }}
        >
          Welcome to your streaming journey, @salmanali!
        </div>
      </div>
      <div style={{ fontWeight: 500, fontSize: 20 }}>
        You’re on the road to your first 5 followers! We have personalized
        recommendations based on your last stream to help you get there.
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: 24,
          borderRadius: 4,
          position: "relative",
        }}
      >
        <div
          style={{
            width: "60%",
            height: "100%",
            backgroundColor: "#72D5FF",
            borderRadius: "4px",
            position: "relative",
          }}
        >
          <span
            style={{
              position: "absolute",
              right: 10,
              top: "50%",
              transform: "translateY(-50%)",
              color: "black",
              fontWeight: "bold",
            }}
          >
            3/5 followers
          </span>
        </div>
        <div
          style={{
            width: "40%",
            height: "100%",
            backgroundColor: "black",
            borderRadius: 4,
          }}
        ></div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "50% 50%",
          gap: 20,
          justifyItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Card
            title={
              isPart2
                ? "We picked up 70%+ silence during your stream"
                : "Add Alert Box to your stream"
            }
            button={isPart2 ? "View Suggestions" : "Setup Alert Box"}
            description={
              isPart2
                ? "Consider chatting more with your viewers to increase engagement."
                : "Increase engagement by celebrating viewer events."
            }
            video={isPart2 ? Thumbnail4 : Thumbnail1}
            icon={isPart2 ? vector : notifications}
          />
          <Card
            title={
              isPart2
                ? "We noticed you only went live to Twitch"
                : "You dropped frames between 1:24 and 2:36"
            }
            button={isPart2 ? "Setup Multistream" : "Troubleshoot"}
            description={
              isPart2
                ? "Try Multistream to start reaching a larger audience."
                : "Try adjusting your Frame Rate to resolve this issue."
            }
            video={isPart2 ? Thumbnail5 : Thumbnail2}
            icon={isPart2 ? multistream : droppedFrames}
          />
          <Card
            title={
              isPart2
                ? "You dropped frames between 5:39 and 7:41"
                : "Enable Cloudbot for better chat management"
            }
            button={isPart2 ? "Troubleshoot" : "Setup Cloudbot"}
            description={
              isPart2
                ? "Try adjusting your Frame Rate to resolve this issue."
                : "You had 56 messages you can moderate and interact with."
            }
            video={isPart2 ? Thumbnail2 : Thumbnail3}
            icon={isPart2 ? droppedFrames : cloudbot}
          />
        </div>
        <img
          src={isPart2 ? Video2 : Video}
          alt="Video"
          style={{ cursor: "pointer" }}
        />
      </div>

      <div style={{ fontSize: 16, fontWeight: 500 }}>
        Don’t stop this hot streak! Ready to go live again?
      </div>
      <button
        onClick={handleClick}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 273,
          height: 64,
          borderRadius: 100,
        }}
      >
        <img
          src={StreamlabsIcon}
          alt="Streamlabs Icon"
          style={{ marginRight: 8 }}
        />
        Launch Streamlabs Desktop
      </button>
    </div>
  );
}

export default App;
