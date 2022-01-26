import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="6afd34d3-73dc-4c4c-b02a-4303c9f50023"
      userName="Shorif"
      userSecret="12345"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
