export const dataSideBar = [
  {
    name: "Home",
    path: "/",
    icon: "/img/ic-home.svg",
  },
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: "/img/Category.svg",
  },
  {
    name: "Service Management",
    icon: "/img/Send.svg",
    children: [
      {
        name: "Register service",
        path: "/register-vps",
        icon: "/img/Send.svg",
      },
      {
        name: "My billing",
        path: "/dashboard/billing",
        icon: "/img/Send.svg",
      },
      {
        name: "Ssh key",
        path: "/dashboard/ssh-key",
        icon: "/img/Send.svg",
      },
      {
        name: "Script key",
        path: "/dashboard/script-key",
        icon: "/img/Send.svg",
      },
      {
        name: "My service",
        path: "/dashboard/my-service/",
        icon: "/img/Send.svg",
      },
      {
        name: "Ticket",
        path: "/dashboard/ticket",
        icon: "/img/Send.svg",
      },
    ],
  },
  {
    name: "Profile",
    icon: "/img/Profile-blue.svg",
    children: [
      {
        name: "Edit account",
        path: "/dashboard/profile",
        icon: "/img/Profile-blue.svg",
      },
      {
        name: "Change password",
        path: "/dashboard/change-password",
        icon: "/img/change-password.svg",
      },
    ],
  },
  {
    name: "Security",
    icon: "/img/fa-authentication.svg",
    children: [
      {
        name: "2FA",
        path: "/dashboard/authentication",
        icon: "/img/fa-authentication.svg",
      },
    ],
  },
  {
    name: "Support & Knowledge",
    icon: "/img/support.svg",
    children: [
      {
        name: "Support",
        path: "/dashboard/support/",
        icon: "/img/support.svg",
      },
      {
        name: "Documentation",
        path: "/dashboard/documentation/",
        icon: "/img/ic-resource.svg",
      },
      {
        name: "FAQ",
        path: "/dashboard/faq/",
        icon: "/img/support.svg",
      },
    ],
  },
  {
    name: "New Ticket",
    path: "/dashboard/new-ticket",
    icon: "/img/support.svg",
  },
  {
    name: "404",
    path: "/404",
    icon: "/img/support.svg",
  },
  {
    name: "Post",
    path: "/posts/3",
    icon: "/img/support.svg",
  },
  {
    name: "Order detail",
    path: "/dashboard/order-detail",
    icon: "/img/support.svg",
  },
  {
    name: "Notification",
    path: "/dashboard/notification",
    icon: "/img/support.svg",
  },
  {
    name: "Payment",
    path: "/dashboard/payment",
    icon: "/img/support.svg",
  },
  {
    name: "Reward center",
    path: "/dashboard/reward-center",
    icon: "/img/support.svg",
  },
  {
    name: "Reward detail",
    path: "/dashboard/detail-reward-center",
    icon: "/img/support.svg",
  },
];
