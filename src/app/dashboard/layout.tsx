import SideNav from "@/components/dashboard/sidenav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden p-3">
      <div className="w-full flex-none fix md:w-64 ">
        <SideNav />
      </div>
      <div className="flex-grow p-4 md:overflow-y-auto lg:p-12">{children}</div>
    </div>
  );
}
