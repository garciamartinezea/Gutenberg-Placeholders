import { Component } from "@wordpress/element";
import { Button, PanelRow } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

class PlaceBear extends Component {
	constructor(props) {
		super(props);
	}

	getUrl = (width, height) => {
		width = width ? width : this.props.getWidth();
		height = height ? height : this.props.getHeight();
		return "https://placebear.com/" + width + "/" + height;
	};

	render() {
		return (
			<PanelRow>
				<img
					onClick={() => this.props.setUrl(this.getUrl())}
					src={this.getUrl(75, 75)}
				/>
				<Button onClick={() => this.props.setUrl(this.getUrl())}>
					placebear.com
				</Button>
			</PanelRow>
		);
	}
}

export default PlaceBear;
