import React, { useEffect, useState } from "react";
import "./css/home.css";
import axios from "axios";

function Home() {
  const [data, setData] = useState([]);
  const [item, setItem] = useState([]);
  const [page, setPage] = useState(1);
  let [cartdata, setcartdata] = useState([]);

  function addToCart(id) {
    let newdata = [...cartdata, id];
    setcartdata(newdata);
  }
  console.log(cartdata);

  useEffect(() => {
    const url = "https://api.sampleapis.com/wines/reds";
    const fetchpost = async () => {
      const res = await axios.get(url);
      setData(res.data);
    };
    fetchpost();
  }, []);
  useEffect(() => {
    setItem(data.slice((page - 1) * 25, (page - 1) * 25 + 25));
  }, [page, data]);


  return (
    <div className="Home">
      <button onClick={() => setData(data.sort((a, b) => a.id - b.id))}>Sort Low to High</button>
      <button onClick={() => setData(data.sort((a, b) => b.id - a.id))}> Sort High to Low</button >
      {
        item.length > 0 && (
          <div className="Products">
            {item.map((e) => (
              <div className="winebox" key={e.id}>
                <img src={e.image} alt={e.winery} />
                <p>{e.wine}</p>
                <p>{e.rating.reviews}</p>
                <button onClick={() => addToCart(e)}>Add to Cart</button>
              </div>
            ))}
          </div>
        )
      }
      < button onClick={() => setPage(page - 1)} disabled={page === 1}>Prev</ button>
      <button onClick={() => setPage(page + 1)} disabled={page === Math.ceil(data.length / 25)}>
        Next
      </button>
    </div >
  );
}

export default Home;
