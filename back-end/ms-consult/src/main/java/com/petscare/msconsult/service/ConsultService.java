package com.petscare.msconsult.service;

import com.petscare.msconsult.repository.IConsult;
import com.petscare.msconsult.model.Consult;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ConsultService implements IConsultService {

    IConsult repositoryConsult;

    public ConsultService(IConsult repositoryConsult) {
        this.repositoryConsult = repositoryConsult;
    }

    @Override
    public List<Consult>getAllConsult() {return repositoryConsult.findAll();}
    @Override
    public Optional<Consult> getConsultById(Long id) {return repositoryConsult.findById(id);}
    @Override
    public Consult createConsult(Consult consult) {return repositoryConsult.save(consult);}
    @Override
    public void deleteConsult(Long id) throws Exception {
        Optional<Consult> consultSearched = getConsultById(id);
        if(consultSearched.isPresent()){
            repositoryConsult.deleteById(id);
        }else{
            throw new Exception("El tipo de mascota con el id = "+id+" no existe. Ingrese un id correcto");
        }
    }
    @Override
    public Consult updateConsult(Consult consult) throws Exception {
        Optional<Consult> consultSearched = getConsultById(consult.getId());
        if(consultSearched.isPresent()){
            return repositoryConsult.save(consult);
        }else{
            throw new Exception("El tipo de mascota con el id = "+ consult.getId()+" no existe. Ingrese un id correcto");
        }
    }



}
