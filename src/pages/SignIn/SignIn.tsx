import React, { useCallback, useRef, useContext } from "react";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import { FiLogIn, FiLock, FiMail } from "react-icons/fi";

import * as Yup from "yup";

import Logo from "../../assets/logo.svg";

import getValidationErrors from "../../utils/getValidationErrors";

import Input from "../../components/Input";
import Button from "../../components/Button";

import AuthContext from "../../context/AuthContext";

import { Container, Content, Background } from "./styles";

interface SignInForm {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useContext(AuthContext);

  const handleSubmit = useCallback(
    async (data: SignInForm) => {
      formRef.current?.setErrors({});

      try {
        const schema = Yup.object().shape({
          email: Yup.string()
            .email("Hmm, isso nào parece um e-mail válido")
            .required("O e-mail é obrigatório"),
          password: Yup.string().required("A senha é obrigatória"),
        });

        await schema.validate(data, { abortEarly: false });

        signIn({ email: data.email, password: data.password });
      } catch (error) {
        formRef.current?.setErrors(getValidationErrors(error));
      }
    },
    [signIn]
  );

  return (
    <Container>
      <Content>
        <img src={Logo} alt="The barber" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu Logon</h1>

          <Input name="email" icon={FiMail} type="text" placeholder="E-mail" />

          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Entrar</Button>

          <a href="forgot">Esqueci minha senha</a>
        </Form>

        <a href="forgot">
          <FiLogIn />
          Criar conta
        </a>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
