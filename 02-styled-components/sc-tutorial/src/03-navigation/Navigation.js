/**
 
 <Navigation isAdmin={false} />
 
 */
 
import propTypes from 'prop-types';
import styled from 'styled-components';

export default styled(Navigation)`
	background-color: orange;
`

function Navigation( {isAdmin, className} ) {
	return (
		<nav className={className}>
			<ul>
				<li>
					<a href="/home">home</a>
				</li>
				<li>
					<a href="/about">about</a>
				</li>
				{
					(
						isAdmin && (
							<li>
								<a href="/admin">admin</a>
							</li>		
						)
					)					
				}				
			</ul>
		</nav>
	)
}

Navigation.propTypes = {
	isAdmin: propTypes.bool.isRequired
}