const mysql = require("mysql");
const exp = require("express");
const app = exp();
var cors = require("cors");
app.use([cors(), exp.json()]);
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    port: 3306,
    database: "laptop_react1",
});
db.connect((err) => {
    if (err) throw err;
    console.log("Da ket noi database");
});

app.get("/spmoi/:sosp?", function (req, res) {
    let sosp = parseInt(req.params.sosp || 6);
    if (sosp <= 1) sosp == 6;
    let sql = `SELECT * FROM san_pham WHERE an_hien = 1 ORDER BY ngay desc LIMIT 0 , ?`;
    db.query(sql, sosp, (err, data) => {
        if (err) res.json({ "thong bao": "Loi lay list sp", err });
        else res.json(data);
    });
});
// nơi định nghĩa các đường route


app.get('/sp/:id', function(req, res) {
    let id = parseInt(req.params.id || 0);      
    if ( isNaN(id) || id <= 0) { 
      res.json({"thong bao":"Không biết sản phẩm", "id": id});  return; 
    } 
    let sql = `SELECT id, ten_sp, gia, gia_km, hinh, ngay, luot_xem
    FROM san_pham WHERE id = ?` 
    db.query( sql , id,  (err, data) => {
      if (err) res.json({"thongbao":"Lỗi lấy 1 sp", err })
      else res.json(data[0]);
     });   
});


app.get('/sptrongloai/:id_loai', function (req, res) {
    let id_loai = parseInt(req.params.id_loai);
    if (isNaN(id_loai) || id_loai<=0) {
        res.json({"thong bao": "Không biết loại", "id_loai": id_loai}); return;
    }
    let sql= `SELECT id, ten_sp, gia, gia_km, hinh, ngay FROM san_pham WHERE id_loai=? AND an_hien = 1 ORDER BY id desc`;
    db.query(sql, id_loai, (err, data) => {
        if (err) res.json({"thongbao": "Lỗi lấy sp trong loại", err })
    else res.json(data);
    });
});


app.get('/loai/:id_loai', function(req, res) {
    let id_loai = parseInt(req.params.id_loai);
    if (isNaN(id_loai) || id_loai<=0) {
        res.json({"thong bao": "Không biết loại", "id_loai": id_loai}); return;
    }
    let sql= `SELECT id, ten_loai FROM loai WHERE id = ? `;
    db.query(sql, id_loai, (err, data) => {
        if (err) res.json({"thongbao": "Lỗi lấy loại", err })
    else res.json(data[0]);
    });
});
app.post('/luudonhang/', function (req, res) {
    let data = req.body;
    let sql=` INSERT INTO don_hang SET ? `;
    db.query(sql, data, function (err, data) {
        if (err) res.json({"id_dh": -1, "thongbao": "Lỗi lưu đơn hàng", err })
        else {
            id_dh = data.insertId
            res.json({"id_dh": id_dh, "thongbao": "Đã lưu đơn hàng"});
        }
    });
});

app.post('/luugiohang/', function (req, res) {
    let data = req.body;
    let sql= `INSERT INTO don_hang_chi_tiet SET ? `;

    db.query(sql, data, function (err, d) {
        if (err) res.json({"thongbao": "Lỗi lưu sp", err })
        else res.json({"thongbao": "Đã lưu sp vào db", "id_sp": data.id_sp});
        });
    });
    
app.listen(3000, () => console.log(`Ung dung dang chay voi port 3000`));
