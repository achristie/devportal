"use client";
import { useState } from "react";
import { Card } from "./card";

const items = [
  { value: "API" },
  { value: "Python" },
  { value: "Snowflake" },
  { value: "ADX" },
  { value: "DeltaLake" },
  { value: "FTP" },
];

export function Entertainment() {
  const [type, setType] = useState<string>("API");
  return (
    <Card className="w-[900px]">
      <div className="flex flex-row">
        <div className="w-full">{type}</div>
        <List list={items} type={type} setType={setType} />
      </div>
    </Card>
  );
}

function List({
  list,
  type,
  setType,
}: {
  list: ListItem[];
  type: string;
  setType: (value: string) => void;
}) {
  return (
    <ul className="bg-sky-900 w-2/5 text-white text-xl">
      {list.map((li) => (
        <ListItem key={li.value} item={li} onClick={setType} />
      ))}
    </ul>
  );
}

type ListItem = {
  value: string;
};

function ListItem({
  item,
  onClick,
}: {
  item: ListItem;
  onClick: (value: string) => void;
}) {
  return (
    <li
      className="p-2 border-stone-100 border-b-2"
      onClick={() => onClick(item.value)}
    >
      {item.value}
    </li>
  );
}

function Media() {}
