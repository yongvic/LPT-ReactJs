
interface ToastProps {
  message: string;
  show: boolean;
  onDismiss: () => void;
}

const Toast = ({ message, show, onDismiss }: ToastProps) => {
  if (!show) return null;

  return (
    <div className="fixed bottom-5 right-5 bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg">
      {message}
      <button onClick={onDismiss} className="ml-4 text-white font-bold">X</button>
    </div>
  );
};

export default Toast;
