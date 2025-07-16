const Hero = () => {
  return (
    <section className="bg-gray-900 text-white px-6 py-12 min-h-screen">
      <div className="text-center mb-10">
        <h1 className="text-sm font-semibold tracking-widest text-gray-400 mb-2">COMÉ A TU MANERA</h1>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          ¿A dónde querés salir a comer?
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {["Restaurante 1 - $$", "Restaurante 2", "Restaurante 3", "Restaurante 4"].map((nombre, index) => (
          <div
            key={index}
            className="bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 transition"
          >
            {nombre}
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full font-semibold">
          Ayuda
        </button>
        <button className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-full font-semibold">
          Quiero registrar mi restaurante
        </button>
      </div>

      <div className="max-w-2xl mx-auto mb-12 text-center">
        <h3 className="text-2xl font-semibold mb-4">Acerca de Miam</h3>
        <p className="text-lg leading-relaxed">
          En Miam el momento de elegir dónde salir a comer deja de ser un problema.
          Te ayudamos a encontrar ese restaurante, bar o cafetería que mejor se adapta
          a tu estilo, antojo y necesidad. Nuestro amplio catálogo de restaurantes contiene 
          toda la información necesaria para dar con tu lugar ideal. En Miam comés mejor, 
          porque comés a tu manera.
        </p>
      </div>

      <div className="max-w-2xl mx-auto text-center">
        <h3 className="text-2xl font-semibold mb-4">¿Sos propietario de un restaurante?</h3>
        <p className="text-lg leading-relaxed">
          ¡Te invitamos a unirte a nuestro catálogo! Llevá tu propuesta gastronómica a las
          personas que buscan lo que vos ofrecés.
        </p>
      </div>

      {/* Espacio publicitario (placeholder) */}
      <div className="mt-16 border border-dashed border-gray-600 rounded-lg p-12 text-center text-gray-400">
        Espacio publicitario
      </div>
       {/* acá inicialmente mapeas data local y después desde la base de datos */}
    </section>
  );
};

export default Hero;
