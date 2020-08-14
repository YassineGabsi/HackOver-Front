import React from "react";
import "./about.sass";

function About(props) {
    return (
        <div className="container middle-content">
            <div className="row d-flex justify-content-center ">
                <div className="col-lg-4 col-md-12 col-sm-12">
                    <img className="img-fluid vivify pullUp delay-150" src={require("../../img/about_us.png")} alt=""/>
                </div>
                <div className="col-lg-8 mt-3">
                    <p className="fadeIn vivify">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyLorem ipsum dolor sit
                        amet,
                        consetetur sadipscing elitr, sed diam nonumyLorem ipsum dolor sit amet, consetetur sadipscing
                        elitr,
                        sed diam nonumyLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyLorem ipsum dolor sit
                        amet,
                        consetetur sadipscing elitr, sed diam nonumyLorem ipsum dolor sit amet, consetetur sadipscing
                        elitr,
                        sed diam nonumyLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyLorem ipsum dolor sit
                        amet,
                        consetetur sadipscing elitr, sed diam nonumyLorem ipsum dolor sit amet, consetetur sadipscing
                        elitr,
                        sed diam nonumyLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy</p>
                </div>
                <h1 className=" col-12 big-titles my-5 vivify flipInX delay-150 text-center"> "<span
                    className="red-colored">Alone </span> we can do so little, <span className="red-colored"> together</span>, we can do so much"</h1>
                <div className="col-lg-4 col-md-12 col-sm-12">
                    <img className="img-fluid vivify pullUp delay-150" src={require("../../img/what-hackathons.png")} alt=""/>
                </div>
                <div className="col-lg-8 mt-3">
                    <h2 className="brand vivify popIn">What are hackathons ?</h2>
                    <p className="fadeIn vivify">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyLorem ipsum dolor sit
                        amet,
                        consetetur sadipscing elitr, sed diam nonumyLorem ipsum dolor sit amet, consetetur sadipscing
                        elitr,
                        sed diam nonumyLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyLorem ipsum dolor sit
                        amet,
                        consetetur sadipscing elitr, sed diam nonumyLorem ipsum dolor sit amet, consetetur sadipscing
                        elitr,
                        sed diam nonumyLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyLorem ipsum dolor sit
                        amet,
                        consetetur sadipscing elitr, sed diam nonumyLorem ipsum dolor sit amet, consetetur sadipscing
                        elitr,
                        sed diam nonumyLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy</p>
                </div>
            </div>
        </div>
    );
}

export default About;
