import logo from './logo.svg';
import './App.css';
import moon from './moon.png';
import land from './land.png';
import cat from './cat.gif';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function App() {
  return (
	<div>
		<Parallax pages={4}>
	  		<ParallaxLayer 
	  			offset={0}
	  			speed={1}
	  			factor={2}
	  			style = {{
				backgroundImage: `url(${moon})`,
				backgroundSize: 'cover',
			}}
	  		></ParallaxLayer>

	  		<ParallaxLayer 
	  			offset={2}
	  			speed={1}
				factor={4}
				style = {{
				backgroundImage: `url(${land})`,
				backgroundSize: 'cover',
			}}
	  		></ParallaxLayer> 
	  		<ParallaxLayer 
	  			offset={0.2}
	  			speed={0.05}
	  			factor={2}
	  ><h2>Welcome to my website</h2></ParallaxLayer>

	  		<ParallaxLayer 
	  			offset={2}
	  			speed={1}
				factor={4}
  		>Web development is fun!</ParallaxLayer> 
	  		<ParallaxLayer
	  			sticky={{ start: 0.9, end: 2.5}}
	  		><img src={cat} /></ParallaxLayer> 


	  		
	  		
	  	</Parallax>
	</div>
 );
}

export default App;
