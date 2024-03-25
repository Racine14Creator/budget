"use client";

import { useApiContext } from '@/app/apiContext';

import EditForm from '@/components/EditForm';
import { useEffect, useState } from 'react';

const EditOne = ({ params }) => {

    const apiUrl = useApiContext();

    const { id } = params;
    const [budget, setBudget] = useState(null);

    useEffect(() => {
        const fetchBudget = async () => {
            try {
                const res = await fetch(`${apiUrl}/api/budget/${id}`, { cache: 'no-store' });

                if (!res.ok) throw new Error('Failed to fetch this data');

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
                    desc={budget.description}
                />
            )}
            {!budget && <span className="max-w-md loading loading-bars loading-lg mx-auto"></span>}
        </>
    );
};

export default EditOne;
