import React, { FC, useState } from "react";
import Label from 'components/label';
import Screen from 'components/screen';
import Seperator from 'components/seperator';
import Col from 'components/col';
import Button from 'components/button'
import Card from 'components/card';
import Input from "components/input";
import { useNavigate } from "react-router-dom";
import axios from "axios"


const LoginScreen: FC = () => {

  const [mail, setMail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate()
  const url = "https://localhost:44388/api/v1/";


  const submit = () => {
    axios.post(url + 'Login', {
      userMail: mail,
      userPassword: password
    }, { withCredentials: true })
      .then(function (response) {
        navigate(`/todoList`);
      })
      .catch(function (error) {
        console.log(error);
      })
  }


  return (
    <Screen justifyContent={'center'} alignItems={'center'}>
      <Card alignItems="center" justifyContent="center">
        <Col alignItems="center" justifyContent="center" >
          <Label text={'SIGN UP'} color={'black'} />
          <Seperator margin={'10'} />
          <Input type={'email'} id={'userMail'} onChange={(e) => setMail(e.target.value)} />
          <Seperator margin={'10'} />
          <Input type={'password'} id={'userPassword'} onChange={(e) => setPassword(e.target.value)} />
          <Seperator margin={'10'} />
          <Button text={'Giriş Yap'} height={'30'} width={'75'} color={'white'} backgroundColor={'#6687B1'} onClick={submit} type={"button"}  />
        </Col>
      </Card>
    </Screen>
  );
};

export default LoginScreen;