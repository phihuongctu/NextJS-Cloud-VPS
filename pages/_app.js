import "../styles/tailwind.css";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import MenuMobile from "/components/Menu/menuMobile";
import LayoutLoginForm from "/components/Layout/layoutLogin";
import LayoutLanding from "/components/Layout/layoutLanding";
import LayoutDashboard from "/components/Layout/layoutDashboard";
function MyApp({ Component, pageProps }) {
  const Layout =
    Component.Layout || LayoutLanding || LayoutLoginForm || LayoutDashboard;
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
