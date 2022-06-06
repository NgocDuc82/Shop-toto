import React from "react";
// import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
// import Button from "@mui/material/Button";
import NavBar from '../../shared/NavBar/NavBar'
import Header from '../../shared/Header/Header'
import Footer from '../../shared/Footer/Footer'
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
            <Footer />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
export default Home;
