export default interface Album {
  artist: string;
  image: {
    [key: number]: {
      size: string;
      ["#text"]: string;
    }
  }
  listeners: string;
  name: string;
  playcount: string;
  tags: {
    tag: {
      [key: number]: {
        url: string;
        name: string;
      }
    }
  }
  tracks: {
    track: {
      [key: number]: {
        duration: number;
        name: string;
        url: string;
      }
    }
  }
  url: string;
  wiki: {
    content: string;
    published: string;
    summary: string;
  }
}