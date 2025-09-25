export const isLowEndDevice = () => {
  const cores = navigator.hardwareConcurrency || 2;
  const memory = navigator.deviceMemory || 4;
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const isAndroid = /Android/i.test(navigator.userAgent);
  const isOldAndroid = isAndroid && /Android [4-9]/i.test(navigator.userAgent);

  // More aggressive detection for low-end devices
  return cores < 4 || memory < 4 || isMobile || isOldAndroid;
};

export const isVeryLowEndDevice = () => {
  const cores = navigator.hardwareConcurrency || 2;
  const memory = navigator.deviceMemory || 2;
  const isAndroid = /Android/i.test(navigator.userAgent);
  const isSamsung = /Samsung/i.test(navigator.userAgent);

  // Very strict detection for devices like Samsung A23
  return cores <= 2 || memory <= 2 || (isAndroid && isSamsung);
};