import { Link } from 'react-router-dom';
import "../../Styles/error.css";

function Error() {
	return (
		<div classNamed='message-error'>
			<div className="error-contents">
				<h1 className='error-title'>404</h1>
				<p className='error-text'>Oups ! La page que vous demandez n'existe pas.</p>
				
			</div>
				<Link className='error-link' to='/'>Retourner sur la page d'accueil</Link>
		</div>
	)
}
export default Error;