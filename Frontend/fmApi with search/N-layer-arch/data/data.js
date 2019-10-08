function DataLayer() {
  this.albums = {};
  this.albumDetails = {};
  this.similarArtists = {};
  this.persistance = new FmApi();

  this.populateSimilarArtists = async (searchTerm) => {
    this.similarArtists = await this.persistance.getSimilarArtists(searchTerm);
  }

  this.getSimilarArtists = () => {
    return this.similarArtists;
  }

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
