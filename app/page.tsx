'use client';

import React, { useState, useEffect } from 'react';
import Artist from './_components/Artist';
import Form from './_components/Form';

type SetArtistSearchType = React.Dispatch<React.SetStateAction<string>>; // temp fix

export default function Home() {
  const [artists, setArtists] = useState([]);
  const [artistSearch, setArtistSearch]: [string, SetArtistSearchType] =
    useState('');

  const displayArtists = artists.map((artist, i) => {
    if (artists) {
      return (
        <div key={i}>
          <Artist artist={artist} />
        </div>
      );
    }
  });

  const handleSubmit = async (e: React.ChangeEvent<any>) => {
    try {
      e.preventDefault();
      const response = await fetch('http://localhost:3000/api/get-artists', {
        method: 'POST',
        body: JSON.stringify({
          artist: artistSearch,
        }),
      });
      const data = await response.json();
      console.log(data);
      setArtists(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Form setArtistSearch={setArtistSearch} handleSubmit={handleSubmit} />
      {displayArtists}
    </div>
  );
}
