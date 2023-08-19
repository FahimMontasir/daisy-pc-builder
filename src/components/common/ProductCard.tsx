import { Product } from "@/interface";
import { useAppDispatch } from "@/lib/redux/hooks";
import { selectProduct } from "@/lib/redux/slices/builder";
import Image from "next/image";
import { useRouter } from "next/router";

export default function ProductCard({
  product,
  isBuild = false,
}: {
  product: Product;
  isBuild?: boolean;
}) {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleAddToBuilder = () => {
    dispatch(selectProduct(product));
    router.push("/build");
  };

  return (
    <div
      className={`card w-96 bg-neutral shadow-xl ${
        isBuild ? "cursor-default" : "cursor-pointer"
      }`}
      onClick={() => !isBuild && router.push(`/product/${product._id}`)}
    >
      <figure className="h-[200px]">
        <Image src={product.image} alt="card" width={384} height={200} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.productName}</h2>
        <p>Price: ${product.price}</p>
        <p>Rating: {product.averageRating}🌟</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{product.category}</div>
          <div className="badge badge-outline">{product.status}</div>
        </div>
        {isBuild && (
          <button
            disabled={product.status !== "In Stock"}
            className="btn"
            onClick={handleAddToBuilder}
          >
            Add To Builder
          </button>
        )}
      </div>
    </div>
  );
}
