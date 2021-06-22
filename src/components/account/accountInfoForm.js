import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { FormInput, FormButton } from '../formFields';
import history from '../../history';

class AccountForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;
        
        return (
            <form onSubmit={handleSubmit} className={`${className} account-info-form`}>
                <Field className='account-info-form__name' 
                    type="name" 
                    title="Name" 
                    placeholder="Name" 
                    name='name' 
                    component={FormInput} />
                
                <Field className='account-info-form__email' 
                    type="email" 
                    title="Email" 
                    placeholder="Email" 
                    name='email' 
                    component={FormInput} />

                <Field className='account-info-form__street-address' 
                    type="address" 
                    title="Street Address" 
                    placeholder="Street Address" 
                    name='address' 
                    component={FormInput} />
                
                <Field className='account-info-form__city' 
                    type="city" 
                    title="City" 
                    placeholder="City" 
                    name='city' 
                    component={FormInput} />

                <Field className='account-info-form__state' 
                    type="state" 
                    title="State" 
                    placeholder="State" 
                    name='state' 
                    component={FormInput} />
                
                <Field className='account-info-form__zipcode' 
                    type="zipcode" 
                    title="Zipcode" 
                    placeholder="Zipcode" 
                    name='zipcode' 
                    component={FormInput} />


                <Field className='account-info-form__password' 
                    type="password" 
                    title="Password" 
                    placeholder="Password" 
                    name='password' 
                    component={FormInput} />

                

               
            </form>
        )
    }
}

AccountForm = reduxForm({
    form: 'AccountForm'
})(AccountForm);

export default AccountForm;