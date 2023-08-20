import { Product } from "@/interface";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";

export async function getStaticPaths() {
  const res = await fetch(`${process.env.URL}/api`);
  const { products } = await res.json();

  const paths = products.map((product: Product) => ({
    params: { id: product._id },
  }));

  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps<{
  product: Product;
}> = async ({ params }) => {
  const res = await fetch(`${process.env.URL}/api/product/${params?.id}`);
  const { product } = await res.json();

  return { props: { product } };
};

export default function ProductDetailsPage({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="card w-full bg-neutral shadow-xl overflow-hidden">
      <div className={`relative overflow-hidden h-[300px]`}>
        <Image
          src={product.image}
          alt="product view"
          fill
          sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        33vw"
          className="content-center object-contain"
        />
      </div>
      <div className="card-body">
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{product.category}</div>
          <div className="badge badge-outline">{product.status}</div>
        </div>
        <h2 className="card-title">{product.productName}</h2>
        <h5>Description: {product.description}</h5>
        <div>
          <p>Key features:</p>
          {Object.entries(product.keyFeatures).map(([key, value]) => (
            <p key={key}>
              {key}: {value}
            </p>
          ))}
        </div>
        <p>Price: ${product.price}</p>
        <p>Average Rating: {product.averageRating}🌟</p>
        <p>Individual Rating: {product.individualRating}🌟</p>
        <div>
          <p>Reviews:</p>
          {product.reviews.map((r) => (
            <p key={r}>{r}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
