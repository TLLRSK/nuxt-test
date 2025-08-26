import type { Component } from "vue";

type TCurrencies = {
  EUR: number;
  USD: number;
  GBP: number;
};

type THotspots = Array<{
  id: string;
  name: string;
}>;

type TMeta = {
  total: number;
  page: number;
  totalPages: number;
};

export type TYacht = {
  id: string;
  permalink: string;
  name: string;
  coverImage: {
    url: string;
  };
  hidePrice: boolean;
  buyPrice: TCurrencies;
  charterSummerPrice: TCurrencies;
  charterSummerHotspots: THotspots;
  charterWinterPrice: TCurrencies;
  charterWinterHotspots: THotspots;
  guestsNumber: number;
  cabinsNumber: number;
  length: {
    meters: string;
    feet: string;
  };
};

export type TTransformedYacht = Omit<
  TYacht,
  | "charterSummerPrice"
  | "charterSummerHotspots"
  | "charterWinterPrice"
  | "charterWinterHotspots"
>;

export type TYachtsApiResponse = {
  meta: TMeta;
  data: TYacht[];
};

export type TServerYachtsResponse = {
  meta: TMeta;
  data: TTransformedYacht[];
};

export interface YachtState {
  yachts: TTransformedYacht[];
  totalYachts: number;
  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
  isLoading: boolean;
  error: string | null;
}

export type TView = {
  class: string;
  icon: Component;
};

export type TViewsMap = Record<string, TView>;

export type TViewIconProps = {
  color?: string;
  active: boolean;
};
