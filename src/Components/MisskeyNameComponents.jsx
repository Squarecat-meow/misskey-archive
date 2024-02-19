import React, { useEffect, useState } from "react";
import { fetchUsernameCustomEmoji } from "../Functions/Misskey/FetchUsernameCustomEmoji";

const MisskeyNameComponents = (props) => {
  const server = sessionStorage.getItem("server");
  const token = sessionStorage.getItem("token");

  const [username, setUsername] = useState("닉네임");

  const misskeyUser = {
    username: props.name,
    server: server,
    token: token,
  };

  const NameComponents = () => {
    if (typeof username === "object") {
      for (let i = 0; i < username.length; i++) {
        if (username[i].toString().substring(0, 8) === "https://") {
          username.splice(
            i,
            1,
            <img
              className="mx-1 w-6 h-6"
              key={i}
              alt="custom emoji"
              src={username[i]}
            />
          );
        }
      }
      return username;
    } else {
      return username;
    }
  };

  useEffect(() => {
    fetchUsernameCustomEmoji(misskeyUser).then((res) => {
      setUsername(res);
    });
  }, []);

  return (
    <div className="mt-2 flex">
      <NameComponents />
    </div>
  );
};

export default MisskeyNameComponents;
