"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { HiOutlineTrash, HiPencilAlt, HiPlus } from "react-icons/hi";
import BackToData from "./BackToData";

const url = process.env.NEXT_PUBLIC_URL || "http://localhost:3000";
// console.log(url)

const getData = async () => {
  try {
    const res = await fetch(`${url}/api/enfant`, { cache: "no-store" });

    if (!res.ok) {
      throw new Error("Failed to fetch Data...");
    }

    return res.json();
  } catch (error) {
    console.error(error);

    throw new Error(error);
  }
};

const Data = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [enfants, setEnfants] = useState([]);
  const [isFetchingData, setIsFetchingData] = useState(false);

  const removeBudget = async function (id) {
    const confirmed = confirm("Do you want to delete this...");

    if (confirmed) {
      const res = await fetch(`${url}/api/enfant/?id=${id}`, {
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
      const { enfants } = await getData();

      setEnfants(enfants);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    } finally {
      setIsFetchingData(false);
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
    <div className='overflow-x-auto'>
      {isLoading ? (
        <div className='flex flex-col w-full py-50 justify-center items-center p-20 mx-auto'>
          <Link
            href='/dashboard/data/register'
            className='bg-red-500 text-white rounded-full px-5 py-2'
          >
            Enregistre un nouveau
          </Link>
          <span className='loading loading-infinity loading-lg'></span>
        </div>
      ) : (
        <>
          <div className='flex max-w-[1024px] mx-auto justify-end items-center'>
            <BackToData
              label='Enregistrer Enfant'
              icon={<HiPlus />}
              path='/dashboard/data/register'
            />
          </div>

          {!enfants ? (
            <div className='text-error max-w-[1000px] mx-auto py-12 border-spacing-1 rounded-3xl flex justify-center items-center text-wrap'>
              <h3 className='text-semibold'>
                Vous n&apos;avez pas des donnees enregistrer
              </h3>
            </div>
          ) : (
            <div className='max-w-7xl w-[1024px] mx-auto'>
              <table className='table table-zebra'>
                <thead>
                  <tr>
                    <th>Nom de l&apos;enfant</th>
                    <th>Nom du papa</th>
                    <th>Nom de la maman</th>
                    <th>Telepone</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {enfants.map(({ _id, Name, Father, Mother, Nounou }) => (
                    <tr key={_id} className='rounded-full'>
                      <td>{Name}</td>
                      <td>{Father}</td>
                      <td>{Mother}</td>
                      <td>{Nounou}</td>
                      <td>
                        <div className='join'>
                          <Link
                            href={`/dashboard/data/${id}`}
                            className='btn  join-item btn-sm btn-primary'
                          >
                            <HiPencilAlt />
                          </Link>
                          <button
                            className='btn join-item btn-sm btn-primary'
                            onClick={() => removeBudget(_id)}
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
          )}
        </>
      )}
    </div>
  );
};

export default Data;
