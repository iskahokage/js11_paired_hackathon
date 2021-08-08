import React from 'react';
import './Header.css'
import { Navbar, Container, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';


const Header = () => {
	return (

		<Navbar bg="dark" expand="lg" variant="dark">
			<Container>
				<Navbar.Brand href="#home" className="brand" style={{ fontSize: 35 }}>
					VELOCITY
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
						/>
						<Button variant="outline-light" p="l-5">Поиск</Button>
					</Form>
					<Nav
						className="mr-auto my-2 my-lg-0"
						style={{ maxHeight: '100px' }}
						navbarScroll
					>
						<Nav.Link href="#action1">Каталог</Nav.Link>
						<Nav.Link href="#action2">Корзина</Nav.Link>
						<NavDropdown title="Профиль" id="navbarScrollingDropdown">
							<NavDropdown.Item href="#action3">Войти</NavDropdown.Item>
							<NavDropdown.Item href="#action3">Зарегистрироваться</NavDropdown.Item>
							<NavDropdown.Item href="#action4">Личный кабинет</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action5">Выйти</NavDropdown.Item>
						</NavDropdown>

					</Nav>

				</Navbar.Collapse>
			</Container>
		</Navbar>

	);
};

export default Header;


