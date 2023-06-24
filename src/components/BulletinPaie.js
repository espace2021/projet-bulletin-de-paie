import React from 'react'

const BulletinPaie = () => {
  return (
      
    <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
            <div className="col-md-3 border-right">

            </div>
            <div className="col-md-9 border-right">
                <div className="p-3 py-5">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h4 className="text-right" style={{"color":"blue","textDecoration": "underline"}}>Bulletin salarié</h4>
                    </div>
                    <div className="row mt-2">
                        <div className="col-md-4">
                            <label className="labels">N° bulletin</label>
                            <input type="text" className="form-control" placeholder="N° bulletin" value=""/>
                        </div>
                        <div className="col-md-4">
                            <label className="labels">Mois</label>
                            <input type="text" className="form-control" placeholder="Mois" value=""/>
                        </div>
                        <div className="col-md-4">
                            <label className="labels">Année</label>
                            <input type="text" className="form-control" value="" placeholder="Année"/>
                        </div>
                    </div>
                    <div className="row mt-2">
                        
                        <div className="col-md-4">
                            <label className="labels">Matricule</label>
                            <select className="form-control" id="MatriculeSelect">
                                <option>M1</option>
                                <option>M2</option>
                                <option>M3</option>
                                <option>M4</option>
                                <option>M5</option>
                              </select>
                        </div>
                        <div className="col-md-4">
                            <label className="labels">Nom</label>
                            <input type="text" className="form-control" placeholder="Nom" value=""/>
                        </div>
                        <div className="col-md-4">
                            <label className="labels">Prénom</label>
                            <input type="text" className="form-control" value="" placeholder="Prénom"/>
                        </div>
                    </div>

                    <hr/>
                    <button className="btn btn-warning"  >Calculer</button>
                    <br /><br />
                    <table style={{"width":"100%"}}>
                        <tr>
                            <th>Code</th>
                            <th>Intitulé</th>
                            <th>Montant</th>
                        </tr>
                        <tr>
                            <td >100</td>
                            <td>Salaire de base</td>
                            <td>1500</td>
                        </tr>
                        <tr>
                            <td>200</td>
                            <td>Prime de présence</td>
                            <td>120</td>
                        </tr>
                        <tr>
                            <td>300</td>
                            <td>Prime de transport</td>
                            <td>200</td>
                        </tr>
                    </table>
                    <hr/>
                    <div className="row">   
                        <label className="labels col-md-8">
                            <h4>Net à payer</h4>
                        </label> 
                        <div className="col-md-4">
                            <input type="number" className="form-control text-right" value="1820" placeholder="Net à Payer" readonly/>
                        </div>
                    </div>
                    <hr/>
                </div>
                    <div className="mt-5 text-center">
                        <button className="btn btn-success profile-button" type="button">Nouveau</button>
                        <button className="btn btn-primary profile-button" type="button">Enregistrer</button>
                        <button className="btn btn-primary profile-button" type="button">Modifier</button>
                        <button className="btn btn-danger  profile-button" type="button">Supprimer</button>
                    </div>
            </div>
        </div>
    </div>
 
  
  )
}

export default BulletinPaie
