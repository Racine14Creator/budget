"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {HiOutlineTrash, HiPencilAlt, HiPlus } from "react-icons/hi"
import BackToData from "./BackToData";

const url = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'
// console.log(url)

const getData = async () => {

    try {

        const res = await fetch(`${url}/api/budget`, { cache: 'no-store' });

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
    const router = useRouter()
    
    const [isLoading, setIsLoading] = useState(true);
    const [budgets, setBudgets] = useState([]);
    const [isFetchingData, setIsFetchingData] = useState(false);

    const removeBudget = async function (id) {

        const confirmed = confirm("Do you want to delete this...")

        if (confirmed) {

            const res = await fetch(`${url}/api/budget/?id=${id}`, { method: "DELETE" })

            if (res.ok) {
                fetchData();
            }
        }
    }

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
        <div className="overflow-x-auto">
            {isLoading ? (
                <div className="flex w-full justify-center items-center p-20 mx-auto">
                    <span className="loading loading-infinity loading-lg"></span>
                </div>
            ) : (
                <>
                    <div className="flex justify-between items-center">
                    <form action="#" method="post">
                        <select className="select select-bordered w-full max-w-xs mb-5" onChange={(e) => console.log(e.target.value)}>
                            <option value="" defaultValue>Select Event?</option>
                            <option value={'Income'}>Income</option>
                            <option value={'Expense'}>Expense</option>
                        </select>

                    </form>
                    <BackToData label="Add data" icon={<HiPlus/>} path="/data/register"/>
                    </div>
                    {!budgets.length ?
                        <div className="text-error bg-red-300 py-12 border-spacing-1 rounded-3xl flex justify-center items-center text-wrap">
                            <h3 className="text-2xl font-bold">No data found! :{"("}</h3>
                        </div>
                        :
                    <table className="table table-zebra">
                        <thead>
                            <tr>
                                <th>Amount</th>
                                <th>Event</th>
                                <th>Devise</th>
                                <th>Description</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                budgets.map(b => (
                                    <tr key={b._id} className="rounded-full">
                                        <td>{b.amount + " " + b.devise}</td>
                                        <td>
                                            <span className={"badge badge-" + (b.event === "Expense" ? "error" : "success")}>{b.event}</span>
                                        </td>
                                        <td>
                                            <span className={"badge badge-" + (b.devise === "RWF" ? "success" : "warning")}>{b.devise}</span>
                                        </td>
                                        <td>{b.description}</td>
                                        <td>
                                            <div className="join">
                                                <Link href={`/data/${b._id}`} className="btn join-item btn-sm btn-primary"><HiPencilAlt/></Link>
                                                <button className="btn join-item btn-sm btn-error" onClick={() => removeBudget(b._id)}><HiOutlineTrash /></button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                    }
                </>
            )}
        </div>
    );
};

export default Data;