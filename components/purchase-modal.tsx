"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Check, Loader2, X } from "lucide-react";
import { usePurchaseModalStore } from "@/lib/store";

export function PurchaseModal() {
  const { isOpen, productTitle, productPrice, closeModal } =
    usePurchaseModalStore();
  const [paymentMethod, setPaymentMethod] = useState("gopay");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handlePurchase = () => {
    setIsProcessing(true);

    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);

      // Reset and close after showing success
      setTimeout(() => {
        setIsSuccess(false);
        closeModal();
      }, 2000);
    }, 1500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent className="sm:max-w-[425px] p-0 overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b">
          <DialogHeader className="p-0">
            <DialogTitle className="text-lg font-semibold">
              Konfirmasi Pembelian
            </DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground">
              Silakan konfirmasi detail pembelian Anda.
            </DialogDescription>
          </DialogHeader>
        </div>

        {isSuccess ? (
          <div className="flex flex-col items-center justify-center p-8">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-center">
              Pembelian Berhasil!
            </h3>
            <p className="text-sm text-muted-foreground text-center mt-2">
              Terima kasih telah berbelanja di VoucherKu
            </p>
          </div>
        ) : (
          <div className="p-6 space-y-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label className="text-muted-foreground">Produk</Label>
                <div className="font-medium">{productTitle}</div>
              </div>
              <div className="flex justify-between items-center">
                <Label className="text-muted-foreground">Harga</Label>
                <div className="font-medium text-green-600">{productPrice}</div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Nomor Telepon</Label>
                <Input
                  id="phone"
                  placeholder="Contoh: 08123456789"
                  className="w-full"
                />
              </div>
              <div className="space-y-3">
                <Label>Metode Pembayaran</Label>
                <RadioGroup
                  defaultValue="gopay"
                  value={paymentMethod}
                  onValueChange={setPaymentMethod}
                  className="grid gap-2"
                >
                  <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                    <RadioGroupItem value="gopay" id="gopay" />
                    <Label htmlFor="gopay" className="flex-1 cursor-pointer">
                      GoPay
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                    <RadioGroupItem value="ovo" id="ovo" />
                    <Label htmlFor="ovo" className="flex-1 cursor-pointer">
                      OVO
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                    <RadioGroupItem value="dana" id="dana" />
                    <Label htmlFor="dana" className="flex-1 cursor-pointer">
                      DANA
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                    <RadioGroupItem value="bank" id="bank" />
                    <Label htmlFor="bank" className="flex-1 cursor-pointer">
                      Transfer Bank
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
            <DialogFooter className="flex-col sm:flex-row gap-2">
              <Button
                variant="outline"
                onClick={closeModal}
                className="w-full sm:w-auto"
              >
                Batal
              </Button>
              <Button
                onClick={handlePurchase}
                disabled={isProcessing}
                className="w-full sm:w-auto bg-green-600 hover:bg-green-700"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Memproses
                  </>
                ) : (
                  "Bayar Sekarang"
                )}
              </Button>
            </DialogFooter>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
