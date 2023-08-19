import ProductCard from "@/components/common/ProductCard";
import { CATEGORIES, Product } from "@/interface";
import { GetStaticProps, InferGetStaticPropsType } from "next";

export async function getStaticPaths() {
  const paths = CATEGORIES.map((category) => ({
    params: { name: category },
  }));

  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps<{
  products: Product[];
}> = async ({ params }) => {
  const res = await fetch(
    `http://localhost:3000/api/product/category/${params?.name}`
  );
  const data = await res.json();

  return { props: { products: data.products } };
};

export default function CategoryPage({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <section className="flex flex-wrap gap-3 justify-center">
      {products.map((product) => (
        <ProductCard product={product} key={product._id} />
      ))}
    </section>
  );
}
