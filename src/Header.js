import React from 'react';


const Header = () => {
    const style = {textAlign:'center', padding: 20, textTransform: 'uppercase', backgroundColor: 'black', color:'white'};
    return(
        <div style={style}>
            <h1>Phone Directory</h1>
        </div>
    );
}

export default Header;