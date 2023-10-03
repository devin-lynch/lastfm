'use client';

import React, { useState, useEffect } from 'react';
import Artist from './_components/Artist';
import Dropdown from './_components/Dropdown';
import { UserContext } from './_context/UserContext';

export default function Home() {
  const [artists, setArtists] = useState([]);
  const [artistSearch, setArtistSearch] = useState('');
  const [user, setUser] = useState();
  const [userSearch, setUserSearch] = useState('');
  const [searchType, setSearchType] = useState('artists');
  const [searchTerm, setSearchTerm] = useState('');

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
      if (searchType === 'artists') {
        console.log('Searching artists');
        const response = await fetch('api/get-artists', {
          method: 'POST',
          body: JSON.stringify({
            artist: searchTerm,
          }),
        });
        const data = await response.json();
        console.log(data);
        setArtists(data);
      } else if (searchType === 'user') {
        console.log('Searching for user');
        window.location.href = `users/${searchTerm}`;
      } else if (searchType === 'albums') {
        console.log('Searching albums');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchTypeChange = (newType: string) => {
    setSearchType(newType);
  };

  useEffect(() => {
    console.log('Search Type: ', searchType);
  }, [searchType]);

  return (
    <div>
      <div className="text-center mt-8">
        <input
          type="text"
          className="search-text"
          placeholder="search artists"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={(e) => handleSubmit(e)}>Search</button>

        <Dropdown
          searchType={searchType}
          handleSearchTypeChange={handleSearchTypeChange}
        />
      </div>

      {displayArtists}
    </div>
  );
}
