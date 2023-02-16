import { useContext } from "react";
import Link from "next/link";
import { DraggableContext } from "../context/draggable-context";
import Draggable from "react-draggable";

interface ISectionWindowProp {
  content: JSX.Element;
}

const SectionWindow = (props: ISectionWindowProp) => {
  const { draggable } = useContext(DraggableContext);

  return (
    <div className="flex justify-center h-screen place-items-center max-w-screen">
      <Draggable disabled={!draggable} handle=".handle">
        <div className="flex flex-col justify-center w-full h-full place-items-center">
          <div className="flex w-11/12 h-8 border-t-8 border-black sm:w-4/5 border-x-8 handle bg-amber-200">
            <div className="flex justify-start w-1/2 pl-2 underline truncate">
              <Link href="/source-code">header.html</Link>
            </div>
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
          <div className="w-11/12 overflow-y-auto bg-white border-8 border-black sm:w-4/5 h-4/5">
            {props.content}
          </div>
        </div>
      </Draggable>
    </div>
  );
};

export default SectionWindow;
