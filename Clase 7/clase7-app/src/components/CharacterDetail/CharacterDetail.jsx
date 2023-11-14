

export const CharacterDetail = ({name, species, location, image, gender}) => {
  return (
    <div className="border border-3 p-3 d-flex flex-column m-2"> 
    <div className="d-flex justify-content-center">
        <img src={image}alt="" />
    </div>
    <p>Nombre:{name}</p>
    <p>Especie:{species}</p>
    <p>Genero: {gender}</p>
    <p>Planeta: {location.name}</p>
    </div>
  )
}
