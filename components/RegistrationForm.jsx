"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
const url = "http://localhost:3000/api/budget/"

export function RegistrationForm() {
    const router = useRouter()
    const [amount, setAmount] = useState("")
    const [transEvent, setTransEvent] = useState("")
    const [devise, setDevise] = useState("")
    const [country, setCountry] = useState("")
    const [desc, setDesc] = useState("")

    const handleSubmit = async (ev) => {
        ev.preventDefault()

        if (!amount || !devise || !country) {
            alert("Fill in all fields!")
            return
        }

        try {
            const res = await fetch("http://localhost:3000/api/budget/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ amount, event, devise, country, desc })
            })
            if (res.ok) {
                router.push("/")
                router.refresh()
            } else {
                throw new Error("We fail to create this")
            }
        } catch (error) {
            throw new Error(error)
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit} method="POST">
                <div className="group w-full my-1">
                    <input type="number" name="amount" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Type The Amount" className="input
                 input-bordered my-2 input-md w-full" />
                </div>

                <div className="group w-full my-1">
                    <select defaultValue={""} className="select select-bordered w-full" value={transEvent} onChange={(e) => setTransEvent(e.target.value)}>
                        <option value={""} disabled >Events ?</option>
                        <option value={'Income'}>Income</option>
                        <option value={'Expense'}>Expense</option>
                    </select>
                </div>
                <div className="group w-full my-1 mt-3">
                    <select className="select select-bordered w-full" defaultValue={""} name="devise" value={devise} onChange={(e) => setDevise(e.target.value)}>
                        <option velue={''} disabled>Devise ?</option>
                        <option value={'RWF'}>RWF</option>
                        <option value={'CDF'}>CDF</option>
                        <option value={'$'}>$</option>
                        <option value={'BITCOIN'}>BITCOIN</option>
                    </select>
                </div>

                <div className="group w-full my-1">
                    <input type="text" name="country" value={country} onChange={(e) => setCountry(e.target.value)} placeholder="Country" className="input
                 input-bordered my-2 input-md w-full" />
                </div>

                <div className="group w-full my-1">
                    <textarea className="textarea textarea-bordered my-2 w-full" value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Description or Motif"></textarea>
                </div>

                <div className="group my-1">
                    <button className="btn btn-primary btn-md" type="submit">Save</button>
                </div>
            </form>
        </>
    )
}