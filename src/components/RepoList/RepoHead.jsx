import React from "react";
import { BiBook } from "react-icons/bi";
import { GoRepo } from "react-icons/go";
import { FiPackage } from "react-icons/fi";
import { AiOutlineLayout } from "react-icons/ai";
import { IoIosStarOutline } from "react-icons/io";
import "./RepoList.css";

export default function RepoHead({profile}) {
  return (
    <div className="head">
      <div className="headItem">
        <BiBook className="headIcon" />
        <h3>Overview</h3>
      </div>
      <div className="headItem">
        <GoRepo className="headIcon" />
        <h3 style={{color: "#58a6ff"}}>
          Repositories
          <span>{profile.public_repos}</span>
        </h3>
      </div>
      <div className="headItem">
        <AiOutlineLayout className="headIcon" />
        <h3>Projects</h3>
      </div>
      <div className="headItem">
        <FiPackage className="headIcon" />
        <h3>Packages</h3>
      </div>
      <div className="headItem">
        <IoIosStarOutline className="headIcon" />
        <h3>
          Stars
          <span>{profile.public_gists}</span>
        </h3>
      </div>
    </div>
  );
}
