import { Link } from "react-router-dom";
import { topLvlRoutes } from "../../constants/routes";

const NotFound = () => {
    return <Link to={topLvlRoutes.main.path}>Назад на главную страницу</Link>;
};

export default NotFound;
