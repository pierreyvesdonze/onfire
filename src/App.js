import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Intro from './components/Intro';
import History from './components/History';
import Use from './components/Use';
import Make from './components/Make';
import Stories from './components/Stories';
import Damage from './components/Damage';
import Titles from './components/Titles';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});

const body = document.body;
const scrollHandler = () => {
	const scrollY = window.scrollY;

	// Calcul de la couleur en fonction de la position de défilement
	const red = Math.min(255, Math.floor(scrollY / 10));
	const green = Math.min(255, Math.floor(scrollY / 25));
	const blue = Math.min(255, Math.floor(scrollY / 50));

	// Appliquer la nouvelle couleur de fond
	body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
};

window.addEventListener('scroll', scrollHandler);

function App() {
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline>
				<div className="App">
					<Intro />
					<History />
					<Use />
					<Make />
					<Stories />
					<Damage />
					<Titles />
				</div>
			</CssBaseline>
		</ThemeProvider>
	);
}

export default App;
