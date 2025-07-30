"use client";

import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { useEffect } from "react";

const posthogPublicKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;

const Providers = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    if (!posthogPublicKey) return;

    posthog.init(posthogPublicKey ?? "", {
      api_host: "/ingest",
      ui_host: "https://us.i.posthog.com",
      loaded: () => {
        if (process.env.NODE_ENV === "development") posthog.opt_out_capturing();
      },
      session_recording: {
        maskAllInputs: false,
        maskInputOptions: {
          password: true,
        },
      },
    });
  }, []);

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
};

export default Providers;
