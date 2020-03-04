import React, { Component } from 'react'

class Table extends Component {
	render() {
		return (
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Job</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Jay</td>
						<td>Videographer</td>
					</tr>
					<tr>
						<td>Precious</td>
						<td>Nurse</td>
					</tr>
					<tr>
						<td>Meryl</td>
						<td>Photographer</td>
					</tr><tr>
						<td>Jake</td>
						<td>Photographer/videographer</td>
					</tr>
				</tbody>
			</table>
		)
	}
}

export default Table