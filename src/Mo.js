import React from "react";
import Ticket from "./Ticket.js";
import "./Mo.css";

function Movies() {
  const arr = [
    {
      img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC40LzEwICAyMDAuMUsgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00338629-adeyjbxpah-portrait.jpg",
      heading: "Gadar 2: The Kath Continues",
      small: "UA",
      title: "Hindi",
    },
    {
      img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC43LzEwICAxMDMuNksgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00361712-npjeqfmyrt-portrait.jpg",
      heading: "OMG 2",
      small: "A",
      title: "Hindi",
    },
    {
      img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTE5LjFLIExpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00340111-tumdlxmhgw-portrait.jpg",
      heading: "Dream Girl 2",
      small: "UA",
      title: "Hindi",
    },

    {
      img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny42LzEwICA2LjRLIFZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00365022-lnxldkfzht-portrait.jpg",
      heading: "Byomkesh O Durgo Rohosyo",
      small: "UA",
      title: "Bengali",
    },

    {
      img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC8xMCAgMTI4LjRLIFZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00312549-trnjveudsm-portrait.jpg",
      heading: "Rocky Aur Rani Kii Prem Kahaani",
      small: "UA",
      title: "Hindi",
    },
    {
      img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4xLzEwICAxNS43SyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00365396-qnqdtlfpwu-portrait.jpg",
      heading: "Ghoomer",
      small: "UA",
      title: "Hindi",
    },
    {
      img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny45LzEwICA3LjFLIFZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00331565-akxtqdbbwa-portrait.jpg",
      heading: "Blue Beetle",
      small: "UA",
      title: "English, Hindi, Telugu, Tamil",
    },
    {
      img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC4xLzEwICAyLjVLIFZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00357595-wspgmtrnnr-portrait.jpg",
      heading: "Trailers Screening Show",
      small: "UA",
      title: "Multi Language",
    },
    {
      img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC44LzEwICAxNTEuN0sgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00347867-rruvehxwpe-portrait.jpg",
      heading: "Oppenheimer",
      small: "UA",
      title: "English,Hindi",
    },
    {
      img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MUsgTGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00366903-xheskhqvae-portrait.jpg",
      heading: "Oh! Lovely",
      small: "U",
      title: "Bengali",
    },
    {
      img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny4yLzEwICAxSyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00360469-apwqbxfuhz-portrait.jpg",
      heading: "Cheeni 2",
      small: "U",
      title: "Bengali",
    },
    {
      img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTUuOEsgTGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00358718-jvefcqhyvs-portrait.jpg",
      heading: "Gran Turismo",
      small: "UA",
      title: "English,Hindi",
    },
    {
      img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTAyLjFLIExpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00351659-thncgdskxu-portrait.jpg",
      heading: "King of Kotha",
      small: "UA",
      title: "Malayalam, Tamil, Telugu,...",
    },
    {
      img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4xLzEwICAzMDUuM0sgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00331686-nwatwgbhjc-portrait.jpg",
      heading: "Jailer",
      small: "UA",
      title: "Tamil, Hindi, Telugu, Kannad...",
    },
    {
      img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC44LzEwICA1LjVLIFZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00359220-fnycuytnbl-portrait.jpg",
      heading: "Ardhangini",
      small: "UA",
      title: "Bengali",
    },
    {
      img: "https://assets-in.bmscdn.com/discovery-catalog/lib/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-OTIyIExpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70:ote-S2luZyBvZiBLb3RoYSAoSGluZGkp,otc-222222,otw-350,ox-25,oy-50,ots-40:ote-UG9zdGVyIE5vdCBSZWxlYXNlZA%3D%3D,ots-20,otc-333333,ox-25,oy-560:q-80/transparent_square.png",
      heading: "King of Kotha (Hindi)",
      small: "UA",
      title: "Hindi",
    },
    {
      img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC41LzEwICAxNzggVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00365014-lugdgqqxav-portrait.jpg",
      heading: "The Childe",
      small: "A",
      title: "Korean",
    },
    {
      img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-NC44LzEwICAxNzIgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00365676-gcwlcwjszl-portrait.jpg",
      heading: "The Queen Marry",
      small: "A",
      title: "English",
    },
    {
      img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-NC41LzEwICBFYXJseSBSYXRpbmdz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00367387-xyplxckaal-portrait.jpg",
      heading: "Bikeler Alo",
      small: "U",
      title: "Bengali",
    },
    {
      img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny45LzEwICAxOS40SyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00358316-uzzgjdlpvr-portrait.jpg",
      heading: "Meg 2: The Trench",
      small: "UA",
      title: "English, Telugu, Hindi, Tamil",
    },
    {
      img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny4zLzEwICA0NC41SyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00072466-pzdcejeceq-portrait.jpg",
      heading: "Barbie",
      small: "UA",
      title: "English",
    },
    {
      img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4xLzEwICAxMTkuNUsgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00329481-gdlsqkwwld-portrait.jpg",
      heading: "Mission Impossible:  Dead Reckoning - Pa...",
      small: "UA",
      title: "English. Hindi. Tamil. Telugu",
    },
    {
      img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC4xLzEwICAySyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00362510-tznkalmkbq-portrait.jpg",
      heading: "Shohorer Ushnotomo Din E",
      small: "U",
      title: "Bengali",
    },
    {
      img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny42LzEwICA0NTggVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00361873-pedtbcfmmn-portrait.jpg",
      heading: "Niharika: In The Mist",
      small: "A",
      title: "Bengali",
    },
    {
      img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ni44LzEwICAxLjRLIFZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00363520-tezzuufltu-portrait.jpg",
      heading: "Samaresh Basu-R Projapoti",
      small: "UA",
      title: "Bengali",
    },
    {
      img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ni45LzEwICAyMyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00367349-ubfvkmcmmw-portrait.jpg",
      heading: "Dishahin Mon Amar",
      small: "UA",
      title: "Bengali",
    },
  ];

  return (
    <div className="parent">
      {arr.map((x) => {
        console.log(x);
        return (
          <Ticket
            small={x.small}
            title={x.title}
            head={x.heading}
            img={x.img}
          ></Ticket>
        );
      })}
      ;
    </div>
  );
}

export default Movies;
