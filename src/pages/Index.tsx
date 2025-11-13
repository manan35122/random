import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Sparkles, Star, Zap, PartyPopper } from "lucide-react";
import { FloatingEmoji } from "@/components/FloatingEmoji";
import { ConfettiEffect } from "@/components/ConfettiEffect";
import hamid from "./hamid.jpeg";

const SITE_STATUS: number = 0;

const reasons = [
  "You are one of the most closest person to me, if i exclude my family you are the only one who knows the most about me.",
  "You care about me, you ask me about how my day went, how i am doing, even when i am sick you ask and you care",
  "You always know how to make me smile and how to make me happy and laugh, even on my worst days",
  "Whenever i am sad or not having the a good day,i think i need to talk to you randomly because that makes me feel good you try to make me happy and it always work. You convert my bad days into good days.",
  "You always listen to me without judgment",
  "You remember the little and even useless things I tell you",
  "You make me feel important",
  "You're always there when I need you and you always support me",
  "You accept me for who I am, i did many mistakes in my past ykwim and i regret it a lot i wish i had words to explain how much i regret it all, I was just not a good person back then :/, and still you dont judge me. If it was someone else that person would have never been my friend again.",
  "You encourage me to be my best self and you motivate me to achieve my goals in life, to be successful in life.",
  "You celebrate my achievements with me, you are happy for me i guess im not sure about that (but thats how i feel) whenever i do good and achieve something in life",
  "You comfort me and listen to me when im sad (thats rare) but when i am actually sad you listen to me and console me.",
  "You're honest with me, even when its hard",
  "You understand my weird sense of humor and i think there is no other person who will be able to that",
  "You trust me (i think) and i trust you. I think thats what matters a lot.",
  "I feel comfortable with you the most sharing my secrets.",
  "You inspire me to be better version of myself",
  "You're always up for an adventure and fun, we both are like that i think",
  "Our vibe matches a lot, i think you are the only person with whom my vibe matches this much. You are my type of person.",
  "You make the best inside jokes, we just make eye contact we start smiling and laughing. Our energy matches a lot.",
  "You remember my favorite things",
  "You make me feel valued",
  "You make ordinary moments extraordinary",
  "Its so good to be around you, even when we are on calls and you are sleeping and when we both are quiet it just feels peaceful to be around you.",
  "You have the same taste in music and we think almost the same. Even if not exactly same i would say 90% same.",
  "You always have my back and always support me in every problem and i think no matter what happens you will always be standing by my side (I hope so).",
  "You make me feel less alone",
  "You're not afraid to be silly with me and around me, you are comfortable with me.",
  "You understand me, you know the things i like and things i dont.",
  "You give the best advice in every situation and try to do your best to help me i guess.",
  "During my hard times in my life some of what you know (issb) and some you dont, you always kept me motivated and helped me. I did hardwork after that and i think some of the credit goes to you.",
  "I have some of the best memories with you of my teenage years and i think i will take those with me in my grave. If im alive lol 20-30 years from now im gonna sit and look back at these years of my life and there will be huge smile on my face, missing you and all the fun we did.",
  "You're genuinely interested in my life and you give importance even to little things happening in my life.",
  "You create the best memories with me",
  "You never make me feel judged and i think you are always real with me",
  "You guide me and stop me from doing bad things. I remember when i was with mah**n you helped me and guided me to stop all of that.",
  "I think you are the reason i stopped doing relationships, and i think i wont ever date any other girl ever again. Some of the credit goes to you for this.",
  "Sometimes you even make me laugh at myself and we laugh at such useless things, i think the main reason for that is not memes or something else beacause if i send that same video or talk the same with any other person they wont behave like we do thats for sure, its just something only we both understand",
  "You are my favorite person to talk to",
  "You understand my mood swings",
  "You make our meetups enjoyable, even if we are doing nothing and just sitting in car and driving its really fun and feels good to be around you.",
  "You are always up for me and you talk to me even when your other friends are calling, you give me attention and your time which i think is a really valuable thing. ",
  "You always tell me about your day and all the things happening in your life. I think you are comfortable sharing all the things in your life with me and i always listen to it with all my attention and i like when you share with me.",
  "You believe in me when I don't believe in myself. In my exams or when i am studying, im not kidding whenever i tell you that its really hard or i cant do it, you always say 'tum kar lo ge' you always believe in me (i guess). ",
  "You are not afraid to call me out when im wrong ",
  "You are a really supportive person, not with me but with everyone.",
  "When we were not talking last year i knew that its over between us but deep down i had this feeling that one day we will talk again but one day we will and i did not had it with any other person.",
  "You never fail to cheer me up",
  "You make me feel appreciated",
  "You remember what I'm going through",
  "You make me feel comfortable being myself",
  "I dont rant a lot because i dont like to but when i do its always with you because i feel comfortable with you",
  "You make life more colorful",
  "You never made me feel that you are forced to be my friend. I sometimes annoy you a lot (sorryyy hahhaha) but still you always come back and do not let our friendship effect in any way.",
  "I feel like you actually want to talk to me and be around me and i think you dont feel weird in any way with me (i guess).",
  "You understand my silences",
  "I am going to be very honest with you. At one point i started to get annoyed with you when we used to argue and fight a lot. I felt really disappointed when you sent me that paragraph on snapchat if you remember. I started to question myself that why am i even friend of yours but ik you didnt mean it. when i look back i really try to forget that moment but even after all that i still talk to you, feel nice around you because you realise your mistakes and you do applogise when you have to.",
  "You are a really kind person even towards others.",
  "You make me laugh with your random texts and on calls.",
  "I can say that calling you is one of the best part of my day.",
  "You make hard times easier",
  "You are are always honest with me i think",
  "You make me feel confident",
  "You make me feel less weird and embarrased lol",
  "When we were not friends last year you told me that still you did not talk bad about me with others and i think i trust you on that i dont need any proofs. You give your all in friendships.",
  "You make boring days interesting",
  "You keep me grounded when I overthink and clear out any misunderstandings i have.",
  "You always know when something’s wrong even when I say 'im fine' yk that im lying and idk how but always you get know that somethings off and you then you try your best to help me and make me feel good.",
  "I think we can sit in silence and still feel good and enjoy i guess.",
  "You understand my anxiety and help me get over it.",
  "You listen like, actually listen",
  "We have a million inside jokes no one else understands hahahahahha duckyy bhaiiiii",
  "You are always willing to help me and help others even if you dont like the other person.",
  "You make me feel like I matter",
  "Sometimes you make me laugh so much that literally tears come in my eyes, i swear im not lying or exaggerating.",
  "You make me feel hopeful",
  "You are always positive most of the time.",
  "I dont even feel cringe around you doing weird things, you understand my humour.",
  "You respect me.",
  "We have so many memories together, we used to add random people in calls and groupchats, it was so fun doing all of this with you.",
  "I am so gratefull to have a friend like you.",
  "Its really fun to tease you and make you angry for no reason lol.",
  "You always find solution to every problem even if its a dumb one but i think i can bring my every problem to you and you will help me solve it but i just dont feel good dragging you into my problems.",
  "We both know when to make fun of eachother and when to talk seriously, we both respect eachother boundaries.",
  "Back in june/july when i got to know that maybe i will have to study another semester i felt really embarrased and i used to have a lot of stress i never told you but as soon as you called me i used to forget it, and now when i told you i still get anxious sometimes and feel embarrased but not that much.",
  "You make my life brighter every day",
  "You always believe in me",
  "When we all used to be friends and if some day you used to talk with someone else on calls ignoring me like um*ir or someone else i used to get jealous a bit, because i think i was not mature enough to understand back then but i learned a lot of things from you and those things helped me a lot in life.",
  "From the very first day, our discord times i used to laugh with you and enjoyed talking to you.",
  "You make even the smallest things feel special",
  "I think i can cry infront of you and not feel weird or embarrased in any way maybe.",
  "You never get tired of my texts and calls.",
  "You know my flaws and i try to fix them and be a better person still and you are my friend and you dont judge me, even after 6 years you accept me while knowing all the mistakes i did in my past. Thank You!",
  "You never broke my trust as far as i remember and you kept our promises i guess",
  "You have stayed up with me even when you are sleepy and you dont want to but still i think you have done that for me.",
  "I do many weird things and mistakes but you always lecture me and tell me about wrong and right, you forgive me even when I mess up.",
  "You help me take the right decision as if it was your decision to make hahahahahaha.",
  "You make life feel like an adventure.",
  "I knew it from the start that we would be good friends because yk sometimes you get that vibe and feeling from the other guy that this person is the one and you can trust him.",
  "You are part of my day, part of my life and i think thats one of the best one. Without you my day feels incomplete. I hope and I wish you are always here with me, I dont know about future and to be honest i dont even think about it that much. Anyways, if life ever takes us apart, ill always remember you, all the little moments with you."
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
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '1px'
        } as React.CSSProperties}>
          <img
            src={hamid}
            alt="Description"
            style={{
              maxWidth: '300px',
              width: '100%',
              height: 'auto'
            } as React.CSSProperties}
          />
        </div>

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