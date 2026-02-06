
// * PRODUCT TYPES
export interface ProductDetailsType {
  sync_product: SyncProduct;
  sync_variants: SyncVariant[];
}

export interface SyncProduct {
  id: number;
  external_id: string;
  name: string;
  variants: number;
  synced: number;
  thumbnail_url: string;
  is_ignored: boolean;
}

export interface SyncVariant {
  id: number;
  external_id: string;
  sync_product_id: number;
  name: string;
  synced: boolean;
  variant_id: number;
  main_category_id: number;
  warehouse_product_id: number | null;
  warehouse_product_variant_id: number | null;
  retail_price: string; // Printful returns this as a string
  sku: string;
  currency: string;
  product: VariantProduct;
  files: VariantFile[];
  options: VariantOption[];
  is_ignored: boolean;
  size: string;
  color: string;
  availability_status: "active" | "inactive";
  quantity: number;
}

export interface VariantProduct {
  variant_id: number;
  product_id: number;
  image: string;
  name: string;
}

export interface VariantFile {
  id: number;
  type: "default" | "back" | "sleeve_left" | "sleeve_right" | "preview";
  hash: string;
  url: string | null;
  filename: string;
  mime_type: string;
  size: number;
  width: number;
  height: number;
  dpi: number | null;
  status: "ok" | "error";
  created: number;
  thumbnail_url: string;
  preview_url: string;
  visible: boolean;
  is_temporary: boolean;
  message: string;
  stitch_count_tier: number | null;
}

export interface VariantOption {
  id: string;
  value: string;
}

//* WOO PRODUCT TYPES

export interface WooProductDetails {
  id: number;
  name: string;
  slug: string;
  parent: number;
  type: "simple" | "variable" | "grouped" | "external";
  variation: string;
  permalink: string;
  sku: string;
  short_description: string;
  description: string;
  on_sale: boolean;

  prices: WooProductPrices;
  price_html: string;

  average_rating: string;
  review_count: number;

  images: WooProductImage[];
  categories: WooProductCategory[];
  tags: WooProductTag[];
  brands: WooProductBrand[];

  attributes: WooProductAttribute[];
  variations: WooProductVariation[];

  grouped_products: number[];
  has_options: boolean;
  is_purchasable: boolean;
  is_in_stock: boolean;
  is_on_backorder: boolean;
  low_stock_remaining: number | null;

  stock_availability: {
    text: string;
    class: string;
  };

  sold_individually: boolean;

  add_to_cart: {
    text: string;
    description: string;
    url: string;
    single_text: string;
    minimum: number;
    maximum: number;
    multiple_of: number;
  };

  extensions: Record<string, unknown>;
}

/* ---------- Nested types ---------- */

export interface WooProductPrices {
  price: string;
  regular_price: string;
  sale_price: string;
  price_range: {
    min_amount: string;
    max_amount: string;
  };
  currency_code: string;
  currency_symbol: string;
  currency_minor_unit: number;
  currency_decimal_separator: string;
  currency_thousand_separator: string;
  currency_prefix: string;
  currency_suffix: string;
}

export interface WooProductImage {
  id: number;
  src: string;
  thumbnail: string;
  srcset: string;
  sizes: string;
  name: string;
  alt: string;
}

export interface WooProductCategory {
  id: number;
  name: string;
  slug: string;
  link: string;
}

export interface WooProductTag {
  id: number;
  name: string;
  slug: string;
  link: string;
}

export interface WooProductBrand {
  id: number;
  name: string;
  slug: string;
  link: string;
}

export interface WooProductAttribute {
  id: number;
  name: string;
  taxonomy: string;
  has_variations: boolean;
  terms: WooProductAttributeTerm[];
}

export interface WooProductAttributeTerm {
  id: number;
  name: string;
  slug: string;
}

export interface WooProductVariation {
  id: number;
  attributes: {
    name: string;
    value: string;
  }[];
}


// * USER TYPES

export interface User {
  id: number;
  date_created: string;
  date_created_gmt: string;
  date_modified: string;
  date_modified_gmt: string;
  email: string;
  first_name: string;
  last_name: string;
  role: "customer" | string;
  username: string;

  billing: Billing;

  shipping: {
    first_name: string;
    last_name: string;
    company: string;
    address_1: string;
    address_2: string;
    city: string;
    postcode: string;
    country: string;
    state: string;
    phone: string;
  };

  is_paying_customer: boolean;
  avatar_url: string;

  meta_data: Array<{
    id: number;
    key: string;
    value: string | number | Record<string, unknown>;
  }>;

  _links: {
    self: Array<{
      href: string;
      targetHints: {
        allow: Array<"GET" | "POST" | "PUT" | "PATCH" | "DELETE">;
      };
    }>;
    collection: Array<{
      href: string;
    }>;
  };
};

export interface Billing {
  first_name: string;
  last_name: string;
  company: string;
  address_1: string;
  address_2: string;
  city: string;
  postcode: string;
  country: string;
  state: string;
  email: string;
  phone: string;
  countryName?: string;
  stateCode?: string;
}

