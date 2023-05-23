import { useSelector } from "react-redux";
import { useRouter } from "next/router";
const withAuth = (Component: any) => {
  const Auth = (props: any) => {
    const router = useRouter();
    let user: any = useSelector((state: any) => state.auth.access_token);
    if (user === null) {
      router.push("/");
    } else if (user !== null) {
      // If user is logged in, return original component
      return <Component {...props} />;
    }
    return (
      <div className="2xl:col-span-4 col-span-1 grid md:grid-cols-2 lg:grid-cols-3 sm:gap-8 gap-4  w-full"></div>
    );
  };
  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }
  return Auth;
};
export default withAuth;
