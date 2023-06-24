export const  services= [
    {
      id: 1,
      code: "S1",
      intitulé: "finance"
    },
    {
      id: 2,
      code: "S2",
      intitulé: "informatique"
    },
    {
      id: 4,
      code: "S4",
      intitulé: "approvisionnement"
    },
    {
      id: 5,
      code: "S5",
      intitulé: "magasin"
    }
  ];
 export const salaries = [
    {
      id: "1",
      matricule: "22001",
      nom: "Sellami",
      prenom: "Mohamed",
      telephone: "",
      adresse: "",
      email: "",
      basepaie: [
        {
          intitule: "Salaire de Base",
          montant: 45
        },
        {
          intitule: "Prime de transport",
          montant: 7
        },
        {
          intitule: "Prime de présence",
          montant: 5
        }
      ]
    },
    {
      id: "2",
      matricule: "22002",
      nom: "Jerbi",
      prenom: "Wassim",
      telephone: "",
      adresse: "",
      email: "",
      basepaie: [
        {
          intitule: "Salaire de Base",
          montant: 55
        },
        {
          intitule: "Prime de transport",
          montant: 8
        },
        {
          intitule: "Prime de présence",
          montant: 6
        }
      ]
    }
  ];
  export const bulletin= [
    {
      id: "1",
      mois: 5,
      annee: 2023,
      matricule: "22001",
      numbulletin: "05-2023-22001",
      jourspresence: 25,
      tauxcnss: 19,
      rubriquepaie: [
        {
          code: 1,
          intitule: "Salaire de Base",
          nbjours: 25,
          Base: "45",
          Taux: "",
          gain: 1125,
          retenue: 0
        },
        {
          code: 2,
          intitule: "Prime de transport",
          nbjours: 25,
          Base: "7",
          Taux: "",
          gain: 175,
          retenue: 0
        },
        {
          code: 3,
          intitule: "Prime de présence",
          nbjours: 25,
          Base: "5",
          Taux: "",
          gain: 125,
          retenue: 0
        },
        {
          code: 4,
          intitule: "CNSS",
          nbjours: "",
          Base: "270.75",
          Taux: "19%",
          gain: "",
          retenue: 142
        }
      ]
    },
    {
      id: "2",
      mois: 5,
      annee: 2023,
      matricule: "22002",
      numbulletin: "05-2023-22002",
      jourspresence: 27,
      tauxcnss: 19,
      rubriquepaie: [
        {
          code: 1,
          intitule: "Salaire de Base",
          nbjours: 27,
          Base: "55",
          Taux: "",
          gain: 1325,
          retenue: 0
        },
        {
          code: 2,
          intitule: "Prime de transport",
          nbjours: 27,
          Base: "8",
          Taux: "",
          gain: 185,
          retenue: 0
        },
        {
          code: 3,
          intitule: "Prime de présence",
          nbjours: 27,
          Base: "6",
          Taux: "",
          gain: 135,
          retenue: 0
        },
        {
          code: 4,
          intitule: "CNSS",
          nbjours: "",
          Base: "380.75",
          Taux: "19%",
          gain: "",
          retenue: 162
        }
      ]
    }
  ];