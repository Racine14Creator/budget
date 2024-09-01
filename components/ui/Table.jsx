"use client";

import { Eye } from "lucide-react";
import Link from "next/link";

export default async function Table({ item }) {
  return (
    <div className='border rounded-xl p-5 flex gap-5 w-full flex-row justify-between items-center'>
      <span title="Nom de l'enfant">{item.Name}</span>
      <span title='Nom du papa'>{item.Father}</span>
      <span title='Nom de la maman'>{item.Mother}</span>
      <span title='Numero de telephone'>{item.Phone}</span>
      <Link
        href={`/dashboard/gaderie/${item._id}`}
        className='bg-blue-500 text-white rounded-xl px-5 py-2'
      >
        <Eye className='w-5 h-5' />
      </Link>
    </div>
  );
}
