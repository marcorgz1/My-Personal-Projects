

function SearchBar ({ onSubmit }) {   
    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit();
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
