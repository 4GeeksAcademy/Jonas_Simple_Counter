import React, { Component } from "react"; // {Component} = es una clase que nos ayuda a crear un componente en React. 

class Home extends Component { // estamos creando un nuevo componente llamado Home
  constructor(props) { // preparación para que el componente funcione
    super(props); //Llama al constructor de la clase base (Component), que es necesario para que el componente funcione correctamente.
       // Estado inicial del contador
    this.state = { seconds: 0 }; // donde guardamos información que va cambiando, guarda el tiempo que ha pasado
  }
   // Si no llamas a super(props), no podrás acceder a this en el constructor de tu componente. 
   // this es lo que te permite acceder al estado (this.state) y a otras funciones dentro del componente.

  componentDidMount() { //Es como decir "cuando ya esté listo el componente, haz algo". En este caso, queremos iniciar el contador.
    // Inicia el contador cuando el componente se monta
    this.interval = setInterval(() => { 
      this.setState((prevState) => ({ //  actualizar el valor de seconds
        seconds: prevState.seconds + 1 // el contador de segundos suba 1 cada segundo.
      }));
    }, 1000); // "cada 1000 milisegundos (1 segundo), haz lo que está dentro de las llaves {}"
  }

  componentWillUnmount() { //se ejecuta antes de que el componente desaparezca de la pantalla.
    // Limpiar el intervalo cuando el componente se desmonte
    clearInterval(this.interval); // Detenemos el contador, para que no siga corriendo en segundo plano cuando ya no estemos viendo este componente.
  } // Si alguien navega a otra parte de la aplicación o si el componente ya no se necesita, se limpia todo lo que estuvimos haciendo.

  render() { // se encarga de decirle a React cómo debe verse este componente.
    // Convertir los segundos en formato de 4 dígitos
    const timeString = this.state.seconds.toString().padStart(6, "0"); //  toma el número de segundos y lo convierte en un string
    //le dice que la cadena de texto tenga al menos 4 caracteres". Si el número de segundos tiene menos de 4 dígitos, los completa con ceros al principio.

    return (
      <div className="container d-flex justify-content-center mt-5">
        <div className="counter bg-dark text-white d-flex align-items-center p-3 rounded">
          {/* Mantiene el icono del reloj en el primer dígito */}
          <div className="digit bg-secondary p-3 m-1 rounded">
            <i className="fas fa-clock"></i>
          </div>

          {/* Mostrar los 4 dígitos del contador */}
          {/* toma la cadena timeString que tiene los segundos convertidos a texto, 
          la dividimos en un array de caracteres, por ejemplo, "0001" se convierte en ["0", "0", "0", "1"]), 
          y luego usamos .map() para mostrar cada uno de esos caracteres como un div individual (cada dígito en su propia caja).*/}
          {timeString.split("").map((digit, index) => (
            <div key={index} className="digit bg-secondary p-3 m-1 rounded">
              {digit}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
