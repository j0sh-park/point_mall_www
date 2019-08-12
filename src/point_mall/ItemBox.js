import React from 'react';
import DataHelper from '../DataHelper';
import { inject } from 'mobx-react';

@inject('history')
class ItemBox extends React.Component {

    goToItem = () => {
        const item = this.props.item;
        this.props.history.push('/items/' + item.id);
    }

    render() {
        const item = this.props.item;
        const count = this.props.count;
        let image = item.image;
        if (!image.startsWith('http')) {
            image = DataHelper.baseURL() + image;
        }
        return (
            <div className="item-container" onClick={this.goToItem}>
                <img src={image} alt="" />
                <p className="item-title">{item.title}</p>
                <p className="item-price">
                    {count == null ?
                        '가격: ' + item.price + 'P' :
                        '개수: ' + count}
                </p>
            </div>
        );
    }
}

export default ItemBox;
