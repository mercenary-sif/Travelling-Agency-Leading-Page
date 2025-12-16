/* eslint-disable react/jsx-pascal-case */
import React, { useState, useRef, useEffect } from "react";
import { X ,Menu } from "lucide-react";
import { logo } from "./import";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
const NavBar = () => {
        const { t } = useTranslation();
        const [lang, setLang] = useState(i18n.language);
        const [open, setOpen] = useState(false);
        const [openMenu, setOpenMenu] = useState(false);
        const menuRef = useRef(null);
        const toggleRef = useRef(null);
        const closeMenu = () => setOpenMenu(false);
         const toggleLang = (newLang) => {
            setLang(newLang);
            i18n.changeLanguage(newLang);
            localStorage.setItem("lang", newLang);
            document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
            setOpen(false);
          };
       
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    const handleKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  return (
    <div className='relative flex justify-center items-center p-2  py-[1rem] w-[90%]'>
         <div className="flex items-center lg:w-[114.91px] h-[33.99px] mr-auto ">
            <img src={logo} alt="jadoo" className="object-fill w-[100%] h-[100%] " />
         </div>
          <button
            onClick={() => setOpenMenu((o) => !o)}
            className={`absolute flex lg:hidden  ${lang ==='ar' ? "left-[-1rem]" :"right-0"} p-1 rounded hover:bg-[#eee] transition`}
            aria-label="Open menu"
          >
          <Menu className="w-6 h-6 text-[#212832]" />
             </button>
            {openMenu && (
            <Side_Menu
            toggleLang={toggleLang}
            lang={lang}
            open={open}
            setOpen={setOpen}
            closeMenu={closeMenu}
            menuRef={menuRef}
            toggleRef={toggleRef}
                />
            )}
         <div className="w-full flex justify-end items-center gap-2 md:gap-[2rem]">
          <div className={`"w-full hidden lg:flex justify-end items-center p-[1rem] lg:px-[2rem] gap-[1rem] ${lang==='ar'? 'lg:gap-[2rem]': 'lg:gap-[2rem] xl:gap-[4rem]'}`}>
              <NavLinks/>
            </div>
            <div className="hidden md:flex justify-center items-center gap-2 md:gap-[2rem] p-2">
                    <button className={`inline-flex outline-none ${lang === 'ar' ? 'font-font-5 font-bold text-[18px]'  : 'font-font-3 font-medium text-[17px]'} hover:text-[#DF6951] hover:border-[#DF6951]    border-[3px] bg-transparent border-[#212832] rounded-lg justify-center items-center h-[42px] w-[102px] p-[2px] hover:cursor-pointer`}>
                       {t("navbar.signup")}
                    </button>
                    {/* language switcher */}
                    <div className="relative inline-block text-left" aria-live="polite">
                    <button
                        ref={toggleRef}
                        type="button"
                        aria-haspopup="true"
                        aria-expanded={open}
                        onClick={() => setOpen((s) => !s)}
                        className="flex group items-center gap-2 px-3 py-1 rounded-md bg-transparent border-none transition text-sm select-none"
                    >
                        {/* Small text label: EN or العربية */}
                        <p className="text-[14px] font-font-3 font-medium text-[#212832] group-hover:text-[#DF6951]">
                        {lang === "ar" ? "AR" : "EN"}
                        </p>

                        {/* Small arrow */}
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`w-6 h-6 transform transition-transform ${open ? "rotate-180" : "rotate-0"}`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        >
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                        </svg>
                    </button>

                    {/* Dropdown */}
                    <div ref={menuRef} className={`absolute mt-2 min-w-[10rem] rounded-md z-50 ${open ? "block" : "hidden"}`}>
                        <ul
                        role="menu"
                        aria-label="Language menu"
                        className="py-1   border-[3px] bg-transparent border-[#212832] rounded-lg  shadow-lg "
                        >
                        <li
                            role="menuitem"
                            tabIndex={0}
                            onClick={() => toggleLang("en")}
                            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") toggleLang("en"); }}
                            className="px-4 py-2 text-sm cursor-pointer text-[#212832] hover:text-[#DF6951] flex items-center justify-between"
                        >
                            <span>English</span>
                            {lang === "en" && <span aria-hidden>✓</span>}
                        </li>

                        <li
                            role="menuitem"
                            tabIndex={0}
                            onClick={() => toggleLang("ar")}
                            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") toggleLang("ar"); }}
                            className="px-4 py-2 text-sm cursor-pointer text-[#212832] hover:text-[#DF6951] flex items-center justify-between"
                        >
                            <span className="ml-2 font-font-5 text-[18px]">العربية</span>
                            {lang === "ar" && <span aria-hidden>✓</span>}
                        </li>
                        </ul>
                    </div>
                    </div>
            </div>
         </div>
    </div>
  )
}

export default NavBar

const NavLinks = () => {
   const { t , i18n} = useTranslation();
   const lng = i18n.language === 'ar' ? 'ar' : 'en';
  return(
    <>
    <p  id= "dest" className={`hover:cursor-pointer ${lng === 'ar' ? 'font-font-6 font-bold text-[20px]'  : 'font-font-3 font-medium text-[17px]'}  text-[#212832]  hover:text-[#DF6951]`}>{t("navbar.destinations")}</p>
    <p id = "hotels" className={`hover:cursor-pointer ${lng === 'ar' ? 'font-font-6 font-bold text-[20px]'  : 'font-font-3 font-medium text-[17px]'}  text-[#212832]  hover:text-[#DF6951]`}>{t("navbar.hotels")}</p>
    <p id= "flights" className={`hover:cursor-pointer ${lng === 'ar' ? 'font-font-6 font-bold text-[20px]'  : 'font-font-3 font-medium text-[17px]'}  text-[#212832]  hover:text-[#DF6951]`}>{t("navbar.flights")}</p>
    <p id= "bookings" className={`hover:cursor-pointer ${lng === 'ar' ? 'font-font-6 font-bold text-[20px]'  : 'font-font-3 font-medium text-[17px]'}  text-[#212832]  hover:text-[#DF6951]`}>{t("navbar.bookings")}</p>
    <p id= "login" className={`hover:cursor-pointer ${lng === 'ar' ? 'font-font-6 font-bold text-[20px]'  : 'font-font-3 font-medium text-[17px]'}  text-[#212832]  hover:text-[#DF6951]`}>{t("navbar.login")}</p>
  </>
  )
}


const Side_Menu = ({ toggleLang, lang, closeMenu }) => {
  const { t } = useTranslation();
  const [openLangDropdown, setOpenLangDropdown] = useState(false); // separate state

  const options = [
    { id: "dest", label: t("navbar.destinations") },
    { id: "hotels", label: t("navbar.hotels") },
    { id: "flights", label: t("navbar.flights") },
    { id: "bookings", label: t("navbar.bookings") },
    { id: "login", label: t("navbar.login") },
  ];

  return (
    <div className="fixed inset-0 z-50 flex lg:hidden">
      <button
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        aria-hidden="true"
        onClick={closeMenu}
      />

      <aside className="relative ml-auto w-80 max-w-[85%] h-full bg-[#FFF1DA] text-[#212832] shadow-xl transform transition-transform duration-300">
        <div className="flex items-center justify-end p-4 border-b">
          <button onClick={closeMenu} className="p-1 rounded hover:bg-gray-100">
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="p-6">
          <ul className="flex flex-col gap-4">
            {options.map((opt) => (
              <li key={opt.id}>
                <button
                  onClick={() => closeMenu()}
                  className={`w-full text-left ${lang === "ar" ? 'font-font-6 font-bold text-[20px]' : 'font-font-3 font-medium text-[17px]'} hover:text-[#DF6951] px-2 py-2`}
                >
                  {opt.label}
                </button>
              </li>
            ))}
          </ul>

      
          <div className="mt-8 relative">
            <button
              onClick={() => setOpenLangDropdown(!openLangDropdown)}
              className="flex items-center gap-2 px-3 py-2 rounded-md bg-transparent border border-gray-200 text-sm select-none"
            >
              {lang === "ar" ? "AR" : "EN"}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-5 h-5 transform ${openLangDropdown ? "rotate-180" : "rotate-0"}`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {openLangDropdown && (
              <ul className="absolute mt-2 min-w-[10rem] rounded-md z-50 py-1 border-[2px] bg-gray-200 border-[#212832] shadow-md">
                <li
                  onClick={() => { toggleLang("en"); setOpenLangDropdown(false); closeMenu(); }}
                  className="px-4 py-2 cursor-pointer hover:text-[#DF6951]"
                >
                  English {lang === "en" && "✓"}
                </li>
                <li
                  onClick={() => { toggleLang("ar"); setOpenLangDropdown(false); closeMenu(); }}
                  className="px-4 py-2 cursor-pointer hover:text-[#DF6951]"
                >
                  العربية {lang === "ar" && "✓"}
                </li>
              </ul>
            )}
          </div>

        </nav>
      </aside>
    </div>
  );
};
