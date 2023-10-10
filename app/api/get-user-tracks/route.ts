import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const fetchUserTracks = async () => {
    const body = await request.json()
    const { user } = body
    const apiKey = process.env.API_KEY;
    const response = await fetch(`http://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=${user}&api_key=${apiKey}&format=json`)
    const data = await response.json()
    console.log(data)
    if (data.error) {
      return 'no data'
    } else {
      return data
    }
  }

  const retrievedUserTracks = await fetchUserTracks()

  return NextResponse.json(retrievedUserTracks)
}