import React,{useState,useEffect,useCallback} from 'react'
import axios from 'axios'

const BulletinPaie = () => {

const URL = "http://localhost:3001"
  
const [dataAllSalaries, setDataAllSalaries] = useState([]);

const fetchAllSalaries = useCallback(async () => {
    try {
      const response = await axios.get(URL+"/salaries"); 

      setDataAllSalaries(response.data);
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  }, []);

  useEffect(() => {
    fetchAllSalaries();
  }, [fetchAllSalaries]);

const [dataSalaries, setDataSalaries] = useState([]);

const fetchSalaries = useCallback(async (idsal) => {
    try {
      const response = await axios.get(`${URL}/salaries/${idsal}`); 

      setDataSalaries(response.data);
      } catch (error) {
      console.error('Error fetching services:', error);
    }
  }, []);

  const handleChangeMatricule=(e) => {
    fetchSalaries(e.target.value);
  }


const [dataBulletin, setDataBulletin] = useState([]);


  const fetchBulletins = useCallback(async (idbul) => {
    try {
      const response = await axios.get(`${URL}/bulletin/${idbul}`); 

      setDataBulletin(response.data);
    } catch (error) {
      console.error('Error fetching bulletins:', error);
    }
  }, []);

  useEffect(() => {
    fetchBulletins();
  }, [fetchBulletins]);

  const handleChangeBulletin=(e) => {
    fetchBulletins(e.target.value);
  }
  

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
                            <input type="text" className="form-control" placeholder="N° bulletin" 
                            onChange={(e)=>handleChangeBulletin(e)}
                            />
                        </div>
                        <div className="col-md-4">
                            <label className="labels">Mois</label>
                            <input type="text" className="form-control" placeholder="Mois" 
                             readOnly
                             value={dataBulletin?.mois}/>
                   
                        </div>
                        <div className="col-md-4">
                            <label className="labels">Année</label>
                            <input type="text" className="form-control" placeholder="Année"
                              readOnly
                              value={dataBulletin?.annee}/>
                          
                        </div>
                    </div>
                    <div className="row mt-2">
                        
                        <div className="col-md-4">
                            <label className="labels">Matricule</label>
                            <select className="form-control" 
                            onChange={(e)=>handleChangeMatricule(e)}
                            >
                                <option></option>
                                {dataAllSalaries && dataAllSalaries.length>0  && dataAllSalaries.map((salaries)=><option value={salaries.id} key={salaries.id}>
                                    {salaries.matricule}
                                    </option>
                                    )
                                }                              
                            </select>
                        </div>
                        <div className="col-md-4">
                            <label className="labels">Nom</label>
                            <input type="text" className="form-control" placeholder="Nom" 
                            readOnly
                            value={dataSalaries?.nom}/>
                        </div>
                        <div className="col-md-4">
                            <label className="labels">Prénom</label>
                            <input type="text" className="form-control"  placeholder="Prénom"
                             readOnly
                             value={dataSalaries?.prenom}/>
                        </div>
                    </div>

                    <hr/>
                    <button className="btn btn-warning"  >Calculer</button>
                    <br /><br />
                    <hr/>
                   
                    <table style={{"width":"100%"}}>
                    <thead>
                        <tr>
                            <th>Code</th>
                            <th>Intitulé</th>
                            <th>Montant</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataSalaries?.basepaie?.map((bp,index)=>  <tr key={index}>
                            <td >{index+1}</td>
                            <td>{bp.intitule}</td>
                            <td>{bp.montant}</td>
                        </tr>
                        )}
                       
                    </tbody>
                    </table>
                    <hr/>
                    <hr/>
                   
                   <table style={{"width":"100%"}}>
                   <thead>
                       <tr>
                           
                           <th>Intitulé</th>
                           <th>nbjours</th>
                           <th>Base</th>
                           <th>Montant</th>
                           <th>Taux</th>
                           <th>gain</th>
                           <th>retenue</th>
                       </tr>
                   </thead>
                   <tbody>
                       {dataBulletin?.rubriquepaie?.map((bp,index)=>  <tr key={index}>
                          
                           <td>{bp.intitule}</td>
                           <td>{bp.nbjours}</td>
                           <td>{bp.Base}</td>
                           <td>{bp.Taux}</td>
                           <td>{bp.gain}</td>
                           <td>{bp.retenue}</td>
                       </tr>
                       )}
                      
                   </tbody>
                   </table>
                   <hr/>
                    <div className="row">   
                        <label className="labels col-md-8">
                            <h4>Net à payer</h4>
                        </label> 
                        <div className="col-md-4">
                            <input type="number" className="form-control text-right"  placeholder="Net à Payer" readOnly/>
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
