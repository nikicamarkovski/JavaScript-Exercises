function Presentation() {
  this.resolvedData = JSON.parse(localStorage.getItem("fmApiData"));
  this.businessObject = new BusinessLayer();

  this.displayAlbums = () => {
    var artistName = this.resolvedData.artist.name;
    var albums = this.resolvedData.albums;
    var body = $("body");
    var artistH1 = $("<h1>").attr("id", "artistName");
    artistH1.text(artistName);
    body.append(artistH1);

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
      var artistName = $("#artistName").text();
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
    var body = $("body").html("");

    var albumName = $("<h1>").text(albumDetails.albumName);
    body.append(albumName);

    var albumPicture = $("<img>").attr("src", albumDetails.albumPictureSrc);
    body.append(albumPicture);

    body.append($("<h3>").text("Tracks"));

    for (var i = 0; i < albumDetails.tracks.length; i++) {
      var track = $("<div>").text(
        `${albumDetails.tracks[i].name} - Duration: ${albumDetails.tracks[i].duration}`
      );
      body.append(track);
    }

    var albumWikiContent = $("<p>").text(albumDetails.albumWiki.content);
    body.append(albumWikiContent);

    var albumWikiPublished = $("<p>").text(
      `Published : ${albumDetails.albumWiki.published}`
    );
    body.append(albumWikiPublished);

    var albumWikiSummary = $("<p>").text(albumDetails.albumWiki.summary);
    body.append(albumWikiSummary);
  };

  this.displayInput = () => {
    var body = $("body");
    var input = $("<input>").attr("placeholder", "Search Artist by name");
    body.append(input);

    input.on("keyup", async event => {
      // za da se resi problemot koga prebrzo ke napiseme nekoj search term i ke dobieme povekje pati rezultat, se koristi DEBOUNCE funkcija koja sto moze da ja najdete na internet
      var inputSearchTerm = $(event.target).val();

      if (inputSearchTerm.length > 3) {
        var artistsArray = await this.businessObject.resolveSimilarArtists(
          inputSearchTerm
        );

        var artistDiv = $("<div>").attr("class", "artist");

        for (var i = 0; i < artistsArray.length; i++) {
          var artist = $("<div>").text(artistsArray[i].name);
          artistDiv.append(artist);
        }
        body.append(artistDiv);
      }
    });
  };
}
