import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const fetchArtistAlbums = async () => {
    const body = await request.json()
    const { artist } = body
    const apiKey = process.env.API_KEY;
    const response = await fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artist}&api_key=${apiKey}&format=json`)
    const data = await response.json()
    return data.topalbums.album
  }

  const retrievedArtistAlbums = await fetchArtistAlbums()

  return NextResponse.json(retrievedArtistAlbums)
}