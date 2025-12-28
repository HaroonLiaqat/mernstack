import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Products from "./components/Products";

const queryClient = new QueryClient();

function Class32() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>Tanstack Query Practice</div>
      <Products />
    </QueryClientProvider>
  );
}

export default Class32;
