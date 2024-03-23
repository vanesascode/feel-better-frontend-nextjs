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
        setDarkBackground(true);
      } else {
        document.body.style.overflow = "auto";
        setDarkBackground(false);
        setShowOptionsPracticeMenu(false);
      }
    };
    window.addEventListener("resize", handleScrollActivation);
    return () => {
      window.removeEventListener("resize", handleScrollActivation);
    };
  }, [showOptionsNavbar]);

  const handleLogout = () => {
    dispatch(logout());
    setShowOptionsNavbar(false);
    router.push("/login");
  };

  const toggleOptionsPracticeMenu = () => {
    setShowOptionsPracticeMenu(!showOptionsPracticeMenu);
    setChevronIconRotation(!chevronIconRotation);
  };

  const handleShowOptionsNavbar = () => {
    setShowOptionsPracticeMenu(false);
    setShowOptionsNavbar(!showOptionsNavbar);
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
        handleShowOptionsNavbar={handleShowOptionsNavbar}
      />
    </>
  );
}

export default Navbar;
