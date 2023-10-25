import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const fetchAlbums = async () => {
    const body = await request.json()
    const { album } = body
    const apiKey = process.env.API_KEY;
    const response = await fetch(`http://ws.audioscrobbler.com/2.0/?method=album.search&album=${album}&api_key=${apiKey}&format=json`)
    const data = await response.json()
    return data
  }

  const retrievedAlbums = await fetchAlbums()

  return NextResponse.json(retrievedAlbums)
}