"use server";

export async function PUT(request) {
  const id = request.nextUrl.searchParams.get("id");
  const { Name, Father, Mother, Phone, country, Nounou } = await request.json();

  if (!id || !Name || !Father || !Mother || !Phone || !Nounou) {
    return NextResponse.json(
      { message: "All required fields must be filled, including the ID." },
      { status: 400 }
    );
  }

  try {
    await DBconnection();
    const enfant = await Enfant.findByIdAndUpdate(
      id,
      {
        Name,
        Father,
        Mother,
        Phone,
        country,
        Nounou,
      },
      { new: true }
    );

    if (!enfant) {
      return NextResponse.json(
        { message: "Enfant not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Enfant updated", enfant },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to update Enfant" },
      { status: 500 }
    );
  }
}
