export const ErrorMessage = ({ children }) => {
  if (!children) return null;

  return <p className='text-red-500'>{children}</p>;
};
