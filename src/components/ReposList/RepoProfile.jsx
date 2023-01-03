import React from "react";
import { BiBuildings } from "react-icons/bi";
import { FiLink, FiUsers } from "react-icons/fi";
import { BsDot } from "react-icons/bs";

export default function RepoProfile({profile}) {
  return (
    <ErrorBoundary>
            <div className="profile">
              <img
                src={profile.avatar_url}
                alt="Avatar"
                className="imageAavatar"
              />
              <div className="identity">
                <h2 className="profileName">{profile.name} </h2>
                <p className="profileLogin">{profile.login} </p>
              </div>
              <div className="bio">
                <p className="bioText">{profile.bio} </p>
              </div>
              <div className="follows">
                <div className="followers">
                  <FiUsers style={{ marginRight: ".5rem" }} />
                  <p>
                    <span className="textBold">{profile.followers} </span>
                    followers
                  </p>
                </div>
                <BsDot fill="#c9d1d9" />
                <div className="following">
                  <p>
                    <span className="textBold">{profile.following} </span>
                    following
                  </p>
                </div>
              </div>
              <div className="locate">
                <div className="company">
                  <BiBuildings style={{ marginRight: ".5rem" }} />
                  {profile.company && <p> {profile.company} </p>}
                </div>
                <div className="blog">
                  <FiLink style={{ marginRight: ".5rem" }} />
                  {profile.blog && <p> {profile.blog} </p>}
                </div>
              </div>
            </div>
          </ErrorBoundary>
  );
}
