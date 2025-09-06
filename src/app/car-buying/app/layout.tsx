import { CarBuyingProvider } from "@/contexts/car-buying-context"

export default function CarBuyingAppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <CarBuyingProvider>
      {children}
    </CarBuyingProvider>
  )
}