function FmApi() {


  this.getAlbums = () => {
    return new Promise((resolve, reject) => {
      $.ajax({
        url:
          "http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=eminem&api_key=f29725522fefd76421ab0d108d38476a&format=json",
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
          "http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f29725522fefd76421ab0d108d38476a&artist=" + artistName  +"&album=" + albumName + "&format=json",
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
