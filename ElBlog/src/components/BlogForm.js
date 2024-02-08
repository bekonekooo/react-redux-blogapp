import React, { Component } from 'react'


export default class BlogForm extends Component {
 
    constructor(props){
        super(props)
        this.state={
            title:props.blog? props.blog.title: "",
        describe:props.blog? props.blog.describe: "",
        error:""
        }
    }

    onDescribeChange= (e)=>{

const describe = e.target.value
this.setState(()=>({
    describe
}))}

    onTitleChange=(e)=>{
        const title =e.target.value;
        this.setState(()=>({
            title
        }))}
       
   onSubmit=(e)=>{
    e.preventDefault();
    if(!this.state.title || !this.state.describe ){
         this.setState({error:'lütfen tüm alanları doldur '})
     
    }else{
        console.log(this.state.title,this.state.describe)
        console.log("submitted")
        this.props.onSubmit({
            title:this.state.title,
            describe:this.state.describe,
            dateAdded:Date.now(),

        })
    }
   }

  render() {
    return (
      <div>
        {this.state.error && <p> {this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
            <div>
                <input placeholder='enter title' value={this.state.title}
                onChange={this.onTitleChange}></input>
            </div>
            <div>
                <textarea placeholder='enter desciption' value={this.state.describe}
                onChange={this.onDescribeChange}></textarea>
            </div>
            <div>
                <button type='submit'>Save Changes</button>
            </div>
        </form>
      </div>
    )
  }}

