'use client';

import React, { useState, useEffect } from 'react';
import Artist from './_components/Artist';
import Form from './_components/Form';
import { UserContext } from './_context/UserContext';

export default function Home() {
  const [artists, setArtists] = useState([]);
  const [artistSearch, setArtistSearch] = useState('');
  const [user, setUser] = useState();
  const [userSearch, setUserSearch] = useState('');

  const displayArtists = artists.map((artist, i) => {
    if (artists) {
      return (
        <div key={i}>
          <Artist artist={artist} />
        </div>
      );
    }
  });

  const handleArtistSubmit = async (e: React.ChangeEvent<any>) => {
    try {
      e.preventDefault();
      const response = await fetch('api/get-artists', {
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

  const handleUserSubmit = async (e: React.ChangeEvent<any>) => {
    try {
      e.preventDefault();
      console.log(userSearch);
      const response = await fetch('api/get-user-artists', {
        method: 'POST',
        body: JSON.stringify({
          user: userSearch,
        }),
      });
      const data = await response.json();
      console.log(data);
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Form
        setArtistSearch={setArtistSearch}
        handleArtistSubmit={handleArtistSubmit}
        setUserSearch={setUserSearch}
        handleUserSubmit={handleUserSubmit}
      />
      {displayArtists}
    </div>
  );
}
