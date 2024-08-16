"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

export default function Home() {
  const data = [
    { month: "January", expenses: 5000, income: 10000 },
    { month: "February", expenses: 6000, income: 12000 },
    { month: "March", expenses: 4500, income: 11000 },
    { month: "April", expenses: 7000, income: 13000 },
    { month: "May", expenses: 5500, income: 12500 },
    { month: "June", expenses: 8000, income: 14000 },
  ];

  const recents = [
    { amount: 23.0, event: "Expense" },
    { amount: 500.0, event: "Income" },
    { amount: 550, event: "Expense" },
    { amount: 500.0, event: "Income" },
    { amount: 650.0, event: "Income" },
  ];
  return (
    <>
      <div className='block'>
        <header className='bg-white shadow'>
          <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
            <h1 className='text-3xl font-bold tracking-tight text-gray-900'>
              Dashboard
            </h1>
          </div>
        </header>
        <main>
          <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
            <div className='flex flex-col md:flex-row md:gap-10 justify-between items-start'>
              <div className='relative overflow-hidden w-full md:w-fit border shadow-md my-3 rounded-lg p-5 text-black'>
                <h3 className='text-3xl sm:text-2xl font-bold text-white'>
                  Chart
                </h3>
                <BarChart
                  className='w-full mx-auto md:w-fit'
                  width={700}
                  height={300}
                  data={data}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  {/* <CartesianGrid strokeDasharray="3 3" /> */}
                  <XAxis
                    dataKey='month'
                    contentStyle={{ borderRadius: ".4rem" }}
                  />
                  {/* <YAxis /> */}
                  <Tooltip
                    contentStyle={{
                      borderRadius: "10px",
                      background: "#1b1e38",
                    }}
                  />
                  <Legend />
                  <Bar dataKey='expenses' fill='#fca5a5' name='Expenses' />
                  <Bar dataKey='income' fill='#86efac' name='Income' />
                </BarChart>
              </div>
              <div className='w-full mx-auto p-5 rounded-lg flex-1 m-3 border'>
                <h3 className='text-3xl font-bold sm:text-2xl '>
                  Recents Tracking
                </h3>
                <div className='mt-3'>
                  <ul>
                    {recents.map(({ amount, event, i }) => {
                      return (
                        <li
                          key={i}
                          className='flex justify-between items-center gap-y-2 transition-all hover:cursor-pointer hover:bg-slate-50/10 border-b py-3 px-2'
                        >
                          <span
                            className={`${
                              event === "Income"
                                ? "bg-green-300 text-green-700"
                                : "bg-red-300 text-red-700"
                            } px-3 text-sm py-1 rounded-full`}
                          >
                            {event}
                          </span>
                          <span>${amount}.00</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
