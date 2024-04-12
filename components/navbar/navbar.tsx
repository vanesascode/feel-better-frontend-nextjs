"use client";

import { selectAuth } from "@/redux/features/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout } from "@/redux/features/authSlice";
import { useRouter } from "next/navigation";
import { useState } from "react";
import LinksHorizontalNavbar from "./linksHorizontalNavbar";
import { useHandleNavbarVisibility } from "@/hooks/useHandleNavbarVisibility";
import { useHandleVerticalNavbarOpening } from "@/hooks/useHandleVerticalNavbarOpening";

const Navbar = () => {
  const [showOptionsPracticeMenu, setShowOptionsPracticeMenu] =
    useState<boolean>(false);
  const router = useRouter();
  const { name } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();
  const { navbarHidden } = useHandleNavbarVisibility();
  const { showOptionsNavbar, setShowOptionsNavbar, darkBackground } =
    useHandleVerticalNavbarOpening();

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
  );
};

export default Navbar;
