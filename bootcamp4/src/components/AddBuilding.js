import React from 'react';

class AddBuilding extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newCode: '',
            newName: '',
            newAddress: '',
            newLatitude: '',
            newLongitude: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    addBuilding(e) {
        e.preventDefault();
        if (this.state.newCode === "" || this.state.newName === "")
        {
            alert("Listing must have a code and name.");
        }
        else
        {
            // We'll set ID to 0 here and let the code in App that actually handles
            // the Add operation figure out an appropriate ID
            this.props.addBuilding({
                id: 0,
                code: this.state.newCode,
                name: this.state.newName,
                coordinates: {
                    latitude: this.state.newLatitude,
                    longitude: this.state.newLongitude
                },
                address: this.state.newAddress
            });
            this.handleClear();
        }
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        
        this.setState({[name]: value});
        console.log(name, value);
    }

    handleClear() {
        this.setState({
            newCode: '',
            newName: '',
            newAddress: '',
            newLatitude: '',
            newLongitude: ''
        })
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.newCode);
        event.preventDefault();
    }

	render() {
        return (
            <div>
                <br />
                <br />
                <br />
                <form onSubmit={this.addBuilding.bind(this)}>
                    <label>
                        Building Code:
                        <input
                            type="text"
                            name="newCode"
                            value={this.state.newCode}
                            onChange={this.handleChange} />
                    </label>
                    <label>
                        Building Name:
                        <input
                            type="text"
                            name="newName"
                            newName={this.state.newName}
                            onChange={this.handleChange} />
                    </label>
                    <label>
                        Building Address:
                        <input
                            type="text"
                            name="newAddress"
                            address={this.state.newAddress}
                            onChange={this.handleChange} />
                    </label>
                    <label>
                        Building Latitude Coordinate:
                        <input
                            type="text"
                            name="newLatitude"
                            latitude={this.state.newLatitude}
                            onChange={this.handleChange} />
                    </label>
                    <label>
                        Building Longitude Coordinate:
                        <input
                            type="text"
                            name="newLongitude"
                            longitude={this.state.newLongitude}
                            onChange={this.handleChange} />
                    </label>
                    <input
                        type="submit"
                        value="Add Building" />
                </form>
            </div>
        )
    }
}
export default AddBuilding;