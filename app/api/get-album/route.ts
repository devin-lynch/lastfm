import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const fetchAlbum = async () => {
    const body = await request.json()
    const { id } = body
    const apiKey = process.env.API_KEY;
    const response = await fetch(`http://ws.audioscrobbler.com/2.0/?method=album.getinfo&mbid=${id}&api_key=${apiKey}&format=json`)
    const data = await response.json()
    return data.album
  }

  const retrievedAlbum = await fetchAlbum()

  return NextResponse.json(retrievedAlbum)
}