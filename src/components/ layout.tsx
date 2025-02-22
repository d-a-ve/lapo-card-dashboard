import { ReactNode } from "react";
import AccountIcon from "./icons/account-icon";
import { BellIcon } from "./icons/bell-icon";
import { CardInfraLogo, LapoBankLogo } from "./ui/logo";

export function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-background">
      <div className="mx-auto max-w-[1440px]">
        <aside className="fixed top-0 h-screen w-full max-w-[230px] overflow-hidden overflow-y-auto border-r border-r-[#dededf] bg-white px-3 pt-7 pb-8">
          <LapoBankLogo />
          <div className="space-y-1">
            <p className="text-[0.53rem] font-medium text-[#808080]">POWERED BY</p>
            <CardInfraLogo />
          </div>
        </aside>
        <main className="ml-[230px]">
          <div className="flex items-center gap-4 border-b border-b-[#dededf] bg-white px-5 py-2 justify-between">
            <p>Breadcrumbs here</p>
            <div className="flex items-center gap-4">
              <button className="p-2.5 text-2xl">
                <BellIcon />
              </button>
              <button className="rounded-full border border-gray-600 bg-gray-100 p-2 text-2xl">
                <AccountIcon />
              </button>
            </div>
          </div>
          <div className="px-5 py-2.5">{children}</div>
        </main>
      </div>
    </div>
  );
}
