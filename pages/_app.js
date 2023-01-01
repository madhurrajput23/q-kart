import Navbar from "../components/navbar/Navbar";
import { AuthProvider } from "../contexts/auth-context";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Navbar />
      <Component {...pageProps} />
    </AuthProvider>
  );
}
