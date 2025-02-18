import"./bottom.css"
import { BsAmazon, BsMeta} from 'react-icons/bs'
import { FaGoogle, FaSalesforce } from 'react-icons/fa'
import { SiAdobe, SiCocacola, SiIntel, SiSony } from 'react-icons/si'
import {  LiaLinkedin } from "react-icons/lia"
import { FaXTwitter } from "react-icons/fa6"






export default function Bottom() {
  return (
    <div>
        <div>
        <ul className="icons">
            <div className="icon1"><FaGoogle size={40}/></div>
            <li className="icon2"><SiSony size={40}/></li>
            <li className="icon3"><SiCocacola size={40}/></li>
            <li className="icon4"><BsAmazon size={40}/></li>
            <li className="icon5"><FaSalesforce size={40}/></li>
            <li className="icon11"><SiIntel size={40}/></li>
        </ul> </div>

        <div>
        <h1>Adtask ai works with :</h1>
            <ol className="icon">
                  <li className="icon6"><LiaLinkedin size={100}/></li>
                  <li className="icon7"><BsMeta size={100}/></li>
                  <li className="icon8">< FaXTwitter size={100}/></li>
                  <li className="icon9"><SiAdobe size={100}/></li>
                  <li className="icon10"><BsAmazon size={90}/></li>
            </ol>
        </div>
    </div>
  )
}
