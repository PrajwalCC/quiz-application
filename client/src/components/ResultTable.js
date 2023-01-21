import React, { useEffect, useState } from 'react'
import { getServerData, deleteServerData } from '../helper/helper'
import { Link } from 'react-router-dom';
import '../styles/Result.css';

import { useDispatch} from 'react-redux';
import { resetAllAction } from '../redux/question_reducer';
import { resetResultAction } from '../redux/result_reducer';

export default function ResultTable() {

    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`, (res) => {
            setData(res);
        });
        setIsLoaded(true);
    }, [isLoaded]);

    const dispatch = useDispatch()
    // deleting the result table
    function deleteResult(){
        deleteServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`, (res) => {
            setData(res);
        });
        dispatch(resetAllAction())// after deleting the result data we refreshing the all action, setting trace = 0 becoz we have to start quiz again
        dispatch(resetResultAction()) // deleting the prev user id, user's result array
    }

  return (
    <div>
        <table>
            <thead className='table-header'>
                <tr className='table-row'>
                    <td>Name</td>
                    <td>Attemps</td>
                    <td>Earn Points</td>
                    <td>Result</td>
                </tr>
            </thead>
            <tbody>
                { !data ?? <div>No Data Found </div>}
                {
                    data.map((v, i) => (
                        <tr className='table-body' key={i}>
                            <td>{v?.username || ''}</td>
                            <td>{v?.attempts || 0}</td>
                            <td>{v?.points || 0}</td>
                            <td>{v?.achived || ""}</td>
                        </tr>
                    ))
                }
                
            </tbody>
        </table>
        <div className="start">
            <Link className='btn' to={'/'} onClick={deleteResult}>Delete result Table</Link>
        </div>
    </div>
  )
}