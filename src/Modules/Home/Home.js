import React from "react";
// import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
// import Button from "@mui/material/Button";
import NavBar from "../../shared/NavBar/NavBar";
import Header from "../../shared/Header/Header";
import Footer from "../../shared/Footer/Footer";
import "../../Styles/Home.css";
function Home() {
  return (
    <div>
      <div className="Wraper">
        <Grid container spacing={3}>
          <Grid item xs={2}>
            <NavBar />
          </Grid>
          <Grid item xs={10}>
            <Header />
            <div className="poster">
              <Grid item xs={5} style={{ width: "100%", marginRight: "30px" }}>
                <img
                  style={{ width: "100%" }}
                  src="https://mcdn.nhanh.vn/store/7136/bn/Tha__ng_5_Banner_do__i__Nam_.jpg"
                />
              </Grid>
              <Grid item xs={5}>
                <img
                  style={{ width: "100%" }}
                  src="https://mcdn.nhanh.vn/store/7136/bn/Tha__ng_5_Banner_do__i__Nu_____.jpg"
                />
              </Grid>
            </div>
            <div className="trend">
              <Grid
                item
                xs={12}
                spacing={4}
                style={{ width: "100%", display: "flex", height: "100%" }}
              >
                <Grid item xs={6} style={{ width: "693px" }}>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src="https://mcdn.nhanh.vn/store/7136/bn/Banner_vuo__ng_lo____n.jpg"
                  />
                </Grid>
                <Grid
                  item
                  xs={6}
                  style={{
                    width: "100%",
                    display: "flex",
                    flexWrap: "wrap",
                    maxHeight: "686px",
                  }}
                >
                  <Grid item xs={6}>
                    <img
                      style={{ width: "100%", height: "346px" }}
                      src="https://mcdn.nhanh.vn/store/7136/bn/Tha__ng_5_Banner_vuo__ng_nho____tra__i_tre__n_.jpg"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <img
                      style={{ width: "100%", height: "346px" }}
                      src="https://mcdn.nhanh.vn/store/7136/bn/Banner_vuo__ng_nho____pha__i_tre__n_.jpg"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <img
                      style={{ width: "100%", height: "346px" }}
                      src="https://mcdn.nhanh.vn/store/7136/bn/Tha__ng_5_Banner_vuo__ng_nho____tra__i_du__o____i_.jpg"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <img
                      style={{ width: "100%", height: "346px" }}
                      src="https://mcdn.nhanh.vn/store/7136/bn/Banner_vuo__ng_nho____pha__i_du__o____i_.jpg"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </div>
            <div className="newArrivals">
              <div className="newArrivals-title">
                <h2>NEW ARRIVALS</h2>
                <Grid container spacing={1}>
                  <Grid item xs={3}>
                    <img style={{ maxWidth:"270px" , maxHeight : "415px"}}src="https://mcdn.nhanh.vn/store/7136/ps/20220210/10022022090240_22122021091234_non_bucket_A2NBK12108_toto_shop__1__thumb1.jpg" />
                    <div className="price" style={{ textAlign : "center" }}>1110000 VNĐ</div>
                  </Grid>
                  <Grid item xs={3}>
                    <img style={{ maxWidth:"270px" , maxHeight : "415px"}}src="https://mcdn.nhanh.vn/store/7136/ps/20220210/10022022090240_22122021091234_non_bucket_A2NBK12108_toto_shop__1__thumb1.jpg" />
                    <div className="price" style={{ textAlign : "center" }}>1110000 VNĐ</div>
                  </Grid>
                  <Grid item xs={3}>
                    <img style={{ maxWidth:"270px" , maxHeight : "415px"}}src="https://mcdn.nhanh.vn/store/7136/ps/20220210/10022022090240_22122021091234_non_bucket_A2NBK12108_toto_shop__1__thumb1.jpg" />
                    <div className="price" style={{ textAlign : "center" }}>1110000 VNĐ</div>
                  </Grid>
                  <Grid item xs={3}>
                    <img style={{ maxWidth:"270px" , maxHeight : "415px"}}src="https://mcdn.nhanh.vn/store/7136/ps/20220210/10022022090240_22122021091234_non_bucket_A2NBK12108_toto_shop__1__thumb1.jpg" />
                    <div className="price" style={{ textAlign : "center" }}>1110000 VNĐ</div>
                  </Grid>
                  <Grid item xs={3}>
                    <img style={{ maxWidth:"270px" , maxHeight : "415px"}}src="https://mcdn.nhanh.vn/store/7136/ps/20220210/10022022090240_22122021091234_non_bucket_A2NBK12108_toto_shop__1__thumb1.jpg" />
                    <div className="price" style={{ textAlign : "center" }}>1110000 VNĐ</div>
                  </Grid>
                  <Grid item xs={3}>
                    <img style={{ maxWidth:"270px" , maxHeight : "415px"}}src="https://mcdn.nhanh.vn/store/7136/ps/20220210/10022022090240_22122021091234_non_bucket_A2NBK12108_toto_shop__1__thumb1.jpg" />
                    <div className="price" style={{ textAlign : "center" }}>1110000 VNĐ</div>
                  </Grid>
                </Grid>
              </div>
            </div>
            <Footer />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
export default Home;
