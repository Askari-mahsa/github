import { useState,useEffect } from "react";
import { Navigate, useLocation } from "react-router";
import { callInfo, callUrl, getProfileDetailService } from '../services/callApi';
import { useNavigate } from "react-router";
import './Profile.css'

const Profile = () => {
    const [urls, setUrls] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const [usersData,setUsersData]=useState({})
    console.log("first",usersData)
    const navigate = useNavigate()
    const location = useLocation()
    const [info,setInfo]=useState([])
    const name= location.state.loginName
  
    useEffect(()=>{
        getProfileDetailService(name).then(res => {
        setUsersData(res)}).catch(()=>{
     })
},[])
    useEffect(()=>{
        callUrl(name).then(res=>{setUrls(res.data)})
    },[])
    
    useEffect(()=>{
        callInfo(name).then(res=>{setInfo(res.data)})
    },[])
  
    
    const backButton = ()=>{
        navigate(-1)
    }

let profileData = usersData&&usersData.data
  
    return (
        <>
            <button className='backToSearch' onClick={backButton}>
            <i class="fa fa-arrow-circle-left"></i></button>
               <div  className="profilecard card2">
                    <img alt="profile" src={profileData?.avatar_url}/>
                    {
                        info.map((items)=>{
                            
                            return(<p>{items.bio}</p>)
                    })
                    }
        </div> 

        <div className="card2">
             <div className='cardbutton'>
                <button className='Followers'>Followers:</button>
                <button className='Folloing'>Folloing:</button>
                <button className='publicrespons'>Public Repos:</button>
                <button className='publicgits'>Public Gists:</button>
            </div>
        </div>
        {  
            urls.map((item)=>{
            console.log("ITEMS ",item,urls)
            return(<a href={item.html_url} className="card2">{item.name}</a>)  }

            )
        }
            
        
       </>
    );
};

export default Profile;