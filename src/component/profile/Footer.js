import './Footer.css'
function Footer() {

    return (
        <div className = "footer">
            <div>
            <p>
            <i class="fa-solid fa-phone fa-2x"></i>
           
            +216 21 253 685 
            </p>
            <p> <i class="fas fa-envelope-open-text fa-2x" style={{color: "brown"}}></i> khayatisofia@gmail.com</p>
            </div>
            
            <div class="ICO">
                <i class="fab fa-brands fa-facebook fa-2x ICONS"></i>
                <i class="fab fa-twitter-square fa-2x ICONS"></i>
                <i class="fab fa-linkedin fa-2x ICONS"></i>
                <i class="fab fa-github fa-2x ICONS"></i>
                <i class="fab fa-instagram-square fa-2x ICONS"></i>
            </div>
            <div style={{marginTop: "3%"}}>
           
                <p> <i class="fab fa-solid fa-circle-heart" style={{color:"brown"}}></i>Designed By <span style={{color:"brown"}}>SOFIA</span> with big love</p>
            </div>
            
         </div>
    );
    
  }
  
  
  export default Footer;