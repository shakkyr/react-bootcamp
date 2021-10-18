import React from "react";
import './style.css'

class Showhide extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showhide: true
		};
	}
	shadi = () => {
		if (this.state.showhide) {
			this.setState({
				showhide: false
			});
		} else {
			this.setState({
				showhide: true
			});
		}
	};

	render() {
		return (
			<div>
				<input type="button" value={this.state.showhide ? "show" : "hide"} onClick={this.shadi} />
				<div className="boxes" style={{ display: this.state.showhide ? 'none' : 'block' }} />
			</div>
		);
	}

    // <input type="button" value={this.state.showhide ? "hide" : "show"} onClick={this.shadi} />
    // {/* <div className="asad" style={{ display: this.state.showhide ? 'none' : 'block' }} /> */}
    // {this.state.showhide && <div className="asad" />} 
   


}

export default Showhide;
