"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { usePurchaseModalStore } from "@/lib/store";
import { PurchaseModal } from "@/components/purchase-modal";

interface ProductCardProps {
  title: string;
  image: string;
  price: string;
  category: string;
  discount?: string;
  className?: string;
  onClick?: () => void;
}

export function ProductCard({
  title,
  image,
  price,
  category,
  discount,
  className,
  onClick,
}: ProductCardProps) {
  const { openModal } = usePurchaseModalStore();

  const handlePurchase = () => {
    if (onClick) {
      onClick();
    } else {
      openModal(title, price);
    }
  };

  return (
    <>
      <Card className="overflow-hidden transition-all duration-200 hover:shadow-md">
        {/* <Link href="#" className="block"> */}
        <div className="relative aspect-square">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className={`object-contain ${className}`}
          />
          {discount && (
            <Badge className="absolute top-2 right-2 bg-red-500">
              Diskon {discount}
            </Badge>
          )}
        </div>
        <CardContent className="p-3">
          <div className="text-xs text-muted-foreground mb-1">{category}</div>
          <h3 className="font-medium text-sm line-clamp-2 h-10">{title}</h3>
          <div className="mt-2 font-bold text-green-600">{price}</div>
        </CardContent>
        {/* </Link> */}
        <CardFooter className="p-3 pt-0">
          <Button
            size="sm"
            className="w-full bg-green-600 hover:bg-green-700"
            onClick={handlePurchase}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Beli
          </Button>
        </CardFooter>
      </Card>
      <PurchaseModal />
    </>
  );
}
