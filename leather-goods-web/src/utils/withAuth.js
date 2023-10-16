import { useRouter } from "next/router";
import { useEffect } from "react";

const withAuth = (WrappedComponent) => {
  const AuthComponent = (props) => {
    const router = useRouter();

    const isAuthenticated = true;

    useEffect(() => {
      if (!isAuthenticated) {
        router.push("/login");
      }
    }, [isAuthenticated, router]);

    if (isAuthenticated) {
      return <WrappedComponent {...props} />;
    } else {
      return null;
    }
  };

  return AuthComponent;
};

export default withAuth;
