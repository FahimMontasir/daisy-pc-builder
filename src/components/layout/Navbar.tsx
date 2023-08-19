import Link from "next/link";
import { useRouter } from "next/router";

export const NAV_LINKS = [
  { id: "cpu", name: "CPU / Processor", link: "/product/category/cpu" },
  {
    id: "motherboard",
    name: "Motherboard",
    link: "/product/category/motherboard",
  },
  { id: "ram", name: "RAM", link: "/product/category/ram" },
  {
    id: "power-supply",
    name: "Power Supply Unit",
    link: "/product/category/power-supply",
  },
  { id: "storage", name: "Storage Device", link: "/product/category/storage" },
  { id: "monitor", name: "Monitor", link: "/product/category/monitor" },
  { id: "others", name: "Others", link: "/product/category/others" },
];

export default function Navbar() {
  const { asPath } = useRouter();

  return (
    <nav className="bg-neutral text-neutral-content md:px-20">
      <div className="navbar">
        <div className="flex-1">
          <Link href={"/"} className="btn btn-ghost normal-case text-xl">
            DAISY PC
          </Link>
        </div>
        <div className="flex-none">
          <Link href={"/build"} className="btn">
            Build PC
          </Link>
        </div>
      </div>
      <div className="tabs justify-center">
        {NAV_LINKS.map(({ link, name }) => (
          <Link
            key={name}
            href={link}
            className={`tab tab-lifted ${asPath === link ? "tab-active" : ""}`}
          >
            {name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
