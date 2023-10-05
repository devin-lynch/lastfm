import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const fetchUserAlbums = async () => {
    const body = await request.json()
    const { user } = body
    const apiKey = process.env.API_KEY;
    const response = await fetch(`http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=${user}&api_key=${apiKey}&format=json`)
    const data = await response.json()
    console.log(data)
    if (data.error) {
      return 'no data'
    } else {
      return data.topalbums.album
    }
  }

  const retrievedUserAlbums = await fetchUserAlbums()

  return NextResponse.json(retrievedUserAlbums)
}