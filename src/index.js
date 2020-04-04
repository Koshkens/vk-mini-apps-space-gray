import React from 'react';
import ReactDOM from 'react-dom';
import { View, Panel, Cell, Div, Button, Card, CardGrid, Group } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import './style.css'
import gray from './img/gray.jpg'


function App() {
	return (
		<View activePanel="main" header={false}>
			<Panel id="main">
				<Div id="content" >
					<Group separator="hide">
						<img className="gray" src={gray} />
					</Group>
					<Div>
						<Button size="xl" onClick={() => { window.open("ultimaterower.tumblr.com"); }}>Открыть</Button>
					</Div>
				</Div>
			</Panel>
		</View>
	);
}

ReactDOM.render(<App />, document.getElementById('root'));