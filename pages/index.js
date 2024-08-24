import Featured from "@/components/Featured";
import Header from "@/components/Header";
import NewProducts from "@/components/NewProducts";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import convertMongooseObjToJSON from "@/utils/convertMongooseObjToJSON";

export default function HomePage({ product, newProducts }) {

  return (
    <div>
      <Header />
      <Featured product={product} />
      <NewProducts products={newProducts} />
    </div>
  );
}

export async function getServerSideProps() {
  const featureProductId = "66c24a61c0ae74c3c7af734e";
  await mongooseConnect();

  const product = await Product.findById(featureProductId);
  const newProducts = await Product.find({}, null, {
    sort: {
      '_id': -1,
    },
    limit: 2
  });

  return {
    props: {
      product: convertMongooseObjToJSON(product),
      newProducts: convertMongooseObjToJSON(newProducts),
    }
  }
}