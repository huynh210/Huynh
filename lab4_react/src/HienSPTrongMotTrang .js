import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { themSP } from "./cartSlice";
function HienSPTrongMotTrang({ spTrongTrang }) {
  const dispatch = useDispatch()
    return (<div id="data">
    { spTrongTrang.map( (sp, index)=>{ return (
        <div className="sp" key={index}>
          <h4> <Link to = { "/sp/" + sp.id_sp } > {sp['ten_sp']} </Link> </h4>
          <img src= {sp['hinh']} alt= {sp['ten_sp']} />
          <h4 className="price"> {Number(sp['gia']).toLocaleString("vi")} VNĐ</h4>
          <p>    <button className="button"href="#/" onClick={() => dispatch(themSP(sp))}>
              Thêm vào giỏ
            </button></p>
        </div> 
        )})//map
    }
    </div>);
  } //HienSPTrongMotTrang
export default HienSPTrongMotTrang