import { NextResponse } from "next/server";

export default function GET(request, { params }) {
  const UserId = params;
  console.log(UserId);
  return NextResponse.json({ Message: "User Id:", UserId });
}
