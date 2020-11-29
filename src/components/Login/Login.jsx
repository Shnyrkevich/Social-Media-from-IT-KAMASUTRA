import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import { signInThunkActionCreator } from '../../state/thunks/auth-thunk';
import { Input } from '../form-controller/form-controller';
import { minLengthValidate, emailValidate, required } from '../../utils/validators/validators';
import { Redirect } from 'react-router-dom';

const minLengthValidate8 = minLengthValidate(8);

const LoginForm = (props) => {
  return (
    <form className="login-form" onSubmit={props.handleSubmit}>
      <div className="login-form_login-container">
        <Field
          name="inputLogin"
          component={Input}
          placeholder='Login'
          type='email'
          validate={[emailValidate, required]}
        />
      </div>
      <div className="login-form_password-container">
        <Field
          name="inputPassword"
          component={Input}
          placeholder='Password'
          type='password'
          validate={[minLengthValidate8, required]}
        />
      </div>
      <div className="login-form_checkbox-container">
        <Field name="inputCheckbox" component={Input} type="checkbox"/> Remember Me
      </div>
      { props.error ? 
        <div className='form-error'>
          <span> {props.error} </span>
        </div> : 
        null
      }
      <div className='login-from_btn-container'>
        <button className='login-form_submit-btn' type='submit'>Sign In</button>
      </div>
    </form>
  );
} 

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData)
    props.signIn(formData.inputLogin, formData.inputPassword, formData.inputCheckbox);
  }

  return props.isAuth ? 
    <Redirect to='/profile' /> :
    <div className="login-container">
      <h1>Sign In</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>;
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (email, password, rememberMe) => dispatch(signInThunkActionCreator(email, password, rememberMe)),
  }
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.authReducer.isAuth,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);