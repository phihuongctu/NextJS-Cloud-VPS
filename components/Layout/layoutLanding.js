import Header from "../Header/header";
import Head from "next/head";
import Footer from "../Footer/footer";
import MenuMobile from "/components/Menu/menuMobile";
const LayoutLanding = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="Home" content="Teknix" />
      </Head>
      <Header />
      <section className="flex ">{children}</section>
      <Footer />
      <MenuMobile />
    </>
  );
};
export default LayoutLanding;
