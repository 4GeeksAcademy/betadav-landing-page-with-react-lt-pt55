import React from "react";

const Jumbotron = () => {
    return (
        <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">A Warm Welcome</h1>
                <p className="col-md-8 fs-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea vitae doloremque quos dolorum vero modi cum in mollitia porro laboriosam optio nulla, placeat iure vel magnam deserunt laborum officiis ratione!</p>
                <button className="btn btn-primary btn-lg" type="button">Call to action!</button>
            </div>
        </div>
    )
};

export default Jumbotron