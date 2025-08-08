"use client";
import BackButton from "@/components/backButton";
import GameModal, { GameThings } from "@/components/modal/gameModal";
import { PlusCircleFilled } from "@ant-design/icons";
import { Image } from "antd";
import { Dispatch, SetStateAction, useState } from "react";

export default function GamePage() {
  const [bed, setBed] = useState("outline");
  const [picture, setPicture] = useState("outline");
  const [desk, setDesk] = useState("outline");
  const [window, setWindow] = useState("outline");
  const [shelf, setShelf] = useState("outline");

  const [chosenThing, setChosenThing] = useState<GameThings>("bed");
  const [openModal, setOpenModal] = useState(false);

  const setStateMap: Partial<{
    [key in GameThings]: Dispatch<SetStateAction<string>>;
  }> = {
    bed: setBed,
    picture: setPicture,
    desk: setDesk,
    window: setWindow,
    shelf: setShelf,
  };

  const handleItemClick = (thing: GameThings) => {
    setChosenThing(thing);
    setOpenModal(true);
  };

  const handleSelectItem = (thing: GameThings, itemSrc: string) => {
    if (setStateMap[thing]) {
      setStateMap[thing](itemSrc);
    }
    setOpenModal(false);
  };

  return (
    <div className="relative w-full">
      <BackButton />
      <GameModal
        open={openModal}
        setOpenModal={setOpenModal}
        currentThing={chosenThing}
        choseFunction={handleSelectItem}
      />

      <Image
        src="/backgrounds/gameBackground.jpg"
        alt="Game Background"
        preview={false}
      />

      <div className="w-[38%] absolute top-[70%] left-[35%] transform -translate-x-1/2 -translate-y-1/2">
        <Image
          onClick={() => {
            handleItemClick("bed");
          }}
          src={`/games/${bed}_bed.png`}
          alt="Bed"
          preview={false}
        />
        <div
          onClick={() => {
            handleItemClick("bed");
          }}
          className="absolute text-orange-300 text-5xl top-[50%] left-[45%] transform -translate-x-1/2 -translate-y-1/2 animate-bounce"
        >
          {bed === "outline" && <PlusCircleFilled />}
        </div>
      </div>

      <div className="w-[10%] absolute top-[38.5%] left-[22.5%] transform -translate-x-1/2 -translate-y-1/2">
        <Image
          onClick={() => {
            handleItemClick("picture");
          }}
          src={`/games/${picture}_picture.png`}
          alt="Picture"
          preview={false}
        />
        <div
          onClick={() => {
            handleItemClick("picture");
          }}
          className="absolute text-orange-300 text-5xl top-[52%] left-[48%] transform -translate-x-1/2 -translate-y-1/2 animate-bounce"
        >
          {picture === "outline" && <PlusCircleFilled />}
        </div>
      </div>

      <div className="w-[26%] bg-transparent absolute top-[34%] left-[51.5%] transform -translate-x-1/2 -translate-y-1/2">
        <Image
          onClick={() => {
            handleItemClick("desk");
          }}
          src={`/games/${desk}_desk.png`}
          alt="Desk"
          preview={false}
        />
        <div
          onClick={() => {
            handleItemClick("desk");
          }}
          className="absolute text-orange-300 text-5xl top-[65%] left-[48%] transform -translate-x-1/2 -translate-y-1/2 animate-bounce"
        >
          {desk === "outline" && <PlusCircleFilled />}
        </div>
      </div>

      <div className="w-[16%] h-[18%] absolute flex items-top top-[14.5%] left-[66.5%] transform -translate-x-1/2 -translate-y-1/2">
        <Image
          onClick={() => {
            handleItemClick("window");
          }}
          src={`/games/${window}_window.png`}
          alt="Window"
          preview={false}
        />
        <div
          onClick={() => {
            handleItemClick("window");
          }}
          className="absolute text-orange-300 text-5xl top-[85%] left-[45%] transform -translate-x-1/2 -translate-y-1/2 animate-bounce"
        >
          {window === "outline" && <PlusCircleFilled />}
        </div>
      </div>

      <div
        className={`${
          shelf === "mine" ? "w-[8%]" : "w-[10%]"
        } h-[18%] absolute flex items-end top-[60%] left-[79%] transform -translate-x-1/2 -translate-y-1/3 object-contain object-bottom`}
      >
        <Image
          onClick={() => {
            handleItemClick("shelf");
          }}
          src={`/games/${shelf}_shelf.png`}
          alt="Shelf"
          preview={false}
        />
        <div
          onClick={() => {
            handleItemClick("shelf");
          }}
          className="absolute text-orange-300 text-5xl top-0 left-[45%] transform -translate-x-1/2 -translate-y-1/2 animate-bounce"
        >
          {shelf === "outline" && <PlusCircleFilled />}
        </div>
      </div>
    </div>
  );
}
