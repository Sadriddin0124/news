"use client";
import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { languages } from "@/app/lib/languages";
import { getNews } from "@/app/api-service/home.service";
import Image from "next/image";
import English from "@/public/flags/en.png"
import Russian from "@/public/flags/ru.svg"
import Spanish from "@/public/flags/spanish.png"
import Arabic from "@/public/flags/arabic.svg"
import Chinese from "@/public/flags/china.png"
import Dutch from "@/public/flags/dutch.svg"
import Korean from "@/public/flags/korean.jpg"
import French from "@/public/flags/french.png"
import German from "@/public/flags/german.svg"
import Italy from "@/public/flags/italian.png"
import Japanese from "@/public/flags/japan.svg"
import Norway from "@/public/flags/norway.webp"
import Portugal from "@/public/flags/portugaly.png"
import Swedish from "@/public/flags/swedish.svg"
import { getNewsSearch } from "@/app/api-service/search.service";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {/* <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
            <FitnessCenterIcon />
        </IconButton>
        <p>Sport</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
            <TimeToLeaveIcon />
        </IconButton>
        <p>Car</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem> */}
    </Menu>
  );
  const [defaultLang, setDefaultLang] = React.useState<string | undefined>("")
  React.useEffect(()=> {
    let id = sessionStorage.getItem("lang_id")
    if (id) {
      setDefaultLang(id)
    }else {
      setDefaultLang("en")
    }
  },[])
  const [flags, setFlags] = React.useState([
    {value: "en", img: English},
    {value: "ru", img: Russian},
    {value: "es", img: Spanish},
    {value: "ar", img: Arabic},
    {value: "zh", img: Chinese},
    {value: "nl", img: Dutch},
    {value: "ko", img: Korean},
    {value: "fr", img: French},
    {value: "de", img: German},
    {value: "it", img: Italy},
    {value: "jp", img: Japanese},
    {value: "no", img: Norway},
    {value: "pt", img: Portugal},
    {value: "sv", img: Swedish},
  ])
  console.log(defaultLang);
  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let value = e.target.value
    getNews(value)
    setDefaultLang(value)
    sessionStorage.setItem("lang_id", value)
    window.location.reload()
  } 
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let value = e.target.value
    getNewsSearch(defaultLang, value)
  }
  return (
    <Box sx={{ flexGrow: 1, position: "fixed", width: "100%" }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            News
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={handleSearch}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { display: "flex" } }}>
            {
              flags?.filter(item=> item?.value === defaultLang)?.map((item,index)=> {
                return <Image src={item?.img} alt="lang_flag" width={40} height={20} key={index}/>
              })
            } 
            <select className="w-[110px] bg-transparent cursor-pointer outline-none" value={defaultLang} onChange={changeLanguage}>
              <option value="" className="text-black cursor-pointer">Select language</option>
              {languages?.map((item, index) => {
                return (
                  <option
                    value={item?.value}
                    key={index}
                    className="text-black cursor-pointer"
                  >
                    {item?.title}
                  </option>
              );
            })}
            </select>
          </Box>
          {/* <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box> */}
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
