import React from 'react'
import {render} from 'react-dom'

const App = ()=>{

    return <div >
        <button onClick={()=>{
            fetch('/api')
        }}>
            发送请求
        </button>
    </div>
}
render(<App/>,document.getElementById('root'))
console.log('123')
