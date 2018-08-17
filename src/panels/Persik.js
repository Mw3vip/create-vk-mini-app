import React from 'react';
import PropTypes from 'prop-types';
import { Panel, Button, Group, Div } from '@vkontakte/vkui';
import Icon24BrowserBack from '@vkontakte/icons/dist/24/browser_back';
import persik from '../img/persik.png';
import './Persik.css';

const Persik = props => (
	<Panel id={props.id}>
		<Group>
			<Div>
				<Button
					size="l"
					before={<Icon24BrowserBack />}
					onClick={() => props.clickHandler()}
				>
					Get back
				</Button>
			</Div>
			<Div>
				<img
					className="Persik"
					src={persik}
					alt="Persik The Cat"
				/>
			</Div>
		</Group>
	</Panel>
);

Persik.propTypes = {
	id: PropTypes.string.isRequired,
	clickHandler: PropTypes.func.isRequired,
};

export default Persik;
