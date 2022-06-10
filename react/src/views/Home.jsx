import React from 'react'

export const Home = () => {
    return (
        <div className="row">
            <div className="col-md-12">
                <h1>Hello, Lana!</h1>

                <form action="">
                    <div className="row">
                        <div className="col-md-10">
                            <div className="form-group">
                                <input type="text" className="form-control" name="Post Content" id="" aria-describedby="helpId" placeholder="Post Here" />
                            </div>
                        </div>
                        <div className="col-md-2">
                            <input name="" id="" className="btn btn-primary btn-block" type="submit" value="Submit Post" />
                        </div>
                    </div>
                </form>

                <ul className="list-group mt-5">
                    <li className="list-group-item">
                        <p> Post Content</p>
                        <div>
                            <small>&mdash; Lana Moorer
                                <span className="float-right"> a few seconds ago</span>
                            </small>
                        </div>
                    </li>
                </ul>
            </div>
        </div>)
}

