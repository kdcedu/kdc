'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

interface MovingFruitProps {
    current: string;
    onChoose: (fruit: string, type: string) => void;
    fruit: string;
}

export const MovingFruit = ({ current, onChoose, fruit }: MovingFruitProps) => {
    const id = useMemo(() => Math.random().toString(), []);
    const fruitSize = 50;
    const speed = 1;

    const directionRef = useRef({ dx: 1, dy: 1 });
    const requestRef = useRef<number | null>(null);

    const [position, setPosition] = useState({ top: 100, left: 100 });
    const isMoving = useMemo(() => current !== id, [current, id]);

    // Set random direction and position on mount
    useEffect(() => {
        const randomSign = () => (Math.random() > 0.5 ? 1 : -1);
        directionRef.current = {
            dx: randomSign(),
            dy: randomSign(),
        };

        const maxLeft = Math.max(0, 700 - fruitSize);
        const maxTop = Math.max(0, window.innerHeight - 100 - fruitSize);

        setPosition({
            top: Math.floor(Math.random() * maxTop),
            left: Math.floor(Math.random() * maxLeft),
        });
    }, []);

    const animate = useCallback(() => {
        if (!isMoving) return;

        setPosition((prev) => {
            let { dx, dy } = directionRef.current;
            let newTop = prev.top + dy * speed;
            let newLeft = prev.left + dx * speed;

            const maxTop = window.innerHeight - 100 - fruitSize;
            const maxLeft = 700 - fruitSize;

            if (newTop < 0 || newTop > maxTop) {
                dy *= -1;
                newTop = Math.max(0, Math.min(newTop, maxTop));
            }
            if (newLeft < 0 || newLeft > maxLeft) {
                dx *= -1;
                newLeft = Math.max(0, Math.min(newLeft, maxLeft));
            }

            directionRef.current = { dx, dy };
            return { top: newTop, left: newLeft };
        });

        requestRef.current = requestAnimationFrame(animate);
    }, [isMoving]);

    useEffect(() => {
        if (isMoving) {
            requestRef.current = requestAnimationFrame(animate);
        }

        return () => {
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, [isMoving, animate]);

    return (
        <div
            className="absolute text-5xl cursor-pointer transition-transform duration-200"
            style={{
                top: position.top,
                left: position.left,
            }}
            onClick={() => {
                onChoose(id, fruit);
            }}
            title="Click to stop"
        >
            {fruit}
        </div>
    );
};
