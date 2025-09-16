import AddButton from './components/AddButton.tsx'
import ContactCard from './components/ContactCard';
import ToDoList from './components/ToDoList.tsx';

function App() {
  return (
    <>
      <AddButton />
      <ContactCard icon="📞" name="John Doe" email="john@example.com" />
      <ToDoList />
    </>
  )
}

export default App