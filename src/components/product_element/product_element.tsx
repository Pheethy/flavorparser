import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { Product } from "../../models/product.tsx";
import ProductItem from "../product_item/product_item.tsx";

interface RespProduct {
  page: number;
  per_page: number;
  total_page: number;
  total_rows: number;
  products: Product[];
}
const endPoint: string = `${import.meta.env.VITE_GO_API}`;
const Content = () => {
  const [respProduct, setRespProduct] = useState<RespProduct | null>(null);
  const [query, setQuery] = useState("");
  const handleSearch = () => {
    fetchAllProduct();
  };
  const fetchAllProduct = useCallback(async () => {
    try {
      const queryParams = {
        page: 1,
        per_page: 20,
        search_word: "",
      };
      queryParams.search_word = query ? `${query}` : "";
      const resp = await axios.get(`${endPoint}/v1/products`, {
        params: queryParams,
      });
      setRespProduct(resp.data);
    } catch (err) {
      console.log(err);
    }
  }, [query]);

  useEffect(() => {
    fetchAllProduct();
  }, [fetchAllProduct]);

  return (
    <>
      <div className="bg-slate-950 h-max min-h-screen">
        <div className="max-w-screen-xl mx-auto px-4 pb-3">
          <div className="py-4 flex justify-center">
            <input
              type="text"
              className="input input-bordered w-full max-w-lg"
              placeholder="Type here"
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="btn btn-primary ms-2" onClick={handleSearch}>
              Search
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-full">
            {respProduct?.products.map((product, index) => (
              <ProductItem key={index} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
