import React from 'react';

class ViewBuilding extends React.Component {
	render() {
		const {selectedBuilding, data} = this.props;
		// console.log('This is my selectedBuilding', selectedBuilding)
		//console.log('This is my data', data[selectedBuilding-1])	

		const buildInfo = data
			.filter(directory => directory.id === selectedBuilding)
			.map(directory => {
				const code = directory.code
				const name = directory.name
				const coordinates = directory.coordinates
				const address = directory.address
				// console.log(directory)
				if(address)
					return(
						<div>
							<li > Name:  {name} </li> <li > Code: {code} </li> <li > Address: {address} </li> Coordinates: <li > Latitude: {coordinates && coordinates.latitude} </li> <li > Longitude: {coordinates.longitude} </li>
						</div>
					)
				else
					return(
						<div>
							<li > Name: {name} </li> <li > Code: {code} </li>
						</div>
					)
			})
		
		return (
			<div className="selectedBuilding">
				<p>
					{' '}
					<i>Click on a name to view more information</i>
				</p>
				{buildInfo}
			</div>
		)
	}
}
export default ViewBuilding;
