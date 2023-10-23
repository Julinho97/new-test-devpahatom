import PropTypes from "prop-types";
import React from "react";
// import "./style.css";

export const Header = ({ property1, ellipse = "ellipse-1.png" }) => {
    return (
        <nav className="">
            <div className="header  ">
                <div className={`group ${property1} right-12 `}>
                    {property1 === "default" && (
                        <>
                            <div className="text-wrapper ">Souleymane</div>
                            <img className="ellipse" alt="Souleymane" src={'/images/ellipse-1.png'} />
                        </>
                    )}

                    {property1 === "mockup" && (
                        <>
                            <div className="rectangle" />
                            <div className="div" />
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

Header.propTypes = {
    property1: PropTypes.oneOf(["mockup", "default"]),
    ellipse: PropTypes.string,
};
