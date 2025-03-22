import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    "Read more about QuickSnip API here": "https://quicksnip.dev/docs",
  };

  return NextResponse.json(data);
}
