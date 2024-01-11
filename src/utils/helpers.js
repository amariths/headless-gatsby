export const isRTL = () => {
    if (typeof window !== "undefined") {
      return document.documentElement.dir === "rtl";
    }
    return false;
  };