import PropTypes from "prop-types";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export const InputMenu = ({ state, page }) => {
  return (
    <>
      <div className={`input-menu ${page} text-orange-950`}>
        {page === "dashboard" && (
          <>
            <div className="rectangle" />
            <div className=" relative flex gap-2 right-1 ">
              <Image
                src="/icon/dashboaed-1.svg"
                width={22}
                height={22}
                color=" rgba(21, 163, 110, 1)"
                alt="Souleymaner"
              />

              <div className="div">
                {" "}
                <Link href="/">Tableau de bord</Link>{" "}
              </div>
            </div>
          </>
        )}

        {page === "campaign" && (
          <Image
            src="/icon/megaphone-1.svg"
            width={22}
            height={22}
            color=" rgba(21, 163, 110, 1)"
            alt="icon"
          />
        )}

        {page === "influencer" && (
          <Image src="/icon/group-11.svg" width={22} height={22}
          color=" rgba(21, 163, 110, 1)" alt="icon" />
        )}

        {["campaign", "influencer"].includes(page) && (
          <div className="div">
            {page === "campaign" && <>Campagnes</>}

            {page === "influencer" && <>Influenceurs</>}
          </div>
        )}

        {page === "activity" && (
          <>
            <Image src="/icon/list-1.svg" width={22} height={22}
            color=" rgba(21, 163, 110, 1)" alt="icon" />

            <div className="div">Activités</div>
          </>
        )}

        {page === "conversion" && (
          <>
            <Image
              src="/icon/convertir-1.svg"
              width={22}
              height={22}
              color=" rgba(21, 163, 110, 1)"
              alt="icon"
            />
            <div className="div">Conversions</div>
          </>
        )}

        {page === "settings" && (
          <>
            <Image
              src="/icon/setting-1.svg"
              width={22}
              height={22}
              color=" rgba(21, 163, 110, 1)"
              alt="icon"
            />

            <div className="div">Paramètres</div>
          </>
        )}

        {page === "logout" && (
          <>
            <Image
              src="/icon/exit-door.svg"
              width={22}
              height={22}
              color=" rgba(21, 163, 110, 1)"
              alt="icon"
            />
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
