export default interface Artists {
  name: string;
  mbid: string;
  url: string;
  listeners: string;
  image: {
    [key: number]: {
      ["#text"]: string;
      size: string;
    }
  }
}