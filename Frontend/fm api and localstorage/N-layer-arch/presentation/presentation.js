function Presentation() {
  this.resolvedData = JSON.parse(localStorage.getItem("fmApiData"));
  this.businessObject = new BusinessLayer();
  //  console.log(this.businessObject);
  this.displayAlbums = () => {
    var artistName = this.resolvedData.artist.name;
    var albums = this.resolvedData.albums;
    var body = $("body");
    var artistH1 = $("<h1>").attr("id", "artistName");
    artistH1.text(artistName);
    body.append(artistH1);
    console.log (albums);

    for (let i = 0; i < albums.length; i++) {
      var albumDiv = $("<div>");
      var albumNameParagraph = $("<p>");
      var albumImage = $("<img>");
      albumNameParagraph.text(albums[i].name);
      albumImage.attr("src", albums[i].imageSrc).addClass("image");
      albumDiv.append(albumNameParagraph);
      albumDiv.append(albumImage);
      body.append(albumDiv);
    }

    $(".image").on("click", async event => {
      var artistName = $('#artistName').text();
      var albumName = $(event.target)
        .prev()
        .text();
      this.displayAlbumDetails(artistName, albumName);
    });
  };

  this.displayAlbumDetails = async (artistName, albumName) => {
    var albumDetails = await this.businessObject.getResolvedAlbumDetails(
      artistName,
      albumName
    );
    console.log(albumDetails);
    
  };
}
