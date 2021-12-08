import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import GoogleButton from '../../components/ButtonGoogleSI'
import SignInButton from '../../components/ButtonSignIn'
import LinkAccount from '../../components/Link'
import { EmailContainer, FormContainer, LineContainer1, LineWrapper, LoginContainer, LoginInput, LoginInputContainer, PasswordContainer, PasswordInput, PasswordInputContainer, ResponsiveContainer, Title, TitleContainer, TitleEmail, TitleForgotPassword, TitleForgotPasswordContainer, TitleOr, TitlePassword, TitleWelcome, TitleWelcomeContainer } from './styles';

const SignInSchema = Yup.object().shape({
  password: Yup.string()
    .required('*Este campo não pode ser vazio'),
  email: Yup.string().email('o e-mail está incorreto').required('*Este campo não pode ser vazio'),
});

const SigIn = () => {
  return (
    <LoginContainer>
      <TitleContainer>
        <Title> Invision </Title>
      </TitleContainer>

      <TitleWelcomeContainer>
        <TitleWelcome> Welcome to Invision </TitleWelcome>
      </TitleWelcomeContainer>

      <Formik
        initialValues={{
          password: '',
          email   : '',
        }}
        validationSchema = {SignInSchema}
        onSubmit         = {values => {
          alert('enviado')
          console.log(values);
        }}
      >
        {({ errors, touched, handleChange, values }) => (
          <Form>
            <FormContainer>
              <EmailContainer>
                <TitleEmail>Users name or Email</TitleEmail>
              </EmailContainer>

              <LoginInputContainer>
                <LoginInput
                  name      = "email"
                  id        = "email"
                  onChange  = {handleChange}
                  value     = {values.email}
                  type      = "text"
                  className = {errors.email && touched.email ? "error" : null}
                />
                {errors.email && touched.email ?
                  <div>{errors.email}</div>
                  : null}
              </LoginInputContainer>

              <PasswordContainer>
                <TitlePassword>Password</TitlePassword>
              </PasswordContainer>

              <PasswordInputContainer>
                <PasswordInput
                  type      = "password"
                  name      = "password"
                  id        = "password"
                  onChange  = {handleChange}
                  value     = {values.password}
                  className = {errors.password && touched.password ? "error" : null}
                />
                {errors.password && touched.password ?
                  <div>{errors.password}</div>
                  : null}
              </PasswordInputContainer>

              <TitleForgotPasswordContainer>
                <TitleForgotPassword>Forgot password?</TitleForgotPassword>
              </TitleForgotPasswordContainer>
            </FormContainer>

            <SignInButton />
          </Form>
        )}
      </Formik>

      <ResponsiveContainer>
        <LineWrapper>
          <LineContainer1 />
          <TitleOr>
            Or
          </TitleOr>
          <LineContainer1 />
        </LineWrapper>

        <GoogleButton />

        <LinkAccount />
      </ResponsiveContainer>

    </LoginContainer>
  )
}

export default SigIn;