import React, { useEffect, useState } from "react";
import emojidata from "./emojidata.json";

function Emoji() {
  const [search, setsearch] = useState("");
  const [data,setdata]=useState([]);

  useEffect(() => {
    const neData= emojidata.filter(emoji => emoji.title.toLowerCase().includes(search.toLowerCase()));
    setdata(neData)
  }, [search]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>Emoji Search</h2>
            <input
              class="form-control form-control-lg"
              type="text"
              placeholder="Search..."
              aria-label=".form-control-lg example"
              value={search}
              onChange={(e) => setsearch(e.target.value)}
            ></input>
          </div>

          {data.map((emoji) => {
            return <div className="col-1 shadow m-2 text-center rounded-circle ">
                <span >
                    {emoji.symbol}
                </span>
                
            </div>;
          })}
        </div>
      </div>
    </>
  );
}

export default Emoji;
