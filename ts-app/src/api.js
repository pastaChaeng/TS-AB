// src/api.js
import axios from 'axios';
import Spotify from 'spotify-web-api-js'; // Add this import statement

const BASE_URL = 'https://api.spotify.com/v1';
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';

const spotify = new Spotify(); // Create a new instance of Spotify

const getToken = async (clientId, clientSecret) => {
  const response = await axios.post(TOKEN_ENDPOINT, null, {
    params: {
      grant_type: 'client_credentials',
    },
    headers: {
      Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  return response.data.access_token;
};

const api = axios.create({
  baseURL: BASE_URL,
});

export const getAlbums = async () => {
  const token = await getToken(
    process.env.REACT_APP_SPOTIFY_CLIENT_ID,
    process.env.REACT_APP_SPOTIFY_CLIENT_SECRET
  );

  const response = await api.get('/artists/06HL4z0CvFAxyc27GXpf02/albums', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      include_groups: 'album',
      market: 'US',
      limit: 50,
    },
  });

  return response.data.items;
};

export const getAlbumTracks = async (albumId) => {
    const token = await getToken(
        process.env.REACT_APP_SPOTIFY_CLIENT_ID,
        process.env.REACT_APP_SPOTIFY_CLIENT_SECRET
      );
      
  const response = await api.get(`/albums/${albumId}/tracks`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      market: 'US',
    },
  });

  return response.data.items;
};
