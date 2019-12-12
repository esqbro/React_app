import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car'

class App extends Component {
  render() {
      const divStyle = {
          textAlign: 'center'
      }

      return (
          <div style={divStyle}>
              <h1>Hello World</h1>

              <Car name={'Ford'} year={'2018'}>
                  <p style={{color: 'yellow'}}>COLOR</p>
              </Car>
              <Car name={'Audi'} year={'2016'}>
                  <p style={{color: 'red'}}>COLOR</p>
              </Car>
              <Car name={'Mazda'} year={'2010'} />
          </div>
      );

      // return React.createElement(      как это выглядит без JSX
      //     'div',
      //     null,
      //     React.createElement(
      //         'h1',
      //         {
      //             className: 'App'
      //         },
      //         'Hello world!'
      //     )
      // )
  }
}

export default App;
