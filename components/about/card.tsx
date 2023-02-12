import { useRef, useState } from "react";

interface CardProps {
    question: string;
    answer: string;
}

const Card = (props: CardProps) => {
    const [flipped, setFlipped] = useState(false);

    const questionRef = useRef(null);
    const answerRef = useRef(null);
    const cardRef = useRef(null);

    const cardClass = 'w-56 h-56 p-4 overflow-hidden rounded shadow-lg border-2 border-black'
    const questionClass = ''
    const answerClass = 'absolute top-4 left-4'

    // const cardClass = classNames('w-48 h-48 p-4 overflow-hidden rounded shadow-lg border-2 border-black', {
    //     'rotate-y-180': flipped,
    // })

    // const questionClass = classNames('', {
    //     'hidden': flipped,
    // });

    // const answerClass = classNames('absolute top-4 left-4', {
    //     'hidden': !flipped,
    // });

    function delay(time: number) {
        return new Promise(resolve => setTimeout(resolve, time));
    }

    const flipHandler = async () => {
        if (flipped) {
            setFlipped(false);
            const card = cardRef.current;
            if (card != null) {
                (card as HTMLElement).className = cardClass + ' rotate-y-180';
            }
            
            delay(100).then(() => {
                const question = questionRef.current;
                if (question != null) {
                    (question as HTMLElement).className = questionClass + ' hidden';
                }
            })
            
            delay(100).then(() => {
                const answer = answerRef.current;
                if (answer != null) {
                    (answer as HTMLElement).className = answerClass;
                }
            })
        }
        else {
            setFlipped(true);
            const card = cardRef.current;
            if (card != null) {
                (card as HTMLElement).className = cardClass + ' rotate-y-0';
            }

            delay(100).then(() => {
                const question = questionRef.current;
                if (question != null) {
                    (question as HTMLElement).className = questionClass;
                }
            })

            delay(100).then(() => {
                const answer = answerRef.current;
                if (answer != null) {
                    (answer as HTMLElement).className = answerClass + ' hidden';
                }
            })
        }
    }

    

    return (
        <div className="relative" onClick={() => {flipHandler()}}>
            <div className='w-56 h-56 p-4 overflow-hidden border-2 border-black rounded shadow-lg' ref={cardRef}>
                <div className='' ref={questionRef}>
                    {props.question}
                </div>
            </div>
            <div className='absolute hidden top-4 left-4' ref={answerRef}>
                {props.answer}
            </div>
        </div>
    )
}

export default Card;