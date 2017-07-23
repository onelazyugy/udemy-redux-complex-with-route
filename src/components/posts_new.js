import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
    
    renderField(field) {
        return (
            <div className="form-group"> 
                <label>{field.label}</label>
                <input 
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                {field.meta.touched ? field.meta.error : ''}
            </div>
        );
    }
    
    onSubmit(values) {
        console.log(values);
    }

    render() {
        const { handleSubmit } = this.props; //pass to this component on behalf of redux form
        //label prop can be anything, not exact name as 'label' it can be anthing
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Title For Post"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    label="Categories"
                    name="categories"
                    component={this.renderField}
                />
                <Field
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

//user press submit, this function will be called
function validate(values) {
    const errors = {};

    //validate the inputs from the values object
    if(!values.title ){
        errors.title = "Enter a title!";
    }
    if(!values.categories){
        errors.categories = "Enter some categories";
    }
    if(!values.content){
        errors.content = "Enter some content please!";
    }
    //if erros is empty, the form is fine to submit
    //if errors has *any* properties, redux form assumes form is invalid
    return errors;
}

//similar to connect react-redux library
export default reduxForm({
    validate,
    form: 'PostsNewForm'//this is one of the form, this reduxForm helper that allows redux form to communicate directly from component to th reducer that we defined
})(PostsNew);
