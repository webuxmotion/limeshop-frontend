import Featured from "@/components/Featured";
import Header from "@/components/Header";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import convertMongooseObjToJSON from "@/utils/convertMongooseObjToJSON";

export default function HomePage({ product }) {
 
  return (
    <div>
      <Header />
      <Featured product={product} />
    </div>
  );
}

export async function getServerSideProps() {
  const featureProductId = "66c24a61c0ae74c3c7af734e";
  await mongooseConnect();

  const product = await Product.findById(featureProductId);

  return {
    props: {
      product: convertMongooseObjToJSON(product)
    }
  }
}