import React from "react";
import { Fragment } from 'react'
class Rightcomponent extends React.Component {
    render() {
        return (
            <div className="col-md-10 Rightcomponent">
                <div className="Title">
                    <h1> To do list</h1>
                </div>
                <div className="container-full-grild">
                    <div className="row">
                        
                            <div className="col-md-3 noname0 Cardcolor1 h4">Total: </div>
                            <div className="col-md-3 noname0 Cardcolor2 h4">To do:</div>
                            <div className="col-md-3 noname0 Cardcolor3 h4">Done:</div>
                            <div className="col-md-3 noname0 Cardcolor4 h4">Not Done:</div>
                        
                    </div>
                </div>
                <div className="list container-full-grild">
                    <div className="row">
                        {this.props.items.map((items, key) => {
                            return (
                                <Fragment>
                                    <div className="col-md-12 d-flex task">
                                        <h5 className="Titlelist" key={key}>{items.title}</h5>
                                        <button type="button" className="btn btn-primary view" data-bs-toggle="modal" data-bs-target={`#${items.id}`}>
                                            View detail
                                        </button>
                                    </div>
                                    <div class="modal fade" id={`${items.id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog modal-xl">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body">
                                                    <p>{items.body}</p>
                                                    <i className="bi bi-plus-circle-fill"></i>
                                                    <i className="bi bi-wrench-adjustable"></i>
                                                    <i className="bi bi-trash3-fill"></i>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                    <button type="button" class="btn btn-primary">Save changes</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </Fragment>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
export default Rightcomponent;