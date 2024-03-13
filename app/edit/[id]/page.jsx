"use client";

import EditForm from '@/components/EditForm';
import { useEffect, useState } from 'react';

const url = 'http://localhost:3000/api/budget/';

const EditOne = ({ params }) => {
    const { id } = params;
    const [budget, setBudget] = useState(null);

    useEffect(() => {
        const fetchBudget = async () => {
            try {

                const res = await fetch(`${url}/${id}`, { cache: 'no-store' });

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
            <h3 className="text-3xl font-bold">Update</h3>
            {console.log(budget)}
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
            {!budget && <p>Loading...</p>}
        </>
    );
};

export default EditOne;
