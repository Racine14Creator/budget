"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiOutlineTrash, HiPencilAlt, HiPlus } from "react-icons/hi";
import { toast } from "react-toastify";
import BackToData from "../BackToData";

const url = process.env.NEXT_PUBLIC_URL;

const getData = async () => {
  try {
    const res = await fetch(`${url}/api/garderie`, { cache: "no-store" });

    if (!res.ok) {
      throw new Error("Failed to fetch Data...");
    }

    return res.json();
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};

export default function DataGalerie() {
  const [gaderies, setGaderies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFetchingData, setIsFetchingData] = useState(false);

  const removeGaderie = async function (id) {
    // Updated the function name for clarity
    const confirmed = confirm("Voulez-vous vraiment supprimer cet enfant?");

    if (confirmed) {
      const res = await fetch(`${url}/api/garderie/?id=${id}`, {
        // Fixed the endpoint typo
        method: "DELETE",
      });

      if (res.ok) {
        fetchData();
      }
    }
  };

  const fetchData = async () => {
    try {
      setIsFetchingData(true);
      const { gaderies } = await getData();
      console.log("Data Fetching:... " + gaderies);

      setGaderies(gaderies);
      setIsLoading(false);
    } catch (error) {
      toast.error(error);
      console.log(error);
    } finally {
      setIsFetchingData(false); // Corrected from setGaderies(false)
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (!isFetchingData) {
      fetchData();
    }
  }, [isFetchingData]);

  return (
    <div>
      {isLoading ? (
        <div className='flex w-full justify-center items-center p-20 mx-auto'>
          <span className='loading loading-infinity loading-lg'></span>
        </div>
      ) : (
        <>
          <div className='flex max-w-[1024px] mx-auto justify-between items-center'>
            <Link
              href='/dashboard/garderie/register' // Fixed the path to match the correct registration route
              className='bg-red-500 text-white px-5 py-2 rounded-full'
            >
              Enregistrer un nouveau
            </Link>
            <BackToData
              label='Enregistrer Enfant'
              icon={<HiPlus />}
              path='/dashboard/garderie/register' // Fixed the path here as well
            />
          </div>

          {!gaderies.length ? ( // Fixed the condition to properly handle no data case
            <div className='text-error bg-red-300 py-12 border-spacing-1 rounded-3xl flex justify-center items-center text-wrap'>
              <h3 className='text-2xl font-bold'>
                Vous n&apos;avez d&apos;enfant enregistrer...
              </h3>
            </div>
          ) : (
            <>
              <div className='max-w-7xl w-[1024px] mx-auto'>
                <table className='table table-zebra'>
                  <thead>
                    <tr>
                      <th>Nom de l&apos;enfant</th>
                      <th>Nom du papa</th>
                      <th>Nom de la maman</th>
                      <th>Téléphone</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {gaderies.map(({ _id, Name, Father, Mother, Phone }) => (
                      <tr key={_id} className='rounded-full'>
                        <td>{Name}</td>
                        <td>{Father}</td>
                        <td>{Mother}</td>
                        <td>{Phone}</td>
                        <td>
                          <div className='join'>
                            <Link
                              href={`/dashboard/garderie/${_id}`} // Corrected the URL for editing
                              className='btn  join-item btn-sm btn-primary'
                            >
                              <HiPencilAlt />
                            </Link>
                            <button
                              className='btn join-item btn-sm btn-primary'
                              onClick={() => removeGaderie(_id)} // Updated to correct function name
                            >
                              <HiOutlineTrash />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
