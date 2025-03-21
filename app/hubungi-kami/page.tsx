import { ArrowLeft, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function HubungiKamiPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">Hubungi Kami</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Kirim Pesan</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Nama Lengkap</Label>
                  <Input id="name" placeholder="Masukkan nama lengkap Anda" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Masukkan email Anda" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="subject">Subjek</Label>
                  <Input id="subject" placeholder="Masukkan subjek pesan" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Pesan</Label>
                  <Textarea id="message" placeholder="Tulis pesan Anda di sini" rows={5} />
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700">Kirim Pesan</Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Informasi Kontak</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-green-600 mt-1" />
                <div>
                  <h3 className="font-medium">Alamat</h3>
                  <p className="text-muted-foreground">
                    Jl. Gatot Subroto No. 123
                    <br />
                    Jakarta Selatan, 12930
                    <br />
                    Indonesia
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-green-600 mt-1" />
                <div>
                  <h3 className="font-medium">Telepon</h3>
                  <p className="text-muted-foreground">+62 21 1234 5678</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-green-600 mt-1" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground">info@voucherku.com</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Jam Operasional</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Senin - Jumat</span>
                  <span>08:00 - 17:00 WIB</span>
                </div>
                <div className="flex justify-between">
                  <span>Sabtu</span>
                  <span>09:00 - 15:00 WIB</span>
                </div>
                <div className="flex justify-between">
                  <span>Minggu & Hari Libur</span>
                  <span>Tutup</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

