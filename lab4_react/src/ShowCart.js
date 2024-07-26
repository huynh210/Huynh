import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { xoaSP, suaSL,xoaGH } from "./cartSlice";
import { Link } from "react-router-dom";
function ShowCart(props) {
const dispatch = useDispatch()
  const cart = useSelector(state => state.cart.listSP);
  return (
    <div id="giohang">
      <h2>Giỏ hàng của bạn</h2>
      {cart.map ((sp, index) => { return (
        <div key={index}>
          <span>{sp.ten_sp}</span>
          <img src= {sp['hinh']} alt= {sp['ten_sp']} />
          <input type="number" min={1} defaultValue={sp.so_luong}  
          onClick= {e => dispatch(suaSL([sp.id , e.target.value]))}/>
          <span>{Number(sp.gia).toLocaleString("vi")} VNĐ</span>
          <span>{Number(sp.gia*sp.so_luong).toLocaleString("vi")} VNĐ</span>
          <span> <a href="#/" onClick={ () => dispatch(xoaSP(sp.id))}>Xóa</a> </span>
        </div>
      )})}
       <Link to='/thanhtoan'>Thanh toán</Link>
       <button  onClick={() => dispatch(xoaGH())}>Xóa Giỏ Hàng</button>
    </div>
  );
}
export default ShowCart;
