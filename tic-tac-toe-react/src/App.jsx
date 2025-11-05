import { useState } from 'react'
import './App.css'

// Guardar turnos de los jugadores de la partida
const TURNS = {
  X: '❌',
  O: '⭕️'
} 

// Crear un componente "Square" que va a guardar cada uno de los cuadrados del tablero
// children: Será el contenido del cuadrado (una X o una O)
// updateBoard: Se utilizará como forma de actualizar el tablero
// index: Saber qué índice tiene cada cuadrado del tablero
const Square = ({ children, isSelected, updateBoard, index }) => {
  // Mostrar visualmente a qué jugador le toca el turno
  // Si el turno actual tiene la prop "isSelected", significa que es turno de dicho jugador,
  // por lo que se añadiría el estilo de la clase CSS "is-selected" a dicho elemento,
  // sino dicho elemento tendría únicamente la clase "square"
  const selectedTurn = `square ${isSelected ? 'is-selected' : ''}`
  // Función para manejar los clicks del usuario
  // Se encarga de llamar a la función "updateBoard" cada vez que el usuario hace click en un cuadrado
  // para cambiar el turno y actualizar la info de dicho cuadradado
  const handleClick = () => {
    // Le pasamos el índice a la función "updateBoard" para saber qué cuadrado es el que se tiene que actualizar
    updateBoard(index)
  }

  return (
    // Le pasamos el "className" ya que es la variable que se encarga de saber
    // a quién le toca jugar
    // Además, ejecutamos la función "updateBoard" cuando se haga click en algún cuadrado del tablero
    // para mostrar el turno correspondiente en el mismo
    <div onClick={handleClick} className={selectedTurn}>
      {children} 
    </div> 
  )
}

// Almacenar todas las combinaciones existentes para que exista un ganador
const WINNER_COMBOS = [
  // Líneas horizontales
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // Líneas verticales
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // Diagonales
  [0, 4, 8],
  [2, 4, 6]
]

// Función para comprobar si existe un ganador en la partida (se le pasa como 
// parámetro el tablero del juego en el que tiene que comprobar las combinaciones)
const checkWinner = (checkBoard) => {
  for (const combo of WINNER_COMBOS) {
    // Recuprar cada combinación
    const [a, b, c] = combo

    // Comprobar si las tres posiciones del combo coinciden
    if (checkBoard[a] === checkBoard[b] && checkBoard[a] === checkBoard[c]) {
      // Devolver la primera posición de la combinación para saber el ganador de 
      // la partida (X u O)
      return checkBoard[a]
    }

  }
  // Por otro lado, si no existe ganador, devolver "null"
  return null
}

function App() {
  // Crear estado para manejar el tablero (para que se muestre una X o una O dependiendo 
  // del usuario que ha hecho click en el cuadrado)
  // El tablero estará compuesto por un array de 9 posiciones (ya que tiene 3 filas) y se rellenará con
  // las X o las O
  const [board, setBoard] = useState(Array(9).fill(null))
  // Estado para manejar los turnos de cada jugador
  // Inicializar el estado con el turno de la X ya que va a ser el primer jugador en comenzar a jugar
  const [turn, setTurn] = useState(TURNS.X)
  // Crear estado para saber cuando existe un ganador
  // Por defecto, el estado es "null" ya que al inicio de la partida aún no existe un ganador
  // SI el estado fuera "false", significa que ha habido un empate
  const [winner, setWinner] = useState(null)

  // Crear función para actualizar el tablero con la información correspondiente después de cada turno
  // Pasarle a la función el parámetro "index" para saber en qué cuadrado del tablero ha hecho click el usuario
  const updateBoard = (index) => {
    // Evitar que se actualice el contenido  del cuadrado si ya existe algo en él o si ya hay
    // un ganador de la partida
    // Si hay contenido en la posición en la que ha hecho click el usuario o ya hay 
    // un ganador, no hacer nada
    if (board[index] || winner) return

    // Almacenar el contenido del estado "board" en un nuevo array (hacer una copia del estado, ya que es inmutable)
    const newBoard = [...board]
    // Guardar el estado "turn" que hace referencia al turno del jugador en el índice del cuadrado en el que ha hecho click el usuario
    // Se guardará una X o una O
    // ❌ Poner "board" en vez de "newBoard" en este caso estaría mal ya que los estados de un componente de React
    // SIEMPRE deben ser tratados como inmutables, es decir, no debes modificar el estado ya que lo que puede
    // ocurrir es que existan problemas de renderizado ya que has llamado/modificado el estado
    // sin utilizar el "setBoard"
    newBoard[index] = turn
    // Actualizar el estado pasándole el nuevo array creado con el contenido del estado (el turno correspondiente) para mostrarlo en el cuadrado indicado
    setBoard(newBoard)
    // Calcular el nuevo turno de la partida
    // Si el turno actual es del jugador X, cambiarlo al jugador O ya que será el siguiente turno,
    // y si el turno es del jugador O cambiarlo al jugador X
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    // Actualizar el turno del juego cada vez que se hace click en un cuadrado
    // Actualizar el "newTurn"
    // Para poder actualizar el estado necesitamos llamar al "setTurn"
    setTurn(newTurn)

    // Comprobar si existe un ganador
    // IMPORTANTE!! Se pasa el nuevo board ya que si se pasa como argumento el estado "board"
    // se va a producir un error, ya que como la actualización de los estados en React es
    // asíncrona, si se pasa el estado no se habrá recibido aún el nuevo valor que tiene
    // almacenado este, sino que se estaría utilizando el valor anteriormente guardado en dicho
    // estado
    const newWinner = checkWinner(newBoard)

    // Si existe un ganador
    if (newWinner) {
      // Actualizar el estado "winner" con la info del nuevo ganador
      setWinner(newWinner)
    }    
  }

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <section className="game">
        {/* Dibujar tablero del juego distribuyendo las 9 posiciones del array en 3 filas */}
        {
          board.map((_, index) => {
            return (
              // Devolver el componente "Square" para dibujar cada uno de los cuadrados del tablero
              // Se le pasa por parámetros la "key" que será el identificador único que tiene cada uno de los cuadrados,
              // el "index" que es la prop que necesita el componente,
              // y el "updateBoard" que se encargará de actualizar el tablero cada vez que haya una nueva jugada
              // IMPORTANTE: No pasar la ejecución de la función como parámetro ya que sino se estaría ejecutando dicha función 
              // cada vez que se renderiza el componente, pero lo que se quiere es renderizar dicha función solo cuando nosotros queramos, en este caso, 
              // sólo cuando el usuario hace click en algún cuadrado
              <Square key={index} index={index} updateBoard={updateBoard}>
                {board[index]} 
              </Square>
            )
          })
        }
      </section>
      {/* Sección para saber a quién le toca jugar */}
      <section className="turns">
        {/* Si el estado de "turn" tiene el valor "TURNS.X" significa que le toca jugar a la X */}
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        {/* Si el estado de "turn" tiene el valor "TURNS.O" significa que le toca jugar a la O */}
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
    </main>
  )
}

export default App
