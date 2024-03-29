"use client";

import { selectAuth } from "@/redux/features/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout } from "@/redux/features/authSlice";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import LinksHorizontalNavbar from "./linksHorizontalNavbar";

const Navbar = () => {
  const [showOptionsNavbar, setShowOptionsNavbar] = useState<boolean>(false);
  const [showOptionsPracticeMenu, setShowOptionsPracticeMenu] =
    useState<boolean>(false);
  const [navbarHidden, setNavbarHidden] = useState<boolean>(false);
  const [prevScrollPosition, setPrevScrollPosition] = useState<number>(0);
  const [darkBackground, setDarkBackground] = useState<boolean>(false);
  const router = useRouter();
  const { name } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleNavbarVisibility = () => {
      const currentScrollPosition = window.pageYOffset;
      if (
        currentScrollPosition > prevScrollPosition &&
        currentScrollPosition > 100
      ) {
        setNavbarHidden(true);
      } else {
        setNavbarHidden(false);
      }
      setPrevScrollPosition(currentScrollPosition);
    };
    window.addEventListener("scroll", handleNavbarVisibility);
    return () => {
      window.removeEventListener("scroll", handleNavbarVisibility);
    };
  }, [prevScrollPosition]);

  useEffect(() => {
    const handleScrollActivation = () => {
      if (showOptionsNavbar && window.innerWidth < 1024) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    };
    handleScrollActivation();
    window.addEventListener("resize", handleScrollActivation);
    return () => {
      window.removeEventListener("resize", handleScrollActivation);
    };
  }, [showOptionsNavbar]);

  useEffect(() => {
    const handleDarkBackgroundVisualization = () => {
      if (showOptionsNavbar && window.innerWidth < 1024) {
        setDarkBackground(true);
      } else {
        setDarkBackground(false);
      }
    };
    handleDarkBackgroundVisualization();
    window.addEventListener("resize", handleDarkBackgroundVisualization);
    return () => {
      window.removeEventListener("resize", handleDarkBackgroundVisualization);
    };
  });

  const handleLogout = () => {
    dispatch(logout());
    setShowOptionsNavbar(false);
    router.push("/login");
  };

  const handleShowOptionsNavbar = () => {
    setShowOptionsPracticeMenu(false);
    setShowOptionsNavbar(!showOptionsNavbar);
  };

  return (
    <>
      <LinksHorizontalNavbar
        showOptionsNavbar={showOptionsNavbar}
        setShowOptionsNavbar={setShowOptionsNavbar}
        navbarHidden={navbarHidden}
        darkBackground={darkBackground}
        name={name}
        handleLogout={handleLogout}
        showOptionsPracticeMenu={showOptionsPracticeMenu}
        setShowOptionsPracticeMenu={setShowOptionsPracticeMenu}
        handleShowOptionsNavbar={handleShowOptionsNavbar}
      />
    </>
  );
};

export default Navbar;
