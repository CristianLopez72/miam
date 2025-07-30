const RestaurantList = () => (
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
);

export default RestaurantList;
