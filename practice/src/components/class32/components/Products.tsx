import { useQuery } from "@tanstack/react-query";

function Products() {
  const { isLoading, data, error, refetch } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("https://dummyjson.com/products");
      if (!res.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await res.json();
      return data;
    },
    //     staleTime: 10_000,
    refetchOnWindowFocus: true,
  });
  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data && (
        <div>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
      <button className="btn btn-primary m-6" onClick={() => refetch()}>
        Refetch
      </button>
    </div>
  );
}

export default Products;
