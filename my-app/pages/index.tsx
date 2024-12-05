import Image from "next/image";
// import localFont from "next/font/local";
import React from "react";
import {BiHash} from 'react-icons/bi';
import {BsBell} from 'react-icons/bs';
import {BsEnvelope} from 'react-icons/bs';
import {BsBookmark} from 'react-icons/bs';
import {BiUser} from 'react-icons/bi';

import {BiHome, BiHomeCircle} from 'react-icons/bi';
import {BsTwitter} from 'react-icons/bs'
import {Inter} from "next/font/google";

const inter = Inter({subsets:["latin"]});


interface TwitterSiderbarButton{
  title:string;
  icon :React.ReactNode;

}
const sidebarMenuItems:TwitterSiderbarButton[]=[
  {
      title:"Home",
      icon:<BiHomeCircle/>
  },
  {
    title:"Explore",
    icon:<BiHash/>
  },
  {
    title:"Notification",
    icon:<BsBell/>,

  },
  {
    title:"Messages",
    icon:<BsEnvelope/>,
  },
  {
    title:"Bookmarks",
    icon:<BsBookmark/>,
  },
  {
    title:"Profile",
    icon:<BiUser/>,
  }
  
]



export default function Home() {
  return (
    <div className={inter.className}>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3 pt-4 px-4">
          <div className="text-3xl h-fit hover:bg-gray-800 rounded-full p-2 cursor-pointer transition-all w-fit">
            <BsTwitter />
          </div>
          <div className="mt-2">
            <ul className="space-y-1">
              {sidebarMenuItems.map(item => (
                <li 
                  key={item.title}
                  className="flex items-center gap-3 hover:bg-gray-700/20 rounded-full px-4 py-2 w-fit cursor-pointer transition-all"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-xl">{item.title}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <button className="bg-[#1d9bf0] font-bold text-white rounded-full px-24 py-3 text-lg w-full hover:bg-[#1a8cd8] transition-colors">
              Tweet
            </button>
          </div>
        </div>
        <div className="col-span-6 border-r-[1px] border-l-[1px] border-gray-400"></div>
        <div className="col-span-2"></div>
      </div>
    </div>
  );
}
