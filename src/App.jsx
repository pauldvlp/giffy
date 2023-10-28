import { Route } from 'wouter';
import Form from './components/Form';
import Details from './pages/Details';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';

function App() {
  return (
    <>
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
