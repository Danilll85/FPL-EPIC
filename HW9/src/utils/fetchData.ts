import { ApiResponse } from "../types/generics/ApiResponse";

export const fetchData = async <T>(URL: string): Promise<ApiResponse<T>> => {
  try {
    const initialResponse: ApiResponse<T> = {
      data: null,
      status: "loading",
    };

    const response = await fetch(URL);

    if (!response.ok) {
      const errorResponse: ApiResponse<T> = {
        data: null,
        status: "error",
        error: {
          message: `HTTP error! status: ${response.status}`,
          code: response.status,
        },
      };
      return errorResponse;
    }

    const data: T = await response.json();

    const successResponse: ApiResponse<T> = {
      data,
      status: "success",
      meta: {
        duration: 0,
      },
    };

    return successResponse;
  } catch (error) {
    const errorResponse: ApiResponse<T> = {
      data: null,
      status: "error",
      error: {
        message: error instanceof Error ? error.message : "Unknown error occurred",
        details: error,
      },
    };
    return errorResponse;
  }
};
