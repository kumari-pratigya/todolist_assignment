import SideBar from '../src/component/Sidebar/Sidebar'
import MainContent from '../src/component/MainContent/mainContent'
import RightContent from '../src/component/RightContent/rightContent'
import Navbar from '../src/component/Navbar/Navbar'
import './App.css'
function App() {

  return (
    <>
    <Navbar/>
    <div className='row gx-0'>
    <div className='col-xl-2 col-sm-12 col-md-6'>
     <SideBar/>
     </div>
     <div className='col-xl-7 col-sm-12 col-md-6'>
     <MainContent/>
     </div>
     <div className='col-3  d-xl-block d-none'>
     <RightContent/>
     </div>
     </div>
   </>
  )
}

export default App
