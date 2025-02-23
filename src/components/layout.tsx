import { ReactNode } from "react";
import { Breadcrumbs } from "./breadcrumbs";
import { BellIcon } from "./icons/bell-icon";
import { UserIcon } from "./icons/user-icon";
import { Nav } from "./nav";
import { CardInfraLogo, LapoBankLogo } from "./ui/logo";

export function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-background">
      <div className="mx-auto max-w-[1440px]">
        <aside className="fixed top-0 grid h-screen w-full max-w-[230px] grid-rows-[auto_1fr_auto] overflow-hidden overflow-y-auto border-r border-r-[#dededf] bg-white px-3 pt-7 pb-8 z-10">
          <div className="max-w-28">
            <LapoBankLogo />
          </div>
          <div className="mt-8 mb-12">
            <Nav />
          </div>
          <div className="space-y-1 pl-7">
            <p className="text-[0.53rem] font-medium text-grey">POWERED BY</p>
            <div className="max-w-24">
              <CardInfraLogo />
            </div>
          </div>
        </aside>
        <main className="ml-[230px] grid min-h-screen grid-rows-[auto_1fr]">
          <div className="sticky top-0 flex w-full items-center justify-between gap-4 border-b border-b-[#dededf] bg-white px-5 py-2 z-10">
            <Breadcrumbs />
            <div className="flex items-center gap-4">
              <button className="p-2.5 text-2xl">
                <BellIcon />
              </button>
              <button className="rounded-full border border-gray-600 bg-gray-200 p-2 text-2xl">
                <UserIcon />
              </button>
            </div>
          </div>
          <div className="px-5 py-2.5 mb-8">{children}</div>
        </main>
      </div>
    </div>
  );
}

export function PageLayout({
  children,
  title,
  subtitle,
  className,
}: {
  children: ReactNode;
  className?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className={className}>
      <div className="space-y-1">
        <h1 className="text-lg font-bold">{title}</h1>
        {subtitle && <p className="text-sm">{subtitle}</p>}
      </div>
      {children}
    </div>
  );
}
