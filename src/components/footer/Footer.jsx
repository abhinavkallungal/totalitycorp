import React from "react";

import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import RedditIcon from "@mui/icons-material/Reddit";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

import "./footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="head">
          <div className="subscribe">
            <h4>Stay in the loop</h4>
            <span>
              Join our mailing list to stay in the loop with our newest feature
              releases, NFT drops, and tips and tricks for navigating OpenSea.
            </span>
            <div className="subscribeInput">
              <div className="input">
                <input type="text" placeholder="Your eamil address" />
              </div>
              <div>
                <button> Sign up</button>
              </div>
            </div>
          </div>
          <div className="community">
            <h4>Join the community</h4>
            <div className="socialLinks">
              <div className="social">
                <TwitterIcon sx={{ fontSize: 30 }} />
              </div>
              <div className="social">
                <InstagramIcon sx={{ fontSize: 30 }} />
              </div>
              <div className="social">
                <RedditIcon sx={{ fontSize: 30 }} />
              </div>
              <div className="social">
                <YouTubeIcon sx={{ fontSize: 30 }} />
              </div>
              <div className="social">
                <MusicNoteIcon sx={{ fontSize: 30 }} />
              </div>
              <div className="social">
                <EmailOutlinedIcon sx={{ fontSize: 30 }} />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="middle">
          <div className="col-lg-4" >
            <img src="https://opensea.io/static/images/logos/opensea-white.svg" width='50px' alt="" />
            <h2>OpenSea</h2>
            <span>
              The world’s first and largest digital marketplace for crypto
              collectibles and non-fungible tokens (NFTs). Buy, sell, and
              discover exclusive digital items.
            </span>
          </div>
          <div className="col-lg-2">
            <h4>Marketplace</h4>
            <div className="links">
              <ul>
                <li>All NFTs</li>
                <li>Solana NFTs</li>
                <li>Art</li>
                <li>Collectibles</li>
                <li>Domain Names</li>
                <li>Music</li>
                <li>Photography</li>
                <li>Sports</li>
                <li>Trading Cards</li>
                <li>Utility</li>
                <li>Virtual Worlds</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2">
            <h4>My Account</h4>
            <div className="links">
              <ul>
                <li>Profile</li>
                <li>Favorites</li>
                <li>Watchlist</li>
                <li>My Collections</li>
                <li>Settings</li>
              </ul>
            </div>
            <h4>Stats</h4>
            <div className="links">
              <ul>
                <li>Rankings</li>
                <li>Activity</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2">
            <h4>Resources</h4>
            <div className="links">
              <ul>
                <li>Learn</li>
                <li>Help Center</li>
                <li>Platform Status</li>
                <li>Partners</li>
                <li>Taxes</li>
                <li>Blog</li>
                <li>Docs</li>
                <li>Newsletter</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2">
            <h4>Company</h4>
            <div className="links">
              <ul>
                <li>About</li>
                <li>Careers</li>
                <li>Ventures</li>
                <li>Grants</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="row">
            <div className="item">© 2018 - 2022 Ozone Networks, Inc</div>
            <div className="item">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
