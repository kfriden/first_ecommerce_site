import React, { Component } from 'react';
import PageTitle from '../pageTitle';
import AccountForm from './accountInfoForm';

class AccountInfo extends Component {

    onSubmit = (fields) => {
        console.log(fields);
    }

    render() {
        return ( 
            <div className="account-info">
                <PageTitle className="account-info" title="Account Information" />
                <AccountForm onSubmit={this.onSubmit} className="account-info__form" />
            </div>
        )
    }
}

export default AccountInfo;