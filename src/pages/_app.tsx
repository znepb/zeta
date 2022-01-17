import "../styles/globals.scss";
import "../styles/zeta.scss";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

import { AlertCircle } from "react-feather";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider themes={["dark", "light", "verydark"]} defaultTheme="dark">
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
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
