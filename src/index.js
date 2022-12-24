import React from 'react';
import ReactDOM from 'react-dom';
import './styless.scss';
import reportWebVitals from './reportWebVitals';


var store = {
  headerOffset: null
};

let cols = [
  {
    icon: "",
    label: "Date"
  },
  {
    icon: "",
    label: "UserId"
  },
  {
    icon: "",
    label: "Details"
  },
  {
    icon: "",
    label: "Device"
  },
  {
    icon: "",
    label: "Version"
  },
  {
    icon: "",
    label: "Status"
  },  
]

class RowItem extends React.Component {
  
  constructor() {
    super();
    
    this.state = {
      open: false
    }
  }  
  
  toggleRow(e) { 
    this.setState({open: !this.state.open});
  }
  
  
  render(){
   
    let classes = '';
    if (this.state.open) {
      classes = 'open';
    }
    
    return (
      <li onClick={this.toggleRow.bind(this)} className={classes}>
        <div className="heading"> 
          <div className="col">{this.props.dateCreated}</div> 
          <div className="col">{this.props.user}</div>
          <div className="col">{this.props.details}</div>
          <div className="col">{this.props.device}</div>
          <div className="col">{this.props.version}</div>
          <div className="col">{this.props.error}</div>           
        </div>
        <RowContent open={this.state.open} {...this.props}/>
        {this.props.children}
      </li>
    )
  }
  
};


class RowContent extends React.Component {
  
  clicker() {
    
  }
  
  render(){
    let jsxhtml = (<div className="content" onClick={this.clicker.bind(this)}>
        row content
        {this.props.children}
      </div>);
    
    if (this.props.open) {
      jsxhtml = (<div className="content open" onClick={this.clicker.bind(this)}>
        {this.props.children}
           <div className="col">Build: {this.props.build}</div> 
           <div className="col">Date Created: {this.props.dateCreated}</div> 
           <div className="col">Details: {this.props.details}</div> 
           <div className="col">Device: {this.props.device}</div> 
           <div className="col">Error: {this.props.error}</div> 
           <div className="col">Location: {this.props.location}</div> 
           <div className="col">Method: {this.props.method}</div> 
           <div className="col">Payload: {this.props.payload}</div> 
           <div className="col">Status: {this.props.status}</div> 
           <div className="col">Url: {this.props.url}</div> 
           <div className="col">User: {this.props.user}</div> 
           <div className="col">Version: {this.props.version}</div> 
      </div>);
    }
    
    return (
      <div>
      {jsxhtml}
        </div>
    )
  }
  
};


class Table extends React.Component {
  constructor() {
    super();
    
    this.state = {
      headerOffset: null,
      headerFixed: true
    }
  }
    
  componentDidMount() {
    store.headerOffset = ReactDOM.findDOMNode(this.refs.header).getBoundingClientRect().top;  
  }
  
  render(){
      
    let columns = this.props.columns.map((item, inx) => {
      return (<HeaderColumn label={item.label}/>);
    });    
    
    //go through the rows 
    let rows 

      if(this.props.data.length > 0){
        rows = this.props.data.map((item, inx) => {
        return (<RowItem {...item}></RowItem>);
        });
      }
      
    
    
    console.log(rows)
    let classes = 'header'; 
    if (this.props.headerFixed) {
      classes = 'header fixed';
    }
    
   return (<div className="table">
      {this.props.children} 
        <div className={classes} ref="header">{columns}<div className="shadow"></div></div>
      <ul>{rows}</ul>
    </div>); 
  }
  
}

class HeaderColumn extends React.Component {
  render(){
   return (<div className="hcol">{this.props.label}</div>); 
  }
  
}


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      tableHeader: null,
      tableHeaderFixed: false
    }
  }
  
  handleScroll(e) {
    let scrollTop = e.srcElement.body.scrollTop;
      
    if (scrollTop >= store.headerOffset) {
      this.setState({
        tableHeaderFixed: true
      });
    } else {
      this.setState({
        tableHeaderFixed: false
      });
    }
  }

  componentDidMount(){
  
  }
  
  componentWillMount() {
    fetch('https://error-report-station.herokuapp.com/api/error/getErrors',
    { 
      method: 'GET',
    }).then(response => response.json())
    .then(data => {
      console.log(data)
       this.setState({
         data: data.errors
       })
    });

    window.addEventListener('scroll', this.handleScroll.bind(this));
  }  
  
  render(){
    console.log(this.state.data)
    return (
      <div className="container">
        <div className="topbox">
          <h1>Nations Photo Lab Error Report kingsley</h1>
        </div>
        <Table data={this.state.data} columns={cols} headerFixed={this.state.tableHeaderFixed} scrollFn=''/> 
      </div>
    )


  }
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
