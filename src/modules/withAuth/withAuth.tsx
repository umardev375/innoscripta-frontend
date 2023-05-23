import Router from "next/router";
import { useSelector } from "react-redux";
const withAuth = (Component: any) => {
  const Auth = (props: any) => {
    let user: any = useSelector((state: any) => state.auth.access_token);
    if (user === null) {
      if (typeof window !== "undefined") {
        window.location.replace("/login");
      }
    } else if (user !== null) {
      // If user is logged in, return original component
      return <Component {...props} />;
    }
    return (
      <div className="2xl:col-span-4 col-span-1 grid md:grid-cols-2 lg:grid-cols-3 sm:gap-8 gap-4  w-full"></div>
    );
  };
  // Copy getInitial props so it will run as well
  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }
  return Auth;
};
export default withAuth;
