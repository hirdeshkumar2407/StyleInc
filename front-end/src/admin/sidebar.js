import React from 'react';
import { Link } from 'react-router-dom';
import './admin_dasboard.css';
function sidebar() {
	return (
		<div id='layoutSidenav'>
			<div id='layoutSidenav_nav'>
				<nav className='sb-sidenav accordion sb-sidenav-dark' id='sidenavAccordion'>
					<div className='sb-sidenav-menu'>
						<div className='nav'>
							<div className='sb-sidenav-menu-heading'>--------------------------------------</div>

							<Link
								to='#'
								className='nav-link collapsed'
								data-bs-toggle='collapse'
								data-bs-target='#collapseLayouts'
								aria-expanded='false'
								aria-controls='collapseLayouts'
							>
								<div className='sb-nav-link-icon'>
									<i className='fas fa-users' />
								</div>
								Users
								<div className='sb-sidenav-collapse-arrow'>
									<i className='fas fa-angle-down' />
								</div>
							</Link>

							<div
								className='collapse'
								id='collapseLayouts'
								aria-labelledby='headingOne'
								data-bs-parent='#sidenavAccordion'
							>
								<nav className='sb-sidenav-menu-nested nav'>
									<Link to='/dashboard/users' className='nav-link'>
										List Of Users
									</Link>
								</nav>
							</div>

							<Link
								to='#'
								className='nav-link collapsed'
								data-bs-toggle='collapse'
								data-bs-target='#collapsePages'
								aria-expanded='false'
								aria-controls='collapsePages'
							>
								<div className='sb-nav-link-icon'>
									<i className='fab fa-product-hunt' />
								</div>
								Products
								<div className='sb-sidenav-collapse-arrow'>
									<i className='fas fa-angle-down' />
								</div>
							</Link>

							<div
								className='collapse'
								id='collapsePages'
								aria-labelledby='headingTwo'
								data-bs-parent='#sidenavAccordion'
							>
								<nav className='sb-sidenav-menu-nested nav accordion' id='sidenavAccordionPages'>
									<Link
										to='#'
										className='nav-link collapsed'
										data-bs-toggle='collapse'
										data-bs-target='#pagesCollapseAuth1'
										aria-expanded='false'
										aria-controls='pagesCollapseAuth1'
									>
										Male
										<div className='sb-sidenav-collapse-arrow'>
											<i className='fas fa-angle-down' />
										</div>
									</Link>
									<div
										className='collapse'
										id='pagesCollapseAuth1'
										aria-labelledby='headingOne'
										data-bs-parent='#sidenavAccordionPages'
									>
										<nav className='sb-sidenav-menu-nested nav'>
											<Link to='/dashboard/men/add' className='nav-link'>
												Add Products
											</Link>
											<Link to='/dashboard/men/list' className='nav-link'>
												List Of Products
											</Link>
										</nav>
									</div>
									<Link
										to='#'
										className='nav-link collapsed'
										data-bs-toggle='collapse'
										data-bs-target='#pagesCollapseAuth'
										aria-expanded='false'
									>
										Female
										<div className='sb-sidenav-collapse-arrow'>
											<i className='fas fa-angle-down' />
										</div>
									</Link>
									<div
										className='collapse'
										id='pagesCollapseAuth'
										aria-labelledby='headingOne'
										data-bs-parent='#sidenavAccordionPages'
									>
										<nav className='sb-sidenav-menu-nested nav'>
											<Link to='/dashboard/women/add' className='nav-link'>
												Add Products
											</Link>
											<Link to='/dashboard/women/list' className='nav-link'>
												List Of Products
											</Link>
										</nav>
									</div>
								</nav>
							</div>

							<Link
								to='#'
								className='nav-link collapsed'
								data-bs-toggle='collapse'
								data-bs-target='#collapseLayouts2'
								aria-expanded='false'
								aria-controls='collapseLayouts2'
							>
								<div className='sb-nav-link-icon'>
									<i className='fab fa-sellcast' />
								</div>
								Orders
								<div className='sb-sidenav-collapse-arrow'>
									<i className='fas fa-angle-down' />
								</div>
							</Link>
							<div
								className='collapse'
								id='collapseLayouts2'
								aria-labelledby='headingOne'
								data-bs-parent='#sidenavAccordion'
							>
								<nav className='sb-sidenav-menu-nested nav'>
									<Link to='/dashboard/orders' className='nav-link'>
										Orders List
									</Link>
								</nav>
							</div>
						</div>
					</div>
					<div className='sb-sidenav-footer'>
						<div className='small'>Logged in as:</div>
					
					</div>
				</nav>
			</div>
		</div>
	);
}

export default sidebar;
