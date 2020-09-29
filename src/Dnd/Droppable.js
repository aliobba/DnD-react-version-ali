import React from 'react';
import PropTypes from 'prop-types';


export default class Droppable extends React.Component {

    dragstart_handler(id, e) {
        console.log("dragStart");

        // Change the source element's background color to signify drag has started
        //e.currentTarget.style.border = "dashed";
        // Add the id of the drag source element to the drag data payload so
        // it is available when the drop event is fired
        e.dataTransfer.setData("transfer", e.target.id);
        console.log('SUM : ' + e.target.id);
        console.log('drag start' + e.dataTransfer.getData("transfer"));
        // Tell the browser both copy and move are possible
        //ev.effectAllowed = "copyMove";
        e.dataTransfer.setData("gridId", id);
    }


    drop = (id, e) => {
        e.preventDefault();
        const data = e.dataTransfer.getData('transfer');
        
        if (e.dataTransfer.getData("gridId") === 'dr1') {
            var nodeCopy = document.getElementById(data).cloneNode(true);
            var x = randHex(12);
            nodeCopy.id = x;
            e.target.appendChild(nodeCopy);
            e.dataTransfer.clearData();
        } else if ( e.dataTransfer.getData("gridId") !== 'dr1' && e.dataTransfer.getData("gridId").trim() !== id.toString()) {
            var nodeMove = document.getElementById(data)
            var y = randHex(12);
            nodeMove.id = y;
            e.target.appendChild(nodeMove);
        }

           function randHex(len) {
            var maxlen = 8;
             var   min = Math.pow(16,Math.min(len,maxlen)-1) ;
              var  max = Math.pow(16,Math.min(len,maxlen)) - 1;
              var  n   = Math.floor( Math.random() * (max-min+1) ) + min;
              var  r   = n.toString(16);
            while ( r.length < len ) {
               r = r + randHex( len - maxlen );
            }
            return r;
          };

        console.log('from droppable' + data);
        //console.log('from droppable' + data2);
        console.log('drop36' + data[1])




    }
    allowDrop = (e) => {
        e.preventDefault();
        console.log('dorpidi' + e.preventDefault());

    }
    render() {


        return (
            <div id={this.props.id} onDrop={(e) => this.drop(this.props.id, e)} onDragOver={this.allowDrop} onDragStart={(e) => this.dragstart_handler(this.props.id, e)} style={this.props.style}>

                {this.props.children}








            </div>

        );


    }
}
Droppable.protoTypes = {
    id: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node,


}
