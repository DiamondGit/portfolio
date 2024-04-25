import { Link } from "react-router-dom";
import Layout from "../../components/wrappers/ContentLayout";

const NotFoundPage = () => {
    return (
        <Layout>
            <Link to="/">Back to main</Link>
        </Layout>
    );
};

export default NotFoundPage;
