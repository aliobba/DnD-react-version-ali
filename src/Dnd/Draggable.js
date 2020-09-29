import React from 'react';
import PropTypes from 'prop-types';
export default  class  Draggable extends React.Component {




    drag= (e) =>{

        e.dataTransfer.setData('transfer',e.target.id);
     //let obj=   e.dataTransfer.setData('transfer',e.target.style);
        localStorage.setItem('myData',e.target.id);
        //localStorage.setItem('objtest',obj);

        console.log('dorp2'+  e.dataTransfer.setData('transfer',e.target.id));
        
    }
    noAllowDrop = (e) => {

        e.stopPropagation();
        e.dataTransfer.clearData();
    }

    render() {

        return(
            <div id={this.props.id} draggable="true" onDragStart={(e) => this.drag(e)} onDragEnd={this.dragend_handler} /* onDragOver={this.noAllowDrop} */ style={this.props.style}>
                {this.props.children}


            </div>
        );

    }
}

Draggable.protoTypes ={
    id: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node,

}

