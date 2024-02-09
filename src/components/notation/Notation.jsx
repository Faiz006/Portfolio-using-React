import React from "react";
import "./notation.css";

function Notation() {
  return (
    <section>
        <footer className="new_footer_area bg_color">
        <div className="new_footer_top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s">
                  <h3 className="f-title f_600 t_color f_size_18">Get in Touch</h3>
                  <div className="f_social_icon">
                    <a href="https://www.facebook.com/profile.php?id=100011238786004" className="fab fa-facebook"></a>
                    <a href="https://github.com/Faiz006/Faiz006" className="fab fa-github"></a>
                    <a href="https://www.linkedin.com/in/faiz-alam-36462a21b/" className="fab fa-linkedin"></a>
                    <a href="https://www.instagram.com/faizz_alam/" className="fab fa-instagram"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer_bg">
            <div className="footer_bg_one"></div>
            <div className="footer_bg_two"></div>
          </div>
        </div>
        <div className="footer_bottom">
        </div>
      </footer>
    </section>
  )
}

export default Notation

