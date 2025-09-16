import AddButton from './components/AddButton.tsx'
import ContactCard from './components/ContactCard';

function App() {
  return (
    <>
      <AddButton />
      <ContactCard icon="📞" name="John Doe" email="john@example.com" />
    </>
  )
}

export default App