import PropTypes from "prop-types";
import React from "react";
import { InputMenu } from "./inputMenu";
import Link from 'next/link';
// import "./style.css";

export const Sidebar = ({
    page,
    text = "Vimpopuli",
}) => {
    return (
        <aside className="fixed top-0 left-0 z-50 w-auto h- transition-transform -translate-x-full sm:translate-x-2" >

        <div className="sidebar fixed h-full">
            <div className="frame-2">
            
                <img src="/images/logo.svg" alt="Logo vimpopuli " srcset="" />
                <div className="vimpopuli mb-10"><Link href="/">{text}</Link></div>
            </div>
            <div className="div-2">
                <div className={`general ${page}`}>
                    {page === "dashboard" && (
                        <>
                            <InputMenu className="input-menu-instance root "  page="dashboard" state="active" />
                            <InputMenu page="campaign" state="inactive" />
                            <InputMenu frameClassName="instance-node" page="influencer" state="inactive" />
                            <InputMenu page="activity" state="inactive" />
                            <InputMenu page="conversion" state="inactive" />
                        </>
                    )}

                    {page === "mockup" && (
                        <>
                            <div className="rectangle-2" />
                            <div className="rectangle-2" />
                            <div className="rectangle-2" />
                            <div className="rectangle-2" />
                            <div className="rectangle-2" />
                        </>
                    )}
                </div>
                <div className={`general-2 page-${page}`}>
                    {page === "dashboard" && (
                        <>
                            <InputMenu page="settings" state="inactive" />
                            <InputMenu page="logout" state="inactive" />
                        </>
                    )}

                    {page === "mockup" && (
                        <>
                            <div className="rectangle-2" />
                            <div className="rectangle-2" />
                        </>
                    )}
                </div>
            </div>
        </div>
        </aside>
    );
};

Sidebar.propTypes = {
    page: PropTypes.oneOf(["dashboard", "mockup"]),
    text: PropTypes.string,
};
