import { Routing } from '@/pages';

import './addons/fonts';
import './addons/interceptors';
import { withProviders } from './providers';

export const App = withProviders(() => <Routing />);
