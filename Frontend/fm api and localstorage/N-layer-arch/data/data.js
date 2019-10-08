function DataLayer() {
  this.albums = {};
  this.albumDetails = {};
  this.persistance = new FmApi();
  
  this.populateAlbums = async () => {
    this.albums = await this.persistance.getAlbums();
  };

  this.getAlbums = () => {
    return this.albums;
  };

  this.getAlbumDetails = () => {
    return this.albumDetails;
  };

  this.populateAlbumDetails = async (artistName, albumName) => {
    this.albumDetails = await this.persistance.getAlbumDetails(
      artistName,
      albumName
    );
  };
  
}


// ne e moja 