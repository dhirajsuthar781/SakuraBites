import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

type Props = {};

export default function MainNavbar({}: Props) {
  return (
    <div className=" flex  my-5  justify-between items-center">
      <span className="text-4xl font-semibold  tracking-wide cursor-pointer">
        <Link href={"/"}>
          Sakura<span className="text-THREE">Bites</span>
        </Link>
      </span>
      <div className="text-lg  space-x-8">
        {navlinkData.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            className="  hover:font-semibold duration-300   uppercase tracking-[1px]"
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div>
        <div className="flex items-center gap-x-4">
          <Input
            placeholder="Search..."
            className="py-2 border focus:border-black w-50"
          />

          <Link href={"/auth/login"}>
            <Button className="bg-THREE px-6 hover:bg-THREE/90 cursor-pointer">
              Login
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
const navlinkData: { name: string; link: string }[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];
