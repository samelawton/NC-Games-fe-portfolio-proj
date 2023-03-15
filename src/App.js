import './App.css';
import HomePage from './Pages/HomePage';
import ReviewsPage from './Pages/ReviewsPage';
import Header from './components/Header';
import UserPage from './Pages/UserPage';
import { Route, Routes } from 'react-router-dom';
import SingleReviewItem from './components/SingleReviewItem';
import CommentsItem from './components/CommentsItem';

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/reviews" element={<ReviewsPage/>}/>
        <Route path="/reviews/:review_id" element={<SingleReviewItem/>}/>
        <Route path="/reviews/:review_id/comments" element={<CommentsItem/>}/>
        <Route path="/users" element={<UserPage/>}/>
      </Routes>

    </div>
  );
}

export default App;
