import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        let randomPass = randomPassGenerator()
        navigate("/about", {
            state: {
                item: 'About',
                id: randomPass
            }
        })
    }

    const randomPassGenerator = () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        const randomIndex = Math.floor(Math.random() * 11);
        const password = arr[randomIndex];
        console.log(password);
        return password
    }

    useEffect(() => {
        randomPassGenerator();
    }, [])
    return (
        <div>
            <div className='cursor-pointer' onClick={() => handleClick()}>
                About
            </div>
            <header className="App-header">
                <p>
                    This is a boiler plate for React Js with routing and Tailwind css.
                </p>
                <ul>
                    <li>
                        Tailwind
                    </li>
                    <li>
                        Routing
                    </li>
                    <li>
                        Light / Dark Theme
                    </li>
                    <li>
                        useContext
                    </li>
                    <li>
                        Redux
                    </li>
                    <li>
                        Type of css - module css / style components / js-css...
                    </li>
                </ul>
            </header>
            <p className='bg-blue-500 text-white p-4'>
                Home
            </p>
        </div>
    )
}

export default Home
