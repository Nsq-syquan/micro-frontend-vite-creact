import { Flex, Menu } from "antd";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { menu } from "../../layouts/menu";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { useMFE1Store } from "../../stores";
const ASidebar = () => {
  const { path, setPath } = useMFE1Store();
  const location = useLocation();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(true);
  useEffect(() => {
    if (path == location?.pathname) {
      return;
    }
    setPath(location?.pathname);
  }, [location]);

  const onNavigate = (value) => {
    navigate(import.meta.env.VITE_APP_STAGE === 'development' ? value?.key : `mfe1${value?.key}`);
  };
  return (
    <Flex
      className={`${
        collapsed ? "p-[0px] w-[80px]" : "p-[0px] w-[260px]"
      } transition-all h-full bg-white border border-solid border-r-gray-400 `}
      align="center"
      justify="space-between"
      vertical
    >
      <Menu
        className={`${collapsed ? "p-[8px]" : "p-[20px]"} `}
        onClick={(e) => onNavigate(e)}
        style={{ width: collapsed ? 80 : 260 }}
        mode="vertical"
        inlineCollapsed={collapsed}
        items={menu}
      />

      <Flex className="w-full pr-1 pb-1" justify="flex-end">
        {collapsed ? (
          <AiOutlineMenuFold onClick={() => setCollapsed(!collapsed)} />
        ) : (
          <AiOutlineMenuUnfold onClick={() => setCollapsed(!collapsed)} />
        )}
      </Flex>
    </Flex>
  );
};

export default ASidebar;
