import React, {useState, useEffect} from 'react';
import {Grid, Col, Row} from 'react-flexbox-grid'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import Datatable from './components/Datatable'

export default function App() {
    const [data, setData] = useState([]);
    const [q, setQ] = useState("");
    const [searchColumns, setSearchColumns] = useState([]);

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json")
        .then(response => response.json())
        .then(json => setData(json.Brastlewark));
    }, []);

    function search(rows) {
        return rows.filter(
            (row) => searchColumns.some((column) => row[column].toString().toLowerCase().indexOf(q.toLowerCase()) > -1)
        );
    }
    const columns = data[0] && Object.keys(data[0]);
    return(
        <Grid>
            <Row>
                <AppBar position="sticky">
                    <Toolbar variant="regular">
                        <Typography variant="h6" color="inherit" noWrap>
                            Brastlewark App
                        </Typography>
                    </Toolbar>
                    <Toolbar variant="regular">
                        <input type="text" placeholder="Search" value={q} onChange={(e) => setQ(e.target.value)} />
                            {
                                columns && columns.slice(1,-1).map((column) => 
                                    <label>
                                        <input 
                                            key={column}
                                            type="checkbox" 
                                            checked={searchColumns.includes(column)} 
                                            onChange={(e) => {
                                                const checked = searchColumns.includes(column)
                                                setSearchColumns(prev => checked ? prev.filter(sc => sc !== column): [...prev, column])
                                            }}/>
                                        {column}
                                    </label>
                                )
                            }
                    </Toolbar>
                </AppBar>
            </Row>
            <Row>
                <Col xs={12} md={12}>
                    <Datatable data={search(data)}/>
                </Col>
            </Row>
            
        </Grid>
        
    );
}
