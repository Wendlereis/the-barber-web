import React from "react";
import { FiLock, FiMail, FiUser, FiArrowLeft } from "react-icons/fi";

import Logo from "../../assets/logo.svg";

import Input from "../../components/Input";
import Button from "../../components/Button";

import { Container, Content, Background } from "./styles";

const SignUp: React.FC = () => {
  return (
    <Container>
      <Background />
      <Content>
        <img src={Logo} alt="The barber" />

        <form>
          <h1>Faça seu cadastro</h1>

          <Input name="user" icon={FiUser} type="text" placeholder="Nome" />

          <Input name="email" icon={FiMail} type="text" placeholder="E-mail" />

          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Cadastrar</Button>
        </form>

        <a href="forgot">
          <FiArrowLeft />
          Voltar ao Logon
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
