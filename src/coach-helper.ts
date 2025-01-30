export async function fetchFromLocalhost(): Promise<any> {
    try {
        // const response = await fetch('http://localhost:8000/getFeedback');
        // if (!response.ok) {
        //     throw new Error(`HTTP error! status: ${response.status}`);
        // }
        // console.log(response);
        // const data = await response.json();

        // const feedback = Object.entries(data).map(([key, value]) => {
        //     return {
        //         Title: value.Title,
        //         Feedback: value.Feedback,
        //     };
        // });
        const feedback = recommendations;
        await wait(2000);
        console.log(feedback);

        return feedback;
    } catch (error) {
        console.error('Error fetching from localhost:', error);
        throw error;
    }
}

function wait(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
const recommendations = [
    {
        Title: 'Engaging Storytelling',
        Feedback:
            'Your storytelling about winning the game is exciting, but make sure to engage viewers by asking them questions or encouraging them to share their own experiences. This will help to draw audiences into the conversation and create a more interactive experience.',
    },
    {
        Title: 'Positive Self-Motivation',
        Feedback:
            "It's great that you shared your intention to have a career in gaming. Encourage yourself and viewers to stay motivated by setting achievable goals during the stream. Share small wins or progress milestones to inspire both you and your audience.",
    },
    {
        Title: 'Interactive Gameplay',
        Feedback:
            'Your anticipation to start the game after a break is good energy! Consider inviting viewers to suggest strategies or participate in game-related decisions. This can make them feel involved and more connected to your content.',
    },
    {
        Title: 'Music Discussion',
        Feedback:
            'Discussing your music preferences is a nice personal touch. Engage with viewers by asking about their music tastes or giving recommendationss. This can create a lively discussion and strengthen community bonds.',
    },
    {
        Title: 'Clarity and Focus',
        Feedback:
            'Some parts of your commentary are informative but can drift off-topic. Keep a slightly tighter focus on game-related content and use transitions for other topics. This can help maintain viewer interest and attention.',
    },
];
// Example usage:
// fetchFromLocalhost('/api/data')
//   .then(data => console.log(data))
//   .catch(error => console.error(error));
