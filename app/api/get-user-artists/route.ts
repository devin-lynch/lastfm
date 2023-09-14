import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const fetchUserArtists = async () => {
    const body = await request.json()
    const { user } = body
    const apiKey = process.env.API_KEY;
    const response = await fetch(`http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=${user}=rj&api_key=${apiKey}&format=json`)
    const data = await response.json()
    return data
  }

  const retrievedUserArtists = await fetchUserArtists()

  return NextResponse.json(retrievedUserArtists)
}