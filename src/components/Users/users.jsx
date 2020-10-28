import React from 'react';
import './users.css';
import User from './User/User';
import Pagination from '../Pagination/Pagination';

//?api_key=ef8bb42c-a59c-4bee-8ca5-3319518b1e19

function Users(props) {
  return (
    <div className='users'>
      <h2 className='users-title'>Users</h2>
      <Pagination 
        activePage={props.currentPage}
        pagesNamber={ Math.ceil(props.totalUserCount / props.pageSize) }
        badgeAction={props.paginationClick}
      />
      <div className='users-container'>
        {
          props.users.map(el => <User user={el} key={el.id} subscribeAction={() => props.subscribeToUser(el.id, el.followed)}/>)
        }
      </div>
      <button onClick={() => alert('Something wrong')} className='users-btn_show-more'>Show More</button>
    </div>
  );
} 

export default Users;