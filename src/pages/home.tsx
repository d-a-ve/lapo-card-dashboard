import CalendarIcon from "@/components/icons/calendar-icon";
import {
  ATMCardIcon,
  CardCheckIcon,
  CardEditIcon,
  CardPlusIcon,
  CardShiedIcon,
} from "@/components/icons/card-icons";
import { EnlargeIcon } from "@/components/icons/enlarge-icon";
import { HourglassIcon } from "@/components/icons/hourglass-icon";
import { URL_PATH_SEGMENTS } from "@/constants";
import {
  AnalyticsCard,
  AnalyticsCardInsights,
} from "@/domains/home/analytics-card";
import { DashboardCard } from "@/domains/home/dashboard-card";
import { QuickAccessCard } from "@/domains/home/quick-access-card";
import { formatInNGN } from "@/lib/utils";
import { CircleAlert } from "lucide-react";
import { Link } from "react-router";

import { RecentCardRequestsTable } from "@/domains/card-request/recent-card-requests-table";
import { CardStatusDistributionChart } from "@/domains/home/card-status-distribution-chart";
import { MonthlyInsuranceChart } from "@/domains/home/monthly-insurance-chart";
import { WeekIncomeChart } from "@/domains/home/week-income-chart";

export function HomePage() {
  return (
    <div className="space-y-3">
      <h1 className="sr-only">Dashboard Overview Page</h1>
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold">
            Hi Nazeer, what would you like to do today?
          </h2>
          <p className="text-xs font-light">
            <span className="font-normal">Last login:</span> 26/11/2024 14:39:58
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-sm border border-gray-300 px-3 py-2 text-xs">
          <p className="flex items-center gap-1 font-medium">
            <span className="text-xs">
              <CalendarIcon />
            </span>
            Today
          </p>
          <div className="h-3 w-px bg-gray-300" />
          <p className="font-light">11 Nov 2024</p>
        </div>
      </div>
      <DashboardCard className="space-y-3">
        <h2 className="font-medium">Your Quick Access</h2>
        <div className="grid grid-cols-4 gap-2">
          <QuickAccessCard icon={<CardShiedIcon />} message="Manage a Card" />
          <QuickAccessCard
            icon={<ATMCardIcon />}
            message="Issue Instant Card"
          />
          <QuickAccessCard
            icon={<CardEditIcon />}
            message="Issue Personalized Card"
          />
          <QuickAccessCard
            icon={<CardPlusIcon />}
            message="Review Card Requests"
          />
        </div>
      </DashboardCard>
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-bold">Analytics</h2>
          <div className="h-px w-full grow bg-gray-200" />
        </div>
        <div className="grid grid-cols-4 gap-2">
          <AnalyticsCard
            icon={
              <span className="text-success">
                <CardCheckIcon />
              </span>
            }
            title="Total Active Cards"
            value="26,478"
            insights={
              <AnalyticsCardInsights
                change="positive"
                stat="+9%"
                period="this month"
              />
            }
          />
          <AnalyticsCard
            icon={
              <span className="text-[#8020E7]">
                <CardEditIcon />
              </span>
            }
            title="Total Personalized Cards"
            value="15,703"
            insights={
              <AnalyticsCardInsights
                change="positive"
                stat="8.5%"
                period="this month"
              />
            }
          />
          <AnalyticsCard
            icon={
              <span className="text-success">
                <CardCheckIcon />
              </span>
            }
            title="Today's Revenue"
            value={`${formatInNGN(9300000)}`}
            insights={
              <AnalyticsCardInsights
                change="negative"
                stat="-9%"
                period="vs yesterday"
              />
            }
          />
          <AnalyticsCard
            icon={
              <span className="text-pending">
                <HourglassIcon />
              </span>
            }
            title="Pending Requests"
            value="38"
            insights={
              <p className="flex items-center gap-1 text-xs text-pending">
                <CircleAlert className="size-3" />
                Requires attention
              </p>
            }
          />
          <div className="col-span-2 space-y-2">
            <DashboardCard className="space-y-5">
              <h3 className="text-lg font-medium">Monthly Insurance</h3>
              <MonthlyInsuranceChart />
            </DashboardCard>
            <DashboardCard className="space-y-5">
              <h3 className="text-lg font-medium">This Week's income</h3>
              <WeekIncomeChart />
            </DashboardCard>
          </div>
          <div className="col-span-2 space-y-2">
            <DashboardCard className="space-y-5">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg font-medium">Recent Card Requests</h3>
                <Link
                  to={`/${URL_PATH_SEGMENTS.CARD_REQUEST}`}
                  className="text-lg text-gray-300"
                >
                  <EnlargeIcon />
                </Link>
              </div>
              <RecentCardRequestsTable />
            </DashboardCard>
            <DashboardCard className="space-y-5">
              <h3 className="text-lg font-medium">Card Status Distribution</h3>
              <CardStatusDistributionChart />
            </DashboardCard>
          </div>
        </div>
      </div>
    </div>
  );
}
