import React, {useEffect, useState} from 'react'
import GnomeList from './GnomeList'

const Home = () => {

    const [data, setData] = useState([])
    const [list, setList] = useState("")
    const [dataFilter, setDataFilter] = useState([])
    const [searchColumns, setSearchColumns] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        const obtainData = async() => {
            const data = await fetch("https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json")
            const gnomes = await data.json()
            setData(gnomes.Brastlewark)
        }
        setSearchColumns(["name", "age", "hair_color", "professions"])
        obtainData()
    }, [])

    const procesarDatos = (e) => {
        e.preventDefault()
        if(!list.trim()){
            setError("You didn't write anything")
            setDataFilter([])
            return
        }
        setDataFilter(
            data.filter((row) => searchColumns.some((column) => row[column].toString().toLowerCase().indexOf(list.toLowerCase()) > -1))
        )
        setError(null)
    } 
    
    return (
        <div className="container mt-2">
            <div>
                <h1 className="text-center">Gnoogle</h1>
                <hr/>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-5 col-xl-5">
                        <h4>Search your Gnome</h4>
                        <hr/>
                        <form onSubmit={procesarDatos}>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Find your gnome" 
                                autoComplete="off" 
                                onChange={(e) => setList(e.target.value)}
                                value={list}
                            />
                            <button className="btn mt-2 btn-block btn-outline-primary">Search</button>
                        </form>
                    </div>
                    <div className="col-12 col-sm-12 col-md-7 col-xl-7">
                        <h4>Results</h4>
                        <hr/>
                        {
                            error && (
                                <div className="alert alert-danger">
                                    {error}
                                </div>
                            )
                        }
                        {
                            dataFilter && (
                                dataFilter.map(item => (
                                    <GnomeList 
                                        key={item.id}
                                        id={item.id} 
                                        thumbnail={item.thumbnail} 
                                        name={item.name} 
                                        age={item.age} 
                                        hair_color={item.hair_color} 
                                    />
                                ))
                            ) 
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
