import { create } from "zustand"

interface MenuState {
  isMenuOpen: boolean
  toggleMenu: () => void
  closeMenu: () => void
}

export const useMenuStore = create<MenuState>((set) => ({
  isMenuOpen: false,
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  closeMenu: () => set({ isMenuOpen: false }),
}))

interface PurchaseModalState {
  isOpen: boolean
  productTitle: string
  productPrice: string
  openModal: (title: string, price: string) => void
  closeModal: () => void
}

export const usePurchaseModalStore = create<PurchaseModalState>((set) => ({
  isOpen: false,
  productTitle: "",
  productPrice: "",
  openModal: (title, price) => set({ isOpen: true, productTitle: title, productPrice: price }),
  closeModal: () => set({ isOpen: false }),
}))

