"use client"

import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMenuStore } from "@/lib/store"

export function MobileMenuToggle() {
  const { toggleMenu } = useMenuStore()

  return (
    <Button variant="ghost" size="icon" className="text-green-600" onClick={toggleMenu}>
      <Menu className="h-6 w-6" />
    </Button>
  )
}

