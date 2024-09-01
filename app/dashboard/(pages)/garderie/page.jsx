import Table from "@/components/ui/Table";
import Link from "next/link";
import React from "react";

const url = process.env.NEXT_PUBLIC_URL;

async function getGarderie() {
  try {
    const res = await fetch(`${url}/api/garderie`, { cache: "no-store" });
    if (!res.ok) {
      throw new Error("Failed to fetch Todos");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading todo: ", error);
  }
}

export default async function PaymentPage() {
  const { garderies } = await getGarderie();
  return (
    <>
      <div className='w-full flex flex-col md:flex-col md:justify-between items-start md:max-w-[1200px] py-5 mx-auto'>
        <div className='flex w-full flex-row justify-between items-center'>
          <h3 className='font-bold text-lg md:text-2xl text-blue-500'>
            Garderie
          </h3>
          <Link
            href={"/dashboard/garderie/register"}
            className='bg-red-500 text-white rounded-lg px-5 p-2'
          >
            Enregistrer
          </Link>
        </div>
      </div>
      {/* Flex of two col */}
      <div className='max-w-[1200px] mx-auto flex flex-col gap-5 md:flex-col w-full md:justify-between md:items-start'>
        {garderies.map((item) => (
          <Table item={item} key={item._id} />
        ))}
      </div>
    </>
  );
}
