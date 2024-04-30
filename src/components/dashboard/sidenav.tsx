import Link from "next/link";
import Logo from "@/components/ui/Logo";
import NavLinks from "@/components/dashboard/navlinks";
import { LogoutOutlined } from "@ant-design/icons";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col ">
      <Link
        className="mb-2 flex h-20 items-center justify-start  bg-primary p-4 md:h-40"
        href="/">
        <div className="w-32 text-white md:w-40">
          <Logo />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-1">
        <NavLinks />
        <div className="hidden h-auto w-full grow  bg-gray-50 md:block"></div>
        <form>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-primary-hover hover:text-primary md:flex-none md:justify-start md:p-2 md:px-3">
            <LogoutOutlined className="text-2xl" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
