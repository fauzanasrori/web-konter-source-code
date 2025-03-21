import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ProductCard } from "@/components/product-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PaketDataPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">Paket Data</h1>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
        <h2 className="text-lg font-medium mb-4">Beli Paket Data</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Nomor Telepon</label>
            <Input placeholder="Contoh: 08123456789" />
          </div>

          <Tabs defaultValue="telkomsel">
            <TabsList className="grid grid-cols-4 mb-4">
              <TabsTrigger value="telkomsel">Telkomsel</TabsTrigger>
              <TabsTrigger value="xl">XL</TabsTrigger>
              <TabsTrigger value="indosat">Indosat</TabsTrigger>
              <TabsTrigger value="tri">Tri</TabsTrigger>
            </TabsList>
            <TabsContent value="telkomsel" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <Button
                  variant="outline"
                  className="justify-between border-green-200 hover:border-green-500 hover:bg-green-50"
                >
                  <span>Internet 5GB (30 hari)</span>
                  <span className="font-bold">Rp60.000</span>
                </Button>
                <Button
                  variant="outline"
                  className="justify-between border-green-200 hover:border-green-500 hover:bg-green-50"
                >
                  <span>Internet 10GB (30 hari)</span>
                  <span className="font-bold">Rp100.000</span>
                </Button>
                <Button
                  variant="outline"
                  className="justify-between border-green-200 hover:border-green-500 hover:bg-green-50"
                >
                  <span>Internet 15GB (30 hari)</span>
                  <span className="font-bold">Rp150.000</span>
                </Button>
                <Button
                  variant="outline"
                  className="justify-between border-green-200 hover:border-green-500 hover:bg-green-50"
                >
                  <span>Internet 25GB (30 hari)</span>
                  <span className="font-bold">Rp200.000</span>
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="xl" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <Button
                  variant="outline"
                  className="justify-between border-green-200 hover:border-green-500 hover:bg-green-50"
                >
                  <span>Internet 5GB (30 hari)</span>
                  <span className="font-bold">Rp55.000</span>
                </Button>
                <Button
                  variant="outline"
                  className="justify-between border-green-200 hover:border-green-500 hover:bg-green-50"
                >
                  <span>Internet 10GB (30 hari)</span>
                  <span className="font-bold">Rp95.000</span>
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="indosat" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <Button
                  variant="outline"
                  className="justify-between border-green-200 hover:border-green-500 hover:bg-green-50"
                >
                  <span>Internet 5GB (30 hari)</span>
                  <span className="font-bold">Rp58.000</span>
                </Button>
                <Button
                  variant="outline"
                  className="justify-between border-green-200 hover:border-green-500 hover:bg-green-50"
                >
                  <span>Internet 10GB (30 hari)</span>
                  <span className="font-bold">Rp98.000</span>
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="tri" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <Button
                  variant="outline"
                  className="justify-between border-green-200 hover:border-green-500 hover:bg-green-50"
                >
                  <span>Internet 5GB (30 hari)</span>
                  <span className="font-bold">Rp50.000</span>
                </Button>
                <Button
                  variant="outline"
                  className="justify-between border-green-200 hover:border-green-500 hover:bg-green-50"
                >
                  <span>Internet 10GB (30 hari)</span>
                  <span className="font-bold">Rp90.000</span>
                </Button>
              </div>
            </TabsContent>
          </Tabs>

          <Button className="w-full bg-green-600 hover:bg-green-700">Beli Sekarang</Button>
        </div>
      </div>

      <h2 className="text-xl font-bold mb-4">Paket Data Populer</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <ProductCard
          title="Paket Data Telkomsel 8GB"
          image="/placeholder.svg?height=200&width=200"
          price="Rp60.000"
          category="Paket Data"
          discount="10%"
        />
        <ProductCard
          title="Paket Data XL 15GB"
          image="/placeholder.svg?height=200&width=200"
          price="Rp80.000"
          category="Paket Data"
          discount="8%"
        />
        <ProductCard
          title="Paket Data Indosat 10GB"
          image="/placeholder.svg?height=200&width=200"
          price="Rp75.000"
          category="Paket Data"
          discount="5%"
        />
        <ProductCard
          title="Paket Data Tri 20GB"
          image="/placeholder.svg?height=200&width=200"
          price="Rp70.000"
          category="Paket Data"
          discount="12%"
        />
        <ProductCard
          title="Paket Data Smartfren 30GB"
          image="/placeholder.svg?height=200&width=200"
          price="Rp85.000"
          category="Paket Data"
          discount="15%"
        />
      </div>
    </div>
  )
}

