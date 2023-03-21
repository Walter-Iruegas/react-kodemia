import { Routes, Route, Link, NavLink, useNavigate } from 'react-router-dom';
import Clase2 from './clase2/Clase2';
import { Clase4 } from './Clase4';
import Clase3 from './Clase3/Clase3';
import { Clase5 } from './Clase5';
import { Clase6 } from './Clase6/Clase6';
import { Book } from './Clase6/Books/Book'

import './App.css';
import { Clase7 } from './Clase7/Clase7';
import { ProductDetails } from './Clase7/ProductDetails/ProductDetails';


const DummyBooksList = () => {
  const dummyBooks = [
    '1', '2', '3',
    '4', '5', '6'
  ]

  const navigate = useNavigate();

  const author = 'kodemia';
  const publicacion = 'ayer';
  const onDummyBookClick = (bookID) => {
    // navigate(`/books/${bookID}`)
    navigate({
      pathname: `/books/${bookID}/cursoReact`,
      search: `?author=${author}&publicacion=${publicacion}&editorial=react`
    })
  }

  // http://localhost:3000/books/2/cursoReact?author=kodemia&publicacion=ayer&editorial=react

  return (
    <>
      Lista de Libros

      {
        dummyBooks.map((dummy) => {
          return <h5
            key={dummy}
            // onClick = {onDummyBookClick}
            onClick={() => { onDummyBookClick(dummy) }}
            style={{ cursor: 'pointer', padding: '1em' }}> Libro Dumy - {dummy} </h5>
        })
      }

    </>

  )
}

function App() {

  return (
    <div className="App">
      {/* NavBar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">Clase 6</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink
              className="nav-item nav-link "
              to="/clase2"
              style={
                ({ isActive }) => {
                  return isActive ? { fontSize: '30px' } : {}
                }
              }
            >
              Clase 2
            </NavLink>
            <NavLink
              className="nav-item nav-link"
              to="/clase3"
              style={
                ({ isActive }) => {
                  return isActive ? { fontSize: '30px' } : {}
                }
              }>Clase 3</NavLink>
            <NavLink className="nav-item nav-link" to="/clase4">Clase 4</NavLink>
            <NavLink className="nav-item nav-link" to="/clase5">Clase 5</NavLink>
            <NavLink className="nav-item nav-link" to="/books">Books</NavLink>
            <NavLink className="nav-item nav-link" to="/clase7"> Clase 7 </NavLink>
          </div>
        </div>
      </nav>

      <div className="container-fluid">
          
          {/* App Routes */}
        <Routes>
          <Route path='/' element={<h2> All Clases</h2>} />
          <Route path='/clase2' element={<Clase2 />} />
          <Route path='/clase3' element={<Clase3 />} />
          <Route path='/clase4' element={<Clase4 />} />
          <Route path='/clase5' element={<Clase5 />} />

          <Route path='/books' element={<Clase6 />}>
            <Route index element={<DummyBooksList />} />
            {/* books/${id} */}
            {/* Primero poner las rutas con valores dinamicos y luego con valores estaticos */}
            {/* "?" es para parametros opcionales  */}
            <Route path=":bookID/:bookTitle?/:genre?" element={<Book />} />
            <Route path="new" element={<h2> Add aasdasdasddfljhdfahdfkjashdfkjhasdfkjhsdfiuy  </h2>} />
            <Route path="delete" element={<h2> delete  Book  </h2>} />
          </Route>

          <Route path='/clase7' element = {<Clase7/>}/>
          <Route path='/product/:productID' element = {<ProductDetails/>}/>


          <Route path='*' element={<h2> Selecciona una Clase </h2>} />
        </Routes>

      </div>



    </div>
  );
}



export default App;
