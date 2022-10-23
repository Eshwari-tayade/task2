import React from 'react'

const Users_card = ({loading,users}) => {
    return loading ? (   
          <div id="main">
            <img src="https://www.vyond.com/wp-content/uploads/2021/01/Book-Club-8-480p-4fa264dd-e035-40cc-8907-e78d890c8c4e.gif" alt="Loaading.." className="loader"/>
          </div>
        ) : 
        (
          <div id="main">
    
          {users.map(user =>
                      <div className="project column-3">
                        {
                          console.log(user)
                        }
                        <div className="profile">
                          <img src={user.avatar} alt={user.avatar} className="avatar"></img>
                          <h1 className="name">{user.first_name} {user.last_name}</h1>
                          <p className="email">{user.email}</p>
                          <p>ID: {user.id}</p>
                        </div>
                      </div>
            )
          }
          </div>
        )
}

export default Users_card;