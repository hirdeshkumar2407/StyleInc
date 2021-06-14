import React from 'react';
import { Row, Container } from 'react-bootstrap';
import NavMN from '../partials/NavbarMenWomen';

import Header from '../partials/Header';
import Footer from '../partials/Footer';
const ContactUs = () => {
	return (
		<div>
			<div>
				<Header />
			</div>
			<div>
				<NavMN />
			</div>
			<div className={'Spacer'} />
			<div>
				<Container>
					<Row className={'AboutUsHeading justify-content-md-center'}>
						<h1 className={'AboutUsHeading'}>CONTACT US</h1>
					</Row>
					<div className={'HSpacer'} />
					<Row className={'AboutUsPara justify-content-md-center'}>
						<p>
							<b>HOW CAN I CONTACT OUTFITTERS’S CUSTOMER SERVICE DEPARTMENT?</b>
							<br />
							<br />
							You can contact us with any questions related to online sales through the following
							channels: <br />
							<ul>
								<li>Through our Need Help service on the website</li>
								<li>UAN: 042-111-11 6387</li>
								<li>E-mail contactus@styleinc.com.pk</li>
								<li>Our social media pages on Facebook, Instagram etc.</li>
							</ul>
							Customer Service Department Hours: Monday to Friday from 9.00 to 5.30 PST
							<br />
						</p>
					</Row>
					<Row className={'AboutUsPara justify-content-md-center'}>
						<p>
							<b>HOW CAN I FILE AN ONLINE COMPLAINT?</b>
							<br />
							<br />
							First contact our Customer Service department so we can try to help you with whatever you
							need. Finally, if you wish to file an official complain, you can use the form by clicking on
							https://styleinc.com.pk/pages/complaint-form
						</p>
					</Row>
					<Row className={'AboutUsPara justify-content-md-center'}>
						<p>
							<b>HOW CAN I FILE A COMPLAINT ABOUT A STORE?</b>
							<br />
							<br />
							You can contact our Customer Service department or drop an email at
							contactus@styleinc.com.pk
							<br />
						</p>
					</Row>
					<Row className={'AboutUsPara justify-content-md-center'}>
						<p>
							<b>HOW CAN I SUGGEST IMPROVEMENTS?</b>
							<br />
							<br />
							You can send us your suggestions using all the contact mediums mentioned above. We would be
							happy to receive your comments and suggestions.
							<br />
						</p>
					</Row>
				</Container>
			</div>
			<div className={'Spacer'} />

			<div>
				<Footer />
			</div>
		</div>
	);
};

export default ContactUs;
