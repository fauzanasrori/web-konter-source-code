import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function VoucherDigitalPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">Voucher Digital</h1>
      </div>

      <Tabs defaultValue="streaming">
        <TabsList className="mb-6">
          <TabsTrigger value="streaming">Streaming</TabsTrigger>
          <TabsTrigger value="app-store">App Store</TabsTrigger>
          <TabsTrigger value="e-commerce">E-Commerce</TabsTrigger>
          <TabsTrigger value="food">Food</TabsTrigger>
        </TabsList>

        <TabsContent value="streaming">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <ProductCard
              title="Netflix 1 Bulan"
              image="/placeholder.svg?height=200&width=200"
              price="Rp159.000"
              category="Streaming"
              discount="10%"
            />
            <ProductCard
              title="Spotify Premium 1 Bulan"
              image="/placeholder.svg?height=200&width=200"
              price="Rp54.000"
              category="Streaming"
              discount="5%"
            />
            <ProductCard
              title="Disney+ Hotstar 1 Bulan"
              image="/placeholder.svg?height=200&width=200"
              price="Rp39.000"
              category="Streaming"
            />
            <ProductCard
              title="YouTube Premium 1 Bulan"
              image="/placeholder.svg?height=200&width=200"
              price="Rp59.000"
              category="Streaming"
              discount="8%"
            />
            <ProductCard
              title="Vidio Premier 1 Bulan"
              image="/placeholder.svg?height=200&width=200"
              price="Rp29.000"
              category="Streaming"
              discount="5%"
            />
            <ProductCard
              title="Netflix 3 Bulan"
              image="/placeholder.svg?height=200&width=200"
              price="Rp459.000"
              category="Streaming"
              discount="12%"
            />
            <ProductCard
              title="Spotify Premium 3 Bulan"
              image="/placeholder.svg?height=200&width=200"
              price="Rp159.000"
              category="Streaming"
              discount="7%"
            />
            <ProductCard
              title="Disney+ Hotstar 3 Bulan"
              image="/placeholder.svg?height=200&width=200"
              price="Rp109.000"
              category="Streaming"
              discount="5%"
            />
          </div>
        </TabsContent>

        <TabsContent value="app-store">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <ProductCard
              title="Google Play Rp100.000"
              image="/placeholder.svg?height=200&width=200"
              price="Rp102.000"
              category="App Store"
              discount="2%"
            />
            <ProductCard
              title="App Store Rp150.000"
              image="/placeholder.svg?height=200&width=200"
              price="Rp153.000"
              category="App Store"
              discount="1%"
            />
            <ProductCard
              title="Google Play Rp300.000"
              image="/placeholder.svg?height=200&width=200"
              price="Rp306.000"
              category="App Store"
              discount="2%"
            />
            <ProductCard
              title="App Store Rp500.000"
              image="/placeholder.svg?height=200&width=200"
              price="Rp510.000"
              category="App Store"
              discount="1%"
            />
          </div>
        </TabsContent>

        <TabsContent value="e-commerce">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <ProductCard
              title="Tokopedia Rp100.000"
              image="/placeholder.svg?height=200&width=200"
              price="Rp98.000"
              category="E-Commerce"
              discount="2%"
            />
            <ProductCard
              title="Shopee Rp100.000"
              image="/placeholder.svg?height=200&width=200"
              price="Rp98.000"
              category="E-Commerce"
              discount="2%"
            />
            <ProductCard
              title="Lazada Rp100.000"
              image="/placeholder.svg?height=200&width=200"
              price="Rp97.000"
              category="E-Commerce"
              discount="3%"
            />
          </div>
        </TabsContent>

        <TabsContent value="food">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <ProductCard
              title="GoFood Rp50.000"
              image="/placeholder.svg?height=200&width=200"
              price="Rp48.000"
              category="Food"
              discount="4%"
            />
            <ProductCard
              title="GrabFood Rp50.000"
              image="/placeholder.svg?height=200&width=200"
              price="Rp48.000"
              category="Food"
              discount="4%"
            />
            <ProductCard
              title="ShopeeFood Rp50.000"
              image="/placeholder.svg?height=200&width=200"
              price="Rp47.500"
              category="Food"
              discount="5%"
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

