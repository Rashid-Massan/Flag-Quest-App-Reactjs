import { useState } from "react";

export default function FourFlags() {
  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      style={{ backgroundColor: "#000000" }}
    >
      {!showComingSoon ? (
        <button
          onClick={() => setShowComingSoon(true)}
          style={{
            backgroundColor: "#1E1E2F",
            color: "#FFFFFF",
            padding: "12px 24px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            fontFamily: "'Press Start 2P', cursive",
          }}
        >
          Show Coming Soon
        </button>
      ) : (
        <div
          className="flex flex-col items-center justify-center w-full h-full"
          style={{
            backgroundColor: "#1E1E2F",
            color: "#FFFFFF",
            fontFamily: "'Press Start 2P', cursive",
          }}
        >
          <h1 style={{ fontSize: "32px", marginBottom: "16px" }}>
            🚧 Coming Soon 🚧
          </h1>
          <p style={{ fontSize: "14px" }}>We're working on something cool.</p>
        </div>
      )}
    </div>
  );
}