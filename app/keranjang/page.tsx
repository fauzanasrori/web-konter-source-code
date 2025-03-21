import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"

export default function KeranjangPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">Keranjang Belanja</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Produk dalam Keranjang</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="relative w-16 h-16">
                    <Image
                      src="/placeholder.svg?height=64&width=64"
                      alt="Pulsa Telkomsel"
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">Pulsa Telkomsel</h3>
                    <p className="text-sm text-muted-foreground">Rp50.000</p>
                  </div>
                  <div className="font-medium text-green-600">Rp50.000</div>
                  <Button variant="ghost" size="sm" className="text-red-500">
                    Hapus
                  </Button>
                </div>
                <Separator />
                <div className="flex items-center space-x-4">
                  <div className="relative w-16 h-16">
                    <Image
                      src="/placeholder.svg?height=64&width=64"
                      alt="Mobile Legends 86 Diamonds"
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">Mobile Legends 86 Diamonds</h3>
                    <p className="text-sm text-muted-foreground">Rp22.000</p>
                  </div>
                  <div className="font-medium text-green-600">Rp22.000</div>
                  <Button variant="ghost" size="sm" className="text-red-500">
                    Hapus
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Ringkasan Belanja</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Total Harga (2 Produk)</span>
                <span>Rp72.000</span>
              </div>
              <div className="flex justify-between">
                <span>Diskon</span>
                <span className="text-red-500">-Rp2.000</span>
              </div>
              <Separator />
              <div className="flex justify-between font-bold">
                <span>Total Bayar</span>
                <span className="text-green-600">Rp70.000</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-green-600 hover:bg-green-700">Checkout</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

