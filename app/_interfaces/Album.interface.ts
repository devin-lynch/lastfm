export default interface Album {
  artist: {
    mbid: string;
    name: string;
    url: string;
  }
  image: {
    [key: number]: {
      size: string;
      ["#text"]: string;
    }
  }
  mbid: string;
  name: string;
  playcount: number;
  url: string;
}