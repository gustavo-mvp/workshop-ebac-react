import axios from "axios";
import { useEffect, useState } from "react";

const BASE_URL = "https://fakestoreapi.com";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

interface Rating {
  rate: number;
  count: number;
}

export const useProductsRequest = () => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    axios.get<Product[]>(`${BASE_URL}/products`).then((res) => {
      if (res.status !== 200) {
        setError(true);
      } else {
        setProducts(res.data);
      }
      setLoading(false);
    });
  }, []);

  return {
    products,
    isLoading,
    isError,
  };
};
