import { useState } from 'react'
import './index.css'
function systemInfo() {
  const [FreeMemory, setFreeMemory] = useState(0)
  const [TotalMemory, setTotalMemory] = useState(0)
  const [CpuArch, setCpuArch] = useState(0)
  const [UserInfo, setUserInfo] = useState(0)
  
  useEffect(() => {
    fetch("http://localhost:5000/systemInfo")
      .then((res) => res.json())
      .then((data) => {
        setFreeMemory(data.freeMemory);
        setTotalMemory(data.totalMemory);
        setCpuArch(data.cpuArch);
        setUserInfo(data.userInfo);
      });
  }, []);



  return (
    <>
      <div className='main'>
        <h1>Work with OS</h1>
      </div>
      <div className="card1">
        <button onClick={() => setFreeMemory((FreeMemory) )}>
          Free Memory
        </button>
          <button onClick={() => setTotalMemory((TotalMemory) )}>
          Total Memory
        </button> 
        </div>
        <div className='card2'>
         <button onClick={() => setCpuArch((CpuArch) )}>
        CPU Architecture
        </button>  
        <button onClick={() => setUserInfo((UserInfo))}>
          User Info
        </button>
      </div>
      
    </>
  )
}

export default systemInfo
