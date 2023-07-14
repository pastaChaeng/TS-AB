import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import './App.css';

function App() {
  const [albums] = useState([
    {
      id: 'album1',
      name: 'Taylor Swift',
      image: 'https://i.pinimg.com/236x/f2/f1/40/f2f14005df7f1ab3552ae121907ffc7f.jpg',
      tracks: [
        { id: 'track1', name: 'Tim McGraw', duration: '3:52' },
        { id: 'track2', name: 'Picture to Burn', duration: '2:55' },
        { id: 'track3', name: 'Teardrops on My Guitar', duration: '3:35' },
        { id: 'track4', name: 'A Place in This World', duration: '3:19' },
        { id: 'track5', name: 'Cold as You', duration: '4:01' },
        { id: 'track6', name: 'The Outside', duration: '3:27' },
        { id: 'track7', name: 'Tied Together with a Smile', duration: '4:08' },
        { id: 'track8', name: 'Stay Beautiful', duration: '3:58' },
        { id: 'track9', name: "Should've Said No", duration: '4:06' },
        { id: 'track10', name: "Mary's Song (Oh My My My)", duration: '3:35' },
        { id: 'track11', name: 'Our Song', duration: '3:22' },
        { id: 'track12', name: "I'm Only Me When I'm with You (Bonus Track)", duration: '3:34' },
        { id: 'track13', name: 'Invisible (Bonus Track)', duration: '3:23' },
      ],
    },
    {
      id: 'album2',
      name: "Fearless | [Taylor's Version]",
      image: 'https://i.pinimg.com/236x/21/6b/2d/216b2d9810d0304cfa51e6b05e38404d.jpg',
      tracks: [
        { id: 'track1', name: 'Fearless', duration: '4:02' },
        { id: 'track2', name: 'Fifteen', duration: '4:54' },
        { id: 'track3', name: 'Love Story', duration: '3:56' },
        { id: 'track4', name: 'Hey Stephen', duration: '4:14' },
        { id: 'track5', name: 'White Horse', duration: '3:55' },
        { id: 'track6', name: 'You Belong with Me', duration: '3:51' },
        { id: 'track7', name: 'Breathe', duration: '4:23' },
        { id: 'track8', name: 'Tell Me Why', duration: '3:21' },
        { id: 'track9', name: 'Youre Not Sorry', duration: '4:23' },
        { id: 'track10', name: 'The Way I Loved You', duration: '4:05' },
        { id: 'track11', name: 'Forever & Always', duration: '3:46' },
        { id: 'track12', name: 'The Best Day', duration: '4:06' },
        { id: 'track13', name: 'Change', duration: '4:40' },
      ],
    },
    {
      id: 'album3',
      name: "Speak Now | [Taylor's Version]",
      image: 'https://i.pinimg.com/236x/19/3a/72/193a72197eb88e04a7a96014a3cdd23c.jpg',
      tracks: [
        { id: 'track1', name: 'Mine', duration: '3:50' },
        { id: 'track2', name: 'Sparks Fly', duration: '4:22' },
        { id: 'track3', name: 'Back to December', duration: '4:53' },
        { id: 'track4', name: 'Speak Now', duration: '4:03' },
        { id: 'track5', name: 'Dear John', duration: '6:43' },
        { id: 'track6', name: 'Mean', duration: '3:58' },
        { id: 'track7', name: 'The Story of Us', duration: '4:25' },
        { id: 'track8', name: 'Never Grow Up', duration: '4:50' },
        { id: 'track9', name: 'Enchanted', duration: '5:52' },
        { id: 'track10', name: 'Better Than Revenge', duration: '3:37' },
        { id: 'track11', name: 'Innocent', duration: '5:02' },
        { id: 'track12', name: 'Haunted', duration: '4:02' },
        { id: 'track13', name: 'Last Kiss', duration: '6:07' },
        { id: 'track14', name: 'Long Live', duration: '5:17' },
      ],
    },
    {
      id: 'album4',
      name: "Red | [Taylor's Version]",
      image: 'https://i.pinimg.com/236x/96/51/da/9651da151f49e7f0a77ebce09a557fc4.jpg',
      tracks: [
        { id: 'track1', name: 'State of Grace', duration: '4:55' },
        { id: 'track2', name: 'Red', duration: '3:43' },
        { id: 'track3', name: 'Treacherous', duration: '4:02' },
        { id: 'track4', name: 'I Knew You Were Trouble', duration: '3:39' },
        { id: 'track5', name: 'All Too Well', duration: '5:29' },
        { id: 'track6', name: '22', duration: '3:52' },
        { id: 'track7', name: 'I Almost Do', duration: '4:04' },
        { id: 'track8', name: 'We Are Never Ever Getting Back Together', duration: '3:13' },
        { id: 'track9', name: 'Stay Stay Stay', duration: '3:25' },
        { id: 'track10', name: 'The Last Time', duration: '4:59' },
        { id: 'track11', name: 'Holy Ground', duration: '3:22' },
        { id: 'track12', name: 'Sad Beautiful Tragic', duration: '4:44' },
        { id: 'track13', name: 'The Lucky One', duration: '4:00' },
        { id: 'track14', name: 'Everything Has Changed', duration: '4:05' },
        { id: 'track15', name: 'Starlight', duration: '3:40' },
        { id: 'track16', name: 'Begin Again', duration: '3:57' },
        { id: 'track17', name: 'The Moment I Knew', duration: '4:46' },
        { id: 'track18', name: 'Come Back... Be Here', duration: '3:42' },
        { id: 'track19', name: 'Girl at Home', duration: '3:40' },
      ],
    },
    {
      id: 'album5',
      name: "1989",
      image: 'https://i.pinimg.com/236x/8a/72/55/8a72552b934f80fc990d45887cf71db7.jpg',
      tracks: [
        { id: 'track1', name: 'Welcome to New York', duration: '3:32' },
        { id: 'track2', name: 'Blank Space', duration: '3:51' },
        { id: 'track3', name: 'Style', duration: '3:51' },
        { id: 'track4', name: 'Out of the Woods', duration: '3:55' },
        { id: 'track5', name: 'All You Had to Do Was Stay', duration: '3:13' },
        { id: 'track6', name: 'Shake It Off', duration: '3:39' },
        { id: 'track7', name: 'I Wish You Would', duration: '3:27' },
        { id: 'track8', name: 'Bad Blood', duration: '3:31' },
        { id: 'track9', name: 'Wildest Dreams', duration: '3:40' },
        { id: 'track10', name: 'How You Get the Girl', duration: '4:07' },
        { id: 'track11', name: 'This Love', duration: '4:10' },
        { id: 'track12', name: 'I Know Places', duration: '3:15' },
        { id: 'track13', name: 'Clean', duration: '4:31' },
      ],
    },
    {
      id: 'album6',
      name: "Reputation",
      image: 'https://i.pinimg.com/236x/02/e1/cc/02e1cc0ee882d879410c61a6621b2512.jpg',
      tracks: [
        { id: 'track1', name: '...Ready for It?', duration: '3:28' },
        { id: 'track2', name: 'End Game', duration: '4:04' },
        { id: 'track3', name: 'I Did Something Bad', duration: '3:58' },
        { id: 'track4', name: 'Don\'t Blame Me', duration: '3:56' },
        { id: 'track5', name: 'Delicate', duration: '3:52' },
        { id: 'track6', name: 'Look What You Made Me Do', duration: '3:31' },
        { id: 'track7', name: 'So It Goes...', duration: '3:47' },
        { id: 'track8', name: 'Gorgeous', duration: '3:29' },
        { id: 'track9', name: 'Getaway Car', duration: '3:53' },
        { id: 'track10', name: 'King of My Heart', duration: '3:34' },
        { id: 'track11', name: 'Dancing with Our Hands Tied', duration: '3:31' },
        { id: 'track12', name: 'Dress', duration: '3:50' },
        { id: 'track13', name: 'This Is Why We Can\'t Have Nice Things', duration: '3:27' },
        { id: 'track14', name: 'Call It What You Want', duration: '3:23' },
        { id: 'track15', name: 'New Year\'s Day', duration: '3:55' },
      ],
    },
    {
      id: 'album7',
      name: 'Lover',
      image: 'https://i.pinimg.com/236x/6f/46/3f/6f463fa6e53a5ea426bcbd86930042b7.jpg',
      tracks: [
        { id: 'track1', name: 'I Forgot That You Existed', duration: '2:50' },
        { id: 'track2', name: 'Cruel Summer', duration: '2:58' },
        { id: 'track3', name: 'Lover', duration: '3:41' },
        { id: 'track4', name: 'The Man', duration: '3:10' },
        { id: 'track5', name: 'The Archer', duration: '3:31' },
        { id: 'track6', name: 'I Think He Knows', duration: '2:53' },
        { id: 'track7', name: 'Miss Americana & The Heartbreak Prince', duration: '3:54' },
        { id: 'track8', name: 'Paper Rings', duration: '3:42' },
        { id: 'track9', name: 'Cornelia Street', duration: '4:47' },
        { id: 'track10', name: 'Death by a Thousand Cuts', duration: '3:18' },
        { id: 'track11', name: 'London Boy', duration: '3:10' },
        { id: 'track12', name: 'Soon You\'ll Get Better', duration: '3:21' },
        { id: 'track13', name: 'False God', duration: '3:20' },
        { id: 'track14', name: 'You Need to Calm Down', duration: '2:51' },
        { id: 'track15', name: 'Afterglow', duration: '3:43' },
        { id: 'track16', name: 'Me!', duration: '3:13' },
        { id: 'track17', name: 'It\'s Nice to Have a Friend', duration: '2:30' },
        { id: 'track18', name: 'Daylight', duration: '4:53' },
      ],
    },
    {
      id: 'album8',
      name: 'Folklore',
      image: 'https://i.pinimg.com/236x/24/b6/ce/24b6ce556c3b82e6c5af2b5410658fa2.jpg',
      tracks: [
        { id: 'track1', name: 'The 1', duration: '3:30' },
        { id: 'track2', name: 'Cardigan', duration: '3:59' },
        { id: 'track3', name: 'The Last Great American Dynasty', duration: '3:51' },
        { id: 'track4', name: 'Exile', duration: '4:45' },
        { id: 'track5', name: 'My Tears Ricochet', duration: '4:15' },
        { id: 'track6', name: 'Mirrorball', duration: '3:29' },
        { id: 'track7', name: 'Seven', duration: '3:29' },
        { id: 'track8', name: 'August', duration: '4:22' },
        { id: 'track9', name: 'This Is Me Trying', duration: '3:15' },
        { id: 'track10', name: 'Illicit Affairs', duration: '3:11' },
        { id: 'track11', name: 'Invisible String', duration: '4:12' },
        { id: 'track12', name: 'Mad Woman', duration: '3:57' },
        { id: 'track13', name: 'Epiphany', duration: '4:49' },
        { id: 'track14', name: 'Betty', duration: '4:54' },
        { id: 'track15', name: 'Peace', duration: '3:55' },
        { id: 'track16', name: 'Hoax', duration: '3:40' },
      ],
    },
    {
      id: 'album9',
      name: 'Evermore',

      image: 'https://i.pinimg.com/236x/dd/d9/56/ddd9565bede0e843b83cc6b6b98c4e75.jpg',
      tracks: [
        { id: 'track1', name: 'Willow', duration: '3:34' },
        { id: 'track2', name: 'Champagne Problems', duration: '4:04' },
        { id: 'track3', name: 'Gold Rush', duration: '3:05' },
        { id: 'track4', name: 'Tis the Damn Season', duration: '3:49' },
        { id: 'track5', name: 'Tolerate It', duration: '4:06' },
        { id: 'track6', name: 'No Body, No Crime', duration: '3:36' },
        { id: 'track7', name: 'Happiness', duration: '5:15' },
        { id: 'track8', name: 'Dorothea', duration: '3:46' },
        { id: 'track9', name: 'Coney Island', duration: '4:35' },
        { id: 'track10', name: 'Ivy', duration: '4:20' },
        { id: 'track11', name: 'Cowboy Like Me', duration: '4:35' },
        { id: 'track12', name: 'Long Story Short', duration: '3:35' },
        { id: 'track13', name: 'Marjorie', duration: '4:18' },
        { id: 'track14', name: 'Closure', duration: '3:02' },
        { id: 'track15', name: 'Evermore', duration: '5:05' },
        { id: 'track16', name: 'Right Where You Left Me', duration: '4:05' },
        { id: 'track17', name: 'It\'s Time to Go', duration: '4:15' },
      ],
    },
    {
      id: 'album2',
      name: 'Midnights',
      image: 'https://i.pinimg.com/236x/d7/09/a0/d709a0b5d9f0686ab4ce198641315565.jpg',
      tracks: [
        { id: 'track1', name: 'Cowboy Like Me (Taylor\'s Version)', duration: '4:35' },
        { id: 'track2', name: 'Message In A Bottle', duration: '3:18' },
        { id: 'track3', name: 'The Very First Night', duration: '4:28' },
        { id: 'track4', name: 'All Too Well (10 Minute Version)', duration: '10:29' },
        { id: 'track5', name: 'Wildest Dreams (Taylor\'s Version)', duration: '3:52' },
        { id: 'track6', name: 'Nothing New (feat. Phoebe Bridgers)', duration: '3:42' },
        { id: 'track7', name: 'Diane', duration: '3:52' },
        { id: 'track8', name: 'Happier Than Ever', duration: '4:59' },
        { id: 'track9', name: 'Babe (feat. Sugarland)', duration: '3:35' },
        { id: 'track10', name: 'September', duration: '4:12' },
        { id: 'track11', name: 'Forever Winter', duration: '3:38' },
        { id: 'track12', name: 'Run (feat. Ed Sheeran)', duration: '3:44' },
        { id: 'track13', name: 'Wildest Dreams (Acoustic Version)', duration: '3:17' },
        { id: 'track14', name: 'This Love (Piano Version)', duration: '4:10' },
        { id: 'track15', name: 'Better Man', duration: '4:26' },
        { id: 'track16', name: 'The Way I Loved You (Taylor\'s Version)', duration: '4:05' },
        { id: 'track17', name: 'Wildest Dreams (TikTok Remix)', duration: '2:58' },
      ],
    },

  ]);

  return (
    
    <div className="app">
       <h1>
        Taylor Swift Spotify | Listening Party &nbsp;
        <FontAwesomeIcon icon={faSpotify} className="spotify-icon" />
      </h1>
      <div className="banner">
        <iframe
          style={{ borderRadius: '12px', width: '100%', height: '352px' }}
          src="https://open.spotify.com/embed/artist/06HL4z0CvFAxyc27GXpf02?utm_source=generator"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
      <div className="albums-container">
        {albums.map((album) => (
          <div className="album" key={album.id}>
            <a href={album.image} target="_blank" rel="noopener noreferrer">
              <img src={album.image} alt={album.name} />
            </a>
            <h2>{album.name}</h2>
            <p>{album.release_date}</p>
            <ul>
  {album.tracks.map((track) => (
    <li key={track.id}>
      <i className="fas fa-compact-disc"></i> {track.name} - {track.duration}
    </li>
  ))}
</ul>

          </div>
        ))}
      </div>
    </div>
  
  );


  const chunkedAlbums = albums.reduce((acc, album, index) => {
    const chunkIndex = Math.floor(index / 4);
    if (!acc[chunkIndex]) {
      acc[chunkIndex] = [];
    }
    acc[chunkIndex].push(album);
    return acc;
  }, []);

  return (
    <div className="app">
      <h1>Taylor Swift Spotify | Listening Party</h1>
      <div className="banner">
        <iframe
          style={{ borderRadius: '12px', width: '100%', height: '352px' }}
          src="https://open.spotify.com/embed/artist/06HL4z0CvFAxyc27GXpf02?utm_source=generator"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
      <div className="albums-container">
        {albums.map((album) => (
          <div className="album" key={album.id}>
            <a href={album.image} target="_blank" rel="noopener noreferrer">
              <img src={album.image} alt={album.name} />
            </a>
            <h2>{album.name}</h2>
            <p>{album.release_date}</p>
            <div className="tracks-container">
              <ul className="tracks-list">
                {album.tracks.map((track) => (
                  <li key={track.id}>{track.name} - {track.duration}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default App;
