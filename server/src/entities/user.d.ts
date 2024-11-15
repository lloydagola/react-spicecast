export default function makeUser({ username, email, password, history, likedTracks, playlist, }: any): Readonly<{
    getUsername: () => any;
    getEmail: () => any;
    getPassword: () => any;
    getHistory: () => any;
    getLikedTracks: () => any;
    getPlaylist: () => any;
}>;
