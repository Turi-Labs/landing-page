import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { ResearchPage } from './pages/ResearchPage';
import { ProductPage } from './pages/ProductPage';
import { BlogPage } from './pages/BlogPage';
import { NewsletterPage } from './pages/NewsletterPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/newsletter" element={<NewsletterPage />} />
      </Routes>
    </Router>
  );
}

export default App;