import React from 'react';

import TdURow from "./TdUrow";



const ReadOnlyTable=({items})=>{

    let usersList=[];
    if (items.length){
        usersList = items.map((e, i)=>{
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

export default ReadOnlyTable;