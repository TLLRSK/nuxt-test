import type { TYacht, TYachtsApiResponse } from "~/types/types";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const { page, buy } = query;
  const queryParams = {
    page: page || "1",
    buy: buy !== "false",
  };

  const baseUrl = "https://royaloceanyachts.com/api/yachts";

  try {
    const response: TYachtsApiResponse = await $fetch(baseUrl, {
      method: "GET",
      query: queryParams,
      headers: {
        CORS: "Access-Control-Allow-Origin",
      },
      responseType: "json",
    });

    const transformedData = response.data.map((yacht: TYacht) => {
      const {
        charterSummerPrice,
        charterWinterPrice,
        charterSummerHotspots,
        charterWinterHotspots,
        ...cleanYacht
      } = yacht;
      return cleanYacht;
    });

    return {
      meta: {
        total: response.meta.total,
        page: response.meta.page,
        totalPages: response.meta.totalPages,
      },
      data: transformedData,
    };
  } catch (error: any) {
    console.error(
      "SERVER: Error occurred trying to fetch yacths data from external API:",
      error
    );

    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || `Server error: ${error.message}`,
    });
  }
});
