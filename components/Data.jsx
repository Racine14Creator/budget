import Link from "next/link"

const url = "http://localhost:3000"

const getData = async () => {
    try {
        const res = await fetch(`${url}/api/budget`, { cache: 'no-store' })

        if (!res.ok) { throw new Error("Failed to fetch Data...") }

        return res.json()

    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

const Data = async () => {
    const { budgets } = await getData()
    return (
        <div className="overflow-x-auto">
            <form action="#" method="post">
                <select className="select select-bordered w-full max-w-xs mb-5">
                    <option disabled selected>Select Event?</option>
                    <option value={'Income'}>Income</option>
                    <option value={'Expense'}>Expense</option>
                </select>
            </form>
            <table className="table table-zebra">
                {/* head */}
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
                                    {
                                        b.TransEvent === "Expense"
                                            ? (
                                                <span className="badge badge-error">{b.TransEvent}</span>
                                            ) : (
                                                <span className="badge badge-success">{b.TransEvent}</span>
                                            )
                                    }

                                </td>
                                <td>
                                    {
                                        b.devise === "RWF"
                                            ? (

                                                <span className="badge badge-success">{b.devise}</span>
                                            )
                                            :
                                            (
                                                <span className="badge badge-warning">{b.devise}</span>
                                            )
                                    }
                                </td>
                                <td>{b.description}</td>
                                <td>
                                    <div className="join">
                                        <Link href={`/edit/${b._id}`} className="btn join-item btn-sm btn-primary">Edit</Link>
                                        <button className="btn join-item btn-sm btn-error">Delete</button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Data