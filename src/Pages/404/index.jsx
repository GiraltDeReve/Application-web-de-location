import { Link } from 'react-router-dom';
import "./Error.css";

function Error() {
	return (
		<div id='blocError'>
			<div id="blocError-infos">
				<h1 id='blocError-title'>404</h1>
				<p id='blocError-text'>Oups ! La page que vous demandez n'existe pas.</p>
			</div>
				<Link id='blocError-link' to='/'>Retourner sur la page d'accueil</Link>
		</div>
	)
}
export default Error;