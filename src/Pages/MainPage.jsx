import React, { useState } from "react";
import { miAuth } from "../Functions/Misskey/MiAuth";
import { v4 as uuid } from "uuid";
import MisskeyNameComponents from "../Components/MisskeyNameComponents";

const MainPage = () => {
  const [server, setServer] = useState("");
  const user = JSON.parse(sessionStorage.getItem("user"));

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuid();

    if (server) {
      sessionStorage.setItem("server", server);
      sessionStorage.setItem("id", id);

      miAuth(server, id);
    } else {
      alert("서버 이름을 입력해주세여!");
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      {!user && (
        <form>
          <label>
            미스키 서버 주소:
            <input
              type="text"
              placeholder="serafuku.moe"
              onChange={(e) => setServer(e.target.value)}
              className="w-48 h-8 ml-2 border rounded-lg"
            />
          </label>
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-16 h-8 ml-2 border bg-slate-200 hover:bg-slate-300 rounded-lg"
          >
            확인
          </button>
        </form>
      )}
      {user ? (
        <div className="flex flex-col items-center">
          <img
            src={user.avatarUrl}
            alt="misskey avatar"
            className="w-24 h-24 rounded-full"
          />
          <MisskeyNameComponents name={user.name} />
        </div>
      ) : (
        <div className="w-24 h-24 bg-slate-400 rounded-full" />
      )}
    </div>
  );
};

export default MainPage;
