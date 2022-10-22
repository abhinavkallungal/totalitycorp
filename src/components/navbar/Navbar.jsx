import { useRef, useState } from "react";
import React from "react";
import Logo from "../../assets/images/logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import MenuIcon from "@mui/icons-material/Menu";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import RedditIcon from '@mui/icons-material/Reddit';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import "./Navbar.scss";

function Navbar() {
  const ref=useRef()
  const [mobileMenu,setMobileMenu] =useState(false)
  
  const toggleMobileMenu =()=>{
    setMobileMenu(mobileMenu=> !mobileMenu)
  }
  
  window.addEventListener('scroll',()=>{
    console.log(window.scrollY)
    window.scrollY > 100 ? ref.current.classList.add('active') : ref.current.classList.remove('active')
    console.log(ref.current.classList)
  })

  return (
    <div className="Navbar" >
      <div className="nav" ref={ref}>
        <div className="navbarLogo">
          <div className="logoWrapper">
            <img src={Logo} className="logo" alt="" height="40px" />
            <h3 className="logoName">OpenSea</h3>
          </div>
        </div>
        <div className="desktopNav">
          <div className="desktopNavContainer">
            <div className="searchWrapper">
                <div className="searchbar">
                  <SearchIcon/>
                  <input type="text" placeholder='Search items, collections, and accounts' />
                </div>
            </div>
            <div className="navItemWrapper">
                <div className="navList">
                  <div className="navItems">
                    <span>Explore</span>
                  </div>
                  <div className="navItems">
                    <span>Stats</span>
                  </div>
                  <div className="navItems">
                    <span>Resources</span>
                  </div>
                  <div className="navItems">
                    <span>Create</span>
                  </div>
                  <div className="navItems">
                    <span><AccountCircleOutlinedIcon/></span>
                  </div>
                  <div className="navItems">
                    <span><AccountBalanceWalletOutlinedIcon/></span>
                  </div>
                  <div className="navItems">
                    <span><ShoppingCartOutlinedIcon/></span>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <div className="mobileNavIcon">
          <div className="navItem mobileSearch">
            <SearchIcon sx={{ fontSize: 32 }} />
          </div>
          <div className="navItem">
            <ShoppingCartOutlinedIcon sx={{ fontSize: 32 }} />
          </div>
          <div className="navItem">
            <MenuIcon sx={{ fontSize: 32 }} onClick={toggleMobileMenu} />
          </div>
        </div>
      </div>
      <div className={mobileMenu ? "mobileNav active " :"mobileNav" }>
        <div className="navList">
          <div className="navItem">
            <div className="name">
              <ExploreOutlinedIcon sx={{ fontSize: 32 }} />
              <span>Explore</span>
            </div>
            <div className="arrow">
              <KeyboardArrowRightOutlinedIcon sx={{ fontSize: 32 }} />
            </div>
          </div>
          <div className="navItem">
            <div className="name">
              <BarChartOutlinedIcon sx={{ fontSize: 32 }} />
              <span>Stats</span>
            </div>
            <div className="arrow">
              <KeyboardArrowRightOutlinedIcon sx={{ fontSize: 32 }} />
            </div>
          </div>
          <div className="navItem">
            <div className="name">
              <LibraryBooksOutlinedIcon sx={{ fontSize: 32 }} />
              <span>Resources</span>
            </div>
            <div className="arrow">
              <KeyboardArrowRightOutlinedIcon sx={{ fontSize: 32 }} />
            </div>
          </div>
          <div className="navItem">
            <div className="name">
              <CreateOutlinedIcon sx={{ fontSize: 32 }} />
              <span>Create</span>
            </div>
          </div>
          <div className="navItem">
            <div className="name">
              <LanguageOutlinedIcon sx={{ fontSize: 32 }} />
              <span>Language</span>
            </div>
            <div className="arrow">
              <KeyboardArrowRightOutlinedIcon sx={{ fontSize: 32 }} />
            </div>
          </div>
          <div className="navItem">
            <div className="name">
              <ModeNightIcon sx={{ fontSize: 32 }} />
              <span>Night mode</span>
            </div>
            <div className="arrow">
              <KeyboardArrowRightOutlinedIcon sx={{ fontSize: 32 }} />
            </div>
          </div>
        </div>
        <div className="bottom">
            <div className="button">
                <button className="btn ">Connect wallet</button>
            </div>

        <div className="footer">
            <div className="socialIcons">
                    <div className="icon">
                    <TwitterIcon/>
                    </div>
                    <div className="icon">
                    <InstagramIcon/>
                    </div>
                    <div className="icon">
                    <RedditIcon/>
                    </div>
                    <div className="icon">
                    <YouTubeIcon/>
                    </div>
                    <div className="icon">
                    <MusicNoteIcon/>
                    </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
