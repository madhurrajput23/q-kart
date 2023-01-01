import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/products");
  }, [router.isReady]);
  return <div>home</div>;
}
