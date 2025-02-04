import React from 'react'
import secureLocalStorage from 'react-secure-storage'
import AdminDashBoard from '../../components/Dashboard/AdminDashBoard'

const DashHome = () => {
    const RoleUser = secureLocalStorage.getItem('loginR')
    const EmailUser = secureLocalStorage.getItem('loginE')

    if(RoleUser === "admin"){
        return (
          <div>
              <AdminDashBoard />
          </div>
        )
    }
    else if(RoleUser === "moderator"){
        return (
          <div>

          </div>
        )
    }
    else if(RoleUser === "seller"){
        return (
          <div>

          </div>
        )
    }
    else if(RoleUser === "buyer"){
        return (
          <div>

          </div>
        )      
    }
}

export default DashHome