import * as React from 'react'
import './App.css'
import Canvas from './components/Canvas'
import TopBar from './components/TopBar'
import { VerticalLayout, HorizontalLayout } from './components/MainLayouts'

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <TopBar />
        
        <VerticalLayout style={{ height: '100vh', justifyContent: 'space-between'}}>
          <div />

          <HorizontalLayout style={{ justifyContent: 'space-between' }}>
            <div />
            <Canvas />
            <div />
          </HorizontalLayout>
          
          <div />
        </VerticalLayout>
      
      </div>
    )
  }
}

export default App;
