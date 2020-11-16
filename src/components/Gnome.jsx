import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'

const Gnome = () => {
   
    const [number] = useState(useParams())
    const [gnome, setGnome] = useState([])

    useEffect(() => {
        const obtenerDatos = async() => {
            const data = await fetch("https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json")
            const gnomes = await data.json()
            const gnome = gnomes.Brastlewark
            setGnome(gnome)
        }
        obtenerDatos()
    }, [])
    
    const history = useHistory()

    return (
        <div className="container mt-2">
            {
                gnome.filter((item,index) => index === parseInt(number.id)).map(item => (
                    <div className="row mt-2">
                        <div className="col-12 col-sm-12 col-md-4 col-xl-4">
                            <img key={item.id} className="img-thumbnail animate__animated animate__fadeInLeft" src={item.thumbnail} alt={item.id}/>
                            <div className="mt-5 mb-5 text-center">
                                <button onClick={() => history.goBack()} className="btn btn-block btn-outline-info">Go Back</button>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-8 col-xl-8 animate__animated animate__fadeIn">
                            <h3>{item.name}</h3>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item" key={item.age}><b>Age: </b>{item.age}</li>
                                <li className="list-group-item" key={item.hair_color}><b>Hair Color: </b>{item.hair_color}</li>
                                <li className="list-group-item" key={item.weight}><b>Weight: </b>{item.weight}</li>
                                <li className="list-group-item" key={item.height}><b>Height: </b>{item.height}</li>
                            </ul>
                            <hr/>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><b>Professions:</b></li>
                                {
                                    item.professions.map(items => (
                                    <li className="list-group-item" key={items}>{items}</li>
                                    ))
                                }
                            </ul>
                            <hr/>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><b>Friends:</b></li>
                                {
                                    item.friends.map(items => (
                                    <li className="list-group-item" key={items}>{items}</li>
                                    ))
                                }
                            </ul>
                            <hr/>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Gnome
