import React, { useCallback, useRef } from "react";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import { FiLogIn, FiLock, FiMail } from "react-icons/fi";

import * as Yup from "yup";

import Logo from "../../assets/logo.svg";

import getValidationErrors from "../../utils/getValidationErrors";

import Input from "../../components/Input";
import Button from "../../components/Button";

import { useAuth } from "../../hooks/AuthContext";

import { Container, Content, Background } from "./styles";
import { useToast } from "../../hooks/ToastContext";
import { Link } from "react-router-dom";

interface SignInForm {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const { addToast } = useToast();

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
        if (error instanceof Yup.ValidationError) {
          formRef.current?.setErrors(getValidationErrors(error));
        }

        addToast({ type: 'error', title: 'Ocorreu um erro',  description: 'Não foi possível efetuar o login.' })
      }
    },
    [signIn, addToast]
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

        <Link to="/signup">
          <FiLogIn />
          Criar conta
        </Link>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
