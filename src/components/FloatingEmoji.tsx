import { useEffect, useState } from "react";

interface FloatingEmojiProps {
  emoji: string;
  delay?: number;
}

export const FloatingEmoji = ({ emoji, delay = 0 }: FloatingEmojiProps) => {
  const [position] = useState({
    left: Math.random() * 100,
    animationDuration: 4 + Math.random() * 3,
  });

  return (
    <div
      className="absolute text-4xl opacity-20 pointer-events-none animate-float"
      style={{
        left: `${position.left}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${position.animationDuration}s`,
        top: `${Math.random() * 80}%`,
      }}
    >
      {emoji}
    </div>
  );
};