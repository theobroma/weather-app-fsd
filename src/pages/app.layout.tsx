import { Outlet } from 'react-router-dom';

import ComponentWithProblem from '@/shared/uikit/wdyr/component-with-problem';
import { PersistentDrawerLeft } from '@/widgets/app-bar/app-bar';
import { Footer } from '@/widgets/footer/footer';

const AppLayout = () => (
  <div className="HolyGrail">
    <PersistentDrawerLeft>
      <Outlet />
    </PersistentDrawerLeft>
    {/* Test WDYR */}
    <ComponentWithProblem />
    <Footer />
  </div>
);

// eslint-disable-next-line import/no-default-export
export default AppLayout;
