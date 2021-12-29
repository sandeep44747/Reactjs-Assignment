import React, { useEffect, useState } from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SendIcon from '@mui/icons-material/Send';
const Postview=()=>{
    const [post,setPost]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:3004/user")
        .then(request=>request.json())
        .then(response=>setPost(response))
    },[])
    return(<>
    {post.map((data,index)=>{
        return(<>
            <div className="maincontainer">
                <div className="postcontainer">   
                    <div key={index} className="header">
                        <div className="fistheader">
                            <h4>{data.name}</h4>
                            <p style={{color:"gray"}}>{data.location}</p>
                        </div>
                        <div className="threedot">
                            <h1>...</h1>
                        </div>
                    </div>
                    <div className="postImage">
                        <img src={data.PostImage} height="270px" width="496px"/>
                    </div>
                    <div className="BottomContainer">
                        <div className="bottomfirst">
                            <div className="bottomsecond">
                                
                                <FavoriteBorderIcon />
                                <SendIcon/>
                            </div>
                            <div className="bottomdate">
                            <p>{data.date}</p>
                            </div>
                        </div>
                            <div>
                            <p>{data.likes}</p>
                            </div>
                            <div>
                                <h3>{data.description}</h3>
                            </div>
                        
                    </div>
                </div>
            </div>
        </>)
    })}
</>);
}
export default Postview;