import Box from "@mui/material/Box";
import React from "react";

function PodcastDetails(): JSX.Element {
  return (
    <Box>
      <Box>
        <Box>
          <Box>
            <img src="https://placehold.co/24x24" alt="Logo" />
            <h1>Music</h1>
          </Box>
          <input type="text" placeholder="Search..." />
          <nav className="space-y-4">
            <a href="/images/album-1.jpg">
              <span>home</span>
              <span>Home</span>
            </a>
            <a href="/images/album-1.jpg">
              <span>explore</span>
              <span>Discover</span>
            </a>
            <a href="/images/album-1.jpg">
              <span className="material-icons">library_music</span>
              <span>Browse</span>
            </a>
            <a
              href="/images/album-1.jpg"
              className="flex items-center space-x-2"
            >
              <span>podcasts</span>
              <span>Podcasts</span>
              <span>new</span>
            </a>
            <a href="/images/album-1.jpg">
              <span>radio</span>
              <span>Radio</span>
            </a>
          </nav>
          <Box>
            <h2>Library: 3</h2>
            <a href="/images/album-1.jpg">
              <span>album</span>
              <span>Albums</span>
            </a>
            <a href="/images/album-1.jpg">
              <span>music_note</span>
              <span>Song</span>
            </a>
            <a href="/images/album-1.jpg">
              <span>person</span>
              <span>Artists</span>
            </a>
          </Box>
          <Box className="flex items-center space-x-2">
            <img src="https://placehold.co/32x32" alt="User" />
            <Box>
              <p>Vitaliy Dorozhko</p>
              <p>Premium member</p>
            </Box>
          </Box>
        </Box>

        <Box>
          <Box>
            <h2>Trending</h2>
            <Box>
              <button>chevron_left</button>
              <button>chevron_right</button>
            </Box>
          </Box>
          <Box>
            <img src="https://placehold.co/100x100" alt="Artist" />
            <Box>
              <p>Artist</p>
              <h3>Top all over the world</h3>
              <Box>
                <button>Play</button>
                <button>Follow</button>
              </Box>
            </Box>
          </Box>
          <Box>
            <h3>Playlist</h3>
            <table>
              <thead>
                <tr>
                  <th>/images/album-1.jpg</th>
                  <th>Title</th>
                  <th>Artist</th>
                  <th>Time</th>
                  <th>Album</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01</td>
                  <td>Sleep 4Ever</td>
                  <td>Blackbear</td>
                  <td>4:12</td>
                  <td>HoneyWorks</td>
                </tr>
                <tr>
                  <td>02</td>
                  <td>Time is Ticking Out</td>
                  <td>The Cranberries</td>
                  <td>4:20</td>
                  <td>Wake up and Smell the Coffee</td>
                </tr>
                <tr>
                  <td>03</td>
                  <td>If I were u</td>
                  <td>Lauv</td>
                  <td>3:12</td>
                  <td>The Ecstatic</td>
                </tr>
                <tr>
                  <td>04</td>
                  <td>One Minute More</td>
                  <td>Gun Kelly</td>
                  <td>2:56</td>
                  <td>Supercell</td>
                </tr>
              </tbody>
            </table>
          </Box>
          <Box>
            <h3>Tags</h3>
            <a href="/images/album-1.jpg">More</a>
          </Box>
          <Box>
            <span>Accoustic</span>
            <span>Piano jazz</span>
            <span>Jazz</span>
            <span>Indie pop</span>
          </Box>
          <Box>
            <h3>Played</h3>
            <a href="/images/album-1.jpg">See all</a>
          </Box>
          <Box className="space-y-4">
            <Box>
              <img src="https://placehold.co/50x50" alt="Song" />
              <Box>
                <p>Blank Space</p>
                <p>Taylor Swift</p>
                <p>4 min ago</p>
              </Box>
            </Box>
            <Box>
              <img src="https://placehold.co/50x50" alt="Song" />
              <Box>
                <p>Side Effects</p>
                <p className="text-xs text-zinc-400">The Chainsmokers</p>
                <p className="text-xs text-zinc-400">20 min ago</p>
              </Box>
            </Box>
            <Box className="flex items-center space-x-4">
              <img src="https://placehold.co/50x50" alt="Song" />
              <Box>
                <p>No One Like You</p>
                <p className="text-xs text-zinc-400">Scorpions</p>
                <p className="text-xs text-zinc-400">2 hr ago</p>
              </Box>
            </Box>
            <Box className="flex items-center space-x-4">
              <img src="https://placehold.co/50x50" alt="Song" />
              <Box>
                <p>Always Love You</p>
                <p>Elton John</p>
                <p>3 hr ago</p>
              </Box>
            </Box>
          </Box>
          <Box className="bg-purple-700 p-4 rounded-lg flex items-center space-x-4">
            <img src="https://placehold.co/100x100" alt="Album" />
            <Box>
              <h3>I Knew You Were</h3>
              <p>Taylor Swift</p>
            </Box>
            <button>+</button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default PodcastDetails;
