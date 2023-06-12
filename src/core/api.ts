const api = () => {
  const get = async <T extends Object>(url: string): Promise<T> => {
    return await fetch(url, { method: 'GET' })
      .then((resolve) => resolve.json())
      .catch((error) => {
        console.log(error);
      });
  };

  const post = async <T extends Object>(
    url: string,
    body: FormData
  ): Promise<T> => {
    return await fetch(url, { method: 'POST', body: body })
      .then((resolve) => resolve.json())
      .catch((error) => {
        console.log(error);
      });
  };
};

const handleError = (error: string) => {
  console.log(error);
};

export default api;
