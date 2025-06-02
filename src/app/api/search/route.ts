import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query")?.trim();

    if (!query) return NextResponse.json({ products: [] });

    const products = await client.fetch(
      `*[_type == "product" && (name match $query || category match $query)]{
        _id, name, category, "image": image.asset->url
      }`,
      { query } as Record<string, unknown>
    );

    return NextResponse.json({ products });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}