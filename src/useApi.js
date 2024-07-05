import useSWR from 'swr';

export default function useApi({ url, options }) {
  const { data, error, isLoading, isValidating, mutate } = useSWR(url, fetcher, options);
  console.log(data)

  return {
    data,
    isLoading,
    error,
    isValidating,
    mutate
  };
}


const fetcher = url => fetch(url).then(r => {
    if (!r.ok) throw new Error('Network response was not ok');
    return r.json();
  });