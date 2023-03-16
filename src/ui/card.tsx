export function Card({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) {
  return <div className="border boder-stone-200 rounded-md">{children}</div>;
}
