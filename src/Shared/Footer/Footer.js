import "../../Styles/footer.css";
import Grid from "@mui/material/Grid";
import EmailIcon from '@mui/icons-material/Email';
import Link from "@mui/material/Link";
function Footer() {
  return (
    <div>
      <div className="footer" style={{background: '#000'}}>
        <Grid container spacing={0} className="footer__top">
          <Grid item xs={6} style={{ display: "flex" , justifyContent: "space-around" , marginTop : "6px" }}>
            <div className="footet__top-online">
              <p>MUA HÀNG TRỰC TUYẾN</p>
              <div>
                <Link href="" className="footer__top-right-link">0868186485</Link>
              </div>
              <div>
                <Link href="" className="footer__top-right-link">0868186485</Link>
              </div>
              <span> sale.online@shopg8.vn</span>
            </div>
            <div className="footer__top-hotline">
              <p>HOTLINE GÓP Ý</p>
              <div>
                <Link href="" className="footer__top-right-link">0868186485</Link>
              </div>
              <span>cskh@shopg8.vn</span>
            </div>
          </Grid>
          <Grid item xs={6} style={{display: 'flex' ,justifyContent: "space-around" }}>
            <div className="footer__top-info">
              <h3 className="footer__top-title" >Thông Tin</h3>
              <ul>
                <li>
                  <Link href="" className="footer__top-link">Giới thiệu</Link>
                </li>
                <li>
                  <Link href="" className="footer__top-link">Liên hệ</Link>
                </li>
                <li>
                  <Link href="" className="footer__top-link">Đối tác</Link>
                </li>
                <li>
                  <Link href="" className="footer__top-link">Tuyển dụng</Link>
                </li>
              </ul>
            </div>
            <div className="footer__top-policy">
              <h3 className="footer__top-title" >Chính Sách</h3>
              <ul>
                <li>
                  <Link href="" className="footer__top-link">Chính sách bảo hành</Link>
                </li>
                <li>
                  <Link href="" className="footer__top-link">Chính sách đổi hàng</Link>
                </li>
                <li>
                  <Link href="" className="footer__top-link">Chính sách bảo mật</Link>
                </li>
                <li>
                  <Link href="" className="footer__top-link">Chính sách hoàn tiền</Link>
                </li>
              </ul>
            </div>
            <div className="footer__top-faq">
              <h3 className="footer__top-title" >FAQ</h3>
              <ul>
                <li>
                  <Link href="" className="footer__top-link">Thanh tra vận chuyển</Link>
                </li>
                <li>
                  <Link href="" className="footer__top-link">Hướng dẫn chọn size </Link>
                </li>
                <li>
                  <Link href="" className="footer__top-link">Kiểm tra thông tin đơn hàng</Link>
                </li>
                <li>
                  <Link href="" className="footer__top-link">Câu hỏi thường gặp</Link>
                </li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} className="footer__bottom">
            <div className="footer__bottom-register">
              <h2>Đăng ký nhận khuyến mãi</h2>
              <div className="footer__bottom-form">
                <input type="text" />
                <button className="footer__bottom-form-btn" type="submit">
                  Gửi
                </button>
              </div>
            </div>
            <div className="footer__bottom-search">
              <h2>Tra cứu thông tin của bạn</h2>
              <div className="footer__bottom-form">
                <input type="text" />
                <button className="footer__bottom-form-btn" type="submit">
                  Tìm
                </button>
              </div>
            </div>
            <div className="footer__bottom-feedback">
              <Link href="" className="footer__top-link">
                <EmailIcon />
              </Link>
              <p>GÓP Ý/THAN PHIỀN</p>
            </div>
          </Grid>
          <div className="footer__address">
            <p className="name-cty">CÔNG TY SHOPG8</p>
            <p className="address">Địa chỉ: 175 Tây Sơn, Đống Đa, Hà Nội.</p>
          </div>
        </Grid>
      </div>
    </div>
  );
}
export default Footer;
