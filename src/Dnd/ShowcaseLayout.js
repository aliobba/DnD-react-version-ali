import React from "react";
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";
import Droppable from "./Droppable";

const ReactGridLayout = WidthProvider(RGL);

const droppableStyle1 = {

  fontsize: '24px',
  textAlign: 'left',
  position: 'absolute',
  top: '0',
  bottom: '0',
  left: '0',
  right: '0',
  margin: 'auto',
  height: '100%',
}

export default class GridPropertyLayout extends React.PureComponent {

  static defaultProps = {
    isDraggable: true,
    isResizable: true,
    items: 12,
    rowHeight: 30,
    onLayoutChange: function () { },
    cols: 12
  };


  constructor(props) {
    super();
    const p = props;

    this.state = {
      items:  _.map(new Array(p.items), function (item, i) {
        var w = _.result(p, "w") || Math.ceil(Math.random() * 4);
        var y = _.result(p, "y") || Math.ceil(Math.random() * 4) + 1;
        return {
          x: (i * 2) % 12,
          y: Math.floor(i / 6) * y,
          w: w,
          h: y,
          i: i.toString()
        };
      }),
      y: null,
      w: null,


    }

    this.onAddItem = this.onAddItem.bind(this);
    //this.onBreakpointChange = this.onBreakpointChange.bind(this);
  }



  
  UNSAFE_componentWillMount() {
    const layout = this.generateLayout();
    console.log('layout : ' + JSON.stringify(layout));
    this.setState({ items: layout });
  }
  
  
  generateLayout() {
    const p = this.props;
    return _.map(new Array(p.items), function (item, i) {
      var w = _.result(p, "w") || Math.ceil(Math.random() * 4);
      var y = _.result(p, "y") || Math.ceil(Math.random() * 4) + 1;
      
      return {
        x: (i * 2) % 12,
        y: Math.floor(i / 6) * y,
        w: w,
        h: y,
        i: i.toString()
      };
    });
  }


  generateDOM() {
    // Generate items with properties from the layout, rather than pass the layout directly
    const layout = this.state.items;
    //console.log('layout : '+ JSON.stringify(layout));
    //this.setState({ items : JSON.stringify(layout)});
    return _.map(_.range(this.props.items), function (i) {
      return (
        <div key={i} data-grid={layout[i]}>
          <span className="text">{i}</span>

        </div>
      );
    });

  }

  createElement(el) {
    const removeStyle = {
      position: "absolute",
      right: "2px",
      top: 0,
      cursor: "pointer"
    };
    

    const i = el.add ? "+" : el.i;
    this.setState({ y : el.y });
      this.setState({ w : el.w });
    return (
        <div key={i} data-grid={el}>

          <Droppable id={i} ref ={i+'item'} style={droppableStyle1} fluid>



          </Droppable>

          <span
              className="remove"
              style={removeStyle}
              onClick={this.onRemoveItem.bind(this, i)}
          >
          x
        </span>

        <span className="text">{i}</span>
        </div>
    );
  }

  onRemoveItem = (i) => {
    console.log("removing", i);
    this.setState({ items: _.reject(this.state.items, { i: i }), newCounter: i });
  }

  onAddItem(el) {
    const p = this.props;
    var y = _.result(p.items, "y") ;
    //console.log("adding",  this.state.newCounter);
   // if( this.state.items.length < 12){
      this.setState({
        // Add a new item. It must have a unique key!
        items: this.state.items.concat({
          x: (this.state.items.length * 2) % (this.state.cols || 12),
          y:  el.y, // puts it at the bottom
          w: el.w,
          h: 2,
          i:  ''+this.state.items.length
        }),
        // Increment the counter to ensure key is always unique.
      //  newCounter: this.state.newCounter + 1
      });

      //this.setState({ layouts : [...this.state.layouts,Object.assign({},{absolutePosition:{x: (this.state.items.length * 2) % (this.state.cols || 12), y: 0}})]})

   // }


    console.log('ines : '+JSON.stringify(this.state.items));
  }

  onLayoutChange(layout) {
    this.props.onLayoutChange(layout);

  }

  render() {

    return (
      <div>
        <button onClick={_.map(this.state.items,el => this.onAddItem(el))}>Add Item</button>

        <ReactGridLayout onLayoutChange={this.onLayoutChange} {...this.props}>
          {/* {this.generateDOM()} */}
          {_.map(this.state.items, el => this.createElement(el))}
        </ReactGridLayout>
      </div>
    );
  }
}