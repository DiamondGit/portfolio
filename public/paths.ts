import { FaCubes, FaHome, FaPhone, FaSuitcase } from "react-icons/fa";
import { PathType } from "./types/commonTypes";

const paths: PathType[] = [
    {
        path: "/",
        name: "Home",
        RelatedIcon: FaHome,
    },
    {
        path: "/work-experience",
        name: "Work experience",
        RelatedIcon: FaSuitcase,
    },
    {
        path: "/components",
        name: "Components",
        RelatedIcon: FaCubes,
    },
    {
        path: "/contacts",
        name: "Contacts",
        RelatedIcon: FaPhone,
    },
];

export default paths;
