import "../styles/globals.scss";
import type { AppProps } from "next/app";

import { AlertCircle } from "react-feather";

function MyApp({ Component, pageProps }: AppProps) {
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
              If you would like to use some of these features, please disable
              JavaScript in your browser.
            </span>
          </div>
        </div>
      </noscript>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
