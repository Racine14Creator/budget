import HomePage from "@/components/HomePage";

export default function Home() {
  const url = process.env.url
  console.log(url);
  return (
    <HomePage />
  );
}
