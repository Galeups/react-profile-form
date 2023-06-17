import { useEffect, useState } from 'react';
import { ResponseDto } from '../models/ResponseDto';

type Response = ResponseDto<string, string>;
// TODO: переделать
const useApi = () => {
  const [response, setResponse] = useState<ResponseDto<string, string> | null>(
    null
  );
  const post = async (
    url: string,
    body: FormData
  ): Promise<ResponseDto<string, string>> => {
    return await fetch(url, { method: 'POST', body: body })
      .then((resolve) => resolve.json())
      .catch((error) => {
        setResponse({ status: error.status, data: null, error: error.message });
        console.log(error);
      });
  };

  useEffect(() => {
    setResponse({ status: 200, data: null, error: null });
  }, []);

  return response;
};

export default useApi;
