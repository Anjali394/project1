import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isLoggedIn :  false
        }
    }
    
    render() {
        return (this.state.isLoggedIn && <div>Welcome Anjali</div>)

        // return(
        //     this.state.isLoggedIn ?
        //     <div>Anjali</div> : <div>Guest</div>
        // )

        // let message 
        // if(this.state.isLoggedIn){
        //     message = <div>Anjali</div>
        // }else{
        //     message = <div>Guest</div>
        // }
        // return <div>{message}</div>


        // if(this.state.isLoggedIn){
        //     return (
        //         <div>Welcome Anjali..</div>
        //     )
        // } else {
        //     return (
        //         <div>Welcome Guest</div>
        //     )
        // }

        // return (
        //    <div>
        //         <div>
        //         Welcome Anjali
        //     </div>
        //     <div>Welcome Guest</div>
        //    </div>
        // )
    }
}

export default UserGreeting
