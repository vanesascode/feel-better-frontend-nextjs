"use client";

import { selectAuth } from "@/redux/features/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout } from "@/redux/features/authSlice";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import NavbarLinks from "./navbarLinks";

function Navbar() {
  const [showOptionsNavbar, setShowOptionsNavbar] = useState<boolean>(false);
  const [showOptionsPracticeMenu, setShowOptionsPracticeMenu] =
    useState<boolean>(false);
  const [navbarHidden, setNavbarHidden] = useState<boolean>(false);
  const [prevScrollPosition, setPrevScrollPosition] = useState<number>(0);
  const [darkBackground, setDarkBackground] = useState<boolean>(false);
  const [chevronIconRotation, setChevronIconRotation] =
    useState<boolean>(false);
  const router = useRouter();
  const { name } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleScrollMotion = () => {
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
    window.addEventListener("scroll", handleScrollMotion);
    return () => {
      window.removeEventListener("scroll", handleScrollMotion);
    };
  }, [prevScrollPosition]);

  useEffect(() => {
    const handleScroll = () => {
      if (showOptionsNavbar && window.innerWidth < 1024) {
        document.body.style.overflow = "hidden";
        setDarkBackground(true);
      } else {
        document.body.style.overflow = "auto";
        setDarkBackground(false);
      }
    };
    handleScroll();
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("resize", handleScroll);
    };
  }, [showOptionsNavbar]);

  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };

  const toggleOptionsPracticeMenu = () => {
    setShowOptionsPracticeMenu(!showOptionsPracticeMenu);
    setChevronIconRotation(!chevronIconRotation);
  };

  return (
    <>
      <NavbarLinks
        showOptionsNavbar={showOptionsNavbar}
        setShowOptionsNavbar={setShowOptionsNavbar}
        navbarHidden={navbarHidden}
        darkBackground={darkBackground}
        name={name}
        toggleOptionsPracticeMenu={toggleOptionsPracticeMenu}
        chevronIconRotation={chevronIconRotation}
        handleLogout={handleLogout}
        showOptionsPracticeMenu={showOptionsPracticeMenu}
      />
    </>
  );
}

export default Navbar;
