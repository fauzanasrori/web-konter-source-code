import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ProductCard } from "@/components/product-card"

export default function VoucherGamePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">Voucher Game</h1>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
        <h2 className="text-lg font-medium mb-4">Beli Voucher Game</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Pilih Game</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
              <Button variant="outline" className="border-green-200 hover:border-green-500 hover:bg-green-50">
                Mobile Legends
              </Button>
              <Button variant="outline" className="border-green-200 hover:border-green-500 hover:bg-green-50">
                Free Fire
              </Button>
              <Button variant="outline" className="border-green-200 hover:border-green-500 hover:bg-green-50">
                PUBG Mobile
              </Button>
              <Button variant="outline" className="border-green-200 hover:border-green-500 hover:bg-green-50">
                Genshin Impact
              </Button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">ID Game</label>
            <Input placeholder="Masukkan ID Game Anda" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Nominal</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              <Button
                variant="outline"
                className="justify-between border-green-200 hover:border-green-500 hover:bg-green-50"
              >
                <span>86 Diamonds</span>
                <span className="font-bold">Rp22.000</span>
              </Button>
              <Button
                variant="outline"
                className="justify-between border-green-200 hover:border-green-500 hover:bg-green-50"
              >
                <span>172 Diamonds</span>
                <span className="font-bold">Rp42.000</span>
              </Button>
              <Button
                variant="outline"
                className="justify-between border-green-200 hover:border-green-500 hover:bg-green-50"
              >
                <span>257 Diamonds</span>
                <span className="font-bold">Rp62.000</span>
              </Button>
              <Button
                variant="outline"
                className="justify-between border-green-200 hover:border-green-500 hover:bg-green-50"
              >
                <span>344 Diamonds</span>
                <span className="font-bold">Rp82.000</span>
              </Button>
              <Button
                variant="outline"
                className="justify-between border-green-200 hover:border-green-500 hover:bg-green-50"
              >
                <span>514 Diamonds</span>
                <span className="font-bold">Rp122.000</span>
              </Button>
              <Button
                variant="outline"
                className="justify-between border-green-200 hover:border-green-500 hover:bg-green-50"
              >
                <span>706 Diamonds</span>
                <span className="font-bold">Rp162.000</span>
              </Button>
            </div>
          </div>
          <Button className="w-full bg-green-600 hover:bg-green-700">Beli Sekarang</Button>
        </div>
      </div>

      <h2 className="text-xl font-bold mb-4">Voucher Game Populer</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <ProductCard
          title="Mobile Legends 86 Diamonds"
          image="/placeholder.svg?height=200&width=200"
          price="Rp22.000"
          category="Game"
          discount="5%"
        />
        <ProductCard
          title="Free Fire 100 Diamonds"
          image="/placeholder.svg?height=200&width=200"
          price="Rp15.000"
          category="Game"
        />
        <ProductCard
          title="PUBG Mobile 150 UC"
          image="/placeholder.svg?height=200&width=200"
          price="Rp30.000"
          category="Game"
          discount="3%"
        />
        <ProductCard
          title="Genshin Impact 300 Genesis"
          image="/placeholder.svg?height=200&width=200"
          price="Rp79.000"
          category="Game"
          discount="7%"
        />
        <ProductCard
          title="Valorant 1000 Points"
          image="/placeholder.svg?height=200&width=200"
          price="Rp120.000"
          category="Game"
          discount="4%"
        />
        <ProductCard
          title="Call of Duty Mobile 400 CP"
          image="/placeholder.svg?height=200&width=200"
          price="Rp60.000"
          category="Game"
          discount="6%"
        />
        <ProductCard
          title="Apex Legends 1000 Coins"
          image="/placeholder.svg?height=200&width=200"
          price="Rp110.000"
          category="Game"
          discount="5%"
        />
        <ProductCard
          title="Ragnarok M 60 Big Cat Coins"
          image="/placeholder.svg?height=200&width=200"
          price="Rp18.000"
          category="Game"
          discount="2%"
        />
      </div>
    </div>
  )
}

