import React, {useState, useEffect} from 'react';
import './Header.css'
import { Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { useContext } from 'react';
import { authContext } from '../../Contexts/AuthContext';

const Header = () => {
	const {userEmail, user} = useContext(authContext);
	const [state, setState] = useState(false)
	let checkStatus = JSON.parse(localStorage.getItem("user"))
	console.log(userEmail);
	
    useEffect(() => {
        if (checkStatus) setState(true)
    }, [userEmail])
=======

const Header = () => {
	const [state, setState] = useState(false)
    let checkStatus = JSON.parse(localStorage.getItem("user"))
    useEffect(() => {
        if (checkStatus) setState(true)
    }, [])
>>>>>>> ce15c20ae7b23bf5d7713a05fe036d6f56e887a8

    function logout1() {
        localStorage.setItem("user", JSON.stringify(0))
        setState(false)
    }
	
	
	return (
	<>
		<Navbar bg="dark" expand="lg" variant="dark">
			<Container>
				<Navbar.Brand href="#home" variant="light" className="brand" style={{ fontSize: 35 }}>
					<Nav><Link to="/" className="nav-link" role="button">
						VELOCITY
					</Link></Nav> 
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav className="me-auto"></Nav>
					{/* <Form className="d-flex">
						<FormControl
							type="search"
							placeholder="Введите для поиска"
							className="mr-2"
							aria-label="Search"
						/>
						<Button variant="outline-light" p="l-5">Поиск</Button>
					</Form> */}
					<Nav
						className="mr-auto my-2 my-lg-0"
						style={{ maxHeight: '100px' }}
						navbarScroll
					>
						<Nav><Link to="/catalog" className="nav-link" role="button">Каталог</Link></Nav>
						<Nav><Link to="/cart" className="nav-link" role="button">Корзина</Link></Nav>
						{state ?
							(
								<NavDropdown title="Профиль" id="navbarScrollingDropdown">
									{/* <NavDropdown.Item as={Link} to="/auth">
											Войти
									</NavDropdown.Item>
									<NavDropdown.Item as={Link} to="/registration">
										Зарегистрироваться
									</NavDropdown.Item> */}
									<NavDropdown.Item as={Link} to="/profile">
										Личный кабинет
									</NavDropdown.Item>
									<NavDropdown.Divider />
									<NavDropdown.Item as={Link} onClick={logout1}>
										Выйти
									</NavDropdown.Item>
								</NavDropdown>
							)
							:
							(
								<NavDropdown title="Профиль" id="navbarScrollingDropdown">
								<NavDropdown.Item as={Link} to="/auth">
										Войти
								</NavDropdown.Item>
								<NavDropdown.Item as={Link} to="/registration">
									Зарегистрироваться
								</NavDropdown.Item>
								
							</NavDropdown>
							)
						}
					</Nav>

				</Navbar.Collapse>
			</Container>
		</Navbar>
	</>
	);
};

export default Header;


