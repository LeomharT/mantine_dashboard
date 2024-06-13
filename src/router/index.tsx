import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import App from '../app/App';
import Page01 from '../pages/Page01';
import Page02 from '../pages/Page02';

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<App />}>
			<Route index element={<Page01 />} />
			<Route path='page01' element={<Page02 />} />
		</Route>
	)
);
