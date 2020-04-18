import { Component } from "@wordpress/element";
import { Button, PanelRow } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

class BaconMockup extends Component {
	constructor(props) {
		super(props);
	}

	changeImageUrl = () => {
		const url = this.getUrl(this.props.getWidth(), this.props.getHeight());
		this.props.setUrl(url);
	};

	getUrl = (width, height) => {
		return "https://baconmockup.com/" + width + "/" + height;
	};

	render() {
		return (
			<PanelRow>
				<img onClick={() => this.changeImageUrl()} src={this.getUrl(75, 75)} />
				<Button onClick={() => this.changeImageUrl()}>baconmockup.com</Button>
			</PanelRow>
		);
	}
}

export default BaconMockup;