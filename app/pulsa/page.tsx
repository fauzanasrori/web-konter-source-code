import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ProductCard } from "@/components/product-card";
import { pulsa } from "@/constants";

export default function PulsaPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">Pulsa</h1>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
        <h2 className="text-lg font-medium mb-4">Isi Pulsa</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Nomor Telepon
            </label>
            <Input placeholder="Contoh: 08123456789" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Nominal</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {[5000, 10000, 20000, 25000, 50000, 100000, 150000, 200000].map(
                (amount) => (
                  <Button
                    key={amount}
                    variant="outline"
                    className="border-green-200 hover:border-green-500 hover:bg-green-50"
                  >
                    Rp{amount.toLocaleString()}
                  </Button>
                )
              )}
            </div>
          </div>
          <Button className="w-full bg-green-600 hover:bg-green-700">
            Beli Sekarang
          </Button>
        </div>
      </div>

      <h2 className="text-xl font-bold mb-4">Pulsa All Operator</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {pulsa.map((pulsa) => (
          <ProductCard
            key={pulsa.title}
            title={pulsa.title}
            image={pulsa.image}
            price={pulsa.price}
            category={pulsa.category}
            discount={pulsa.discount}
            className={`${pulsa.className} object-contain`}
          />
        ))}
      </div>
    </div>
  );
}
