"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { HiOutlineTrash, HiPencilAlt, HiPlus } from "react-icons/hi";
import BackToData from "./BackToData";

const url = process.env.NEXT_PUBLIC_URL || "http://localhost:3000";
// console.log(url)

const getData = async () => {
  try {
    const res = await fetch(`${url}/api/budget`, { cache: "no-store" });

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
  const [budgets, setBudgets] = useState([]);
  const [isFetchingData, setIsFetchingData] = useState(false);

  const removeBudget = async function (id) {
    const confirmed = confirm("Do you want to delete this...");

    if (confirmed) {
      const res = await fetch(`${url}/api/budget/?id=${id}`, {
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
      const { budgets } = await getData();

      setBudgets(budgets);
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
        <div className='flex w-full justify-center items-center p-20 mx-auto'>
          <span className='loading loading-infinity loading-lg'></span>
        </div>
      ) : (
        <>
          <div className='flex max-w-[1024px] mx-auto justify-between items-center'>
            <Link
              href='/dashboard/data/register'
              className='bg-red-500 text-white px-5 py-2 rounded-full'
            >
              Enregistrer un nouveau
            </Link>
            <BackToData
              label='Enregistrer Enfant'
              icon={<HiPlus />}
              path='/dashboard/data/register'
            />
          </div>
          {!budgets.length ? (
            <div className='text-error bg-red-300 py-12 border-spacing-1 rounded-3xl flex justify-center items-center text-wrap'>
              <h3 className='text-2xl font-bold'>No data found! :{"("}</h3>
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
                  {budgets.map((b) => (
                    <tr key={b._id} className='rounded-full'>
                      <td>{b.amount + " " + b.devise}</td>
                      <td>
                        <span
                          className={
                            "badge badge-" +
                            (b.event === "Expense" ? "error" : "success")
                          }
                        >
                          {b.event}
                        </span>
                      </td>
                      <td>
                        <span
                          className={
                            "badge badge-" +
                            (b.devise === "RWF" ? "success" : "warning")
                          }
                        >
                          {b.devise}
                        </span>
                      </td>
                      <td>{b.description}</td>
                      <td>
                        <div className='join'>
                          <Link
                            href={`/dashboard/data/${b._id}`}
                            className='btn  join-item btn-sm btn-primary'
                          >
                            <HiPencilAlt />
                          </Link>
                          <button
                            className='btn join-item btn-sm btn-primary'
                            onClick={() => removeBudget(b._id)}
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
