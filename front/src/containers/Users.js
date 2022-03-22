import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { Table, Switch, Space } from 'antd';
import { useHistory } from 'react-router-dom';

import '../assets/styles/style.css'

const columns = [
    {
        title: 'Avatar',
        dataIndex: 'avatar',
        key: 'avatar',
        render: text => <img alt="avatar" className='Card--avatar' src={text} />,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
];  

const Users = () => {        
    const [userList, setUserList] = useState ([])      
    const [dataList, setDataList] = useState ([])
    const history = useHistory();
    
    useEffect (()=> {        
        getUsers ()
    }, [])

    useEffect (()=> {

        const nCount = userList.length
        let tempList = []
        for (let i = 0; i < nCount; i++) {
            let column = {
                key: i.toString(),
                name: `${userList[i].name.first} ${userList[i].name.last}`,
                gender: `${userList[i].gender}`,
                email: `${userList[i].email}`,
                phone: `${userList[i].phone}`,
                avatar: `${userList[i].picture.thumbnail}`,
                age: `${userList[i].dob.age}`,          
            }

            tempList.push (column)
        }
        setDataList (tempList)

    }, [userList])

    const getUsers = async () => {
        const url = 'http://localhost:3000/api/get-user-info'
        const response = await axios.get (url)
        setUserList (response?.data?.results)        
    }    
    
    return (
        <main className='App'>
            <h1>Users</h1>            
            <div>
                <Table 
                    dataSource={dataList} columns={columns} 
                    onRow={(record, rowIndex) => {
                        return {
                          onClick: event => {
                              console.log ('event......', record)
                              history.push({
                                pathname: `/detail/${rowIndex+1}`,
                                state: userList[rowIndex]
                              });                            
                          },
                        };
                    }}                    
                />            
            </div>
        </main>
    )
}

export default Users
