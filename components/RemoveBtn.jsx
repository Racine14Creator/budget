"use client"

import { useRouter } from "next/navigation"

const url = "https://budget-beta-ten.vercel.app/api/budget"

const RemoveBtn = ({ id }) => {
  const router = useRouter()

  const removeBudget = async function () {
    const confirmed = confirm("Do you want to delete this...")

    if (confirmed) {
      const res = await fetch(`${url}/?id=${id}`, { method: "DELETE" })

      if (res.ok) router.refresh()
    }
  }
  return (
    <button className="btn join-item btn-sm btn-error" onClick={removeBudget}>Delete</button>
  )
}

export default RemoveBtn