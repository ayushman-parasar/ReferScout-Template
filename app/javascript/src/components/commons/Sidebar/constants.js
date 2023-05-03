import { Bars3Icon, UserIcon } from "@heroicons/react/24/outline";

export const APP_NAME = "Wheel";

export const PASSWORD_PATH = "/my/password/edit";
export const PROFILE_PATH = "/my/profile";
export const LOGOUT_PATH = "/logout";

export const SIDENAV_LINKS = [
  {
    label: "Notes",
    to: "/notes",
    icon: Bars3Icon,
  },
  {
    label: "Settings",
    to: "/settings",
    icon: UserIcon,
  },
];
