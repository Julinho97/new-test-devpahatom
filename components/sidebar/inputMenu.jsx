import PropTypes from "prop-types";
import React from "react";
import Link from 'next/link';

export const InputMenu = ({ state, page }) => {
    return (
        <>
        
            <div className={`input-menu ${page} text-orange-950`}>
                {page === "dashboard" && (
                    <>
                        <div className="rectangle" />
                        <div className=" relative flex gap-2 right-1 ">
                        <img src={'/icon/dashboaed-1.svg'}/>
                            <div className="div"> <Link href="/">Tableau de bord</Link> </div>
                        </div>
                    </>
                )}

                {page === "campaign" && <img src={'/icon/megaphone-1.svg'}/>}

                {page === "influencer" && <img src={'/icon/group-11.svg'}/>}

                {["campaign", "influencer"].includes(page) && (
                    <div className="div">
                        {page === "campaign" && <>Campagnes</>}

                        {page === "influencer" && <>Influenceurs</>}
                    </div>
                )}

                {page === "activity" && (
                    <>
                    <img src={'/icon/list-1.svg'}/>
                        <div className="div">Activités</div>
                    </>
                )}

                {page === "conversion" && (
                    <>
                    <img src={'/icon/convertir-1.svg'}/>
                        <div className="div">Conversions</div>
                    </>
                )}

                {page === "settings" && (
                    <>
                    <img src={'/icon/setting-1.svg'}/>
                        <div className="div">Paramètres</div>
                    </>
                )}

                {page === "logout" && (
                    <>
                    <img src={'/icon/exit-door.svg'}/>
                        <div className="div">Déconnexion</div>
                    </>
                )}

                
            </div>
        </>
    );
};

InputMenu.propTypes = {
    state: PropTypes.oneOf(["inactive", "active"]),
    page: PropTypes.oneOf([
        "dashboard",
        "influencer",
        "activity",
        "logout",
        "facturation",
        "settings",
        "conversion",
        "profil",
        "campaign",
    ]),
};
