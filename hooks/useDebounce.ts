export const useDebounce = <T extends (...args: any[]) => any>(
  fn: T,
  delay: number
) => {
  let timeout: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>): ReturnType<T> => {
    let result: any;
    if (timeout) clearTimeout(timeout); // 기존의 timeout 삭제
    timeout = setTimeout(() => {
      // 새로운 timeout 할당
      result = fn(...args);
    }, delay);
    return result;
  };
};
