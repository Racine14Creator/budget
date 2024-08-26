"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// const url = "https://budget-beta-ten.vercel.app"
// const url = 'http://localhost:3000'

export function RegistrationForm() {
  const url = process.env.NEXT_PUBLIC_URL || "http://localhost:3000";

  const router = useRouter();

  const [name, setName] = useState("");
  const [father, setFather] = useState("");
  const [mother, setMother] = useState("");
  const [phone, setPhone] = useState("");
  const [nounou, setNounou] = useState("");
  const [country, setCountry] = useState("");

  const [errors, setErrors] = useState({});

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    if (!name || !father || !mother || !country || !phone) {
      const newErrors = {};
      if (!name) newErrors.name = "Nom de l'enfant est obligatoire";

      if (!father) newErrors.father = "Nom du pere est obligatoire";

      if (!mother) newErrors.mother = "Nom de la mere.";

      if (!country) newErrors.country = "Nationalite est obligatoire.";

      if (!phone) newErrors.phone = "Numero de telephone.";
      setErrors(newErrors);

      // Clear errors after 1000ms
      setTimeout(() => setErrors({}), 10000);

      return;
    }

    try {
      const enfantUrl = `${url}/api/enfant`;
      // console.log(enfantUrl);

      const res = await fetch(enfantUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          father,
          mother,
          phone,
          country,
          nounou,
        }),
      });
      if (res.ok) {
        router.push("/dashboard/data");
        router.refresh();
      } else {
        throw new Error("Failed to create this.");
      }
    } catch (error) {
      throw new Error(error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} method='POST'>
        <div className='group w-full my-1'>
          <input
            type='text'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nom de l'enfant"
            className='input input-bordered text-white my-2 input-md w-full'
          />
          {errors.name && <p className='text-red-500'>{errors.name}</p>}
        </div>

        <div className='group w-full my-1'>
          <input
            type='text'
            name='father'
            value={father}
            onChange={(e) => setFather(e.target.value)}
            placeholder='Le nom du pere'
            className='input input-bordered text-white my-2 input-md w-full'
          />
          {errors.father && <p className='text-red-500'>{errors.father}</p>}
        </div>

        <div className='group w-full my-1 mt-3'>
          <input
            type='text'
            name='mother'
            value={mother}
            onChange={(e) => setMother(e.target.value)}
            placeholder='Le nom de la mere'
            className='input input-bordered text-white my-2 input-md w-full'
          />
          {errors.mother && <p className='text-red-500'>{errors.mother}</p>}
        </div>

        <div className='group w-full my-1'>
          <input
            type='text'
            name='country'
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder='Country'
            className='input input-bordered text-white my-2 input-md w-full'
          />
          {errors.country && <p className='text-red-500'>{errors.country}</p>}
        </div>

        <div className='group w-full my-1'>
          <input
            type='tel'
            name='phone'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder='Numero de telephone'
            className='input input-bordered text-white my-2 input-md w-full'
          />
          {errors.phone && <p className='text-red-500'>{errors.phone}</p>}
        </div>
        <div className='group w-full my-1'>
          <input
            type='text'
            name='nounou'
            value={nounou}
            onChange={(e) => setNounou(e.target.value)}
            placeholder='Le nom de la nounou'
            className='input input-bordered text-white my-2 input-md w-full'
          />
          {errors.nounou && <p className='text-red-500'>{errors.nounou}</p>}
        </div>

        <div className='group my-1'>
          <button className='btn btn-primary btn-md' type='submit'>
            Enregistrer
          </button>
        </div>
      </form>
    </>
  );
}
