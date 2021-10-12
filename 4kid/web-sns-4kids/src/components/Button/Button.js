import React, { Component } from 'react';

class Button extends Component {
    render() {
        return (
            <div class=" grid grid-cols-2 gap-5">
                <button className="btn"> Chỉnh sửa thông tin</button>
                <button className="btn"> Đổi Ảnh đại diện</button>
             
            </div>
        );
    }
}

export default Button;