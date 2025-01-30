import team2 from "./assets/team-2.svg";
import smile from "./assets/smile.svg";
import Vector from "./assets/Vector.svg";
import droppedFrames from "./assets/dropped-frames.svg";
import thumbnail1 from "./assets/thumbnail1.png";
import thumbnail4 from "./assets/thumbnail4.png";
import thumbnail5 from "./assets/thumbnail5.png";
import thumbnail6 from "./assets/thumbnail6.png";
import thumbnail7 from "./assets/thumbnail7.png";

export async function fetchFromLocalhost() {
  try {
    await wait(2000);
    return recommendations;
    // const response = await fetch(`http://localhost:8000/getFeedback`);

    // if (!response.ok) {
    //     throw new Error(`HTTP error! status: ${response.status}`);
    // }

    // return await response.json();
  } catch (error) {
    console.error("Error fetching from localhost:", error);
    throw error;
  }
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const recommendations = [
  {
    Title: "Engaging Storytelling",
    Feedback:
      "Your storytelling about winning the game is exciting, but make sure to engage viewers by asking them questions or encouraging them to share their own experiences. This will help to draw audiences into the conversation and create a more interactive experience.",
    icon: team2,
    video: thumbnail6
  },
  {
    Title: "Positive Self-Motivation",
    Feedback:
      "It's great that you shared your intention to have a career in gaming. Encourage yourself and viewers to stay motivated by setting achievable goals during the stream. Share small wins or progress milestones to inspire both you and your audience.",
    icon: smile,
    video: thumbnail7
  },
  {
    Title: "Interactive Gameplay",
    Feedback:
      "Your anticipation to start the game after a break is good energy! Consider inviting viewers to suggest strategies or participate in game-related decisions. This can make them feel involved and more connected to your content.",
    icon: Vector,
    video: thumbnail4
  },
  {
    Title: "Music Discussion",
    Feedback:
      "Discussing your music preferences is a nice personal touch. Engage with viewers by asking about their music tastes or giving recommendationss. This can create a lively discussion and strengthen community bonds.",
    icon: team2,
    video: thumbnail5
  },
  {
    Title: "Clarity and Focus",
    Feedback:
      "Some parts of your commentary are informative but can drift off-topic. Keep a slightly tighter focus on game-related content and use transitions for other topics. This can help maintain viewer interest and attention.",
    icon: droppedFrames,
    video: thumbnail1
  },
];
// Example usage:
// fetchFromLocalhost('/api/data')
//   .then(data => console.log(data))
//   .catch(error => console.error(error));
