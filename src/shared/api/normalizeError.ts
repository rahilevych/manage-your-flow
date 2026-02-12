// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const normalizeError = (err: any) => {
  const message =
    err.response?.data?.message ||
    err.response?.data?.error ||
    err.message ||
    'Unknown error';

  return {
    message: Array.isArray(message) ? message[0] : message,
    status: err.response?.status,
    code: err.response?.data?.code || 'ERROR',
    originalError: err,
  };
};
