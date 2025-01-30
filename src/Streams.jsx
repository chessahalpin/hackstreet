import { useNavigate } from "react-router-dom";
import Video2 from "./assets/stream-image.png";
import { fetchFromLocalhost } from "./coach-helper";
import StreamlabsLogo from "./assets/StreamlabsLogo.svg";
import { useState } from "react";
import "./Streams.css";

export function Streams() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    const data = await fetchFromLocalhost();
    setIsLoading(false);
    setIsTransitioning(true);
    setTimeout(() => {
      navigate("/", { state: { data } });
    }, 500); // Match this with CSS transition duration
  };
  useState(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 100);
  }, []);
  return (
    <div
      style={{
        padding: 40,
        maxWidth: 1000,
        opacity: isTransitioning ? 0 : 1,
        transition: "opacity 0.5s ease-in-out",
      }}
    >
      {isLoading && (
        <div
          className="overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            zIndex: 1000,
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
      <h2>Streams</h2>

      <div
        style={{
          borderRadius: 8,
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          padding: 20,
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontWeight: 600 }}>Fridays Fortnite Fun</span>{" "}
          <span>3:30h</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "start",
            alignItems: "flex-end",
          }}
        >
          <img
            src={Video2}
            alt="Video"
            style={{ cursor: "pointer", width: "50%" }}
          />
          <div>
            <button onClick={handleClick}>
              Get recommendation{" "}
              {isLoading && (
                <span
                  className="loader"
                  style={{
                    width: "12px",
                    height: "12px",
                    border: "2px solid #1D1D1D",
                    borderBottom: "2px solid transparent",
                    borderRadius: "50%",
                    display: "inline-block",
                    marginLeft: "8px",
                    animation: "rotation 1s linear infinite ",
                  }}
                />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
