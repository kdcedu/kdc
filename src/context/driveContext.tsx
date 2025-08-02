"use client";
import { adultFiles, File, files as filesData } from "@/constant/drive/file";
import { Folder, folders as foldersData } from "@/constant/drive/folder";
import { SharedUser, SharePermission } from "@/constant/drive/user";
import { usePathname } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";

type DriveContextType = {
  folders: Folder[];
  files: File[];

  addFolder: (folder: Folder) => void;
  deleteFolder: (id: string) => void;
  updateFolderShare: (folderId: string, users: SharedUser[]) => void;

  addFile: (file: File) => void;
  deleteFile: (id: string) => void;
  updateFileShare: (fileId: string, users: SharedUser[]) => void;
  removeUserFromShared: (
    targetId: string | number,
    type: "file" | "folder",
    userEmail: string
  ) => void;
  updateUserPermission: (
    targetId: string | number,
    type: "file" | "folder",
    userEmail: string,
    newPermission: SharePermission
  ) => void;
};

const DriveContext = createContext<DriveContextType | undefined>(undefined);

export const DriveProvider = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();
  const usingFiles = pathName.includes("k5") ? filesData : adultFiles;

  const [folders, setFolders] = useState<Folder[]>([...foldersData]);
  const [files, setFiles] = useState<File[]>([...usingFiles]);

  useEffect(() => {
    const storedFolders = localStorage.getItem(
      `${pathName.includes("k5") ? "k5_" : "k8_"}folders`
    );
    const storedFiles = localStorage.getItem(
      `${pathName.includes("k5") ? "k5_" : "k8_"}files`
    );
    if (storedFolders) setFolders(JSON.parse(storedFolders));
    if (storedFiles) setFiles(JSON.parse(storedFiles));
  }, [pathName]);

  const addFolder = (folder: Folder) => {
    const updated = [...folders, folder];
    localStorage.setItem(
      `${pathName.includes("k5") ? "k5_" : "k8_"}folders`,
      JSON.stringify(updated)
    );
    setFolders(updated);
  };

  const deleteFolder = (id: string) => {
    const updated = folders.filter((folder) => String(folder.id) !== id);
    localStorage.setItem(
      `${pathName.includes("k5") ? "k5_" : "k8_"}folders`,
      JSON.stringify(updated)
    );
    setFolders(updated);
  };

  const updateFolderShare = (folderId: string, users: SharedUser[]) => {
    const updated = folders.map((folder) =>
      String(folder.id) === folderId ? { ...folder, sharedWith: users } : folder
    );
    localStorage.setItem(
      `${pathName.includes("k5") ? "k5_" : "k8_"}folders`,
      JSON.stringify(updated)
    );
    setFolders(updated);
  };

  const addFile = (file: File) => {
    const updated = [...files, file];
    localStorage.setItem(
      `${pathName.includes("k5") ? "k5_" : "k8_"}files`,
      JSON.stringify(updated)
    );
    setFiles(updated);
  };

  const deleteFile = (id: string) => {
    const updated = files.filter((file) => String(file.id) !== id);
    localStorage.setItem(
      `${pathName.includes("k5") ? "k5_" : "k8_"}files`,
      JSON.stringify(updated)
    );
    setFiles(updated);
  };

  const updateFileShare = (fileId: string, users: SharedUser[]) => {
    const updated = files.map((file) =>
      String(file.id) === fileId ? { ...file, sharedWith: users } : file
    );
    localStorage.setItem(
     `${pathName.includes("k5") ? "k5_" : "k8_"}files`,
      JSON.stringify(updated)
    );
    setFiles(updated);
  };

  // ✅ Quản lý chọn/bỏ chọn file/folder

  const removeUserFromShared = (
    targetId: string | number,
    type: "file" | "folder",
    userEmail: string
  ) => {
    if (type === "file") {
      const updated = files.map((file) =>
        String(file.id) === String(targetId)
          ? {
              ...file,
              sharedWith: file.sharedWith?.filter(
                (user) => user.user.email !== userEmail
              ),
            }
          : file
      );
      localStorage.setItem(
       `${pathName.includes("k5") ? "k5_" : "k8_"}files`,
        JSON.stringify(updated)
      );
      setFiles(updated);
    } else {
      const updated = folders.map((folder) =>
        String(folder.id) === String(targetId)
          ? {
              ...folder,
              sharedWith: folder.sharedWith?.filter(
                (user) => user.user.email !== userEmail
              ),
            }
          : folder
      );
      localStorage.setItem(
       `${pathName.includes("k5") ? "k5_" : "k8_"}folders`,
        JSON.stringify(updated)
      );
      setFolders(updated);
    }
  };
  const updateUserPermission = (
    targetId: string | number,
    type: "file" | "folder",
    userEmail: string,
    newPermission: "viewer" | "editor" | "commenter"
  ) => {
    if (type === "file") {
      const updated = files.map((file) =>
        String(file.id) === String(targetId)
          ? {
              ...file,
              sharedWith: file.sharedWith?.map((sharedUser) =>
                sharedUser.user.email === userEmail
                  ? { ...sharedUser, permission: newPermission }
                  : sharedUser
              ),
            }
          : file
      );
      localStorage.setItem(
        `${pathName.includes("k5") ? "k5_" : "k8_"}files`,
        JSON.stringify(updated)
      );
      setFiles(updated);
    } else {
      const updated = folders.map((folder) =>
        String(folder.id) === String(targetId)
          ? {
              ...folder,
              sharedWith: folder.sharedWith?.map((sharedUser) =>
                sharedUser.user.email === userEmail
                  ? { ...sharedUser, permission: newPermission }
                  : sharedUser
              ),
            }
          : folder
      );
      localStorage.setItem(
       `${pathName.includes("k5") ? "k5_" : "k8_"}folders`,
        JSON.stringify(updated)
      );
      setFolders(updated);
    }
  };

  return (
    <DriveContext.Provider
      value={{
        folders,
        files,
        addFolder,
        deleteFolder,
        updateFolderShare,
        addFile,
        deleteFile,
        updateFileShare,
        removeUserFromShared, // 👈 thêm dòng này
        updateUserPermission,
      }}
    >
      {children}
    </DriveContext.Provider>
  );
};

export const useDrive = () => {
  const context = useContext(DriveContext);
  if (!context) throw new Error("useDrive must be used within DriveProvider");
  return context;
};
