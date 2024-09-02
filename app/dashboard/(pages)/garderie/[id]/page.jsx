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

  const enfant = await getGarderieId(id);

  console.log(enfant);

  return (
    <div className='bg-white p-5 my-3'>
      {/* <EditKidForm
        Name={Name}
        Father={Father}
        Mother={Mother}
        Nounou={Nounou}
        Phone={Phone}
        country={country}
        address={address}
      /> */}
    </div>
  );
}
