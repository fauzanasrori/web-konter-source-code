import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">Pertanyaan Umum (FAQ)</h1>
      </div>

      <div className="max-w-3xl mx-auto">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Cari Pertanyaan</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <Input placeholder="Ketik kata kunci pertanyaan Anda..." />
              <Button className="absolute right-1 top-1 bg-green-600 hover:bg-green-700">Cari</Button>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Umum</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Apa itu VoucherKu?</AccordionTrigger>
                  <AccordionContent>
                    VoucherKu adalah platform digital yang menyediakan layanan pembelian pulsa, paket data, voucher
                    game, dan berbagai voucher digital lainnya dengan harga terjangkau dan proses yang cepat.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Bagaimana cara mendaftar di VoucherKu?</AccordionTrigger>
                  <AccordionContent>
                    Untuk mendaftar di VoucherKu, klik tombol "Daftar" di pojok kanan atas halaman. Isi formulir
                    pendaftaran dengan data diri Anda, verifikasi email, dan akun Anda siap digunakan.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Apakah VoucherKu aman digunakan?</AccordionTrigger>
                  <AccordionContent>
                    Ya, VoucherKu menggunakan sistem keamanan terkini untuk melindungi data dan transaksi pengguna.
                    Semua informasi pribadi dan pembayaran dienkripsi dengan standar keamanan tinggi.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Pembelian & Pembayaran</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Bagaimana cara membeli pulsa di VoucherKu?</AccordionTrigger>
                  <AccordionContent>
                    Untuk membeli pulsa, pilih menu "Pulsa" di halaman utama, masukkan nomor telepon, pilih nominal
                    pulsa yang diinginkan, pilih metode pembayaran, dan selesaikan transaksi. Pulsa akan segera diproses
                    setelah pembayaran berhasil.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Metode pembayaran apa saja yang tersedia?</AccordionTrigger>
                  <AccordionContent>
                    VoucherKu menerima berbagai metode pembayaran, termasuk e-wallet (GoPay, OVO, DANA), transfer bank,
                    virtual account, dan QRIS. Anda dapat memilih metode pembayaran yang paling nyaman saat checkout.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Berapa lama proses pengiriman voucher atau pulsa?</AccordionTrigger>
                  <AccordionContent>
                    Untuk pulsa dan paket data, pengiriman biasanya instan setelah pembayaran berhasil. Untuk voucher
                    game dan voucher digital lainnya, proses pengiriman maksimal 5 menit setelah pembayaran
                    terverifikasi.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Bagaimana jika transaksi saya gagal?</AccordionTrigger>
                  <AccordionContent>
                    Jika transaksi gagal, dana akan otomatis dikembalikan ke metode pembayaran Anda dalam waktu 1-3 hari
                    kerja. Jika dana belum kembali setelah periode tersebut, silakan hubungi customer service kami.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Akun & Keamanan</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Bagaimana cara mengubah password akun?</AccordionTrigger>
                  <AccordionContent>
                    Untuk mengubah password, masuk ke halaman "Akun Saya", pilih "Pengaturan", kemudian pilih "Ubah
                    Password". Masukkan password lama dan password baru Anda, lalu simpan perubahan.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Apa yang harus dilakukan jika lupa password?</AccordionTrigger>
                  <AccordionContent>
                    Jika lupa password, klik "Lupa Password" di halaman login. Masukkan email terdaftar Anda, dan kami
                    akan mengirimkan tautan untuk reset password ke email tersebut.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Bagaimana cara melihat riwayat transaksi?</AccordionTrigger>
                  <AccordionContent>
                    Untuk melihat riwayat transaksi, masuk ke halaman "Akun Saya", kemudian pilih "Riwayat Pesanan". Di
                    sana Anda dapat melihat semua transaksi yang pernah Anda lakukan beserta statusnya.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

