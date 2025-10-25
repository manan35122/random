import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Sparkles, Star, Zap, PartyPopper } from "lucide-react";
import { FloatingEmoji } from "@/components/FloatingEmoji";
import { ConfettiEffect } from "@/components/ConfettiEffect";

const SITE_STATUS: number = 1;

const reasons = [
  "You are very nice",
  "you are very good",
  "you are amazing",
  "you are fantastic",
  "You are very nice",
  "you are very good",
  "you are amazing",
  "you are fantastic",
  "You are very nice",
  "you are very good",
  "you are amazing",
  "you are fantastic",
  "You are very nice",
  "you are very good",
  "you are amazing",
  "you are fantastic",
  "You are very nice",
  "you are very good",
  "you are amazing",
  "you are fantastic",
  "You are very nice",
  "you are very good",
  "you are amazing",
  "you are fantastic",
  "You are very nice",
  "you are very good",
  "you are amazing",
  "you are fantastic",
  "You are very nice",
  "you are very good",
  "you are amazing",
  "you are fantastic",
  "You are very nice",
  "you are very good",
  "you are amazing",
  "you are fantastic",
  "You are very nice",
  "you are very good",
  "you are amazing",
  "you are fantastic",
  "You are very nice",
  "you are very good",
  "you are amazing",
  "you are fantastic",
  "You are very nice",
  "you are very good",
  "you are amazing",
  "you are fantastic"
];

const emojis = ["✨", "💫", "⭐", "😇", "🫰", "😌", "🤞🏼", "❤️"];

const Index = () => {
    if (SITE_STATUS === 0) {
    return (
      <div
        style={{
          textAlign: "center",
          marginTop: "40vh",
          fontSize: "3rem",
          fontWeight: "bold",
        }}
      >
        when you see this message let me know, i want to see kitne time baad you open this website ahahhahaha
      </div>
    );
  }
  const [currentIndex, setCurrentIndex] = useState(-1); 
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [showConfetti, setShowConfetti] = useState(false);

  const handleNext = () => {
    if (currentIndex < reasons.length) {
      setDirection('right');
      setCurrentIndex(currentIndex + 1);
      if ((currentIndex + 1) % 10 === 0 && currentIndex >= 0) {
        triggerConfetti();
      }
    }
  };

  const handlePrevious = () => {
    if (currentIndex > -1) {
      setDirection('left');
      setCurrentIndex(currentIndex - 1);
    }
  };

  const triggerConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 100);
  };
  const getTwilightColors = () => ({
    primary: 'hsl(348, 100%, 48%)',  
    secondary: 'hsl(330, 70%, 35%)',  
    accent: 'hsl(340, 80%, 40%)'
  });
  const getGradientForProgress = () => {
    {
      const twilight = getTwilightColors();
      return `radial-gradient(circle at 20% 30%, ${twilight.primary} 0%, transparent 45%), 
              radial-gradient(circle at 80% 50%, ${twilight.secondary} 0%, transparent 50%),
              radial-gradient(circle at 50% 70%, ${twilight.accent} 0%, transparent 40%)`;
    }
  };

  const isIntro = currentIndex === -1;
  const isComplete = currentIndex === reasons.length;
  const isMilestone = (currentIndex + 1) % 10 === 0;

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Modern gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-background via-primary/5 to-secondary/10" />
      <div
        className="fixed inset-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at 20% 50%, hsl(var(--primary) / 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, hsl(var(--secondary) / 0.15) 0%, transparent 50%)',
        }}
      />
      {/* Dynamic gradient background that changes with progress */}
      <div
        className="fixed inset-0 transition-all duration-[2000ms] ease-in-out"
        style={{
          background: getGradientForProgress(),
          opacity: 0.6
        }}
      />

      {/* Subtle floating emojis */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none ">
        {emojis.map((emoji, i) => (
          <FloatingEmoji key={i} emoji={emoji} delay={i * 0.8} />
        ))}
      </div>

      <ConfettiEffect show={showConfetti} />

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4 md:p-6">
        <div className="w-full max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-6 space-y-3">
            <div className="inline-block animate-bounce-in">
              <div className="relative">
                <Sparkles className="w-16 h-16 mx-auto text-primary animate-pulse" />
                <div className="absolute inset-0 blur-xl bg-primary/30 animate-pulse" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              100 Reasons
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 font-semibold">
              Why You're My Best Friend
            </p>
            <div className="flex items-center justify-center gap-3 text-lg">
              <div className="flex items-center gap-2 px-6 py-2 rounded-full bg-muted/50 backdrop-blur-sm border border-primary/20">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse-glow" />
                <span className="font-black text-4xl text-primary">
                  {currentIndex + 1}
                </span>
                <span className="text-muted-foreground font-medium">/</span>
                <span className="text-muted-foreground font-medium text-xl">{reasons.length + 1}</span>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="relative w-full bg-muted/50 rounded-full h-3 mb-6 overflow-hidden backdrop-blur-sm">
            <div
              className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-700 ease-out relative"
              style={{ width: `${Math.max(1, ((currentIndex + 1) / reasons.length) * 100)}%` }}

            >
              <div className="absolute inset-0 bg-white/20 animate-gradient-shift"
                style={{ backgroundSize: '200% 200%' }}
              />
            </div>
          </div>

          {/* Card Display */}
          {isIntro ? (
            <Card className="p-8 md:p-10 mb-8 bg-gradient-to-br from-primary/10 via-card/90 to-secondary/10 backdrop-blur-xl border-2 border-primary/30 animate-scale-in shadow-xl">
            
              <p className="text-3xl md:text-4xl font-black text-foreground mb-4">
                Okayyyyy so here it is!!!
              </p>
              <p className="text-lg md:text-xl text-muted-foreground font-medium">
                Please dont laugh and read all of them if you can, also i am feeling really shy writing this ahhhh mamaaaaaa 😭😭😭😭😭😭😭. 
    
              </p>
            </Card>
          ) : isComplete ? (
            <Card className="p-8 md:p-10 mb-8 bg-gradient-to-br from-primary/10 via-card/90 to-secondary/10 backdrop-blur-xl border-2 border-primary/30 animate-scale-in shadow-xl">
              <Sparkles className="w-16 h-16 mx-auto text-primary animate-pulse mb-4" />
              <p className="text-3xl md:text-4xl font-black text-foreground mb-4">
                That’s All 100! 🎉
              </p>
              <p className="text-lg md:text-xl text-muted-foreground font-medium">
                And honestly, in starting i thought how will i write so many reasons but when i started to think about it and started writing there are countless more reasons! <br />
                Thanks for being the absolute best friend anyone could ask for and for being in my life.
                <br></br>
                THANK YOU ROHAB❤️.
              </p>
            </Card>
          ) : (
            <Card
              key={currentIndex}
              className={`relative p-8 md:p-10 bg-card/90 backdrop-blur-xl border border-primary/10 shadow-[0_20px_60px_-10px_hsl(var(--primary)/0.15)] mb-6 overflow-hidden group ${direction === 'right' ? 'animate-slide-in-right' : 'animate-slide-in-left'
                }`}
            >
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full" />

              <div className="flex items-start gap-6 relative z-10">
                <div className="flex-shrink-0 mt-2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
                    <Star className="relative w-10 h-10 text-primary fill-primary" />
                  </div>
                </div>
                <p className="text-xl md:text-2xl text-card-foreground leading-relaxed font-medium">
                  {reasons[currentIndex]}
                </p>
              </div>
            </Card>
          )}



          {/* Buttons */}
          <div className="flex justify-between">
            <Button
              onClick={handlePrevious}
              disabled={isIntro}
              className={`border transition-all duration-300 ${isIntro
                ? "bg-muted text-muted-foreground cursor-not-allowed opacity-50"
                : "group relative overflow-hidden bg-card/80 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40 text-foreground hover:bg-primary/5 transition-all disabled:opacity-30 disabled:cursor-not-allowed font-semibold text-lg px-8 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
                }`}
            >
              <ChevronLeft className="w-6 h-6 mr-2 group-hover:-translate-x-1 transition-transform" /> Previous
            </Button>

            {/* Milestone indicator */}
            {isMilestone && (
              <div className="absolute left-1/2 -translate-x-1/2 -top-16 animate-bounce-in">
                <div className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-6 py-3 rounded-full font-bold shadow-lg">
                  🎉 Milestone! 🎉
                </div>
              </div>
            )}


            <Button
              onClick={handleNext}
              disabled={isComplete}
              className="group relative overflow-hidden bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-lg hover:shadow-xl font-semibold text-lg px-8 hover:-translate-y-0.5 active:translate-y-0"
            >
              Next <ChevronRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;