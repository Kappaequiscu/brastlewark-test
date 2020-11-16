import React from 'react'
import {Link} from 'react-router-dom'

const GnomeList = ({id, thumbnail, name, age, hair_color}) => {
    return (
        <div>
            <div key={id} className="card ms-3 mb-1">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img alt={id} src={thumbnail} className="card-img"></img>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5>{name}</h5> 
                            <p className="card-text"><small className="text-muted">Age: {age}</small></p>  
                            <p className="card-text"><small className="text-muted">Hair color: {hair_color}</small></p>
                            <Link to={`/gnomes/${id}`}>
                                More...
                            </Link>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GnomeList
