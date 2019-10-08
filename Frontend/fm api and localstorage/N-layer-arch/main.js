function main() {
  var businessObject = new BusinessLayer();
  businessObject.getResolvedAlbums();
  businessObject.getResolvedAlbumDetails();

  var presentationObject = new Presentation();
  presentationObject.displayAlbums();
}

main();
