"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Home, Search, ShoppingCart, User, X } from "lucide-react"
import Link from "next/link"
import { useMenuStore } from "@/lib/store"

export function MobileNav() {
  const { isMenuOpen, toggleMenu, closeMenu } = useMenuStore()

  // Close menu when navigating to a new page
  useEffect(() => {
    return () => {
      closeMenu()
    }
  }, [closeMenu])

  return (
    <>
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white lg:hidden">
          <div className="flex justify-between items-center p-4 border-b">
            <span className="text-xl font-bold text-green-600">VoucherKu</span>
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              <X className="h-6 w-6" />
            </Button>
          </div>
          <nav className="p-4">
            <ul className="space-y-4">
              <li>
                <Link href="/" className="block py-2 text-lg font-medium" onClick={closeMenu}>
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/pulsa" className="block py-2 text-lg font-medium" onClick={closeMenu}>
                  Pulsa
                </Link>
              </li>
              <li>
                <Link href="/paket-data" className="block py-2 text-lg font-medium" onClick={closeMenu}>
                  Paket Data
                </Link>
              </li>
              <li>
                <Link href="/voucher-game" className="block py-2 text-lg font-medium" onClick={closeMenu}>
                  Voucher Game
                </Link>
              </li>
              <li>
                <Link href="/voucher-digital" className="block py-2 text-lg font-medium" onClick={closeMenu}>
                  Voucher Digital
                </Link>
              </li>
              <li>
                <Link href="/akun" className="block py-2 text-lg font-medium" onClick={closeMenu}>
                  Akun Saya
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}

      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t lg:hidden">
        <div className="flex justify-around">
          <Link href="/">
            <Button variant="ghost" className="flex flex-col items-center py-2 h-auto">
              <Home className="h-5 w-5" />
              <span className="text-xs mt-1">Beranda</span>
            </Button>
          </Link>
          <Button variant="ghost" className="flex flex-col items-center py-2 h-auto">
            <Search className="h-5 w-5" />
            <span className="text-xs mt-1">Cari</span>
          </Button>
          <Link href="/keranjang">
            <Button variant="ghost" className="flex flex-col items-center py-2 h-auto">
              <ShoppingCart className="h-5 w-5" />
              <span className="text-xs mt-1">Keranjang</span>
            </Button>
          </Link>
          <Link href="/akun">
            <Button variant="ghost" className="flex flex-col items-center py-2 h-auto">
              <User className="h-5 w-5" />
              <span className="text-xs mt-1">Akun</span>
            </Button>
          </Link>
        </div>
      </div>
    </>
  )
}

