import React, { useEffect } from 'react';
import MessageComp from '../components/MessageComp';
import LoaderComp from '../components/LoaderComp';
import { useDispatch, useSelector } from 'react-redux';
import { menProductsList } from '../redux/actions/productActions';
import Card from 'react-bootstrap/Card';
import '../components/staticpages/staticpages.css';
import promo1 from '../components/staticpages/staticpagesimages/MenBanner.png';
import Menpage from './MenPage';
import Header from '../components/partials/Header';
import NavMN from '../components/partials/NavbarMenWomen';
import Footer from '../components/partials/Footer';

const HomePageMen = () => {
	const dispatch = useDispatch();
	const productsMenList = useSelector((state) => state.productsMenList);
	const { loading, err, products } = productsMenList;

	useEffect(() => {
		dispatch(menProductsList());
	}, [dispatch]);
	return (
		<div>
			<div>
				<div>
					<Header />
				</div>
				<div>
					<NavMN />
				</div>

				<div className={'EdgeSetter'}>
					<Card>
						<Card.Img src={promo1} alt='Card image' />
					</Card>
				</div>

				{loading ? (
					<LoaderComp></LoaderComp>
				) : err ? (
					<MessageComp>{err}</MessageComp>
				) : (
					<div className='row center'>
						{products.map((product) => (
							<Menpage product={product} key={product._id} />
						))}
					</div>
				)}
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
};

export default HomePageMen;