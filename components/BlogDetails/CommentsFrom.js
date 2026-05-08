import React, { useState } from "react";
import SimpleReactValidator from "simple-react-validator";

const CommentForm = () => {
    const [forms, setForms] = useState({
        name: "",
        email: "",
        number: "",
        website: "",
        message: "",
    });

    const [validator] = useState(
        new SimpleReactValidator({
            className: "errorMessage",
        })
    );

    const changeHandler = (e) => {
        setForms({ ...forms, [e.target.name]: e.target.value });
        validator.showMessageFor(e.target.name); // Validate field on change
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (validator.allValid()) {
            setForms({
                name: "",
                email: "",
                number: "",
                website: "",
                message: "",
            });
        } else {
            validator.showMessages();
        }
    };

    return (
        <div className="comment-respond">
            <h3 className="comment-reply-title">Write your comment</h3>
            <form className="comment-form" onSubmit={submitHandler}>
                <div className="form-inputs">
                    <input
                        placeholder="Enter your name*"
                        type="text"
                        name="name"
                        value={forms.name}
                        onChange={changeHandler}
                    />
                    {validator.message("name", forms.name, "required|alpha")}

                    <input
                        placeholder="Enter your mail*"
                        type="email"
                        name="email"
                        value={forms.email}
                        onChange={changeHandler}
                    />
                    {validator.message("email", forms.email, "required|email")}

                    <input
                        placeholder="Enter your number*"
                        type="text"
                        name="number"
                        value={forms.number}
                        onChange={changeHandler}
                    />
                    {validator.message("number", forms.number, "required|numeric|min:10|max:15")}

                    <input
                        placeholder="Website*"
                        type="url"
                        name="website"
                        value={forms.website}
                        onChange={changeHandler}
                    />
                    {validator.message("website", forms.website, "url")}
                </div>
                <div className="form-textarea">
                    <textarea
                        id="comment"
                        placeholder="Enter your Message*"
                        name="message"
                        value={forms.message}
                        onChange={changeHandler}
                    />
                    {validator.message("message", forms.message, "required|min:10")}
                </div>
                <div className="terms">
                    <input className="checkbox" type="checkbox" id="saveInfo" />
                    <label htmlFor="saveInfo">
                        Save my name, email, and website in this browser for the next time I
                        comment.
                    </label>
                </div>
                <div className="form-submit">
                    <input className="theme-btn" id="submit" value="Send Message" type="submit" />
                </div>
            </form>
        </div>
    );
};

export default CommentForm;
