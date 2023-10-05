export default interface TopArtists {
  name: string;
  mbid: string;
  url: string;
  playcount: string;
  image: {
    [key: number]: {
      size: string;
      ["#text"]: string;
    }
  }
}