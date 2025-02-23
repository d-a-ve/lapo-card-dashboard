import { URL_PATH_SEGMENTS } from "@/constants";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/nav-link.constants";
import { NavLink } from "react-router";
import { HomeIcon } from "./icons/home-icon";
import { LogoutIcon } from "./icons/logout-icon";

export function Nav() {
  return (
    <nav className="h-full">
      <ul className="grid h-full grid-rows-[auto_1fr_auto]">
        <li>
          <NavLink
            to={URL_PATH_SEGMENTS.HOME}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 rounded-lg border border-transparent px-3 py-2.5 text-grey transition-colors duration-150",
                {
                  "border-gray-100 bg-gray-150 text-primary": isActive,
                  "hover:text-primary": !isActive,
                },
              )
            }
          >
            <HomeIcon />
            <span className="text-xs">Dashboard</span>
          </NavLink>
        </li>
        <li>
          <ul className="space-y-1">
            <li className="pt-4 pb-1 pl-4 text-[0.53rem] text-gray-400">
              MAIN MENU
            </li>
            {NAV_LINKS.map(({ icon, label, href }) => (
              <li key={label}>
                <NavLink
                  to={href}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-3 rounded-lg border border-transparent px-3 py-2.5 text-grey transition-colors duration-150",
                      {
                        "border-gray-100 bg-gray-150 text-primary": isActive,
                        "hover:text-primary": !isActive,
                      },
                    )
                  }
                >
                  {icon}
                  <span className="text-xs">{label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <button className="flex w-full cursor-pointer items-center gap-3 rounded-lg border border-transparent px-3 py-2.5 text-foreground transition-colors duration-150 hover:text-red-600">
            <LogoutIcon />
            <span className="text-xs">Logout</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}
