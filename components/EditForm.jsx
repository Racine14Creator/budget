"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import BackToData from "./BackToData";
import { HiArrowLeft } from "react-icons/hi";

const EditForm = ({
    id,
    amount: initialAmount,
    date: initialDate,
    event: initialEvent,
    devise: initialDevise,
    country: initialCountry,
    desc: initialDesc }) => {

    
    const url = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'
    
    const handleSubmit = async (e) => {
        
        e.preventDefault()

        try {
            const res = await fetch(`${url}/api/budget/${id}`, {
                method: "PUT",
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ amount, event, devise, date, country, description })
            })

            if (!res.ok) throw new Error("Failed to Upated this")

            router.refresh()
            router.push("/data")

        } catch (error) {
            console.log(error);
        }
    }

    const [amount, setAmount] = useState(initialAmount);
    const [event, setEvent] = useState(initialEvent || '');
    const [date, setDate] = useState(initialDate || '');
    const [country, setCountry] = useState(initialCountry || '');
    const [devise, setDevise] = useState(initialDevise || '');
    const [description, setDescription] = useState(initialDesc || '');

    const router = useRouter()

    return (
        <form onSubmit={handleSubmit} method="post">
            <div className="flex justify-between items-center">
                <h3 className="text-3xl font-bold">Update</h3>
                <BackToData label="Back" icon={<HiArrowLeft/>} path="/data"/>
            </div>
            <div className="group w-full my-1">
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} name="amount" placeholder="Type here" className="input input-bordered my-2 input-md w-full" />
            </div>

            <div className="group w-full my-1">
                <select className="select select-bordered w-full" value={event} onChange={(e) => setEvent(e.target.value)}>
                    <option value={''} disabled>Events ?</option>
                    <option value={'Income'}>Income</option>
                    <option value={'Expense'}>Expense</option>
                </select>
            </div>

            <div className="group w-full my-1 mt-3">
                <select className="select select-bordered w-full" value={devise} onChange={(e) => setDevise(e.target.value)}>
                    <option value={""} disabled>Devise ?</option>
                    <option value={'RWF'}>RWF</option>
                    <option value={'CDF'}>CDF</option>
                    <option value={'$'}>$</option>
                    <option value={'BITCOIN'}>BITCOIN</option>
                </select>
            </div>

            <div className="group w-full my-1">
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} name="date" className="input input-bordered my-2 input-md w-full" />
            </div>
            <div className="group w-full my-1">
                <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} name="amount" placeholder="Country" className="input input-bordered my-2 input-md w-full" />
            </div>

            <div className="group w-full my-1">
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="textarea textarea-bordered my-2 w-full" placeholder="Bio"></textarea>
            </div>

            <div className="group my-1">
                <button className="btn btn-warning btn-md" type="submit">Update</button>
            </div>
        </form>
    );
};

export default EditForm;
