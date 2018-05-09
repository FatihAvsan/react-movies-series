import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => (
    <div>
        <h1>ANASAYFA</h1>
        <ul>

            <li>
                <Link to={`/movies`}>movies</Link>
            </li>
            <li>
                <Link to={`/series`}>series</Link>
            </li>

        </ul>
    </div>
)

export default Home
