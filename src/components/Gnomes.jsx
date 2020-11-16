import React, {useEffect, useState} from 'react'
import GnomeList from './GnomeList'

const Gnomes = () => {

    const [gnomes, setGnomes] = useState([])

    useEffect(() => {
        const obtainData = async() => {
            const data = await fetch("https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json")
            const gnomes = await data.json()
            setGnomes(gnomes.Brastlewark)
        }
        obtainData()
    }, [])

    return (
        <div className="mt-2">
            <h1 className="text-center">Gnomes List</h1>
            <hr/>
            <div className="card-columns">                    
                {
                    gnomes.map(item => (
                        <GnomeList 
                            key={item.id}
                            id={item.id} 
                            thumbnail={item.thumbnail} 
                            name={item.name} 
                            age={item.age} 
                            hair_color={item.hair_color} 
                        />
                    ))
                }
            </div> 
        </div>
    )
}

export default Gnomes
