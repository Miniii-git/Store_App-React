function ItemInCheckout({ product }) {
  return (
    <div>
      <img src={product.image} />
      <p>{product.title}</p>
      <p>{product.quantity}</p>
    </div>
  );
}
export default ItemInCheckout;
