import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import GoogleButton from '../../components/ButtonGoogleSU'
import SignUpButton from '../../components/ButtonSignUp'
import TitleLogIn from '../../components/LogIn'
import TitleTerms from '../../components/TermsAndPrivacy'
import { EmailContainer, FormOutContainer, FullNameContainer, FullnameInputContainer, FullNameTitle, GettingStartedContainer, LineContainer1, LineWrapper, LoginContainer, LoginInput, LoginInputContainer, PasswordContainer, PasswordInput, PasswordInputContainer, ResponsiveContainer, Title, TitleContainer, TitleEmail, TitleOr, TitlePassword, TitleWelcome } from './styles';

const SignUpSchema = Yup.object().shape({
  password: Yup.string()
    .required('*Este campo não pode ser vazio.')
    .min(6, '*A senha não pode ter menos de 6 caracteres.'),
  email: Yup.string().email('*E-mail está incorreto').required('*Este campo não pode ser vazio.'),
  fullName: Yup.string()
    .required('*Este campo não pode ser vazio.'),
});

const SignUp = () => {
  return (
    <LoginContainer>
      <TitleContainer>
        <Title> Invision </Title>
      </TitleContainer>

      <GettingStartedContainer>
        <TitleWelcome> Getting Started </TitleWelcome>
      </GettingStartedContainer>

      <Formik
        initialValues={{
          password: '',
          email: '',
          fullName: '',
        }}
        validationSchema={SignUpSchema}
        onSubmit={values => {
          alert('enviado')
          console.log(values);
        }}
      >
        {({ errors, touched, handleChange, values }) => (

          <Form>
            <FormOutContainer>
              <FullNameContainer>
                <FullNameTitle>Full name</FullNameTitle>
              </FullNameContainer>

              <FullnameInputContainer>
                <LoginInput
                  name="fullName"
                  id="fullName"
                  onChange={handleChange}
                  value={values.fullName}
                  type="text"
                  className={errors.fullName && touched.fullName ? "error" : null}
                />
                {errors.fullName && touched.fullName ?
                  <div>{errors.fullName}</div>
                  : null}
              </FullnameInputContainer>

              <EmailContainer>
                <TitleEmail >Users name or Email</TitleEmail>
              </EmailContainer>

              <LoginInputContainer>
                <LoginInput
                  type="text"
                  name="email"
                  id="email"
                  onChange={handleChange}
                  value={values.email}
                  className={errors.email && touched.email ? "error" : null}
                />
                {errors.email && touched.email ? (
                  <div>{errors.email}</div>
                ) : null}
              </LoginInputContainer>

              <PasswordContainer>
                <TitlePassword >Password</TitlePassword>
              </PasswordContainer>

              <PasswordInputContainer>
                <PasswordInput
                  type="password"
                  name="password"
                  id="password"
                  onChange={handleChange}
                  value={values.password}
                  className={errors.password && touched.password ? "error" : null}
                />
                {errors.password && touched.password ? (
                  <div>{errors.password}</div>
                ) : null}
              </PasswordInputContainer>
            </FormOutContainer>
            <SignUpButton />
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

        <TitleTerms />

        <TitleLogIn />
      </ResponsiveContainer>

    </LoginContainer>
  )
}

export default SignUp;