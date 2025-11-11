

function SearchBar ({ fetchCars }) {
    const handleClick = () => {
        fetchCars('cars');
    };

    return (
        <section>
            <input />
            <button onClick={handleClick}>Buscar</button>
        </section>
    )
};

export default SearchBar;