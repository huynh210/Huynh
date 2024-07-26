import { useParams } from "react-router-dom";
// import {listsp} from './data.js';
import { useState, useEffect } from "react";
function ChiTiet() {
    let { id } = useParams();
    // let sp = listsp[id];
    const [sp, ganSP] = useState( [] )
    useEffect ( () =>{
        let url = `http://localhost:3000/sp/${id}`
        fetch(url).then(res=> res.json()).then(data => {
           
            ganSP(data)
        })
    }, [id])
    return ( <div id='chitiet'>        
        <div id="row1">
            <div id="trai"> <img src= {sp['hinh']} alt={sp['ten_sp']} /> </div>
            <div id="phai"> 
               <h1 className="h3"> {sp['ten_sp']} </h1>
               <p><span>Giá gốc</span>: {Number(sp['gia']).toLocaleString("vi")} VNĐ</p>
               <p><span>Giá KM</span>: {Number(sp['gia_km']).toLocaleString("vi")} VNĐ</p>
               <p><span>Ngày</span>: {new Date(sp['ngay']).toLocaleString("vi-VN")}</p>
               <p><span>RAM</span>: {sp['RAM']} </p>
            </div>
        </div>
        <div id="row2"> SP Liên quan </div>
    </div>
    );
};
export default ChiTiet;
