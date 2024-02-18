import React, { useState } from "react";
import { miAuth } from "../Functions/MiAuth";
import { v4 as uuid } from "uuid";

const MainPage = () => {
  const [server, setServer] = useState("");

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
    </div>
  );
};

export default MainPage;
