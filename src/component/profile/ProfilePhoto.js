
import my_profile_img from '../mypicture.jpg'
function ProfilePhoto() {
  return (
    <div className="text">
     <img src = {my_profile_img} alt = "don't download" style = {{width:"200px", 
     height: "200px", borderRadius: "50%", marginLeft: "10%", marginTop: "5%"}}/>   
    </div>
  );
}

export default ProfilePhoto;
