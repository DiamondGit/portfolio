import { Link } from "react-router-dom";
import ContentLayout from "../../components/wrappers/ContentLayout";

const NotFound = () => {
    return (
        <ContentLayout>
            <Link to="/">Back to main</Link>
        </ContentLayout>
    );
};

export default NotFound;
