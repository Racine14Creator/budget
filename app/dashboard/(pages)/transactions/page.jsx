import Link from "next/link";

const transactions = [
  { id: 1, event: "Income", amount: 4500 },
  { id: 1, event: "Expense", amount: 500 },
  { id: 1, event: "Income", amount: 300 },
  { id: 1, event: "Income", amount: 400 },
  { id: 1, event: "Expense", amount: 300 },
];
export default function Transactions() {
  return (
    <div className=' max-w-7xl p-5 mx-auto'>
      <div className='border rounded-lg p-5'>
        <h3 className='text-3xl sm:text-2xl font-bold'>Transactions</h3>

        {transactions.map(({ id, event, amount }) => (
          <div
            key={id}
            className='relative flex flex-col justify-between items-center border rounded-lg my-3 hover:cursor-pointer hover:bg-slate-300/10 px-5 py-10 md:flex-row'
          >
            <div className='basis-1/3'>
              <h3>DateTime moment</h3>
            </div>
            <div className=' basis-1/3'>
              <h3>$200.00</h3>
            </div>
            <div className='basis-1/3 flex flex-col justify-center md:flex-row items-center gap-5'>
              <span className='bg-red-300 text-red-500 text-sm px-5 py-1 rounded-full'>
                Expenses
              </span>
              <div className='flex flex-row'>
                <Link
                  href='#edit'
                  className='bg-blue-500 px-5 py-2 rounded-md transition-all'
                >
                  Edit
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
