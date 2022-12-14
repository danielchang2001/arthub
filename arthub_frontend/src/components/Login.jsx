import React from 'react'
// import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { FcButtingIn, FcGoogle } from 'react-icons/fc'; 
import shareVideo from '../assets/share.mp4'
import logo from '../assets/logowhite.png'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useGoogleLogin } from '@react-oauth/google';

const Login = () => {
  
  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video
          src={shareVideo}
          type='video/mp4'
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
        />
        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
          <div className="p-5">
            <img src={logo} width="130px" alt="logo" />
          </div>
          <div className="shadow-2xl">
            {/* <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_TOKEN}> */}
            <GoogleLogin
              // clientID = {process.env.GOOGLE_CLIENT_TOKEN}
              // buttonText="Login"
              onSuccess={credentialResponse => {
                console.log(credentialResponse);
              }}
              onError={() => {
                console.log('Login Failed');
              }}
            />
            {/* </GoogleOAuthProvider> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login