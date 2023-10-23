import PropTypes from "prop-types";
import React from "react";
import  Image from "next/image"

import { Button } from "/components/ui/button";

export const Info = ({ col, className }) => {
  return (
    // view info
    <div className={`info ${col} ${className}`}>
      {["profil", "col-4"].includes(col) && (
        <>
          <div className="frame-3">
            {["col-4", "profil"].includes(col) && (
              <div className="frame-4  justify-between flex pl-3  p-4">
                {col === "profil" && (
                  <Image
                  src="/images/ellipse-1.png"
                  width={50}
                  height={50}
                  color=" rgba(21, 163, 110, 1)"
                  alt="Souleymaner"
                />
  
                )}
                <div className="div-2">
                  {col === "profil" && (
                    <>
                      <div className="text-wrapper-3">Souleymane</div>
                      <div className="text-wrapper-4">@JulDevphantom213</div>
                      <div className="text-wrapper-5 ">Profil vérifier</div>
                    </>
                  )}
                </div>
                <div className="btn  relative ml-[22px]">
                  <Button
                    variant="outline"
                    size="lg"
                    className=" text-white relative ml-[333px] rounded-lg border-solid hover:bg-lime-40 box-border bg-green-700"
                  >
                    Rechercher
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/*  Info */}
          <div className="frame-5">
            {["col-4", "profil"].includes(col) && (
              <>
                <div className="frame-10">
                  <div className="frame-7">
                    <div className="genre">
                      {col === "profil" && <>Genre</>}
                    </div>
                    <div className="homme">
                      {col === "profil" && <>Homme</>}
                    </div>
                  </div>
                  <div className="frame-7">
                    <div className="cr-dit-de-campagne">
                      {col === "profil" && <>Localisation</>}
                    </div>
                    <div className="element">
                      {col === "profil" && <>Ile-de-Senegal</>}
                    </div>
                  </div>
                  <div className="frame-7">
                    <div className="m-dia-de-la-campagne">
                      {col === "profil" && <>Pays</>}
                    </div>
                    <div className="tout-voir">
                      {col === "profil" && <>Senegal</>}
                    </div>
                  </div>
                </div>
              </>
            )}
            {["col-4", "profil"].includes(col) && (
              <div className="stats-3">
                {col === "profil" && (
                  <>
                    <div className="frame-7">
                      <div className="div-5">Note</div>
                      <div className="frame-12">
                        <div className="div-6">15</div>
                        <div className="ellipse-2" />
                      </div>
                    </div>
                    <div className="frame-7">
                      <div className="div-5">Catégorie</div>
                      <div className="div-6">Sneakers</div>
                    </div>
                    <div className="frame-7">
                      <div className="div-5">Taux de conversion</div>
                      <div className="div-6">4%</div>
                    </div>
                  </>
                )}
              </div>
            )}

            {["col-4", "profil"].includes(col) && (
              <div className="stats-3">
                {col === "profil" && (
                  <>
                    <div className="frame-7">
                      <div className="div-5">Note</div>
                      <div className="frame-12">
                        <div className="div-6">15</div>
                        <div className="ellipse-2" />
                      </div>
                    </div>
                    <div className="frame-7">
                      <div className="div-5">Catégorie</div>
                      <div className="div-6">Sneakers</div>
                    </div>
                    <div className="frame-7">
                      <div className="div-5">Taux de conversion</div>
                      <div className="div-6">4%</div>
                    </div>
                  </>
                )}
              </div>
            )}

            {/*  Taux d */}

            <div className={`stats `}>
              <div className="frame">
                <>
                  <div className="text-wrapper">7%</div>
                  <div className="div-wrapper">
                    <div className="text-wrapper-2">12%</div>
                  </div>
                </>
              </div>
              <div className="element">
                <div className="taux-d-engagement">Taux d’engagement</div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

Info.propTypes = {
  col: PropTypes.oneOf(["profil", "col-4"]),
  ellipse: PropTypes.string,
  buttonText: PropTypes.string,
};
