import {
  IconHome,
  IconSupport,
  IconProfile,
  IconService,
} from "/components/Gallery/icon";
import { LogoMenuMobile } from "/components/Gallery/image";
export const dataMenuMobile = [
  {
    name: "home",
    path: "/",
    icon: <IconHome />,
  },
  {
    name: "Service",
    path: "/register-vps",
    icon: <IconService />,
  },
  {
    name: "",
    description: "home",
    path: "/dashboard",
    icon: <LogoMenuMobile />,
  },
  {
    name: "Support",
    path: "/dashboard/support",
    icon: <IconSupport />,
  },
  {
    name: "Profile",
    // path: "",
    popup: true,
    icon: <IconProfile />,
  },
];
