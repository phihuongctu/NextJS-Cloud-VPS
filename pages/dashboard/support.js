
import LayoutDashboard from "/components/Layout/layoutDashboard";
import FAQ from "/components/Dashboard/FAQ/sectionFAQ";
import Categories from "/components/Dashboard/Support/sectionCategory";
import Popular from "/components/Dashboard/Support/sectionPopular";
import Ticket from "/components/Dashboard/Support/sectionspTicket";
import HeaderDashboard from "../../components/Dashboard/headerDashboard";
export default function Support() {
  return (
    <div id="support">
      <main className="support">
        <div className="support-content m-auto">
          <HeaderDashboard title="How can we help?"/>
          <Popular />
          <Ticket />
          <FAQ />
          <Categories />
        </div>
      </main>
    </div>
  );
}
Support.Layout = LayoutDashboard;
