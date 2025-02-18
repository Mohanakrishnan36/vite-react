import {  LocationOn, Mail, PhoneInTalk } from "@mui/icons-material"

import "./botcen.css"


export default function Botcen() {
  return (
    <div>
      <div className="thirtyeight">
        <h4 className="fiftyone"><a className="fourtynine"> Contact us</a></h4>
        <div className="fiftytwo">
        <div className="thirtynine">
          <h2 className="fourty">ask whatever you have in your mind now</h2>
          <p className="fourtyone">whether you have questions or are<br/>
            ready to discuss your business we,re to help.<br/>
            reach out today.
          </p>
          <div className="fifty">
          <li className="fourtytwo"><Mail/> admin@gmail.com</li>
          <li className="fourtythree"><PhoneInTalk/> (968)819-8061</li>
          <li className="fourtyfour"><LocationOn/> 43roselle st.newyork </li> </div>
        </div>
        <div className="fourtyfive">
        
          <label className="fourtysix">
            <form>Name</form>
            <input type="text" />
          </label>
          <label className="fourtyseven">
            <form>Email</form>
            <input type="email"/>
          </label>
          <label className="fourtyeight">
            <form>Message</form>
            <input type="text" />
          </label>
        </div>
        </div>
        
      </div>
      <div className="thirtytwocom">
        <div>
          <h5 className="thirty">
            <img className='twentytwo' src="/assets/prop14.png" width={500} height={300} /></h5>
        </div>
        <div>
            <h3 className="twentythree" >are you ready to boost your digital presence ?</h3>
        </div>
        <div className="twentynine">
        <div className='twentyfour'><a className="twentyseven">start free trial</a>
            </div>
            <div className='twentyfive'><a className="twentyeight">schedule call</a>
        </div> </div>
        <div>
        <img className="twentysix" src="/assets/prop13.png" alt="" width={1200} height={600}/>
            </div>
            </div>
    </div>
  )
}
