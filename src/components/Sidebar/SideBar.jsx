import { NavLink } from "react-router-dom";
import { FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
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
        path: "/settings/profile",
        name: "Profile ",
        icon: <FaUser />,
      },
      {
        path: "/settings/2fa",
        name: "2FA",
        icon: <FaLock />,
      },
      {
        path: "/settings/billing",
        name: "Billing",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/messages",
    name: "Farm",
    icon: <GiFarmTractor />,
  },
  {
    path: "/analytics",
    name: "Pools",
    icon: <GiDrinkMe />,
  },
  {
    path: "/file-manager",
    name: "Vulcano Day",
    icon: <GiSmokingVolcano />,
  },
  {
    path: "/order",
    name: "Order",
    icon: <BsCartCheck />,
  },
  {
    path: "/settings",
    name: "Listings",
    icon: <AiOutlineStock />,
    exact: true,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "Profile ",
        icon: <FaUser />,
      },
      {
        path: "/settings/2fa",
        name: "2FA",
        icon: <FaLock />,
      },
      {
        path: "/settings/billing",
        name: "Billing",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/saved",
    name: "Documentation",
    icon: <CgNotes />,
  },
  {
    path: "/saved",
    name: "Documentation",
    icon: <CgNotes />,
  },
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
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
