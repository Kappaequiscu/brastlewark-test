import React from 'react';
import {Grid, Col, Row} from 'react-flexbox-grid'
import './styles.css';

export default function Datatable({data}) {
    return(
        <div className="brastlewarkList">
            {
                data.map(row =>
                    <Grid>
                        <Row>
                            <Col xs={12} md={12}>
                                <div className="brastlewarkSearch">
                                    <div className="brastlewarkNameCont">
                                        {
                                            row.name ? <h1 key={row.name}>{row.name}</h1>: <div>Nothing</div>
                                        }
                                    </div>
                                    <div className="brastlewarkImageCont">
                                        <Grid>
                                            <Row>
                                                <Col xs={12} md={3}>
                                                    <div className="brastlewarkImage">
                                                        {
                                                            row.thumbnail ? 
                                                                <img key={row.thumbnail} alt={row.name} src={row.thumbnail}></img>
                                                            : <div>Nothing</div>
                                                        }
                                                    </div>
                                                </Col>
                                                <Col xs={12} md={2}>
                                                    <div className="brastlewarkExtraCont">
                                                        {
                                                            row.age ? 
                                                            <span className="extraInfoText" key={row.age}>Age: {row.age}</span>: 
                                                            <span>Nothing</span>
                                                        }
                                                        {
                                                            row.hair_color ? 
                                                            <span className="extraInfoText" key={row.hair_color}>Hair color: {row.hair_color}</span>: 
                                                            <span>Nothing</span>
                                                        }
                                                    </div>
                                                </Col>
                                                <Col xs={12} md={2}>
                                                    <div className="brastlewarkExtraCont">
                                                        {
                                                            row.weight ? 
                                                            <span className="extraInfoText" key={row.weight}>Weight: {row.weight}</span>: 
                                                            <span>Nothing</span>
                                                        }
                                                        {
                                                            row.height ? 
                                                            <span className="extraInfoText" key={row.height}>Height: {row.height}</span>: 
                                                            <span>Nothing</span>
                                                        }
                                                    </div>
                                                </Col>
                                                <Col xs={12} md={3}>
                                                    <div className="brastlewarkExtraCont">
                                                        {
                                                            row.friends ? 
                                                            <div className="extraInfoText" key={row.friends}>
                                                                <span>Friends:</span>{row.friends.map(items => 
                                                                    <span>{items}</span>
                                                                )}
                                                            </div>: 
                                                            <span>Nothing</span>
                                                        }
                                                    </div>
                                                </Col>
                                                <Col xs={12} md={2}>
                                                    <div className="brastlewarkExtraCont">
                                                        {
                                                            row.professions ? 
                                                            <div className="extraInfoText" key={row.professions}>
                                                                <span>Professions:</span>{row.professions.map(items => 
                                                                    <span>{items}</span>
                                                                )}
                                                            </div>: 
                                                            <span>Nothing</span>
                                                        }
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Grid>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Grid>                
                )
            }
        </div>
    );
}