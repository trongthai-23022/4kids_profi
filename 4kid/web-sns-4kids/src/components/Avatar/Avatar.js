import React, { Component } from 'react';
import Button from '../Button/Button';

class Avatar extends Component {
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <style dangerouslySetInnerHTML={{__html: "\n.avatar {\n  vertical-align:middle;\n  width: 200px;\n  height: 200px;\n  border-radius: 50%;\n\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n" }} />
                <img className="avatar" src={'https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.6435-9/120644755_691724368103878_7477333080821269518_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=sWpamp-RTo8AX-SrwkO&_nc_ht=scontent.fsgn2-1.fna&oh=c128ffe430f247c0a73e0e630512aa17&oe=6180C945'} alt="Avatar" />     
                <h1 style={{color: 'blue'}}>Trương Đình Huy</h1>
                <p style={{color: 'gray'}}>(Đình Heo)</p>
                <Button/>
             </div>
            
        );
    }
}

export default Avatar;