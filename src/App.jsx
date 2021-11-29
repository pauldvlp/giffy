import { useRoute } from 'wouter';
import { Link, Route } from 'wouter';
import Form from './components/Form';
import Details from './pages/Details';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';

function App() {
  return (
    <>
      <h1 className='logo'>
        <Link to='/'>
          <span>P</span>
          <span>A</span>
          <span>N</span>
          <span>L</span>
          <span>A</span>
          <span>R</span>
          <span>&nbsp;</span>
          <span>G</span>
          <span>I</span>
          <span>F</span>
          <span>F</span>
          <span>Y</span>
        </Link>
      </h1>
      <Form />
      <main className='container'>
        <Route path='/' component={Home} />
        <Route path='/details/:id' component={Details} />
        <Route path='/search/:keyword/:rating?' component={SearchResults} />
      </main>
    </>
  );
}

export default App;
