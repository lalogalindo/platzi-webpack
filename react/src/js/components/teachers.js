import React, { Component } from 'react'
import Teacher from './teacher.js'

class Teachers extends Component {
	render() {
		return (
			<ul className="Teachers">
				{this.props.data.teachers.map((data)=>{
					return <Teacher {...data} />
				})}
			</ul>
		)
	}
}
export default Teachers