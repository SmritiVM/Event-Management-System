// import $ from "jquery";

export default function Register(){
    
    // $(document).ready(function () {
    //     $('#contact_form').bootstrapValidator({
    //         feedbackIcons: {
    //             valid: 'glyphicon glyphicon-ok',
    //             invalid: 'glyphicon glyphicon-remove',
    //             validating: 'glyphicon glyphicon-refresh'
    //         },
    //         fields: {
    //             User_name: {
    //                 validators: {
    //                     stringLength: {
    //                         min: 8,
    //                         message: 'Please enter at least 8 characters for User Name'
    //                     },
    //                     notEmpty: {
    //                         message: 'Please supply your User Name'
    //                     }
    //                 }
    //             },

    //             Full_name: {
    //                 validators: {
    //                     stringLength: {
    //                         min: 2,
    //                         message: 'Please enter at least 2 characters for Full Name'
    //                     },
    //                     notEmpty: {
    //                         message: 'Please supply your Full Name'
    //                     }
    //                 }
    //             },
                
    //             email: {
    //                 validators: {
    //                     notEmpty: {
    //                         message: 'Please enter your Email Address'
    //                     },
    //                     emailAddress: {
    //                         message: 'Please enter a valid Email Address'
    //                     }
    //                 }
    //             },
    //             phone: {
    //                 validators: {
    //                     notEmpty: {
    //                         message: 'Please enter your Phone Number'
    //                     },
    //                     stringLength: {
    //                         min: 10,
    //                         max: 12,
    //                         message: 'Phone number should be between 10 and 12 digits'
    //                     }
    //                 }
    //             },
    //             password: {
    //                 validators: {
    //                     notEmpty: {
    //                         message: 'Please enter a password'
    //                     },
    //                     stringLength: {
    //                         min: 8,
    //                         message: 'Password should be at least 8 characters'
    //                     },
    //                     regexp: {
    //                         regexp: /^(?=.*[A-Z])(?=.*\d).+$/,
    //                         message: 'Password must contain at least one capital letter and one number'
    //                     }
    //                 }
    //             },
    //             confirm_password: {
    //                 validators: {
    //                     notEmpty: {
    //                         message: 'Please confirm your password'
    //                     },
    //                     identical: {
    //                         field: 'password',
    //                         message: 'The password and its confirmation must match'
    //                     }
    //                 }
    //             }
    //         }
    //     })
    //         .on('success.form.bv', function (e) {
    //             // Prevent form submission
    //             e.preventDefault();
    //         });
    // });
    return(
        <div class="container">
        <form class="well form-horizontal" action="" method="post" id="contact_form">
            <fieldset>
               
                <div class="form-group">
                    <label class="col-md-4 control-label">User Name</label>
                    <div class="col-md-4 inputGroupContainer">
                        <div class="input-group">
                            <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                            <input name="User_name" placeholder="User Name" class="form-control" type="text"/>
                        </div>
                        <div class="help-block with-errors"></div>
                    </div>
                </div>

                <div class="form-group">
                    <label class="col-md-4 control-label">Full Name</label>
                    <div class="col-md-4 inputGroupContainer">
                        <div class="input-group">
                            <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                            <input name="Full_name" placeholder="Full Name" class="form-control" type="text"/>
                        </div>
                        <div class="help-block with-errors"></div>
                    </div>
                </div>
                
                <div class="form-group">
                    <label class="col-md-4 control-label">E-Mail</label>
                    <div class="col-md-4 inputGroupContainer">
                        <div class="input-group">
                            <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
                            <input name="email" placeholder="E-Mail Address" class="form-control" type="text"/>
                        </div>
                        <div class="help-block with-errors"></div>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-md-4 control-label">Phone #</label>
                    <div class="col-md-4 inputGroupContainer">
                        <div class="input-group">
                            <span class="input-group-addon"><i class="glyphicon glyphicon-earphone"></i></span>
                            <input name="phone" placeholder="(845)555-1212" class="form-control" type="text"/>
                        </div>
                        <div class="help-block with-errors"></div>
                    </div>
                </div>



                <div class="form-group">
                    <label class="col-md-4 control-label">Create Password</label>
                    <div class="col-md-4 inputGroupContainer">
                        <div class="input-group">
                            <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                            <input name="password" placeholder="Create Password" class="form-control" type="password"/>
                        </div>
                        <div class="help-block with-errors"></div>
                    </div>
                </div>
                
                <div class="form-group">
                    <label class="col-md-4 control-label">Confirm Password</label>
                    <div class="col-md-4 inputGroupContainer">
                        <div class="input-group">
                            <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                            <input name="confirm_password" placeholder="Confirm Password" class="form-control" type="password"/>
                        </div>
                        <div class="help-block with-errors"></div>
                    </div>
                </div>
                
            
                
                <div class="form-group">
                    <label class="col-md-4 control-label"></label>
                    <div class="col-md-4">
                        <button type="submit" class="btn btn-warning">Submit <span
                                class="glyphicon glyphicon-send"></span></button>
                    </div>
                </div>
            </fieldset>
        </form>
    </div>
    )
}