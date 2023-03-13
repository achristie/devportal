import Image from "next/image";

export function Header() {
  return (
    <div>
      <Image alt="SPGCI Logo" src="/logo.svg" width={250} height={50} />
      <h1 className="text-3xl ">Developers</h1>
    </div>
  );
}
