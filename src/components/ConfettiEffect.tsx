import { useEffect, useState } from "react";

interface Confetti {
  id: number;
  left: number;
  color: string;
  delay: number;
  duration: number;
}

export const ConfettiEffect = ({ show }: { show: boolean }) => {
  const [confetti, setConfetti] = useState<Confetti[]>([]);

  useEffect(() => {
    if (show) {
      const colors = ['hsl(348, 100%, 48%)', 'hsl(345, 85%, 35%)', 'hsl(355, 90%, 60%)'];
      const newConfetti: Confetti[] = Array.from({ length: 40 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 0.3,
        duration: 2 + Math.random() * 1.5,
      }));
      setConfetti(newConfetti);

      setTimeout(() => setConfetti([]), 4000);
    }
  }, [show]);

  if (!show || confetti.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute w-3 h-3 rounded-full animate-bounce-in"
          style={{
            left: `${piece.left}%`,
            top: '-20px',
            backgroundColor: piece.color,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        />
      ))}
    </div>
  );
};
