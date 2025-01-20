import React, { useState } from 'react'
import InputDefult from '../Forms/InputDefult';

const HomePageData = () => {
    // const [allactiveAuction, setallactiveAuction] = useState([])
    const [users, setUsers] = useState([
        {
            _id: 1,
            img: '',
            name: 'Iphone x',
            desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi natus veniam possimus optio molestiae aliquam rerum qui fugiat explicabo reprehenderit provident suscipit, omnis quibusdam quo hic, corrupti obcaecati. Ut, illo?',
            start_at: '$300',
            buyers: 2,
        },
        {
            _id: 2,
            img: '',
            name: 'Car',
            desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi natus veniam possimus optio molestiae aliquam rerum qui fugiat explicabo reprehenderit provident suscipit, omnis quibusdam quo hic, corrupti obcaecati. Ut, illo?',
            start_at: '$3000',
            buyers: 2,
        },
    ]);

    const [searchQuery, setSearchQuery] = useState('');

    const filteredUsers = users.filter(
        (user) =>
            user.name.toLowerCase().startsWith(searchQuery.toLowerCase()) ||
            user.email.toLowerCase().startsWith(searchQuery.toLowerCase())
    );



  return (
    <div>
        <div className="mb-4">
            <InputDefult 
                type={'text'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={'Search'}
            />
        </div>
        
    </div>
  )
}

export default HomePageData