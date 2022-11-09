import React, { useState } from "react";
import Navbar from "../component/Navbar";

function Home() {
  const [message, setMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState("");

  const submitMsg = (e) => {
    e.preventDefault();
    if (message === "") {
      console.log("No values");
      return;
    } else {
      console.log(message);
    }
  };

  const submitfile = (e) => {
    e.preventDefault();
    if (selectedFile === null) {
      console.log("No values");
      return;
    } else {
      console.log(selectedFile);
    }
  };
  return (
    <div className="w-full text-white text-center px-1 md:px-4 py-2 m-auto rounded md:w-1/2">
      <div className="bg-jet rounded mb-1 py-2">
        <h2 className="text-2xl mb-5">Send Message</h2>
        <form onSubmit={(e) => submitMsg(e)}>
          <div className="flex flex-col">
            <label className="m-1">Enter your Messgae</label>
            <textarea
              className="my-1 mx-auto px-2 w-4/5 py-1 rounded text-black"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label className="m-1"></label>
          </div>

          <button
            className="text-white bg-smoky-black m-3 px-4 py-1 rounded"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>

      {localStorage.getItem("type") === "Manager" || localStorage.getItem("type") === "admin"&& (
        <div className="bg-jet rounded mt-1 py-2">
          <h2 className="text-2xl mb-5">Upload file</h2>

          <form onSubmit={(e) => submitfile(e)}>
            <div className="flex flex-col">
              <label className="m-1">Enter your Messgae</label>
              <input
                className="my-1 mx-auto px-2 w-4/5 py-1 rounded text-white bg-web-gray"
                type="file"
                value={selectedFile}
                onChange={(e) => setSelectedFile(e.target.value)}
              />
              <label className="m-1"></label>
            </div>

            <button
              className="text-white bg-smoky-black m-3 px-4 py-1 rounded"
              type="submit"
            >
              Upload file
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Home;
