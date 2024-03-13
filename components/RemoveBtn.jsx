"use client"

import { useRouter } from "next/navigation"

// const url = "http://localhost:3000/api/budget/"
const url = "https://budget-beta-ten.vercel.app/api/budget"

const RemoveBtn = () => {
  const router = useRouter()

  const removeBudget = async function () {
    const confirmed = confirm("Do you want to delete this...")

    if (confirmed) {
      const res = await fetch(`${url}/`, { method: "DELETE" })

      if (res.ok) router.refresh()
    }
  }
  return (
    <button className="btn join-item btn-sm btn-error" onClick={removeBudget}>Delete</button>
  )
}

export default RemoveBtn