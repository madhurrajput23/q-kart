import Navbar from "../components/navbar/Navbar";
import { AuthProvider } from "../contexts/auth-context";
import { ProductProvider } from "../contexts/product-context";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ProductProvider>
        <Navbar />
        <Component {...pageProps} />
      </ProductProvider>
    </AuthProvider>
  );
}
