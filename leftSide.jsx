import React from "react";
import SidebarItem from "./sidebar-item";
import { FaXTwitter } from "react-icons/fa6";
import Button from "./Button";
import ProfileCard from './ProfileCard';
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";

import { IoPersonOutline } from "react-icons/io5";
import { CgMoreO } from "react-icons/cg";
import { SiNgrok } from "react-icons/si";
import { FiMessageSquare } from "react-icons/fi";

export default function LeftSide() {

    return <div className="flex flex-col gap-5"> 
        
        <SidebarItem  className=""  
  icon={<FaXTwitter style={{ fontSize: '50px' }} />}   
  link="/"   /> 
        <SidebarItem label="explorer" icon={<CiSearch style={({fontSize: '25px'})}/>}  link="/"     />
        <SidebarItem label="notifications" icon={<IoMdNotificationsOutline />
}  link="/"   />
        <SidebarItem label="messages" icon={<FiMessageSquare style={{ fontSize: '25px' }}/>
}  link="/"   />

        <SidebarItem label="Grok" icon={<SiNgrok style={{ fontSize: '25px' }}/>
}  link="/"   />

        <SidebarItem label="Profile" icon={<IoPersonOutline style={{ fontSize: '25px' }} />
}  link="/"   />
        <SidebarItem label="More" icon={<CgMoreO  style={{ fontSize: '25px' }}/>}  link="/"   />
        <ProfileCard />  

        </div>

}
