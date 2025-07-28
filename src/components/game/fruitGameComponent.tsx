'use client';

import { MovingFruit } from "./movingFruit";
import { useState, useEffect } from "react";

const fruitType = ['🍎', '🍌', '🍊', '🍉'];

const startFruits = [
    {
        id: 1,
        type: '🍎'
    },
    {
        id: 2,
        type: '🍌'
    },
    {
        id: 3,
        type: '🍊'
    },
    {
        id: 4,
        type: '🍉'
    }
]

export default function FruitGameComponent() {
    const [score, setScore] = useState(0);
    const [fruits, setFruits] = useState(startFruits);
    const [currentFruit, setCurrentFruit] = useState('');
    const [currentType, setCurrentType] = useState('');

    // Create initial fruits when component mounts
    useEffect(() => {
        if(fruits.length < 4) {
            setFruits((prev) => [...prev, {
                id: prev.length + 1,
                type: fruitType[Math.floor(Math.random() * fruitType.length)]
            }]);
        }
    }, [fruits]);

    const onChooseFruit = (fruit: string, type: string) => {
        setCurrentFruit(fruit);
        setCurrentType(type);
    }

    const onChooseBasket = (type: string) => {
        if (type === currentType) {
            setScore((prev) => prev + 5);
        }
    }

    return (
        <div className="w-full h-screen relative overflow-hidden bg-green-50">
            <div className="absolute top-1/2 left-1/2 flex justify-between items-center p-5 z-50">
                <div className="text-2xl">Score: {score}</div>
            </div>

            <div className="absolute w-1/2 h-[100px] top-0 left-0 bg-red-500 cursor-pointer text-white p-5" onClick={() => onChooseBasket('🍎')}>🧺 Giỏ táo</div>
            <div className="absolute w-1/2 h-[100px] top-0 right-0 bg-yellow-500 cursor-pointer text-white p-5" onClick={() => onChooseBasket('🍌')}>🧺 Giỏ chuối</div>
            <div className="absolute w-1/2 h-[100px] bottom-0 left-0 bg-orange-500 cursor-pointer text-white p-5" onClick={() => onChooseBasket('🍊')}>🧺 Giỏ cam</div>
            <div className="absolute w-1/2 h-[100px] bottom-0 right-0 bg-green-500 cursor-pointer text-white p-5" onClick={() => onChooseBasket('🍉')}>🧺 Giỏ dưa hấu</div>

            {fruits.map((fruit, index) => (
                <MovingFruit 
                    key={index}
                    current={currentFruit}
                    onChoose={onChooseFruit}
                    fruit={fruit.type}
                />
            ))}
        </div>
    );
}
