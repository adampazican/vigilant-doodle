import * as React from 'react'

const styles = {
    backgroundColor: '#000',
    height: '50px'
}

class TopBar extends React.Component{
    public render(){
        return (
            <div id="TopBar" style={styles}/>
        )
    }
}

export default TopBar