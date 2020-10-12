import React, { Component } from 'react'
import logo from '../images/log.svg'
import './Form.css'


export default class Form extends Component {

    constructor(){
        super()
        this.state={
            name:'',
            email:'',
            password:'',
            passwordcheck:''
        }
        this.inputHandler = this.inputHandler.bind(this)
        this.formHandler = this.formHandler.bind(this)
    }

    inputHandler=(e)=>{
       
        this.setState({
            name:e.target.name,
            email:e.target.email,
            password:e.target.password,
            passwordcheck: e.target.passwordcheck
        })
    }
    formHandler=(e)=>{

          e.preventDefault()

       console.log(this.state.name,this.state.email)
    }
    render() {
        return (
            <div className="container">
                <div >
                    <p className="google"> Login with Google</p>
                    <p className=" or"> or </p>
                     <form className="contain" onSubmit={this.formHandler}>
                         <label>
                             Name
                             <br/>
                             <input name ="name" 
                             className="input" 
                             type="text"  
                             autoComplete="true"
                             onChange={this.inputHandler}/>
                         </label>
                         <label>
                             Email
                             <br/>
                             <input name="email" className="input"
                              type="email" autoComplete="true"
                              onChange={this.inputHandler}/>
                         </label>

                         <label>
                             Password
                             <br/>
                             <input name="password" className="input"
                              type="password" 
                              onChange={this.inputHandler}/>
                         </label>
                         <label>
                             Re-Enter Password
                             <br/>
                             <input  name="repassword" className="input"
                              type="password"
                              onChange={this.inputHandler} />
                         </label>
                         <button type="submit">Submit</button>
                     </form>
                </div>
                <div>

                    <img className="img" src={logo} alt="loading..."/>
    
                </div>
            </div>
        )
    }
}
