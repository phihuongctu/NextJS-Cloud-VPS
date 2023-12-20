import LayoutDashboard from "/components/Layout/layoutDashboard";
import Infrastructure from "/components/Vps/infrastructure";
import Location from "/components/Vps/location";
import ServerType from "/components/Vps/server-type";
import ServerSize from "/components/Vps/server-size";
import Additional from "/components/Vps/additional";
import StartupScript from "/components/Vps/startup-script";

export default function RegisterVPS() {
  return (
    <div className="register-vps  overflow-hidden">
      <div className="m-auto max-w-screen-lg">
        <h1 className="text-3xl font-bold py-8">Register VPS</h1>
        <Infrastructure />
        <ServerType />
        <Location />
        <ServerSize />
        <Additional />
        <StartupScript />
      </div>
    </div>
  );
}
RegisterVPS.Layout = LayoutDashboard;
