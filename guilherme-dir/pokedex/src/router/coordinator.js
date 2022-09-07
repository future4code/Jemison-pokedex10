
export const goToHomePage = (navigate) => { navigate("/") }

export const goToPokedex = (navigate) => { navigate("/pokedex") }

export const goToDetailPage = (navigate, name) => { navigate(`/details?id=${name}`)}

