import { useContext } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ProductDisplay from "../components/ProductDisplay";
import BredCrums from "../components/BreadCrumbs";

import { ShopContext } from "../context/ShopContext";
import RelatedProduct from "../components/RelatedProduct";
import Description from "../components/Description";
import PageNotFound from "../components/PageNotFound";
import Breadcrumbs from "../components/BreadCrumbs";

const Product = () => {
  const { all_Product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_Product.find((item) => item.id === parseInt(productId));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  return (
    <div>
      {product ? (
        <div>
          <Breadcrumbs product={product} />
          <ProductDisplay product={product} />
          <Description />
          <RelatedProduct product={product} />
        </div>
      ) : (
        <div>
          <PageNotFound/> 
        </div>
      )}
    </div>
  );
};

export default Product;
