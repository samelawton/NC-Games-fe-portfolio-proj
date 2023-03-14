import PageHeader from "../components/PageHeader";
import ReviewsPage from "./ReviewsPage";

const HomePage = () => {

  return (
    <div className="home-main">
      <h2>HomePage</h2>
      <PageHeader title ={"Home"}/>
      <ReviewsPage />
    </div>
  );
};

export default HomePage;
