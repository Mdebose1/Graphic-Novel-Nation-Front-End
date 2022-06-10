import React from 'react'

export const Signin = () => {
    return (
        <div className="row">
            <div className="col-md-6">
                <h2>Sign In</h2>
                <form action="">
                    <div className="form-group">
                        <input type="email" className="form-control" name="email" id="" aria-describedby="emailHelpId" placeholder="Enter Your Email" />
                    </div>
                    <div className="form-group">
                        <label for=""></label>
                        <input type="password" className="form-control" name="Password" id="" placeholder="Enter Your Password" />
                    </div>
                    <div>
                        <div className="form-check">
                            <label className="form-check-label">
                                <input type="checkbox" className="form-check-input" name="remember_me" id="" value="checkedValue" />
                                    Remember Me
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" value="Sign In"></button>
                </form>
            </div>
            <div className="col-md-6">
            <h2>Register</h2>
                <form action="">
                    <div className="form=group">
                        <div className="row">
                            <div className="col-6">
                            <input type="text" className="form-control" name="first_name" id="" aria-describedby="emailHelpId" placeholder="First Name" />
                            </div>
                            <div className="col-6">
                            <input type="text" className="form-control" name="last_name" id="" aria-describedby="emailHelpId" placeholder="Last Name" />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" name="email" id="" aria-describedby="emailHelpId" placeholder="Enter Your Email" />
                    </div>
                    <div className="form-group">
                        <label for=""></label>
                        <input type="password" className="form-control" name="Password" id="" placeholder="Enter Your Password" />
                    </div>
                    <div className="form-group">
                        <label for=""></label>
                        <input type="password" className="form-control" name="confirm_password" id="" placeholder="Confirm Password" />
                    </div>
                </form>
                <button type="submit" className="btn btn-primary" value="Register"></button>

            </div>

        </div>
    )
}
