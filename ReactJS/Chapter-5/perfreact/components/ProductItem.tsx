import { memo, useState } from "react"
import dynamic from "next/dynamic"

import { AddProductToWishlistProps } from "./AddProductToWishlist"

const AddProductToWishlist = dynamic<AddProductToWishlistProps>(
  () => import('./AddProductToWishlist').then(mod => mod.AddProductToWishlist),
  {
    loading: () => <span>Carregando...</span>
  }
)

interface ProductItemProps {
  product: {
    id: number;
    title: string;
    price: number;
    priceFormatted: string;
  };
  onAddToWishlist: (id: number) => void;
}

function ProductItemComponent({ product, onAddToWishlist }: ProductItemProps) {
  const [isAddingToWishlist, setIsAddingToWishlist] = useState(false)

  return (
    <div>
      {product.title} - <strong>R$ {product.priceFormatted}</strong>

      <button onClick={() => setIsAddingToWishlist(true)}>Adicionar aos favoritos</button>

      {
        isAddingToWishlist && (
          <AddProductToWishlist
            onAddToWishlist={() => onAddToWishlist(product.id)}
            onCloseRequest={() => setIsAddingToWishlist(false)}
          />
        )
      }
    </div>
  )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product)
})