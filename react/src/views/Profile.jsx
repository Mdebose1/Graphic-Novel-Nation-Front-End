import React from 'react'

export const Profile = () => {
    return (
        <>
 <div className="row">
            <div className="col-md-3">
                <img className="img-fluid" src="https://via.placeholder.com/500X500" alt="Profile Picture" title="Profile Image" />
            </div>
            <div className='col-md-9'>
            <form action="">
                    <div className="form=group">
                        <div className="row">
                            <div className="col-6 mb-5">
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
                    <button type="submit" className="btn btn-primary" value="Register"></button>
                </form>
            </div>
        </div>
        </>

    )
}
