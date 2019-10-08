function BusinessLayer() {
  this.dataLayer = new DataLayer();

  this.getResolvedAlbums = async () => {
    await this.dataLayer.populateAlbums();
    var allAlbums = this.dataLayer.getAlbums();
    // console.log(allAlbums);
    var resolvedAlbums = [];

    var albums = allAlbums.topalbums.album;
    for (let index = 0; index < albums.length; index++) {
      var temp = {
        name: albums[index].name,
        imageSrc: albums[index].image[3]["#text"] 
      };
      resolvedAlbums.push(temp);
    }

    var fmResolvedData = {
      artist: {
        name: allAlbums.topalbums["@attr"].artist
      },
      albums: resolvedAlbums
    };

    // console.log(fmResolvedData);

    localStorage.setItem("fmApiData", JSON.stringify(fmResolvedData));
      
  };

  this.getResolvedAlbumDetails = async (artistName, albumName) => {
    await this.dataLayer.populateAlbumDetails(artistName, albumName);
    var albumDetails = this.dataLayer.getAlbumDetails();
    // console.log(albumDetails);

    var allTracks = albumDetails.album.tracks.track;
    var tracksArray = [];
    for (let index = 0; index < allTracks.length; index++) {
      var trackInfo = {
        name: allTracks[index].name,
        duration: allTracks[index].duration
      };

      tracksArray.push(trackInfo);
    }

    var resolvedData = {
      albumName: albumDetails.album.name,
      albumWiki: albumDetails.album.wiki,
      albumPictureSrc: albumDetails.album.image[4]["#text"],
      tracks: tracksArray
    };

    return resolvedData;
  };
}
