export default function makeUser({
  username,
  email,
  password,
  history = [],
  likedTracks = [],
  playlist = [],
}: any) {
  if (!username) throw new Error("Username is required");
  if (!email) throw new Error("email is required");
  if (!password) throw new Error("Password is required");
  return Object.freeze({
    getUsername: () => username,
    getEmail: () => email,
    getPassword: () => password,
    getHistory: () => history,
    getLikedTracks: () => likedTracks,
    getPlaylist: () => playlist,
  });
}
