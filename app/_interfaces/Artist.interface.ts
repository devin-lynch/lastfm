export default interface Artist {
  bio: {
    content: string;
    published: string;
    summary: string;
  }
  mbid: string;
  name: string;
  image: {
    [key: number]: {
      size: string;
      ["#text"]: string;
    }
  }
  stats: {
    listeners: string;
    playcount: string;
  }
  url: string;
  tags: {
    tag: {
      [key: number]: {
        name: string;
        url: string;
      }
    }
  }
  similar: {
    artist: {
      [key: number]: {
        name: string;
        url: string;
      }
    }
  }
  ontour: string;
}