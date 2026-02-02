import './App.css';

function App() {

  return (
    <>
      <h1>Simple translator app</h1>
      <section className='translation_panels__container'>
        <div className="translation_origin__panel">
          <select name="origin_language_selector" id="origin_language_selector">
            <option value="">Example</option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
          </select>
          <textarea name="to_translate_text" id="to_translate_text" placeholder='Escribe tu texto...' cols="30" rows="10"></textarea>
        </div>
        <div className="translation_destination__panel">
          <select name="destination_language_selector" id="destination_language_selector">
            <option value="">Example</option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
          </select>
          <textarea name="translated_text" id="translated_text" placeholder='Escribe tu texto...' cols="30" rows="10"></textarea>
        </div>
      </section>
      <button className='translate_button'>Traducir</button>
    </>
  );
};

export default App;
