import "../styles/globals.scss";
import type { AppProps } from "next/app";

import { AlertCircle } from "react-feather";

function MyApp({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;

  return (
    <>
      <noscript>
        <div className="noscript">
          <div>
            <i>
              <AlertCircle width={48} height={48} />
            </i>
            <span>
              Some features on znepb.me require JavaScript to function properly.
              If you would like to use some of these features, please enable
              JavaScript in your browser.
            </span>
          </div>
        </div>
      </noscript>
      <AnyComponent {...pageProps} />
    </>
  );
}

export default MyApp;
