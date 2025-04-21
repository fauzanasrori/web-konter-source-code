import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ProductCard } from "@/components/product-card";
import { voucherGame } from "@/constants";

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
              <Button
                variant="outline"
                className="border-green-200 hover:border-green-500 hover:bg-green-50"
              >
                Mobile Legends
              </Button>
              <Button
                variant="outline"
                className="border-green-200 hover:border-green-500 hover:bg-green-50"
              >
                Free Fire
              </Button>
              <Button
                variant="outline"
                className="border-green-200 hover:border-green-500 hover:bg-green-50"
              >
                PUBG Mobile
              </Button>
              <Button
                variant="outline"
                className="border-green-200 hover:border-green-500 hover:bg-green-50"
              >
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
                <span>86 DM</span>
                <span className="font-bold">Rp22.000</span>
              </Button>
              <Button
                variant="outline"
                className="justify-between border-green-200 hover:border-green-500 hover:bg-green-50"
              >
                <span>172 DM</span>
                <span className="font-bold">Rp42.000</span>
              </Button>
              <Button
                variant="outline"
                className="justify-between border-green-200 hover:border-green-500 hover:bg-green-50"
              >
                <span>257 DM</span>
                <span className="font-bold">Rp62.000</span>
              </Button>
              <Button
                variant="outline"
                className="justify-between border-green-200 hover:border-green-500 hover:bg-green-50"
              >
                <span>344 DM</span>
                <span className="font-bold">Rp82.000</span>
              </Button>
              <Button
                variant="outline"
                className="justify-between border-green-200 hover:border-green-500 hover:bg-green-50"
              >
                <span>514 DM</span>
                <span className="font-bold">Rp122.000</span>
              </Button>
              <Button
                variant="outline"
                className="justify-between border-green-200 hover:border-green-500 hover:bg-green-50"
              >
                <span>706 DM</span>
                <span className="font-bold">Rp162.000</span>
              </Button>
            </div>
          </div>
          <Button className="w-full bg-green-600 hover:bg-green-700">
            Beli Sekarang
          </Button>
        </div>
      </div>

      <h2 className="text-xl font-bold mb-4">Voucher Game Populer</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {voucherGame.map((game) => (
          <ProductCard
            key={game.title}
            title={game.title}
            image={game.image}
            price={game.price}
            category={game.category}
            discount={game.discount}
            className="object-cover"
          />
        ))}
      </div>
    </div>
  );
}
