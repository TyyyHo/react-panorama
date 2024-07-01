import { create } from "zustand";

export type UseAcess = {
  isPermissionAccess: boolean;
  setIsPermissionAccess: (status: boolean) => void;
};

export const useAccessStore = create<UseAcess>((set) => ({
  isPermissionAccess: false,
  setIsPermissionAccess: (status: boolean) => set({ isPermissionAccess: status }),
}));
