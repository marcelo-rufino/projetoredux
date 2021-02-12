const ESTADO_INICIAL = {
    musica: [{}],
    playlist: [
      {
        id: 1,
        titulo: "Água Viva",
        cantor: "Oficina G3",
        ano: 2020,
        img:"https://i.makeagif.com/media/7-17-2015/FyPrbu.gif",
      },
      {
        id: 2,
        titulo: "Pastor Lucas",
        cantor: "Deus te ama muito",
        ano: 2020,
        img:"https://pa1.narvii.com/6514/1f7858ae9ef45b70565378d265eff9d64ef82e72_hq.gif",
      },
      {
        id: 3,
        titulo: "Eli Soares",
        cantor: "Os anjos te louvam",
        ano: 2020,
        img:"https://pa1.narvii.com/6514/1f7858ae9ef45b70565378d265eff9d64ef82e72_hq.gif",
      },
      {
        id: 4,
        titulo: "Gabriela Rocha",
        cantor: "Hosana",
        ano: 2020,
        img:"https://pa1.narvii.com/6514/1f7858ae9ef45b70565378d265eff9d64ef82e72_hq.gif",
      },
      {
        id: 5,
        titulo: "Casa Worship",
        cantor: "A casa é sua",
        ano: 2020,
        img:"https://pa1.narvii.com/6514/1f7858ae9ef45b70565378d265eff9d64ef82e72_hq.gif",
      }
    ],
  };
  
  export default function musicas(state = ESTADO_INICIAL, action) {
    if (action.type === "TOCAR_MUSICA") {
      return {
        ...state,
        musica: action.musicas, //objeto musica=>armazenar o state
      };
    }
    if (action.type === "PARAR_MUSICA") {
      return {
        ...state,
        musica: ESTADO_INICIAL, //objeto com todas as musicas
      };
    }
    return state;
  }