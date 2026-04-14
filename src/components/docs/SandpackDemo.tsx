import { Component, Suspense, lazy, type ReactNode } from 'react';
import './sandpack-demo.css';

export interface SandpackDemoProps {
  slug: string;
  title: string;
  r3fCode: string;
  versions: Record<string, string>;
}

const SandpackDemoClient = lazy(() => import('./SandpackDemoClient'));

function SandpackDemoSkeleton({ title }: Pick<SandpackDemoProps, 'title'>) {
  return (
    <section className="sandpack-demo sandpack-demo--placeholder" aria-label={`${title} interactive demo`}>
      <div className="sandpack-demo__surface" aria-hidden="true">
        <div className="sandpack-demo__preview-heading">
          <h3>Live preview</h3>
          <p>Preparing the React Three Fiber sandbox.</p>
        </div>

        <div className="sandpack-demo__skeleton-pane sandpack-demo__skeleton-pane--preview" />
      </div>
    </section>
  );
}

interface SandpackDemoBoundaryProps {
  title: string;
  children: ReactNode;
}

interface SandpackDemoBoundaryState {
  hasError: boolean;
}

class SandpackDemoBoundary extends Component<SandpackDemoBoundaryProps, SandpackDemoBoundaryState> {
  state: SandpackDemoBoundaryState = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  private handleRetry = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        <section className="sandpack-demo" aria-label={`${this.props.title} interactive demo`}>
          <div className="sandpack-demo__preview-heading">
            <h3>Live preview</h3>
            <p>The React Three Fiber sandbox could not finish mounting.</p>
          </div>

          <div className="sandpack-demo__surface sandpack-demo__surface--error">
            <p className="sandpack-demo__note">
              Something went wrong while booting the live preview. Try loading it again.
            </p>

            <button className="sandpack-demo__action-button" type="button" onClick={this.handleRetry}>
              Retry preview
            </button>
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}

export default function SandpackDemo(props: SandpackDemoProps) {
  return (
    <SandpackDemoBoundary title={props.title}>
      <Suspense fallback={<SandpackDemoSkeleton title={props.title} />}>
        <SandpackDemoClient {...props} />
      </Suspense>
    </SandpackDemoBoundary>
  );
}
