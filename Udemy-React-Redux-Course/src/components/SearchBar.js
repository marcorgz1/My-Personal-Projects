

function SearchBar ({ onSubmit }) {   
    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit('cars');
    };

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input />
                {/* <button>Send</button> */}
            </form>
        </section>
    );
};

export default SearchBar;
