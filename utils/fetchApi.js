const fetchApi = async (endpoint, headers = {}) => {
  const options = { next: { revalidate: 86400 }, headers };
  const response = await fetch(endpoint, options);
  const data = await response.json();
  return data;
};

export default fetchApi;
