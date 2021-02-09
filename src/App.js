import { ChatEngine } from 'react-chat-engine';

// component
import ChatFeed from './components/ChatFeed';

// Styles
import './App.css';
import LoginForm from './components/LoginForm';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  console.log(localStorage.getItem('username'));
  return (
    <ChatEngine
      height="100vh"
      projectID="072b4c5f-912e-45ee-82c0-e0c3f54449b2"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
