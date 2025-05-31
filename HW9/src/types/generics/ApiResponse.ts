export type ApiResponse<T> = {
  data: T | null;
  status: "success" | "error" | "loading";
  error?: {
    message: string;
    code?: number;
    details?: unknown;
  };
  meta?: {
    total?: number;
    page?: number;
    limit?: number;
    duration?: number;
  };
  timestamp?: string;
};
