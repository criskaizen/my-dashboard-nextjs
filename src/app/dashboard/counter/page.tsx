import { CartCounter } from "@/app/shopping-cart/components";
import { Metadata } from "next";


export const metadata:Metadata = {
  title: 'Page Shoping Counter',
  description: 'un carrito de compras',
 };


export default function CounterPage() {

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>
      <CartCounter value={20}/>
    </div>
  );
}