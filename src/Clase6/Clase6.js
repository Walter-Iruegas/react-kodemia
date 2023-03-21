import {Link, Outlet} from 'react-router-dom'
export const Clase6 = () => {
    return (

        <>

            <nav>
                <ul>
                    <li>
                        <Link to={'/books'}> All books</Link>
                    </li>
                    <li>
                        <Link to={'/books/2'}> Book 2</Link>
                    </li>
                    <li>
                        <Link to={'/books/new'}> Add Book</Link>   
                    </li>

                    <li>
                        <Link to={'/books/delete'}> Delete Book</Link>   
                    </li>
                </ul>
            </nav>

            <Outlet/>

        </>
    )
}