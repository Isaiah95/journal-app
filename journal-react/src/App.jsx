import { useState } from 'react';

function App() {
  return (
    <div>
      <header>
        <h1>Journal App</h1>
      </header>

      <main>
        <form>
          <input type="text" id="title" placeholder="Title" />
          <textarea rows="4" cols="50" placeholder="Write your entry here..."></textarea>
          <input type="submit" value="Submit" />
        </form>
        <section className="entries">
        <h2>Journal Entries</h2>

        </section>
      </main>

    
    </div>
  );
}

export default App;