import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { BsWhatsapp } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";

export const navItems = [
    {
        id: "/",
        name: "Home",
    },
    {
        id: "contact",
        name: "Contact",
    },
];

export const sideNavItems = [
    {
        id: "Facebook",
        icon: <FaFacebookF></FaFacebookF>,
        link: "https://www.facebook.com/profile.php?id=61552211922534&mibextid=ZbWKwL",
    },
    {
        id: "Linkedin",
        icon: <AiFillLinkedin />,
        link: "https://www.linkedin.com/company/100225259/admin/feed/posts/?feedType=following"
    },
    {
        id: "Instagram",
        icon: <FaInstagram />,
        link: "https://www.instagram.com/altabarakdevelopment?igshid=NTc4MTIwNjQ2YQ%3D%3D",
    },
    {
        id: "Youtube",
        icon: <FaYoutube />,
        link: "https://www.youtube.com/channel/UCfGCJHFlr70k3WTBeyNgDSQ",
    },
    {
        id: "01150164444",
        icon: <BsWhatsapp />,
        link: "https://wa.me/message/WE6VYTG6JDBXL1"
    },
];
