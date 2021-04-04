import React,{useEffect} from 'react';
import TdRow from "./TdRow";

const ControlTable = (props) => {

    let productList = [];
    useEffect(()=>{

    }, [])
    if (props.items) {
        productList = props.items.map((e, i) => {
            return <TdRow key={i} product={e}/>
        });
    } else {
        productList = '<tr>Have no items</tr>';
    }
    return <div className="w-100">
        <table className="table table-striped ">
            <thead>
            <tr>
                <th>Title</th>
                <th>View</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            {productList}
            </tbody>
        </table>
    </div>
}


export default ControlTable;