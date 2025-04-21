import {
  ArrowLeft,
  CreditCard,
  LogOut,
  Settings,
  ShoppingBag,
  User,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function AkunPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">Akun Saya</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="relative w-16 h-16 rounded-full overflow-hidden">
                <Image
                  src="/pp-niko.png"
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold">Nicko</h2>
                <p className="text-sm text-muted-foreground">nicko@gmail.com</p>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-1 mt-4">
                <Link
                  href="#"
                  className="flex items-center gap-3 py-2 hover:text-green-600"
                >
                  <User className="h-5 w-5" />
                  <span>Edit Profil</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 py-2 hover:text-green-600"
                >
                  <ShoppingBag className="h-5 w-5" />
                  <span>Riwayat Pesanan</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 py-2 hover:text-green-600"
                >
                  <CreditCard className="h-5 w-5" />
                  <span>Metode Pembayaran</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 py-2 hover:text-green-600"
                >
                  <Settings className="h-5 w-5" />
                  <span>Pengaturan</span>
                </Link>
                <Separator className="my-2" />
                <Link
                  href="#"
                  className="flex items-center gap-3 py-2 text-red-500 hover:text-red-600"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Keluar</span>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <h2 className="text-xl font-bold">Riwayat Transaksi Terakhir</h2>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">Pulsa Telkomsel</h3>
                    <p className="text-sm text-muted-foreground">
                      20 Mar 2025, 14:30
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-green-600">Rp50.000</p>
                    <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
                      Berhasil
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-center p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">Mobile Legends 86 Diamonds</h3>
                    <p className="text-sm text-muted-foreground">
                      18 Mar 2025, 09:15
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-green-600">Rp22.000</p>
                    <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
                      Berhasil
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-center p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">Paket Data XL 15GB</h3>
                    <p className="text-sm text-muted-foreground">
                      15 Mar 2025, 16:45
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-green-600">Rp80.000</p>
                    <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
                      Berhasil
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <Button variant="outline" className="text-green-600">
                  Lihat Semua Transaksi
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
