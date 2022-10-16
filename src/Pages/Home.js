import React from "react";
import '../SCSS/Style.css'

function Home(){
    return(
        <section className="containerloginscreen">
            <div className="containerloginscreen__containerform">
                <label className="containerloginscreen__containerform_header" htmlFor="">
                A melhor plataforma 
                para acompanhar seus investimentos...
                </label>
                <div className="containerloginscreen__containerform">
                <label>Email address</label>
                <input
                  type="email"
                  className="containerloginscreen__containerform_input"
                  placeholder="Enter email"
                />
                <div className="containerloginscreen__containerform_label">
                  <label>Password</label>
                <input
                  type="password"
                  className="containerloginscreen__containerform_input"
                  placeholder="Enter password"
                />
                </div>
            </div>
        </div>
        </section>
    )
}
export default Home