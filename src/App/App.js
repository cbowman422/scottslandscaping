import '../css/App.css';
import Main from '../pages/Main';
import { Header } from '../components/Header';
import Footer from '../components/Footer';

function App() {
  return (
    <div className="appContainer">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
