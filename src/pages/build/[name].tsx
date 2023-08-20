import ProductCard from "@/components/common/ProductCard";
import { Product } from "@/interface";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export const getServerSideProps: GetServerSideProps<{
  products: Product[];
}> = async ({ params }) => {
  const res = await fetch(
    `${process.env.URL}/api/product/category/${params?.name}`
  );
  const data = await res.json();

  return { props: { products: data.products } };
};

export default function BuildCategoryPage({
  products,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <section className="flex flex-wrap gap-3 justify-center">
      {products.map((product) => (
        <ProductCard product={product} key={product._id} isBuild />
      ))}
    </section>
  );
}
