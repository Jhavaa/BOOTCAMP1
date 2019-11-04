import React from 'react';

class BuildingList extends React.Component {
	render() {
		//console.log('This is my directory file', this.props.data);
		//console.log('This is my filterText', this.props.filterText);
		//console.log('This is my selectedBuilding', this.props.selectedBuilding)
		const { data, filterText, selectedUpdate, deleteBuilding } = this.props;

		const buildingList = data
			.filter(name => {
				// remove names that do not match current filterText
				return (name.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0) || (name.code.toLowerCase().indexOf(filterText.toLowerCase()) >= 0)
			})	
			.map(directory => {
				return (
					<tr
					 key={directory.id}
					 onClick = {() => selectedUpdate(directory.id)} >
						<td>{directory.code} </td>
						<td>{directory.name} </td>
						<td onClick ={() => {if (window.confirm('Do you want to delete building ' + directory.name + '?')) deleteBuilding(directory.id)}}>
							<button>
								delete
							</button>
						</td>
					</tr>
				);
			})
			// console.log(this)

		return <div>{buildingList}</div>;
	}
}
export default BuildingList;
