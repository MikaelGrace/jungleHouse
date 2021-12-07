import Banner from './Banner';
//import Cart from './Cart';
import ShoppingList from './ShoppingList';
import logo from '../assets/logo.png'
import QuestionForm from './QuestionForm';
import Footer from './Footer';

function handleSubmit(e) {
  e.preventDefault()
  alert(e.target['my_input'].value)
}
function App() {
  return (
        <div>
          <QuestionForm />
          <form onSubmit={handleSubmit}>
            <input type="text" name="my_input" defaultValue="Type your text" />
          </form>
          <Banner>
            <img src={logo} alt='Jungle House' className='jh-logo' />
            <h1 className='jh-title'>Jungle House</h1>
          </Banner>
          {/* <Cart /> */}
          <ShoppingList />
          <Footer />
        </div>)
  
}

export default App;
