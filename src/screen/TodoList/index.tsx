import React, { FC, useState, useEffect } from "react";
import Label from 'components/label';
import Screen from 'components/screen';
import Seperator from 'components/seperator';
import Col from 'components/col';
import Row from 'components/row';
import Button from 'components/button'
import Card from 'components/card';
import axios from "axios";
import Modal from "components/modal";

type TWork = {
    WorkID: number,
    UserID: number,
    WorkName: string,
    WorkDetail: string,
    WorkStatus: number,
    CreateDate: string,
    FinishDate: string,
    LastLogin: string,
    UserMail: string,
    UserName: string,
    UserPassword: string,
}
const LoginScreen: FC = () => {

    const [todos, setTodos] = useState<TWork[]>([]);
    const [todoNew, setTodoNew] = useState<string>();
    const [isModal, setIsmodal] = useState<boolean>(false);
    const [modalInputDefaultValue, setModalInputDefaultValue] = useState<string>();
    const [workID, setWorkID] = useState<number>();

    const toggleModal = () => setIsmodal(!isModal);
    const url = "https://localhost:44388/api/v1/";

    useEffect(() => {
        getTodos();
    }, []);

    const getTodos = () => {
        axios.get(url + 'listWork', { withCredentials: true })
            .then(function (response) {
                setTodos(response.data)
            })
            .catch(error => {
                console.log(error);
            })
    }

    const postNewWork = () => {

        let newWork = {
            WorkID: workID,
            WorkName: todoNew,
        }

        axios.post(url + 'postWork', newWork, { withCredentials: true })
            .then(function (response) {
                getTodos();
                toggleModal();

            })
            .catch(function (error) {
                console.log(error);
            })
    }

    const deleteWork = (workID: number) => {
        let newWork = {
            WorkID: workID
        }
        axios.post(url + 'DeleteWork', newWork, { withCredentials: true })
            .then(function (response) {
                getTodos();

            })
            .catch(function (error) {
                console.log(error);
            })
    }

    const newWork = () => {
        setWorkID(0);
        setModalInputDefaultValue("");
        toggleModal();
    }

    const nameEdit = (_row: number) => {
        setWorkID(todos[_row].WorkID);
        setModalInputDefaultValue(todos[_row].WorkName);
        toggleModal();
    }

    return (
        <Screen justifyContent={'center'} alignItems={'center'}>
            <Modal isVisible={isModal} inputDefValue={modalInputDefaultValue} buttonOnClick={postNewWork} onChange={(e) => setTodoNew(e.target.value)} />
            <Card justifyContent={'center'} alignItems={'center'}>
                <Col>
                    <Col alignItems={'center'}>
                        <Label text={'TODO LİST'} />
                    </Col>
                    <Seperator margin={"15"} />
                    <Row justifyContent={'flex-end'} alignItems={'center'}>
                      
                        <Button text={'Ekle'} height={'30'} width={'100'} color={'white'} backgroundColor={'#008000'} onClick={newWork} type={"submit"} />
                    </Row>
                    <Seperator margin={'10'} />
                    <Seperator margin={'10'} />
                    <Col>
                        {
                            todos.map((todo, id) => (
                                <Row key={id} justifyContent={'space-between'} alignItems={'center'}>
                                    <Label  text={todo.WorkName} />
                                    <Seperator margin={'10'} />
                                    <Row alignItems={'center'}>
                                        <Button text={'Sil'} height={'30'} width={'30'} color={'white'} backgroundColor={'#ff2400'} onClick={() => deleteWork(todo.WorkID)} type={"submit"} icon={"delete"} />
                                
                                        <Button text={'Düzenle'} height={'30'} width={'30'} color={'white'} backgroundColor={'#F9D71C'} onClick={() => nameEdit(id)} type={"submit"} icon={'pencil'} />
                                    </Row>
                                </Row>
                            ))
                        }
                    </Col>
                </Col>
            </Card>
        </Screen>
    );
};


export default LoginScreen;