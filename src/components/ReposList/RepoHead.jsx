import React from "react";
import { BiBook } from "react-icons/bi";
import { GoRepo } from "react-icons/go";
import { FiPackage } from "react-icons/fi";
import { AiOutlineLayout } from "react-icons/ai";
import { IoIosStarOutline } from "react-icons/io";
import "./ReposList.css";

export default function RepoHead({profile}) {
  return (
    <div className="head">
      <div className="headItem">
        <BiBook style={{ marginRight: ".5rem" }} />
        <h3>Overview</h3>
      </div>
      <div className="headItem">
        <GoRepo style={{ marginRight: ".5rem" }} />
        <h3>
          Repositories
          <span>{profile.public_repos}</span>
        </h3>
      </div>
      <div className="headItem">
        <AiOutlineLayout style={{ marginRight: ".5rem" }} />
        <h3>Projects</h3>
      </div>
      <div className="headItem">
        <FiPackage style={{ marginRight: ".5rem" }} />
        <h3>Packages</h3>
      </div>
      <div className="headItem">
        <IoIosStarOutline style={{ marginRight: ".5rem" }} />
        <h3>
          Stars
          <span>{profile.public_gists}</span>
        </h3>
      </div>
    </div>
  );
}
