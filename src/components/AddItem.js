import React from 'react';

class AddItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productName: "",
            productPrice: 0,
        };
    }
    render() { 
        return <form className='row mb-5'
            onSubmit={(e) =>{
                e.preventDefault();
                this.props.addItem(this.state.productName, Number(this.state.productPrice));
            }}>
            <div className="col-4 mb-3">
                <label htmlFor="inputName" className="form-label">Name</label>
                <input type="name" className="form-control" id="inputName" name="productName" aria-describedby="name"
                    onChange={(e) => { this.setState({ productName: e.currentTarget.value }) }} value={this.state.productName}/>
            </div>
            <div className="col-4 mb-3">
                <label htmlFor="inputPrice" className="form-label">Price</label>
                <input type="number" className="form-control" name="productPrice" id="price"
                    onChange={(e) => { this.setState({ productPrice: e.currentTarget.value }) }} value={this.state.productPrice}/>
            </div>
            <button type="submit" className="btn btn-primary col-2 offset-1 mb-3">Add</button>
        </form>;
    }
}

export default AddItem;