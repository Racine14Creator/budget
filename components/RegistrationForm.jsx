export function RegistrationForm() {
    return (
        <>
            <form action="#" method="post">
                <div className="group w-full my-1">
                    <input type="number" name="amount" placeholder="Type here" className="input
                 input-bordered my-2 input-md w-full" />
                </div>

                <div className="group w-full my-1">
                    <select className="select select-bordered w-full">
                        <option disabled selected>Events ?</option>
                        <option value={'Income'}>Income</option>
                        <option value={'Expense'}>Expense</option>
                    </select>
                </div>
                <div className="group w-full my-1 mt-3">
                    <select className="select select-bordered w-full">
                        <option disabled selected>Devise ?</option>
                        <option value={'RWF'}>RWF</option>
                        <option value={'CDF'}>CDF</option>
                        <option value={'$'}>$</option>
                        <option value={'BITCOIN'}>BITCOIN</option>
                    </select>
                </div>

                <div className="group w-full my-1">
                    <input type="text" name="country" placeholder="Country" className="input
                 input-bordered my-2 input-md w-full" />
                </div>

                <div className="group w-full my-1">
                    <textarea className="textarea textarea-bordered my-2 w-full" placeholder="Bio"></textarea>
                </div>

                <div className="group my-1">
                    <button className="btn btn-primary btn-md" type="submit">Save</button>
                </div>
            </form>
        </>
    )
}