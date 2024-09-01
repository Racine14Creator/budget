"use client";

import { Eye } from "lucide-react";
import Link from "next/link";

export default async function Table({ item }) {
  return (
    <div className='border rounded-xl p-5 grid grid-cols-8 gap-5 w-full justify-between items-center'>
      <span title="Nom de l'enfant" className='col-span-2'>
        {item.Name}
      </span>
      <span title='Nom du papa' className='col-span-2'>
        {item.Father}
      </span>
      <span
        title='Nom de la maman'
        className='flex md:flex-row md:justify-between md:items-center col-span-4'
      >
        {item.Mother}
        <Link
          href={`/dashboard/gaderie/${item._id}`}
          className='bg-blue-500 text-white rounded-xl px-5 py-2'
        >
          <Eye className='w-5 h-5' />
        </Link>
      </span>
    </div>
  );
}
