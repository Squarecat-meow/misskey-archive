export const fetchUsernameCustomEmoji = async (props) => {
  let usernameEmoji = [];
  let usernameIndex = [];

  const emojiInUsername = props.username.match(/:[\w]+:/g);
  const usernameArray = props.username.split(":");

  usernameEmoji = emojiInUsername.map((value) => value.match(/\w+/g)).flat();

  for (let el in usernameEmoji) {
    usernameIndex.push(usernameArray.indexOf(usernameEmoji[el]));
  }

  const url = await fetchCustomEmoji(usernameEmoji, props.server, props.token);
  for (let el in url) {
    usernameArray.splice(usernameIndex[el], 1, url[el]);
  }

  return usernameArray;
};

const fetchCustomEmoji = async (emoji, host, token) => {
  let usernameEmojiUrlArr = [];

  for (let i = 0; i < emoji.length; i++) {
    const res = await fetch(`https://${host}/api/emoji`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: emoji[i],
        i: token,
      }),
    });

    const data = await res.json();
    usernameEmojiUrlArr.push(data.url);
  }

  return usernameEmojiUrlArr;
};
