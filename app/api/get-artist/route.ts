import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const fetchArtist = async () => {
    const body = await request.json()
    const { id } = body
    const apiKey = process.env.API_KEY;
    const response = await fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&mbid=${id}&api_key=${apiKey}&format=json`)
    const data = await response.json()
    console.log(data.artist)
    return data.artist
  }

  const retrievedArtist = await fetchArtist()

  return NextResponse.json(retrievedArtist)
}