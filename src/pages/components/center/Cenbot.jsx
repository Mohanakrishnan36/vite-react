import"./cenbot.css"
import { BiBarChart, BiPieChart } from 'react-icons/bi'
import { CiSettings } from 'react-icons/ci'

export default function Cenbot() {
  return (
    <div>

         <ul className="four">
                    
                        <li className="six"><span className="seven"><CiSettings size={90}/></span>
                        <h2 className="eight">Marketing made easier</h2>
                        save time and simplify campagin management.<br/>
                        Let automated workflows handle the heavy<br/>
                        lifting,so you can focus on creativity.</li>
                        
        
                       
                        <li className="nine">
                            <span className="ten"><BiBarChart size={90} /> <BiPieChart size={90}/></span>
                            <h2 className="eleven">smart Marketing insights</h2>
                            unlock actionable data to guide every decision.
                            <br/>stay ahead of trends,refine your strategies, 
                            <br/>and make confident moves with powerful <br/>
                            analytics
                        
                        </li>
                   </ul>
    </div>
  )
}
