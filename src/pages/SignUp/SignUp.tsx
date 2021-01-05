import React, { useCallback, useRef } from "react";
import { FiLock, FiMail, FiUser, FiArrowLeft } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import * as Yup from "yup";

import Logo from "../../assets/logo.svg";

import getValidationErrors from "../../utils/getValidationErrors";

import Input from "../../components/Input";
import Button from "../../components/Button";

import apiClient from "../../services/apiClient";

import { useToast } from "../../hooks/ToastContext";

import { Container, Content, Background } from "./styles";

const SignUp: React.FC = () => {
  const  { addToast } = useToast();
  const  history = useHistory();

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    formRef.current?.setErrors({});
    
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required("O nome é obrigatório"),
        email: Yup.string()
          .email("Hmm, isso nào parece um e-mail válido")
          .required("O e-mail é obrigatório"),
        password: Yup.string().min(6, "A senha deve ter 6 digitos"),
      });

      await schema.validate(data, { abortEarly: false });

      await apiClient.post('users', data);

      history.push('/signin')

      addToast({ type: 'success', title: 'Tudo certo!', description: 'Você já pode acessar seu perfil.'  });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        formRef.current?.setErrors(getValidationErrors(error));
      }

      addToast({ type: 'error', title: 'Ocorreu um erro',  description: 'Não foi possível efetuar o cadastro.' })
    }
  }, [addToast, history]);

  return (
    <Container>
      <Background />
      <Content>
        <img src={Logo} alt="The barber" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>

          <Input name="name" icon={FiUser} type="text" placeholder="Nome" />

          <Input name="email" icon={FiMail} type="text" placeholder="E-mail" />

          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Cadastrar</Button>
        </Form>

        <Link to="signin">
          <FiArrowLeft />
          Voltar ao Logon
        </Link>
      </Content>
    </Container>
  );
};

export default SignUp;
