import { File } from "@/constant/drive/file";
import { Folder } from "@/constant/drive/folder";
import React, { createContext, useContext, useEffect, useState } from "react";

type DriveContextType = {
  folders: Folder[];
  addFolder: (folder: Folder) => void; 
  files: File[];
  addFile: (file: File) => void;
  deleteFolder: (id: string) => void;
  deleteFile: (id: string) => void;
};

const DriveContext = createContext<DriveContextType | undefined>(undefined);

export const DriveProvider = ({ children }: { children: React.ReactNode }) => {

  const [folders, setFolders] = useState<Folder[]>([]);
  const [files, setFiles] = useState<File[]>([])

  useEffect(() => {
    const storedFolders = localStorage.getItem("folders");
    const storedFiles = localStorage.getItem("files");
    if (storedFolders) {
      setFolders(JSON.parse(storedFolders));
    }
    if (storedFiles) {
      setFiles(JSON.parse(storedFiles))
    }
  }, [])

  const addFolder = (folder: Folder) => {
    const updated = [...folders, folder];
    localStorage.setItem("folders", JSON.stringify(updated));
    setFolders(updated);
  };

  const deleteFolder = (id: string) => {
    const updated = folders.filter((folder) => String(folder.id) !== id);
    localStorage.setItem("folders", JSON.stringify(updated));
    setFolders(updated);
  }

  const addFile = (file: File) => {
    const updated = [...files, file];
    localStorage.setItem("files", JSON.stringify(updated));
    setFiles(updated);
  }

  const deleteFile = (id: string) => {
    const updated = files.filter((file) => String(file.id) !== id);
    localStorage.setItem("files", JSON.stringify(updated));
    setFiles(updated);
  }

  return (
    <DriveContext.Provider value={{ folders, addFolder, files, addFile, deleteFolder, deleteFile }}>
      {children}
    </DriveContext.Provider>
  );
};

export const useDrive = () => {
  const context = useContext(DriveContext);
  if (!context) throw new Error("useDrive must be used within DriveProvider");
  return context;
};