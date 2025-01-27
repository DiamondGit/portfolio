import { FaCubes, FaHome, FaPhone, FaSuitcase } from "react-icons/fa";
import { PathType } from "./types/commonTypes";
import { createPathItem } from "./utils";

const pathDict = {
    home: createPathItem("/", "Home", FaHome),
    workExp: createPathItem("/work-experience", "Work experience", FaSuitcase),
    components: createPathItem("/components", "Components", FaCubes),
    contacts: createPathItem("/contacts", "Contacts", FaPhone),
} as const satisfies Record<string, PathType>;

const paths: PathType[] = Object.values(pathDict).filter((pathItem) => pathItem.path !== pathDict.home.path);

export { pathDict };
export default paths;
