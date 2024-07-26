import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import PhanTrang from "./PhanTrang";

function SPTrongLoai() {
   let { id_loai } = useParams();
  const [list_sp, ganListSP] = useState( [] );
  const [loai, ganLoai] = useState ("");
  useEffect( () => {
    fetch(`http://localhost:3000/sptrongloai/${id_loai}`)
    .then( res => res.json()).then( data => ganListSP(data) );
    fetch(`http://localhost:3000/loai/${id_loai}`)
    .then( res => res.json()).then( data => ganLoai(data) );
  } , [id_loai] );

  return (
    <div id="listsp">
    <h1> Sản phẩm trong loai {loai['ten_loai']}</h1>
    <PhanTrang listSP={list_sp} pageSize={6} /> 
  </div>
  
  );
}
export default SPTrongLoai;
