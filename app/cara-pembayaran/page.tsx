import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CaraPembayaranPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">Cara Pembayaran</h1>
      </div>

      <Tabs defaultValue="e-wallet">
        <TabsList className="grid grid-cols-4 mb-6">
          <TabsTrigger value="e-wallet">E-Wallet</TabsTrigger>
          <TabsTrigger value="bank">Transfer Bank</TabsTrigger>
          <TabsTrigger value="virtual">Virtual Account</TabsTrigger>
          <TabsTrigger value="qris">QRIS</TabsTrigger>
        </TabsList>

        <TabsContent value="e-wallet">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>GoPay</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Pilih metode pembayaran GoPay pada halaman checkout</li>
                  <li>Klik tombol "Bayar Sekarang"</li>
                  <li>Anda akan diarahkan ke aplikasi Gojek</li>
                  <li>Konfirmasi pembayaran pada aplikasi Gojek</li>
                  <li>Setelah pembayaran berhasil, Anda akan diarahkan kembali ke VoucherKu</li>
                  <li>Voucher atau pulsa akan segera diproses</li>
                </ol>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>OVO</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Pilih metode pembayaran OVO pada halaman checkout</li>
                  <li>Klik tombol "Bayar Sekarang"</li>
                  <li>Anda akan diarahkan ke aplikasi OVO</li>
                  <li>Konfirmasi pembayaran pada aplikasi OVO</li>
                  <li>Setelah pembayaran berhasil, Anda akan diarahkan kembali ke VoucherKu</li>
                  <li>Voucher atau pulsa akan segera diproses</li>
                </ol>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>DANA</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Pilih metode pembayaran DANA pada halaman checkout</li>
                  <li>Klik tombol "Bayar Sekarang"</li>
                  <li>Anda akan diarahkan ke aplikasi DANA</li>
                  <li>Konfirmasi pembayaran pada aplikasi DANA</li>
                  <li>Setelah pembayaran berhasil, Anda akan diarahkan kembali ke VoucherKu</li>
                  <li>Voucher atau pulsa akan segera diproses</li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="bank">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Transfer Bank BCA</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Pilih metode pembayaran Transfer Bank BCA pada halaman checkout</li>
                  <li>Catat nomor rekening yang ditampilkan</li>
                  <li>Lakukan transfer melalui ATM, Mobile Banking, atau Internet Banking BCA</li>
                  <li>Simpan bukti transfer</li>
                  <li>Konfirmasi pembayaran dengan mengunggah bukti transfer</li>
                  <li>Setelah verifikasi, voucher atau pulsa akan segera diproses</li>
                </ol>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Transfer Bank Mandiri</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Pilih metode pembayaran Transfer Bank Mandiri pada halaman checkout</li>
                  <li>Catat nomor rekening yang ditampilkan</li>
                  <li>Lakukan transfer melalui ATM, Mobile Banking, atau Internet Banking Mandiri</li>
                  <li>Simpan bukti transfer</li>
                  <li>Konfirmasi pembayaran dengan mengunggah bukti transfer</li>
                  <li>Setelah verifikasi, voucher atau pulsa akan segera diproses</li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="virtual">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Virtual Account BCA</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Pilih metode pembayaran Virtual Account BCA pada halaman checkout</li>
                  <li>Catat nomor Virtual Account yang ditampilkan</li>
                  <li>Lakukan pembayaran melalui ATM, Mobile Banking, atau Internet Banking BCA</li>
                  <li>Pilih menu "Transfer" atau "Pembayaran"</li>
                  <li>Pilih "Virtual Account" dan masukkan nomor Virtual Account</li>
                  <li>Konfirmasi jumlah pembayaran dan selesaikan transaksi</li>
                  <li>Pembayaran akan diverifikasi secara otomatis</li>
                  <li>Voucher atau pulsa akan segera diproses</li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="qris">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Pembayaran QRIS</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Pilih metode pembayaran QRIS pada halaman checkout</li>
                  <li>Kode QR akan ditampilkan</li>
                  <li>Buka aplikasi e-wallet atau mobile banking yang mendukung QRIS</li>
                  <li>Scan kode QR yang ditampilkan</li>
                  <li>Konfirmasi jumlah pembayaran dan selesaikan transaksi</li>
                  <li>Pembayaran akan diverifikasi secara otomatis</li>
                  <li>Voucher atau pulsa akan segera diproses</li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

