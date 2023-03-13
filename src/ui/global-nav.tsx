"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import clsx from "clsx";

const items = [
  { name: "Home", slug: null },
  { name: "API", slug: "api" },
  { name: "Python", slug: "python" },
  { name: "Snowflake", slug: "snowflake" },
  { name: "ADX", slug: "adx" },
  { name: "DeltaLake", slug: "delta" },
  { name: "FTP", slug: "ftp" },
];

export function GlobalNav() {
  return (
    <div className="flex justify-end">
      <ul className="flex flex-basis justify-end border border-stone-200 rounded-md inset-4 shadow-md">
        {items.map((i) => (
          <NavItem key={i.slug} item={i} />
        ))}
      </ul>
    </div>
  );
}

type Item = {
  name: string;
  slug: string | null;
};

function NavItem({ item, click }: { item: Item; click?: () => void }) {
  const segment = useSelectedLayoutSegment();
  const isActive = item.slug === segment;
  console.log(isActive, item.slug, segment);
  return (
    <Link
      onClick={click}
      href={`/${item.slug ? item.slug : ""}`}
      className={clsx("flex-col justify-end uppercase py-2 px-3", {
        "hover:bg-purple-300": !isActive,
        "text-red-500": isActive,
      })}
    >
      {item.name}
    </Link>
  );
}
