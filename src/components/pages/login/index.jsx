import React, { useState } from 'react'
import * as C from './styles'
import logo from '../../../assets/azulsf.png'
const Login = () => {

  const [idLogin, setIdLogin] = useState('')
  const [passwordLogin, setPasswordLogin] = useState('')

  const handleIdLogin = (e) => {
    setIdLogin(e.target.value)
  }
  const handlePasswordLogin = (e) => {
    setPasswordLogin(e.target.value)
  }

  return (
    <C.Container>
      <C.ContainerSmall>
        <C.ContainerLogo>
          <C.LogoImage src={logo}></C.LogoImage>
        </C.ContainerLogo>
        <C.ContainerInfo>
          <C.ContainerInfoForm>
            <C.InfoFormLabel for='idLogin'>ID</C.InfoFormLabel>
            <C.InfoFormInput id='idLogin' name='idLogin'
            type='text'
            placeholder='Digite seu ID'
            value={idLogin}
            onChange={handleIdLogin}
            ></C.InfoFormInput>

            <C.InfoFormLabel for='passwordLogin'>SENHA</C.InfoFormLabel>
            <C.InfoFormInput id='passwordLogin' name='passwordLogin'
            type='password'
            placeholder='Digite sua Senha'
            value={passwordLogin}
            onChange={handlePasswordLogin}
            ></C.InfoFormInput>
          </C.ContainerInfoForm>
        </C.ContainerInfo>
        <C.ContainerButton>
          <C.ButtonLogin>ENTRAR</C.ButtonLogin>
        </C.ContainerButton>
      </C.ContainerSmall>
    </C.Container>
  )
}

export default Login