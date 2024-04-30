"use client";

// import {
//   UserGroupIcon,
//   HomeIcon,
//   DocumentDuplicateIcon,
// } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { ProductOutlined, ProfileOutlined } from "@ant-design/icons";
const links = [
  { name: "Projects", href: "/dashboard/projects", icon: ProductOutlined },
  { name: "Tasks", href: "/dashboard/tasks", icon: ProfileOutlined },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 bg-gray-50 p-3 text-sm font-medium hover:bg-primary-hover hover:text-primary md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-primary-hover text-primary": pathname === link.href,
              }
            )}>
            <LinkIcon className=" text-2xl" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
