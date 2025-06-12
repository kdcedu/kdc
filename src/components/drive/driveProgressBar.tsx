'use client'

import { Progress } from "antd";
import { useEffect } from "react";

interface DriveProgressBarProps {
    endFunction: () => void;
    percent: number;
}

export default function DriveProgressBar({ endFunction, percent }: DriveProgressBarProps) {
    
    useEffect(() => {
        const timer = setInterval(() => {
            if (percent >= 100) {
                    clearInterval(timer);
                    endFunction();
                    return 100;
                }
        }, 100);

        return () => clearInterval(timer);
    }, [endFunction, percent]);
    
    return <Progress percent={percent} type="circle" size={24} />
}