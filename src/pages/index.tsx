import ProductCard from "@/components/common/ProductCard";
import { Product } from "@/interface";
import { getRandomIndices } from "@/utils/randmizeIndex";
import type { InferGetStaticPropsType, GetStaticProps } from "next";

export const getStaticProps: GetStaticProps<{
  products: Product[];
}> = async () => {
  const res = await fetch(`${process.env.URL}/api`);
  const data = await res.json();

  const randomIndices = getRandomIndices(data.products.length, 6);
  const randomProducts = randomIndices.map((index) => data.products[index]);

  return { props: { products: randomProducts } };
};

export default function HomePage({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <section>
      <div className="hero mb-10">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Welcome to pc house!</h1>
            <p className="py-6">Build what you can dream!</p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 justify-center">
        {products.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </div>
    </section>
  );
}
