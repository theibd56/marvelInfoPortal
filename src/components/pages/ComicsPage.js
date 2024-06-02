import { Helmet } from "react-helmet";
import AppBanner from "../appBanner/AppBanner";
import ComicsList from "../comicsList/ComicsList";
import decoration from '../../resources/img/vision.png';

const ComicsPage = () => {
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Page with list comics"
                />
                <title>Marvel comics</title>
            </Helmet>
            <AppBanner/>
            <ComicsList/>
            <img className="bg-decoration" src={decoration} alt="vision"/>
        </>
    )
}

export default ComicsPage;