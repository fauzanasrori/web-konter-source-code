import { Search, ShoppingCart, User, Bell, Heart } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ProductCard } from "@/components/product-card";
import { CategoryNav } from "@/components/category-nav";
import { MobileNav } from "@/components/mobile-nav";
import { MobileMenuToggle } from "@/components/mobile-menu-toggle";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 bg-white border-b">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 lg:hidden">
              <MobileMenuToggle />
            </div>
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-green-600">
                VoucherKu
              </span>
            </Link>
            <div className="hidden flex-1 lg:block max-w-xl mx-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Cari voucher, pulsa, atau paket data..."
                  className="pl-10 pr-4 py-2 rounded-lg border-green-200 focus:border-green-500"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="hidden lg:flex">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Link href="/keranjang">
                <Button variant="ghost" size="icon">
                  <ShoppingCart className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/akun">
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="mt-2 lg:hidden">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Cari voucher, pulsa, atau paket data..."
                className="pl-10 pr-4 py-2 rounded-lg border-green-200 focus:border-green-500"
              />
            </div>
          </div>
        </div>
      </header>

      <MobileNav />

      <main className="flex-1">
        <section className="bg-gradient-to-r from-green-500 to-green-600 py-8 sm:py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center text-white">
              <h1 className="text-3xl font-bold mb-4">
                Isi Pulsa & Beli Voucher Lebih Mudah
              </h1>
              <p className="text-lg mb-6">
                Dapatkan voucher game, pulsa, dan paket data dengan harga
                terbaik
              </p>
              <Button className="bg-white text-green-600 hover:bg-green-50">
                Mulai Belanja
              </Button>
            </div>
          </div>
        </section>

        <section className="py-6 bg-gray-50">
          <div className="container mx-auto px-4">
            <CategoryNav />
          </div>
        </section>

        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Pulsa & Paket Data</h2>
              <Link href="/pulsa" className="text-green-600 hover:underline">
                Lihat Semua
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <ProductCard
                title="Pulsa Telkomsel"
                image="/placeholder.svg?height=200&width=200"
                price="Rp25.000"
                category="Pulsa"
                discount="2%"
              />
              <ProductCard
                title="Pulsa XL"
                image="/placeholder.svg?height=200&width=200"
                price="Rp50.000"
                category="Pulsa"
                discount="3%"
              />
              <ProductCard
                title="Pulsa Indosat"
                image="/placeholder.svg?height=200&width=200"
                price="Rp100.000"
                category="Pulsa"
                discount="5%"
              />
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
            </div>
          </div>
        </section>

        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Voucher Game Populer</h2>
              <Link
                href="/voucher-game"
                className="text-green-600 hover:underline"
              >
                Lihat Semua
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <ProductCard
                title="Mobile Legends 86 Diamonds"
                image="/placeholder.svg?height=200&width=200"
                price="Rp22.000"
                category="Game"
                discount="5%"
              />
              <ProductCard
                title="Free Fire 100 Diamonds"
                image="/placeholder.svg?height=200&width=200"
                price="Rp15.000"
                category="Game"
              />
              <ProductCard
                title="PUBG Mobile 150 UC"
                image="/placeholder.svg?height=200&width=200"
                price="Rp30.000"
                category="Game"
                discount="3%"
              />
              <ProductCard
                title="Genshin Impact 300 Genesis"
                image="/placeholder.svg?height=200&width=200"
                price="Rp79.000"
                category="Game"
                discount="7%"
              />
              <ProductCard
                title="Valorant 1000 Points"
                image="/placeholder.svg?height=200&width=200"
                price="Rp120.000"
                category="Game"
                discount="4%"
              />
            </div>
          </div>
        </section>

        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Voucher Digital</h2>
              <Link
                href="/voucher-digital"
                className="text-green-600 hover:underline"
              >
                Lihat Semua
              </Link>
            </div>
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
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-green-800 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">VoucherKu</h3>
              <p className="text-green-100">
                Tempat terbaik untuk membeli voucher, pulsa, dan paket data
                dengan harga terjangkau.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Layanan</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/pulsa"
                    className="text-green-100 hover:text-white"
                  >
                    Pulsa
                  </Link>
                </li>
                <li>
                  <Link
                    href="/paket-data"
                    className="text-green-100 hover:text-white"
                  >
                    Paket Data
                  </Link>
                </li>
                <li>
                  <Link
                    href="/voucher-game"
                    className="text-green-100 hover:text-white"
                  >
                    Voucher Game
                  </Link>
                </li>
                <li>
                  <Link
                    href="/voucher-digital"
                    className="text-green-100 hover:text-white"
                  >
                    Voucher Digital
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Bantuan</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/cara-pembayaran"
                    className="text-green-100 hover:text-white"
                  >
                    Cara Pembayaran
                  </Link>
                </li>
                <li>
                  <Link
                    href="/hubungi-kami"
                    className="text-green-100 hover:text-white"
                  >
                    Hubungi Kami
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-green-100 hover:text-white">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/syarat-ketentuan"
                    className="text-green-100 hover:text-white"
                  >
                    Syarat & Ketentuan
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Ikuti Kami</h4>
              <div className="flex space-x-4">
                <Link href="#" className="text-green-100 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="text-green-100 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="text-green-100 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-green-700 text-center text-green-100">
            <p>© 2025 VoucherKu. Hak Cipta Dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
