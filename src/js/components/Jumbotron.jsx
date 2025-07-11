import React from "react";

const Jumbotron = () => {
    return (
        <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold text-center text-md-start">A Warm Welcome</h1>
                <p className="col-12 col-md-8 fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea vitae doloremque quos dolorum vero modi cum in mollitia porro laboriosam optio nulla, placeat iure vel magnam deserunt laborum officiis ratione!</p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                    <button className="btn btn-primary btn-lg" type="button">Call to action!</button>
                </div>
            </div>
        </div>
    )
};

export default Jumbotron