import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { appStore, voucherDigital } from "@/constants";

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
            {voucherDigital.map((digital) => (
              <ProductCard
                key={digital.title}
                title={digital.title}
                image={digital.image}
                price={digital.price}
                category={digital.category}
                discount={digital.discount}
                className="object-cover"
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="app-store">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {appStore.map((store) => (
              <ProductCard
                key={store.title}
                title={store.title}
                image={store.image}
                price={store.price}
                category={store.category}
                discount={store.discount}
              />
            ))}
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
  );
}
