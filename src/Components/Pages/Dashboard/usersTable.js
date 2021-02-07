import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {getUsers} from '../../../redux/user/user.reducer';
import TdURow from "./TdUrow";



const UsersTable=({users, getUsers})=>{
    useEffect(()=>{
       getUsers();
    },[]);
    console.log('usesP', users);
    let usersList=[];
    if (users.length){
        usersList = users.map((e, i)=>{
            return <TdURow key={i} user={e}/>
        });
    }else{
        usersList = '<tr>Have no Uses</tr>';
    }

    return <div>

        <table className="table table-striped">
            <thead>
            <tr>
                <th>username</th>
                <th>email</th>
                <th>role</th>
            </tr>
            </thead>
            <tbody>
            {usersList}
            </tbody>
        </table>
    </div>
}

const mapStateToProps = state =>({
    users:state.user.users
});

export default connect(mapStateToProps,{getUsers})(UsersTable);