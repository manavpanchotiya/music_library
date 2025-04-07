const library = {
  tracks: {
    t01: { id: "t01", name: "Code Monkey", artist: "Jonathan Coulton", album: "Thing a Week Three" },
    t02: { id: "t02", name: "Model View Controller", artist: "James Dempsey", album: "WWDC 2003" },
    t03: { id: "t03", name: "Four Thirty-Three", artist: "John Cage", album: "Woodstock 1952" }
  },
  playlists: {
    p01: { id: "p01", name: "Coding Music", tracks: ["t01", "t02"] },
    p02: { id: "p02", name: "Other Playlist", tracks: ["t03"] }
  },
       
  // prints a list of all playlists, in the form:
  // p01: Coding Music - 2 tracks
  // p02: Other Playlist - 1 tracks
  printPlaylists: function() {
    for (const playlistId in this.playlists) {
      const playlist = this.playlists[playlistId];
      const numberOfTracks = playlist.tracks.length;
      console.log(`${playlistId}: ${playlist.name} - ${numberOfTracks} tracks`);
    }
  },
};
library.printPlaylists();
     
// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
library.printTracks = function() {
  for (const trackId in this.tracks) {
    const track = this.tracks[trackId];
    console.log(`${trackId}: ${track.name} by ${track.artist} (${track.album})`);
  }
};
library.printTracks();
     
// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
library.printPlaylist = function(playlistId) {
  const playlist = this.playlists[playlistId];
  console.log(`${playlistId}: ${playlist.name} - ${playlist.tracks.length} tracks`);
  for (const trackId of playlist.tracks) {
    const track = this.tracks[trackId];
    console.log(`${trackId}: ${track.name} by ${track.artist} (${track.album})`);
  }
};
library.printPlaylist("p01");
     
// adds an existing track to an existing playlist
library.addTrackToPlaylist = function(trackId, playlistId) {
  this.playlists[playlistId].tracks.push(trackId);
  console.log(`Added ${trackId}`);
};
library.addTrackToPlaylist("t03", "p01");
     
// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
library.generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};
     
// adds a track to the library
library.addTrack = function(name, artist, album) {
  const id = this.generateUid();
  this.tracks[id] = { id, name, artist, album };
};
library.addTrack("Nevermind", "Dennis Llyod", "Nevermind");
     
// adds a playlist to the library
library.addPlaylist = function(name) {
  const id = this.generateUid();
  this.playlists[id] = { id, name, tracks: [] };
};
library.addPlaylist("My Playlist");

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
//const printSearchResults = function(query) {

//};