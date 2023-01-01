import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

function AuthProvider(props) {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const loginStatus = JSON.parse(localStorage?.getItem("login"));
    loginStatus?.isUserLoggedIn && setIsLogin(true);
  }, [router.isReady]);

  const value = {
    isLogin,
    setIsLogin,
  };

  return <AuthContext.Provider value={value} {...props} />;
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
