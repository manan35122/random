import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Sparkles, Star, Zap, PartyPopper } from "lucide-react";
import { FloatingEmoji } from "@/components/FloatingEmoji";
import { ConfettiEffect } from "@/components/ConfettiEffect";

const reasons = [

  "You always know how to make me smile, even on my worst days",
  "You listen to me without judgment",
  "You remember the little things I tell you",
  "You're always there when I need you",
  "You make me laugh until my stomach hurts",
  "You accept me for who I am",
  "You encourage me to be my best self",
  "You share your favorite songs with me",
  "You celebrate my victories with me",
  "You comfort me when I'm sad",
  "You're honest with me, even when it's hard",
  "You make boring days feel special",
  "You understand my weird sense of humor",
  "You never give up on me",
  "You inspire me to be better",
  "You're always up for an adventure",
  "You make the best inside jokes",
  "You remember my favorite things",
  "You're patient with me",
  "You make me feel valued",
  "You share your dreams with me",
  "You're genuinely happy for my successes",
  "You know when I need space",
  "You know when I need a hug",
  "You make ordinary moments extraordinary",
  "You're reliable and trustworthy",
  "You bring out the best in me",
  "You're fun to be around",
  "You have the best taste in memes",
  "You always have my back",
  "You make me feel less alone",
  "You're not afraid to be silly with me",
  "You understand my references",
  "You give the best advice",
  "You're there through thick and thin",
  "You make me feel heard",
  "You're incredibly thoughtful",
  "You remember important dates",
  "You share your snacks with me",
  "You make me feel important",
  "You're genuinely interested in my life",
  "You create the best memories with me",
  "You never make me feel judged",
  "You're always real with me",
  "You make me laugh at myself",
  "You're my favorite person to talk to",
  "You understand my mood swings",
  "You make long drives enjoyable",
  "You're always up for late-night talks",
  "You make me feel safe",
  "You believe in me when I don't believe in myself",
  "You're not afraid to call me out when I'm wrong",
  "You make me want to be a better friend",
  "You're incredibly supportive",
  "You make mundane tasks fun",
  "You have the best stories",
  "You're always down for food adventures",
  "You make me feel understood",
  "You're my partner in crime",
  "You never fail to cheer me up",
  "You make me feel appreciated",
  "You're always genuine",
  "You remember what I'm going through",
  "You make me feel seen",
  "You're my biggest cheerleader",
  "You make me feel comfortable being myself",
  "You share my love for random things",
  "You're always there to vent to",
  "You make life more colorful",
  "You understand my silences",
  "You make me feel valued",
  "You're incredibly kind",
  "You make me laugh with your random texts",
  "You're my go-to person",
  "You make hard times easier",
  "You're always honest about your feelings",
  "You make me feel confident",
  "You're my favorite distraction",
  "You make me feel less weird",
  "You're incredibly loyal",
  "You make boring days interesting",
  "You understand my anxiety",
  "You make me feel calm",
  "You're always willing to help",
  "You make me feel like I matter",
  "You're my favorite human",
  "You make me laugh until I cry",
  "You understand my love language",
  "You make me feel hopeful",
  "You're always positive",
  "You make me feel grateful",
  "You're my safe space",
  "You make life sweeter",
  "You make my life brighter every day",
  "You always believe in me",
  "You bring out my best side",
  "You make even the smallest things feel special",
  "You're the calm in my chaos",
  "You make every day feel like an adventure",
  "You’re simply irreplaceable",
  "You’re simply irreplaceable"

];

const emojis = ["✨", "💫", "⭐", "😇", "🫰", "😌", "🤞🏼", "❤️"];

const Index = () => {
  const [currentIndex, setCurrentIndex] = useState(-1); // start with intro card
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
    primary: 'hsl(348, 100%, 48%)',  // Cherry red
    secondary: 'hsl(330, 70%, 35%)',  // Deep purple-red
    accent: 'hsl(340, 80%, 40%)'
  });
  const getGradientForProgress = () => {
    {
      // Twilight phase
      const twilight = getTwilightColors();
      return `radial-gradient(circle at 20% 30%, ${twilight.primary} 0%, transparent 45%), 
              radial-gradient(circle at 80% 50%, ${twilight.secondary} 0%, transparent 50%),
              radial-gradient(circle at 50% 70%, ${twilight.accent} 0%, transparent 40%)`;
    }
  };

  const isIntro = currentIndex === -1;
  const isComplete = currentIndex === reasons.length - 1;
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
                <span className="text-muted-foreground font-medium text-xl">{reasons.length}</span>
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
              <Sparkles className="w-16 h-16 mx-auto text-primary animate-pulse mb-4" />
              <p className="text-3xl md:text-4xl font-black text-foreground mb-4">
                Ready to Begin? 💫
              </p>
              <p className="text-lg md:text-xl text-muted-foreground font-medium">
                Here are 100 reasons why you're my best friend — let’s start this journey! 💜
              </p>
            </Card>
          ) : isComplete ? (
            <Card className="p-8 md:p-10 mb-8 bg-gradient-to-br from-primary/10 via-card/90 to-secondary/10 backdrop-blur-xl border-2 border-primary/30 animate-scale-in shadow-xl">
              <Sparkles className="w-16 h-16 mx-auto text-primary animate-pulse mb-4" />
              <p className="text-3xl md:text-4xl font-black text-foreground mb-4">
                That’s All 100! 🎉
              </p>
              <p className="text-lg md:text-xl text-muted-foreground font-medium">
                And honestly, there are countless more reasons! <br />
                Thanks for being the absolute best friend anyone could ask for! 💜
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