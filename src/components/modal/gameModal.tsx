import { Drawer, Image } from "antd";

export type GameThings = "bed" | "picture" | "desk" | "window" | "shelf" | "";

interface GameModalProps {
    open: boolean;  
    setOpenModal: (open: boolean) => void;
    currentThing: GameThings;
    choseFunction: (thing: GameThings, itemSrc: string) => void
}

const genres = ['green', 'pink', 'wibu'];

export default function GameModal({open, setOpenModal, currentThing, choseFunction}: GameModalProps) {
  return <Drawer open={open} onClose={() => setOpenModal(false)} placement="bottom" closable={false} styles={{body: {padding: 20}}}>
    <div className="w-full h-full flex items-center gap-5 overflow-hidden">
        {genres.map((genre) => (
            <div key={genre} className="h-full flex-1 rounded-xl flex items-center justify-center border-4 border-orange-200 hover:border-orange-400 cursor-pointer">
                <div onClick={() => {choseFunction(currentThing, genre); setOpenModal(false)}} className={`${currentThing === 'shelf' ? 'w-1/3' : 'w-3/5'} h-full flex items-center justify-center`}>
                    <Image src={`/games/${genre}_${currentThing}.png`} alt="Game Background" preview={false}/>
                </div>
            </div>
        ))}
    </div>
  </Drawer>
}   