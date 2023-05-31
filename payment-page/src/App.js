import logo from './assets/LOGO.png';
import group20 from './assets/Group20.png'
import group19 from './assets/group19.png'
import group16 from './assets/group16.png'
import group17 from './assets/group17.png'
import group15 from './assets/group15.png'
import iconclock from './assets/Icon-Clock.png'

import Search from './assets/Search Icon.png'

import './App.css';

function App() {
  return (
    
    <body>
 <nav class="navbar">
        <div class="container">
            <div class="left-content">
                <div class="logo">
                    <img class="EDYODA" src={logo} />   
                </div>
                <div class="course">
                    <p class="course-text">Course</p> 
                    <div class="Icon-Chevron-Down"> 
                       <select class="vector"></select>
                    </div> 
                </div>
                <div class="Programs">
                    <p class="program-text">Programs</p> 
                    <div class="Icon-Chevron-Down"> 
                       <select class="vector"></select>
                    </div> 
                   
                </div>
            </div>    
            <div class=" right-content">
                <div class="Search-Icon">
                    <div class="vector">
                        <img src={Search}/>
                    </div>
                </div>
                <div class="login">
                    <p class="text">log in</p>
                </div>
                    <button class="primary-bttn">JOIN NOW</button>      
            </div>
        </div>
    </nav>
        <div class="content-container">
        <div class="main-lockup">
            <header class="header">
                <div class="frame-12502">
                     <p class="frame-12502-text">Access curated courses worth</p>
                </div>     
                <div class="frame12804">
                    <div class="frame12804-₹18-500">₹ 18,500<h3 class="frame12804-Rectangle"></h3></div>
                    <div clas="frame12589" ><h4 class="at-just">at just</h4></div> 
                    <div class="frame12590"><h3 class="₹99">₹ 99</h3></div>
                    <div class="frame12591"><h4 class="per-year"> per year!</h4></div>  
                </div>
            </header>
            <div class="pointer1">
                <div class="pointer1-icon1">
                   <div class="pointer1-Group"> 
                        <img class="pointer1-vector" src={group20} />
                    </div> 
                </div>
                <div class="pointer1-text-container1">
                <p class="pointer1-text"><span>100+</span> relevant courses</p>
                </div>
                
                 
            </div>
            <div class="pointer2">
                <div class="pointer2-icon1">
                    <img class="pointer2-Group" src={group19} />
                </div>
                <div class="pointer2-text-container1">
                <p class="pointer2-text"><span>20,000+</span>Hours of content</p> 
                    </div>
            </div>
            <div class="pointer3">
                <div class="pointer3-icon1">
                    <img class="pointer3-Group" src={group16} />
                </div>
                <div class="pointer3-text-container1">
                <p class="pointer3-text"><span>Exclusive </span> webinar access</p> 
                    </div>
            </div>
            <div class="pointer4">
                <div class="pointer4-icon1">
                    <img class="pointer4-Group" src={group17} />
                </div>
                <div class="pointer4-text-container1">
                <div  class="pointer4-text">  <div class="pointer4-text4"> Scholarship worth <span> ₹94,500 </span></div></div>
                    </div>
            </div>
            <div class="pointer5">
                <div class="pointer5-icon1">
                    <img class="pointer5-Group" src={group15}/>
                </div>
                <div class="pointer5-text-container1">
                <p class="pointer5-text"> <span> Ad Free</span>learning experience </p> 
                </div>
            </div>
        </div>    
    <div class="form">
    <div class="process-bar">
        <div class="stage1">
            <div class="stage1-icon"></div>
            <p class="stage1-t1">1</p>
            <p class="stage1-text1">Sign Up</p>
        </div>
        <div class="stage2">
            <div class="stage2-icon"></div>
            <p class="stage2-t2">2</p>
            <p class="stage2-text2">Subscribe</p>
        </div>
    </div>
    <div class="form-header">
        <h5 class="form-header-text">Select your subscription plan</h5>
    </div>
    <div class="input-container">
        <div class="text-field1">
            <div class="field1-radio-button">
            <div ><input type="radio"/></div>
            </div>
            <div class="field1-text-container">
                <h5 class="field1-text">12 Months Subscription</h5>
                <div class="field1-right-text-container1">
                <div class="field1-top-text">
                    <p class="f1top-text1">Total</p>
                    <p class="f1top-text2">₹99</p>
                </div>
                <div class="field1-bottom-text">
                    <p class="f1bottom-text1">₹8</p>
                    <p class="f1bottom-text2">/mo</p>
                </div>
                
            </div>
            
                <div class="field1-tag">
                    <p class="offer-expired">Offer expired</p>
                </div>
            </div>
        </div>
        <div class="text-field2">
            <div class="field2-radio-button">
               <label class="field2-vector">
        
                    <input class="field2-vector" type="checkbox" />
                </label>
            </div>
            <div class="field2-text-container2">
                <div class="field2-text">12 Months Subscription</div>
                <div class="field2-right-text-container">
                <div class="field2-top-text">
                    <p class="f2top-text1">Total</p>
                    <p class="f2top-text2">₹179</p>
                </div>
                <div class="field2-bottom-text">
                    <p class="f2bottom-text1">₹15</p>
                    <p class="f2bottom-text2">/mo</p>
                </div>
            </div>
            
                <div class="tag2">
                    <p class="Recommended">Recommended</p>
                </div>
            </div>
        </div>
        <div class="text-field3">
            <div class="field3-radio-button">
                <div><input type="radio"/></div>
            </div>
                <div class="field3-text-container">
                    <div class="field3-text3">6 Months Subscription</div>
                    <div class="field3-left-text-container">
                        <div class="field3-top-text">
                            <p class="f3top-text1">Total</p>
                            <p class="f3top-text2">₹149</p>
                        </div>
                        <div class="field3-bottom-text">
                           <p class="f3bottom-text1">₹25</p>
                           <p class="f3bottom-text2">/mo</p>
                        </div>
                    </div>
                
                </div>
        </div>
        <div class="text-field4">
            <div class="field4-radio-button">
            <div class="f4-vector">
            <input type="radio"/>
            </div>
            </div>
            <div class="field4-text-container">
                <p class="field4-text4">3 Months Subscription</p>
                <div class="field4-left-text-container">
                    <div class="field4-top-text">
                      <p class="f4top-text1">Total</p>
                       <p class="f4top-text2">₹99</p>
                   </div>
                   <div class="field4-bottom-text">
                      <p class="f4bottom-text1">₹33</p>
                      <p class="f4bottom-text2">/mo</p>
                   </div>
               </div>
            </div>
            
        </div>
    </div>
    <div class="summary-container">
        <div class="s-c-text-container">
            <p class="c-text1">Subscription Fee</p>
            <p class="c-text2">₹18,500</p>
        </div>
        <div class="alert">
            <div class="alert-header">
                <p class="atext1">Limited time offer</p>
                <p class="atext2">- ₹18,401</p>
            </div>
            <div class="alert-body">
                <div class="a-icon-clock">
                     <img class="i-c-vector"src={iconclock} />
                </div>
                    <p class="alert-body-text">Offer valid till 25th March 2023 </p>
               
            </div>
        </div>
        <div class="s-text-container">
            <p class="s-left-text">Total(Incl.of 18% GST)</p>
            <p class="s-right-text">₹149</p>
        </div>
    </div>
    <div class="button-container">
        <div class="secondary-button">
            <p class="s-btn-text">cancel</p>
        </div>
        <div class="primary-button">
            <p class="p-btn-text">proceed to pay</p>
        </div>
    </div>
    <div class="icon-container">
        <div class="razorpay-icon">
            <div class="frame-12537">
                <img src="img/Frame 12537.png" />
            </div>
        </div>
    </div>
  </div>
</div>

       
  </body>
  );
}

export default App;
