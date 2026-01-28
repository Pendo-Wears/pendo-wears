import { productsEndpoint } from "@/src/lib/endpoints";
import ProductDetailsClient from "./ProductDetailsClient";
import { WooProductDetails } from "@/src/lib/types";

export async function generateMetadata({ params }: { params: any }) {
  const wooResult: any = await productsEndpoint.getWooProductDetails(
    params.slug,
  );
  const product: WooProductDetails = wooResult.data;

  const stripHtml = (html = "") => html.replace(/<[^>]*>/g, "").trim();

  const title = product?.name ?? "Product";
  const description = stripHtml(product?.description).slice(0, 160);

  const image =
    product?.images?.[0]?.src ??
    "https://darkgray-heron-136669.hostingersite.com/wp-content/uploads/2026/01/cropped-about.png";

  return {
    title,
    description,

    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: product?.images?.[0]?.alt ?? title,
        },
      ], // MUST be absolute URL
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

const ProductDetails = ({
  params,
}: {
  params: Promise<{ slug: string | number }>;
}) => {
  return (
    <>
      <ProductDetailsClient params={params} />
    </>
  );
};

export default ProductDetails;
