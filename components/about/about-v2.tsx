import { useContext } from "react";
import Draggable from "react-draggable";
import Image from "next/image";

import { DraggableContext } from "../../context/draggable-context";

const AboutV2 = () => {
  const { draggable } = useContext(DraggableContext);
  return (
    <div className="flex justify-center h-screen place-items-center max-w-screen">
      <Draggable disabled={!draggable} handle=".handle">
        <div className="flex flex-col justify-center w-full h-full place-items-center">
          <div className="flex w-4/5 h-8 border-t-8 border-black border-x-8 handle bg-amber-200">
            <div className="flex justify-start w-1/2 pl-5">flyer.html</div>
            <div className="flex justify-end w-1/2">
              <div className="flex justify-center w-8 border-l-8 border-black place-items-center">
                <div className="w-4 h-1 bg-black"></div>
              </div>
              <div className="flex justify-center w-8 border-l-8 border-black place-items-center">
                <div className="w-4 h-4 border-4 border-black"></div>
              </div>
              <div className="flex justify-center w-8 text-xl font-bold border-l-8 border-black place-items-center">
                <div className="cross">X</div>
              </div>
            </div>
          </div>
          <div className="w-4/5 bg-white border-8 border-black h-4/5">
            <div className="flex flex-col h-full overflow-auto place-items-center">
              <Image
                src="/file.svg"
                alt="Picture of the author"
                width={100}
                height={100}
                className="mt-5"
              />
              <div className="">About.txt</div>
              <p className="border-t-4">
                Tpye: Text(text/plain) <br />
                Size: 42 kb <br />
                Location: /home/about <br />
              </p>
              <div className="text-xl">What is Hammerwars</div>
              <div className="">
                And there you have it, you have coded your first JavaScript
                game. However, the best way to get better at programming is to
                write code yourself. Below are a few different challenges that
                you can try to add to your game.For an easy challenge, change a
                few of the variables such as fallSpeed or jumpSpeed. Play with
                it a bit until you get to a setting you like. For a
                medium-to-difficult challenge, create a new label on the other
                side of the screen that holds how many lives you have. Starting
                with three lives, you lose one every time you have a collision.
                Once you’re out of lives, then it’s game over! For a difficult
                challenge, add a new object in the game that gives you bonus
                points if you touch it. This will involve creating a new
                function to create the object and adding collision detection.
                It’s probably a good idea to make the object float, too!
              </div>
            </div>
          </div>
        </div>
      </Draggable>
    </div>
  );
};

export default AboutV2;
