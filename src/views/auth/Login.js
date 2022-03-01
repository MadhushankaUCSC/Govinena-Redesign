import React from 'react'
import LoginForm from '../../components/Auth/LoginForm'
import ProminentAppBar from '../../components/ProminentAppBar'
export default function Login({id}) {
  return (
    <div id={id}>
      <ProminentAppBar/>
     <LoginForm />
    </div>
  )
}
