import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { themSP } from "./cartSlice";

function Home() {
  const [listSP, setListSP] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:3000/spmoi/9")
      .then(res => res.json())
      .then(data => setListSP(data));
  }, []);

  return (
    <div className="home">
      {listSP.map((sp, i) => (
        <div className="sp" key={i}>
          <h4>
            <Link to={"/sp/" + sp.id}>{sp.ten_sp}</Link>
          </h4>
          <img src={sp.hinh} alt={sp.ten_sp} />
          <h4 className="price">{Number(sp.gia).toLocaleString("vi")} VNĐ</h4>
          <p>
            <button className="button"href="#/" onClick={() => dispatch(themSP(sp))}>
              Thêm vào giỏ
            </button> 
          </p>
        </div>
      ))}
    </div>
  );
}

export default Home;
