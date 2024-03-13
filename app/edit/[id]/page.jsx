import EditForm from '@/components/EditForm'

const url = "http://localhost:3000/api/budget/"
const getOneBudget = async function (id) {
    try {
        const res = await fetch(`${url}/${id}`, { cache: 'no-store' })

        if (!res.ok) throw new Error("Failed to fetch this data")

        return res.json()

    } catch (error) {
        console.log(error);
    }
}

const EditOne = async ({ params }) => {
    const { id } = params
    const budget = await getOneBudget(id)

    console.log(budget)

    return (
        <>
            <h3 className="text-3xl font-bold">Update</h3>
            <EditForm />
        </>
    )
}

export default EditOne