import { Entertainment } from "@/ui/entertainment";
import { GlobalNav } from "@/ui/global-nav";
import { Header } from "@/ui/header";

export default function Home() {
  return (
    <div className="mx-5 my-1">
      <div className="flex justify-between">
        <Header />
        <div className="mt-auto">
          <GlobalNav />
        </div>
      </div>
      <div className="flex flex-col mt-20 justify-center">
        <h1 className="mb-12 text-4xl text-center text-red-400">
          Easily Get Commodity Insights Data
        </h1>
        <Entertainment />
      </div>
    </div>
  );
}
