import '@src/Options.css';
import { withErrorBoundary, withSuspense } from '@extension/shared';
const Options = () => {
  return <div>设置</div>;
};

export default withErrorBoundary(withSuspense(Options, <div> Loading ... </div>), <div> Error Occur </div>);
