"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

let interval: any;

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative h-[400px] w-96">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute bg-primary text-primary-foreground w-96 h-[380px] p-6 border border-primary-foreground/20 shadow-lg flex flex-col gap-4 rounded-xl"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          >
            <div className="flex items-start gap-4">
              {card.icon && (
                <div className="bg-primary-foreground/10 p-3 rounded-lg">
                  {card.icon}
                </div>
              )}
              <div className="flex-1 space-y-1">
                <p className="text-primary-foreground/70 font-normal text-sm">
                  {card.name}
                </p>
                <p className="text-primary-foreground font-semibold text-lg">
                  {card.designation}
                </p>
              </div>
            </div>
            <div className="border-t border-primary-foreground/20" />
            <div className="font-normal text-primary-foreground/90 text-base leading-relaxed">
              {card.content}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
