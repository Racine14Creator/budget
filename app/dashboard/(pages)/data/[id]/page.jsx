"use client";

import EditForm from '@/components/EditForm';
import { useRouter } from 'next/navigation';

import { useEffect, useState } from 'react';

// const url = "https://budget-beta-ten.vercel.app"
// const url = "http://localhost:3000"

const EditOne = ({ params }) => {
    const url = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'

    const router = useRouter()

    const { id } = params;
    const [budget, setBudget] = useState(null);

    useEffect(() => {

        const fetchBudget = async () => {
            try {
                const res = await fetch(`${url}/api/budget/${id}`, { cache: 'no-store' });

                if (!res.ok) {
                    router.push("/data")
                    throw new Error('Failed to fetch this data')
                };

                const fetchedBudget = await res.json();

                setBudget(fetchedBudget.budget);

            } catch (error) {
                console.error(error);
            }
        };

        fetchBudget();
    }, [id]);

    return (
        <>
            {budget && (
                <EditForm
                    id={budget._id}
                    amount={budget.amount}
                    country={budget.country}
                    event={budget.event}
                    devise={budget.devise}
                    date={budget.date}
                    desc={budget.description}
                />
            )}
            {!budget && <div className='w-full flex justify-center items-center p-5'><span className="max-w-md loading loading-bars loading-lg mx-auto"></span></div>}
        </>
    );
};

export default EditOne;
