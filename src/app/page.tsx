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
      <div className="flex mt-12 justify-center">
        <Entertainment />
      </div>
    </div>
  );
}
