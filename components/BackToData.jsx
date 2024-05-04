import Link from "next/link";

export default function BackToData({ label, icon, path }) {
  return (
    <Link href={path} className="px-4 py-2 bg-error rounded-md text-white flex justify-center items-center">
        {icon} <span className="ml-2">{label}</span>
    </Link>
  );
}
