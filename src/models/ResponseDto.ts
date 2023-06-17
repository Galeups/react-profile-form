export interface ResponseDto<T, R> {
  status: number;
  data: T | null;
  error: R | null;
}
