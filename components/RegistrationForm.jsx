"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

const url = process.env.URL
// const url = "https://budget-beta-ten.vercel.app/"

export function RegistrationForm() {

    console.log(url)
    const router = useRouter()
    const [amount, setAmount] = useState("")
    const [transEvent, setTransEvent] = useState("")
    const [devise, setDevise] = useState("")
    const [country, setCountry] = useState("")
    const [desc, setDesc] = useState("")
    const [date, setDate] = useState("")
    const [errors, setErrors] = useState({})

    const handleSubmit = async (ev) => {
        ev.preventDefault()

        if (!amount || !transEvent || !devise || !country || !desc) {

            const newErrors = {}
            if (!amount) newErrors.amount = "Amount is required."
            if (!transEvent) newErrors.transEvent = "Event type is required."
            if (!devise) newErrors.devise = "Devise is required."
            if (!country) newErrors.country = "Country is required."
            if (!date) newErrors.country = "Date is required."
            if (!desc) newErrors.desc = "Description is required."
            setErrors(newErrors)

            // Clear errors after 1000ms
            setTimeout(() => setErrors({}), 10000)

            return
        }

        try {
            const res = await fetch(`${url}/api/budget`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ amount, transEvent, devise, date, country, desc })
            })
            if (res.ok) {
                router.push("/data")
                router.refresh()
            } else {
                throw new Error("Failed to create this.")
            }
        } catch (error) {
            throw new Error(error)
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit} method="POST">
                <div className="group w-full my-1">
                    <input type="number" name="amount" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Type The Amount" className="input input-bordered my-2 input-md w-full" />
                    {errors.amount && <p className="text-red-500">{errors.amount}</p>}
                </div>

                <div className="group w-full my-1">
                    <select defaultValue={""} className="select select-bordered w-full" value={transEvent} onChange={(e) => setTransEvent(e.target.value)}>
                        <option value={""} disabled >Events ?</option>
                        <option value={'Income'}>Income</option>
                        <option value={'Expense'}>Expense</option>
                    </select>
                    {errors.transEvent && <p className="text-red-500">{errors.transEvent}</p>}
                </div>

                <div className="group w-full my-1 mt-3">
                    <select className="select select-bordered w-full" defaultValue={""} value={devise} onChange={(e) => setDevise(e.target.value)}>
                        <option value={""} disabled >Devise ?</option>
                        <option value={"RWF"}>RWF</option>
                        <option value={"CDF"}>CDF</option>
                        <option value={"$"}>$</option>
                        <option value={"BITCOIN"}>BITCOIN</option>
                    </select>
                    {errors.devise && <p className="text-red-500">{errors.devise}</p>}
                </div>

                <div className="group w-full my-1">
                    <input type="text" name="country" value={country} onChange={(e) => setCountry(e.target.value)} placeholder="Country" className="input input-bordered my-2 input-md w-full" />
                    {errors.country && <p className="text-red-500">{errors.country}</p>}
                </div>
                <div className="group w-full my-1">
                    <input type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} placeholder="Date" className="input input-bordered my-2 input-md w-full" />
                    {errors.country && <p className="text-red-500">{errors.country}</p>}
                </div>

                <div className="group w-full my-1">
                    <textarea className="textarea textarea-bordered my-2 w-full" value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Description or Motif"></textarea>
                    {errors.desc && <p className="text-red-500">{errors.desc}</p>}
                </div>

                <div className="group my-1">
                    <button className="btn btn-primary btn-md" type="submit">Save</button>
                </div>
            </form>
        </>
    )
}
