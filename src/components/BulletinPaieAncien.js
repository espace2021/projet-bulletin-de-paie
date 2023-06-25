import React,{useState,useMemo,useCallback} from 'react'

import {salaries,bulletin} from '../makedata'

const BulletinPaie = () => {


  const [dataSalaries, setDataSalaries] = useState();
  const [dataBulletins, setDataBulletins] = useState();

  const fetchBulletins = useCallback(async (matricule) => { 
    var newArray = bulletin.filter(function (el) { 
      return el.matricule===matricule;
    });

    setDataBulletins(newArray[0]);
     console.log(newArray);
  }, []);

  const fetchSalaries = useCallback(async (idsal) => { 
    var newArray = salaries.filter(function (el) { 
      return el.id===idsal;
    });

      setDataSalaries(newArray[0]);
      fetchBulletins(newArray[0].matricule);
  }, []);

  const handleChangeMatricule=(e) => {
    fetchSalaries(e.target.value);
   
  }

  const [net, setNet] = useState();

const sum=useMemo(()=>{
 
 return dataSalaries?.basepaie?.reduce((total,item)=>  
      total+Number(item.montant),0)
},[dataSalaries])

const tot=useMemo(()=>{

 return dataBulletins?.rubriquepaie?.reduce((total,item)=>  
      total+Number(item.gain-item.retenue),0)
},[dataBulletins])

const handleCalcul =useCallback(async () => { 

  setNet(sum+tot)
}, [dataSalaries,dataBulletins]); 

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
                            <label className="labels">Matricule</label>
                            <select className="form-control" 
                            onChange={(e)=>handleChangeMatricule(e)}
                            >
                                <option></option>
                                {salaries.map((salarie)=><option value={salarie.id} key={salarie.id}>
                                    {salarie.matricule}
                                    </option>
                                    )
                                }                              
                            </select>
                        </div>
                        <div className="col-md-4">
                            <label className="labels">Nom</label>
                            <input type="text" className="form-control" placeholder="Nom" 
                            readOnly
                            value={dataSalaries?.nom}
                         />
                        </div>
                        <div className="col-md-4">
                            <label className="labels">Prénom</label>
                            <input type="text" className="form-control"  placeholder="Prénom"
                             readOnly
                             value={dataSalaries?.prenom}
                            />
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-md-4">
                            <label className="labels">N° bulletin</label>
                            <input type="text" className="form-control" placeholder="N° bulletin" 
                              readOnly
                              value={dataBulletins?.numbulletin}
                            />
                        </div>
                        <div className="col-md-4">
                            <label className="labels">Mois</label>
                            <input type="text" className="form-control" placeholder="Mois" 
                             readOnly
                             value={dataBulletins?.mois}
                            />
                   
                        </div>
                        <div className="col-md-4">
                            <label className="labels">Année</label>
                            <input type="text" className="form-control" placeholder="Année"
                              readOnly
                              value={dataBulletins?.annee}
                             />
                          
                        </div>
                    </div>
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
                       {dataBulletins?.rubriquepaie?.map((bp,index)=>  <tr key={index}>
                          
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
                    <hr/>
                    <button className="btn btn-warning"  
                    onClick={()=>handleCalcul()}
                    >Calculer</button>
                    <br /><br />
                    <hr/>
                   
                   
                   <hr/>
                    <div className="row">   
                        <label className="labels col-md-8">
                            <h4>Net à payer</h4>
                        </label> 
                        <div className="col-md-4">
                            <input type="number" className="form-control text-right"  placeholder="Net à Payer" 
                            readOnly
                            value={net}
                            />
                        </div>
                    </div>
                    
                    <hr/>
                </div>
                   
            </div>
        </div>
    </div>
 
  
  )
}

export default BulletinPaie
