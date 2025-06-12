"use client";
import DriveHeader from "@/components/drive/driveHeader";
import DriveSider from "@/components/drive/driveSider";
import { folders } from "@/constant/drive/folder";
import { files } from "@/constant/drive/file";
import { useEffect } from "react";
import { DriveProvider } from "@/context/driveContext";

interface DriveLayoutProps {
  children: React.ReactNode;
}

export default function DriveLayout({ children }: DriveLayoutProps) {
  useEffect(() => {
    const storedFolders = localStorage.getItem("folders");
    const storedFiles = localStorage.getItem("files");
    if (!storedFolders) {
      localStorage.setItem("folders", JSON.stringify(folders));
    }
    if (!storedFiles) {
      localStorage.setItem("files", JSON.stringify(files));
    }
  }, []);

  return (
    <DriveProvider>
      <div className="bg-gray-50 w-full min-h-screen flex flex-col gap-3 px-5 pb-5">
        <DriveHeader />
        <div className="flex gap-5 flex-1">
          <DriveSider />
          {children}
        </div>
      </div>
    </DriveProvider>
  );
}
