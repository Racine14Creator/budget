import EditKidForm from "@/components/ui/EditForm";

const url = process.env.NEXT_PUBLIC_URL;

const getGarderieId = async function (id) {
  try {
    const res = await fetch(`${url}api/garderie/${id}`, { cache: "no-store" });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditPage({ params }) {
  const { id } = params;
  const todo = await getGarderieId(id);

  const { title, desc } = todo.todo;

  return <EditKidForm id={_id} title={title} desc={desc} />;
}
