"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Check, Loader2 } from "lucide-react"
import { usePurchaseModalStore } from "@/lib/store"

export function PurchaseModal() {
  const { isOpen, productTitle, productPrice, closeModal } = usePurchaseModalStore()
  const [paymentMethod, setPaymentMethod] = useState("gopay")
  const [isProcessing, setIsProcessing] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handlePurchase = () => {
    setIsProcessing(true)

    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false)
      setIsSuccess(true)

      // Reset and close after showing success
      setTimeout(() => {
        setIsSuccess(false)
        closeModal()
      }, 2000)
    }, 1500)
  }

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Konfirmasi Pembelian</DialogTitle>
          <DialogDescription>Silakan konfirmasi detail pembelian Anda.</DialogDescription>
        </DialogHeader>

        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-6">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <Check className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-lg font-medium text-center">Pembelian Berhasil!</h3>
            <p className="text-sm text-muted-foreground text-center mt-2">Terima kasih telah berbelanja di VoucherKu</p>
          </div>
        ) : (
          <>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label>Produk</Label>
                <div className="font-medium">{productTitle}</div>
              </div>
              <div className="grid gap-2">
                <Label>Harga</Label>
                <div className="font-medium text-green-600">{productPrice}</div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Nomor Telepon</Label>
                <Input id="phone" placeholder="Contoh: 08123456789" />
              </div>
              <div className="grid gap-2">
                <Label>Metode Pembayaran</Label>
                <RadioGroup defaultValue="gopay" value={paymentMethod} onValueChange={setPaymentMethod}>
                  <div className="flex items-center space-x-2 border rounded-md p-3">
                    <RadioGroupItem value="gopay" id="gopay" />
                    <Label htmlFor="gopay" className="flex-1 cursor-pointer">
                      GoPay
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 border rounded-md p-3">
                    <RadioGroupItem value="ovo" id="ovo" />
                    <Label htmlFor="ovo" className="flex-1 cursor-pointer">
                      OVO
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 border rounded-md p-3">
                    <RadioGroupItem value="dana" id="dana" />
                    <Label htmlFor="dana" className="flex-1 cursor-pointer">
                      DANA
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 border rounded-md p-3">
                    <RadioGroupItem value="bank" id="bank" />
                    <Label htmlFor="bank" className="flex-1 cursor-pointer">
                      Transfer Bank
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={closeModal}>
                Batal
              </Button>
              <Button onClick={handlePurchase} disabled={isProcessing} className="bg-green-600 hover:bg-green-700">
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
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}

