export interface AddProductToWishlistProps {
  onAddToWishlist: () => void;
  onCloseRequest: () => void;
}

export function AddProductToWishlist({
  onAddToWishlist,
  onCloseRequest
}: AddProductToWishlistProps) {
  return (
    <span>
      Deseja adicionar ao favoritos?

      <button onClick={onAddToWishlist}>Sim</button>
      <button onClick={onCloseRequest}>Não</button>
    </span>
  )
}