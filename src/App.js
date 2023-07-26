import './App.css';
import Button from './components/Button/Button';
import Form from './components/Form/Form'
import Welcome from './components/FormRegistration/FormWelcome';
import ImageSlider from './components/ImageSlider/ImageSlider'
import SendMessageForm from './components/SendMesageForm/SendMessageForm';

function App() {
  return (
    <div className="App">
      <Button />
      <Form />
      <ImageSlider />
      <Welcome />
      <SendMessageForm />
    </div>
  );
}

export default App;
