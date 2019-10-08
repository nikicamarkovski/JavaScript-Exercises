function FmApi() {
  this.getAlbums = () => {
    return new Promise((resolve, reject) => {
      $.ajax({
        url:
          "http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=eminem&api_key=eb71f2ecb9c62781fd1e9c1dd283f70a&format=json",
        type: "GET",
        success: function(data) {
          resolve(data);
        },
        error: function(error) {
          reject(error);
        }
      });
    });
  };

  this.getAlbumDetails = (artistName, albumName) => {
    return new Promise((resolve, reject) => {
      $.ajax({
        url:
          "http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=eb71f2ecb9c62781fd1e9c1dd283f70a&artist=" +
          artistName +
          "&album=" +
          albumName +
          "&format=json",
        type: "GET",
        success: function(data) {
          resolve(data);
        },
        error: function(error) {
          reject(error);
        }
      });
    });
  };

  this.getSimilarArtists = searchTerm => {
    return new Promise((resolve, reject) => {
      $.ajax({
        url:
          "http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=" +
          searchTerm +
          "&api_key=eb71f2ecb9c62781fd1e9c1dd283f70a&format=json",
        type: "GET",
        success: function(data) {
          resolve(data);
        },
        error: function(error) {
          reject(error);
        }
      });
    });
  };
}
