console.log('Script loaded: script_iframe_api.js');
WA.onInit().then(() => {
  // the URL is the ID
  const workaRoomUrl = WA.room.id;
  console.debug(`WA: room.id=${workaRoomUrl}, room.mapURL=${WA.room.mapURL}`);
});
