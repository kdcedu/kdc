'use client'

import GoogleHeader from "@/components/google/googleHeader"
import GoogleMain from "@/components/google/googleMain"
import GoogleSider from "@/components/google/googleSider"

export default function HDS01() {

    return (
        <div className="flex flex-col gap-5">
            <GoogleHeader />
            <div className="flex flex-1 gap-5">
                <GoogleSider />
                <GoogleMain />
            </div>
        </div>
    )
}