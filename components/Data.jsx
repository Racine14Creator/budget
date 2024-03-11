import Link from "next/link"

const Data = () => {
    return (
        <div className="overflow-x-auto">
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
                    <tr>
                        <td>125000</td>
                        <td>
                            <span className="badge badge-primary">Expense</span>
                        </td>
                        <td>
                            <span className="badge badge-success">RWF</span>
                        </td>
                        <td>Salary</td>
                        <td>
                            <div className="join">
                                <Link href={`/edit/123`} className="btn join-item btn-sm btn-primary">Edit</Link>
                                <button className="btn join-item btn-sm btn-error">Delete</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>125000</td>
                        <td>
                            <span className="badge badge-success">Income</span>
                        </td>
                        <td>
                            <span className="badge badge-warning">CDF</span>
                        </td>
                        <td>Salary</td>
                        <td>
                            <div className="join">
                                <Link href={`/edit/123`} className="btn join-item btn-sm btn-primary">Edit</Link>
                                <button className="btn join-item btn-sm btn-error">Delete</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Data