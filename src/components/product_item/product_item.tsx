import { Product } from "../../models/product";

const ProductItem: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <>
      <div className="card bg-base-100 w-auto shadow-xl">
        <figure className="w-auto h-80 object-cover">
          <img
            src={product.images[0]?.url}
            alt={product.id}
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {product?.title}
            <div className="badge badge-secondary badge-outline">
              {product?.categories.title}
            </div>
          </h2>
          <p>{product?.description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-info">Go to detail</button>
            <button className="btn btn-primary">Add to cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
