export const miAuth = (server, id) => {
  const host = window.location.host;
  const protocol = window.location.protocol;
  const address = `https://${server}/miauth/${id}?name=Misskey-archive&callback=${protocol}//${host}/callback&permission=read:account`;

  window.open(address, "_self");
};
