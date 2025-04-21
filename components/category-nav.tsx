import { Button } from "@/components/ui/button";
import { Gamepad2, Smartphone, Tv, Gift, CreditCard, Zap } from "lucide-react";
import Link from "next/link";

export function CategoryNav() {
  const categories = [
    { name: "Pulsa", icon: <Smartphone className="h-6 w-6" />, href: "/pulsa" },
    {
      name: "Paket Data",
      icon: <Zap className="h-6 w-6" />,
      href: "/paket-data",
    },
    {
      name: "Voucher Game",
      icon: <Gamepad2 className="h-6 w-6" />,
      href: "/voucher-game",
    },
    {
      name: "Streaming",
      icon: <Tv className="h-6 w-6" />,
      href: "/voucher-digital",
    },
  ];

  return (
    <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
      {categories.map((category) => (
        <Link key={category.name} href={category.href}>
          <Button
            variant="outline"
            className="flex flex-col h-auto py-4 w-full border-green-100 hover:border-green-500 hover:bg-green-50"
          >
            <div className="text-green-600 mb-2">{category.icon}</div>
            <span>{category.name}</span>
          </Button>
        </Link>
      ))}
    </div>
  );
}
