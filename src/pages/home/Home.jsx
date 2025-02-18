import "./home.css"
import Top from '../components/top/Top'
import Middle from '../components/top/Middle'
import Bottom from '../components/top/Bottom'
import Midtop from '../components/middle/Midtop'
import Midcen from '../components/middle/Midcen'
import Bottop from '../components/bottom/Bottop'
import Botmid from '../components/bottom/Botmid'
import Botcen from '../components/bottom/Botcen'



//import Top from '../components/top/Top'
export default function Home() {
  return (
    <div>
      <div className="total">
      <div>
        <Top/>
        <Midcen/>
        <Middle/>
        <Bottom/>
        </div>
  
      <div>
      <Midtop/>
      </div>
      <div>
        <Bottop/>
        <Botmid/>
        <Botcen/>
        </div>
         </div>
        </div>
  )
}
