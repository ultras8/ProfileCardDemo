import ProfileCard from './components/ProfileCard'

function App() {
  const mapContact = new Map();
  mapContact.set("line","https://line.me/ti/p/bM4oXEFbI9");
  mapContact.set("mail","mailwans1112@gmail.com");
  mapContact.set("phone","0841195690");
  return (
    <div className='background'>
      <ProfileCard
        name = "Stefan T."
        status = "Front-end Developer"
        contact = {mapContact}
      />

    </div>
  )
}

export default App