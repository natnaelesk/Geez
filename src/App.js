import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './Home';
import Collections from './components/Collections';
import Chart from './components/Chart';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const bg ='';

  return (
    <Router>
      <div className={`${bg} App transition top-0 bg-secondary-white`}>
        <Header />
        <NavBar />
        <ScrollToTop />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Geez" component={Home} />
          <Route path="/collection" component={CollectionsAll} />
          <Route path="/boots" component={CollectionsBoots} />
          <Route path="/casual" component={CollectionsCasual} />
          <Route path="/chart" component={Chart} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

// Separate components for different collection types
const CollectionsAll = () => <Collections show="all" />;
const CollectionsBoots = () => <Collections show="boots" />;
const CollectionsCasual = () => <Collections show="casual" />;

export default App;
