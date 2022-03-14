import React, {useState, useEffect} from 'react';
import './Header.css'
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { authContext } from '../../Contexts/AuthContext';
import { addProductContext } from '../../Contexts/ProductContext';

const Header = () => {
	const history = useHistory()
	const {userEmail} = useContext(authContext); 
	const {getProducts} = useContext(addProductContext)
	const [state, setState] = useState(false)
	let checkStatus = JSON.parse(localStorage.getItem("user"))
	
	const handleValue = (e) => {
		const search = new URLSearchParams(history.location.search);		
		search.set('q', e.target.value);
		history.push(`${history.location.pathname}?${search.toString()}`);
		getProducts();
	  };
    useEffect(() => {
        if (checkStatus) setState(true)
    }, [userEmail]) // eslint-disable-line react-hooks/exhaustive-deps
	
    function logout1() {
        localStorage.setItem("user", JSON.stringify(0))
        setState(false)
    }
	
	
	return (
	<>
		<Navbar bg="dark" expand="lg" variant="dark">
			<Container>
				<Navbar.Brand href="#home"  className="brand" style={{ fontSize: 35 }}>
					<Nav><Link to="/" className="nav-link" role="button">
						VELOCITY
					</Link></Nav> 
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav className="me-auto"></Nav>
					<Form className="d-flex">
						<FormControl
							type="search"
							placeholder="Введите для поиска"
							className="mr-2"
							aria-label="Search"
							onChange={(e) => handleValue(e)}
						/>
						<Button variant="outline-light" p="l-5">Поиск</Button>
					</Form>
					<Nav
						className="mr-auto my-2 my-lg-0"
						style={{ maxHeight: '100px' }}
						navbarScroll
					>
						{
							state ? (
								userEmail === 'admin@admin.com' ? (
									<Nav> 
										<Link to="/add" className="nav-link" role="button">Добавить</Link>
									</Nav>
									) : (<></>)
								) : (<></>)
							}
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
									<NavDropdown.Item>
										{userEmail}
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


