import React from "react";
import { IoMdSend } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import { RiInboxLine } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import "./Sidebar.css";
import { Link, NavLink } from "react-router-dom";

const Sidebar = ({ collapsed }) => {
  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <h4 className="text-white text-center mt-3">Dashboard</h4>
      <ul className="nav flex-column mt-4">
        <li className="nav-item">
          <NavLink
            to="/compose-email"
            className={({ isActive }) =>
              `nav-link text-white ${isActive ? "active" : ""}`
            }
            style={{ width: "100%" }}
          >
            <CiEdit /> <span className="ms-2">Compose Mail</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav-link text-white ${isActive ? "active" : ""}`
            }
          >
            <RiInboxLine /> <span className="ms-2">Inbox</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/send-email"
            className={({ isActive }) =>
              `nav-link text-white ${isActive ? "active" : ""}`
            }
          >
            <IoMdSend />
            <span className="ms-2">Send</span>
          </NavLink>
        </li>

        <li className="nav-item">
          <a className="nav-link text-white">
            <LuLogOut /> <span className="ms-2">Logout</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
