"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

// const url = "http://localhost:3000";
const url = "https://budget-beta-ten.vercel.app/api/budget";

const getData = async () => {
    try {
        const res = await fetch(`${url}/`, { cache: 'no-store' });

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

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { budgets } = await getData();
                setBudgets(budgets);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="overflow-x-auto">
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <form action="#" method="post">
                        <select className="select select-bordered w-full max-w-xs mb-5">
                            <option disabled selected>Select Event?</option>
                            <option value={'Income'}>Income</option>
                            <option value={'Expense'}>Expense</option>
                        </select>
                    </form>
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
                            {budgets.map(b => (
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
                                            <Link href={`/edit/${b._id}`} className="btn join-item btn-sm btn-primary">Edit</Link>
                                            <button className="btn join-item btn-sm btn-error">Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            )}
        </div>
    );
};

export default Data;
