import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { setCookie, getCookie } from "../utils/cookies";

export default function CookieBanner({ onVisibilityChange }) {
  const [visible, setVisible] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);

  const [prefs, setPrefs] = useState({
    essential: true,
    preferences: false,
    analytics: false,
  });

  useEffect(() => {
    const consent = getCookie("cookie_consent");
    if (!consent) {
      setVisible(true);
      onVisibilityChange?.(true);
    }
  }, [onVisibilityChange]);

  const closeBanner = () => {
    setVisible(false);
    onVisibilityChange?.(false);
  };

  const acceptAll = () => {
    setCookie("cookie_consent", "accepted");
    setCookie("cookie_preferences", {
      essential: true,
      preferences: true,
      analytics: true,
    });
    closeBanner();
  };

  const rejectAll = () => {
    setCookie("cookie_consent", "rejected");
    setCookie("cookie_preferences", {
      essential: true,
      preferences: false,
      analytics: false,
    });
    closeBanner();
  };

  const savePreferences = () => {
    setCookie("cookie_consent", "custom");
    setCookie("cookie_preferences", prefs);
    setShowPrefs(false);
    closeBanner();
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="fixed bottom-4 left-0 right-0 z-[999] px-4 sm:px-6"
        >
          {/* FLOATING CARD */}
          <div className="mx-auto max-w-7xl bg-black text-white rounded-xl shadow-2xl">
            <div className="px-6 py-5">
              {!showPrefs ? (
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  
                  {/* LEFT TEXT */}
                  <p className="text-sm leading-relaxed text-gray-200">
                    We use essential cookies to make our site work. With your
                    consent, we may also use non-essential cookies to improve
                    user experience and analyze website traffic. By clicking{" "}
                    <span className="font-semibold text-white">“Accept”</span>,
                    you agree to our website’s cookie use as described in our{" "}
                    <span className="underline cursor-pointer">
                      Cookie Policy
                    </span>.
                    <button
                      onClick={() => setShowPrefs(true)}
                      className="ml-2 underline text-white font-medium"
                    >
                      Preferences
                    </button>
                  </p>

                  {/* RIGHT BUTTONS */}
                  <div className="flex gap-3 shrink-0">
                    <button
                      onClick={rejectAll}
                      className="px-6 py-2 rounded-md border border-white text-white hover:bg-white hover:text-black transition font-medium"
                    >
                      Reject
                    </button>

                    <button
                      onClick={acceptAll}
                      className="px-6 py-2 rounded-md bg-white text-black hover:bg-gray-200 transition font-medium"
                    >
                      Accept
                    </button>
                  </div>
                </div>
              ) : (
                /* PREFERENCES PANEL */
                <div className="max-w-md">
                  <h3 className="text-lg font-semibold mb-4 text-white">
                    Cookie Preferences
                  </h3>

                  <label className="flex items-center gap-3 mb-3 text-gray-200">
                    <input type="checkbox" checked disabled />
                    Essential cookies (required)
                  </label>

                  <label className="flex items-center gap-3 mb-3 text-gray-200">
                    <input
                      type="checkbox"
                      checked={prefs.preferences}
                      onChange={(e) =>
                        setPrefs({
                          ...prefs,
                          preferences: e.target.checked,
                        })
                      }
                    />
                    Preferences cookies
                  </label>

                  <label className="flex items-center gap-3 mb-6 text-gray-200">
                    <input
                      type="checkbox"
                      checked={prefs.analytics}
                      onChange={(e) =>
                        setPrefs({ ...prefs, analytics: e.target.checked })
                      }
                    />
                    Analytics cookies
                  </label>

                  <div className="flex gap-3">
                    <button
                      onClick={savePreferences}
                      className="px-5 py-2 bg-white text-black rounded-md font-medium"
                    >
                      Save Preferences
                    </button>

                    <button
                      onClick={() => setShowPrefs(false)}
                      className="px-5 py-2 border border-white rounded-md text-white"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
