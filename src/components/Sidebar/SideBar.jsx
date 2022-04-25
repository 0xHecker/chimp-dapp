import { NavLink } from "react-router-dom";
import { FaHome, FaUser } from "react-icons/fa";
import { RiArrowLeftRightFill } from "react-icons/ri";
import { GiFarmTractor, GiDrinkMe, GiSmokingVolcano } from "react-icons/gi";
import { CgNotes } from "react-icons/cg";
import { AiOutlineStock } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <FaHome />,
  },
  {
    path: "/users",
    name: "Trade",
    icon: <RiArrowLeftRightFill />,
    subRoutes: [
      {
        link: "https://github.com",
        name: "DEX ",
      },
      {
        link: "https://github.com",
        name: "CEX",
      },
      {
        link: "https://github.com",
        name: "SpookySwap",
      },
    ],
  },
  {
    path: "/farm",
    name: "Farm",
    icon: <GiFarmTractor />,
  },
  {
    path: "/pools",
    name: "Pools",
    icon: <GiDrinkMe />,
  },
  {
    path: "/vulcano",
    name: "Vulcano Day",
    icon: <GiSmokingVolcano />,
  },
  {
    path: "/dividends",
    name: "Dividends",
    icon: <BsCartCheck />,
  },
  {
    name: "Listings",
    icon: <AiOutlineStock />,
    exact: true,
    subRoutes: [
      {
        link: "https://github.com",
        name: "One ",
        icon: <FaUser />,
      },
      {
        link: "https://github.com",
        name: "Two ",
        icon: <FaUser />,
      },
      {
        link: "https://github.com",
        name: "Three",
        icon: <FaUser />,
      },
    ],
  },
  // {
  //   path: "/saved",
  //   name: "Documentation",
  //   icon: <CgNotes />,
  // },
];

const SideBar = ({ children, isOpen, setIsOpen }) => {
  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "250px" : "56px",

            transition: {
              duration: 0.3,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar`}
        >
          <section className="routes">
            {/* Map Subroutes and links conditionally*/}
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                    key={index}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeclassname="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
            {/* Custom Links */}
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <div className="link">
                <div className="icon">
                  <CgNotes />
                </div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      variants={showAnimation}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      className="link_text"
                    >
                      Documentation
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </a>

            <a href="https://github.com" target="_blank" rel="noreferrer">
              <div className="link">
                <div className="icon">
                  <GiDrinkMe />
                </div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      variants={showAnimation}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      className="link_text"
                    >
                      Hi there
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </a>
            {/* Custom Links End */}
          </section>
        </motion.div>
        <div className="children-container">
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default SideBar;
