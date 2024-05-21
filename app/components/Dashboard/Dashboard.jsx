"use client"

import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

export function Dashboard() {
    // Sample data for expenses and income
    const data = [
        { month: 'January', expenses: 5000, income: 10000 },
        { month: 'February', expenses: 6000, income: 12000 },
        { month: 'March', expenses: 4500, income: 11000 },
        { month: 'April', expenses: 7000, income: 13000 },
        { month: 'May', expenses: 5500, income: 12500 },
        { month: 'June', expenses: 8000, income: 14000 },
    ];

    
    return (

        <>
            <h3 className="text-3xl font-bold my-3">Recharts Dashboard</h3>
            <div className="flex justify-between items-start">
                <div className="w-full shadow-md my-3 rounded-lg p-5 text-black w-fif">
                    <h3 className="text-3xl font-bold">Expense and Income Charts</h3>
                    <BarChart className='w-full' width={700} height={300} data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        {/* <CartesianGrid strokeDasharray="3 3" /> */}
                        <XAxis dataKey="month" contentStyle={{borderRadius: '.4rem'}} />
                        <YAxis />
                        <Tooltip contentStyle={{ borderRadius: "10px", background: '#fff' }} />
                        <Legend />
                        <Bar dataKey="expenses" fill="#FF5733" name="Expenses" />
                        <Bar dataKey="income" fill="#47A8BD" name="Income" />
                    </BarChart>
                </div>
            </div>
        </>
    );
}
