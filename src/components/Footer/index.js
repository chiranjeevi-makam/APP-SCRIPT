import './index.css'  
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



const Footer=()=><div className="FooterBackGround">  
    <div className="hideSmall"> 
        <div className="FotterTopPart"> 
        <div>
            <h4 className="FooterFirstHead">Be the first to know</h4> 
            <p className="FooterSignUp">Sign up for updates from mettā muse.</p> 
            <div className="emailAndSubScribe"> 
                <input type="email" className="emailInput"/> 
                <button className="subscribeButton" type="button">SUBSCRIBE</button>
            </div>
        </div> 

        <div className="firstPartSecond">
            <h3 className="contactUs">CONTACT US</h3> 
            <p className="number">+44 221 133 5360</p>  
            <p className="email">customercare@mettamuse.com</p> 
            <h4 className="contactUs">Currency</h4> 
            <h3><img src="\assets\Group.png" alt="usaImage" className="countryImage"/> <span className="usd">.USD</span></h3> 
            <p className="tran">Transactions will be completed in Euros and a currency reference is available on hover.</p>
        </div>

        </div> 
    <hr/> 
    <div className="footerSecond"> 
    
        
        <ul className="unorder"> 
        <li><h3 className="FooterFirstHead">mettā muse</h3> </li>
            <li>About Us</li> 
            <li>Stories</li>
            <li>Artisans</li> 
            <li>Boutiques</li> 
            <li>Contact Us</li> 
            <li>EU Compliances Docs</li>
        </ul> 

        <ul className="unorder"> 
        <li><h3 className="FooterFirstHead">Quick Links</h3> </li>
            <li>Terms & Conditions </li>
            <li>Orders & Shipping</li> 
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li> 
            <li>Return & Refunds</li> 
            <li>FAQs</li> 
            <li>Privacy Policy</li> 
            <li>Terms & Conditions</li>
        </ul> 

        <div>
        <h3 className="FooterFirstHead">Follow Us</h3> 
        <div className="Social">
            <img src="\assets\svg.png" alt="insta" className="IconsF"/> 
            <img src="\assets\Vector.png" alt="linkedIn" className="IconsF"/> 
            
        </div> 
        <div>
        <h3 className="FooterFirstHead">mettā muse Accepts</h3>  
        <ul className="cards"> 
        <li><img src="\assets\Group 136188.png" className="cardPhoto" alt="ATM"/></li>
        <li><img src="\assets\Group 136190.png" className="cardPhoto" alt="ATM"/></li> 
        <li><img src="\assets\Group 136192.png" className="cardPhoto" alt="ATM"/></li> 
        <li><img src="\assets\Group 136193.png" className="cardPhoto" alt="ATM"/></li> 
        <li><img src="\assets\Group 136194.png" className="cardPhoto" alt="ATM"/></li>
        <li><img src="\assets\Group 136195.png" className="cardPhoto" alt="ATM"/></li>
        </ul>
        </div>
        </div> 
        
    </div> 
    <div>
        <p className='copyRight'>Copyright © 2023 mettamuse. All rights reserved.</p>
    </div>

    </div> 

    <div className="mobileView">  
    <h3 className="smallFootHead">Be the first to know</h3> 
    <p className="smallFootPara">Lorem Ipsum is simply dummy text of the printing and typesetting industry. this is simply dummy text.</p>
    <div className="smallScreen_inputAndButton"> 
        <input type="email" className="sm_InputDesign" placeholder="Enter your e-mail...."/> 
        <button type="button" className="sm_subScribe_button">SUBSCRIBE</button>
    </div> 
    <hr/> 
    <h3 className="smallFootHead">Call Us</h3> 
    <p className="smallFootPara"> +44 221 133 5360.customercare@mettamuse.com</p> 
    <hr/> 
    <h3 className="smallFootHead">Currency</h3> 
    <h3><img src="\assets\Group.png" alt="usaImage" className="countryImage"/> <span className="usd">.USD</span></h3>  
    <hr/> 
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          mettā muse
        </AccordionSummary>
        <AccordionDetails>
        About Us
        </AccordionDetails> 
        <AccordionDetails>
        Stories
        </AccordionDetails> 
        <AccordionDetails>
        Artisans
        </AccordionDetails> 
        <AccordionDetails>
        Boutique
        </AccordionDetails> 
        <AccordionDetails>
        EU Compliances Docs
        </AccordionDetails>
      </Accordion> 
      <hr/>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Quick Links
        </AccordionSummary>
        <AccordionDetails>
        About Us
        </AccordionDetails> 
        <AccordionDetails>
        Stories
        </AccordionDetails> 
        <AccordionDetails>
        Artisans
        </AccordionDetails> 
        <AccordionDetails>
        Boutique
        </AccordionDetails> 
        <AccordionDetails>
        EU Compliances Docs
        </AccordionDetails>
      </Accordion>  
      <hr/>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Follow Us
        </AccordionSummary> 
        <AccordionDetails>
        Instagram
        </AccordionDetails> 
        <AccordionDetails>
        linkedIn
        </AccordionDetails> 
        
    </Accordion>
    </div> 
    <hr/> 
    <h3 className="FooterFirstHead">mettā muse Accepts</h3>  
        <ul className="cards"> 
        <li><img src="\assets\Group 136188.png" className="cardPhoto" alt="ATM"/></li>
        <li><img src="\assets\Group 136190.png" className="cardPhoto" alt="ATM"/></li> 
        <li><img src="\assets\Group 136192.png" className="cardPhoto" alt="ATM"/></li> 
        <li><img src="\assets\Group 136193.png" className="cardPhoto" alt="ATM"/></li> 
        <li><img src="\assets\Group 136194.png" className="cardPhoto" alt="ATM"/></li>
        <li><img src="\assets\Group 136195.png" className="cardPhoto" alt="ATM"/></li>
        </ul> 
    <div>
        <p className='copyRight'>Copyright © 2023 mettamuse. All rights reserved.</p>
    </div>
    </div>

</div> 


export default Footer