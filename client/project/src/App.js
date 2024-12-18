import React from "react"
import  {useEffect, useState} from "react"


function App(){

  const[backendData, setBackendData] = useState([{}])
  useEffect(() => {
    fetch("/new_api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return(
    <div>
      {(typeof backendData.users == 'undefined') ? (
        <p>Loading...</p>
      ) : (
        backendData.users.map((user, i) => (
          <p key={i}> {user}</p>
        ))
      )}

    </div>
  )
}

export default App