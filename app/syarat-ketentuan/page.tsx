import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SyaratKetentuanPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">Syarat & Ketentuan</h1>
      </div>

      <div className="max-w-3xl mx-auto">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Ketentuan Umum</CardTitle>
          </CardHeader>
          <CardContent className="prose">
            <p>
              Selamat datang di VoucherKu. Dengan mengakses dan menggunakan layanan VoucherKu, Anda menyetujui untuk
              terikat oleh syarat dan ketentuan berikut. Harap baca dengan seksama sebelum menggunakan layanan kami.
            </p>
            <p>
              VoucherKu berhak untuk mengubah, memodifikasi, menambah, atau menghapus bagian dari Syarat dan Ketentuan
              ini kapan saja. Perubahan tersebut akan efektif segera setelah diposting. Penggunaan layanan secara
              berkelanjutan setelah perubahan tersebut merupakan penerimaan Anda terhadap perubahan tersebut.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Akun Pengguna</CardTitle>
          </CardHeader>
          <CardContent className="prose">
            <ol>
              <li>
                Untuk menggunakan beberapa fitur layanan kami, Anda mungkin perlu membuat akun. Anda bertanggung jawab
                untuk menjaga kerahasiaan informasi akun Anda dan untuk semua aktivitas yang terjadi di bawah akun Anda.
              </li>
              <li>
                Anda harus memberikan informasi yang akurat, lengkap, dan terkini saat mendaftar dan memperbarui
                informasi akun Anda.
              </li>
              <li>
                Anda tidak boleh menggunakan akun orang lain tanpa izin. VoucherKu berhak menonaktifkan akun yang dibuat
                menggunakan identitas palsu atau informasi yang tidak akurat.
              </li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Pembelian dan Pembayaran</CardTitle>
          </CardHeader>
          <CardContent className="prose">
            <ol>
              <li>
                Harga yang ditampilkan di VoucherKu adalah dalam Rupiah Indonesia (IDR) dan sudah termasuk pajak yang
                berlaku.
              </li>
              <li>VoucherKu berhak mengubah harga produk kapan saja tanpa pemberitahuan sebelumnya.</li>
              <li>
                Pembayaran harus dilakukan melalui metode pembayaran yang tersedia di platform kami. VoucherKu tidak
                bertanggung jawab atas biaya tambahan yang dikenakan oleh penyedia layanan pembayaran.
              </li>
              <li>
                Setelah pembayaran berhasil, voucher atau pulsa akan dikirimkan sesuai dengan estimasi waktu yang
                ditentukan untuk masing-masing produk.
              </li>
              <li>
                Untuk transaksi yang gagal, pengembalian dana akan diproses sesuai dengan kebijakan pengembalian dana
                kami.
              </li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Kebijakan Pengembalian Dana</CardTitle>
          </CardHeader>
          <CardContent className="prose">
            <ol>
              <li>
                Pengembalian dana hanya berlaku untuk transaksi yang gagal atau produk yang tidak diterima setelah
                pembayaran berhasil.
              </li>
              <li>Permintaan pengembalian dana harus diajukan dalam waktu 24 jam setelah transaksi.</li>
              <li>
                Pengembalian dana akan diproses dalam waktu 1-3 hari kerja, tergantung pada metode pembayaran yang
                digunakan.
              </li>
              <li>
                VoucherKu berhak menolak permintaan pengembalian dana jika ditemukan indikasi penipuan atau pelanggaran
                terhadap syarat dan ketentuan.
              </li>
            </ol>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Kontak</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami melalui:</p>
            <p className="mt-2">
              Email: legal@voucherku.com
              <br />
              Telepon: +62 21 1234 5678
              <br />
              Alamat: Jl. Gatot Subroto No. 123, Jakarta Selatan, 12930, Indonesia
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

