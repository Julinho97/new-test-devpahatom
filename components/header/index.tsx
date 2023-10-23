import PropTypes from "prop-types";
import React from "react";
import Image from "next/image";
// import "./style.css";

export const Header = ({ property1 }) => {
    return (
        <nav className="">
            <div className="header  ">
                <div className={`group ${property1} right-12 `}>
                    {property1 === "default" && (
                        <>
                            <div className="text-wrapper ">Souleymane</div>
                            <div className="ellipse">
                            <Image
                                src="/images/ellipse-1.png"
                                width={50}
                                height={50}
                                alt="Souleymaner"
                            /></div>
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
