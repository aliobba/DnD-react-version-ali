import React from "react";
import Button from "react-bootstrap/Button";



export default class saveTemplate extends React.Component{

    setData() {
        let obj = {name:'jon', age:'27',email: 'kkkkkk'}
        localStorage.setItem('myData',JSON.stringify(obj));
    }
    getData (){
        let data =  localStorage.getItem('myData');
        data =JSON.stringify(data);
        console.log(data.name);

    }
render(){
        return(<div>

            <Button onClick={()=> this.setData()}>save</Button>
            <Button onClick={()=> this.getData()}>get</Button>


        </div>)
}

}
