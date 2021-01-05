import React, { useEffect } from 'react';
import { FiAlertCircle, FiCheckCircle, FiInfo, FiXCircle } from 'react-icons/fi';

import { useToast, ToastMessage } from '../../hooks/ToastContext';

import { Container } from './styles';

interface ToastProps {
  message: ToastMessage
  style: object
}

const icons = {
  success: <FiCheckCircle size={24}/>,
  error: <FiAlertCircle size={24}/>,
  info: <FiInfo size={24}/>
}

const Toast: React.FC<ToastProps> = ({ message, style }) => {
  const { removeToast } = useToast()

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id)
    }, 3000)

    return () => {
      clearTimeout(timer);
    }
  }, [message.id, removeToast])

  return (
    <Container type={message.type} style={style}>
      {icons[message.type || 'info']}

      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>

      <button onClick={() => removeToast(message.id)}>
        <FiXCircle size={24} />
      </button>
    </Container>
  );
}

export default Toast;