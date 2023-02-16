import { useRef, useState } from "react";

interface CardProps {
  question: string;
  answer: string;
}

const Card = (props: CardProps) => {
  const [flipped, setFlipped] = useState(false);

  const cardRef = useRef(null);

  const flipHandler = async () => {
    if (!flipped) {
      const card = cardRef.current;
      if (card != null) {
        (card as HTMLElement).className = "rotate-y-180";
      }
      setFlipped(true);
    } else {
      const card = cardRef.current;
      if (card != null) {
        (card as HTMLElement).className = "rotate-y-0";
      }
      setFlipped(false);
    }
  };

  return (
    <div
      className="overflow-hidden w-44 h-44"
      onClick={() => {
        flipHandler();
      }}
    >
      <div className="relative" ref={cardRef}>
        <div className="absolute p-4 border-2 border-black rounded shadow-lg cursor-pointer w-44 h-44 backface-visibility-hidden">
          {props.question}
        </div>
        <div className="absolute p-4 overflow-y-auto border-2 border-black rounded shadow-lg cursor-pointer  bg-slate-100 w-44 h-44 rotate-y-180 backface-visibility-hidden">
          {props.answer}
        </div>
      </div>
    </div>
  );
};
export default Card;
