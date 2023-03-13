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
  const [type, setType] = useState("API");
  return (
    <Card>
      <div className="flex flex-row w-[700px]">
        <div className="w-full">Media....</div>
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
  setType: (string) => void;
}) {
  return (
    <ul>
      {list.map((li) => (
        <ListItem item={li} onClick={} />
      ))}
    </ul>
  );
}

type ListItem = {
  value: string;
};

function ListItem({ item, onClick }: { item: ListItem; onClick: () => void }) {
  return <li onClick={onClick}>{item.value}</li>;
}

function Media() {}
