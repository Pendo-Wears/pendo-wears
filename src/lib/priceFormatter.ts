"use client";

import { count } from "console";
import { GetCountries } from "react-country-state-city";
import { Country } from "react-country-state-city/dist/esm/types";
import { useAuth } from "../context/AuthContext";

// const user = typeof window !== "undefined" ? localStorage?.getItem("user") || "null" : "null";
// const parsedUser = JSON.parse(user);
// const { user } = useAuth();
// const countryCode = user?.billing?.country;

let country: Country | undefined = undefined;

export const getCountryData = async (code: string) => {
  // let countries: any[] = [];
  const countries = await GetCountries().then((result) => {
    return result;
  });
  country = countries.find((c: any) => c.iso2 === code);
  return country;
};

// getCountryData();

// getCountryName().then((res) => {
//   country = res;
// });

// console.log(country, " COUNTRYYYYYYYYYYYYYYYY");

export const formatWoocommercePrice = (
  price: number | string,
  minorUnit = 2
) => {
  const value = Number(price) / Math.pow(10, minorUnit);

  return new Intl.NumberFormat(`en-${country?.iso2 || "NG"}`, {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(value);
};

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat(`en-${country?.iso2 || "NG"}`, {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0, // remove decimals if you want
  }).format(price).slice(2);
};

export const getPriceRange = (items: any): string => {
  if (!items || items.length === 0) return "N/A";

  const prices = items.map((item: any) => item.retail_price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  return minPrice === maxPrice
    ? formatPrice(minPrice)
    : `${formatPrice(minPrice)} - ${formatPrice(maxPrice)}`;
};

export function formatDate(timestamp: number) {
  return new Date(timestamp * 1000).toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
}
